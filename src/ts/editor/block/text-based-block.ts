import { Block } from "./block";
import { Editor } from "../editor";

export abstract class TextBasedBlock extends Block {
  textarea: HTMLTextAreaElement | null = null; // textarea is now nullable

  protected debouncedTriggerOnChange: () => void;

  constructor(public editor: Editor) {
    super(editor);

    // Debounce the onChange method with a 300ms delay
    this.debouncedTriggerOnChange = this.debounce(() => {
      this.triggerOnChange();
    }, 300);
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
    if (!this.textarea) {
      return;
    }

    this.textarea.addEventListener("input", () => {
      if (this.textarea!.scrollHeight > 10) {
        this.textarea!.style.height = "auto";
        this.textarea!.style.height = `${this.textarea!.scrollHeight}px`;
      }
    });

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
