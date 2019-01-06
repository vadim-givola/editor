Editor
=======


Requirement
------------

* npm


Develop
--------

0. Setup IntelliJ Ultimate
1. Run `npm install` to install required dependencies
2. Run `npm run start`
3. Go to `http://localhost:8080/demo.html` to test the editor
4. Run `npm test`

Any change should be compiled and trigger the browser reloading automatically.


Use the production artifact
------------------------------

0. Run `npm run build` to build the production artifact
1. Include `dist/editor.min.js` and `dist/editor.min.css` in your HTML
