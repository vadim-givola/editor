import { Control } from './control';
import { Block, RawBlock } from './block/block';
export interface EditorOptions {
    content: Array<RawBlock>;
    uploadImage?: (file: File, successCallback: (url: string) => void, failureCallback: (error: string) => void) => void;
}
export declare class Editor {
    elem: HTMLDivElement;
    options: EditorOptions;
    blocks: Array<Block>;
    lastControl: Control;
    constructor(elem: HTMLDivElement, options: EditorOptions);
    add(block: Block, beforeBlock: Block): void;
    remove(block: Block): void;
    getContent(): Array<RawBlock>;
    private render;
}
