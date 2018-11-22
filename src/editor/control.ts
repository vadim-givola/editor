import { Block } from './block/block';
import { ImageBlock } from './block/image-block';
import { TextBlock } from './block/text-block';
import { VideoBlock } from './block/video-block';
import { Editor } from './editor';

export class Control {
  elem: HTMLDivElement = document.createElement('div');
  textButton: HTMLSpanElement = document.createElement('span');
  imageButton: HTMLSpanElement;
  videoButton: HTMLSpanElement;

  constructor(public editor: Editor, public block: Block) {
    this.elem.appendChild(this.textButton);

    this.elem.classList.add('editor-control');

    this.textButton.classList.add('editor-control__text-button')
    this.textButton.innerHTML = 'Add text';
    this.textButton.onclick = () => {
      editor.add(new TextBlock(editor, ''), this.block);
    };

    if (this.editor.options.uploadImage) {
      this.imageButton = document.createElement('span');
      this.elem.appendChild(this.imageButton);

      this.imageButton.classList.add('editor-control__image-button')
      this.imageButton.innerHTML = 'Add image';
      this.imageButton.onclick = () => {
        editor.add(new ImageBlock(editor, ''), this.block);
      };
    }

    if (this.editor.options.uploadVideo) {
      this.videoButton = document.createElement('span');
      this.elem.appendChild(this.videoButton);

      this.videoButton.classList.add('editor-control__video-button')
      this.videoButton.innerHTML = 'Add video';
      this.videoButton.onclick = () => {
        editor.add(new VideoBlock(editor, '', ''), this.block);
      };
    }
  }
}