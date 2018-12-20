import {Control} from './control';
import {Block, BlockReader, RawBlock} from './block/block';
import {ImageBlockReader} from './block/image-block';
import {QuoteBlockReader} from './block/quote-block';
import {HeaderBlockReader} from './block/header-block';
import {TextBlockReader} from './block/text-block';
import {VideoBlockReader} from './block/video-block';
import {YoutubeBlockReader} from './block/youtube-block';

const BLOCKS: Array<BlockReader> = [
  new TextBlockReader(),
  new HeaderBlockReader(),
  new QuoteBlockReader(),
  new ImageBlockReader(),
  new VideoBlockReader(),
  new YoutubeBlockReader(),
];

function convertRawContent(rawContent: Array<RawBlock>, editor: Editor): Array<Block> {
  let blocks: Array<Block> = [];

  for (let rawBlock of rawContent) {
    let processed = false;
    for (let block of BLOCKS) {
      if (block.canParse(rawBlock)) {
        processed = true;
        blocks.push(block.parse(rawBlock, editor));
        break;
      }
    }

    if (!processed) {
      console.warn(`Unrecognized block type: '${rawBlock.type}'. Ignore.`);
    }
  }

  return blocks;
}

export interface EditorOptions {
  content: Array<RawBlock>;
  uploadImage: (file: File, successCallback: (url: string) => void, failureCallback: (error: string) => void) => void;
  uploadVideo: (file: File, progressCallback: (loaded: Number, total: Number, label: String) => void, successCallback: (thumbnailUrl: string, videoUrl: string) => void, failureCallback: (error: string) => void) => void;
}

export class Editor {
  blocks: Array<Block>;
  lastControl: Control;

  constructor(
    public elem: HTMLDivElement,
    public options: EditorOptions
  ) {
    this.blocks = convertRawContent(this.options.content, this);
    this.render();
  }

  add(block: Block, beforeBlock: Block) {
    if (beforeBlock) {
      for (let i=0;i < this.blocks.length;i++) {
        if (beforeBlock == this.blocks[i]) {
          this.blocks.splice(i, 0, block);
          break;
        }
      }
      this.elem.insertBefore(block.elem, beforeBlock.elem);
    } else {
      this.blocks.push(block);
      this.elem.insertBefore(block.elem, this.lastControl.elem);
    }

    block.focus();
  }

  getContent(): Array<RawBlock> {
    let rawContent: Array<RawBlock> = [];
    for (let block of this.blocks) {
      rawContent.push(block.getRawContent());
    }
    return rawContent;
  }

  private render() {
    for (let block of this.blocks) {
      this.elem.appendChild(block.elem);
    }
    
    this.lastControl = new Control(this, null);
    this.elem.appendChild(this.lastControl.elem);
  }
}
