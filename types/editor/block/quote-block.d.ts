import { Editor } from '../editor';
import { Block, RawBlock, BlockReader } from './block';
export declare class QuoteBlockReader implements BlockReader {
    canParse(rawBlock: RawBlock): Boolean;
    parse(rawBlock: RawBlock, editor: Editor): Block;
}
export declare class QuoteBlock extends Block {
    editor: Editor;
    content: string;
    textarea: HTMLTextAreaElement;
    constructor(editor: Editor, content: string);
    focus(): void;
    getRawContent(): RawBlock;
}
