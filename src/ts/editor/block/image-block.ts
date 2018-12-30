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
  uploadLabel: HTMLDivElement = document.createElement('div');
  uploadButton: HTMLButtonElement = document.createElement('button');
  loadingIcon: HTMLSpanElement = document.createElement('span');
  inputFile: HTMLInputElement = document.createElement('input');

  imagePanel: HTMLDivElement = document.createElement('div');
  img: HTMLImageElement = document.createElement('img');

  constructor(public editor: Editor, public url: string) {
    super(editor);
    this.elem.classList.add('editor-block__image');
    this.img.classList.add('editor-block__image__img');

    this.elem.appendChild(this.uploadPanel);
    this.elem.appendChild(this.imagePanel);

    this.uploadPanel.appendChild(this.inputFile);
    this.uploadPanel.appendChild(this.uploadButton);
    this.uploadPanel.appendChild(this.uploadLabel);
    this.uploadPanel.appendChild(this.loadingIcon);
    this.imagePanel.appendChild(this.img);

    this.uploadPanel.classList.add('editor-block__image__upload-panel')
    this.uploadButton.classList.add('editor-block__image__upload-panel__button');
    this.inputFile.classList.add('editor-block__image__upload-panel__input');

    if (this.isAdvancedUpload())
      this.uploadLabel.innerHTML = 'Drag and drop a photo to upload or tap to upload';
    else
      this.uploadLabel.innerHTML = 'Tap to upload';
    this.uploadPanel.onclick = () => {
      this.inputFile.click();
    }

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      this.uploadPanel.addEventListener(eventName, this.preventDefaults, false)
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      this.uploadPanel.addEventListener(eventName, () => {
        this.uploadPanel.classList.add('editor-block__image__upload-panel--active');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      this.uploadPanel.addEventListener(eventName, () => {
        this.uploadPanel.classList.remove('editor-block__image__upload-panel--active');
      });
    })

    this.uploadPanel.addEventListener('drop', (event: DragEvent) => {
      let dt = event.dataTransfer;
      let files = dt.files;

      this.handleFiles(files);
    });

    this.loadingIcon.innerHTML = 'Uploading image...'
    this.stopLoading();
    this.uploadButton.innerHTML = 'Upload image';
    this.uploadButton.onclick = () => { this.inputFile.click() }

    this.inputFile.type = 'file';
    this.inputFile.onchange = (event: Event): any => {
      let target = (<HTMLInputElement>event.target);
      this.handleFiles(target.files);
    };

    this.updateView();
  }

  handleFiles(files: FileList): void {
    if (files.length == 0) {
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

    this.editor.options.uploadImage(files[0], successCallback, failCallback);
    this.inputFile.value = '';
  };

  preventDefaults(e: Event): void {
    e.preventDefault()
    e.stopPropagation()
  }

  startLoading(): void {
    this.loadingIcon.style.display = 'inline-block';
  }

  stopLoading(): void {
    this.loadingIcon.style.display = 'none';
  }

  isAdvancedUpload(): boolean {
    return ('draggable' in this.uploadPanel) || ('ondragstart' in this.uploadPanel && 'ondrop' in this.uploadPanel);
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
