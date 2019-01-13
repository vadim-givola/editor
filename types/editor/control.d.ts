import { Block } from './block/block';
import { Editor } from './editor';
export declare class Control {
    editor: Editor;
    block: Block;
    elem: HTMLDivElement;
    dashboard: HTMLDivElement;
    expandHandle: HTMLDivElement;
    expandButton: HTMLDivElement;
    quoteButton: HTMLDivElement;
    headerButton: HTMLDivElement;
    textButton: HTMLDivElement;
    imageButton: HTMLDivElement;
    videoButton: HTMLDivElement;
    constructor(editor: Editor, block: Block);
    toggleDashboard(): void;
    collapseDashboard(): void;
    expandDashboard(): void;
    collapseAll(): void;
}
