import { Editor } from './editor';
import { TextBlock } from './block/text-block';

export class Control {
  elem: HTMLDivElement = document.createElement('div');
  textButton: HTMLSpanElement = document.createElement('span');

  constructor(public editor: Editor) {
    this.elem.appendChild(this.textButton);

    this.elem.classList.add('editor-control');
    this.textButton.classList.add('editor-control-text-button')
    this.textButton.innerHTML = 'Add text';
    this.textButton.onclick = () => {
      editor.add(new TextBlock(''));
    };
  }

  render(): HTMLDivElement {
    return this.elem;
  }
}