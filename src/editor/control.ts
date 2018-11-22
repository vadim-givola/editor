import { Editor } from './editor';
import { Block } from './block/block';
import { TextBlock } from './block/text-block';

export class Control {
  elem: HTMLDivElement = document.createElement('div');
  textButton: HTMLSpanElement = document.createElement('span');

  constructor(public editor: Editor, public block: Block) {
    this.elem.appendChild(this.textButton);

    this.elem.classList.add('editor-control');
    this.textButton.classList.add('editor-control__text-button')
    this.textButton.innerHTML = 'Add text';
    this.textButton.onclick = () => {
      editor.add(new TextBlock(editor, ''), this.block);
    };
  }
}