import { Block, RawBlock } from './block/block';
import { TextBlock } from './block/text-block';
import { Control } from './control';

interface BlockReader {
  canParse(rawBlock: RawBlock): Boolean
  parse(rawBlock: RawBlock, editor: Editor): Block
}

const BLOCKS: Array<BlockReader> = [
  TextBlock
];

function convertRawContent(rawContent: Array<RawBlock>, editor: Editor): Array<Block> {
  let blocks: Array<Block> = [];

  for (let rawBlock of rawContent) {
    let processed = false;
    for (let block of BLOCKS) {
      if (block.canParse(rawBlock)) {
        processed = true;
        blocks.push(block.parse(rawBlock, editor));
      }
    }

    if (!processed) {
      console.warn(`Unrecognized block type: ${rawBlock.type}`);
    }
  }

  return blocks;
}

export class Editor {
  blocks: Array<Block>;
  lastControl: Control;

  constructor(public elem: HTMLDivElement, rawBlocks: Array<RawBlock>) {
    this.blocks = convertRawContent(rawBlocks, this);
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
