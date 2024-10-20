import { Block } from "./block";
import { Editor } from "../editor";
export declare abstract class TextBasedBlock extends Block {
    editor: Editor;
    textarea: HTMLTextAreaElement | null;
    protected debouncedTriggerOnChange: () => void;
    constructor(editor: Editor);
    /**
     * Redraw the block and trigger input events for proper resizing
     */
    redraw(): void;
    /**
     * Prevents new lines in the textarea (enter key is disabled)
     */
    enableNewLinePrevention(): void;
    /**
     * Automatically resizes the textarea to fit its content
     */
    enableAutoresizing(): void;
    /**
     * Triggers the editor's onChange callback with the updated content
     */
    private triggerOnChange;
    /**
     * Debounce utility to delay execution of a function
     */
    private debounce;
}
