import { Block } from "./block";
export declare abstract class TextBasedBlock extends Block {
    textarea: HTMLTextAreaElement;
    redraw(): void;
    enableNewLinePrevention(): void;
    enableAutoresizing(): void;
}
