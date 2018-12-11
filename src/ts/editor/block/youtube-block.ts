import {Editor} from '../editor';
import {Block, RawBlock, BlockReader} from './block'

const TYPE: string = 'youtube';

interface RawYoutubeBlock extends RawBlock {
  url: string;
}

export class YoutubeBlockReader implements BlockReader {
  canParse(rawBlock: RawBlock): Boolean {
    return rawBlock.type == TYPE;
  }

  parse(rawBlock: RawBlock, editor: Editor): Block {
    return new YoutubeBlock(editor, (rawBlock as RawYoutubeBlock).url);
  }
}

export class YoutubeBlock extends Block {

  inputPanel: HTMLDivElement = document.createElement('div');
  inputText: HTMLInputElement = document.createElement('input');

  previewPanel: HTMLDivElement = document.createElement('div');
  img: HTMLImageElement;

  constructor(public editor: Editor, url: string) {
    super(editor);
    this.elem.classList.add('editor-block__youtube');

    this.elem.appendChild(this.previewPanel);
    this.elem.appendChild(this.inputPanel);

    this.inputPanel.appendChild(this.inputText);

    this.inputText.type = 'text';
    this.inputText.value = url;
    this.inputText.onchange = (event: Event): any => {
      this.updateView();
    };

    this.updateView();
  }

  static extractYoutubeId(url: string): string {
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);
    return match ? match[2] : null;
  }

  updateView(): void {
    let youtubeId = YoutubeBlock.extractYoutubeId(this.inputText.value.trim());
    if (this.img) {
      this.img.remove();
      this.img = null;
    }

    if (youtubeId) {
      let source = "https://img.youtube.com/vi/" + youtubeId + "/sddefault.jpg";
      let fallbackSource = "https://img.youtube.com/vi/" + youtubeId + "/0.jpg";

      this.img = document.createElement('img');
      this.img.classList.add('editor-block__youtube__img');
      this.img.addEventListener(
        "load",
        () => {
          // If the preview image doesn't exist, youtube returns 404 with a default image whose width is 120px.
          // Since we cannot check the status code, we have to check the natural width instead.
          if (this.img.naturalWidth < 600 && this.img.src != fallbackSource) {
            this.img.src = fallbackSource
          }
          this.img.removeAttribute("width"); // IE 11 needs this setting.
          this.img.removeAttribute("height"); // IE 11 needs this setting.
          this.previewPanel.appendChild(this.img);
        }
      );
      this.img.src = source;
    }
  }

  focus(): void {
    this.inputText.focus();
  }

  getRawContent(): RawBlock {
    let raw: RawYoutubeBlock = {
      type: TYPE,
      url: this.inputText.value.trim()
    };
    return raw;
  }
}
