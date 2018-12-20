import {Block} from './block/block';
import {ImageBlock} from './block/image-block';
import {QuoteBlock} from './block/quote-block';
import {HeaderBlock} from './block/header-block';
import {TextBlock} from './block/text-block';
import {VideoBlock} from './block/video-block';
import {Editor} from './editor';
import {YoutubeBlock} from "./block/youtube-block";

export class Control {
  elem: HTMLDivElement = document.createElement('div');
  quoteButton: HTMLSpanElement = document.createElement('span');
  headerButton: HTMLSpanElement = document.createElement('span');
  textButton: HTMLSpanElement = document.createElement('span');
  imageButton: HTMLSpanElement;
  videoButton: HTMLSpanElement;
  youtubeButton: HTMLSpanElement = document.createElement('span');

  constructor(public editor: Editor, public block: Block) {

    this.elem.classList.add('editor-control');

    this.elem.appendChild(this.quoteButton);
    this.quoteButton.classList.add('editor-control__quote-button')
    this.quoteButton.innerHTML = 'Add quote';
    this.quoteButton.onclick = () => {
      editor.add(new QuoteBlock(editor, ''), this.block);
    };

    this.elem.appendChild(this.headerButton);
    this.headerButton.classList.add('editor-control__header-button')
    this.headerButton.innerHTML = 'Add header';
    this.headerButton.onclick = () => {
        editor.add(new HeaderBlock(editor, ''), this.block);
    };

    this.elem.appendChild(this.textButton);
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

    this.elem.appendChild(this.youtubeButton);
    this.youtubeButton.classList.add('editor-control__youtube-button')
    this.youtubeButton.innerHTML = 'Add Youtube video';
    this.youtubeButton.onclick = () => {
      editor.add(new YoutubeBlock(editor, ''), this.block);
    };

    if (this.editor.options.uploadVideo) {
      this.videoButton = document.createElement('span');
      this.elem.appendChild(this.videoButton);

      this.videoButton.classList.add('editor-control__video-button')
      this.videoButton.innerHTML = 'Add video';
      this.videoButton.onclick = () => {
        editor.add(new VideoBlock(editor, ''), this.block);
      };
    }
  }
}