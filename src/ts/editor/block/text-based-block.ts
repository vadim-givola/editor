import { Block } from "./block";
import { Editor } from "../editor";

export abstract class TextBasedBlock extends Block {
  textarea: HTMLTextAreaElement;

  private debouncedTriggerOnChange: () => void;

  constructor(public editor: Editor) {
    super(editor);
    
    // Debounce the onChange method with a 300ms delay
    this.debouncedTriggerOnChange = this.debounce(() => {
      this.triggerOnChange();
    }, 300);

    this.enableInputListener(); // Add the input listener
  }

  /**
   * Redraw the block and trigger input events for proper resizing
   */
  redraw() {
    if (!this.textarea) {
      return;
    }
    let evt = document.createEvent("Event");
    evt.initEvent("input", true, true);
    this.textarea.dispatchEvent(evt);
  }

  /**
   * Prevents new lines in the textarea (enter key is disabled)
   */
  enableNewLinePrevention(): void {
    this.textarea.addEventListener("keypress", (ev) => {
      // 13 is the enter key
      if ((ev as KeyboardEvent).keyCode === 13) {
        ev.preventDefault();
      }
    });
  }

  /**
   * Automatically resizes the textarea to fit its content
   */
  enableAutoresizing(): void {
    this.textarea.addEventListener("input", () => {
      // Don't resize the textarea to be smaller than 10px
      if (this.textarea.scrollHeight > 10) {
        this.textarea.style.height = "auto";
        this.textarea.style.height = `${this.textarea.scrollHeight}px`;
      }
    });

    // Trigger a dummy event to set the correct height after the DOM is initialized
    window.addEventListener(
      "DOMContentLoaded",
      () => {
        this.redraw();
      },
      false
    );

    setTimeout(() => {
      this.redraw();
    }, 1);
  }

  /**
   * Enables input listener to trigger the editor's onChange event with debounce
   */
  private enableInputListener() {
    this.textarea.addEventListener("input", () => {
      this.debouncedTriggerOnChange();
    });
  }

  /**
   * Triggers the editor's onChange callback with the updated content
   */
  private triggerOnChange() {
    if (this.editor.options.onChange) {
      this.editor.options.onChange(this.editor.getContent());
    }
  }

  /**
   * Debounce utility to delay execution of a function
   */
  private debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, wait);
    };
  }
}
