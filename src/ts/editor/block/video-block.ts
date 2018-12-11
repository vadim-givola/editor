import {Editor} from '../editor';
import {Block, RawBlock, BlockReader} from './block'

const TYPE: string = 'video';

interface RawVideoBlock extends RawBlock {
  url: string;
}

export class VideoBlockReader implements BlockReader {
  canParse(rawBlock: RawBlock): Boolean {
    return rawBlock.type == TYPE;
  }

  parse(rawBlock: RawBlock, editor: Editor): Block {
    let rawVideoBlock = rawBlock as RawVideoBlock;
    return new VideoBlock(editor, rawVideoBlock.url);
  }
}

export class VideoBlock extends Block {

  uploadPanel: HTMLDivElement = document.createElement('div');
  uploadButton: HTMLButtonElement = document.createElement('button');
  loadingIcon: HTMLSpanElement = document.createElement('span');
  inputFile: HTMLInputElement = document.createElement('input');

  videoPanel: HTMLDivElement = document.createElement('div');
  videoElem: HTMLVideoElement = document.createElement('video');

  constructor(public editor: Editor, public videoUrl: string) {
    super(editor);
    this.elem.classList.add('editor-block__video');
    this.uploadButton.classList.add('editor-block__video__upload-button');
    this.videoElem.classList.add('editor-block__video__video-elem')

    this.elem.appendChild(this.uploadPanel);
    this.elem.appendChild(this.videoPanel);

    this.videoPanel.appendChild(this.videoElem);

    this.uploadPanel.appendChild(this.inputFile);
    this.uploadPanel.appendChild(this.uploadButton);
    this.uploadPanel.appendChild(this.loadingIcon);

    this.videoElem.controls = true;
    this.stopLoading();
    this.uploadButton.innerHTML = 'Upload video';
    this.uploadButton.onclick = () => { this.inputFile.click() }
    this.inputFile.type = 'file';
    this.inputFile.onchange = (event: Event): any => {
      let target = (<HTMLInputElement>event.target);
      if (target.files.length == 0) {
        // in IE 11, the change event is fired when we programmatically set `.js-fileInput`'s value to empty string.
        return;
      }

      this.startLoading();

      let progressCallback = (loaded: Number, total: Number, label: string) => {
        if (label) {
          this.loadingIcon.innerHTML = label;
        } else {
          this.loadingIcon.innerHTML = `Uploading video (${loaded}/${total})...`;
        }
      }

      let successCallback = (videoUrl: string) => {
        this.stopLoading();
        this.videoUrl = videoUrl;
        this.updateView();
      };

      let failCallback = (error: string) => {
        this.stopLoading();
      };

      this.editor.options.uploadVideo(target.files[0], progressCallback, successCallback, failCallback);
      this.inputFile.value = '';
    };

    this.updateView();
  }

  startLoading(): void {
    this.loadingIcon.innerHTML = 'Uploading video...'
    this.loadingIcon.style.display = 'inline-block';
  }

  stopLoading(): void {
    this.loadingIcon.style.display = 'none';
  }

  updateView(): void {
    if (this.videoUrl) {
      this.videoElem.src = this.videoUrl;
      this.videoPanel.style.display = 'block';
      this.uploadPanel.style.display = 'none';
    } else {
      this.videoPanel.style.display = 'none';
      this.uploadPanel.style.display = 'block';
    }
  }

  focus(): void {}

  getRawContent(): RawBlock {
    let raw: RawVideoBlock = {
      type: TYPE,
      url: this.videoUrl,
    };
    return raw;
  }
}

