import {Editor,EditorOptions} from 'editor';


(<any>window).initializeEditor = () => {
   let elem = document.querySelector('#editor') as HTMLDivElement;

   if (elem == null) {
      throw "The element #testElement doesn't exist";
   }

   let options: EditorOptions = {
      content: []
   };

   return new Editor(elem, options);
};
