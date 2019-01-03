/******/ (function(modules) { // webpackBootstrap
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
        this.editor = editor;
        this.elem = document.createElement('div');
        this.control = new _control__WEBPACK_IMPORTED_MODULE_0__["Control"](editor, this);
        this.elem.classList.add('editor-block');
        this.elem.appendChild(this.control.elem);
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
        _this.textarea.classList.add('editor-block__editor', 'editor-block__header');
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
        _this.textarea.classList.add('editor-block__editor', 'editor-block__quote');
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
        _this.textarea.classList.add('editor-block__editor', 'editor-block__body');
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
        this.quoteButton = document.createElement('div');
        this.headerButton = document.createElement('div');
        this.textButton = document.createElement('div');
        this.elem.classList.add('editor-control');
        this.elem.appendChild(this.expandHandle);
        this.expandHandle.classList.add('editor-control__expand-handle', 'js-expand-handle');
        var expandButton = document.createElement('div');
        this.expandHandle.appendChild(expandButton);
        expandButton.classList.add('editor-control__expand-handle__button');
        expandButton.innerHTML = '+';
        this.expandHandle.onclick = function () { _this.expandDashboard(); };
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
    Control.prototype.collapseDashboard = function () {
        this.dashboard.style.maxHeight = '0';
    };
    Control.prototype.expandDashboard = function () {
        this.collapseAll();
        this.dashboard.style.maxHeight = this.dashboard.scrollHeight + 30 + "px";
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor/editor */ "./src/ts/editor/editor.ts");

window.installEditor = function (elem, options) {
    if (options === void 0) { options = {}; }
    return new _editor_editor__WEBPACK_IMPORTED_MODULE_0__["Editor"](elem, options);
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2VkaXRvci9ibG9jay9ibG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZWRpdG9yL2Jsb2NrL2hlYWRlci1ibG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZWRpdG9yL2Jsb2NrL2ltYWdlLWJsb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9lZGl0b3IvYmxvY2svcXVvdGUtYmxvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2VkaXRvci9ibG9jay90ZXh0LWJsb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9lZGl0b3IvYmxvY2svdmlkZW8tYmxvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2VkaXRvci9jb250cm9sLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9lZGl0b3IvZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNo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RUFBRTtZQUExQixJQUFJLEtBQUs7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZ0RBQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMxRkQ7QUFBQTtBQUFxRDtBQUUvQyxNQUFPLENBQUMsYUFBYSxHQUFHLFVBQUMsSUFBb0IsRUFBRSxPQUE0QztJQUE1QyxvQ0FBeUMsRUFBRztJQUMvRixPQUFPLElBQUkscURBQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDIiwiZmlsZSI6ImVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RzL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHtDb250cm9sfSBmcm9tICcuLi9jb250cm9sJztcbmltcG9ydCB7RWRpdG9yfSBmcm9tICcuLi9lZGl0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhd0Jsb2NrIHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrUmVhZGVyIHtcbiAgY2FuUGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrKTogQm9vbGVhblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2tcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJsb2NrIHtcbiAgZWxlbTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udHJvbDogQ29udHJvbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWRpdG9yOiBFZGl0b3IpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29udHJvbChlZGl0b3IsIHRoaXMpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2snKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmVsZW0pO1xuICB9XG5cbiAgYWJzdHJhY3QgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9ja1xuXG4gIGFic3RyYWN0IGZvY3VzKCk6IHZvaWRcbn1cblxuIiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBSYXdCbG9jaywgQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICdoZWFkZXInO1xuXG5pbnRlcmZhY2UgUmF3VGV4dEJsb2NrIGV4dGVuZHMgUmF3QmxvY2sge1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJCbG9ja1JlYWRlciBpbXBsZW1lbnRzIEJsb2NrUmVhZGVyIHtcbiAgY2FuUGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIHJhd0Jsb2NrLnR5cGUgPT0gVFlQRTtcbiAgfVxuXG4gIHBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jaywgZWRpdG9yOiBFZGl0b3IpOiBCbG9jayB7XG4gICAgbGV0IHJhd0hlYWRlckJsb2NrID0gcmF3QmxvY2sgYXMgUmF3VGV4dEJsb2NrO1xuICAgIHJldHVybiBuZXcgSGVhZGVyQmxvY2soZWRpdG9yLCByYXdIZWFkZXJCbG9jay5jb250ZW50KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyQmxvY2sgZXh0ZW5kcyBCbG9jayB7XG5cbiAgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9jaycsICdlZGl0b3ItYmxvY2tfX3RleHQnKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy50ZXh0YXJlYSk7XG5cbiAgICB0aGlzLnRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fZWRpdG9yJywgJ2VkaXRvci1ibG9ja19faGVhZGVyJyk7XG4gICAgdGhpcy50ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMScpO1xuICAgIHRoaXMudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnRleHRhcmVhLnNjcm9sbEhlaWdodCA+IHRoaXMudGV4dGFyZWEuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMudGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gdGhpcy50ZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMudGV4dGFyZWEuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy50ZXh0YXJlYS5mb2N1cygpO1xuICB9XG5cbiAgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9jayB7XG4gICAgbGV0IHJhdzogUmF3VGV4dEJsb2NrID0ge1xuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMudGV4dGFyZWEudmFsdWVcbiAgICB9O1xuICAgIHJldHVybiByYXc7XG4gIH1cbn0iLCJpbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vZWRpdG9yJztcbmltcG9ydCB7QmxvY2ssIFJhd0Jsb2NrLCBCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jaydcblxuY29uc3QgVFlQRTogc3RyaW5nID0gJ2ltYWdlJztcblxuaW50ZXJmYWNlIFJhd0ltYWdlQmxvY2sgZXh0ZW5kcyBSYXdCbG9jayB7XG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VCbG9ja1JlYWRlciBpbXBsZW1lbnRzIEJsb2NrUmVhZGVyIHtcbiAgY2FuUGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIHJhd0Jsb2NrLnR5cGUgPT0gVFlQRTtcbiAgfVxuXG4gIHBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jaywgZWRpdG9yOiBFZGl0b3IpOiBCbG9jayB7XG4gICAgbGV0IHJhd0ltYWdlQmxvY2sgPSByYXdCbG9jayBhcyBSYXdJbWFnZUJsb2NrO1xuICAgIHJldHVybiBuZXcgSW1hZ2VCbG9jayhlZGl0b3IsIHJhd0ltYWdlQmxvY2sudXJsKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VCbG9jayBleHRlbmRzIEJsb2NrIHtcblxuICB1cGxvYWRQYW5lbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdXBsb2FkSWNvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdXBsb2FkTGFiZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwbG9hZEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbG9hZGluZ0ljb246IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW5wdXRGaWxlOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBpbWFnZVBhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWc6IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWRpdG9yOiBFZGl0b3IsIHB1YmxpYyB1cmw6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19faW1hZ2UnKTtcbiAgICB0aGlzLmltZy5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlX19pbWcnKTtcblxuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZFBhbmVsKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy5pbWFnZVBhbmVsKTtcblxuICAgIHRoaXMudXBsb2FkUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dEZpbGUpO1xuICAgIHRoaXMudXBsb2FkUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRCdXR0b24pO1xuICAgIHRoaXMudXBsb2FkUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRJY29uKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkTGFiZWwpO1xuICAgIHRoaXMudXBsb2FkUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy5sb2FkaW5nSWNvbik7XG4gICAgdGhpcy5pbWFnZVBhbmVsLmFwcGVuZENoaWxkKHRoaXMuaW1nKTtcblxuICAgIHRoaXMudXBsb2FkUGFuZWwuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZV9fdXBsb2FkLXBhbmVsJylcbiAgICB0aGlzLnVwbG9hZEljb24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZV9fdXBsb2FkLXBhbmVsX19pY29uJylcbiAgICB0aGlzLnVwbG9hZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlX191cGxvYWQtcGFuZWxfX2J1dHRvbicpO1xuICAgIHRoaXMuaW5wdXRGaWxlLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19faW1hZ2VfX3VwbG9hZC1wYW5lbF9faW5wdXQnKTtcblxuICAgIHRoaXMudXBsb2FkSWNvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCI1M1wiIGhlaWdodD1cIjQyXCIgdmlld0JveD1cIjAgMCA1MyA0MlwiPlxcbicgK1xuICAgICAgJyAgICA8ZGVmcz5cXG4nICtcbiAgICAgICcgICAgICAgIDxwYXRoIGlkPVwiYlwiIGQ9XCJNMTMgMHYyOWgzMFYwaDIwdjUzSDBWMGgxM3pcIi8+XFxuJyArXG4gICAgICAnICAgICAgICA8cmVjdCBpZD1cImFcIiB3aWR0aD1cIjUzXCIgaGVpZ2h0PVwiMzRcIiB4PVwiNVwiIHk9XCIxMlwiIHJ4PVwiMlwiLz5cXG4nICtcbiAgICAgICcgICAgICAgIDxtYXNrIGlkPVwiZFwiIHdpZHRoPVwiNTNcIiBoZWlnaHQ9XCIzNFwiIHg9XCIwXCIgeT1cIjBcIiBmaWxsPVwiI2ZmZlwiPlxcbicgK1xuICAgICAgJyAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNhXCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPC9tYXNrPlxcbicgK1xuICAgICAgJyAgICA8L2RlZnM+XFxuJyArXG4gICAgICAnICAgIDxnIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNSAtNClcIj5cXG4nICtcbiAgICAgICcgICAgICAgIDxtYXNrIGlkPVwiY1wiIGZpbGw9XCIjZmZmXCI+XFxuJyArXG4gICAgICAnICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2JcIi8+XFxuJyArXG4gICAgICAnICAgICAgICA8L21hc2s+XFxuJyArXG4gICAgICAnICAgICAgICA8ZyBmaWxsLXJ1bGU9XCJub256ZXJvXCIgc3Ryb2tlPVwiIzY2NlwiIHN0cm9rZS1kYXNoYXJyYXk9XCI0LDJcIiBzdHJva2Utd2lkdGg9XCI0XCIgbWFzaz1cInVybCgjYylcIj5cXG4nICtcbiAgICAgICcgICAgICAgICAgICA8dXNlIG1hc2s9XCJ1cmwoI2QpXCIgeGxpbms6aHJlZj1cIiNhXCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPC9nPlxcbicgK1xuICAgICAgJyAgICAgICAgPHBhdGggZmlsbD1cIiM2NjZcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIgZD1cIk0xNS4yODMgNEMxNC4wMzUgNCAxMyA1LjA4OCAxMyA2LjR2MTkuMmMwIDEuMzEyIDEuMDM1IDIuNCAyLjI4MyAyLjRoMjUuNDM0QzQxLjk2NSAyOCA0MyAyNi45MTIgNDMgMjUuNlY2LjRDNDMgNS4wODggNDEuOTY1IDQgNDAuNzE3IDRIMTUuMjgzem0uMDQyIDJoMjUuMzVjLjE5NyAwIC4zMjUuMTM1LjMyNS4zNDRWMjBsLTQuOTE2LTQuMTU1YS45Ni45NiAwIDAgMC0xLjE1Ny0uMDU0bC00LjYxMSAzLjM1LTYuMjU3LTUuMzU3YS45NS45NSAwIDAgMC0uNzItLjIyNi45NS45NSAwIDAgMC0uNDQ4LjE4M0wxNSAxOS40OTVWNi4zNDRjMC0uMjA5LjEyOC0uMzQ0LjMyNS0uMzQ0ek0zMCA5Yy0xLjY0NSAwLTMgMS4zNTUtMyAzczEuMzU1IDMgMyAzIDMtMS4zNTUgMy0zLTEuMzU1LTMtMy0zem0wIDJjLjU2NCAwIDEgLjQzNiAxIDEgMCAuNTY0LS40MzYgMS0xIDEtLjU2NCAwLTEtLjQzNi0xLTEgMC0uNTY0LjQzNi0xIDEtMXptLTYuNTkgNWw2LjI1NiA1LjMyYS45NjMuOTYzIDAgMCAwIDEuMTU3LjA1NGw0LjYwMS0zLjMzM0w0MSAyMi43M3YyLjkyN2MwIC4yMDctLjEyOC4zNDItLjMyNS4zNDJoLTI1LjM1Yy0uMTk3IDAtLjMyNS0uMTM1LS4zMjUtLjM0MlYyMi4xbDguNDEtNi4xelwiLz5cXG4nICtcbiAgICAgICcgICAgICAgIDxwYXRoIHN0cm9rZT1cIiM2NjZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk0zNCAyNGwtMyAxMWg0bDEgNWgzbC0xLTVoNHpcIi8+XFxuJyArXG4gICAgICAnICAgIDwvZz5cXG4nICtcbiAgICAgICc8L3N2Zz5cXG4nO1xuXG4gICAgaWYgKHRoaXMuaXNBZHZhbmNlZFVwbG9hZCgpKVxuICAgICAgdGhpcy51cGxvYWRMYWJlbC5pbm5lckhUTUwgPSAnRHJhZyBhbmQgZHJvcCBhIHBob3RvIHRvIHVwbG9hZCBvciB0YXAgdG8gdXBsb2FkJztcbiAgICBlbHNlXG4gICAgICB0aGlzLnVwbG9hZExhYmVsLmlubmVySFRNTCA9ICdUYXAgdG8gdXBsb2FkJztcbiAgICB0aGlzLnVwbG9hZFBhbmVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlucHV0RmlsZS5jbGljaygpO1xuICAgIH1cblxuICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJywgJ2RyYWdsZWF2ZScsICdkcm9wJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy5wcmV2ZW50RGVmYXVsdHMsIGZhbHNlKVxuICAgIH0pO1xuXG4gICAgWydkcmFnZW50ZXInLCAnZHJhZ292ZXInXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLnVwbG9hZFBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudXBsb2FkUGFuZWwuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZV9fdXBsb2FkLXBhbmVsLS1hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgWydkcmFnbGVhdmUnLCAnZHJvcCddLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsICgpID0+IHtcbiAgICAgICAgdGhpcy51cGxvYWRQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0b3ItYmxvY2tfX2ltYWdlX191cGxvYWQtcGFuZWwtLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgfSlcblxuICAgIHRoaXMudXBsb2FkUGFuZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudDogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICBsZXQgZHQgPSBldmVudC5kYXRhVHJhbnNmZXI7XG4gICAgICBsZXQgZmlsZXMgPSBkdC5maWxlcztcblxuICAgICAgdGhpcy5oYW5kbGVGaWxlcyhmaWxlcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRpbmdJY29uLmlubmVySFRNTCA9ICdVcGxvYWRpbmcgaW1hZ2UuLi4nXG4gICAgdGhpcy5zdG9wTG9hZGluZygpO1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLmlubmVySFRNTCA9ICdVcGxvYWQgaW1hZ2UnO1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7IHRoaXMuaW5wdXRGaWxlLmNsaWNrKCkgfVxuXG4gICAgdGhpcy5pbnB1dEZpbGUudHlwZSA9ICdmaWxlJztcbiAgICB0aGlzLmlucHV0RmlsZS5vbmNoYW5nZSA9IChldmVudDogRXZlbnQpOiBhbnkgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9ICg8SFRNTElucHV0RWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgICAgdGhpcy5oYW5kbGVGaWxlcyh0YXJnZXQuZmlsZXMpO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIGhhbmRsZUZpbGVzKGZpbGVzOiBGaWxlTGlzdCk6IHZvaWQge1xuICAgIGlmIChmaWxlcy5sZW5ndGggPT0gMCkge1xuICAgICAgLy8gaW4gSUUgMTEsIHRoZSBjaGFuZ2UgZXZlbnQgaXMgZmlyZWQgd2hlbiB3ZSBwcm9ncmFtbWF0aWNhbGx5IHNldCBgLmpzLWZpbGVJbnB1dGAncyB2YWx1ZSB0byBlbXB0eSBzdHJpbmcuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdGFydExvYWRpbmcoKTtcblxuICAgIGxldCBzdWNjZXNzQ2FsbGJhY2sgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfTtcblxuICAgIGxldCBmYWlsQ2FsbGJhY2sgPSAoZXJyb3I6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5zdG9wTG9hZGluZygpO1xuICAgIH07XG5cbiAgICB0aGlzLmVkaXRvci5vcHRpb25zLnVwbG9hZEltYWdlKGZpbGVzWzBdLCBzdWNjZXNzQ2FsbGJhY2ssIGZhaWxDYWxsYmFjayk7XG4gICAgdGhpcy5pbnB1dEZpbGUudmFsdWUgPSAnJztcbiAgfTtcblxuICBwcmV2ZW50RGVmYXVsdHMoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBzdGFydExvYWRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy51cGxvYWRMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMubG9hZGluZ0ljb24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICB9XG5cbiAgc3RvcExvYWRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy51cGxvYWRMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgdGhpcy5sb2FkaW5nSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgaXNBZHZhbmNlZFVwbG9hZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCdkcmFnZ2FibGUnIGluIHRoaXMudXBsb2FkUGFuZWwpIHx8ICgnb25kcmFnc3RhcnQnIGluIHRoaXMudXBsb2FkUGFuZWwgJiYgJ29uZHJvcCcgaW4gdGhpcy51cGxvYWRQYW5lbCk7XG4gIH1cblxuICB1cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5pbWcuc3JjID0gdGhpcy51cmw7XG4gICAgICB0aGlzLmltYWdlUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLnVwbG9hZFBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW1hZ2VQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHt9XG5cbiAgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9jayB7XG4gICAgbGV0IHJhdzogUmF3SW1hZ2VCbG9jayA9IHtcbiAgICAgIHR5cGU6IFRZUEUsXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfTtcbiAgICByZXR1cm4gcmF3O1xuICB9XG59XG4iLCJpbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vZWRpdG9yJztcbmltcG9ydCB7QmxvY2ssIFJhd0Jsb2NrLCBCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jaydcblxuY29uc3QgVFlQRTogc3RyaW5nID0gJ3F1b3RlJztcblxuaW50ZXJmYWNlIFJhd1F1b3RlQmxvY2sgZXh0ZW5kcyBSYXdCbG9jayB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFF1b3RlQmxvY2tSZWFkZXIgaW1wbGVtZW50cyBCbG9ja1JlYWRlciB7XG4gIGNhblBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jayk6IEJvb2xlYW4ge1xuICAgIHJldHVybiByYXdCbG9jay50eXBlID09IFRZUEU7XG4gIH1cblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2sge1xuICAgIGxldCByYXdRdW90ZUJsb2NrID0gcmF3QmxvY2sgYXMgUmF3UXVvdGVCbG9jaztcbiAgICByZXR1cm4gbmV3IFF1b3RlQmxvY2soZWRpdG9yLCByYXdRdW90ZUJsb2NrLmNvbnRlbnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdW90ZUJsb2NrIGV4dGVuZHMgQmxvY2sge1xuXG4gIHRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWRpdG9yOiBFZGl0b3IsIHB1YmxpYyBjb250ZW50OiBzdHJpbmcpIHtcbiAgICBzdXBlcihlZGl0b3IpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3RleHQnKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy50ZXh0YXJlYSk7XG5cbiAgICB0aGlzLnRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fZWRpdG9yJywgJ2VkaXRvci1ibG9ja19fcXVvdGUnKTtcbiAgICB0aGlzLnRleHRhcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICcxJyk7XG4gICAgdGhpcy50ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ID4gdGhpcy50ZXh0YXJlYS5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSB0aGlzLnRleHRhcmVhLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy50ZXh0YXJlYS5pbm5lckhUTUwgPSB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLnRleHRhcmVhLmZvY3VzKCk7XG4gIH1cblxuICBnZXRSYXdDb250ZW50KCk6IFJhd0Jsb2NrIHtcbiAgICBsZXQgcmF3OiBSYXdRdW90ZUJsb2NrID0ge1xuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMudGV4dGFyZWEudmFsdWVcbiAgICB9O1xuICAgIHJldHVybiByYXc7XG4gIH1cbn0iLCJpbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vZWRpdG9yJztcbmltcG9ydCB7QmxvY2ssIFJhd0Jsb2NrLCBCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jaydcblxuY29uc3QgVFlQRTogc3RyaW5nID0gJ3RleHQnO1xuXG5pbnRlcmZhY2UgUmF3VGV4dEJsb2NrIGV4dGVuZHMgUmF3QmxvY2sge1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0QmxvY2tSZWFkZXIgaW1wbGVtZW50cyBCbG9ja1JlYWRlciB7XG4gIGNhblBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jayk6IEJvb2xlYW4ge1xuICAgIHJldHVybiByYXdCbG9jay50eXBlID09IFRZUEU7XG4gIH1cblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2sge1xuICAgIGxldCByYXdUZXh0QmxvY2sgPSByYXdCbG9jayBhcyBSYXdUZXh0QmxvY2s7XG4gICAgcmV0dXJuIG5ldyBUZXh0QmxvY2soZWRpdG9yLCByYXdUZXh0QmxvY2suY29udGVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleHRCbG9jayBleHRlbmRzIEJsb2NrIHtcblxuICB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgY29udGVudDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWRpdG9yKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX190ZXh0Jyk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudGV4dGFyZWEpO1xuXG4gICAgdGhpcy50ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2VkaXRvcicsICdlZGl0b3ItYmxvY2tfX2JvZHknKTtcbiAgICB0aGlzLnRleHRhcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICcxJyk7XG4gICAgdGhpcy50ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ID4gdGhpcy50ZXh0YXJlYS5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSB0aGlzLnRleHRhcmVhLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy50ZXh0YXJlYS5pbm5lckhUTUwgPSB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLnRleHRhcmVhLmZvY3VzKCk7XG4gIH1cblxuICBnZXRSYXdDb250ZW50KCk6IFJhd0Jsb2NrIHtcbiAgICBsZXQgcmF3OiBSYXdUZXh0QmxvY2sgPSB7XG4gICAgICB0eXBlOiBUWVBFLFxuICAgICAgY29udGVudDogdGhpcy50ZXh0YXJlYS52YWx1ZVxuICAgIH07XG4gICAgcmV0dXJuIHJhdztcbiAgfVxufSIsImltcG9ydCB7RWRpdG9yfSBmcm9tICcuLi9lZGl0b3InO1xuaW1wb3J0IHtCbG9jaywgUmF3QmxvY2ssIEJsb2NrUmVhZGVyfSBmcm9tICcuL2Jsb2NrJ1xuXG5jb25zdCBUWVBFOiBzdHJpbmcgPSAndmlkZW8nO1xuXG5pbnRlcmZhY2UgUmF3VmlkZW9CbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb0Jsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3VmlkZW9CbG9jayA9IHJhd0Jsb2NrIGFzIFJhd1ZpZGVvQmxvY2s7XG4gICAgcmV0dXJuIG5ldyBWaWRlb0Jsb2NrKGVkaXRvciwgcmF3VmlkZW9CbG9jay51cmwpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb0Jsb2NrIGV4dGVuZHMgQmxvY2sge1xuXG4gIHVwbG9hZFBhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cGxvYWRJY29uQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cGxvYWRJY29uOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cGxvYWRMYWJlbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdXBsb2FkQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsb2FkaW5nSWNvbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBpbnB1dEZpbGU6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIGlucHV0VGV4dENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5wdXRUZXh0TGFiZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0VGV4dEljb246IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW5wdXRUZXh0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICB2aWRlb1BhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2aWRlb0VsZW06IEhUTUxWaWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICB2aWRlb0lmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWRpdG9yOiBFZGl0b3IsIHB1YmxpYyB2aWRlb1VybDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWRpdG9yKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlbycpO1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3VwbG9hZC1idXR0b24nKTtcbiAgICB0aGlzLnZpZGVvRWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3ZpZGVvX192aWRlby1lbGVtJylcblxuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZFBhbmVsKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy52aWRlb1BhbmVsKTtcblxuICAgIHRoaXMudmlkZW9QYW5lbC5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvRWxlbSk7XG4gICAgdGhpcy52aWRlb1BhbmVsLmFwcGVuZENoaWxkKHRoaXMudmlkZW9JZnJhbWUpO1xuICAgIHRoaXMudmlkZW9JZnJhbWUuZnJhbWVCb3JkZXIgPSBcIjBcIjtcblxuICAgIHRoaXMudXBsb2FkUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRJY29uQ29udGFpbmVyKTtcbiAgICB0aGlzLnVwbG9hZEljb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dEZpbGUpO1xuICAgIHRoaXMudXBsb2FkSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZEljb24pO1xuICAgIHRoaXMudXBsb2FkSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZExhYmVsKTtcbiAgICB0aGlzLnVwbG9hZEljb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRCdXR0b24pO1xuICAgIHRoaXMudXBsb2FkUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy5sb2FkaW5nSWNvbik7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0VGV4dExhYmVsKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRUZXh0Q29udGFpbmVyKTtcbiAgICB0aGlzLmlucHV0VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0VGV4dEljb24pO1xuICAgIHRoaXMuaW5wdXRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRUZXh0KTtcblxuICAgIHRoaXMudXBsb2FkUGFuZWwuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLXBhbmVsJyk7XG4gICAgdGhpcy51cGxvYWRJY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3VwbG9hZC1wYW5lbF9faWNvbi1jb250YWluZXInKTtcbiAgICB0aGlzLnVwbG9hZEljb24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLXBhbmVsX19pY29uLWNvbnRhaW5lcl9faWNvbicpO1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3VwbG9hZC1wYW5lbF9faWNvbi1jb250YWluZXJfX2J1dHRvbicpO1xuICAgIHRoaXMuaW5wdXRGaWxlLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3VwbG9hZC1wYW5lbF9faWNvbi1jb250YWluZXJfX2lucHV0Jyk7XG4gICAgdGhpcy5pbnB1dFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLXBhbmVsX19pbnB1dC1jb250YWluZXInKTtcbiAgICB0aGlzLmlucHV0VGV4dExhYmVsLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3VwbG9hZC1wYW5lbF9faW5wdXQtY29udGFpbmVyX19sYWJlbCcpO1xuICAgIHRoaXMuaW5wdXRUZXh0SWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3ZpZGVvX191cGxvYWQtcGFuZWxfX2lucHV0LWNvbnRhaW5lcl9faWNvbicpO1xuICAgIHRoaXMuaW5wdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3VwbG9hZC1wYW5lbF9faW5wdXQtY29udGFpbmVyX19pbnB1dCcpO1xuICAgIHRoaXMudmlkZW9JZnJhbWUuY2xhc3NMaXN0LmFkZCgnanMtdmlkZW8taWZyYW1lJyk7XG5cbiAgICB0aGlzLnVwbG9hZEljb24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiNTNcIiBoZWlnaHQ9XCI0MlwiIHZpZXdCb3g9XCIwIDAgNTMgNDJcIj5cXG4nICtcbiAgICAgICcgICAgPGRlZnM+XFxuJyArXG4gICAgICAnICAgICAgICA8cGF0aCBpZD1cImJcIiBkPVwiTTEzIDB2MjloMzBWMGgyMHY1M0gwVjBoMTN6XCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPHJlY3QgaWQ9XCJhXCIgd2lkdGg9XCI1M1wiIGhlaWdodD1cIjM0XCIgeD1cIjVcIiB5PVwiMTJcIiByeD1cIjJcIi8+XFxuJyArXG4gICAgICAnICAgICAgICA8bWFzayBpZD1cImRcIiB3aWR0aD1cIjUzXCIgaGVpZ2h0PVwiMzRcIiB4PVwiMFwiIHk9XCIwXCIgZmlsbD1cIiNmZmZcIj5cXG4nICtcbiAgICAgICcgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjYVwiLz5cXG4nICtcbiAgICAgICcgICAgICAgIDwvbWFzaz5cXG4nICtcbiAgICAgICcgICAgPC9kZWZzPlxcbicgK1xuICAgICAgJyAgICA8ZyBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUgLTQpXCI+XFxuJyArXG4gICAgICAnICAgICAgICA8bWFzayBpZD1cImNcIiBmaWxsPVwiI2ZmZlwiPlxcbicgK1xuICAgICAgJyAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNiXCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPC9tYXNrPlxcbicgK1xuICAgICAgJyAgICAgICAgPGcgZmlsbC1ydWxlPVwibm9uemVyb1wiIHN0cm9rZT1cIiM2NjZcIiBzdHJva2UtZGFzaGFycmF5PVwiNCwyXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIG1hc2s9XCJ1cmwoI2MpXCI+XFxuJyArXG4gICAgICAnICAgICAgICAgICAgPHVzZSBtYXNrPVwidXJsKCNkKVwiIHhsaW5rOmhyZWY9XCIjYVwiLz5cXG4nICtcbiAgICAgICcgICAgICAgIDwvZz5cXG4nICtcbiAgICAgICcgICAgICAgIDxnIGZpbGw9XCIjNjY2XCI+XFxuJyArXG4gICAgICAnICAgICAgICAgICAgPHBhdGggZD1cIk0yMC41IDRjLTEuNjAzIDAtMi44Mi0uMDA0LTMuODI3LjExLTEuMDA4LjExNi0xLjg5My4zNjYtMi41NDcgMS4wMzItLjY1NS42NjYtLjkwMSAxLjU2Ny0xLjAxNSAyLjU5My0uMTE0IDEuMDI2LS4xMTEgMi4yNjctLjExMSAzLjkwMXY4LjcyOGMwIDEuNjMxLS4wMDQgMi44NzEuMTA5IDMuODk3LjExMyAxLjAyNS4zNTkgMS45MjYgMS4wMTMgMi41OTMuNjUzLjY2NiAxLjUzOC45MTcgMi41NDYgMS4wMzMgMS4wMDguMTE2IDIuMjI3LjExMyAzLjgzMi4xMTNoMTVjMS42MDMgMCAyLjgyLjAwNCAzLjgyNy0uMTEgMS4wMDgtLjExNiAxLjg5My0uMzY2IDIuNTQ3LTEuMDMyLjY1NS0uNjY2LjkwMS0xLjU2NyAxLjAxNS0yLjU5My4xMTQtMS4wMjYuMTExLTIuMjY3LjExMS0zLjkwMXYtOC43MjhjMC0xLjYzMS4wMDQtMi44NzEtLjEwOS0zLjg5Ny0uMTEzLTEuMDI1LS4zNTktMS45MjYtMS4wMTMtMi41OTMtLjY1My0uNjY2LTEuNTM4LS45MTctMi41NDYtMS4wMzNDMzguMzI0IDMuOTk3IDM3LjEwNSA0IDM1LjUgNGgtMTV6bTAgMi4xODJoMTVjMS42MDQgMCAyLjc5Mi4wMDYgMy41OS4wOTguOC4wOTIgMS4xMjIuMjUzIDEuMjczLjQwNy4xNTIuMTU0LjMwOC40ODIuMzk4IDEuMjk1LjA5LjgxNC4wOTYgMi4wMjMuMDk2IDMuNjU0djguNzI4YzAgMS42MzItLjAwNiAyLjg0Mi0uMDk2IDMuNjU2LS4wOS44MTMtLjI0OCAxLjE0MS0uNCAxLjI5NS0uMTUxLjE1NC0uNDczLjMxNC0xLjI3Mi40MDUtLjc5OS4wOTEtMS45ODcuMDk4LTMuNTg5LjA5OGgtMTVjLTEuNjAzIDAtMi43OTItLjAwNi0zLjU5LS4wOTgtLjgtLjA5Mi0xLjEyMi0uMjUzLTEuMjczLS40MDctLjE1Mi0uMTU0LS4zMDgtLjQ4Mi0uMzk4LTEuMjk1LS4wOS0uODE0LS4wOTYtMi4wMjMtLjA5Ni0zLjY1NHYtOC43MjhjMC0xLjYzMi4wMDYtMi44NDIuMDk2LTMuNjU2LjA5LS44MTMuMjQ4LTEuMTQxLjQtMS4yOTUuMTUxLS4xNTQuNDczLS4zMTQgMS4yNzItLjQwNS44LS4wOTEgMS45ODctLjA5OCAzLjU5LS4wOTh6XCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMuODIzIDkuMTg4YTEuNjA4IDEuNjA4IDAgMCAwLS44MjMgMS40MXYxMC44MDRjMCAuNTg2LjMxNSAxLjEzMi44MjMgMS40MWExLjUyNyAxLjUyNyAwIDAgMCAxLjU5Ny0uMDhsNy44ODUtNS40MDFoLjAwMmMuNDMtLjI5Ni42OTMtLjc5NS42OTMtMS4zMzFhMS42MTggMS42MTggMCAwIDAtLjY5NS0xLjMzTDI1LjQyIDkuMjY2YTEuNTI3IDEuNTI3IDAgMCAwLTEuNTk3LS4wNzl6bTEuMjUzIDIuNDA1TDMxLjUwOSAxNmwtNi40MzMgNC40MDZ2LTguODEzelwiLz5cXG4nICtcbiAgICAgICcgICAgICAgIDwvZz5cXG4nICtcbiAgICAgICcgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBzdHJva2U9XCIjNjY2XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMzQgMjRsLTMgMTFoNGwxIDVoM2wtMS01aDR6XCIvPlxcbicgK1xuICAgICAgJyAgICA8L2c+XFxuJyArXG4gICAgICAnPC9zdmc+XFxuJztcblxuICAgIGlmICh0aGlzLmlzQWR2YW5jZWRVcGxvYWQoKSlcbiAgICAgIHRoaXMudXBsb2FkTGFiZWwuaW5uZXJIVE1MID0gJ0RyYWcgYW5kIGRyb3AgYSBwaG90byB0byB1cGxvYWQgb3IgdGFwIHRvIHVwbG9hZCc7XG4gICAgZWxzZVxuICAgICAgdGhpcy51cGxvYWRMYWJlbC5pbm5lckhUTUwgPSAnVGFwIHRvIHVwbG9hZCc7XG4gICAgdGhpcy51cGxvYWRJY29uQ29udGFpbmVyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlucHV0RmlsZS5jbGljaygpO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXRUZXh0TGFiZWwuaW5uZXJIVE1MID0gJ09yLCB1cGxvYWQgYSBZb3V0dWJlIG9yIFZpbWVvIHZpZGVvJ1xuICAgIHRoaXMuaW5wdXRUZXh0SWNvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNSAyMFwiPjxnIGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxwYXRoIGQ9XCJNNi4yNSAwQzQuOTE1IDAgMy45LS4wMDQgMy4wNi4wOTIgMi4yMjIuMTg4IDEuNDg1LjM5Ny45MzkuOTUyYy0uNTQ1LjU1NC0uNzUgMS4zMDUtLjg0NiAyLjE2Qy0uMDAyIDMuOTY5IDAgNS4wMDMgMCA2LjM2NXY3LjI3MmMwIDEuMzYtLjAwNCAyLjM5My4wOSAzLjI0OC4wOTUuODU1LjMgMS42MDYuODQ1IDIuMTYuNTQ0LjU1NiAxLjI4Mi43NjYgMi4xMjIuODYyLjg0LjA5NyAxLjg1Ni4wOTQgMy4xOTMuMDk0aDEyLjVjMS4zMzYgMCAyLjM1LjAwNCAzLjE5LS4wOTIuODQtLjA5NiAxLjU3Ny0uMzA1IDIuMTIyLS44Ni41NDUtLjU1NC43NS0xLjMwNS44NDYtMi4xNi4wOTUtLjg1Ni4wOTItMS44OS4wOTItMy4yNTJWNi4zNjRjMC0xLjM2LjAwNC0yLjM5My0uMDktMy4yNDgtLjA5NS0uODU1LS4zLTEuNjA1LS44NDUtMi4xNkMyMy41MjEuNCAyMi43ODMuMTkgMjEuOTQzLjA5MyAyMS4xMDMtLjAwMiAyMC4wODcgMCAxOC43NSAwSDYuMjV6bTAgMS44MThoMTIuNWMxLjMzNiAwIDIuMzI3LjAwNSAyLjk5My4wODIuNjY1LjA3Ni45MzQuMjEgMS4wNi4zMzkuMTI2LjEyOS4yNTYuNDAyLjMzMSAxLjA4LjA3NS42NzcuMDggMS42ODUuMDggMy4wNDV2Ny4yNzJjMCAxLjM2MS0uMDA1IDIuMzctLjA4IDMuMDQ3LS4wNzUuNjc4LS4yMDcuOTUxLS4zMzMgMS4wOC0uMTI2LjEyOC0uMzk0LjI2MS0xLjA2LjMzNy0uNjY2LjA3Ni0xLjY1Ni4wODItMi45OS4wODJINi4yNWMtMS4zMzcgMC0yLjMyNy0uMDA1LTIuOTkzLS4wODItLjY2Ni0uMDc2LS45MzQtLjIxLTEuMDYtLjMzOS0uMTI3LS4xMjktLjI1Ny0uNDAyLS4zMzItMS4wOC0uMDc1LS42NzctLjA4LTEuNjg1LS4wOC0zLjA0NVY2LjM2NGMwLTEuMzYxLjAwNS0yLjM3LjA4LTMuMDQ3LjA3NS0uNjc4LjIwNy0uOTUxLjMzMy0xLjA4LjEyNi0uMTI4LjM5NS0uMjYxIDEuMDYtLjMzNy42NjYtLjA3NiAxLjY1Ni0uMDgyIDIuOTkxLS4wODJ6XCIvPjxwYXRoIGQ9XCJNOC43NDQgNC4xOTJhMS4zNjkgMS4zNjkgMCAwIDAtLjcwOCAxLjIwMnY5LjIxMmMwIC41LjI3MS45NjUuNzA4IDEuMjAyLjQzNC4yMzYuOTY1LjIxIDEuMzc0LS4wNjdsNi43ODQtNC42MDZoLjAwMWExLjM3NiAxLjM3NiAwIDAgMC0uMDAxLTIuMjdjLTEuNDI4LS45NjgtNS4yMTYtMy41NC02Ljc4NC00LjYwNWExLjMyNCAxLjMyNCAwIDAgMC0xLjM3NC0uMDY4em0xLjA3OCAyLjA1YzEuNjEgMS4wOTQgNC4wNzggMi43NyA1LjUzNSAzLjc1OGwtNS41MzUgMy43NTdWNi4yNDN6XCIvPjwvZz48L3N2Zz4nO1xuICAgIHRoaXMuaW5wdXRUZXh0LnR5cGUgPSAndGV4dCc7XG4gICAgdGhpcy5pbnB1dFRleHQudmFsdWUgPSB2aWRlb1VybDtcbiAgICB0aGlzLmlucHV0VGV4dC5vbmNoYW5nZSA9IChldmVudDogRXZlbnQpOiBhbnkgPT4ge1xuICAgICAgdGhpcy52aWRlb1VybCA9IHRoaXMuaW5wdXRUZXh0LnZhbHVlLnRyaW0oKTtcbiAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH07XG5cbiAgICBbJ2RyYWdlbnRlcicsICdkcmFnb3ZlcicsICdkcmFnbGVhdmUnLCAnZHJvcCddLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMucHJldmVudERlZmF1bHRzLCBmYWxzZSlcbiAgICB9KTtcblxuICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKCkgPT4ge1xuICAgICAgICB0aGlzLnVwbG9hZFBhbmVsLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19faW1hZ2VfX3VwbG9hZC1wYW5lbC0tYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIFsnZHJhZ2xlYXZlJywgJ2Ryb3AnXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLnVwbG9hZFBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudXBsb2FkUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdG9yLWJsb2NrX19pbWFnZV9fdXBsb2FkLXBhbmVsLS1hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH0pXG5cbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgICAgbGV0IGR0ID0gZXZlbnQuZGF0YVRyYW5zZmVyO1xuICAgICAgbGV0IGZpbGVzID0gZHQuZmlsZXM7XG5cbiAgICAgIHRoaXMuaGFuZGxlRmlsZXMoZmlsZXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy52aWRlb0VsZW0uY29udHJvbHMgPSB0cnVlO1xuICAgIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICB0aGlzLnVwbG9hZEJ1dHRvbi5pbm5lckhUTUwgPSAnVXBsb2FkIHZpZGVvJztcbiAgICB0aGlzLnVwbG9hZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4geyB0aGlzLmlucHV0RmlsZS5jbGljaygpIH1cblxuICAgIHRoaXMuaW5wdXRGaWxlLnR5cGUgPSAnZmlsZSc7XG4gICAgdGhpcy5pbnB1dEZpbGUub25jaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KTogYW55ID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICAgIHRoaXMuaGFuZGxlRmlsZXModGFyZ2V0LmZpbGVzKTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdHMoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBpc0FkdmFuY2VkVXBsb2FkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoJ2RyYWdnYWJsZScgaW4gdGhpcy51cGxvYWRQYW5lbCkgfHwgKCdvbmRyYWdzdGFydCcgaW4gdGhpcy51cGxvYWRQYW5lbCAmJiAnb25kcm9wJyBpbiB0aGlzLnVwbG9hZFBhbmVsKTtcbiAgfVxuXG4gIHN0YXJ0TG9hZGluZygpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmdJY29uLmlubmVySFRNTCA9ICdVcGxvYWRpbmcgdmlkZW8uLi4nXG4gICAgdGhpcy5sb2FkaW5nSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIH1cblxuICBzdG9wTG9hZGluZygpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmdJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdFlvdXR1YmVJZCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHJlZ0V4cCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj18XFw/dj0pKFteI1xcJlxcP10qKS4qLztcbiAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsyXSA6IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdFZpbWVvSWQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCByZWdFeHAgPSAvXi4rdmltZW8uY29tXFwvKC4qXFwvKT8oW14jXFw/XSopLztcbiAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsyXSB8fCBtYXRjaFsxXSA6IG51bGw7XG4gIH1cblxuICB1cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZpZGVvVXJsKSB7XG4gICAgICBpZiAodGhpcy52aWRlb1VybC5pbmNsdWRlcygnY2xvdWRpbmFyeScpKSB7XG4gICAgICAgIHRoaXMudmlkZW9FbGVtLnNyYyA9IHRoaXMudmlkZW9Vcmw7XG4gICAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnVwbG9hZFBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudmlkZW9VcmwuaW5jbHVkZXMoJ3lvdXR1YmUnKSkge1xuICAgICAgICBsZXQgeW91dHViZUlkID0gVmlkZW9CbG9jay5leHRyYWN0WW91dHViZUlkKHRoaXMudmlkZW9VcmwpO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLnNyYz1gaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt5b3V0dWJlSWR9P3JlbD0wYDtcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS53aWR0aD1cIjU2MFwiO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLmhlaWdodD1cIjMxNVwiO1xuXG4gICAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy52aWRlb0VsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZGVvVXJsLmluY2x1ZGVzKCd2aW1lbycpKSB7XG4gICAgICAgIGxldCB2aW1lb0lkID0gVmlkZW9CbG9jay5leHRyYWN0VmltZW9JZCh0aGlzLnZpZGVvVXJsKTtcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS5zcmM9YGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3ZpbWVvSWR9P2NvbG9yPWVjNzA3MCZwb3J0cmFpdD0wYDtcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS53aWR0aD1cIjY0MFwiO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLmhlaWdodD1cIjI0MFwiO1xuXG4gICAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy52aWRlb0VsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZGVvUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7fVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd1ZpZGVvQmxvY2sgPSB7XG4gICAgICB0eXBlOiBUWVBFLFxuICAgICAgdXJsOiB0aGlzLnZpZGVvVXJsLFxuICAgIH07XG4gICAgcmV0dXJuIHJhdztcbiAgfVxuXG4gIGhhbmRsZUZpbGVzKGZpbGVzOiBGaWxlTGlzdCk6dm9pZCB7XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAvLyBpbiBJRSAxMSwgdGhlIGNoYW5nZSBldmVudCBpcyBmaXJlZCB3aGVuIHdlIHByb2dyYW1tYXRpY2FsbHkgc2V0IGAuanMtZmlsZUlucHV0YCdzIHZhbHVlIHRvIGVtcHR5IHN0cmluZy5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXJ0TG9hZGluZygpO1xuXG4gICAgbGV0IHByb2dyZXNzQ2FsbGJhY2sgPSAobG9hZGVkOiBudW1iZXIsIHRvdGFsOiBudW1iZXIsIGxhYmVsOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdJY29uLmlubmVySFRNTCA9IGxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSAodG90YWwpID8gKGxvYWRlZCAqIDEwMC4wIC8gdG90YWwpIDogMDtcbiAgICAgICAgdGhpcy5sb2FkaW5nSWNvbi5pbm5lckhUTUwgPSBgVXBsb2FkaW5nIHZpZGVvICgke3BlcmNlbnRhZ2UudG9GaXhlZCgxKX0lKS4uLmA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHN1Y2Nlc3NDYWxsYmFjayA9ICh2aWRlb1VybDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgICB0aGlzLnZpZGVvVXJsID0gdmlkZW9Vcmw7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9O1xuXG4gICAgbGV0IGZhaWxDYWxsYmFjayA9IChlcnJvcjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgfTtcblxuICAgIHRoaXMuZWRpdG9yLm9wdGlvbnMudXBsb2FkVmlkZW8oZmlsZXNbMF0sIHByb2dyZXNzQ2FsbGJhY2ssIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbENhbGxiYWNrKTtcbiAgICB0aGlzLmlucHV0RmlsZS52YWx1ZSA9ICcnO1xuICAgIHRoaXMuaW5wdXRUZXh0LnZhbHVlID0gJyc7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHtCbG9ja30gZnJvbSAnLi9ibG9jay9ibG9jayc7XG5pbXBvcnQge0ltYWdlQmxvY2t9IGZyb20gJy4vYmxvY2svaW1hZ2UtYmxvY2snO1xuaW1wb3J0IHtRdW90ZUJsb2NrfSBmcm9tICcuL2Jsb2NrL3F1b3RlLWJsb2NrJztcbmltcG9ydCB7SGVhZGVyQmxvY2t9IGZyb20gJy4vYmxvY2svaGVhZGVyLWJsb2NrJztcbmltcG9ydCB7VGV4dEJsb2NrfSBmcm9tICcuL2Jsb2NrL3RleHQtYmxvY2snO1xuaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4vZWRpdG9yJztcbmltcG9ydCB7VmlkZW9CbG9ja30gZnJvbSBcIi4vYmxvY2svdmlkZW8tYmxvY2tcIjtcblxuZXhwb3J0IGNsYXNzIENvbnRyb2wge1xuICBlbGVtOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXNoYm9hcmQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV4cGFuZEhhbmRsZTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcXVvdGVCdXR0b246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckJ1dHRvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGV4dEJ1dHRvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VCdXR0b246IEhUTUxEaXZFbGVtZW50O1xuICB2aWRlb0J1dHRvbjogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgYmxvY2s6IEJsb2NrKSB7XG5cbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2wnKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy5leHBhbmRIYW5kbGUpO1xuICAgIHRoaXMuZXhwYW5kSGFuZGxlLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19leHBhbmQtaGFuZGxlJywgJ2pzLWV4cGFuZC1oYW5kbGUnKVxuXG4gICAgbGV0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZXhwYW5kSGFuZGxlLmFwcGVuZENoaWxkKGV4cGFuZEJ1dHRvbik7XG4gICAgZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19leHBhbmQtaGFuZGxlX19idXR0b24nKVxuICAgIGV4cGFuZEJ1dHRvbi5pbm5lckhUTUwgPSAnKyc7XG4gICAgdGhpcy5leHBhbmRIYW5kbGUub25jbGljayA9ICgpID0+IHsgdGhpcy5leHBhbmREYXNoYm9hcmQoKTsgfTtcblxuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmRhc2hib2FyZCk7XG4gICAgdGhpcy5kYXNoYm9hcmQuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2Rhc2hib2FyZCcpXG5cbiAgICB0aGlzLmRhc2hib2FyZC5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlckJ1dHRvbik7XG4gICAgdGhpcy5oZWFkZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2Rhc2hib2FyZF9fYnV0dG9uJywgJ2pzLWhlYWRlci1idXR0b24nKTtcbiAgICB0aGlzLmhlYWRlckJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAyMiAxNFwiPjx0ZXh0IGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGZvbnQtZmFtaWx5PVwiU291cmNlU2Fuc1Byby1Cb2xkLCBTb3VyY2UgU2FucyBQcm9cIiBmb250LXNpemU9XCIyMFwiIGZvbnQtd2VpZ2h0PVwiYm9sZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDggLTMzKVwiPjx0c3BhbiB4PVwiNDYuOThcIiB5PVwiNDdcIj5IMTwvdHNwYW4+PC90ZXh0Pjwvc3ZnPjxwPkhlYWRlciBUZXh0PC9wPic7XG4gICAgdGhpcy5oZWFkZXJCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGVkaXRvci5hZGQobmV3IEhlYWRlckJsb2NrKGVkaXRvciwgJycpLCB0aGlzLmJsb2NrKTtcbiAgICAgIHRoaXMuY29sbGFwc2VBbGwoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kYXNoYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy5xdW90ZUJ1dHRvbik7XG4gICAgdGhpcy5xdW90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZGFzaGJvYXJkX19idXR0b24nLCAnanMtcXVvdGUtYnV0dG9uJyk7XG4gICAgdGhpcy5xdW90ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE1XCIgdmlld0JveD1cIjAgMCAxOCAxNVwiPjxwYXRoIGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNi44ODEgMTQuMTk1SC41MTFWOS42NGMwLTEuODQzLjE2My0zLjI5OC40ODgtNC4zNjMuMzI1LTEuMDY1LjkyNi0yLjAyMSAxLjgwMi0yLjg2N0MzLjY3NyAxLjU2MiA0Ljc5Ni44OTggNi4xNTYuNDE0bDEuMjQ2IDIuNjNjLTEuMjY5LjQyMi0yLjE4IDEuMDEyLTIuNzMxIDEuNzY3LS41NTIuNzU2LS44NDIgMS43Ni0uODczIDMuMDE1aDMuMDgzdjYuMzd6bTEwLjYzIDBoLTYuMzY5VjkuNjRjMC0xLjg1OC4xNjMtMy4zMTcuNDg4LTQuMzc0LjMyNS0xLjA1OC45MjktMi4wMSAxLjgxMy0yLjg1Ni44ODQtLjg0NyAxLjk5OC0xLjUxMSAzLjM0My0xLjk5NWwxLjI0NyAyLjYzYy0xLjI3LjQyMi0yLjE4IDEuMDEyLTIuNzMxIDEuNzY3LS41NTIuNzU2LS44NDMgMS43Ni0uODczIDMuMDE1aDMuMDgzdjYuMzd6XCIvPjwvc3ZnPjxwPlF1b3RlPHA+JztcbiAgICB0aGlzLnF1b3RlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBlZGl0b3IuYWRkKG5ldyBRdW90ZUJsb2NrKGVkaXRvciwgJycpLCB0aGlzLmJsb2NrKTtcbiAgICAgIHRoaXMuY29sbGFwc2VBbGwoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kYXNoYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy50ZXh0QnV0dG9uKTtcbiAgICB0aGlzLnRleHRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2Rhc2hib2FyZF9fYnV0dG9uJywgJ2pzLXRleHQtYnV0dG9uJyk7XG4gICAgdGhpcy50ZXh0QnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDIwIDE2XCI+PHRleHQgZmlsbD1cIiM2NjZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZm9udC1mYW1pbHk9XCJTb3VyY2VTYW5zUHJvLVJlZ3VsYXIsIFNvdXJjZSBTYW5zIFByb1wiIGZvbnQtc2l6ZT1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNDYgLTMyKVwiPiA8dHNwYW4geD1cIjE0NC41N1wiIHk9XCI0N1wiPkJkPC90c3Bhbj4gPC90ZXh0Pjwvc3ZnPjxwPkJvZHkgVGV4dDwvcD4nO1xuICAgIHRoaXMudGV4dEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZWRpdG9yLmFkZChuZXcgVGV4dEJsb2NrKGVkaXRvciwgJycpLCB0aGlzLmJsb2NrKTtcbiAgICAgIHRoaXMuY29sbGFwc2VBbGwoKTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuZWRpdG9yLm9wdGlvbnMudXBsb2FkSW1hZ2UpIHtcbiAgICAgIHRoaXMuaW1hZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZGFzaGJvYXJkLmFwcGVuZENoaWxkKHRoaXMuaW1hZ2VCdXR0b24pO1xuXG4gICAgICB0aGlzLmltYWdlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19kYXNoYm9hcmRfX2J1dHRvbicsICdqcy1pbWFnZS1idXR0b24nKTtcbiAgICAgIHRoaXMuaW1hZ2VCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjUgMjBcIj48cGF0aCBmaWxsPVwiIzY2NlwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBkPVwiTTEuOTAyIDBDLjg2MiAwIDAgLjkwNyAwIDJ2MTZjMCAxLjA5My44NjIgMiAxLjkwMiAyaDIxLjE5NmMxLjA0IDAgMS45MDItLjkwNyAxLjkwMi0yVjJjMC0xLjA5My0uODYyLTItMS45MDItMkgxLjkwMnptMCAxLjcxNGgyMS4xOTZjLjE2NCAwIC4yNzIuMTEzLjI3Mi4yODZ2MTEuMzU3bC00LjExLTMuNDU1YS44MDUuODA1IDAgMCAwLS45NjktLjA0NWwtMy44NTUgMi43ODYtNS4yMy00LjQ1NUEuNzk4Ljc5OCAwIDAgMCA4LjYwMSA4YS43OTYuNzk2IDAgMCAwLS4zNzMuMTUyTDEuNjMgMTIuOTM3VjJjMC0uMTczLjEwOC0uMjg2LjI3Mi0uMjg2ek0xNC40MDIgNGMtMS4zNCAwLTIuNDQ1IDEuMTYxLTIuNDQ1IDIuNTcxIDAgMS40MSAxLjEwNCAyLjU3MiAyLjQ0NSAyLjU3MiAxLjM0MSAwIDIuNDQ2LTEuMTYyIDIuNDQ2LTIuNTcyIDAtMS40MS0xLjEwNS0yLjU3MS0yLjQ0Ni0yLjU3MXptMCAxLjcxNGMuNDYgMCAuODE1LjM3NC44MTUuODU3IDAgLjQ4NC0uMzU1Ljg1OC0uODE1Ljg1OC0uNDYgMC0uODE1LS4zNzQtLjgxNS0uODU4IDAtLjQ4My4zNTUtLjg1Ny44MTUtLjg1N3pNOC42NjIgOS45M2w1LjIzIDQuNDQ2YS44MDUuODA1IDAgMCAwIC45NjkuMDQ1bDMuODQ3LTIuNzg2IDQuNjYyIDMuOTJWMThjMCAuMTczLS4xMDguMjg2LS4yNzIuMjg2SDEuOTAyYy0uMTY0IDAtLjI3Mi0uMTEzLS4yNzItLjI4NnYtMi45NzNsNy4wMzItNS4wOTh6XCIvPjwvc3ZnPjxwPkltYWdlPC9wPic7XG4gICAgICB0aGlzLmltYWdlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGVkaXRvci5hZGQobmV3IEltYWdlQmxvY2soZWRpdG9yLCAnJyksIHRoaXMuYmxvY2spO1xuICAgICAgICB0aGlzLmNvbGxhcHNlQWxsKCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVkaXRvci5vcHRpb25zLnVwbG9hZFZpZGVvKSB7XG4gICAgICB0aGlzLnZpZGVvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmRhc2hib2FyZC5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvQnV0dG9uKTtcblxuICAgICAgdGhpcy52aWRlb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZGFzaGJvYXJkX19idXR0b24nLCAnanMtdmlkZW8tYnV0dG9uJylcbiAgICAgIHRoaXMudmlkZW9CdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjUgMjBcIj48ZyBmaWxsPVwiIzY2NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cGF0aCBkPVwiTTYuMjUgMEM0LjkxNSAwIDMuOS0uMDA0IDMuMDYuMDkyIDIuMjIyLjE4OCAxLjQ4NS4zOTcuOTM5Ljk1MmMtLjU0NS41NTQtLjc1IDEuMzA1LS44NDYgMi4xNkMtLjAwMiAzLjk2OSAwIDUuMDAzIDAgNi4zNjV2Ny4yNzJjMCAxLjM2LS4wMDQgMi4zOTMuMDkgMy4yNDguMDk1Ljg1NS4zIDEuNjA2Ljg0NSAyLjE2LjU0NC41NTYgMS4yODIuNzY2IDIuMTIyLjg2Mi44NC4wOTcgMS44NTYuMDk0IDMuMTkzLjA5NGgxMi41YzEuMzM2IDAgMi4zNS4wMDQgMy4xOS0uMDkyLjg0LS4wOTYgMS41NzctLjMwNSAyLjEyMi0uODYuNTQ1LS41NTQuNzUtMS4zMDUuODQ2LTIuMTYuMDk1LS44NTYuMDkyLTEuODkuMDkyLTMuMjUyVjYuMzY0YzAtMS4zNi4wMDQtMi4zOTMtLjA5LTMuMjQ4LS4wOTUtLjg1NS0uMy0xLjYwNS0uODQ1LTIuMTZDMjMuNTIxLjQgMjIuNzgzLjE5IDIxLjk0My4wOTMgMjEuMTAzLS4wMDIgMjAuMDg3IDAgMTguNzUgMEg2LjI1em0wIDEuODE4aDEyLjVjMS4zMzYgMCAyLjMyNy4wMDUgMi45OTMuMDgyLjY2NS4wNzYuOTM0LjIxIDEuMDYuMzM5LjEyNi4xMjkuMjU2LjQwMi4zMzEgMS4wOC4wNzUuNjc3LjA4IDEuNjg1LjA4IDMuMDQ1djcuMjcyYzAgMS4zNjEtLjAwNSAyLjM3LS4wOCAzLjA0Ny0uMDc1LjY3OC0uMjA3Ljk1MS0uMzMzIDEuMDgtLjEyNi4xMjgtLjM5NC4yNjEtMS4wNi4zMzctLjY2Ni4wNzYtMS42NTYuMDgyLTIuOTkuMDgySDYuMjVjLTEuMzM3IDAtMi4zMjctLjAwNS0yLjk5My0uMDgyLS42NjYtLjA3Ni0uOTM0LS4yMS0xLjA2LS4zMzktLjEyNy0uMTI5LS4yNTctLjQwMi0uMzMyLTEuMDgtLjA3NS0uNjc3LS4wOC0xLjY4NS0uMDgtMy4wNDVWNi4zNjRjMC0xLjM2MS4wMDUtMi4zNy4wOC0zLjA0Ny4wNzUtLjY3OC4yMDctLjk1MS4zMzMtMS4wOC4xMjYtLjEyOC4zOTUtLjI2MSAxLjA2LS4zMzcuNjY2LS4wNzYgMS42NTYtLjA4MiAyLjk5MS0uMDgyelwiLz48cGF0aCBkPVwiTTguNzQ0IDQuMTkyYTEuMzY5IDEuMzY5IDAgMCAwLS43MDggMS4yMDJ2OS4yMTJjMCAuNS4yNzEuOTY1LjcwOCAxLjIwMi40MzQuMjM2Ljk2NS4yMSAxLjM3NC0uMDY3bDYuNzg0LTQuNjA2aC4wMDFhMS4zNzYgMS4zNzYgMCAwIDAtLjAwMS0yLjI3Yy0xLjQyOC0uOTY4LTUuMjE2LTMuNTQtNi43ODQtNC42MDVhMS4zMjQgMS4zMjQgMCAwIDAtMS4zNzQtLjA2OHptMS4wNzggMi4wNWMxLjYxIDEuMDk0IDQuMDc4IDIuNzcgNS41MzUgMy43NThsLTUuNTM1IDMuNzU3VjYuMjQzelwiLz48L2c+PC9zdmc+PHA+VmlkZW88L3A+JztcbiAgICAgIHRoaXMudmlkZW9CdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZWRpdG9yLmFkZChuZXcgVmlkZW9CbG9jayhlZGl0b3IsICcnKSwgdGhpcy5ibG9jayk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGNvbGxhcHNlRGFzaGJvYXJkKCk6IHZvaWQge1xuICAgIHRoaXMuZGFzaGJvYXJkLnN0eWxlLm1heEhlaWdodCA9ICcwJztcbiAgfVxuXG4gIGV4cGFuZERhc2hib2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbGxhcHNlQWxsKCk7XG4gICAgdGhpcy5kYXNoYm9hcmQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5kYXNoYm9hcmQuc2Nyb2xsSGVpZ2h0ICsgMzAgKyBcInB4XCI7XG4gIH1cblxuICBjb2xsYXBzZUFsbCgpIHtcbiAgICBmb3IgKGxldCBpPTA7aSA8IHRoaXMuZWRpdG9yLmJsb2Nrcy5sZW5ndGg7aSsrKSB7XG4gICAgICB0aGlzLmVkaXRvci5ibG9ja3NbaV0uY29udHJvbC5jb2xsYXBzZURhc2hib2FyZCgpO1xuICAgIH1cbiAgICB0aGlzLmVkaXRvci5sYXN0Q29udHJvbC5jb2xsYXBzZURhc2hib2FyZCgpO1xuICB9XG59IiwiaW1wb3J0IHtDb250cm9sfSBmcm9tICcuL2NvbnRyb2wnO1xuaW1wb3J0IHtCbG9jaywgQmxvY2tSZWFkZXIsIFJhd0Jsb2NrfSBmcm9tICcuL2Jsb2NrL2Jsb2NrJztcbmltcG9ydCB7SW1hZ2VCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jay9pbWFnZS1ibG9jayc7XG5pbXBvcnQge1F1b3RlQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2svcXVvdGUtYmxvY2snO1xuaW1wb3J0IHtIZWFkZXJCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jay9oZWFkZXItYmxvY2snO1xuaW1wb3J0IHtUZXh0QmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2svdGV4dC1ibG9jayc7XG5pbXBvcnQge1ZpZGVvQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2svdmlkZW8tYmxvY2snO1xuXG5jb25zdCBCTE9DS1M6IEFycmF5PEJsb2NrUmVhZGVyPiA9IFtcbiAgbmV3IFRleHRCbG9ja1JlYWRlcigpLFxuICBuZXcgSGVhZGVyQmxvY2tSZWFkZXIoKSxcbiAgbmV3IFF1b3RlQmxvY2tSZWFkZXIoKSxcbiAgbmV3IEltYWdlQmxvY2tSZWFkZXIoKSxcbiAgbmV3IFZpZGVvQmxvY2tSZWFkZXIoKSxcbl07XG5cbmZ1bmN0aW9uIGNvbnZlcnRSYXdDb250ZW50KHJhd0NvbnRlbnQ6IEFycmF5PFJhd0Jsb2NrPiwgZWRpdG9yOiBFZGl0b3IpOiBBcnJheTxCbG9jaz4ge1xuICBsZXQgYmxvY2tzOiBBcnJheTxCbG9jaz4gPSBbXTtcblxuICBmb3IgKGxldCByYXdCbG9jayBvZiByYXdDb250ZW50KSB7XG4gICAgbGV0IHByb2Nlc3NlZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGJsb2NrIG9mIEJMT0NLUykge1xuICAgICAgaWYgKGJsb2NrLmNhblBhcnNlKHJhd0Jsb2NrKSkge1xuICAgICAgICBwcm9jZXNzZWQgPSB0cnVlO1xuICAgICAgICBibG9ja3MucHVzaChibG9jay5wYXJzZShyYXdCbG9jaywgZWRpdG9yKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcHJvY2Vzc2VkKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFVucmVjb2duaXplZCBibG9jayB0eXBlOiAnJHtyYXdCbG9jay50eXBlfScuIElnbm9yZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYmxvY2tzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRvck9wdGlvbnMge1xuICBjb250ZW50OiBBcnJheTxSYXdCbG9jaz47XG4gIHVwbG9hZEltYWdlOiAoZmlsZTogRmlsZSwgc3VjY2Vzc0NhbGxiYWNrOiAodXJsOiBzdHJpbmcpID0+IHZvaWQsIGZhaWx1cmVDYWxsYmFjazogKGVycm9yOiBzdHJpbmcpID0+IHZvaWQpID0+IHZvaWQ7XG4gIHVwbG9hZFZpZGVvOiAoZmlsZTogRmlsZSwgcHJvZ3Jlc3NDYWxsYmFjazogKGxvYWRlZDogTnVtYmVyLCB0b3RhbDogTnVtYmVyLCBsYWJlbDogU3RyaW5nKSA9PiB2b2lkLCBzdWNjZXNzQ2FsbGJhY2s6ICh0aHVtYm5haWxVcmw6IHN0cmluZywgdmlkZW9Vcmw6IHN0cmluZykgPT4gdm9pZCwgZmFpbHVyZUNhbGxiYWNrOiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEVkaXRvciB7XG4gIGJsb2NrczogQXJyYXk8QmxvY2s+O1xuICBsYXN0Q29udHJvbDogQ29udHJvbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbTogSFRNTERpdkVsZW1lbnQsXG4gICAgcHVibGljIG9wdGlvbnM6IEVkaXRvck9wdGlvbnNcbiAgKSB7XG4gICAgdGhpcy5ibG9ja3MgPSBjb252ZXJ0UmF3Q29udGVudCh0aGlzLm9wdGlvbnMuY29udGVudCwgdGhpcyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGFkZChibG9jazogQmxvY2ssIGJlZm9yZUJsb2NrOiBCbG9jaykge1xuICAgIGlmIChiZWZvcmVCbG9jaykge1xuICAgICAgZm9yIChsZXQgaT0wO2kgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGlmIChiZWZvcmVCbG9jayA9PSB0aGlzLmJsb2Nrc1tpXSkge1xuICAgICAgICAgIHRoaXMuYmxvY2tzLnNwbGljZShpLCAwLCBibG9jayk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZWxlbS5pbnNlcnRCZWZvcmUoYmxvY2suZWxlbSwgYmVmb3JlQmxvY2suZWxlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgdGhpcy5lbGVtLmluc2VydEJlZm9yZShibG9jay5lbGVtLCB0aGlzLmxhc3RDb250cm9sLmVsZW0pO1xuICAgIH1cblxuICAgIGJsb2NrLmZvY3VzKCk7XG4gICAgYmxvY2suY29udHJvbC5leHBhbmREYXNoYm9hcmQoKTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKTogQXJyYXk8UmF3QmxvY2s+IHtcbiAgICBsZXQgcmF3Q29udGVudDogQXJyYXk8UmF3QmxvY2s+ID0gW107XG4gICAgZm9yIChsZXQgYmxvY2sgb2YgdGhpcy5ibG9ja3MpIHtcbiAgICAgIHJhd0NvbnRlbnQucHVzaChibG9jay5nZXRSYXdDb250ZW50KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmF3Q29udGVudDtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCkge1xuICAgIGZvciAobGV0IGJsb2NrIG9mIHRoaXMuYmxvY2tzKSB7XG4gICAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQoYmxvY2suZWxlbSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMubGFzdENvbnRyb2wgPSBuZXcgQ29udHJvbCh0aGlzLCBudWxsKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy5sYXN0Q29udHJvbC5lbGVtKTtcbiAgICB0aGlzLmxhc3RDb250cm9sLmV4cGFuZERhc2hib2FyZCgpO1xuICB9XG59XG4iLCJpbXBvcnQge0VkaXRvciwgRWRpdG9yT3B0aW9uc30gZnJvbSAnLi9lZGl0b3IvZWRpdG9yJ1xuXG4oPGFueT53aW5kb3cpLmluc3RhbGxFZGl0b3IgPSAoZWxlbTogSFRNTERpdkVsZW1lbnQsIG9wdGlvbnM6IEVkaXRvck9wdGlvbnMgPSAoPEVkaXRvck9wdGlvbnM+e30pKSA9PiB7XG4gIHJldHVybiBuZXcgRWRpdG9yKGVsZW0sIG9wdGlvbnMpO1xufTsiXSwic291cmNlUm9vdCI6IiJ9