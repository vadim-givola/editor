import { Block, BlockReader, RawBlock } from './block/block';
import { TextBlockReader } from './block/text-block';
import { Control } from './control';

const BLOCKS: Array<BlockReader> = [
  new TextBlockReader()
];

function convertRawContent(rawContent: Array<RawBlock>): Array<Block> {
  let content: Array<Block> = [];

  for (let rawBlock of rawContent) {
    let processed = false;
    for (let block of BLOCKS) {
      if (block.type == rawBlock.type) {
        processed = true;
        content.push(block.parse(rawBlock));
      }
    }

    if (!processed) {
      console.warn(`Unrecognized block type: ${rawBlock.type}`);
    }
  }

  return content;
}

export class Editor {
  content: Array<Block>;
  control: Control;

  constructor(public elem: HTMLDivElement, rawContent: Array<RawBlock>) {
    this.content = convertRawContent(rawContent);
    this.render();
  }

  add(block: Block) {
    this.content.push(block);
    this.elem.insertBefore(block.elem, this.control.elem);
  }

  getContent(): Array<RawBlock> {
    let rawContent: Array<RawBlock> = [];
    for (let block of this.content) {
      rawContent.push(block.getRawContent());
    }
    return rawContent;
  }

  private render() {
    for (let block of this.content) {
      this.elem.appendChild(block.elem);
    }
    
    this.control = new Control(this);
    this.elem.appendChild(this.control.elem);
  }
}
