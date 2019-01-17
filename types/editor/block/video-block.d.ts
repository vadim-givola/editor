import { Editor } from '../editor';
import { Block, RawBlock, BlockReader } from './block';
export interface RawVideoBlock extends RawBlock {
    url: string;
}
export declare class VideoBlockReader implements BlockReader {
    canParse(rawBlock: RawBlock): Boolean;
    parse(rawBlock: RawBlock, editor: Editor): Block;
}
export declare class VideoBlock extends Block {
    editor: Editor;
    videoUrl: string;
    uploadPanel: HTMLDivElement;
    inputTextContainer: HTMLDivElement;
    inputTextLabel: HTMLDivElement;
    inputTextIcon: HTMLSpanElement;
    inputText: HTMLInputElement;
    videoPanel: HTMLDivElement;
    videoElem: HTMLVideoElement;
    videoIframe: HTMLIFrameElement;
    constructor(editor: Editor, videoUrl: string);
    static extractYoutubeId(url: string): string;
    static extractVimeoId(url: string): string;
    updateView(): void;
    focus(): void;
    getRawContent(): RawBlock;
}
