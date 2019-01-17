import {Editor, EditorOptions} from './editor/editor'
import {RawBlock} from './editor/block/block';
import {RawHeaderBlock} from './editor/block/header-block';
import {RawImageBlock} from './editor/block/image-block';
import {RawQuoteBlock} from './editor/block/quote-block';
import {RawTextBlock} from './editor/block/text-block';
import {RawVideoBlock} from './editor/block/video-block';

(<any>window).installEditor = (elem: HTMLDivElement, options: EditorOptions = (<EditorOptions>{})) => {
  return new Editor(elem, options);
};

export { Editor, EditorOptions, RawBlock, RawHeaderBlock, RawImageBlock, RawQuoteBlock, RawTextBlock, RawVideoBlock };
