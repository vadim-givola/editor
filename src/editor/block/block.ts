export interface RawBlock {
  type: string;
}

export abstract class BlockReader {
  readonly type: string;

  abstract parse(rawBlock: RawBlock): Block
}

export abstract class Block {
  elem: HTMLDivElement = document.createElement('div');

  constructor() {
    this.elem.classList.add('editor-block');
  }

  abstract getRawContent(): RawBlock
}

