import { Editor } from '../editor';
import { Block, RawBlock, BlockReader } from './block';

const TYPE: string = 'video';

export interface RawVideoBlock extends RawBlock {
  url: string;
}

export class VideoBlockReader implements BlockReader {
  canParse(rawBlock: RawBlock): Boolean {
    return rawBlock.type === TYPE;
  }

  parse(rawBlock: RawBlock, editor: Editor): Block {
    let rawVideoBlock = rawBlock as RawVideoBlock;
    return new VideoBlock(editor, rawVideoBlock.url);
  }
}

export class VideoBlock extends Block {

  uploadPanel: HTMLDivElement = document.createElement('div');
  inputTextContainer: HTMLDivElement = document.createElement('div');
  inputTextLabel: HTMLDivElement = document.createElement('div');
  inputTextIcon: HTMLSpanElement = document.createElement('span');
  inputText: HTMLInputElement = document.createElement('input');

  videoPanel: HTMLDivElement = document.createElement('div');
  videoElem: HTMLVideoElement = document.createElement('video');
  videoIframe: HTMLIFrameElement = document.createElement('iframe');

  private debouncedTriggerOnChange: () => void; // Add debounced trigger

  constructor(public editor: Editor, public videoUrl: string) {
    super(editor);
    this.elem.classList.add('editor-block__video');
    this.videoElem.classList.add('editor-block__video__video-elem');

    this.elem.appendChild(this.uploadPanel);
    this.elem.appendChild(this.videoPanel);

    this.videoPanel.appendChild(this.videoElem);
    this.videoPanel.appendChild(this.videoIframe);
    this.videoIframe.frameBorder = "0";

    this.uploadPanel.appendChild(this.inputTextLabel);
    this.uploadPanel.appendChild(this.inputTextContainer);
    this.inputTextContainer.appendChild(this.inputTextIcon);
    this.inputTextContainer.appendChild(this.inputText);

    this.uploadPanel.classList.add('editor-block__video__upload-panel');
    this.inputTextContainer.classList.add('editor-block__video__upload-panel__input-container');
    this.inputTextLabel.classList.add('editor-block__video__upload-panel__input-container__label');
    this.inputTextIcon.classList.add('editor-block__video__upload-panel__input-container__icon');
    this.inputText.classList.add('editor-block__video__upload-panel__input-container__input');
    this.videoIframe.classList.add('js-video-iframe');

    this.inputTextLabel.innerHTML = 'Paste a Youtube or Vimeo URL';
    this.inputTextIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092..."></g></svg>';
    this.inputText.type = 'text';
    this.inputText.value = videoUrl;

    // Debounce onChange logic for the video URL
    this.debouncedTriggerOnChange = this.debounce(() => {
      this.triggerOnChange();
    }, 300);

    this.inputText.onchange = (event: Event): any => {
      this.videoUrl = this.inputText.value.trim();
      this.updateView();
    };

    this.updateView();
  }

  static extractYoutubeId(url: string): string {
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=|shorts\/)([^#\&\?]*).*/;
    let match = url.match(regExp);
    return match ? match[2] : null;
  }

  static extractVimeoId(url: string): string {
    let regExp = /^.+vimeo.com\/(.*\/)?([^#\?]*)/;
    let match = url.match(regExp);
    return match ? match[2] || match[1] : null;
  }

  /**
   * Update the view based on the video URL.
   */
  updateView(): void {
    if (this.videoUrl) {
      if (this.videoUrl.includes('cloudinary')) {
        this.videoElem.src = this.videoUrl;
        this.videoPanel.style.display = 'block';
        this.videoIframe.style.display = 'none';
        this.uploadPanel.style.display = 'none';
      } else if (this.videoUrl.includes('youtube')) {
        let youtubeId = VideoBlock.extractYoutubeId(this.videoUrl);
        this.videoIframe.src = `https://www.youtube.com/embed/${youtubeId}?rel=0`;
        this.videoIframe.width = "560";
        this.videoIframe.height = "315";

        this.videoPanel.style.display = 'block';
        this.videoElem.style.display = 'none';
        this.uploadPanel.style.display = 'none';
      } else if (this.videoUrl.includes('vimeo')) {
        let vimeoId = VideoBlock.extractVimeoId(this.videoUrl);
        this.videoIframe.src = `https://player.vimeo.com/video/${vimeoId}?color=ec7070&portrait=0`;
        this.videoIframe.width = "560";
        this.videoIframe.height = "315";

        this.videoPanel.style.display = 'block';
        this.videoElem.style.display = 'none';
        this.uploadPanel.style.display = 'none';
      }
    } else {
      this.videoPanel.style.display = 'none';
      this.uploadPanel.style.display = 'block';
    }
        
    this.debouncedTriggerOnChange(); // Trigger onChange
  }

  /**
   * Trigger the editor's onChange callback with the updated content.
   */
  private triggerOnChange() {
    if (this.editor.options.onChange) {
      this.editor.options.onChange(this.editor.getContent());
    }
  }

  /**
   * Debounce utility to delay execution of a function.
   */
  private debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, wait);
    };
  }

  focus(): void {
    super.focus();
  }

  getRawContent(): RawBlock {
    let raw: RawVideoBlock = {
      type: TYPE,
      url: this.videoUrl,
    };
    return raw;
  }
}
