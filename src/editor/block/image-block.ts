import {Editor} from '../editor';
import {Block, RawBlock, BlockReader} from './block'

const TYPE: string = 'image';

interface RawImageBlock extends RawBlock {
  url: string;
}

export class ImageBlockReader implements BlockReader {
  canParse(rawBlock: RawBlock): Boolean {
    return rawBlock.type == TYPE;
  }

  parse(rawBlock: RawBlock, editor: Editor): Block {
    let rawImageBlock = rawBlock as RawImageBlock;
    return new ImageBlock(editor, rawImageBlock.url);
  }
}

export class ImageBlock extends Block {

  uploadPanel: HTMLDivElement = document.createElement('div');
  uploadButton: HTMLButtonElement = document.createElement('button');
  loadingIcon: HTMLSpanElement = document.createElement('span');
  inputFile: HTMLInputElement = document.createElement('input');

  imagePanel: HTMLDivElement = document.createElement('div');
  img: HTMLImageElement = document.createElement('img');

  constructor(public editor: Editor, public url: string) {
    super(editor);
    this.elem.classList.add('editor-block__image');
    this.img.classList.add('editor-block__image__img');
    this.uploadButton.classList.add('editor-block__image__upload-button');

    this.elem.appendChild(this.uploadPanel);
    this.elem.appendChild(this.imagePanel);

    this.uploadPanel.appendChild(this.inputFile);
    this.uploadPanel.appendChild(this.uploadButton);
    this.uploadPanel.appendChild(this.loadingIcon);
    this.imagePanel.appendChild(this.img);

    this.loadingIcon.innerHTML = 'Uploading image...'
    this.stopLoading();
    this.uploadButton.innerHTML = 'Upload image';
    this.uploadButton.onclick = () => { this.inputFile.click() }
    this.inputFile.type = 'file';
    this.inputFile.onchange = (event: Event): any => {
      let target = (<HTMLInputElement>event.target);
      if (target.files.length == 0) {
        // in IE 11, the change event is fired when we programmatically set `.js-fileInput`'s value to empty string.
        return;
      }

      this.startLoading();

      let successCallback = (url: string) => {
        this.stopLoading();
        this.url = url;
        this.updateView();
      };

      let failCallback = (error: string) => {
        this.stopLoading();
      };

      this.editor.options.uploadImage(target.files[0], successCallback, failCallback);
      this.inputFile.value = '';
    };

    this.updateView();
  }

  startLoading(): void {
    this.loadingIcon.style.display = 'inline-block';
  }

  stopLoading(): void {
    this.loadingIcon.style.display = 'none';
  }

  updateView(): void {
    if (this.url) {
      this.img.src = this.url;
      this.imagePanel.style.display = 'block';
      this.uploadPanel.style.display = 'none';
    } else {
      this.imagePanel.style.display = 'none';
      this.uploadPanel.style.display = 'block';
    }
  }

  focus(): void {}

  getRawContent(): RawBlock {
    let raw: RawImageBlock = {
      type: TYPE,
      url: this.url
    };
    return raw;
  }
}
