import { Editor } from '../editor';
import { Block, RawBlock, BlockReader } from './block';
export interface RawTextBlock extends RawBlock {
    content: string;
}
export declare class TextBlockReader implements BlockReader {
    canParse(rawBlock: RawBlock): Boolean;
    parse(rawBlock: RawBlock, editor: Editor): Block;
}
export declare class TextBlock extends Block {
    editor: Editor;
    content: string;
    textarea: HTMLTextAreaElement;
    constructor(editor: Editor, content: string);
    focus(): void;
    getRawContent(): RawBlock;
}
