import { Editor } from './editor/editor'

(<any>window).installEditor = (options: any) => {
  return new Editor(
    options.elem, 
    options.uploadImage, 
    options.content || []
  )
};