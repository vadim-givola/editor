import { Editor } from './editor';
import { ImageBlock } from './block/image-block';
import { TextBlock } from './block/text-block';
import { Block } from './block/block';

export class Control {
  elem: HTMLDivElement = document.createElement('div');
  textButton: HTMLSpanElement = document.createElement('span');
  imageButton: HTMLSpanElement = document.createElement('span');

  constructor(public editor: Editor, public block: Block) {
    this.elem.appendChild(this.textButton);
    this.elem.appendChild(this.imageButton);

    this.elem.classList.add('editor-control');

    this.textButton.classList.add('editor-control__text-button')
    this.textButton.innerHTML = 'Add text';
    this.textButton.onclick = () => {
      editor.add(new TextBlock(editor, ''), this.block);
    };

    this.imageButton.classList.add('editor-control__image-button')
    this.imageButton.innerHTML = 'Add image';
    this.imageButton.onclick = () => {
      editor.add(new ImageBlock(editor, ''), this.block);
    };
  }
}