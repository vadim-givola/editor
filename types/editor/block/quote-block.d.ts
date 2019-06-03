import { Editor } from '../editor';
import { Block, RawBlock, BlockReader } from './block';
import { TextBasedBlock } from "./text-based-block";
export interface RawQuoteBlock extends RawBlock {
    content: string;
}
export declare class QuoteBlockReader implements BlockReader {
    canParse(rawBlock: RawBlock): Boolean;
    parse(rawBlock: RawBlock, editor: Editor): Block;
}
export declare class QuoteBlock extends TextBasedBlock {
    editor: Editor;
    content: string;
    textarea: HTMLTextAreaElement;
    constructor(editor: Editor, content: string);
    focus(): void;
    getRawContent(): RawBlock;
}
