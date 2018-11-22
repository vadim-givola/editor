import { Editor } from '../editor';
import { Block, RawBlock } from './block'

const TYPE = 'text';

interface RawTextBlock extends RawBlock {
  content: string;
}

export class TextBlock extends Block {

  static readonly type: string = 'text';

  static canParse(rawBlock: RawBlock): Boolean {
    return rawBlock.type == TextBlock.type;
  }

  static parse(rawBlock: RawBlock, editor: Editor): Block {
    let rawTextBlock = rawBlock as RawTextBlock;
    return new TextBlock(editor, rawTextBlock.content);
  }

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
      type: TextBlock.type,
      content: this.textarea.value
    };
    return raw;
  }
}