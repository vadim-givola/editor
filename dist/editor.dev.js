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
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/ts/editor/block/block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
        _this.textarea.setAttribute('rows', '1');
        _this.textarea.addEventListener('input', function () {
            if (this.textarea.scrollHeight > this.textarea.clientHeight) {
                this.textarea.style.height = this.textarea.scrollHeight + "px";
            }
        }.bind(_this));
        _this.textarea.innerHTML = _this.content;
        return _this;
    }
    HeaderBlock.prototype.focus = function () {
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
}(_block__WEBPACK_IMPORTED_MODULE_0__["Block"]));



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
    }
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
    ImageBlock.prototype.focus = function () { };
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
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/ts/editor/block/block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
        _this.textarea.setAttribute('rows', '1');
        _this.textarea.addEventListener('input', function () {
            if (this.textarea.scrollHeight > this.textarea.clientHeight) {
                this.textarea.style.height = this.textarea.scrollHeight + "px";
            }
        }.bind(_this));
        _this.textarea.innerHTML = _this.content;
        return _this;
    }
    QuoteBlock.prototype.focus = function () {
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
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/ts/editor/block/block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
        _this.textarea.setAttribute('rows', '1');
        _this.textarea.addEventListener('input', function () {
            if (this.textarea.scrollHeight > this.textarea.clientHeight) {
                this.textarea.style.height = this.textarea.scrollHeight + "px";
            }
        }.bind(_this));
        _this.textarea.innerHTML = _this.content;
        return _this;
    }
    TextBlock.prototype.focus = function () {
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
}(_block__WEBPACK_IMPORTED_MODULE_0__["Block"]));



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
    }
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
        _this.uploadIconContainer = document.createElement('div');
        _this.uploadIcon = document.createElement('div');
        _this.uploadLabel = document.createElement('div');
        _this.uploadButton = document.createElement('button');
        _this.loadingIcon = document.createElement('span');
        _this.inputFile = document.createElement('input');
        _this.inputTextContainer = document.createElement('div');
        _this.inputTextLabel = document.createElement('div');
        _this.inputTextIcon = document.createElement('span');
        _this.inputText = document.createElement('input');
        _this.videoPanel = document.createElement('div');
        _this.videoElem = document.createElement('video');
        _this.videoIframe = document.createElement('iframe');
        _this.elem.classList.add('editor-block__video');
        _this.uploadButton.classList.add('editor-block__video__upload-button');
        _this.videoElem.classList.add('editor-block__video__video-elem');
        _this.elem.appendChild(_this.uploadPanel);
        _this.elem.appendChild(_this.videoPanel);
        _this.videoPanel.appendChild(_this.videoElem);
        _this.videoPanel.appendChild(_this.videoIframe);
        _this.videoIframe.frameBorder = "0";
        _this.uploadPanel.appendChild(_this.uploadIconContainer);
        _this.uploadIconContainer.appendChild(_this.inputFile);
        _this.uploadIconContainer.appendChild(_this.uploadIcon);
        _this.uploadIconContainer.appendChild(_this.uploadLabel);
        _this.uploadIconContainer.appendChild(_this.uploadButton);
        _this.uploadPanel.appendChild(_this.loadingIcon);
        _this.uploadPanel.appendChild(_this.inputTextLabel);
        _this.uploadPanel.appendChild(_this.inputTextContainer);
        _this.inputTextContainer.appendChild(_this.inputTextIcon);
        _this.inputTextContainer.appendChild(_this.inputText);
        _this.uploadPanel.classList.add('editor-block__video__upload-panel');
        _this.uploadIconContainer.classList.add('editor-block__video__upload-panel__icon-container');
        _this.uploadIcon.classList.add('editor-block__video__upload-panel__icon-container__icon');
        _this.uploadButton.classList.add('editor-block__video__upload-panel__icon-container__button');
        _this.inputFile.classList.add('editor-block__video__upload-panel__icon-container__input');
        _this.inputTextContainer.classList.add('editor-block__video__upload-panel__input-container');
        _this.inputTextLabel.classList.add('editor-block__video__upload-panel__input-container__label');
        _this.inputTextIcon.classList.add('editor-block__video__upload-panel__input-container__icon');
        _this.inputText.classList.add('editor-block__video__upload-panel__input-container__input');
        _this.videoIframe.classList.add('js-video-iframe');
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
            '        <g fill="#666">\n' +
            '            <path d="M20.5 4c-1.603 0-2.82-.004-3.827.11-1.008.116-1.893.366-2.547 1.032-.655.666-.901 1.567-1.015 2.593-.114 1.026-.111 2.267-.111 3.901v8.728c0 1.631-.004 2.871.109 3.897.113 1.025.359 1.926 1.013 2.593.653.666 1.538.917 2.546 1.033 1.008.116 2.227.113 3.832.113h15c1.603 0 2.82.004 3.827-.11 1.008-.116 1.893-.366 2.547-1.032.655-.666.901-1.567 1.015-2.593.114-1.026.111-2.267.111-3.901v-8.728c0-1.631.004-2.871-.109-3.897-.113-1.025-.359-1.926-1.013-2.593-.653-.666-1.538-.917-2.546-1.033C38.324 3.997 37.105 4 35.5 4h-15zm0 2.182h15c1.604 0 2.792.006 3.59.098.8.092 1.122.253 1.273.407.152.154.308.482.398 1.295.09.814.096 2.023.096 3.654v8.728c0 1.632-.006 2.842-.096 3.656-.09.813-.248 1.141-.4 1.295-.151.154-.473.314-1.272.405-.799.091-1.987.098-3.589.098h-15c-1.603 0-2.792-.006-3.59-.098-.8-.092-1.122-.253-1.273-.407-.152-.154-.308-.482-.398-1.295-.09-.814-.096-2.023-.096-3.654v-8.728c0-1.632.006-2.842.096-3.656.09-.813.248-1.141.4-1.295.151-.154.473-.314 1.272-.405.8-.091 1.987-.098 3.59-.098z"/>\n' +
            '            <path d="M23.823 9.188a1.608 1.608 0 0 0-.823 1.41v10.804c0 .586.315 1.132.823 1.41a1.527 1.527 0 0 0 1.597-.08l7.885-5.401h.002c.43-.296.693-.795.693-1.331a1.618 1.618 0 0 0-.695-1.33L25.42 9.266a1.527 1.527 0 0 0-1.597-.079zm1.253 2.405L31.509 16l-6.433 4.406v-8.813z"/>\n' +
            '        </g>\n' +
            '        <path fill-rule="nonzero" stroke="#666" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M34 24l-3 11h4l1 5h3l-1-5h4z"/>\n' +
            '    </g>\n' +
            '</svg>\n';
        if (_this.isAdvancedUpload())
            _this.uploadLabel.innerHTML = 'Drag and drop a photo to upload or tap to upload';
        else
            _this.uploadLabel.innerHTML = 'Tap to upload';
        _this.uploadIconContainer.onclick = function () {
            _this.inputFile.click();
        };
        _this.inputTextLabel.innerHTML = 'Or, upload a Youtube or Vimeo video';
        _this.inputTextIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092 2.222.188 1.485.397.939.952c-.545.554-.75 1.305-.846 2.16C-.002 3.969 0 5.003 0 6.365v7.272c0 1.36-.004 2.393.09 3.248.095.855.3 1.606.845 2.16.544.556 1.282.766 2.122.862.84.097 1.856.094 3.193.094h12.5c1.336 0 2.35.004 3.19-.092.84-.096 1.577-.305 2.122-.86.545-.554.75-1.305.846-2.16.095-.856.092-1.89.092-3.252V6.364c0-1.36.004-2.393-.09-3.248-.095-.855-.3-1.605-.845-2.16C23.521.4 22.783.19 21.943.093 21.103-.002 20.087 0 18.75 0H6.25zm0 1.818h12.5c1.336 0 2.327.005 2.993.082.665.076.934.21 1.06.339.126.129.256.402.331 1.08.075.677.08 1.685.08 3.045v7.272c0 1.361-.005 2.37-.08 3.047-.075.678-.207.951-.333 1.08-.126.128-.394.261-1.06.337-.666.076-1.656.082-2.99.082H6.25c-1.337 0-2.327-.005-2.993-.082-.666-.076-.934-.21-1.06-.339-.127-.129-.257-.402-.332-1.08-.075-.677-.08-1.685-.08-3.045V6.364c0-1.361.005-2.37.08-3.047.075-.678.207-.951.333-1.08.126-.128.395-.261 1.06-.337.666-.076 1.656-.082 2.991-.082z"/><path d="M8.744 4.192a1.369 1.369 0 0 0-.708 1.202v9.212c0 .5.271.965.708 1.202.434.236.965.21 1.374-.067l6.784-4.606h.001a1.376 1.376 0 0 0-.001-2.27c-1.428-.968-5.216-3.54-6.784-4.605a1.324 1.324 0 0 0-1.374-.068zm1.078 2.05c1.61 1.094 4.078 2.77 5.535 3.758l-5.535 3.757V6.243z"/></g></svg>';
        _this.inputText.type = 'text';
        _this.inputText.value = videoUrl;
        _this.inputText.onchange = function (event) {
            _this.videoUrl = _this.inputText.value.trim();
            _this.updateView();
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
        _this.videoElem.controls = true;
        _this.stopLoading();
        _this.uploadButton.innerHTML = 'Upload video';
        _this.uploadButton.onclick = function () { _this.inputFile.click(); };
        _this.inputFile.type = 'file';
        _this.inputFile.onchange = function (event) {
            var target = event.target;
            _this.handleFiles(target.files);
        };
        _this.updateView();
        return _this;
    }
    VideoBlock.prototype.preventDefaults = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    VideoBlock.prototype.isAdvancedUpload = function () {
        return ('draggable' in this.uploadPanel) || ('ondragstart' in this.uploadPanel && 'ondrop' in this.uploadPanel);
    };
    VideoBlock.prototype.startLoading = function () {
        this.loadingIcon.innerHTML = 'Uploading video...';
        this.loadingIcon.style.display = 'inline-block';
    };
    VideoBlock.prototype.stopLoading = function () {
        this.loadingIcon.style.display = 'none';
    };
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
    VideoBlock.prototype.focus = function () { };
    VideoBlock.prototype.getRawContent = function () {
        var raw = {
            type: TYPE,
            url: this.videoUrl,
        };
        return raw;
    };
    VideoBlock.prototype.handleFiles = function (files) {
        var _this = this;
        if (files.length == 0) {
            // in IE 11, the change event is fired when we programmatically set `.js-fileInput`'s value to empty string.
            return;
        }
        this.startLoading();
        var progressCallback = function (loaded, total, label) {
            if (label) {
                _this.loadingIcon.innerHTML = label;
            }
            else {
                var percentage = (total) ? (loaded * 100.0 / total) : 0;
                _this.loadingIcon.innerHTML = "Uploading video (" + percentage.toFixed(1) + "%)...";
            }
        };
        var successCallback = function (videoUrl) {
            _this.stopLoading();
            _this.videoUrl = videoUrl;
            _this.updateView();
        };
        var failCallback = function (error) {
            _this.stopLoading();
        };
        this.editor.options.uploadVideo(files[0], progressCallback, successCallback, failCallback);
        this.inputFile.value = '';
        this.inputText.value = '';
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
        if (this.editor.options.uploadVideo) {
            this.videoButton = document.createElement('div');
            this.dashboard.appendChild(this.videoButton);
            this.videoButton.classList.add('editor-control__dashboard__button', 'js-video-button');
            this.videoButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092 2.222.188 1.485.397.939.952c-.545.554-.75 1.305-.846 2.16C-.002 3.969 0 5.003 0 6.365v7.272c0 1.36-.004 2.393.09 3.248.095.855.3 1.606.845 2.16.544.556 1.282.766 2.122.862.84.097 1.856.094 3.193.094h12.5c1.336 0 2.35.004 3.19-.092.84-.096 1.577-.305 2.122-.86.545-.554.75-1.305.846-2.16.095-.856.092-1.89.092-3.252V6.364c0-1.36.004-2.393-.09-3.248-.095-.855-.3-1.605-.845-2.16C23.521.4 22.783.19 21.943.093 21.103-.002 20.087 0 18.75 0H6.25zm0 1.818h12.5c1.336 0 2.327.005 2.993.082.665.076.934.21 1.06.339.126.129.256.402.331 1.08.075.677.08 1.685.08 3.045v7.272c0 1.361-.005 2.37-.08 3.047-.075.678-.207.951-.333 1.08-.126.128-.394.261-1.06.337-.666.076-1.656.082-2.99.082H6.25c-1.337 0-2.327-.005-2.993-.082-.666-.076-.934-.21-1.06-.339-.127-.129-.257-.402-.332-1.08-.075-.677-.08-1.685-.08-3.045V6.364c0-1.361.005-2.37.08-3.047.075-.678.207-.951.333-1.08.126-.128.395-.261 1.06-.337.666-.076 1.656-.082 2.991-.082z"/><path d="M8.744 4.192a1.369 1.369 0 0 0-.708 1.202v9.212c0 .5.271.965.708 1.202.434.236.965.21 1.374-.067l6.784-4.606h.001a1.376 1.376 0 0 0-.001-2.27c-1.428-.968-5.216-3.54-6.784-4.605a1.324 1.324 0 0 0-1.374-.068zm1.078 2.05c1.61 1.094 4.078 2.77 5.535 3.758l-5.535 3.757V6.243z"/></g></svg><p>Video</p>';
            this.videoButton.onclick = function () {
                editor.add(new _block_video_block__WEBPACK_IMPORTED_MODULE_4__["VideoBlock"](editor, ''), _this.block);
            };
        }
    }
    Control.prototype.toggleDashboard = function () {
        if (this.dashboard.style.maxHeight == '0px')
            this.expandDashboard();
        else
            this.collapseDashboard();
    };
    Control.prototype.collapseDashboard = function () {
        this.dashboard.style.maxHeight = '0px';
        this.expandButton.innerHTML = '+ ADD';
    };
    Control.prototype.expandDashboard = function () {
        this.collapseAll();
        this.dashboard.style.maxHeight = this.dashboard.scrollHeight + 30 + "px";
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
        block.control.expandDashboard();
    };
    Editor.prototype.remove = function (block) {
        for (var i = 0; i < this.blocks.length; i++) {
            if (block == this.blocks[i]) {
                console.log("JAJAJAJA");
                this.blocks.splice(i, 1);
                block.elem.remove();
                break;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvdHMvZWRpdG9yL2Jsb2NrL2Jsb2NrLnRzIiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9lZGl0b3IvYmxvY2svaGVhZGVyLWJsb2NrLnRzIiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9lZGl0b3IvYmxvY2svaW1hZ2UtYmxvY2sudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL3RzL2VkaXRvci9ibG9jay9xdW90ZS1ibG9jay50cyIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvdHMvZWRpdG9yL2Jsb2NrL3RleHQtYmxvY2sudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL3RzL2VkaXRvci9ibG9jay92aWRlby1ibG9jay50cyIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvdHMvZWRpdG9yL2NvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL3RzL2VkaXRvci9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9E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QUE7QUFBQTtBQUFxRDtBQUUvQyxNQUFPLENBQUMsYUFBYSxHQUFHLFVBQUMsSUFBb0IsRUFBRSxPQUE0QztJQUE1QyxvQ0FBeUMsRUFBRztJQUMvRixPQUFPLElBQUkscURBQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRStCIiwiZmlsZSI6ImVkaXRvci5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJlZGl0b3JcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZWRpdG9yXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7Q29udHJvbH0gZnJvbSAnLi4vY29udHJvbCc7XG5pbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vZWRpdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBSYXdCbG9jayB7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCbG9ja1JlYWRlciB7XG4gIGNhblBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jayk6IEJvb2xlYW5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCbG9jayB7XG4gIGVsZW06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVsZXRlQnV0dG9uOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGRlbGV0ZUljb246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRyb2w6IENvbnRyb2w7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yKSB7XG4gICAgdGhpcy5jb250cm9sID0gbmV3IENvbnRyb2woZWRpdG9yLCB0aGlzKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrJyk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5lbGVtKTtcblxuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19jb250YWluZXInKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRlbGV0ZUJ1dHRvbik7XG5cbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2NvbnRhaW5lcl9fZGVsZXRlLWJ1dHRvbicpO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEzXCIgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPicgK1xuICAgICAgJzxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5MiAxODh2MjE2YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTI0Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEyVjE4OGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDI0YzYuNjI3ICcgK1xuICAgICAgJzAgMTIgNS4zNzMgMTIgMTJ6bTEwMC0xMmgtMjRjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MjE2YzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMjRjNi42MjcgMCAxMi01LjM3MyAxMi0xMlYxODhjMC02LjYyNy01LjM3My0xMi0xMi0xMnptMTMyLTk2YzEzLjI1NSAnICtcbiAgICAgICcwIDI0IDEwLjc0NSAyNCAyNHYxMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC0yMHYzMzZjMCAyNi41MS0yMS40OSA0OC00OCA0OEg4MGMtMjYuNTEgMC00OC0yMS40OS00OC00OFYxMjhIMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTEyYzAtMTMuMjU1IDEwLjc0NS0yNCAnICtcbiAgICAgICcyNC0yNGg3NC40MTFsMzQuMDE4LTU2LjY5NkE0OCA0OCAwIDAgMSAxNzMuNTg5IDBoMTAwLjgyM2E0OCA0OCAwIDAgMSA0MS4xNiAyMy4zMDRMMzQ5LjU4OSA4MEg0MjR6bS0yNjkuNjExIDBoMTM5LjIyM0wyNzYuMTYgNTAuOTEzQTYgNiAwIDAgMCAyNzEuMDE1IDQ4aC05NC4wMjhhNiAnICtcbiAgICAgICc2IDAgMCAwLTUuMTQ1IDIuOTEzTDE1NC4zODkgODB6TTM2OCAxMjhIODB2MzMwYTYgNiAwIDAgMCA2IDZoMjc2YTYgNiAwIDAgMCA2LTZWMTI4elwiPicgK1xuICAgICAgJzwvcGF0aD48L3N2Zz4nO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlSWNvbik7XG4gICAgdGhpcy5kZWxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuZWRpdG9yLnJlbW92ZSh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBhYnN0cmFjdCBnZXRSYXdDb250ZW50KCk6IFJhd0Jsb2NrXG5cbiAgYWJzdHJhY3QgZm9jdXMoKTogdm9pZFxufVxuXG4iLCJpbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vZWRpdG9yJztcbmltcG9ydCB7QmxvY2ssIFJhd0Jsb2NrLCBCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jaydcblxuY29uc3QgVFlQRTogc3RyaW5nID0gJ2hlYWRlcic7XG5cbmludGVyZmFjZSBSYXdUZXh0QmxvY2sgZXh0ZW5kcyBSYXdCbG9jayB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEhlYWRlckJsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3SGVhZGVyQmxvY2sgPSByYXdCbG9jayBhcyBSYXdUZXh0QmxvY2s7XG4gICAgcmV0dXJuIG5ldyBIZWFkZXJCbG9jayhlZGl0b3IsIHJhd0hlYWRlckJsb2NrLmNvbnRlbnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJCbG9jayBleHRlbmRzIEJsb2NrIHtcblxuICB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgY29udGVudDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWRpdG9yKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrJywgJ2VkaXRvci1ibG9ja19fdGV4dCcpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRleHRhcmVhKTtcblxuICAgIHRoaXMudGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19jb250YWluZXJfX2VkaXRvcicsICdlZGl0b3ItYmxvY2tfX2hlYWRlcicpO1xuICAgIHRoaXMudGV4dGFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEnKTtcbiAgICB0aGlzLnRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy50ZXh0YXJlYS5zY3JvbGxIZWlnaHQgPiB0aGlzLnRleHRhcmVhLmNsaWVudEhlaWdodCkge1xuICAgICAgICB0aGlzLnRleHRhcmVhLnN0eWxlLmhlaWdodCA9IHRoaXMudGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLnRleHRhcmVhLmlubmVySFRNTCA9IHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMudGV4dGFyZWEuZm9jdXMoKTtcbiAgfVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd1RleHRCbG9jayA9IHtcbiAgICAgIHR5cGU6IFRZUEUsXG4gICAgICBjb250ZW50OiB0aGlzLnRleHRhcmVhLnZhbHVlXG4gICAgfTtcbiAgICByZXR1cm4gcmF3O1xuICB9XG59IiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBSYXdCbG9jaywgQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICdpbWFnZSc7XG5cbmludGVyZmFjZSBSYXdJbWFnZUJsb2NrIGV4dGVuZHMgUmF3QmxvY2sge1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlQmxvY2tSZWFkZXIgaW1wbGVtZW50cyBCbG9ja1JlYWRlciB7XG4gIGNhblBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jayk6IEJvb2xlYW4ge1xuICAgIHJldHVybiByYXdCbG9jay50eXBlID09IFRZUEU7XG4gIH1cblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2sge1xuICAgIGxldCByYXdJbWFnZUJsb2NrID0gcmF3QmxvY2sgYXMgUmF3SW1hZ2VCbG9jaztcbiAgICByZXR1cm4gbmV3IEltYWdlQmxvY2soZWRpdG9yLCByYXdJbWFnZUJsb2NrLnVybCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlQmxvY2sgZXh0ZW5kcyBCbG9jayB7XG5cbiAgdXBsb2FkUGFuZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwbG9hZEljb246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwbG9hZExhYmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cGxvYWRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxvYWRpbmdJY29uOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGlucHV0RmlsZTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgaW1hZ2VQYW5lbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1nOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgdXJsOiBzdHJpbmcpIHtcbiAgICBzdXBlcihlZGl0b3IpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlJyk7XG4gICAgdGhpcy5pbWcuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZV9faW1nJyk7XG5cbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRQYW5lbCk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMuaW1hZ2VQYW5lbCk7XG5cbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRGaWxlKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkQnV0dG9uKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkSWNvbik7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZExhYmVsKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMubG9hZGluZ0ljb24pO1xuICAgIHRoaXMuaW1hZ2VQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmltZyk7XG5cbiAgICB0aGlzLnVwbG9hZFBhbmVsLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19faW1hZ2VfX3VwbG9hZC1wYW5lbCcpXG4gICAgdGhpcy51cGxvYWRJY29uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19faW1hZ2VfX3VwbG9hZC1wYW5lbF9faWNvbicpXG4gICAgdGhpcy51cGxvYWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZV9fdXBsb2FkLXBhbmVsX19idXR0b24nKTtcbiAgICB0aGlzLmlucHV0RmlsZS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlX191cGxvYWQtcGFuZWxfX2lucHV0Jyk7XG5cbiAgICB0aGlzLnVwbG9hZEljb24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiNTNcIiBoZWlnaHQ9XCI0MlwiIHZpZXdCb3g9XCIwIDAgNTMgNDJcIj5cXG4nICtcbiAgICAgICcgICAgPGRlZnM+XFxuJyArXG4gICAgICAnICAgICAgICA8cGF0aCBpZD1cImJcIiBkPVwiTTEzIDB2MjloMzBWMGgyMHY1M0gwVjBoMTN6XCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPHJlY3QgaWQ9XCJhXCIgd2lkdGg9XCI1M1wiIGhlaWdodD1cIjM0XCIgeD1cIjVcIiB5PVwiMTJcIiByeD1cIjJcIi8+XFxuJyArXG4gICAgICAnICAgICAgICA8bWFzayBpZD1cImRcIiB3aWR0aD1cIjUzXCIgaGVpZ2h0PVwiMzRcIiB4PVwiMFwiIHk9XCIwXCIgZmlsbD1cIiNmZmZcIj5cXG4nICtcbiAgICAgICcgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjYVwiLz5cXG4nICtcbiAgICAgICcgICAgICAgIDwvbWFzaz5cXG4nICtcbiAgICAgICcgICAgPC9kZWZzPlxcbicgK1xuICAgICAgJyAgICA8ZyBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUgLTQpXCI+XFxuJyArXG4gICAgICAnICAgICAgICA8bWFzayBpZD1cImNcIiBmaWxsPVwiI2ZmZlwiPlxcbicgK1xuICAgICAgJyAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNiXCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPC9tYXNrPlxcbicgK1xuICAgICAgJyAgICAgICAgPGcgZmlsbC1ydWxlPVwibm9uemVyb1wiIHN0cm9rZT1cIiM2NjZcIiBzdHJva2UtZGFzaGFycmF5PVwiNCwyXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIG1hc2s9XCJ1cmwoI2MpXCI+XFxuJyArXG4gICAgICAnICAgICAgICAgICAgPHVzZSBtYXNrPVwidXJsKCNkKVwiIHhsaW5rOmhyZWY9XCIjYVwiLz5cXG4nICtcbiAgICAgICcgICAgICAgIDwvZz5cXG4nICtcbiAgICAgICcgICAgICAgIDxwYXRoIGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIGQ9XCJNMTUuMjgzIDRDMTQuMDM1IDQgMTMgNS4wODggMTMgNi40djE5LjJjMCAxLjMxMiAxLjAzNSAyLjQgMi4yODMgMi40aDI1LjQzNEM0MS45NjUgMjggNDMgMjYuOTEyIDQzIDI1LjZWNi40QzQzIDUuMDg4IDQxLjk2NSA0IDQwLjcxNyA0SDE1LjI4M3ptLjA0MiAyaDI1LjM1Yy4xOTcgMCAuMzI1LjEzNS4zMjUuMzQ0VjIwbC00LjkxNi00LjE1NWEuOTYuOTYgMCAwIDAtMS4xNTctLjA1NGwtNC42MTEgMy4zNS02LjI1Ny01LjM1N2EuOTUuOTUgMCAwIDAtLjcyLS4yMjYuOTUuOTUgMCAwIDAtLjQ0OC4xODNMMTUgMTkuNDk1VjYuMzQ0YzAtLjIwOS4xMjgtLjM0NC4zMjUtLjM0NHpNMzAgOWMtMS42NDUgMC0zIDEuMzU1LTMgM3MxLjM1NSAzIDMgMyAzLTEuMzU1IDMtMy0xLjM1NS0zLTMtM3ptMCAyYy41NjQgMCAxIC40MzYgMSAxIDAgLjU2NC0uNDM2IDEtMSAxLS41NjQgMC0xLS40MzYtMS0xIDAtLjU2NC40MzYtMSAxLTF6bS02LjU5IDVsNi4yNTYgNS4zMmEuOTYzLjk2MyAwIDAgMCAxLjE1Ny4wNTRsNC42MDEtMy4zMzNMNDEgMjIuNzN2Mi45MjdjMCAuMjA3LS4xMjguMzQyLS4zMjUuMzQyaC0yNS4zNWMtLjE5NyAwLS4zMjUtLjEzNS0uMzI1LS4zNDJWMjIuMWw4LjQxLTYuMXpcIi8+XFxuJyArXG4gICAgICAnICAgICAgICA8cGF0aCBzdHJva2U9XCIjNjY2XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMzQgMjRsLTMgMTFoNGwxIDVoM2wtMS01aDR6XCIvPlxcbicgK1xuICAgICAgJyAgICA8L2c+XFxuJyArXG4gICAgICAnPC9zdmc+XFxuJztcblxuICAgIGlmICh0aGlzLmlzQWR2YW5jZWRVcGxvYWQoKSlcbiAgICAgIHRoaXMudXBsb2FkTGFiZWwuaW5uZXJIVE1MID0gJ0RyYWcgYW5kIGRyb3AgYSBwaG90byB0byB1cGxvYWQgb3IgdGFwIHRvIHVwbG9hZCc7XG4gICAgZWxzZVxuICAgICAgdGhpcy51cGxvYWRMYWJlbC5pbm5lckhUTUwgPSAnVGFwIHRvIHVwbG9hZCc7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dEZpbGUuY2xpY2soKTtcbiAgICB9XG5cbiAgICBbJ2RyYWdlbnRlcicsICdkcmFnb3ZlcicsICdkcmFnbGVhdmUnLCAnZHJvcCddLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMucHJldmVudERlZmF1bHRzLCBmYWxzZSlcbiAgICB9KTtcblxuICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKCkgPT4ge1xuICAgICAgICB0aGlzLnVwbG9hZFBhbmVsLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19faW1hZ2VfX3VwbG9hZC1wYW5lbC0tYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIFsnZHJhZ2xlYXZlJywgJ2Ryb3AnXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLnVwbG9hZFBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudXBsb2FkUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdG9yLWJsb2NrX19pbWFnZV9fdXBsb2FkLXBhbmVsLS1hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH0pXG5cbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgICAgbGV0IGR0ID0gZXZlbnQuZGF0YVRyYW5zZmVyO1xuICAgICAgbGV0IGZpbGVzID0gZHQuZmlsZXM7XG5cbiAgICAgIHRoaXMuaGFuZGxlRmlsZXMoZmlsZXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkaW5nSWNvbi5pbm5lckhUTUwgPSAnVXBsb2FkaW5nIGltYWdlLi4uJ1xuICAgIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICB0aGlzLnVwbG9hZEJ1dHRvbi5pbm5lckhUTUwgPSAnVXBsb2FkIGltYWdlJztcbiAgICB0aGlzLnVwbG9hZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4geyB0aGlzLmlucHV0RmlsZS5jbGljaygpIH1cblxuICAgIHRoaXMuaW5wdXRGaWxlLnR5cGUgPSAnZmlsZSc7XG4gICAgdGhpcy5pbnB1dEZpbGUub25jaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KTogYW55ID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICAgIHRoaXMuaGFuZGxlRmlsZXModGFyZ2V0LmZpbGVzKTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBoYW5kbGVGaWxlcyhmaWxlczogRmlsZUxpc3QpOiB2b2lkIHtcbiAgICBpZiAoZmlsZXMubGVuZ3RoID09IDApIHtcbiAgICAgIC8vIGluIElFIDExLCB0aGUgY2hhbmdlIGV2ZW50IGlzIGZpcmVkIHdoZW4gd2UgcHJvZ3JhbW1hdGljYWxseSBzZXQgYC5qcy1maWxlSW5wdXRgJ3MgdmFsdWUgdG8gZW1wdHkgc3RyaW5nLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RhcnRMb2FkaW5nKCk7XG5cbiAgICBsZXQgc3VjY2Vzc0NhbGxiYWNrID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH07XG5cbiAgICBsZXQgZmFpbENhbGxiYWNrID0gKGVycm9yOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5lZGl0b3Iub3B0aW9ucy51cGxvYWRJbWFnZShmaWxlc1swXSwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsQ2FsbGJhY2spO1xuICAgIHRoaXMuaW5wdXRGaWxlLnZhbHVlID0gJyc7XG4gIH07XG5cbiAgcHJldmVudERlZmF1bHRzKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbiAgc3RhcnRMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMudXBsb2FkTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLmxvYWRpbmdJY29uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfVxuXG4gIHN0b3BMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMudXBsb2FkTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIHRoaXMubG9hZGluZ0ljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGlzQWR2YW5jZWRVcGxvYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICgnZHJhZ2dhYmxlJyBpbiB0aGlzLnVwbG9hZFBhbmVsKSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiB0aGlzLnVwbG9hZFBhbmVsICYmICdvbmRyb3AnIGluIHRoaXMudXBsb2FkUGFuZWwpO1xuICB9XG5cbiAgdXBkYXRlVmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMudXJsO1xuICAgICAgdGhpcy5pbWFnZVBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltYWdlUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7fVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd0ltYWdlQmxvY2sgPSB7XG4gICAgICB0eXBlOiBUWVBFLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH07XG4gICAgcmV0dXJuIHJhdztcbiAgfVxufVxuIiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBSYXdCbG9jaywgQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICdxdW90ZSc7XG5cbmludGVyZmFjZSBSYXdRdW90ZUJsb2NrIGV4dGVuZHMgUmF3QmxvY2sge1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBRdW90ZUJsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3UXVvdGVCbG9jayA9IHJhd0Jsb2NrIGFzIFJhd1F1b3RlQmxvY2s7XG4gICAgcmV0dXJuIG5ldyBRdW90ZUJsb2NrKGVkaXRvciwgcmF3UXVvdGVCbG9jay5jb250ZW50KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVvdGVCbG9jayBleHRlbmRzIEJsb2NrIHtcblxuICB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgY29udGVudDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWRpdG9yKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX190ZXh0Jyk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudGV4dGFyZWEpO1xuXG4gICAgdGhpcy50ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2NvbnRhaW5lcl9fZWRpdG9yJywgJ2VkaXRvci1ibG9ja19fcXVvdGUnKTtcbiAgICB0aGlzLnRleHRhcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICcxJyk7XG4gICAgdGhpcy50ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ID4gdGhpcy50ZXh0YXJlYS5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSB0aGlzLnRleHRhcmVhLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy50ZXh0YXJlYS5pbm5lckhUTUwgPSB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLnRleHRhcmVhLmZvY3VzKCk7XG4gIH1cblxuICBnZXRSYXdDb250ZW50KCk6IFJhd0Jsb2NrIHtcbiAgICBsZXQgcmF3OiBSYXdRdW90ZUJsb2NrID0ge1xuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMudGV4dGFyZWEudmFsdWVcbiAgICB9O1xuICAgIHJldHVybiByYXc7XG4gIH1cbn0iLCJpbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vZWRpdG9yJztcbmltcG9ydCB7QmxvY2ssIFJhd0Jsb2NrLCBCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jaydcblxuY29uc3QgVFlQRTogc3RyaW5nID0gJ3RleHQnO1xuXG5pbnRlcmZhY2UgUmF3VGV4dEJsb2NrIGV4dGVuZHMgUmF3QmxvY2sge1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0QmxvY2tSZWFkZXIgaW1wbGVtZW50cyBCbG9ja1JlYWRlciB7XG4gIGNhblBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jayk6IEJvb2xlYW4ge1xuICAgIHJldHVybiByYXdCbG9jay50eXBlID09IFRZUEU7XG4gIH1cblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2sge1xuICAgIGxldCByYXdUZXh0QmxvY2sgPSByYXdCbG9jayBhcyBSYXdUZXh0QmxvY2s7XG4gICAgcmV0dXJuIG5ldyBUZXh0QmxvY2soZWRpdG9yLCByYXdUZXh0QmxvY2suY29udGVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleHRCbG9jayBleHRlbmRzIEJsb2NrIHtcblxuICB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgY29udGVudDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWRpdG9yKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX190ZXh0Jyk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudGV4dGFyZWEpO1xuXG4gICAgdGhpcy50ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2NvbnRhaW5lcl9fZWRpdG9yJywgJ2VkaXRvci1ibG9ja19fYm9keScpO1xuICAgIHRoaXMudGV4dGFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEnKTtcbiAgICB0aGlzLnRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy50ZXh0YXJlYS5zY3JvbGxIZWlnaHQgPiB0aGlzLnRleHRhcmVhLmNsaWVudEhlaWdodCkge1xuICAgICAgICB0aGlzLnRleHRhcmVhLnN0eWxlLmhlaWdodCA9IHRoaXMudGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLnRleHRhcmVhLmlubmVySFRNTCA9IHRoaXMuY29udGVudDtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMudGV4dGFyZWEuZm9jdXMoKTtcbiAgfVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd1RleHRCbG9jayA9IHtcbiAgICAgIHR5cGU6IFRZUEUsXG4gICAgICBjb250ZW50OiB0aGlzLnRleHRhcmVhLnZhbHVlXG4gICAgfTtcbiAgICByZXR1cm4gcmF3O1xuICB9XG59IiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBSYXdCbG9jaywgQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICd2aWRlbyc7XG5cbmludGVyZmFjZSBSYXdWaWRlb0Jsb2NrIGV4dGVuZHMgUmF3QmxvY2sge1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFZpZGVvQmxvY2tSZWFkZXIgaW1wbGVtZW50cyBCbG9ja1JlYWRlciB7XG4gIGNhblBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jayk6IEJvb2xlYW4ge1xuICAgIHJldHVybiByYXdCbG9jay50eXBlID09IFRZUEU7XG4gIH1cblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2sge1xuICAgIGxldCByYXdWaWRlb0Jsb2NrID0gcmF3QmxvY2sgYXMgUmF3VmlkZW9CbG9jaztcbiAgICByZXR1cm4gbmV3IFZpZGVvQmxvY2soZWRpdG9yLCByYXdWaWRlb0Jsb2NrLnVybCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZGVvQmxvY2sgZXh0ZW5kcyBCbG9jayB7XG5cbiAgdXBsb2FkUGFuZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwbG9hZEljb25Db250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwbG9hZEljb246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwbG9hZExhYmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cGxvYWRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxvYWRpbmdJY29uOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGlucHV0RmlsZTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgaW5wdXRUZXh0Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbnB1dFRleHRMYWJlbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5wdXRUZXh0SWNvbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBpbnB1dFRleHQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIHZpZGVvUGFuZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZpZGVvRWxlbTogSFRNTFZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gIHZpZGVvSWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIHZpZGVvVXJsOiBzdHJpbmcpIHtcbiAgICBzdXBlcihlZGl0b3IpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3ZpZGVvJyk7XG4gICAgdGhpcy51cGxvYWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLWJ1dHRvbicpO1xuICAgIHRoaXMudmlkZW9FbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3ZpZGVvLWVsZW0nKVxuXG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkUGFuZWwpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvUGFuZWwpO1xuXG4gICAgdGhpcy52aWRlb1BhbmVsLmFwcGVuZENoaWxkKHRoaXMudmlkZW9FbGVtKTtcbiAgICB0aGlzLnZpZGVvUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy52aWRlb0lmcmFtZSk7XG4gICAgdGhpcy52aWRlb0lmcmFtZS5mcmFtZUJvcmRlciA9IFwiMFwiO1xuXG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZEljb25Db250YWluZXIpO1xuICAgIHRoaXMudXBsb2FkSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0RmlsZSk7XG4gICAgdGhpcy51cGxvYWRJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkSWNvbik7XG4gICAgdGhpcy51cGxvYWRJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkTGFiZWwpO1xuICAgIHRoaXMudXBsb2FkSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZEJ1dHRvbik7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmxvYWRpbmdJY29uKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRUZXh0TGFiZWwpO1xuICAgIHRoaXMudXBsb2FkUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dFRleHRDb250YWluZXIpO1xuICAgIHRoaXMuaW5wdXRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRUZXh0SWNvbik7XG4gICAgdGhpcy5pbnB1dFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dFRleHQpO1xuXG4gICAgdGhpcy51cGxvYWRQYW5lbC5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3ZpZGVvX191cGxvYWQtcGFuZWwnKTtcbiAgICB0aGlzLnVwbG9hZEljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLXBhbmVsX19pY29uLWNvbnRhaW5lcicpO1xuICAgIHRoaXMudXBsb2FkSWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3ZpZGVvX191cGxvYWQtcGFuZWxfX2ljb24tY29udGFpbmVyX19pY29uJyk7XG4gICAgdGhpcy51cGxvYWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLXBhbmVsX19pY29uLWNvbnRhaW5lcl9fYnV0dG9uJyk7XG4gICAgdGhpcy5pbnB1dEZpbGUuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLXBhbmVsX19pY29uLWNvbnRhaW5lcl9faW5wdXQnKTtcbiAgICB0aGlzLmlucHV0VGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3ZpZGVvX191cGxvYWQtcGFuZWxfX2lucHV0LWNvbnRhaW5lcicpO1xuICAgIHRoaXMuaW5wdXRUZXh0TGFiZWwuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLXBhbmVsX19pbnB1dC1jb250YWluZXJfX2xhYmVsJyk7XG4gICAgdGhpcy5pbnB1dFRleHRJY29uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3VwbG9hZC1wYW5lbF9faW5wdXQtY29udGFpbmVyX19pY29uJyk7XG4gICAgdGhpcy5pbnB1dFRleHQuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLXBhbmVsX19pbnB1dC1jb250YWluZXJfX2lucHV0Jyk7XG4gICAgdGhpcy52aWRlb0lmcmFtZS5jbGFzc0xpc3QuYWRkKCdqcy12aWRlby1pZnJhbWUnKTtcblxuICAgIHRoaXMudXBsb2FkSWNvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCI1M1wiIGhlaWdodD1cIjQyXCIgdmlld0JveD1cIjAgMCA1MyA0MlwiPlxcbicgK1xuICAgICAgJyAgICA8ZGVmcz5cXG4nICtcbiAgICAgICcgICAgICAgIDxwYXRoIGlkPVwiYlwiIGQ9XCJNMTMgMHYyOWgzMFYwaDIwdjUzSDBWMGgxM3pcIi8+XFxuJyArXG4gICAgICAnICAgICAgICA8cmVjdCBpZD1cImFcIiB3aWR0aD1cIjUzXCIgaGVpZ2h0PVwiMzRcIiB4PVwiNVwiIHk9XCIxMlwiIHJ4PVwiMlwiLz5cXG4nICtcbiAgICAgICcgICAgICAgIDxtYXNrIGlkPVwiZFwiIHdpZHRoPVwiNTNcIiBoZWlnaHQ9XCIzNFwiIHg9XCIwXCIgeT1cIjBcIiBmaWxsPVwiI2ZmZlwiPlxcbicgK1xuICAgICAgJyAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNhXCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPC9tYXNrPlxcbicgK1xuICAgICAgJyAgICA8L2RlZnM+XFxuJyArXG4gICAgICAnICAgIDxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNSAtNClcIj5cXG4nICtcbiAgICAgICcgICAgICAgIDxtYXNrIGlkPVwiY1wiIGZpbGw9XCIjZmZmXCI+XFxuJyArXG4gICAgICAnICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2JcIi8+XFxuJyArXG4gICAgICAnICAgICAgICA8L21hc2s+XFxuJyArXG4gICAgICAnICAgICAgICA8ZyBmaWxsLXJ1bGU9XCJub256ZXJvXCIgc3Ryb2tlPVwiIzY2NlwiIHN0cm9rZS1kYXNoYXJyYXk9XCI0LDJcIiBzdHJva2Utd2lkdGg9XCI0XCIgbWFzaz1cInVybCgjYylcIj5cXG4nICtcbiAgICAgICcgICAgICAgICAgICA8dXNlIG1hc2s9XCJ1cmwoI2QpXCIgeGxpbms6aHJlZj1cIiNhXCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPC9nPlxcbicgK1xuICAgICAgJyAgICAgICAgPGcgZmlsbD1cIiM2NjZcIj5cXG4nICtcbiAgICAgICcgICAgICAgICAgICA8cGF0aCBkPVwiTTIwLjUgNGMtMS42MDMgMC0yLjgyLS4wMDQtMy44MjcuMTEtMS4wMDguMTE2LTEuODkzLjM2Ni0yLjU0NyAxLjAzMi0uNjU1LjY2Ni0uOTAxIDEuNTY3LTEuMDE1IDIuNTkzLS4xMTQgMS4wMjYtLjExMSAyLjI2Ny0uMTExIDMuOTAxdjguNzI4YzAgMS42MzEtLjAwNCAyLjg3MS4xMDkgMy44OTcuMTEzIDEuMDI1LjM1OSAxLjkyNiAxLjAxMyAyLjU5My42NTMuNjY2IDEuNTM4LjkxNyAyLjU0NiAxLjAzMyAxLjAwOC4xMTYgMi4yMjcuMTEzIDMuODMyLjExM2gxNWMxLjYwMyAwIDIuODIuMDA0IDMuODI3LS4xMSAxLjAwOC0uMTE2IDEuODkzLS4zNjYgMi41NDctMS4wMzIuNjU1LS42NjYuOTAxLTEuNTY3IDEuMDE1LTIuNTkzLjExNC0xLjAyNi4xMTEtMi4yNjcuMTExLTMuOTAxdi04LjcyOGMwLTEuNjMxLjAwNC0yLjg3MS0uMTA5LTMuODk3LS4xMTMtMS4wMjUtLjM1OS0xLjkyNi0xLjAxMy0yLjU5My0uNjUzLS42NjYtMS41MzgtLjkxNy0yLjU0Ni0xLjAzM0MzOC4zMjQgMy45OTcgMzcuMTA1IDQgMzUuNSA0aC0xNXptMCAyLjE4MmgxNWMxLjYwNCAwIDIuNzkyLjAwNiAzLjU5LjA5OC44LjA5MiAxLjEyMi4yNTMgMS4yNzMuNDA3LjE1Mi4xNTQuMzA4LjQ4Mi4zOTggMS4yOTUuMDkuODE0LjA5NiAyLjAyMy4wOTYgMy42NTR2OC43MjhjMCAxLjYzMi0uMDA2IDIuODQyLS4wOTYgMy42NTYtLjA5LjgxMy0uMjQ4IDEuMTQxLS40IDEuMjk1LS4xNTEuMTU0LS40NzMuMzE0LTEuMjcyLjQwNS0uNzk5LjA5MS0xLjk4Ny4wOTgtMy41ODkuMDk4aC0xNWMtMS42MDMgMC0yLjc5Mi0uMDA2LTMuNTktLjA5OC0uOC0uMDkyLTEuMTIyLS4yNTMtMS4yNzMtLjQwNy0uMTUyLS4xNTQtLjMwOC0uNDgyLS4zOTgtMS4yOTUtLjA5LS44MTQtLjA5Ni0yLjAyMy0uMDk2LTMuNjU0di04LjcyOGMwLTEuNjMyLjAwNi0yLjg0Mi4wOTYtMy42NTYuMDktLjgxMy4yNDgtMS4xNDEuNC0xLjI5NS4xNTEtLjE1NC40NzMtLjMxNCAxLjI3Mi0uNDA1LjgtLjA5MSAxLjk4Ny0uMDk4IDMuNTktLjA5OHpcIi8+XFxuJyArXG4gICAgICAnICAgICAgICAgICAgPHBhdGggZD1cIk0yMy44MjMgOS4xODhhMS42MDggMS42MDggMCAwIDAtLjgyMyAxLjQxdjEwLjgwNGMwIC41ODYuMzE1IDEuMTMyLjgyMyAxLjQxYTEuNTI3IDEuNTI3IDAgMCAwIDEuNTk3LS4wOGw3Ljg4NS01LjQwMWguMDAyYy40My0uMjk2LjY5My0uNzk1LjY5My0xLjMzMWExLjYxOCAxLjYxOCAwIDAgMC0uNjk1LTEuMzNMMjUuNDIgOS4yNjZhMS41MjcgMS41MjcgMCAwIDAtMS41OTctLjA3OXptMS4yNTMgMi40MDVMMzEuNTA5IDE2bC02LjQzMyA0LjQwNnYtOC44MTN6XCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPC9nPlxcbicgK1xuICAgICAgJyAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwibm9uemVyb1wiIHN0cm9rZT1cIiM2NjZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk0zNCAyNGwtMyAxMWg0bDEgNWgzbC0xLTVoNHpcIi8+XFxuJyArXG4gICAgICAnICAgIDwvZz5cXG4nICtcbiAgICAgICc8L3N2Zz5cXG4nO1xuXG4gICAgaWYgKHRoaXMuaXNBZHZhbmNlZFVwbG9hZCgpKVxuICAgICAgdGhpcy51cGxvYWRMYWJlbC5pbm5lckhUTUwgPSAnRHJhZyBhbmQgZHJvcCBhIHBob3RvIHRvIHVwbG9hZCBvciB0YXAgdG8gdXBsb2FkJztcbiAgICBlbHNlXG4gICAgICB0aGlzLnVwbG9hZExhYmVsLmlubmVySFRNTCA9ICdUYXAgdG8gdXBsb2FkJztcbiAgICB0aGlzLnVwbG9hZEljb25Db250YWluZXIub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5wdXRGaWxlLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dFRleHRMYWJlbC5pbm5lckhUTUwgPSAnT3IsIHVwbG9hZCBhIFlvdXR1YmUgb3IgVmltZW8gdmlkZW8nXG4gICAgdGhpcy5pbnB1dFRleHRJY29uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI1IDIwXCI+PGcgZmlsbD1cIiM2NjZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PHBhdGggZD1cIk02LjI1IDBDNC45MTUgMCAzLjktLjAwNCAzLjA2LjA5MiAyLjIyMi4xODggMS40ODUuMzk3LjkzOS45NTJjLS41NDUuNTU0LS43NSAxLjMwNS0uODQ2IDIuMTZDLS4wMDIgMy45NjkgMCA1LjAwMyAwIDYuMzY1djcuMjcyYzAgMS4zNi0uMDA0IDIuMzkzLjA5IDMuMjQ4LjA5NS44NTUuMyAxLjYwNi44NDUgMi4xNi41NDQuNTU2IDEuMjgyLjc2NiAyLjEyMi44NjIuODQuMDk3IDEuODU2LjA5NCAzLjE5My4wOTRoMTIuNWMxLjMzNiAwIDIuMzUuMDA0IDMuMTktLjA5Mi44NC0uMDk2IDEuNTc3LS4zMDUgMi4xMjItLjg2LjU0NS0uNTU0Ljc1LTEuMzA1Ljg0Ni0yLjE2LjA5NS0uODU2LjA5Mi0xLjg5LjA5Mi0zLjI1MlY2LjM2NGMwLTEuMzYuMDA0LTIuMzkzLS4wOS0zLjI0OC0uMDk1LS44NTUtLjMtMS42MDUtLjg0NS0yLjE2QzIzLjUyMS40IDIyLjc4My4xOSAyMS45NDMuMDkzIDIxLjEwMy0uMDAyIDIwLjA4NyAwIDE4Ljc1IDBINi4yNXptMCAxLjgxOGgxMi41YzEuMzM2IDAgMi4zMjcuMDA1IDIuOTkzLjA4Mi42NjUuMDc2LjkzNC4yMSAxLjA2LjMzOS4xMjYuMTI5LjI1Ni40MDIuMzMxIDEuMDguMDc1LjY3Ny4wOCAxLjY4NS4wOCAzLjA0NXY3LjI3MmMwIDEuMzYxLS4wMDUgMi4zNy0uMDggMy4wNDctLjA3NS42NzgtLjIwNy45NTEtLjMzMyAxLjA4LS4xMjYuMTI4LS4zOTQuMjYxLTEuMDYuMzM3LS42NjYuMDc2LTEuNjU2LjA4Mi0yLjk5LjA4Mkg2LjI1Yy0xLjMzNyAwLTIuMzI3LS4wMDUtMi45OTMtLjA4Mi0uNjY2LS4wNzYtLjkzNC0uMjEtMS4wNi0uMzM5LS4xMjctLjEyOS0uMjU3LS40MDItLjMzMi0xLjA4LS4wNzUtLjY3Ny0uMDgtMS42ODUtLjA4LTMuMDQ1VjYuMzY0YzAtMS4zNjEuMDA1LTIuMzcuMDgtMy4wNDcuMDc1LS42NzguMjA3LS45NTEuMzMzLTEuMDguMTI2LS4xMjguMzk1LS4yNjEgMS4wNi0uMzM3LjY2Ni0uMDc2IDEuNjU2LS4wODIgMi45OTEtLjA4MnpcIi8+PHBhdGggZD1cIk04Ljc0NCA0LjE5MmExLjM2OSAxLjM2OSAwIDAgMC0uNzA4IDEuMjAydjkuMjEyYzAgLjUuMjcxLjk2NS43MDggMS4yMDIuNDM0LjIzNi45NjUuMjEgMS4zNzQtLjA2N2w2Ljc4NC00LjYwNmguMDAxYTEuMzc2IDEuMzc2IDAgMCAwLS4wMDEtMi4yN2MtMS40MjgtLjk2OC01LjIxNi0zLjU0LTYuNzg0LTQuNjA1YTEuMzI0IDEuMzI0IDAgMCAwLTEuMzc0LS4wNjh6bTEuMDc4IDIuMDVjMS42MSAxLjA5NCA0LjA3OCAyLjc3IDUuNTM1IDMuNzU4bC01LjUzNSAzLjc1N1Y2LjI0M3pcIi8+PC9nPjwvc3ZnPic7XG4gICAgdGhpcy5pbnB1dFRleHQudHlwZSA9ICd0ZXh0JztcbiAgICB0aGlzLmlucHV0VGV4dC52YWx1ZSA9IHZpZGVvVXJsO1xuICAgIHRoaXMuaW5wdXRUZXh0Lm9uY2hhbmdlID0gKGV2ZW50OiBFdmVudCk6IGFueSA9PiB7XG4gICAgICB0aGlzLnZpZGVvVXJsID0gdGhpcy5pbnB1dFRleHQudmFsdWUudHJpbSgpO1xuICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfTtcblxuICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJywgJ2RyYWdsZWF2ZScsICdkcm9wJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy5wcmV2ZW50RGVmYXVsdHMsIGZhbHNlKVxuICAgIH0pO1xuXG4gICAgWydkcmFnZW50ZXInLCAnZHJhZ292ZXInXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLnVwbG9hZFBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudXBsb2FkUGFuZWwuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZV9fdXBsb2FkLXBhbmVsLS1hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgWydkcmFnbGVhdmUnLCAnZHJvcCddLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsICgpID0+IHtcbiAgICAgICAgdGhpcy51cGxvYWRQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0b3ItYmxvY2tfX2ltYWdlX191cGxvYWQtcGFuZWwtLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgfSlcblxuICAgIHRoaXMudXBsb2FkUGFuZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudDogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICBsZXQgZHQgPSBldmVudC5kYXRhVHJhbnNmZXI7XG4gICAgICBsZXQgZmlsZXMgPSBkdC5maWxlcztcblxuICAgICAgdGhpcy5oYW5kbGVGaWxlcyhmaWxlcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnZpZGVvRWxlbS5jb250cm9scyA9IHRydWU7XG4gICAgdGhpcy5zdG9wTG9hZGluZygpO1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLmlubmVySFRNTCA9ICdVcGxvYWQgdmlkZW8nO1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7IHRoaXMuaW5wdXRGaWxlLmNsaWNrKCkgfVxuXG4gICAgdGhpcy5pbnB1dEZpbGUudHlwZSA9ICdmaWxlJztcbiAgICB0aGlzLmlucHV0RmlsZS5vbmNoYW5nZSA9IChldmVudDogRXZlbnQpOiBhbnkgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9ICg8SFRNTElucHV0RWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgICAgdGhpcy5oYW5kbGVGaWxlcyh0YXJnZXQuZmlsZXMpO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0cyhlOiBFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuXG4gIGlzQWR2YW5jZWRVcGxvYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICgnZHJhZ2dhYmxlJyBpbiB0aGlzLnVwbG9hZFBhbmVsKSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiB0aGlzLnVwbG9hZFBhbmVsICYmICdvbmRyb3AnIGluIHRoaXMudXBsb2FkUGFuZWwpO1xuICB9XG5cbiAgc3RhcnRMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ0ljb24uaW5uZXJIVE1MID0gJ1VwbG9hZGluZyB2aWRlby4uLidcbiAgICB0aGlzLmxvYWRpbmdJY29uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfVxuXG4gIHN0b3BMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ0ljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIHN0YXRpYyBleHRyYWN0WW91dHViZUlkKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgcmVnRXhwID0gL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PXxcXD92PSkoW14jXFwmXFw/XSopLiovO1xuICAgIGxldCBtYXRjaCA9IHVybC5tYXRjaChyZWdFeHApO1xuICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzJdIDogbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBleHRyYWN0VmltZW9JZCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHJlZ0V4cCA9IC9eLit2aW1lby5jb21cXC8oLipcXC8pPyhbXiNcXD9dKikvO1xuICAgIGxldCBtYXRjaCA9IHVybC5tYXRjaChyZWdFeHApO1xuICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzJdIHx8IG1hdGNoWzFdIDogbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZVZpZXcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmlkZW9VcmwpIHtcbiAgICAgIGlmICh0aGlzLnZpZGVvVXJsLmluY2x1ZGVzKCdjbG91ZGluYXJ5JykpIHtcbiAgICAgICAgdGhpcy52aWRlb0VsZW0uc3JjID0gdGhpcy52aWRlb1VybDtcbiAgICAgICAgdGhpcy52aWRlb1BhbmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMudXBsb2FkUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy52aWRlb1VybC5pbmNsdWRlcygneW91dHViZScpKSB7XG4gICAgICAgIGxldCB5b3V0dWJlSWQgPSBWaWRlb0Jsb2NrLmV4dHJhY3RZb3V0dWJlSWQodGhpcy52aWRlb1VybCk7XG4gICAgICAgIHRoaXMudmlkZW9JZnJhbWUuc3JjPWBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3lvdXR1YmVJZH0/cmVsPTBgO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLndpZHRoPVwiNTYwXCI7XG4gICAgICAgIHRoaXMudmlkZW9JZnJhbWUuaGVpZ2h0PVwiMzE1XCI7XG5cbiAgICAgICAgdGhpcy52aWRlb1BhbmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLnZpZGVvRWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnVwbG9hZFBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudmlkZW9VcmwuaW5jbHVkZXMoJ3ZpbWVvJykpIHtcbiAgICAgICAgbGV0IHZpbWVvSWQgPSBWaWRlb0Jsb2NrLmV4dHJhY3RWaW1lb0lkKHRoaXMudmlkZW9VcmwpO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLnNyYz1gaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7dmltZW9JZH0/Y29sb3I9ZWM3MDcwJnBvcnRyYWl0PTBgO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLndpZHRoPVwiNjQwXCI7XG4gICAgICAgIHRoaXMudmlkZW9JZnJhbWUuaGVpZ2h0PVwiMjQwXCI7XG5cbiAgICAgICAgdGhpcy52aWRlb1BhbmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLnZpZGVvRWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnVwbG9hZFBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHt9XG5cbiAgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9jayB7XG4gICAgbGV0IHJhdzogUmF3VmlkZW9CbG9jayA9IHtcbiAgICAgIHR5cGU6IFRZUEUsXG4gICAgICB1cmw6IHRoaXMudmlkZW9VcmwsXG4gICAgfTtcbiAgICByZXR1cm4gcmF3O1xuICB9XG5cbiAgaGFuZGxlRmlsZXMoZmlsZXM6IEZpbGVMaXN0KTp2b2lkIHtcbiAgICBpZiAoZmlsZXMubGVuZ3RoID09IDApIHtcbiAgICAgIC8vIGluIElFIDExLCB0aGUgY2hhbmdlIGV2ZW50IGlzIGZpcmVkIHdoZW4gd2UgcHJvZ3JhbW1hdGljYWxseSBzZXQgYC5qcy1maWxlSW5wdXRgJ3MgdmFsdWUgdG8gZW1wdHkgc3RyaW5nLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RhcnRMb2FkaW5nKCk7XG5cbiAgICBsZXQgcHJvZ3Jlc3NDYWxsYmFjayA9IChsb2FkZWQ6IG51bWJlciwgdG90YWw6IG51bWJlciwgbGFiZWw6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ0ljb24uaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9ICh0b3RhbCkgPyAobG9hZGVkICogMTAwLjAgLyB0b3RhbCkgOiAwO1xuICAgICAgICB0aGlzLmxvYWRpbmdJY29uLmlubmVySFRNTCA9IGBVcGxvYWRpbmcgdmlkZW8gKCR7cGVyY2VudGFnZS50b0ZpeGVkKDEpfSUpLi4uYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc3VjY2Vzc0NhbGxiYWNrID0gKHZpZGVvVXJsOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICAgIHRoaXMudmlkZW9VcmwgPSB2aWRlb1VybDtcbiAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH07XG5cbiAgICBsZXQgZmFpbENhbGxiYWNrID0gKGVycm9yOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5lZGl0b3Iub3B0aW9ucy51cGxvYWRWaWRlbyhmaWxlc1swXSwgcHJvZ3Jlc3NDYWxsYmFjaywgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsQ2FsbGJhY2spO1xuICAgIHRoaXMuaW5wdXRGaWxlLnZhbHVlID0gJyc7XG4gICAgdGhpcy5pbnB1dFRleHQudmFsdWUgPSAnJztcbiAgfVxufVxuXG4iLCJpbXBvcnQge0Jsb2NrfSBmcm9tICcuL2Jsb2NrL2Jsb2NrJztcbmltcG9ydCB7SW1hZ2VCbG9ja30gZnJvbSAnLi9ibG9jay9pbWFnZS1ibG9jayc7XG5pbXBvcnQge1F1b3RlQmxvY2t9IGZyb20gJy4vYmxvY2svcXVvdGUtYmxvY2snO1xuaW1wb3J0IHtIZWFkZXJCbG9ja30gZnJvbSAnLi9ibG9jay9oZWFkZXItYmxvY2snO1xuaW1wb3J0IHtUZXh0QmxvY2t9IGZyb20gJy4vYmxvY2svdGV4dC1ibG9jayc7XG5pbXBvcnQge0VkaXRvcn0gZnJvbSAnLi9lZGl0b3InO1xuaW1wb3J0IHtWaWRlb0Jsb2NrfSBmcm9tIFwiLi9ibG9jay92aWRlby1ibG9ja1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBDb250cm9sIHtcbiAgZWxlbTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGFzaGJvYXJkOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBleHBhbmRIYW5kbGU6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV4cGFuZEJ1dHRvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcXVvdGVCdXR0b246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckJ1dHRvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGV4dEJ1dHRvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VCdXR0b246IEhUTUxEaXZFbGVtZW50O1xuICB2aWRlb0J1dHRvbjogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgYmxvY2s6IEJsb2NrKSB7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sJyk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMuZXhwYW5kSGFuZGxlKTtcbiAgICB0aGlzLmV4cGFuZEhhbmRsZS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZXhwYW5kLWhhbmRsZScsICdqcy1leHBhbmQtaGFuZGxlJylcblxuICAgIHRoaXMuZXhwYW5kSGFuZGxlLmFwcGVuZENoaWxkKHRoaXMuZXhwYW5kQnV0dG9uKTtcbiAgICB0aGlzLmV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZXhwYW5kLWhhbmRsZV9fYnV0dG9uJylcbiAgICB0aGlzLmV4cGFuZEJ1dHRvbi5pbm5lckhUTUwgPSAnKyBBREQnO1xuICAgIHRoaXMuZXhwYW5kSGFuZGxlLm9uY2xpY2sgPSAoKSA9PiB7IHRoaXMudG9nZ2xlRGFzaGJvYXJkKCk7IH07XG5cbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy5kYXNoYm9hcmQpO1xuICAgIHRoaXMuZGFzaGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19kYXNoYm9hcmQnKVxuXG4gICAgdGhpcy5kYXNoYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXJCdXR0b24pO1xuICAgIHRoaXMuaGVhZGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19kYXNoYm9hcmRfX2J1dHRvbicsICdqcy1oZWFkZXItYnV0dG9uJyk7XG4gICAgdGhpcy5oZWFkZXJCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjJcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMjIgMTRcIj48dGV4dCBmaWxsPVwiIzY2NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBmb250LWZhbWlseT1cIlNvdXJjZVNhbnNQcm8tQm9sZCwgU291cmNlIFNhbnMgUHJvXCIgZm9udC1zaXplPVwiMjBcIiBmb250LXdlaWdodD1cImJvbGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ4IC0zMylcIj48dHNwYW4geD1cIjQ2Ljk4XCIgeT1cIjQ3XCI+SDE8L3RzcGFuPjwvdGV4dD48L3N2Zz48cD5IZWFkZXIgVGV4dDwvcD4nO1xuICAgIHRoaXMuaGVhZGVyQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBlZGl0b3IuYWRkKG5ldyBIZWFkZXJCbG9jayhlZGl0b3IsICcnKSwgdGhpcy5ibG9jayk7XG4gICAgICB0aGlzLmNvbGxhcHNlQWxsKCk7XG4gICAgfTtcblxuICAgIHRoaXMuZGFzaGJvYXJkLmFwcGVuZENoaWxkKHRoaXMucXVvdGVCdXR0b24pO1xuICAgIHRoaXMucXVvdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2Rhc2hib2FyZF9fYnV0dG9uJywgJ2pzLXF1b3RlLWJ1dHRvbicpO1xuICAgIHRoaXMucXVvdGVCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxNVwiIHZpZXdCb3g9XCIwIDAgMTggMTVcIj48cGF0aCBmaWxsPVwiIzY2NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTYuODgxIDE0LjE5NUguNTExVjkuNjRjMC0xLjg0My4xNjMtMy4yOTguNDg4LTQuMzYzLjMyNS0xLjA2NS45MjYtMi4wMjEgMS44MDItMi44NjdDMy42NzcgMS41NjIgNC43OTYuODk4IDYuMTU2LjQxNGwxLjI0NiAyLjYzYy0xLjI2OS40MjItMi4xOCAxLjAxMi0yLjczMSAxLjc2Ny0uNTUyLjc1Ni0uODQyIDEuNzYtLjg3MyAzLjAxNWgzLjA4M3Y2LjM3em0xMC42MyAwaC02LjM2OVY5LjY0YzAtMS44NTguMTYzLTMuMzE3LjQ4OC00LjM3NC4zMjUtMS4wNTguOTI5LTIuMDEgMS44MTMtMi44NTYuODg0LS44NDcgMS45OTgtMS41MTEgMy4zNDMtMS45OTVsMS4yNDcgMi42M2MtMS4yNy40MjItMi4xOCAxLjAxMi0yLjczMSAxLjc2Ny0uNTUyLjc1Ni0uODQzIDEuNzYtLjg3MyAzLjAxNWgzLjA4M3Y2LjM3elwiLz48L3N2Zz48cD5RdW90ZTxwPic7XG4gICAgdGhpcy5xdW90ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZWRpdG9yLmFkZChuZXcgUXVvdGVCbG9jayhlZGl0b3IsICcnKSwgdGhpcy5ibG9jayk7XG4gICAgICB0aGlzLmNvbGxhcHNlQWxsKCk7XG4gICAgfTtcblxuICAgIHRoaXMuZGFzaGJvYXJkLmFwcGVuZENoaWxkKHRoaXMudGV4dEJ1dHRvbik7XG4gICAgdGhpcy50ZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19kYXNoYm9hcmRfX2J1dHRvbicsICdqcy10ZXh0LWJ1dHRvbicpO1xuICAgIHRoaXMudGV4dEJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyMCAxNlwiPjx0ZXh0IGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGZvbnQtZmFtaWx5PVwiU291cmNlU2Fuc1Byby1SZWd1bGFyLCBTb3VyY2UgU2FucyBQcm9cIiBmb250LXNpemU9XCIyMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTQ2IC0zMilcIj4gPHRzcGFuIHg9XCIxNDQuNTdcIiB5PVwiNDdcIj5CZDwvdHNwYW4+IDwvdGV4dD48L3N2Zz48cD5Cb2R5IFRleHQ8L3A+JztcbiAgICB0aGlzLnRleHRCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGVkaXRvci5hZGQobmV3IFRleHRCbG9jayhlZGl0b3IsICcnKSwgdGhpcy5ibG9jayk7XG4gICAgICB0aGlzLmNvbGxhcHNlQWxsKCk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmVkaXRvci5vcHRpb25zLnVwbG9hZEltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmRhc2hib2FyZC5hcHBlbmRDaGlsZCh0aGlzLmltYWdlQnV0dG9uKTtcblxuICAgICAgdGhpcy5pbWFnZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZGFzaGJvYXJkX19idXR0b24nLCAnanMtaW1hZ2UtYnV0dG9uJyk7XG4gICAgICB0aGlzLmltYWdlQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI1IDIwXCI+PHBhdGggZmlsbD1cIiM2NjZcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIgZD1cIk0xLjkwMiAwQy44NjIgMCAwIC45MDcgMCAydjE2YzAgMS4wOTMuODYyIDIgMS45MDIgMmgyMS4xOTZjMS4wNCAwIDEuOTAyLS45MDcgMS45MDItMlYyYzAtMS4wOTMtLjg2Mi0yLTEuOTAyLTJIMS45MDJ6bTAgMS43MTRoMjEuMTk2Yy4xNjQgMCAuMjcyLjExMy4yNzIuMjg2djExLjM1N2wtNC4xMS0zLjQ1NWEuODA1LjgwNSAwIDAgMC0uOTY5LS4wNDVsLTMuODU1IDIuNzg2LTUuMjMtNC40NTVBLjc5OC43OTggMCAwIDAgOC42MDEgOGEuNzk2Ljc5NiAwIDAgMC0uMzczLjE1MkwxLjYzIDEyLjkzN1YyYzAtLjE3My4xMDgtLjI4Ni4yNzItLjI4NnpNMTQuNDAyIDRjLTEuMzQgMC0yLjQ0NSAxLjE2MS0yLjQ0NSAyLjU3MSAwIDEuNDEgMS4xMDQgMi41NzIgMi40NDUgMi41NzIgMS4zNDEgMCAyLjQ0Ni0xLjE2MiAyLjQ0Ni0yLjU3MiAwLTEuNDEtMS4xMDUtMi41NzEtMi40NDYtMi41NzF6bTAgMS43MTRjLjQ2IDAgLjgxNS4zNzQuODE1Ljg1NyAwIC40ODQtLjM1NS44NTgtLjgxNS44NTgtLjQ2IDAtLjgxNS0uMzc0LS44MTUtLjg1OCAwLS40ODMuMzU1LS44NTcuODE1LS44NTd6TTguNjYyIDkuOTNsNS4yMyA0LjQ0NmEuODA1LjgwNSAwIDAgMCAuOTY5LjA0NWwzLjg0Ny0yLjc4NiA0LjY2MiAzLjkyVjE4YzAgLjE3My0uMTA4LjI4Ni0uMjcyLjI4NkgxLjkwMmMtLjE2NCAwLS4yNzItLjExMy0uMjcyLS4yODZ2LTIuOTczbDcuMDMyLTUuMDk4elwiLz48L3N2Zz48cD5JbWFnZTwvcD4nO1xuICAgICAgdGhpcy5pbWFnZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBlZGl0b3IuYWRkKG5ldyBJbWFnZUJsb2NrKGVkaXRvciwgJycpLCB0aGlzLmJsb2NrKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZUFsbCgpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lZGl0b3Iub3B0aW9ucy51cGxvYWRWaWRlbykge1xuICAgICAgdGhpcy52aWRlb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5kYXNoYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy52aWRlb0J1dHRvbik7XG5cbiAgICAgIHRoaXMudmlkZW9CdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2Rhc2hib2FyZF9fYnV0dG9uJywgJ2pzLXZpZGVvLWJ1dHRvbicpXG4gICAgICB0aGlzLnZpZGVvQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI1IDIwXCI+PGcgZmlsbD1cIiM2NjZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PHBhdGggZD1cIk02LjI1IDBDNC45MTUgMCAzLjktLjAwNCAzLjA2LjA5MiAyLjIyMi4xODggMS40ODUuMzk3LjkzOS45NTJjLS41NDUuNTU0LS43NSAxLjMwNS0uODQ2IDIuMTZDLS4wMDIgMy45NjkgMCA1LjAwMyAwIDYuMzY1djcuMjcyYzAgMS4zNi0uMDA0IDIuMzkzLjA5IDMuMjQ4LjA5NS44NTUuMyAxLjYwNi44NDUgMi4xNi41NDQuNTU2IDEuMjgyLjc2NiAyLjEyMi44NjIuODQuMDk3IDEuODU2LjA5NCAzLjE5My4wOTRoMTIuNWMxLjMzNiAwIDIuMzUuMDA0IDMuMTktLjA5Mi44NC0uMDk2IDEuNTc3LS4zMDUgMi4xMjItLjg2LjU0NS0uNTU0Ljc1LTEuMzA1Ljg0Ni0yLjE2LjA5NS0uODU2LjA5Mi0xLjg5LjA5Mi0zLjI1MlY2LjM2NGMwLTEuMzYuMDA0LTIuMzkzLS4wOS0zLjI0OC0uMDk1LS44NTUtLjMtMS42MDUtLjg0NS0yLjE2QzIzLjUyMS40IDIyLjc4My4xOSAyMS45NDMuMDkzIDIxLjEwMy0uMDAyIDIwLjA4NyAwIDE4Ljc1IDBINi4yNXptMCAxLjgxOGgxMi41YzEuMzM2IDAgMi4zMjcuMDA1IDIuOTkzLjA4Mi42NjUuMDc2LjkzNC4yMSAxLjA2LjMzOS4xMjYuMTI5LjI1Ni40MDIuMzMxIDEuMDguMDc1LjY3Ny4wOCAxLjY4NS4wOCAzLjA0NXY3LjI3MmMwIDEuMzYxLS4wMDUgMi4zNy0uMDggMy4wNDctLjA3NS42NzgtLjIwNy45NTEtLjMzMyAxLjA4LS4xMjYuMTI4LS4zOTQuMjYxLTEuMDYuMzM3LS42NjYuMDc2LTEuNjU2LjA4Mi0yLjk5LjA4Mkg2LjI1Yy0xLjMzNyAwLTIuMzI3LS4wMDUtMi45OTMtLjA4Mi0uNjY2LS4wNzYtLjkzNC0uMjEtMS4wNi0uMzM5LS4xMjctLjEyOS0uMjU3LS40MDItLjMzMi0xLjA4LS4wNzUtLjY3Ny0uMDgtMS42ODUtLjA4LTMuMDQ1VjYuMzY0YzAtMS4zNjEuMDA1LTIuMzcuMDgtMy4wNDcuMDc1LS42NzguMjA3LS45NTEuMzMzLTEuMDguMTI2LS4xMjguMzk1LS4yNjEgMS4wNi0uMzM3LjY2Ni0uMDc2IDEuNjU2LS4wODIgMi45OTEtLjA4MnpcIi8+PHBhdGggZD1cIk04Ljc0NCA0LjE5MmExLjM2OSAxLjM2OSAwIDAgMC0uNzA4IDEuMjAydjkuMjEyYzAgLjUuMjcxLjk2NS43MDggMS4yMDIuNDM0LjIzNi45NjUuMjEgMS4zNzQtLjA2N2w2Ljc4NC00LjYwNmguMDAxYTEuMzc2IDEuMzc2IDAgMCAwLS4wMDEtMi4yN2MtMS40MjgtLjk2OC01LjIxNi0zLjU0LTYuNzg0LTQuNjA1YTEuMzI0IDEuMzI0IDAgMCAwLTEuMzc0LS4wNjh6bTEuMDc4IDIuMDVjMS42MSAxLjA5NCA0LjA3OCAyLjc3IDUuNTM1IDMuNzU4bC01LjUzNSAzLjc1N1Y2LjI0M3pcIi8+PC9nPjwvc3ZnPjxwPlZpZGVvPC9wPic7XG4gICAgICB0aGlzLnZpZGVvQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGVkaXRvci5hZGQobmV3IFZpZGVvQmxvY2soZWRpdG9yLCAnJyksIHRoaXMuYmxvY2spO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVEYXNoYm9hcmQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkLnN0eWxlLm1heEhlaWdodCA9PSAnMHB4JylcbiAgICAgIHRoaXMuZXhwYW5kRGFzaGJvYXJkKCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5jb2xsYXBzZURhc2hib2FyZCgpO1xuICB9XG5cbiAgY29sbGFwc2VEYXNoYm9hcmQoKTogdm9pZCB7XG4gICAgdGhpcy5kYXNoYm9hcmQuc3R5bGUubWF4SGVpZ2h0ID0gJzBweCc7XG4gICAgdGhpcy5leHBhbmRCdXR0b24uaW5uZXJIVE1MID0gJysgQUREJ1xuICB9XG5cbiAgZXhwYW5kRGFzaGJvYXJkKCk6IHZvaWQge1xuICAgIHRoaXMuY29sbGFwc2VBbGwoKTtcbiAgICB0aGlzLmRhc2hib2FyZC5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmRhc2hib2FyZC5zY3JvbGxIZWlnaHQgKyAzMCArIFwicHhcIjtcbiAgICB0aGlzLmV4cGFuZEJ1dHRvbi5pbm5lckhUTUwgPSAnSElERSdcbiAgfVxuXG4gIGNvbGxhcHNlQWxsKCkge1xuICAgIGZvciAobGV0IGk9MDtpIDwgdGhpcy5lZGl0b3IuYmxvY2tzLmxlbmd0aDtpKyspIHtcbiAgICAgIHRoaXMuZWRpdG9yLmJsb2Nrc1tpXS5jb250cm9sLmNvbGxhcHNlRGFzaGJvYXJkKCk7XG4gICAgfVxuICAgIHRoaXMuZWRpdG9yLmxhc3RDb250cm9sLmNvbGxhcHNlRGFzaGJvYXJkKCk7XG4gIH1cbn0iLCJpbXBvcnQge0NvbnRyb2x9IGZyb20gJy4vY29udHJvbCc7XG5pbXBvcnQge0Jsb2NrLCBCbG9ja1JlYWRlciwgUmF3QmxvY2t9IGZyb20gJy4vYmxvY2svYmxvY2snO1xuaW1wb3J0IHtJbWFnZUJsb2NrUmVhZGVyfSBmcm9tICcuL2Jsb2NrL2ltYWdlLWJsb2NrJztcbmltcG9ydCB7UXVvdGVCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jay9xdW90ZS1ibG9jayc7XG5pbXBvcnQge0hlYWRlckJsb2NrUmVhZGVyfSBmcm9tICcuL2Jsb2NrL2hlYWRlci1ibG9jayc7XG5pbXBvcnQge1RleHRCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jay90ZXh0LWJsb2NrJztcbmltcG9ydCB7VmlkZW9CbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jay92aWRlby1ibG9jayc7XG5cbmNvbnN0IEJMT0NLUzogQXJyYXk8QmxvY2tSZWFkZXI+ID0gW1xuICBuZXcgVGV4dEJsb2NrUmVhZGVyKCksXG4gIG5ldyBIZWFkZXJCbG9ja1JlYWRlcigpLFxuICBuZXcgUXVvdGVCbG9ja1JlYWRlcigpLFxuICBuZXcgSW1hZ2VCbG9ja1JlYWRlcigpLFxuICBuZXcgVmlkZW9CbG9ja1JlYWRlcigpLFxuXTtcblxuZnVuY3Rpb24gY29udmVydFJhd0NvbnRlbnQocmF3Q29udGVudDogQXJyYXk8UmF3QmxvY2s+LCBlZGl0b3I6IEVkaXRvcik6IEFycmF5PEJsb2NrPiB7XG4gIGxldCBibG9ja3M6IEFycmF5PEJsb2NrPiA9IFtdO1xuXG4gIGZvciAobGV0IHJhd0Jsb2NrIG9mIHJhd0NvbnRlbnQpIHtcbiAgICBsZXQgcHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgZm9yIChsZXQgYmxvY2sgb2YgQkxPQ0tTKSB7XG4gICAgICBpZiAoYmxvY2suY2FuUGFyc2UocmF3QmxvY2spKSB7XG4gICAgICAgIHByb2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIGJsb2Nrcy5wdXNoKGJsb2NrLnBhcnNlKHJhd0Jsb2NrLCBlZGl0b3IpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwcm9jZXNzZWQpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVW5yZWNvZ25pemVkIGJsb2NrIHR5cGU6ICcke3Jhd0Jsb2NrLnR5cGV9Jy4gSWdub3JlLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBibG9ja3M7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdG9yT3B0aW9ucyB7XG4gIGNvbnRlbnQ6IEFycmF5PFJhd0Jsb2NrPjtcbiAgdXBsb2FkSW1hZ2U/OiAoZmlsZTogRmlsZSwgc3VjY2Vzc0NhbGxiYWNrOiAodXJsOiBzdHJpbmcpID0+IHZvaWQsIGZhaWx1cmVDYWxsYmFjazogKGVycm9yOiBzdHJpbmcpID0+IHZvaWQpID0+IHZvaWQ7XG4gIHVwbG9hZFZpZGVvPzogKGZpbGU6IEZpbGUsIHByb2dyZXNzQ2FsbGJhY2s6IChsb2FkZWQ6IE51bWJlciwgdG90YWw6IE51bWJlciwgbGFiZWw6IFN0cmluZykgPT4gdm9pZCwgc3VjY2Vzc0NhbGxiYWNrOiAodGh1bWJuYWlsVXJsOiBzdHJpbmcsIHZpZGVvVXJsOiBzdHJpbmcpID0+IHZvaWQsIGZhaWx1cmVDYWxsYmFjazogKGVycm9yOiBzdHJpbmcpID0+IHZvaWQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBFZGl0b3Ige1xuICBibG9ja3M6IEFycmF5PEJsb2NrPjtcbiAgbGFzdENvbnRyb2w6IENvbnRyb2w7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW06IEhUTUxEaXZFbGVtZW50LFxuICAgIHB1YmxpYyBvcHRpb25zOiBFZGl0b3JPcHRpb25zXG4gICkge1xuICAgIHRoaXMuYmxvY2tzID0gY29udmVydFJhd0NvbnRlbnQodGhpcy5vcHRpb25zLmNvbnRlbnQsIHRoaXMpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBhZGQoYmxvY2s6IEJsb2NrLCBiZWZvcmVCbG9jazogQmxvY2spIHtcbiAgICBpZiAoYmVmb3JlQmxvY2spIHtcbiAgICAgIGZvciAobGV0IGk9MDtpIDwgdGhpcy5ibG9ja3MubGVuZ3RoO2krKykge1xuICAgICAgICBpZiAoYmVmb3JlQmxvY2sgPT0gdGhpcy5ibG9ja3NbaV0pIHtcbiAgICAgICAgICB0aGlzLmJsb2Nrcy5zcGxpY2UoaSwgMCwgYmxvY2spO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmVsZW0uaW5zZXJ0QmVmb3JlKGJsb2NrLmVsZW0sIGJlZm9yZUJsb2NrLmVsZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJsb2Nrcy5wdXNoKGJsb2NrKTtcbiAgICAgIHRoaXMuZWxlbS5pbnNlcnRCZWZvcmUoYmxvY2suZWxlbSwgdGhpcy5sYXN0Q29udHJvbC5lbGVtKTtcbiAgICB9XG5cbiAgICBibG9jay5mb2N1cygpO1xuICAgIGJsb2NrLmNvbnRyb2wuZXhwYW5kRGFzaGJvYXJkKCk7XG4gIH1cblxuICByZW1vdmUoYmxvY2s6IEJsb2NrKSB7XG4gICAgZm9yIChsZXQgaT0wO2kgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7aSsrKSB7XG4gICAgICBpZiAoYmxvY2sgPT0gdGhpcy5ibG9ja3NbaV0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJKQUpBSkFKQVwiKVxuICAgICAgICB0aGlzLmJsb2Nrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJsb2NrLmVsZW0ucmVtb3ZlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvbnRlbnQoKTogQXJyYXk8UmF3QmxvY2s+IHtcbiAgICBsZXQgcmF3Q29udGVudDogQXJyYXk8UmF3QmxvY2s+ID0gW107XG4gICAgZm9yIChsZXQgYmxvY2sgb2YgdGhpcy5ibG9ja3MpIHtcbiAgICAgIHJhd0NvbnRlbnQucHVzaChibG9jay5nZXRSYXdDb250ZW50KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmF3Q29udGVudDtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCkge1xuICAgIGZvciAobGV0IGJsb2NrIG9mIHRoaXMuYmxvY2tzKSB7XG4gICAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQoYmxvY2suZWxlbSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMubGFzdENvbnRyb2wgPSBuZXcgQ29udHJvbCh0aGlzLCBudWxsKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy5sYXN0Q29udHJvbC5lbGVtKTtcbiAgICB0aGlzLmxhc3RDb250cm9sLmV4cGFuZERhc2hib2FyZCgpO1xuICB9XG59XG4iLCJpbXBvcnQge0VkaXRvciwgRWRpdG9yT3B0aW9uc30gZnJvbSAnLi9lZGl0b3IvZWRpdG9yJ1xuXG4oPGFueT53aW5kb3cpLmluc3RhbGxFZGl0b3IgPSAoZWxlbTogSFRNTERpdkVsZW1lbnQsIG9wdGlvbnM6IEVkaXRvck9wdGlvbnMgPSAoPEVkaXRvck9wdGlvbnM+e30pKSA9PiB7XG4gIHJldHVybiBuZXcgRWRpdG9yKGVsZW0sIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IHsgRWRpdG9yLCBFZGl0b3JPcHRpb25zIH07XG4iXSwic291cmNlUm9vdCI6IiJ9