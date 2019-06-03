import { Editor } from '../editor';
import { Block, BlockReader, RawBlock } from './block';
import { TextBasedBlock } from "./text-based-block";
export interface RawTextBlock extends RawBlock {
    content: string;
}
export declare class TextBlockReader implements BlockReader {
    canParse(rawBlock: RawBlock): Boolean;
    parse(rawBlock: RawBlock, editor: Editor): Block;
}
export declare class TextBlock extends TextBasedBlock {
    editor: Editor;
    content: string;
    textarea: HTMLTextAreaElement;
    constructor(editor: Editor, content: string);
    focus(): void;
    getRawContent(): RawBlock;
}
