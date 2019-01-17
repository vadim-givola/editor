import {Editor} from '../editor';
import {Block, RawBlock, BlockReader} from './block'

const TYPE: string = 'video';

export interface RawVideoBlock extends RawBlock {
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
  uploadIconContainer: HTMLDivElement = document.createElement('div');
  uploadIcon: HTMLDivElement = document.createElement('div');
  uploadLabel: HTMLDivElement = document.createElement('div');
  uploadButton: HTMLButtonElement = document.createElement('button');
  loadingIcon: HTMLSpanElement = document.createElement('span');
  inputFile: HTMLInputElement = document.createElement('input');

  inputTextContainer: HTMLDivElement = document.createElement('div');
  inputTextLabel: HTMLDivElement = document.createElement('div');
  inputTextIcon: HTMLSpanElement = document.createElement('span');
  inputText: HTMLInputElement = document.createElement('input');

  videoPanel: HTMLDivElement = document.createElement('div');
  videoElem: HTMLVideoElement = document.createElement('video');
  videoIframe: HTMLIFrameElement = document.createElement('iframe');

  constructor(public editor: Editor, public videoUrl: string) {
    super(editor);
    this.elem.classList.add('editor-block__video');
    this.uploadButton.classList.add('editor-block__video__upload-button');
    this.videoElem.classList.add('editor-block__video__video-elem')

    this.elem.appendChild(this.uploadPanel);
    this.elem.appendChild(this.videoPanel);

    this.videoPanel.appendChild(this.videoElem);
    this.videoPanel.appendChild(this.videoIframe);
    this.videoIframe.frameBorder = "0";

    this.uploadPanel.appendChild(this.uploadIconContainer);
    this.uploadIconContainer.appendChild(this.inputFile);
    this.uploadIconContainer.appendChild(this.uploadIcon);
    this.uploadIconContainer.appendChild(this.uploadLabel);
    this.uploadIconContainer.appendChild(this.uploadButton);
    this.uploadPanel.appendChild(this.loadingIcon);
    this.uploadPanel.appendChild(this.inputTextLabel);
    this.uploadPanel.appendChild(this.inputTextContainer);
    this.inputTextContainer.appendChild(this.inputTextIcon);
    this.inputTextContainer.appendChild(this.inputText);

    this.uploadPanel.classList.add('editor-block__video__upload-panel');
    this.uploadIconContainer.classList.add('editor-block__video__upload-panel__icon-container');
    this.uploadIcon.classList.add('editor-block__video__upload-panel__icon-container__icon');
    this.uploadButton.classList.add('editor-block__video__upload-panel__icon-container__button');
    this.inputFile.classList.add('editor-block__video__upload-panel__icon-container__input');
    this.inputTextContainer.classList.add('editor-block__video__upload-panel__input-container');
    this.inputTextLabel.classList.add('editor-block__video__upload-panel__input-container__label');
    this.inputTextIcon.classList.add('editor-block__video__upload-panel__input-container__icon');
    this.inputText.classList.add('editor-block__video__upload-panel__input-container__input');
    this.videoIframe.classList.add('js-video-iframe');

    this.uploadIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="53" height="42" viewBox="0 0 53 42">\n' +
      '    <defs>\n' +
      '        <path id="b" d="M13 0v29h30V0h20v53H0V0h13z"/>\n' +
      '        <rect id="a" width="53" height="34" x="5" y="12" rx="2"/>\n' +
      '        <mask id="d" width="53" height="34" x="0" y="0" fill="#fff">\n' +
      '            <use xlink:href="#a"/>\n' +
      '        </mask>\n' +
      '    </defs>\n' +
      '    <g fill="none" fill-rule="evenodd" transform="translate(-5 -4)">\n' +
      '        <mask id="c" fill="#fff">\n' +
      '            <use xlink:href="#b"/>\n' +
      '        </mask>\n' +
      '        <g fill-rule="nonzero" stroke="#666" stroke-dasharray="4,2" stroke-width="4" mask="url(#c)">\n' +
      '            <use mask="url(#d)" xlink:href="#a"/>\n' +
      '        </g>\n' +
      '        <g fill="#666">\n' +
      '            <path d="M20.5 4c-1.603 0-2.82-.004-3.827.11-1.008.116-1.893.366-2.547 1.032-.655.666-.901 1.567-1.015 2.593-.114 1.026-.111 2.267-.111 3.901v8.728c0 1.631-.004 2.871.109 3.897.113 1.025.359 1.926 1.013 2.593.653.666 1.538.917 2.546 1.033 1.008.116 2.227.113 3.832.113h15c1.603 0 2.82.004 3.827-.11 1.008-.116 1.893-.366 2.547-1.032.655-.666.901-1.567 1.015-2.593.114-1.026.111-2.267.111-3.901v-8.728c0-1.631.004-2.871-.109-3.897-.113-1.025-.359-1.926-1.013-2.593-.653-.666-1.538-.917-2.546-1.033C38.324 3.997 37.105 4 35.5 4h-15zm0 2.182h15c1.604 0 2.792.006 3.59.098.8.092 1.122.253 1.273.407.152.154.308.482.398 1.295.09.814.096 2.023.096 3.654v8.728c0 1.632-.006 2.842-.096 3.656-.09.813-.248 1.141-.4 1.295-.151.154-.473.314-1.272.405-.799.091-1.987.098-3.589.098h-15c-1.603 0-2.792-.006-3.59-.098-.8-.092-1.122-.253-1.273-.407-.152-.154-.308-.482-.398-1.295-.09-.814-.096-2.023-.096-3.654v-8.728c0-1.632.006-2.842.096-3.656.09-.813.248-1.141.4-1.295.151-.154.473-.314 1.272-.405.8-.091 1.987-.098 3.59-.098z"/>\n' +
      '            <path d="M23.823 9.188a1.608 1.608 0 0 0-.823 1.41v10.804c0 .586.315 1.132.823 1.41a1.527 1.527 0 0 0 1.597-.08l7.885-5.401h.002c.43-.296.693-.795.693-1.331a1.618 1.618 0 0 0-.695-1.33L25.42 9.266a1.527 1.527 0 0 0-1.597-.079zm1.253 2.405L31.509 16l-6.433 4.406v-8.813z"/>\n' +
      '        </g>\n' +
      '        <path fill-rule="nonzero" stroke="#666" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M34 24l-3 11h4l1 5h3l-1-5h4z"/>\n' +
      '    </g>\n' +
      '</svg>\n';

    if (this.isAdvancedUpload())
      this.uploadLabel.innerHTML = 'Drag and drop a photo to upload or tap to upload';
    else
      this.uploadLabel.innerHTML = 'Tap to upload';
    this.uploadIconContainer.onclick = () => {
      this.inputFile.click();
    }

    this.inputTextLabel.innerHTML = 'Or, upload a Youtube or Vimeo video'
    this.inputTextIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092 2.222.188 1.485.397.939.952c-.545.554-.75 1.305-.846 2.16C-.002 3.969 0 5.003 0 6.365v7.272c0 1.36-.004 2.393.09 3.248.095.855.3 1.606.845 2.16.544.556 1.282.766 2.122.862.84.097 1.856.094 3.193.094h12.5c1.336 0 2.35.004 3.19-.092.84-.096 1.577-.305 2.122-.86.545-.554.75-1.305.846-2.16.095-.856.092-1.89.092-3.252V6.364c0-1.36.004-2.393-.09-3.248-.095-.855-.3-1.605-.845-2.16C23.521.4 22.783.19 21.943.093 21.103-.002 20.087 0 18.75 0H6.25zm0 1.818h12.5c1.336 0 2.327.005 2.993.082.665.076.934.21 1.06.339.126.129.256.402.331 1.08.075.677.08 1.685.08 3.045v7.272c0 1.361-.005 2.37-.08 3.047-.075.678-.207.951-.333 1.08-.126.128-.394.261-1.06.337-.666.076-1.656.082-2.99.082H6.25c-1.337 0-2.327-.005-2.993-.082-.666-.076-.934-.21-1.06-.339-.127-.129-.257-.402-.332-1.08-.075-.677-.08-1.685-.08-3.045V6.364c0-1.361.005-2.37.08-3.047.075-.678.207-.951.333-1.08.126-.128.395-.261 1.06-.337.666-.076 1.656-.082 2.991-.082z"/><path d="M8.744 4.192a1.369 1.369 0 0 0-.708 1.202v9.212c0 .5.271.965.708 1.202.434.236.965.21 1.374-.067l6.784-4.606h.001a1.376 1.376 0 0 0-.001-2.27c-1.428-.968-5.216-3.54-6.784-4.605a1.324 1.324 0 0 0-1.374-.068zm1.078 2.05c1.61 1.094 4.078 2.77 5.535 3.758l-5.535 3.757V6.243z"/></g></svg>';
    this.inputText.type = 'text';
    this.inputText.value = videoUrl;
    this.inputText.onchange = (event: Event): any => {
      this.videoUrl = this.inputText.value.trim();
      this.updateView();
    };

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

    this.videoElem.controls = true;
    this.stopLoading();
    this.uploadButton.innerHTML = 'Upload video';
    this.uploadButton.onclick = () => { this.inputFile.click() }

    this.inputFile.type = 'file';
    this.inputFile.onchange = (event: Event): any => {
      let target = (<HTMLInputElement>event.target);
      this.handleFiles(target.files);
    };

    this.updateView();
  }

  preventDefaults(e: Event): void {
    e.preventDefault()
    e.stopPropagation()
  }

  isAdvancedUpload(): boolean {
    return ('draggable' in this.uploadPanel) || ('ondragstart' in this.uploadPanel && 'ondrop' in this.uploadPanel);
  }

  startLoading(): void {
    this.loadingIcon.innerHTML = 'Uploading video...'
    this.loadingIcon.style.display = 'inline-block';
  }

  stopLoading(): void {
    this.loadingIcon.style.display = 'none';
  }

  static extractYoutubeId(url: string): string {
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);
    return match ? match[2] : null;
  }

  static extractVimeoId(url: string): string {
    let regExp = /^.+vimeo.com\/(.*\/)?([^#\?]*)/;
    let match = url.match(regExp);
    return match ? match[2] || match[1] : null;
  }

  updateView(): void {
    if (this.videoUrl) {
      if (this.videoUrl.includes('cloudinary')) {
        this.videoElem.src = this.videoUrl;
        this.videoPanel.style.display = 'block';
        this.videoIframe.style.display = 'none';
        this.uploadPanel.style.display = 'none';
      } else if (this.videoUrl.includes('youtube')) {
        let youtubeId = VideoBlock.extractYoutubeId(this.videoUrl);
        this.videoIframe.src=`https://www.youtube.com/embed/${youtubeId}?rel=0`;
        this.videoIframe.width="560";
        this.videoIframe.height="315";

        this.videoPanel.style.display = 'block';
        this.videoElem.style.display = 'none';
        this.uploadPanel.style.display = 'none';
      } else if (this.videoUrl.includes('vimeo')) {
        let vimeoId = VideoBlock.extractVimeoId(this.videoUrl);
        this.videoIframe.src=`https://player.vimeo.com/video/${vimeoId}?color=ec7070&portrait=0`;
        this.videoIframe.width="640";
        this.videoIframe.height="240";

        this.videoPanel.style.display = 'block';
        this.videoElem.style.display = 'none';
        this.uploadPanel.style.display = 'none';
      }
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

  handleFiles(files: FileList):void {
    if (files.length == 0) {
      // in IE 11, the change event is fired when we programmatically set `.js-fileInput`'s value to empty string.
      return;
    }

    this.startLoading();

    let progressCallback = (loaded: number, total: number, label: string) => {
      if (label) {
        this.loadingIcon.innerHTML = label;
      } else {
        let percentage = (total) ? (loaded * 100.0 / total) : 0;
        this.loadingIcon.innerHTML = `Uploading video (${percentage.toFixed(1)}%)...`;
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

    this.editor.options.uploadVideo(files[0], progressCallback, successCallback, failCallback);
    this.inputFile.value = '';
    this.inputText.value = '';
  }
}

