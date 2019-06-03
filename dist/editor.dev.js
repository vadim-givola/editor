(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["editor"] = factory();
	else
		root["editor"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/editor/block/block.ts":
/*!**************************************!*\
  !*** ./src/ts/editor/block/block.ts ***!
  \**************************************/
/*! exports provided: Block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../control */ "./src/ts/editor/control.ts");

var Block = /** @class */ (function () {
    function Block(editor) {
        var _this = this;
        this.editor = editor;
        this.elem = document.createElement('div');
        this.container = document.createElement('div');
        this.deleteButton = document.createElement('span');
        this.deleteIcon = document.createElement('div');
        this.control = new _control__WEBPACK_IMPORTED_MODULE_0__["Control"](editor, this);
        this.elem.classList.add('editor-block');
        this.elem.appendChild(this.control.elem);
        this.elem.addEventListener('click', function () {
            this.focus();
            this.editor.showDeleteButton(this);
        }.bind(this));
        this.elem.appendChild(this.container);
        this.container.classList.add('editor-block__container');
        this.container.appendChild(this.deleteButton);
        this.deleteButton.classList.add('editor-block__container__delete-button');
        this.deleteButton.innerHTML = '<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="12" height="13"  viewBox="0 0 448 512">' +
            '<path fill="currentColor" d="M192 188v216c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V188c0-6.627 5.373-12 12-12h24c6.627 ' +
            '0 12 5.373 12 12zm100-12h-24c-6.627 0-12 5.373-12 12v216c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V188c0-6.627-5.373-12-12-12zm132-96c13.255 ' +
            '0 24 10.745 24 24v12c0 6.627-5.373 12-12 12h-20v336c0 26.51-21.49 48-48 48H80c-26.51 0-48-21.49-48-48V128H12c-6.627 0-12-5.373-12-12v-12c0-13.255 10.745-24 ' +
            '24-24h74.411l34.018-56.696A48 48 0 0 1 173.589 0h100.823a48 48 0 0 1 41.16 23.304L349.589 80H424zm-269.611 0h139.223L276.16 50.913A6 6 0 0 0 271.015 48h-94.028a6 ' +
            '6 0 0 0-5.145 2.913L154.389 80zM368 128H80v330a6 6 0 0 0 6 6h276a6 6 0 0 0 6-6V128z">' +
            '</path></svg>';
        this.deleteButton.appendChild(this.deleteIcon);
        this.deleteButton.onclick = function () {
            _this.editor.remove(_this);
        };
    }
    Block.prototype.redraw = function () { };
    Block.prototype.focus = function () {
        this.editor.showDeleteButton(this);
    };
    return Block;
}());



/***/ }),

/***/ "./src/ts/editor/block/header-block.ts":
/*!*********************************************!*\
  !*** ./src/ts/editor/block/header-block.ts ***!
  \*********************************************/
/*! exports provided: HeaderBlockReader, HeaderBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBlockReader", function() { return HeaderBlockReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBlock", function() { return HeaderBlock; });
/* harmony import */ var _text_based_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-based-block */ "./src/ts/editor/block/text-based-block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TYPE = 'header';
var HeaderBlockReader = /** @class */ (function () {
    function HeaderBlockReader() {
    }
    HeaderBlockReader.prototype.canParse = function (rawBlock) {
        return rawBlock.type == TYPE;
    };
    HeaderBlockReader.prototype.parse = function (rawBlock, editor) {
        var rawHeaderBlock = rawBlock;
        return new HeaderBlock(editor, rawHeaderBlock.content);
    };
    return HeaderBlockReader;
}());

var HeaderBlock = /** @class */ (function (_super) {
    __extends(HeaderBlock, _super);
    function HeaderBlock(editor, content) {
        var _this = _super.call(this, editor) || this;
        _this.editor = editor;
        _this.content = content;
        _this.textarea = document.createElement('textarea');
        _this.elem.classList.add('editor-block', 'editor-block__text');
        _this.elem.appendChild(_this.textarea);
        _this.textarea.classList.add('editor-block__container__editor', 'editor-block__header');
        _this.textarea.placeholder = 'Header';
        _this.textarea.rows = 1;
        _this.textarea.innerHTML = _this.content;
        _this.enableNewLinePrevention();
        _this.enableAutoresizing();
        return _this;
    }
    HeaderBlock.prototype.focus = function () {
        _super.prototype.focus.call(this);
        this.textarea.focus();
    };
    HeaderBlock.prototype.getRawContent = function () {
        var raw = {
            type: TYPE,
            content: this.textarea.value
        };
        return raw;
    };
    return HeaderBlock;
}(_text_based_block__WEBPACK_IMPORTED_MODULE_0__["TextBasedBlock"]));



/***/ }),

/***/ "./src/ts/editor/block/image-block.ts":
/*!********************************************!*\
  !*** ./src/ts/editor/block/image-block.ts ***!
  \********************************************/
/*! exports provided: ImageBlockReader, ImageBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBlockReader", function() { return ImageBlockReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBlock", function() { return ImageBlock; });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/ts/editor/block/block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TYPE = 'image';
var ImageBlockReader = /** @class */ (function () {
    function ImageBlockReader() {
    }
    ImageBlockReader.prototype.canParse = function (rawBlock) {
        return rawBlock.type == TYPE;
    };
    ImageBlockReader.prototype.parse = function (rawBlock, editor) {
        var rawImageBlock = rawBlock;
        return new ImageBlock(editor, rawImageBlock.url);
    };
    return ImageBlockReader;
}());

var ImageBlock = /** @class */ (function (_super) {
    __extends(ImageBlock, _super);
    function ImageBlock(editor, url) {
        var _this = _super.call(this, editor) || this;
        _this.editor = editor;
        _this.url = url;
        _this.uploadPanel = document.createElement('div');
        _this.uploadIcon = document.createElement('div');
        _this.uploadLabel = document.createElement('div');
        _this.uploadButton = document.createElement('button');
        _this.loadingIcon = document.createElement('span');
        _this.inputFile = document.createElement('input');
        _this.imagePanel = document.createElement('div');
        _this.img = document.createElement('img');
        _this.elem.classList.add('editor-block__image');
        _this.img.classList.add('editor-block__image__img');
        _this.elem.appendChild(_this.uploadPanel);
        _this.elem.appendChild(_this.imagePanel);
        _this.uploadPanel.appendChild(_this.inputFile);
        _this.uploadPanel.appendChild(_this.uploadButton);
        _this.uploadPanel.appendChild(_this.uploadIcon);
        _this.uploadPanel.appendChild(_this.uploadLabel);
        _this.uploadPanel.appendChild(_this.loadingIcon);
        _this.imagePanel.appendChild(_this.img);
        _this.uploadPanel.classList.add('editor-block__image__upload-panel');
        _this.uploadIcon.classList.add('editor-block__image__upload-panel__icon');
        _this.uploadButton.classList.add('editor-block__image__upload-panel__button');
        _this.inputFile.classList.add('editor-block__image__upload-panel__input');
        _this.uploadIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="53" height="42" viewBox="0 0 53 42">\n' +
            '    <defs>\n' +
            '        <path id="b" d="M13 0v29h30V0h20v53H0V0h13z"/>\n' +
            '        <rect id="a" width="53" height="34" x="5" y="12" rx="2"/>\n' +
            '        <mask id="d" width="53" height="34" x="0" y="0" fill="#fff">\n' +
            '            <use xlink:href="#a"/>\n' +
            '        </mask>\n' +
            '    </defs>\n' +
            '    <g fill="none" fill-rule="evenodd" transform="translate(-5 -4)">\n' +
            '        <mask id="c" fill="#fff">\n' +
            '            <use xlink:href="#b"/>\n' +
            '        </mask>\n' +
            '        <g fill-rule="nonzero" stroke="#666" stroke-dasharray="4,2" stroke-width="4" mask="url(#c)">\n' +
            '            <use mask="url(#d)" xlink:href="#a"/>\n' +
            '        </g>\n' +
            '        <path fill="#666" fill-rule="nonzero" d="M15.283 4C14.035 4 13 5.088 13 6.4v19.2c0 1.312 1.035 2.4 2.283 2.4h25.434C41.965 28 43 26.912 43 25.6V6.4C43 5.088 41.965 4 40.717 4H15.283zm.042 2h25.35c.197 0 .325.135.325.344V20l-4.916-4.155a.96.96 0 0 0-1.157-.054l-4.611 3.35-6.257-5.357a.95.95 0 0 0-.72-.226.95.95 0 0 0-.448.183L15 19.495V6.344c0-.209.128-.344.325-.344zM30 9c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zm-6.59 5l6.256 5.32a.963.963 0 0 0 1.157.054l4.601-3.333L41 22.73v2.927c0 .207-.128.342-.325.342h-25.35c-.197 0-.325-.135-.325-.342V22.1l8.41-6.1z"/>\n' +
            '        <path stroke="#666" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M34 24l-3 11h4l1 5h3l-1-5h4z"/>\n' +
            '    </g>\n' +
            '</svg>\n';
        if (_this.isAdvancedUpload())
            _this.uploadLabel.innerHTML = 'Drag and drop a photo to upload or tap to upload';
        else
            _this.uploadLabel.innerHTML = 'Tap to upload';
        _this.uploadPanel.onclick = function () {
            _this.inputFile.click();
        };
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
            _this.uploadPanel.addEventListener(eventName, _this.preventDefaults, false);
        });
        ['dragenter', 'dragover'].forEach(function (eventName) {
            _this.uploadPanel.addEventListener(eventName, function () {
                _this.uploadPanel.classList.add('editor-block__image__upload-panel--active');
            });
        });
        ['dragleave', 'drop'].forEach(function (eventName) {
            _this.uploadPanel.addEventListener(eventName, function () {
                _this.uploadPanel.classList.remove('editor-block__image__upload-panel--active');
            });
        });
        _this.uploadPanel.addEventListener('drop', function (event) {
            var dt = event.dataTransfer;
            var files = dt.files;
            _this.handleFiles(files);
        });
        _this.loadingIcon.innerHTML = 'Uploading image...';
        _this.stopLoading();
        _this.uploadButton.innerHTML = 'Upload image';
        _this.uploadButton.onclick = function () { _this.inputFile.click(); };
        _this.inputFile.type = 'file';
        _this.inputFile.onchange = function (event) {
            var target = event.target;
            _this.handleFiles(target.files);
        };
        _this.updateView();
        return _this;
    }
    ImageBlock.prototype.handleFiles = function (files) {
        var _this = this;
        if (files.length == 0) {
            // in IE 11, the change event is fired when we programmatically set `.js-fileInput`'s value to empty string.
            return;
        }
        this.startLoading();
        var successCallback = function (url) {
            _this.stopLoading();
            _this.url = url;
            _this.updateView();
        };
        var failCallback = function (error) {
            _this.stopLoading();
        };
        this.editor.options.uploadImage(files[0], successCallback, failCallback);
        this.inputFile.value = '';
    };
    ;
    ImageBlock.prototype.preventDefaults = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    ImageBlock.prototype.startLoading = function () {
        this.uploadLabel.style.display = 'none';
        this.loadingIcon.style.display = 'inline-block';
    };
    ImageBlock.prototype.stopLoading = function () {
        this.uploadLabel.style.display = 'inline-block';
        this.loadingIcon.style.display = 'none';
    };
    ImageBlock.prototype.isAdvancedUpload = function () {
        return ('draggable' in this.uploadPanel) || ('ondragstart' in this.uploadPanel && 'ondrop' in this.uploadPanel);
    };
    ImageBlock.prototype.updateView = function () {
        if (this.url) {
            this.img.src = this.url;
            this.imagePanel.style.display = 'block';
            this.uploadPanel.style.display = 'none';
        }
        else {
            this.imagePanel.style.display = 'none';
            this.uploadPanel.style.display = 'block';
        }
    };
    ImageBlock.prototype.focus = function () {
        _super.prototype.focus.call(this);
    };
    ImageBlock.prototype.getRawContent = function () {
        var raw = {
            type: TYPE,
            url: this.url
        };
        return raw;
    };
    return ImageBlock;
}(_block__WEBPACK_IMPORTED_MODULE_0__["Block"]));



/***/ }),

/***/ "./src/ts/editor/block/quote-block.ts":
/*!********************************************!*\
  !*** ./src/ts/editor/block/quote-block.ts ***!
  \********************************************/
/*! exports provided: QuoteBlockReader, QuoteBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteBlockReader", function() { return QuoteBlockReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteBlock", function() { return QuoteBlock; });
/* harmony import */ var _text_based_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-based-block */ "./src/ts/editor/block/text-based-block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TYPE = 'quote';
var QuoteBlockReader = /** @class */ (function () {
    function QuoteBlockReader() {
    }
    QuoteBlockReader.prototype.canParse = function (rawBlock) {
        return rawBlock.type == TYPE;
    };
    QuoteBlockReader.prototype.parse = function (rawBlock, editor) {
        var rawQuoteBlock = rawBlock;
        return new QuoteBlock(editor, rawQuoteBlock.content);
    };
    return QuoteBlockReader;
}());

var QuoteBlock = /** @class */ (function (_super) {
    __extends(QuoteBlock, _super);
    function QuoteBlock(editor, content) {
        var _this = _super.call(this, editor) || this;
        _this.editor = editor;
        _this.content = content;
        _this.textarea = document.createElement('textarea');
        _this.elem.classList.add('editor-block__text');
        _this.elem.appendChild(_this.textarea);
        _this.textarea.classList.add('editor-block__container__editor', 'editor-block__quote');
        _this.textarea.placeholder = 'Quote';
        _this.textarea.rows = 1;
        _this.textarea.innerHTML = _this.content;
        _this.enableNewLinePrevention();
        _this.enableAutoresizing();
        return _this;
    }
    QuoteBlock.prototype.focus = function () {
        _super.prototype.focus.call(this);
        this.textarea.focus();
    };
    QuoteBlock.prototype.getRawContent = function () {
        var raw = {
            type: TYPE,
            content: this.textarea.value
        };
        return raw;
    };
    return QuoteBlock;
}(_text_based_block__WEBPACK_IMPORTED_MODULE_0__["TextBasedBlock"]));



/***/ }),

/***/ "./src/ts/editor/block/text-based-block.ts":
/*!*************************************************!*\
  !*** ./src/ts/editor/block/text-based-block.ts ***!
  \*************************************************/
/*! exports provided: TextBasedBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBasedBlock", function() { return TextBasedBlock; });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/ts/editor/block/block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextBasedBlock = /** @class */ (function (_super) {
    __extends(TextBasedBlock, _super);
    function TextBasedBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBasedBlock.prototype.redraw = function () {
        if (!this.textarea) {
            return;
        }
        var evt = document.createEvent("Event");
        evt.initEvent("input", true, true);
        this.textarea.dispatchEvent(evt);
    };
    TextBasedBlock.prototype.enableNewLinePrevention = function () {
        this.textarea.addEventListener('keypress', function (ev) {
            // 13 is the enter key
            if (ev.keyCode == 13) {
                ev.preventDefault();
            }
        });
    };
    TextBasedBlock.prototype.enableAutoresizing = function () {
        var _this = this;
        this.textarea.addEventListener('input', function () {
            // We don't resize the textarea to be less than 10px.
            // This handles the case where the editor is initially hidden and later becomes visible.
            // The scrollHeight is 0 when the textarea is hidden.
            if (_this.textarea.scrollHeight > 10) {
                _this.textarea.style.height = 'auto';
                _this.textarea.style.height = _this.textarea.scrollHeight + 'px';
            }
        });
        // trigger a dummy event to set the correct height of the textarea after the DOM is initialized
        window.addEventListener("DOMContentLoaded", this.redraw, false);
    };
    return TextBasedBlock;
}(_block__WEBPACK_IMPORTED_MODULE_0__["Block"]));



/***/ }),

/***/ "./src/ts/editor/block/text-block.ts":
/*!*******************************************!*\
  !*** ./src/ts/editor/block/text-block.ts ***!
  \*******************************************/
/*! exports provided: TextBlockReader, TextBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBlockReader", function() { return TextBlockReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBlock", function() { return TextBlock; });
/* harmony import */ var _text_based_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-based-block */ "./src/ts/editor/block/text-based-block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TYPE = 'text';
var TextBlockReader = /** @class */ (function () {
    function TextBlockReader() {
    }
    TextBlockReader.prototype.canParse = function (rawBlock) {
        return rawBlock.type == TYPE;
    };
    TextBlockReader.prototype.parse = function (rawBlock, editor) {
        var rawTextBlock = rawBlock;
        return new TextBlock(editor, rawTextBlock.content);
    };
    return TextBlockReader;
}());

var TextBlock = /** @class */ (function (_super) {
    __extends(TextBlock, _super);
    function TextBlock(editor, content) {
        var _this = _super.call(this, editor) || this;
        _this.editor = editor;
        _this.content = content;
        _this.textarea = document.createElement('textarea');
        _this.elem.classList.add('editor-block__text');
        _this.elem.appendChild(_this.textarea);
        _this.textarea.classList.add('editor-block__container__editor', 'editor-block__body');
        _this.textarea.placeholder = 'Body text';
        _this.textarea.rows = 1;
        _this.textarea.innerHTML = _this.content;
        _this.enableAutoresizing();
        return _this;
    }
    TextBlock.prototype.focus = function () {
        _super.prototype.focus.call(this);
        this.textarea.focus();
    };
    TextBlock.prototype.getRawContent = function () {
        var raw = {
            type: TYPE,
            content: this.textarea.value
        };
        return raw;
    };
    return TextBlock;
}(_text_based_block__WEBPACK_IMPORTED_MODULE_0__["TextBasedBlock"]));



/***/ }),

/***/ "./src/ts/editor/block/video-block.ts":
/*!********************************************!*\
  !*** ./src/ts/editor/block/video-block.ts ***!
  \********************************************/
/*! exports provided: VideoBlockReader, VideoBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoBlockReader", function() { return VideoBlockReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoBlock", function() { return VideoBlock; });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/ts/editor/block/block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TYPE = 'video';
var VideoBlockReader = /** @class */ (function () {
    function VideoBlockReader() {
    }
    VideoBlockReader.prototype.canParse = function (rawBlock) {
        return rawBlock.type == TYPE;
    };
    VideoBlockReader.prototype.parse = function (rawBlock, editor) {
        var rawVideoBlock = rawBlock;
        return new VideoBlock(editor, rawVideoBlock.url);
    };
    return VideoBlockReader;
}());

var VideoBlock = /** @class */ (function (_super) {
    __extends(VideoBlock, _super);
    function VideoBlock(editor, videoUrl) {
        var _this = _super.call(this, editor) || this;
        _this.editor = editor;
        _this.videoUrl = videoUrl;
        _this.uploadPanel = document.createElement('div');
        _this.inputTextContainer = document.createElement('div');
        _this.inputTextLabel = document.createElement('div');
        _this.inputTextIcon = document.createElement('span');
        _this.inputText = document.createElement('input');
        _this.videoPanel = document.createElement('div');
        _this.videoElem = document.createElement('video');
        _this.videoIframe = document.createElement('iframe');
        _this.elem.classList.add('editor-block__video');
        _this.videoElem.classList.add('editor-block__video__video-elem');
        _this.elem.appendChild(_this.uploadPanel);
        _this.elem.appendChild(_this.videoPanel);
        _this.videoPanel.appendChild(_this.videoElem);
        _this.videoPanel.appendChild(_this.videoIframe);
        _this.videoIframe.frameBorder = "0";
        _this.uploadPanel.appendChild(_this.inputTextLabel);
        _this.uploadPanel.appendChild(_this.inputTextContainer);
        _this.inputTextContainer.appendChild(_this.inputTextIcon);
        _this.inputTextContainer.appendChild(_this.inputText);
        _this.uploadPanel.classList.add('editor-block__video__upload-panel');
        _this.inputTextContainer.classList.add('editor-block__video__upload-panel__input-container');
        _this.inputTextLabel.classList.add('editor-block__video__upload-panel__input-container__label');
        _this.inputTextIcon.classList.add('editor-block__video__upload-panel__input-container__icon');
        _this.inputText.classList.add('editor-block__video__upload-panel__input-container__input');
        _this.videoIframe.classList.add('js-video-iframe');
        _this.inputTextLabel.innerHTML = 'Or, upload a Youtube or Vimeo video';
        _this.inputTextIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092 2.222.188 1.485.397.939.952c-.545.554-.75 1.305-.846 2.16C-.002 3.969 0 5.003 0 6.365v7.272c0 1.36-.004 2.393.09 3.248.095.855.3 1.606.845 2.16.544.556 1.282.766 2.122.862.84.097 1.856.094 3.193.094h12.5c1.336 0 2.35.004 3.19-.092.84-.096 1.577-.305 2.122-.86.545-.554.75-1.305.846-2.16.095-.856.092-1.89.092-3.252V6.364c0-1.36.004-2.393-.09-3.248-.095-.855-.3-1.605-.845-2.16C23.521.4 22.783.19 21.943.093 21.103-.002 20.087 0 18.75 0H6.25zm0 1.818h12.5c1.336 0 2.327.005 2.993.082.665.076.934.21 1.06.339.126.129.256.402.331 1.08.075.677.08 1.685.08 3.045v7.272c0 1.361-.005 2.37-.08 3.047-.075.678-.207.951-.333 1.08-.126.128-.394.261-1.06.337-.666.076-1.656.082-2.99.082H6.25c-1.337 0-2.327-.005-2.993-.082-.666-.076-.934-.21-1.06-.339-.127-.129-.257-.402-.332-1.08-.075-.677-.08-1.685-.08-3.045V6.364c0-1.361.005-2.37.08-3.047.075-.678.207-.951.333-1.08.126-.128.395-.261 1.06-.337.666-.076 1.656-.082 2.991-.082z"/><path d="M8.744 4.192a1.369 1.369 0 0 0-.708 1.202v9.212c0 .5.271.965.708 1.202.434.236.965.21 1.374-.067l6.784-4.606h.001a1.376 1.376 0 0 0-.001-2.27c-1.428-.968-5.216-3.54-6.784-4.605a1.324 1.324 0 0 0-1.374-.068zm1.078 2.05c1.61 1.094 4.078 2.77 5.535 3.758l-5.535 3.757V6.243z"/></g></svg>';
        _this.inputText.type = 'text';
        _this.inputText.value = videoUrl;
        _this.inputText.onchange = function (event) {
            _this.videoUrl = _this.inputText.value.trim();
            _this.updateView();
        };
        _this.updateView();
        return _this;
    }
    VideoBlock.extractYoutubeId = function (url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        return match ? match[2] : null;
    };
    VideoBlock.extractVimeoId = function (url) {
        var regExp = /^.+vimeo.com\/(.*\/)?([^#\?]*)/;
        var match = url.match(regExp);
        return match ? match[2] || match[1] : null;
    };
    VideoBlock.prototype.updateView = function () {
        if (this.videoUrl) {
            if (this.videoUrl.includes('cloudinary')) {
                this.videoElem.src = this.videoUrl;
                this.videoPanel.style.display = 'block';
                this.videoIframe.style.display = 'none';
                this.uploadPanel.style.display = 'none';
            }
            else if (this.videoUrl.includes('youtube')) {
                var youtubeId = VideoBlock.extractYoutubeId(this.videoUrl);
                this.videoIframe.src = "https://www.youtube.com/embed/" + youtubeId + "?rel=0";
                this.videoIframe.width = "560";
                this.videoIframe.height = "315";
                this.videoPanel.style.display = 'block';
                this.videoElem.style.display = 'none';
                this.uploadPanel.style.display = 'none';
            }
            else if (this.videoUrl.includes('vimeo')) {
                var vimeoId = VideoBlock.extractVimeoId(this.videoUrl);
                this.videoIframe.src = "https://player.vimeo.com/video/" + vimeoId + "?color=ec7070&portrait=0";
                this.videoIframe.width = "640";
                this.videoIframe.height = "240";
                this.videoPanel.style.display = 'block';
                this.videoElem.style.display = 'none';
                this.uploadPanel.style.display = 'none';
            }
        }
        else {
            this.videoPanel.style.display = 'none';
            this.uploadPanel.style.display = 'block';
        }
    };
    VideoBlock.prototype.focus = function () {
        _super.prototype.focus.call(this);
    };
    VideoBlock.prototype.getRawContent = function () {
        var raw = {
            type: TYPE,
            url: this.videoUrl,
        };
        return raw;
    };
    return VideoBlock;
}(_block__WEBPACK_IMPORTED_MODULE_0__["Block"]));



/***/ }),

/***/ "./src/ts/editor/control.ts":
/*!**********************************!*\
  !*** ./src/ts/editor/control.ts ***!
  \**********************************/
/*! exports provided: Control */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Control", function() { return Control; });
/* harmony import */ var _block_image_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/image-block */ "./src/ts/editor/block/image-block.ts");
/* harmony import */ var _block_quote_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block/quote-block */ "./src/ts/editor/block/quote-block.ts");
/* harmony import */ var _block_header_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block/header-block */ "./src/ts/editor/block/header-block.ts");
/* harmony import */ var _block_text_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block/text-block */ "./src/ts/editor/block/text-block.ts");
/* harmony import */ var _block_video_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block/video-block */ "./src/ts/editor/block/video-block.ts");





var Control = /** @class */ (function () {
    function Control(editor, block) {
        var _this = this;
        this.editor = editor;
        this.block = block;
        this.elem = document.createElement('div');
        this.dashboard = document.createElement('div');
        this.expandHandle = document.createElement('div');
        this.expandButton = document.createElement('div');
        this.quoteButton = document.createElement('div');
        this.headerButton = document.createElement('div');
        this.textButton = document.createElement('div');
        this.elem.classList.add('editor-control');
        this.elem.appendChild(this.expandHandle);
        this.expandHandle.classList.add('editor-control__expand-handle', 'js-expand-handle');
        this.expandHandle.appendChild(this.expandButton);
        this.expandButton.classList.add('editor-control__expand-handle__button');
        this.expandButton.innerHTML = '+ ADD';
        this.expandHandle.onclick = function () { _this.toggleDashboard(); };
        this.elem.appendChild(this.dashboard);
        this.dashboard.classList.add('editor-control__dashboard');
        this.dashboard.appendChild(this.headerButton);
        this.headerButton.classList.add('editor-control__dashboard__button', 'js-header-button');
        this.headerButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14"><text fill="#666" fill-rule="evenodd" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="20" font-weight="bold" transform="translate(-48 -33)"><tspan x="46.98" y="47">H1</tspan></text></svg><p>Header Text</p>';
        this.headerButton.onclick = function () {
            editor.add(new _block_header_block__WEBPACK_IMPORTED_MODULE_2__["HeaderBlock"](editor, ''), _this.block);
            _this.collapseAll();
        };
        this.dashboard.appendChild(this.quoteButton);
        this.quoteButton.classList.add('editor-control__dashboard__button', 'js-quote-button');
        this.quoteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15"><path fill="#666" fill-rule="evenodd" d="M6.881 14.195H.511V9.64c0-1.843.163-3.298.488-4.363.325-1.065.926-2.021 1.802-2.867C3.677 1.562 4.796.898 6.156.414l1.246 2.63c-1.269.422-2.18 1.012-2.731 1.767-.552.756-.842 1.76-.873 3.015h3.083v6.37zm10.63 0h-6.369V9.64c0-1.858.163-3.317.488-4.374.325-1.058.929-2.01 1.813-2.856.884-.847 1.998-1.511 3.343-1.995l1.247 2.63c-1.27.422-2.18 1.012-2.731 1.767-.552.756-.843 1.76-.873 3.015h3.083v6.37z"/></svg><p>Quote<p>';
        this.quoteButton.onclick = function () {
            editor.add(new _block_quote_block__WEBPACK_IMPORTED_MODULE_1__["QuoteBlock"](editor, ''), _this.block);
            _this.collapseAll();
        };
        this.dashboard.appendChild(this.textButton);
        this.textButton.classList.add('editor-control__dashboard__button', 'js-text-button');
        this.textButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><text fill="#666" fill-rule="evenodd" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="20" transform="translate(-146 -32)"> <tspan x="144.57" y="47">Bd</tspan> </text></svg><p>Body Text</p>';
        this.textButton.onclick = function () {
            editor.add(new _block_text_block__WEBPACK_IMPORTED_MODULE_3__["TextBlock"](editor, ''), _this.block);
            _this.collapseAll();
        };
        if (this.editor.options.uploadImage) {
            this.imageButton = document.createElement('div');
            this.dashboard.appendChild(this.imageButton);
            this.imageButton.classList.add('editor-control__dashboard__button', 'js-image-button');
            this.imageButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><path fill="#666" fill-rule="nonzero" d="M1.902 0C.862 0 0 .907 0 2v16c0 1.093.862 2 1.902 2h21.196c1.04 0 1.902-.907 1.902-2V2c0-1.093-.862-2-1.902-2H1.902zm0 1.714h21.196c.164 0 .272.113.272.286v11.357l-4.11-3.455a.805.805 0 0 0-.969-.045l-3.855 2.786-5.23-4.455A.798.798 0 0 0 8.601 8a.796.796 0 0 0-.373.152L1.63 12.937V2c0-.173.108-.286.272-.286zM14.402 4c-1.34 0-2.445 1.161-2.445 2.571 0 1.41 1.104 2.572 2.445 2.572 1.341 0 2.446-1.162 2.446-2.572 0-1.41-1.105-2.571-2.446-2.571zm0 1.714c.46 0 .815.374.815.857 0 .484-.355.858-.815.858-.46 0-.815-.374-.815-.858 0-.483.355-.857.815-.857zM8.662 9.93l5.23 4.446a.805.805 0 0 0 .969.045l3.847-2.786 4.662 3.92V18c0 .173-.108.286-.272.286H1.902c-.164 0-.272-.113-.272-.286v-2.973l7.032-5.098z"/></svg><p>Image</p>';
            this.imageButton.onclick = function () {
                editor.add(new _block_image_block__WEBPACK_IMPORTED_MODULE_0__["ImageBlock"](editor, ''), _this.block);
                _this.collapseAll();
            };
        }
        this.videoButton = document.createElement('div');
        this.dashboard.appendChild(this.videoButton);
        this.videoButton.classList.add('editor-control__dashboard__button', 'js-video-button');
        this.videoButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092 2.222.188 1.485.397.939.952c-.545.554-.75 1.305-.846 2.16C-.002 3.969 0 5.003 0 6.365v7.272c0 1.36-.004 2.393.09 3.248.095.855.3 1.606.845 2.16.544.556 1.282.766 2.122.862.84.097 1.856.094 3.193.094h12.5c1.336 0 2.35.004 3.19-.092.84-.096 1.577-.305 2.122-.86.545-.554.75-1.305.846-2.16.095-.856.092-1.89.092-3.252V6.364c0-1.36.004-2.393-.09-3.248-.095-.855-.3-1.605-.845-2.16C23.521.4 22.783.19 21.943.093 21.103-.002 20.087 0 18.75 0H6.25zm0 1.818h12.5c1.336 0 2.327.005 2.993.082.665.076.934.21 1.06.339.126.129.256.402.331 1.08.075.677.08 1.685.08 3.045v7.272c0 1.361-.005 2.37-.08 3.047-.075.678-.207.951-.333 1.08-.126.128-.394.261-1.06.337-.666.076-1.656.082-2.99.082H6.25c-1.337 0-2.327-.005-2.993-.082-.666-.076-.934-.21-1.06-.339-.127-.129-.257-.402-.332-1.08-.075-.677-.08-1.685-.08-3.045V6.364c0-1.361.005-2.37.08-3.047.075-.678.207-.951.333-1.08.126-.128.395-.261 1.06-.337.666-.076 1.656-.082 2.991-.082z"/><path d="M8.744 4.192a1.369 1.369 0 0 0-.708 1.202v9.212c0 .5.271.965.708 1.202.434.236.965.21 1.374-.067l6.784-4.606h.001a1.376 1.376 0 0 0-.001-2.27c-1.428-.968-5.216-3.54-6.784-4.605a1.324 1.324 0 0 0-1.374-.068zm1.078 2.05c1.61 1.094 4.078 2.77 5.535 3.758l-5.535 3.757V6.243z"/></g></svg><p>Video</p>';
        this.videoButton.onclick = function () {
            editor.add(new _block_video_block__WEBPACK_IMPORTED_MODULE_4__["VideoBlock"](editor, ''), _this.block);
        };
    }
    Control.prototype.toggleDashboard = function () {
        if (this.dashboard.style.display == 'none')
            this.expandDashboard();
        else
            this.collapseDashboard();
    };
    Control.prototype.collapseDashboard = function () {
        this.dashboard.style.display = 'none';
        this.expandButton.innerHTML = '+ ADD';
    };
    Control.prototype.expandDashboard = function () {
        this.collapseAll();
        this.dashboard.style.display = 'flex';
        this.expandButton.innerHTML = 'HIDE';
    };
    Control.prototype.collapseAll = function () {
        for (var i = 0; i < this.editor.blocks.length; i++) {
            this.editor.blocks[i].control.collapseDashboard();
        }
        this.editor.lastControl.collapseDashboard();
    };
    return Control;
}());



/***/ }),

/***/ "./src/ts/editor/editor.ts":
/*!*********************************!*\
  !*** ./src/ts/editor/editor.ts ***!
  \*********************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control */ "./src/ts/editor/control.ts");
/* harmony import */ var _block_image_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block/image-block */ "./src/ts/editor/block/image-block.ts");
/* harmony import */ var _block_quote_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block/quote-block */ "./src/ts/editor/block/quote-block.ts");
/* harmony import */ var _block_header_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block/header-block */ "./src/ts/editor/block/header-block.ts");
/* harmony import */ var _block_text_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block/text-block */ "./src/ts/editor/block/text-block.ts");
/* harmony import */ var _block_video_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block/video-block */ "./src/ts/editor/block/video-block.ts");






var BLOCKS = [
    new _block_text_block__WEBPACK_IMPORTED_MODULE_4__["TextBlockReader"](),
    new _block_header_block__WEBPACK_IMPORTED_MODULE_3__["HeaderBlockReader"](),
    new _block_quote_block__WEBPACK_IMPORTED_MODULE_2__["QuoteBlockReader"](),
    new _block_image_block__WEBPACK_IMPORTED_MODULE_1__["ImageBlockReader"](),
    new _block_video_block__WEBPACK_IMPORTED_MODULE_5__["VideoBlockReader"](),
];
function convertRawContent(rawContent, editor) {
    var blocks = [];
    for (var _i = 0, rawContent_1 = rawContent; _i < rawContent_1.length; _i++) {
        var rawBlock = rawContent_1[_i];
        var processed = false;
        for (var _a = 0, BLOCKS_1 = BLOCKS; _a < BLOCKS_1.length; _a++) {
            var block = BLOCKS_1[_a];
            if (block.canParse(rawBlock)) {
                processed = true;
                blocks.push(block.parse(rawBlock, editor));
                break;
            }
        }
        if (!processed) {
            console.warn("Unrecognized block type: '" + rawBlock.type + "'. Ignore.");
        }
    }
    return blocks;
}
var Editor = /** @class */ (function () {
    function Editor(elem, options) {
        this.elem = elem;
        this.options = options;
        this.blocks = convertRawContent(this.options.content, this);
        this.render();
    }
    Editor.prototype.add = function (block, beforeBlock) {
        if (beforeBlock) {
            for (var i = 0; i < this.blocks.length; i++) {
                if (beforeBlock == this.blocks[i]) {
                    this.blocks.splice(i, 0, block);
                    break;
                }
            }
            this.elem.insertBefore(block.elem, beforeBlock.elem);
        }
        else {
            this.blocks.push(block);
            this.elem.insertBefore(block.elem, this.lastControl.elem);
        }
        block.focus();
    };
    Editor.prototype.remove = function (block) {
        for (var i = 0; i < this.blocks.length; i++) {
            if (block == this.blocks[i]) {
                this.blocks.splice(i, 1);
                block.elem.remove();
                break;
            }
        }
    };
    Editor.prototype.redraw = function () {
        for (var _i = 0, _a = this.blocks; _i < _a.length; _i++) {
            var block = _a[_i];
            block.redraw();
        }
    };
    Editor.prototype.getContent = function () {
        var rawContent = [];
        for (var _i = 0, _a = this.blocks; _i < _a.length; _i++) {
            var block = _a[_i];
            rawContent.push(block.getRawContent());
        }
        return rawContent;
    };
    Editor.prototype.showDeleteButton = function (block) {
        for (var i = 0; i < this.blocks.length; i++) {
            this.blocks[i].deleteButton.style.display = 'none';
            if (block == this.blocks[i]) {
                this.blocks[i].deleteButton.style.display = 'inline-block';
            }
        }
    };
    Editor.prototype.render = function () {
        for (var _i = 0, _a = this.blocks; _i < _a.length; _i++) {
            var block = _a[_i];
            this.elem.appendChild(block.elem);
        }
        this.lastControl = new _control__WEBPACK_IMPORTED_MODULE_0__["Control"](this, null);
        this.elem.appendChild(this.lastControl.elem);
        this.lastControl.expandDashboard();
    };
    return Editor;
}());



/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor/editor */ "./src/ts/editor/editor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _editor_editor__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });


window.installEditor = function (elem, options) {
    if (options === void 0) { options = {}; }
    return new _editor_editor__WEBPACK_IMPORTED_MODULE_0__["Editor"](elem, options);
};



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvdHMvZWRpdG9yL2Jsb2NrL2Jsb2NrLnRzIiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9lZGl0b3IvYmxvY2svaGVhZGVyLWJsb2NrLnRzIiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9lZGl0b3IvYmxvY2svaW1hZ2UtYmxvY2sudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL3RzL2VkaXRvci9ibG9jay9xdW90ZS1ibG9jay50cyIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvdHMvZWRpdG9yL2Jsb2NrL3RleHQtYmFzZWQtYmxvY2sudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL3RzL2VkaXRvci9ibG9jay90ZXh0LWJsb2NrLnRzIiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9lZGl0b3IvYmxvY2svdmlkZW8tYmxvY2sudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL3RzL2VkaXRvci9jb250cm9sLnRzIiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9lZGl0b3IvZWRpdG9yLnRzIiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztB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LE9BQU8sSUFBSSxxREFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFb0giLCJmaWxlIjoiZWRpdG9yLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImVkaXRvclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJlZGl0b3JcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RzL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHtDb250cm9sfSBmcm9tICcuLi9jb250cm9sJztcbmltcG9ydCB7RWRpdG9yfSBmcm9tICcuLi9lZGl0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhd0Jsb2NrIHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrUmVhZGVyIHtcbiAgY2FuUGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrKTogQm9vbGVhblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2tcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJsb2NrIHtcbiAgZWxlbTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZWxldGVCdXR0b246IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZGVsZXRlSWNvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udHJvbDogQ29udHJvbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWRpdG9yOiBFZGl0b3IpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29udHJvbChlZGl0b3IsIHRoaXMpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2snKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmVsZW0pO1xuICAgIHRoaXMuZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgdGhpcy5lZGl0b3Iuc2hvd0RlbGV0ZUJ1dHRvbih0aGlzKTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2NvbnRhaW5lcicpO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlQnV0dG9uKTtcblxuICAgIHRoaXMuZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fY29udGFpbmVyX19kZWxldGUtYnV0dG9uJyk7XG4gICAgdGhpcy5kZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTNcIiAgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+JyArXG4gICAgICAnPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTkyIDE4OHYyMTZjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtMjRjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJWMTg4YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoMjRjNi42MjcgJyArXG4gICAgICAnMCAxMiA1LjM3MyAxMiAxMnptMTAwLTEyaC0yNGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnYyMTZjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMmgyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyVjE4OGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyem0xMzItOTZjMTMuMjU1ICcgK1xuICAgICAgJzAgMjQgMTAuNzQ1IDI0IDI0djEyYzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTIwdjMzNmMwIDI2LjUxLTIxLjQ5IDQ4LTQ4IDQ4SDgwYy0yNi41MSAwLTQ4LTIxLjQ5LTQ4LTQ4VjEyOEgxMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMTJjMC0xMy4yNTUgMTAuNzQ1LTI0ICcgK1xuICAgICAgJzI0LTI0aDc0LjQxMWwzNC4wMTgtNTYuNjk2QTQ4IDQ4IDAgMCAxIDE3My41ODkgMGgxMDAuODIzYTQ4IDQ4IDAgMCAxIDQxLjE2IDIzLjMwNEwzNDkuNTg5IDgwSDQyNHptLTI2OS42MTEgMGgxMzkuMjIzTDI3Ni4xNiA1MC45MTNBNiA2IDAgMCAwIDI3MS4wMTUgNDhoLTk0LjAyOGE2ICcgK1xuICAgICAgJzYgMCAwIDAtNS4xNDUgMi45MTNMMTU0LjM4OSA4MHpNMzY4IDEyOEg4MHYzMzBhNiA2IDAgMCAwIDYgNmgyNzZhNiA2IDAgMCAwIDYtNlYxMjh6XCI+JyArXG4gICAgICAnPC9wYXRoPjwvc3ZnPic7XG4gICAgdGhpcy5kZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVJY29uKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5lZGl0b3IucmVtb3ZlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlZHJhdygpIHt9XG5cbiAgYWJzdHJhY3QgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9ja1xuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdG9yLnNob3dEZWxldGVCdXR0b24odGhpcyk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBCbG9ja1JlYWRlciwgUmF3QmxvY2t9IGZyb20gJy4vYmxvY2snXG5pbXBvcnQge1RleHRCYXNlZEJsb2NrfSBmcm9tIFwiLi90ZXh0LWJhc2VkLWJsb2NrXCI7XG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICdoZWFkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhd0hlYWRlckJsb2NrIGV4dGVuZHMgUmF3QmxvY2sge1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJCbG9ja1JlYWRlciBpbXBsZW1lbnRzIEJsb2NrUmVhZGVyIHtcbiAgY2FuUGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIHJhd0Jsb2NrLnR5cGUgPT0gVFlQRTtcbiAgfVxuXG4gIHBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jaywgZWRpdG9yOiBFZGl0b3IpOiBCbG9jayB7XG4gICAgbGV0IHJhd0hlYWRlckJsb2NrID0gcmF3QmxvY2sgYXMgUmF3SGVhZGVyQmxvY2s7XG4gICAgcmV0dXJuIG5ldyBIZWFkZXJCbG9jayhlZGl0b3IsIHJhd0hlYWRlckJsb2NrLmNvbnRlbnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJCbG9jayBleHRlbmRzIFRleHRCYXNlZEJsb2NrIHtcblxuICB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgY29udGVudDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWRpdG9yKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrJywgJ2VkaXRvci1ibG9ja19fdGV4dCcpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRleHRhcmVhKTtcblxuICAgIHRoaXMudGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19jb250YWluZXJfX2VkaXRvcicsICdlZGl0b3ItYmxvY2tfX2hlYWRlcicpO1xuICAgIHRoaXMudGV4dGFyZWEucGxhY2Vob2xkZXIgPSAnSGVhZGVyJztcbiAgICB0aGlzLnRleHRhcmVhLnJvd3MgPSAxO1xuICAgIHRoaXMudGV4dGFyZWEuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50O1xuXG4gICAgdGhpcy5lbmFibGVOZXdMaW5lUHJldmVudGlvbigpO1xuICAgIHRoaXMuZW5hYmxlQXV0b3Jlc2l6aW5nKCk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBzdXBlci5mb2N1cygpO1xuICAgIHRoaXMudGV4dGFyZWEuZm9jdXMoKTtcbiAgfVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd0hlYWRlckJsb2NrID0ge1xuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMudGV4dGFyZWEudmFsdWVcbiAgICB9O1xuICAgIHJldHVybiByYXc7XG4gIH1cbn0iLCJpbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vZWRpdG9yJztcbmltcG9ydCB7QmxvY2ssIFJhd0Jsb2NrLCBCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jaydcblxuY29uc3QgVFlQRTogc3RyaW5nID0gJ2ltYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBSYXdJbWFnZUJsb2NrIGV4dGVuZHMgUmF3QmxvY2sge1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlQmxvY2tSZWFkZXIgaW1wbGVtZW50cyBCbG9ja1JlYWRlciB7XG4gIGNhblBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jayk6IEJvb2xlYW4ge1xuICAgIHJldHVybiByYXdCbG9jay50eXBlID09IFRZUEU7XG4gIH1cblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2sge1xuICAgIGxldCByYXdJbWFnZUJsb2NrID0gcmF3QmxvY2sgYXMgUmF3SW1hZ2VCbG9jaztcbiAgICByZXR1cm4gbmV3IEltYWdlQmxvY2soZWRpdG9yLCByYXdJbWFnZUJsb2NrLnVybCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlQmxvY2sgZXh0ZW5kcyBCbG9jayB7XG5cbiAgdXBsb2FkUGFuZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwbG9hZEljb246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwbG9hZExhYmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cGxvYWRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxvYWRpbmdJY29uOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGlucHV0RmlsZTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgaW1hZ2VQYW5lbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1nOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgdXJsOiBzdHJpbmcpIHtcbiAgICBzdXBlcihlZGl0b3IpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlJyk7XG4gICAgdGhpcy5pbWcuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZV9faW1nJyk7XG5cbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRQYW5lbCk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMuaW1hZ2VQYW5lbCk7XG5cbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRGaWxlKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkQnV0dG9uKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkSWNvbik7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZExhYmVsKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMubG9hZGluZ0ljb24pO1xuICAgIHRoaXMuaW1hZ2VQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmltZyk7XG5cbiAgICB0aGlzLnVwbG9hZFBhbmVsLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19faW1hZ2VfX3VwbG9hZC1wYW5lbCcpXG4gICAgdGhpcy51cGxvYWRJY29uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19faW1hZ2VfX3VwbG9hZC1wYW5lbF9faWNvbicpXG4gICAgdGhpcy51cGxvYWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZV9fdXBsb2FkLXBhbmVsX19idXR0b24nKTtcbiAgICB0aGlzLmlucHV0RmlsZS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlX191cGxvYWQtcGFuZWxfX2lucHV0Jyk7XG5cbiAgICB0aGlzLnVwbG9hZEljb24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiNTNcIiBoZWlnaHQ9XCI0MlwiIHZpZXdCb3g9XCIwIDAgNTMgNDJcIj5cXG4nICtcbiAgICAgICcgICAgPGRlZnM+XFxuJyArXG4gICAgICAnICAgICAgICA8cGF0aCBpZD1cImJcIiBkPVwiTTEzIDB2MjloMzBWMGgyMHY1M0gwVjBoMTN6XCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPHJlY3QgaWQ9XCJhXCIgd2lkdGg9XCI1M1wiIGhlaWdodD1cIjM0XCIgeD1cIjVcIiB5PVwiMTJcIiByeD1cIjJcIi8+XFxuJyArXG4gICAgICAnICAgICAgICA8bWFzayBpZD1cImRcIiB3aWR0aD1cIjUzXCIgaGVpZ2h0PVwiMzRcIiB4PVwiMFwiIHk9XCIwXCIgZmlsbD1cIiNmZmZcIj5cXG4nICtcbiAgICAgICcgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjYVwiLz5cXG4nICtcbiAgICAgICcgICAgICAgIDwvbWFzaz5cXG4nICtcbiAgICAgICcgICAgPC9kZWZzPlxcbicgK1xuICAgICAgJyAgICA8ZyBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUgLTQpXCI+XFxuJyArXG4gICAgICAnICAgICAgICA8bWFzayBpZD1cImNcIiBmaWxsPVwiI2ZmZlwiPlxcbicgK1xuICAgICAgJyAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNiXCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPC9tYXNrPlxcbicgK1xuICAgICAgJyAgICAgICAgPGcgZmlsbC1ydWxlPVwibm9uemVyb1wiIHN0cm9rZT1cIiM2NjZcIiBzdHJva2UtZGFzaGFycmF5PVwiNCwyXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIG1hc2s9XCJ1cmwoI2MpXCI+XFxuJyArXG4gICAgICAnICAgICAgICAgICAgPHVzZSBtYXNrPVwidXJsKCNkKVwiIHhsaW5rOmhyZWY9XCIjYVwiLz5cXG4nICtcbiAgICAgICcgICAgICAgIDwvZz5cXG4nICtcbiAgICAgICcgICAgICAgIDxwYXRoIGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIGQ9XCJNMTUuMjgzIDRDMTQuMDM1IDQgMTMgNS4wODggMTMgNi40djE5LjJjMCAxLjMxMiAxLjAzNSAyLjQgMi4yODMgMi40aDI1LjQzNEM0MS45NjUgMjggNDMgMjYuOTEyIDQzIDI1LjZWNi40QzQzIDUuMDg4IDQxLjk2NSA0IDQwLjcxNyA0SDE1LjI4M3ptLjA0MiAyaDI1LjM1Yy4xOTcgMCAuMzI1LjEzNS4zMjUuMzQ0VjIwbC00LjkxNi00LjE1NWEuOTYuOTYgMCAwIDAtMS4xNTctLjA1NGwtNC42MTEgMy4zNS02LjI1Ny01LjM1N2EuOTUuOTUgMCAwIDAtLjcyLS4yMjYuOTUuOTUgMCAwIDAtLjQ0OC4xODNMMTUgMTkuNDk1VjYuMzQ0YzAtLjIwOS4xMjgtLjM0NC4zMjUtLjM0NHpNMzAgOWMtMS42NDUgMC0zIDEuMzU1LTMgM3MxLjM1NSAzIDMgMyAzLTEuMzU1IDMtMy0xLjM1NS0zLTMtM3ptMCAyYy41NjQgMCAxIC40MzYgMSAxIDAgLjU2NC0uNDM2IDEtMSAxLS41NjQgMC0xLS40MzYtMS0xIDAtLjU2NC40MzYtMSAxLTF6bS02LjU5IDVsNi4yNTYgNS4zMmEuOTYzLjk2MyAwIDAgMCAxLjE1Ny4wNTRsNC42MDEtMy4zMzNMNDEgMjIuNzN2Mi45MjdjMCAuMjA3LS4xMjguMzQyLS4zMjUuMzQyaC0yNS4zNWMtLjE5NyAwLS4zMjUtLjEzNS0uMzI1LS4zNDJWMjIuMWw4LjQxLTYuMXpcIi8+XFxuJyArXG4gICAgICAnICAgICAgICA8cGF0aCBzdHJva2U9XCIjNjY2XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMzQgMjRsLTMgMTFoNGwxIDVoM2wtMS01aDR6XCIvPlxcbicgK1xuICAgICAgJyAgICA8L2c+XFxuJyArXG4gICAgICAnPC9zdmc+XFxuJztcblxuICAgIGlmICh0aGlzLmlzQWR2YW5jZWRVcGxvYWQoKSlcbiAgICAgIHRoaXMudXBsb2FkTGFiZWwuaW5uZXJIVE1MID0gJ0RyYWcgYW5kIGRyb3AgYSBwaG90byB0byB1cGxvYWQgb3IgdGFwIHRvIHVwbG9hZCc7XG4gICAgZWxzZVxuICAgICAgdGhpcy51cGxvYWRMYWJlbC5pbm5lckhUTUwgPSAnVGFwIHRvIHVwbG9hZCc7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dEZpbGUuY2xpY2soKTtcbiAgICB9XG5cbiAgICBbJ2RyYWdlbnRlcicsICdkcmFnb3ZlcicsICdkcmFnbGVhdmUnLCAnZHJvcCddLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMucHJldmVudERlZmF1bHRzLCBmYWxzZSlcbiAgICB9KTtcblxuICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKCkgPT4ge1xuICAgICAgICB0aGlzLnVwbG9hZFBhbmVsLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19faW1hZ2VfX3VwbG9hZC1wYW5lbC0tYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIFsnZHJhZ2xlYXZlJywgJ2Ryb3AnXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLnVwbG9hZFBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudXBsb2FkUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdG9yLWJsb2NrX19pbWFnZV9fdXBsb2FkLXBhbmVsLS1hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH0pXG5cbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgICAgbGV0IGR0ID0gZXZlbnQuZGF0YVRyYW5zZmVyO1xuICAgICAgbGV0IGZpbGVzID0gZHQuZmlsZXM7XG5cbiAgICAgIHRoaXMuaGFuZGxlRmlsZXMoZmlsZXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkaW5nSWNvbi5pbm5lckhUTUwgPSAnVXBsb2FkaW5nIGltYWdlLi4uJ1xuICAgIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICB0aGlzLnVwbG9hZEJ1dHRvbi5pbm5lckhUTUwgPSAnVXBsb2FkIGltYWdlJztcbiAgICB0aGlzLnVwbG9hZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4geyB0aGlzLmlucHV0RmlsZS5jbGljaygpIH1cblxuICAgIHRoaXMuaW5wdXRGaWxlLnR5cGUgPSAnZmlsZSc7XG4gICAgdGhpcy5pbnB1dEZpbGUub25jaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KTogYW55ID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICAgIHRoaXMuaGFuZGxlRmlsZXModGFyZ2V0LmZpbGVzKTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBoYW5kbGVGaWxlcyhmaWxlczogRmlsZUxpc3QpOiB2b2lkIHtcbiAgICBpZiAoZmlsZXMubGVuZ3RoID09IDApIHtcbiAgICAgIC8vIGluIElFIDExLCB0aGUgY2hhbmdlIGV2ZW50IGlzIGZpcmVkIHdoZW4gd2UgcHJvZ3JhbW1hdGljYWxseSBzZXQgYC5qcy1maWxlSW5wdXRgJ3MgdmFsdWUgdG8gZW1wdHkgc3RyaW5nLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RhcnRMb2FkaW5nKCk7XG5cbiAgICBsZXQgc3VjY2Vzc0NhbGxiYWNrID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH07XG5cbiAgICBsZXQgZmFpbENhbGxiYWNrID0gKGVycm9yOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5lZGl0b3Iub3B0aW9ucy51cGxvYWRJbWFnZShmaWxlc1swXSwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsQ2FsbGJhY2spO1xuICAgIHRoaXMuaW5wdXRGaWxlLnZhbHVlID0gJyc7XG4gIH07XG5cbiAgcHJldmVudERlZmF1bHRzKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbiAgc3RhcnRMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMudXBsb2FkTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLmxvYWRpbmdJY29uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfVxuXG4gIHN0b3BMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMudXBsb2FkTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIHRoaXMubG9hZGluZ0ljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGlzQWR2YW5jZWRVcGxvYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICgnZHJhZ2dhYmxlJyBpbiB0aGlzLnVwbG9hZFBhbmVsKSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiB0aGlzLnVwbG9hZFBhbmVsICYmICdvbmRyb3AnIGluIHRoaXMudXBsb2FkUGFuZWwpO1xuICB9XG5cbiAgdXBkYXRlVmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMudXJsO1xuICAgICAgdGhpcy5pbWFnZVBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltYWdlUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgc3VwZXIuZm9jdXMoKTtcbiAgfVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd0ltYWdlQmxvY2sgPSB7XG4gICAgICB0eXBlOiBUWVBFLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH07XG4gICAgcmV0dXJuIHJhdztcbiAgfVxufVxuIiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBSYXdCbG9jaywgQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2snXG5pbXBvcnQge1RleHRCYXNlZEJsb2NrfSBmcm9tIFwiLi90ZXh0LWJhc2VkLWJsb2NrXCI7XG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICdxdW90ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmF3UXVvdGVCbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUXVvdGVCbG9ja1JlYWRlciBpbXBsZW1lbnRzIEJsb2NrUmVhZGVyIHtcbiAgY2FuUGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIHJhd0Jsb2NrLnR5cGUgPT0gVFlQRTtcbiAgfVxuXG4gIHBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jaywgZWRpdG9yOiBFZGl0b3IpOiBCbG9jayB7XG4gICAgbGV0IHJhd1F1b3RlQmxvY2sgPSByYXdCbG9jayBhcyBSYXdRdW90ZUJsb2NrO1xuICAgIHJldHVybiBuZXcgUXVvdGVCbG9jayhlZGl0b3IsIHJhd1F1b3RlQmxvY2suY29udGVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1b3RlQmxvY2sgZXh0ZW5kcyBUZXh0QmFzZWRCbG9jayB7XG5cbiAgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdGV4dCcpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRleHRhcmVhKTtcblxuICAgIHRoaXMudGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19jb250YWluZXJfX2VkaXRvcicsICdlZGl0b3ItYmxvY2tfX3F1b3RlJyk7XG4gICAgdGhpcy50ZXh0YXJlYS5wbGFjZWhvbGRlciA9ICdRdW90ZSc7XG4gICAgdGhpcy50ZXh0YXJlYS5yb3dzID0gMTtcbiAgICB0aGlzLnRleHRhcmVhLmlubmVySFRNTCA9IHRoaXMuY29udGVudDtcblxuICAgIHRoaXMuZW5hYmxlTmV3TGluZVByZXZlbnRpb24oKTtcbiAgICB0aGlzLmVuYWJsZUF1dG9yZXNpemluZygpO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgc3VwZXIuZm9jdXMoKTtcbiAgICB0aGlzLnRleHRhcmVhLmZvY3VzKCk7XG4gIH1cblxuICBnZXRSYXdDb250ZW50KCk6IFJhd0Jsb2NrIHtcbiAgICBsZXQgcmF3OiBSYXdRdW90ZUJsb2NrID0ge1xuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMudGV4dGFyZWEudmFsdWVcbiAgICB9O1xuICAgIHJldHVybiByYXc7XG4gIH1cbn0iLCJpbXBvcnQge0Jsb2NrfSBmcm9tIFwiLi9ibG9ja1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGV4dEJhc2VkQmxvY2sgZXh0ZW5kcyBCbG9jayB7XG5cbiAgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG5cbiAgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy50ZXh0YXJlYSkgeyByZXR1cm47IH1cbiAgICBsZXQgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICBldnQuaW5pdEV2ZW50KFwiaW5wdXRcIiwgdHJ1ZSwgdHJ1ZSk7XG4gICAgdGhpcy50ZXh0YXJlYS5kaXNwYXRjaEV2ZW50KGV2dClcbiAgfVxuXG4gIGVuYWJsZU5ld0xpbmVQcmV2ZW50aW9uKCk6IHZvaWQge1xuICAgIHRoaXMudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXYpID0+IHtcbiAgICAgIC8vIDEzIGlzIHRoZSBlbnRlciBrZXlcbiAgICAgIGlmICgoZXYgYXMgS2V5Ym9hcmRFdmVudCkua2V5Q29kZSA9PSAxMykge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlQXV0b3Jlc2l6aW5nKCk6IHZvaWQge1xuICAgIHRoaXMudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAvLyBXZSBkb24ndCByZXNpemUgdGhlIHRleHRhcmVhIHRvIGJlIGxlc3MgdGhhbiAxMHB4LlxuICAgICAgLy8gVGhpcyBoYW5kbGVzIHRoZSBjYXNlIHdoZXJlIHRoZSBlZGl0b3IgaXMgaW5pdGlhbGx5IGhpZGRlbiBhbmQgbGF0ZXIgYmVjb21lcyB2aXNpYmxlLlxuICAgICAgLy8gVGhlIHNjcm9sbEhlaWdodCBpcyAwIHdoZW4gdGhlIHRleHRhcmVhIGlzIGhpZGRlbi5cbiAgICAgIGlmICh0aGlzLnRleHRhcmVhLnNjcm9sbEhlaWdodCA+IDEwKSB7XG4gICAgICAgIHRoaXMudGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICB0aGlzLnRleHRhcmVhLnN0eWxlLmhlaWdodCA9IHRoaXMudGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHRyaWdnZXIgYSBkdW1teSBldmVudCB0byBzZXQgdGhlIGNvcnJlY3QgaGVpZ2h0IG9mIHRoZSB0ZXh0YXJlYSBhZnRlciB0aGUgRE9NIGlzIGluaXRpYWxpemVkXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcIkRPTUNvbnRlbnRMb2FkZWRcIixcbiAgICAgIHRoaXMucmVkcmF3LFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vZWRpdG9yJztcbmltcG9ydCB7QmxvY2ssIEJsb2NrUmVhZGVyLCBSYXdCbG9ja30gZnJvbSAnLi9ibG9jaydcbmltcG9ydCB7VGV4dEJhc2VkQmxvY2t9IGZyb20gXCIuL3RleHQtYmFzZWQtYmxvY2tcIjtcblxuY29uc3QgVFlQRTogc3RyaW5nID0gJ3RleHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhd1RleHRCbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dEJsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3VGV4dEJsb2NrID0gcmF3QmxvY2sgYXMgUmF3VGV4dEJsb2NrO1xuICAgIHJldHVybiBuZXcgVGV4dEJsb2NrKGVkaXRvciwgcmF3VGV4dEJsb2NrLmNvbnRlbnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0QmxvY2sgZXh0ZW5kcyBUZXh0QmFzZWRCbG9jayB7XG5cbiAgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdGV4dCcpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRleHRhcmVhKTtcblxuICAgIHRoaXMudGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19jb250YWluZXJfX2VkaXRvcicsICdlZGl0b3ItYmxvY2tfX2JvZHknKTtcbiAgICB0aGlzLnRleHRhcmVhLnBsYWNlaG9sZGVyID0gJ0JvZHkgdGV4dCc7XG4gICAgdGhpcy50ZXh0YXJlYS5yb3dzID0gMTtcbiAgICB0aGlzLnRleHRhcmVhLmlubmVySFRNTCA9IHRoaXMuY29udGVudDtcblxuICAgIHRoaXMuZW5hYmxlQXV0b3Jlc2l6aW5nKCk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBzdXBlci5mb2N1cygpO1xuICAgIHRoaXMudGV4dGFyZWEuZm9jdXMoKTtcbiAgfVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd1RleHRCbG9jayA9IHtcbiAgICAgIHR5cGU6IFRZUEUsXG4gICAgICBjb250ZW50OiB0aGlzLnRleHRhcmVhLnZhbHVlXG4gICAgfTtcbiAgICByZXR1cm4gcmF3O1xuICB9XG59IiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBSYXdCbG9jaywgQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICd2aWRlbyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmF3VmlkZW9CbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb0Jsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3VmlkZW9CbG9jayA9IHJhd0Jsb2NrIGFzIFJhd1ZpZGVvQmxvY2s7XG4gICAgcmV0dXJuIG5ldyBWaWRlb0Jsb2NrKGVkaXRvciwgcmF3VmlkZW9CbG9jay51cmwpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb0Jsb2NrIGV4dGVuZHMgQmxvY2sge1xuXG4gIHVwbG9hZFBhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGlucHV0VGV4dENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5wdXRUZXh0TGFiZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0VGV4dEljb246IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW5wdXRUZXh0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICB2aWRlb1BhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2aWRlb0VsZW06IEhUTUxWaWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICB2aWRlb0lmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWRpdG9yOiBFZGl0b3IsIHB1YmxpYyB2aWRlb1VybDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWRpdG9yKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlbycpO1xuICAgIHRoaXMudmlkZW9FbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3ZpZGVvLWVsZW0nKVxuXG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkUGFuZWwpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvUGFuZWwpO1xuXG4gICAgdGhpcy52aWRlb1BhbmVsLmFwcGVuZENoaWxkKHRoaXMudmlkZW9FbGVtKTtcbiAgICB0aGlzLnZpZGVvUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy52aWRlb0lmcmFtZSk7XG4gICAgdGhpcy52aWRlb0lmcmFtZS5mcmFtZUJvcmRlciA9IFwiMFwiO1xuXG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0VGV4dExhYmVsKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRUZXh0Q29udGFpbmVyKTtcbiAgICB0aGlzLmlucHV0VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0VGV4dEljb24pO1xuICAgIHRoaXMuaW5wdXRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRUZXh0KTtcblxuICAgIHRoaXMudXBsb2FkUGFuZWwuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLXBhbmVsJyk7XG4gICAgdGhpcy5pbnB1dFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLXBhbmVsX19pbnB1dC1jb250YWluZXInKTtcbiAgICB0aGlzLmlucHV0VGV4dExhYmVsLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3VwbG9hZC1wYW5lbF9faW5wdXQtY29udGFpbmVyX19sYWJlbCcpO1xuICAgIHRoaXMuaW5wdXRUZXh0SWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3ZpZGVvX191cGxvYWQtcGFuZWxfX2lucHV0LWNvbnRhaW5lcl9faWNvbicpO1xuICAgIHRoaXMuaW5wdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3VwbG9hZC1wYW5lbF9faW5wdXQtY29udGFpbmVyX19pbnB1dCcpO1xuICAgIHRoaXMudmlkZW9JZnJhbWUuY2xhc3NMaXN0LmFkZCgnanMtdmlkZW8taWZyYW1lJyk7XG5cbiAgICB0aGlzLmlucHV0VGV4dExhYmVsLmlubmVySFRNTCA9ICdPciwgdXBsb2FkIGEgWW91dHViZSBvciBWaW1lbyB2aWRlbydcbiAgICB0aGlzLmlucHV0VGV4dEljb24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjUgMjBcIj48ZyBmaWxsPVwiIzY2NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cGF0aCBkPVwiTTYuMjUgMEM0LjkxNSAwIDMuOS0uMDA0IDMuMDYuMDkyIDIuMjIyLjE4OCAxLjQ4NS4zOTcuOTM5Ljk1MmMtLjU0NS41NTQtLjc1IDEuMzA1LS44NDYgMi4xNkMtLjAwMiAzLjk2OSAwIDUuMDAzIDAgNi4zNjV2Ny4yNzJjMCAxLjM2LS4wMDQgMi4zOTMuMDkgMy4yNDguMDk1Ljg1NS4zIDEuNjA2Ljg0NSAyLjE2LjU0NC41NTYgMS4yODIuNzY2IDIuMTIyLjg2Mi44NC4wOTcgMS44NTYuMDk0IDMuMTkzLjA5NGgxMi41YzEuMzM2IDAgMi4zNS4wMDQgMy4xOS0uMDkyLjg0LS4wOTYgMS41NzctLjMwNSAyLjEyMi0uODYuNTQ1LS41NTQuNzUtMS4zMDUuODQ2LTIuMTYuMDk1LS44NTYuMDkyLTEuODkuMDkyLTMuMjUyVjYuMzY0YzAtMS4zNi4wMDQtMi4zOTMtLjA5LTMuMjQ4LS4wOTUtLjg1NS0uMy0xLjYwNS0uODQ1LTIuMTZDMjMuNTIxLjQgMjIuNzgzLjE5IDIxLjk0My4wOTMgMjEuMTAzLS4wMDIgMjAuMDg3IDAgMTguNzUgMEg2LjI1em0wIDEuODE4aDEyLjVjMS4zMzYgMCAyLjMyNy4wMDUgMi45OTMuMDgyLjY2NS4wNzYuOTM0LjIxIDEuMDYuMzM5LjEyNi4xMjkuMjU2LjQwMi4zMzEgMS4wOC4wNzUuNjc3LjA4IDEuNjg1LjA4IDMuMDQ1djcuMjcyYzAgMS4zNjEtLjAwNSAyLjM3LS4wOCAzLjA0Ny0uMDc1LjY3OC0uMjA3Ljk1MS0uMzMzIDEuMDgtLjEyNi4xMjgtLjM5NC4yNjEtMS4wNi4zMzctLjY2Ni4wNzYtMS42NTYuMDgyLTIuOTkuMDgySDYuMjVjLTEuMzM3IDAtMi4zMjctLjAwNS0yLjk5My0uMDgyLS42NjYtLjA3Ni0uOTM0LS4yMS0xLjA2LS4zMzktLjEyNy0uMTI5LS4yNTctLjQwMi0uMzMyLTEuMDgtLjA3NS0uNjc3LS4wOC0xLjY4NS0uMDgtMy4wNDVWNi4zNjRjMC0xLjM2MS4wMDUtMi4zNy4wOC0zLjA0Ny4wNzUtLjY3OC4yMDctLjk1MS4zMzMtMS4wOC4xMjYtLjEyOC4zOTUtLjI2MSAxLjA2LS4zMzcuNjY2LS4wNzYgMS42NTYtLjA4MiAyLjk5MS0uMDgyelwiLz48cGF0aCBkPVwiTTguNzQ0IDQuMTkyYTEuMzY5IDEuMzY5IDAgMCAwLS43MDggMS4yMDJ2OS4yMTJjMCAuNS4yNzEuOTY1LjcwOCAxLjIwMi40MzQuMjM2Ljk2NS4yMSAxLjM3NC0uMDY3bDYuNzg0LTQuNjA2aC4wMDFhMS4zNzYgMS4zNzYgMCAwIDAtLjAwMS0yLjI3Yy0xLjQyOC0uOTY4LTUuMjE2LTMuNTQtNi43ODQtNC42MDVhMS4zMjQgMS4zMjQgMCAwIDAtMS4zNzQtLjA2OHptMS4wNzggMi4wNWMxLjYxIDEuMDk0IDQuMDc4IDIuNzcgNS41MzUgMy43NThsLTUuNTM1IDMuNzU3VjYuMjQzelwiLz48L2c+PC9zdmc+JztcbiAgICB0aGlzLmlucHV0VGV4dC50eXBlID0gJ3RleHQnO1xuICAgIHRoaXMuaW5wdXRUZXh0LnZhbHVlID0gdmlkZW9Vcmw7XG4gICAgdGhpcy5pbnB1dFRleHQub25jaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KTogYW55ID0+IHtcbiAgICAgIHRoaXMudmlkZW9VcmwgPSB0aGlzLmlucHV0VGV4dC52YWx1ZS50cmltKCk7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdFlvdXR1YmVJZCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHJlZ0V4cCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj18XFw/dj0pKFteI1xcJlxcP10qKS4qLztcbiAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsyXSA6IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdFZpbWVvSWQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCByZWdFeHAgPSAvXi4rdmltZW8uY29tXFwvKC4qXFwvKT8oW14jXFw/XSopLztcbiAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsyXSB8fCBtYXRjaFsxXSA6IG51bGw7XG4gIH1cblxuICB1cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZpZGVvVXJsKSB7XG4gICAgICBpZiAodGhpcy52aWRlb1VybC5pbmNsdWRlcygnY2xvdWRpbmFyeScpKSB7XG4gICAgICAgIHRoaXMudmlkZW9FbGVtLnNyYyA9IHRoaXMudmlkZW9Vcmw7XG4gICAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnVwbG9hZFBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudmlkZW9VcmwuaW5jbHVkZXMoJ3lvdXR1YmUnKSkge1xuICAgICAgICBsZXQgeW91dHViZUlkID0gVmlkZW9CbG9jay5leHRyYWN0WW91dHViZUlkKHRoaXMudmlkZW9VcmwpO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLnNyYz1gaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt5b3V0dWJlSWR9P3JlbD0wYDtcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS53aWR0aD1cIjU2MFwiO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLmhlaWdodD1cIjMxNVwiO1xuXG4gICAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy52aWRlb0VsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZGVvVXJsLmluY2x1ZGVzKCd2aW1lbycpKSB7XG4gICAgICAgIGxldCB2aW1lb0lkID0gVmlkZW9CbG9jay5leHRyYWN0VmltZW9JZCh0aGlzLnZpZGVvVXJsKTtcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS5zcmM9YGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3ZpbWVvSWR9P2NvbG9yPWVjNzA3MCZwb3J0cmFpdD0wYDtcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS53aWR0aD1cIjY0MFwiO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLmhlaWdodD1cIjI0MFwiO1xuXG4gICAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy52aWRlb0VsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZGVvUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgc3VwZXIuZm9jdXMoKTtcbiAgfVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd1ZpZGVvQmxvY2sgPSB7XG4gICAgICB0eXBlOiBUWVBFLFxuICAgICAgdXJsOiB0aGlzLnZpZGVvVXJsLFxuICAgIH07XG4gICAgcmV0dXJuIHJhdztcbiAgfVxufVxuXG4iLCJpbXBvcnQge0Jsb2NrfSBmcm9tICcuL2Jsb2NrL2Jsb2NrJztcbmltcG9ydCB7SW1hZ2VCbG9ja30gZnJvbSAnLi9ibG9jay9pbWFnZS1ibG9jayc7XG5pbXBvcnQge1F1b3RlQmxvY2t9IGZyb20gJy4vYmxvY2svcXVvdGUtYmxvY2snO1xuaW1wb3J0IHtIZWFkZXJCbG9ja30gZnJvbSAnLi9ibG9jay9oZWFkZXItYmxvY2snO1xuaW1wb3J0IHtUZXh0QmxvY2t9IGZyb20gJy4vYmxvY2svdGV4dC1ibG9jayc7XG5pbXBvcnQge0VkaXRvcn0gZnJvbSAnLi9lZGl0b3InO1xuaW1wb3J0IHtWaWRlb0Jsb2NrfSBmcm9tIFwiLi9ibG9jay92aWRlby1ibG9ja1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBDb250cm9sIHtcbiAgZWxlbTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGFzaGJvYXJkOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBleHBhbmRIYW5kbGU6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV4cGFuZEJ1dHRvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcXVvdGVCdXR0b246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckJ1dHRvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGV4dEJ1dHRvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VCdXR0b246IEhUTUxEaXZFbGVtZW50O1xuICB2aWRlb0J1dHRvbjogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgYmxvY2s6IEJsb2NrKSB7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sJyk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMuZXhwYW5kSGFuZGxlKTtcbiAgICB0aGlzLmV4cGFuZEhhbmRsZS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZXhwYW5kLWhhbmRsZScsICdqcy1leHBhbmQtaGFuZGxlJyk7XG5cbiAgICB0aGlzLmV4cGFuZEhhbmRsZS5hcHBlbmRDaGlsZCh0aGlzLmV4cGFuZEJ1dHRvbik7XG4gICAgdGhpcy5leHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2V4cGFuZC1oYW5kbGVfX2J1dHRvbicpO1xuICAgIHRoaXMuZXhwYW5kQnV0dG9uLmlubmVySFRNTCA9ICcrIEFERCc7XG4gICAgdGhpcy5leHBhbmRIYW5kbGUub25jbGljayA9ICgpID0+IHsgdGhpcy50b2dnbGVEYXNoYm9hcmQoKTsgfTtcblxuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmRhc2hib2FyZCk7XG4gICAgdGhpcy5kYXNoYm9hcmQuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2Rhc2hib2FyZCcpO1xuXG4gICAgdGhpcy5kYXNoYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXJCdXR0b24pO1xuICAgIHRoaXMuaGVhZGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19kYXNoYm9hcmRfX2J1dHRvbicsICdqcy1oZWFkZXItYnV0dG9uJyk7XG4gICAgdGhpcy5oZWFkZXJCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMjIgMTRcIj48dGV4dCBmaWxsPVwiIzY2NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBmb250LWZhbWlseT1cIlNvdXJjZVNhbnNQcm8tQm9sZCwgU291cmNlIFNhbnMgUHJvXCIgZm9udC1zaXplPVwiMjBcIiBmb250LXdlaWdodD1cImJvbGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ4IC0zMylcIj48dHNwYW4geD1cIjQ2Ljk4XCIgeT1cIjQ3XCI+SDE8L3RzcGFuPjwvdGV4dD48L3N2Zz48cD5IZWFkZXIgVGV4dDwvcD4nO1xuICAgIHRoaXMuaGVhZGVyQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBlZGl0b3IuYWRkKG5ldyBIZWFkZXJCbG9jayhlZGl0b3IsICcnKSwgdGhpcy5ibG9jayk7XG4gICAgICB0aGlzLmNvbGxhcHNlQWxsKCk7XG4gICAgfTtcblxuICAgIHRoaXMuZGFzaGJvYXJkLmFwcGVuZENoaWxkKHRoaXMucXVvdGVCdXR0b24pO1xuICAgIHRoaXMucXVvdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2Rhc2hib2FyZF9fYnV0dG9uJywgJ2pzLXF1b3RlLWJ1dHRvbicpO1xuICAgIHRoaXMucXVvdGVCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxNVwiIHZpZXdCb3g9XCIwIDAgMTggMTVcIj48cGF0aCBmaWxsPVwiIzY2NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTYuODgxIDE0LjE5NUguNTExVjkuNjRjMC0xLjg0My4xNjMtMy4yOTguNDg4LTQuMzYzLjMyNS0xLjA2NS45MjYtMi4wMjEgMS44MDItMi44NjdDMy42NzcgMS41NjIgNC43OTYuODk4IDYuMTU2LjQxNGwxLjI0NiAyLjYzYy0xLjI2OS40MjItMi4xOCAxLjAxMi0yLjczMSAxLjc2Ny0uNTUyLjc1Ni0uODQyIDEuNzYtLjg3MyAzLjAxNWgzLjA4M3Y2LjM3em0xMC42MyAwaC02LjM2OVY5LjY0YzAtMS44NTguMTYzLTMuMzE3LjQ4OC00LjM3NC4zMjUtMS4wNTguOTI5LTIuMDEgMS44MTMtMi44NTYuODg0LS44NDcgMS45OTgtMS41MTEgMy4zNDMtMS45OTVsMS4yNDcgMi42M2MtMS4yNy40MjItMi4xOCAxLjAxMi0yLjczMSAxLjc2Ny0uNTUyLjc1Ni0uODQzIDEuNzYtLjg3MyAzLjAxNWgzLjA4M3Y2LjM3elwiLz48L3N2Zz48cD5RdW90ZTxwPic7XG4gICAgdGhpcy5xdW90ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZWRpdG9yLmFkZChuZXcgUXVvdGVCbG9jayhlZGl0b3IsICcnKSwgdGhpcy5ibG9jayk7XG4gICAgICB0aGlzLmNvbGxhcHNlQWxsKCk7XG4gICAgfTtcblxuICAgIHRoaXMuZGFzaGJvYXJkLmFwcGVuZENoaWxkKHRoaXMudGV4dEJ1dHRvbik7XG4gICAgdGhpcy50ZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19kYXNoYm9hcmRfX2J1dHRvbicsICdqcy10ZXh0LWJ1dHRvbicpO1xuICAgIHRoaXMudGV4dEJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyMCAxNlwiPjx0ZXh0IGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGZvbnQtZmFtaWx5PVwiU291cmNlU2Fuc1Byby1SZWd1bGFyLCBTb3VyY2UgU2FucyBQcm9cIiBmb250LXNpemU9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTQ2IC0zMilcIj4gPHRzcGFuIHg9XCIxNDQuNTdcIiB5PVwiNDdcIj5CZDwvdHNwYW4+IDwvdGV4dD48L3N2Zz48cD5Cb2R5IFRleHQ8L3A+JztcbiAgICB0aGlzLnRleHRCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGVkaXRvci5hZGQobmV3IFRleHRCbG9jayhlZGl0b3IsICcnKSwgdGhpcy5ibG9jayk7XG4gICAgICB0aGlzLmNvbGxhcHNlQWxsKCk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmVkaXRvci5vcHRpb25zLnVwbG9hZEltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmRhc2hib2FyZC5hcHBlbmRDaGlsZCh0aGlzLmltYWdlQnV0dG9uKTtcblxuICAgICAgdGhpcy5pbWFnZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZGFzaGJvYXJkX19idXR0b24nLCAnanMtaW1hZ2UtYnV0dG9uJyk7XG4gICAgICB0aGlzLmltYWdlQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI1IDIwXCI+PHBhdGggZmlsbD1cIiM2NjZcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIgZD1cIk0xLjkwMiAwQy44NjIgMCAwIC45MDcgMCAydjE2YzAgMS4wOTMuODYyIDIgMS45MDIgMmgyMS4xOTZjMS4wNCAwIDEuOTAyLS45MDcgMS45MDItMlYyYzAtMS4wOTMtLjg2Mi0yLTEuOTAyLTJIMS45MDJ6bTAgMS43MTRoMjEuMTk2Yy4xNjQgMCAuMjcyLjExMy4yNzIuMjg2djExLjM1N2wtNC4xMS0zLjQ1NWEuODA1LjgwNSAwIDAgMC0uOTY5LS4wNDVsLTMuODU1IDIuNzg2LTUuMjMtNC40NTVBLjc5OC43OTggMCAwIDAgOC42MDEgOGEuNzk2Ljc5NiAwIDAgMC0uMzczLjE1MkwxLjYzIDEyLjkzN1YyYzAtLjE3My4xMDgtLjI4Ni4yNzItLjI4NnpNMTQuNDAyIDRjLTEuMzQgMC0yLjQ0NSAxLjE2MS0yLjQ0NSAyLjU3MSAwIDEuNDEgMS4xMDQgMi41NzIgMi40NDUgMi41NzIgMS4zNDEgMCAyLjQ0Ni0xLjE2MiAyLjQ0Ni0yLjU3MiAwLTEuNDEtMS4xMDUtMi41NzEtMi40NDYtMi41NzF6bTAgMS43MTRjLjQ2IDAgLjgxNS4zNzQuODE1Ljg1NyAwIC40ODQtLjM1NS44NTgtLjgxNS44NTgtLjQ2IDAtLjgxNS0uMzc0LS44MTUtLjg1OCAwLS40ODMuMzU1LS44NTcuODE1LS44NTd6TTguNjYyIDkuOTNsNS4yMyA0LjQ0NmEuODA1LjgwNSAwIDAgMCAuOTY5LjA0NWwzLjg0Ny0yLjc4NiA0LjY2MiAzLjkyVjE4YzAgLjE3My0uMTA4LjI4Ni0uMjcyLjI4NkgxLjkwMmMtLjE2NCAwLS4yNzItLjExMy0uMjcyLS4yODZ2LTIuOTczbDcuMDMyLTUuMDk4elwiLz48L3N2Zz48cD5JbWFnZTwvcD4nO1xuICAgICAgdGhpcy5pbWFnZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBlZGl0b3IuYWRkKG5ldyBJbWFnZUJsb2NrKGVkaXRvciwgJycpLCB0aGlzLmJsb2NrKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZUFsbCgpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnZpZGVvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5kYXNoYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy52aWRlb0J1dHRvbik7XG5cbiAgICB0aGlzLnZpZGVvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19kYXNoYm9hcmRfX2J1dHRvbicsICdqcy12aWRlby1idXR0b24nKVxuICAgIHRoaXMudmlkZW9CdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjUgMjBcIj48ZyBmaWxsPVwiIzY2NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cGF0aCBkPVwiTTYuMjUgMEM0LjkxNSAwIDMuOS0uMDA0IDMuMDYuMDkyIDIuMjIyLjE4OCAxLjQ4NS4zOTcuOTM5Ljk1MmMtLjU0NS41NTQtLjc1IDEuMzA1LS44NDYgMi4xNkMtLjAwMiAzLjk2OSAwIDUuMDAzIDAgNi4zNjV2Ny4yNzJjMCAxLjM2LS4wMDQgMi4zOTMuMDkgMy4yNDguMDk1Ljg1NS4zIDEuNjA2Ljg0NSAyLjE2LjU0NC41NTYgMS4yODIuNzY2IDIuMTIyLjg2Mi44NC4wOTcgMS44NTYuMDk0IDMuMTkzLjA5NGgxMi41YzEuMzM2IDAgMi4zNS4wMDQgMy4xOS0uMDkyLjg0LS4wOTYgMS41NzctLjMwNSAyLjEyMi0uODYuNTQ1LS41NTQuNzUtMS4zMDUuODQ2LTIuMTYuMDk1LS44NTYuMDkyLTEuODkuMDkyLTMuMjUyVjYuMzY0YzAtMS4zNi4wMDQtMi4zOTMtLjA5LTMuMjQ4LS4wOTUtLjg1NS0uMy0xLjYwNS0uODQ1LTIuMTZDMjMuNTIxLjQgMjIuNzgzLjE5IDIxLjk0My4wOTMgMjEuMTAzLS4wMDIgMjAuMDg3IDAgMTguNzUgMEg2LjI1em0wIDEuODE4aDEyLjVjMS4zMzYgMCAyLjMyNy4wMDUgMi45OTMuMDgyLjY2NS4wNzYuOTM0LjIxIDEuMDYuMzM5LjEyNi4xMjkuMjU2LjQwMi4zMzEgMS4wOC4wNzUuNjc3LjA4IDEuNjg1LjA4IDMuMDQ1djcuMjcyYzAgMS4zNjEtLjAwNSAyLjM3LS4wOCAzLjA0Ny0uMDc1LjY3OC0uMjA3Ljk1MS0uMzMzIDEuMDgtLjEyNi4xMjgtLjM5NC4yNjEtMS4wNi4zMzctLjY2Ni4wNzYtMS42NTYuMDgyLTIuOTkuMDgySDYuMjVjLTEuMzM3IDAtMi4zMjctLjAwNS0yLjk5My0uMDgyLS42NjYtLjA3Ni0uOTM0LS4yMS0xLjA2LS4zMzktLjEyNy0uMTI5LS4yNTctLjQwMi0uMzMyLTEuMDgtLjA3NS0uNjc3LS4wOC0xLjY4NS0uMDgtMy4wNDVWNi4zNjRjMC0xLjM2MS4wMDUtMi4zNy4wOC0zLjA0Ny4wNzUtLjY3OC4yMDctLjk1MS4zMzMtMS4wOC4xMjYtLjEyOC4zOTUtLjI2MSAxLjA2LS4zMzcuNjY2LS4wNzYgMS42NTYtLjA4MiAyLjk5MS0uMDgyelwiLz48cGF0aCBkPVwiTTguNzQ0IDQuMTkyYTEuMzY5IDEuMzY5IDAgMCAwLS43MDggMS4yMDJ2OS4yMTJjMCAuNS4yNzEuOTY1LjcwOCAxLjIwMi40MzQuMjM2Ljk2NS4yMSAxLjM3NC0uMDY3bDYuNzg0LTQuNjA2aC4wMDFhMS4zNzYgMS4zNzYgMCAwIDAtLjAwMS0yLjI3Yy0xLjQyOC0uOTY4LTUuMjE2LTMuNTQtNi43ODQtNC42MDVhMS4zMjQgMS4zMjQgMCAwIDAtMS4zNzQtLjA2OHptMS4wNzggMi4wNWMxLjYxIDEuMDk0IDQuMDc4IDIuNzcgNS41MzUgMy43NThsLTUuNTM1IDMuNzU3VjYuMjQzelwiLz48L2c+PC9zdmc+PHA+VmlkZW88L3A+JztcbiAgICB0aGlzLnZpZGVvQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBlZGl0b3IuYWRkKG5ldyBWaWRlb0Jsb2NrKGVkaXRvciwgJycpLCB0aGlzLmJsb2NrKTtcbiAgICB9O1xuICB9XG5cbiAgdG9nZ2xlRGFzaGJvYXJkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRhc2hib2FyZC5zdHlsZS5kaXNwbGF5ID09ICdub25lJylcbiAgICAgIHRoaXMuZXhwYW5kRGFzaGJvYXJkKCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5jb2xsYXBzZURhc2hib2FyZCgpO1xuICB9XG5cbiAgY29sbGFwc2VEYXNoYm9hcmQoKTogdm9pZCB7XG4gICAgdGhpcy5kYXNoYm9hcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLmV4cGFuZEJ1dHRvbi5pbm5lckhUTUwgPSAnKyBBREQnXG4gIH1cblxuICBleHBhbmREYXNoYm9hcmQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xsYXBzZUFsbCgpO1xuICAgIHRoaXMuZGFzaGJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdGhpcy5leHBhbmRCdXR0b24uaW5uZXJIVE1MID0gJ0hJREUnO1xuICB9XG5cbiAgY29sbGFwc2VBbGwoKSB7XG4gICAgZm9yIChsZXQgaT0wO2kgPCB0aGlzLmVkaXRvci5ibG9ja3MubGVuZ3RoO2krKykge1xuICAgICAgdGhpcy5lZGl0b3IuYmxvY2tzW2ldLmNvbnRyb2wuY29sbGFwc2VEYXNoYm9hcmQoKTtcbiAgICB9XG4gICAgdGhpcy5lZGl0b3IubGFzdENvbnRyb2wuY29sbGFwc2VEYXNoYm9hcmQoKTtcbiAgfVxufSIsImltcG9ydCB7Q29udHJvbH0gZnJvbSAnLi9jb250cm9sJztcbmltcG9ydCB7QmxvY2ssIEJsb2NrUmVhZGVyLCBSYXdCbG9ja30gZnJvbSAnLi9ibG9jay9ibG9jayc7XG5pbXBvcnQge0ltYWdlQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2svaW1hZ2UtYmxvY2snO1xuaW1wb3J0IHtRdW90ZUJsb2NrUmVhZGVyfSBmcm9tICcuL2Jsb2NrL3F1b3RlLWJsb2NrJztcbmltcG9ydCB7SGVhZGVyQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2svaGVhZGVyLWJsb2NrJztcbmltcG9ydCB7VGV4dEJsb2NrUmVhZGVyfSBmcm9tICcuL2Jsb2NrL3RleHQtYmxvY2snO1xuaW1wb3J0IHtWaWRlb0Jsb2NrUmVhZGVyfSBmcm9tICcuL2Jsb2NrL3ZpZGVvLWJsb2NrJztcblxuY29uc3QgQkxPQ0tTOiBBcnJheTxCbG9ja1JlYWRlcj4gPSBbXG4gIG5ldyBUZXh0QmxvY2tSZWFkZXIoKSxcbiAgbmV3IEhlYWRlckJsb2NrUmVhZGVyKCksXG4gIG5ldyBRdW90ZUJsb2NrUmVhZGVyKCksXG4gIG5ldyBJbWFnZUJsb2NrUmVhZGVyKCksXG4gIG5ldyBWaWRlb0Jsb2NrUmVhZGVyKCksXG5dO1xuXG5mdW5jdGlvbiBjb252ZXJ0UmF3Q29udGVudChyYXdDb250ZW50OiBBcnJheTxSYXdCbG9jaz4sIGVkaXRvcjogRWRpdG9yKTogQXJyYXk8QmxvY2s+IHtcbiAgbGV0IGJsb2NrczogQXJyYXk8QmxvY2s+ID0gW107XG5cbiAgZm9yIChsZXQgcmF3QmxvY2sgb2YgcmF3Q29udGVudCkge1xuICAgIGxldCBwcm9jZXNzZWQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBibG9jayBvZiBCTE9DS1MpIHtcbiAgICAgIGlmIChibG9jay5jYW5QYXJzZShyYXdCbG9jaykpIHtcbiAgICAgICAgcHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgYmxvY2tzLnB1c2goYmxvY2sucGFyc2UocmF3QmxvY2ssIGVkaXRvcikpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXByb2Nlc3NlZCkge1xuICAgICAgY29uc29sZS53YXJuKGBVbnJlY29nbml6ZWQgYmxvY2sgdHlwZTogJyR7cmF3QmxvY2sudHlwZX0nLiBJZ25vcmUuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJsb2Nrcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFZGl0b3JPcHRpb25zIHtcbiAgY29udGVudDogQXJyYXk8UmF3QmxvY2s+O1xuICB1cGxvYWRJbWFnZT86IChmaWxlOiBGaWxlLCBzdWNjZXNzQ2FsbGJhY2s6ICh1cmw6IHN0cmluZykgPT4gdm9pZCwgZmFpbHVyZUNhbGxiYWNrOiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEVkaXRvciB7XG4gIGJsb2NrczogQXJyYXk8QmxvY2s+O1xuICBsYXN0Q29udHJvbDogQ29udHJvbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbTogSFRNTERpdkVsZW1lbnQsXG4gICAgcHVibGljIG9wdGlvbnM6IEVkaXRvck9wdGlvbnNcbiAgKSB7XG4gICAgdGhpcy5ibG9ja3MgPSBjb252ZXJ0UmF3Q29udGVudCh0aGlzLm9wdGlvbnMuY29udGVudCwgdGhpcyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGFkZChibG9jazogQmxvY2ssIGJlZm9yZUJsb2NrOiBCbG9jaykge1xuICAgIGlmIChiZWZvcmVCbG9jaykge1xuICAgICAgZm9yIChsZXQgaT0wO2kgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGlmIChiZWZvcmVCbG9jayA9PSB0aGlzLmJsb2Nrc1tpXSkge1xuICAgICAgICAgIHRoaXMuYmxvY2tzLnNwbGljZShpLCAwLCBibG9jayk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZWxlbS5pbnNlcnRCZWZvcmUoYmxvY2suZWxlbSwgYmVmb3JlQmxvY2suZWxlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgdGhpcy5lbGVtLmluc2VydEJlZm9yZShibG9jay5lbGVtLCB0aGlzLmxhc3RDb250cm9sLmVsZW0pO1xuICAgIH1cblxuICAgIGJsb2NrLmZvY3VzKCk7XG4gIH1cblxuICByZW1vdmUoYmxvY2s6IEJsb2NrKSB7XG4gICAgZm9yIChsZXQgaT0wO2kgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7aSsrKSB7XG4gICAgICBpZiAoYmxvY2sgPT0gdGhpcy5ibG9ja3NbaV0pIHtcbiAgICAgICAgdGhpcy5ibG9ja3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBibG9jay5lbGVtLnJlbW92ZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWRyYXcoKSB7XG4gICAgZm9yIChsZXQgYmxvY2sgb2YgdGhpcy5ibG9ja3MpIHtcbiAgICAgIGJsb2NrLnJlZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbnRlbnQoKTogQXJyYXk8UmF3QmxvY2s+IHtcbiAgICBsZXQgcmF3Q29udGVudDogQXJyYXk8UmF3QmxvY2s+ID0gW107XG4gICAgZm9yIChsZXQgYmxvY2sgb2YgdGhpcy5ibG9ja3MpIHtcbiAgICAgIHJhd0NvbnRlbnQucHVzaChibG9jay5nZXRSYXdDb250ZW50KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmF3Q29udGVudDtcbiAgfVxuXG4gIHNob3dEZWxldGVCdXR0b24oYmxvY2s6IEJsb2NrKSB7XG4gICAgZm9yIChsZXQgaT0wO2kgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7aSsrKSB7XG4gICAgICB0aGlzLmJsb2Nrc1tpXS5kZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGlmIChibG9jayA9PSB0aGlzLmJsb2Nrc1tpXSkge1xuICAgICAgICB0aGlzLmJsb2Nrc1tpXS5kZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCkge1xuICAgIGZvciAobGV0IGJsb2NrIG9mIHRoaXMuYmxvY2tzKSB7XG4gICAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQoYmxvY2suZWxlbSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMubGFzdENvbnRyb2wgPSBuZXcgQ29udHJvbCh0aGlzLCBudWxsKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy5sYXN0Q29udHJvbC5lbGVtKTtcbiAgICB0aGlzLmxhc3RDb250cm9sLmV4cGFuZERhc2hib2FyZCgpO1xuICB9XG59XG4iLCJpbXBvcnQge0VkaXRvciwgRWRpdG9yT3B0aW9uc30gZnJvbSAnLi9lZGl0b3IvZWRpdG9yJ1xuaW1wb3J0IHtSYXdCbG9ja30gZnJvbSAnLi9lZGl0b3IvYmxvY2svYmxvY2snO1xuaW1wb3J0IHtSYXdIZWFkZXJCbG9ja30gZnJvbSAnLi9lZGl0b3IvYmxvY2svaGVhZGVyLWJsb2NrJztcbmltcG9ydCB7UmF3SW1hZ2VCbG9ja30gZnJvbSAnLi9lZGl0b3IvYmxvY2svaW1hZ2UtYmxvY2snO1xuaW1wb3J0IHtSYXdRdW90ZUJsb2NrfSBmcm9tICcuL2VkaXRvci9ibG9jay9xdW90ZS1ibG9jayc7XG5pbXBvcnQge1Jhd1RleHRCbG9ja30gZnJvbSAnLi9lZGl0b3IvYmxvY2svdGV4dC1ibG9jayc7XG5pbXBvcnQge1Jhd1ZpZGVvQmxvY2t9IGZyb20gJy4vZWRpdG9yL2Jsb2NrL3ZpZGVvLWJsb2NrJztcblxuKDxhbnk+d2luZG93KS5pbnN0YWxsRWRpdG9yID0gKGVsZW06IEhUTUxEaXZFbGVtZW50LCBvcHRpb25zOiBFZGl0b3JPcHRpb25zID0gKDxFZGl0b3JPcHRpb25zPnt9KSkgPT4ge1xuICByZXR1cm4gbmV3IEVkaXRvcihlbGVtLCBvcHRpb25zKTtcbn07XG5cbmV4cG9ydCB7IEVkaXRvciwgRWRpdG9yT3B0aW9ucywgUmF3QmxvY2ssIFJhd0hlYWRlckJsb2NrLCBSYXdJbWFnZUJsb2NrLCBSYXdRdW90ZUJsb2NrLCBSYXdUZXh0QmxvY2ssIFJhd1ZpZGVvQmxvY2sgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=