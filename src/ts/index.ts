import {Editor, EditorOptions} from './editor/editor'

(<any>window).installEditor = (elem: HTMLDivElement, options: EditorOptions = (<EditorOptions>{})) => {
  return new Editor(elem, options);
};

export { Editor, EditorOptions };
