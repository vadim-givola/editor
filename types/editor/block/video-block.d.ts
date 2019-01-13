import { Editor } from '../editor';
import { Block, RawBlock, BlockReader } from './block';
export declare class VideoBlockReader implements BlockReader {
    canParse(rawBlock: RawBlock): Boolean;
    parse(rawBlock: RawBlock, editor: Editor): Block;
}
export declare class VideoBlock extends Block {
    editor: Editor;
    videoUrl: string;
    uploadPanel: HTMLDivElement;
    uploadIconContainer: HTMLDivElement;
    uploadIcon: HTMLDivElement;
    uploadLabel: HTMLDivElement;
    uploadButton: HTMLButtonElement;
    loadingIcon: HTMLSpanElement;
    inputFile: HTMLInputElement;
    inputTextContainer: HTMLDivElement;
    inputTextLabel: HTMLDivElement;
    inputTextIcon: HTMLSpanElement;
    inputText: HTMLInputElement;
    videoPanel: HTMLDivElement;
    videoElem: HTMLVideoElement;
    videoIframe: HTMLIFrameElement;
    constructor(editor: Editor, videoUrl: string);
    preventDefaults(e: Event): void;
    isAdvancedUpload(): boolean;
    startLoading(): void;
    stopLoading(): void;
    static extractYoutubeId(url: string): string;
    static extractVimeoId(url: string): string;
    updateView(): void;
    focus(): void;
    getRawContent(): RawBlock;
    handleFiles(files: FileList): void;
}
