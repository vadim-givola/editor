import { Block, RawBlock, BlockReader } from './block'

const TYPE = 'text';

interface RawTextBlock extends RawBlock {
  content: string;
}

export class TextBlockReader extends BlockReader {
  readonly type: string = TYPE;

  parse(rawBlock: RawBlock): Block {
    let rawTextBlock = rawBlock as RawTextBlock;
    return new TextBlock(rawTextBlock.content);
  }
}

export class TextBlock extends Block {

  textarea: HTMLTextAreaElement = document.createElement('textarea');

  constructor(public content: string) {
    super();
    this.elem.classList.add('editor-block-text');
    this.elem.appendChild(this.textarea);
    
    this.textarea.innerHTML = this.content;
  }

  getRawContent(): RawBlock {
    let raw: RawTextBlock = {
      type: TYPE,
      content: this.textarea.value
    };
    return raw;
  }
}