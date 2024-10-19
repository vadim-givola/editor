import {Control} from './control';
import {Block, BlockReader, RawBlock} from './block/block';
import {ImageBlockReader} from './block/image-block';
import {QuoteBlockReader} from './block/quote-block';
import {HeaderBlockReader} from './block/header-block';
import {TextBlockReader} from './block/text-block';
import {VideoBlockReader} from './block/video-block';

const BLOCKS: Array<BlockReader> = [
  new TextBlockReader(),
  new HeaderBlockReader(),
  new QuoteBlockReader(),
  new ImageBlockReader(),
  new VideoBlockReader(),
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
  uploadImage?: (file: File, successCallback: (url: string) => void, failureCallback: (error: string) => void) => void;
  onChange?: (content: Array<RawBlock>) => void;
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

    // Trigger the initial onChange event
    this.triggerOnChange();
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
    this.triggerOnChange();
  }

  remove(block: Block) {
    for (let i=0;i < this.blocks.length;i++) {
      if (block == this.blocks[i]) {
        this.blocks.splice(i, 1);
        block.elem.remove();
        break;
      }
    }
    this.triggerOnChange();
  }

  redraw() {
    for (let block of this.blocks) {
      block.redraw();
    }
  }

  getContent(): Array<RawBlock> {
    let rawContent: Array<RawBlock> = [];
    for (let block of this.blocks) {
      rawContent.push(block.getRawContent());
    }
    return rawContent;
  }

  showDeleteButton(block: Block) {
    for (let i=0;i < this.blocks.length;i++) {
      this.blocks[i].deleteButton.style.display = 'none';
      if (block == this.blocks[i]) {
        this.blocks[i].deleteButton.style.display = 'inline-block';
      }
    }
  }

  private triggerOnChange() {
    if (this.options.onChange) {
      this.options.onChange(this.getContent()); // Call onChange with current content
    }
  }

  private render() {
    for (let block of this.blocks) {
      this.elem.appendChild(block.elem);
    }
    
    this.lastControl = new Control(this, null);
    this.elem.appendChild(this.lastControl.elem);
    this.lastControl.expandDashboard();
  }
}
