import {Editor} from '../editor';
import {Block, RawBlock, BlockReader} from './block'

const TYPE: string = 'text';

interface RawTextBlock extends RawBlock {
  content: string;
}

export class TextBlockReader implements BlockReader {
  canParse(rawBlock: RawBlock): Boolean {
    return rawBlock.type == TYPE;
  }

  parse(rawBlock: RawBlock, editor: Editor): Block {
    let rawTextBlock = rawBlock as RawTextBlock;
    return new TextBlock(editor, rawTextBlock.content);
  }
}

export class TextBlock extends Block {

  textarea: HTMLTextAreaElement = document.createElement('textarea');

  constructor(public editor: Editor, public content: string) {
    super(editor);
    this.elem.classList.add('editor-block__text');
    this.elem.appendChild(this.textarea);

    this.textarea.innerHTML = this.content;
  }

  focus(): void {
    this.textarea.focus();
  }

  getRawContent(): RawBlock {
    let raw: RawTextBlock = {
      type: TYPE,
      content: this.textarea.value
    };
    return raw;
  }
}