import { Editor } from '../editor';
import { Block, RawBlock, BlockReader } from './block';
export interface RawImageBlock extends RawBlock {
    url: string;
}
export declare class ImageBlockReader implements BlockReader {
    canParse(rawBlock: RawBlock): Boolean;
    parse(rawBlock: RawBlock, editor: Editor): Block;
}
export declare class ImageBlock extends Block {
    editor: Editor;
    url: string;
    uploadPanel: HTMLDivElement;
    uploadIcon: HTMLDivElement;
    uploadLabel: HTMLDivElement;
    uploadButton: HTMLButtonElement;
    loadingIcon: HTMLSpanElement;
    inputFile: HTMLInputElement;
    imagePanel: HTMLDivElement;
    img: HTMLImageElement;
    private debouncedTriggerOnChange;
    constructor(editor: Editor, url: string);
    private setupListeners;
    private addDragAndDropListeners;
    handleFiles(files: FileList): void;
    /**
     * Triggers the editor's onChange callback with the updated content
     */
    private triggerOnChange;
    /**
     * Debounce utility to delay execution of a function
     */
    private debounce;
    startLoading(): void;
    stopLoading(): void;
    isAdvancedUpload(): boolean;
    preventDefaults(e: Event): void;
    updateView(): void;
    focus(): void;
    getRawContent(): RawBlock;
}
