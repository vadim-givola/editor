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
    constructor(editor: Editor, url: string);
    handleFiles(files: FileList): void;
    preventDefaults(e: Event): void;
    startLoading(): void;
    stopLoading(): void;
    isAdvancedUpload(): boolean;
    updateView(): void;
    focus(): void;
    getRawContent(): RawBlock;
}
