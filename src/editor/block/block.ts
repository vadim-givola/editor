import {Control} from '../control';
import {Editor} from '../editor';

export interface RawBlock {
  type: string;
}

export interface BlockReader {
  canParse(rawBlock: RawBlock): Boolean
  parse(rawBlock: RawBlock, editor: Editor): Block
}

export abstract class Block {
  elem: HTMLDivElement = document.createElement('div');
  control: Control;

  constructor(public editor: Editor) {
    this.control = new Control(editor, this);
    this.elem.classList.add('editor-block');
    this.elem.appendChild(this.control.elem);
  }

  abstract getRawContent(): RawBlock

  abstract focus(): void
}

