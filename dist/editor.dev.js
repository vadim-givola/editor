(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["editor"] = factory();
	else
		root["editor"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/editor/block/block.ts":
/*!**************************************!*\
  !*** ./src/ts/editor/block/block.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Block: () => (/* binding */ Block)
/* harmony export */ });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../control */ "./src/ts/editor/control.ts");

var Block = /** @class */ (function () {
    function Block(editor) {
        var _this = this;
        this.editor = editor;
        this.elem = document.createElement('div');
        this.container = document.createElement('div');
        this.deleteButton = document.createElement('span');
        this.deleteIcon = document.createElement('div');
        this.control = new _control__WEBPACK_IMPORTED_MODULE_0__.Control(editor, this);
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
        this.deleteButton.innerHTML = '<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="21"  viewBox="0 0 448 512">' +
            '<path fill="currentColor" d="M192 188v216c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V188c0-6.627 5.373-12 12-12h24c6.627 ' +
            '0 12 5.373 12 12zm100-12h-24c-6.627 0-12 5.373-12 12v216c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V188c0-6.627-5.373-12-12-12zm132-96c13.255 ' +
            '0 24 10.745 24 24v12c0 6.627-5.373 12-12 12h-20v336c0 26.51-21.49 48-48 48H80c-26.51 0-48-21.49-48-48V128H12c-6.627 0-12-5.373-12-12v-12c0-13.255 10.745-24 ' +
            '24-24h74.411l34.018-56.696A48 48 0 0 1 173.589 0h100.823a48 48 0 0 1 41.16 23.304L349.589 80H424zm-269.611 0h139.223L276.16 50.913A6 6 0 0 0 271.015 48h-94.028a6 ' +
            '6 0 0 0-5.145 2.913L154.389 80zM368 128H80v330a6 6 0 0 0 6 6h276a6 6 0 0 0 6-6V128z">' +
            '</path></svg>';
        this.deleteButton.appendChild(this.deleteIcon);
        this.deleteButton.onclick = function () {
            var answer = confirm("You want to delete this block?");
            if (answer == true)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderBlock: () => (/* binding */ HeaderBlock),
/* harmony export */   HeaderBlockReader: () => (/* binding */ HeaderBlockReader)
/* harmony export */ });
/* harmony import */ var _text_based_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-based-block */ "./src/ts/editor/block/text-based-block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
}(_text_based_block__WEBPACK_IMPORTED_MODULE_0__.TextBasedBlock));



/***/ }),

/***/ "./src/ts/editor/block/image-block.ts":
/*!********************************************!*\
  !*** ./src/ts/editor/block/image-block.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageBlock: () => (/* binding */ ImageBlock),
/* harmony export */   ImageBlockReader: () => (/* binding */ ImageBlockReader)
/* harmony export */ });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/ts/editor/block/block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        _this.loadingIcon.innerHTML = '<span class="editor-block__image__loading-icon"></span> Uploading image...';
        _this.stopLoading();
        _this.uploadButton.innerHTML = 'Upload image';
        _this.uploadButton.onclick = function () { _this.inputFile.click(); };
        _this.inputFile.type = 'file';
        _this.inputFile.accept = 'image/*';
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
}(_block__WEBPACK_IMPORTED_MODULE_0__.Block));



/***/ }),

/***/ "./src/ts/editor/block/quote-block.ts":
/*!********************************************!*\
  !*** ./src/ts/editor/block/quote-block.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuoteBlock: () => (/* binding */ QuoteBlock),
/* harmony export */   QuoteBlockReader: () => (/* binding */ QuoteBlockReader)
/* harmony export */ });
/* harmony import */ var _text_based_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-based-block */ "./src/ts/editor/block/text-based-block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
}(_text_based_block__WEBPACK_IMPORTED_MODULE_0__.TextBasedBlock));



/***/ }),

/***/ "./src/ts/editor/block/text-based-block.ts":
/*!*************************************************!*\
  !*** ./src/ts/editor/block/text-based-block.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextBasedBlock: () => (/* binding */ TextBasedBlock)
/* harmony export */ });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/ts/editor/block/block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        window.addEventListener("DOMContentLoaded", function () { _this.redraw(); }, false);
        setTimeout(function () { _this.redraw(); }, 1);
    };
    return TextBasedBlock;
}(_block__WEBPACK_IMPORTED_MODULE_0__.Block));



/***/ }),

/***/ "./src/ts/editor/block/text-block.ts":
/*!*******************************************!*\
  !*** ./src/ts/editor/block/text-block.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextBlock: () => (/* binding */ TextBlock),
/* harmony export */   TextBlockReader: () => (/* binding */ TextBlockReader)
/* harmony export */ });
/* harmony import */ var _text_based_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-based-block */ "./src/ts/editor/block/text-based-block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
}(_text_based_block__WEBPACK_IMPORTED_MODULE_0__.TextBasedBlock));



/***/ }),

/***/ "./src/ts/editor/block/video-block.ts":
/*!********************************************!*\
  !*** ./src/ts/editor/block/video-block.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoBlock: () => (/* binding */ VideoBlock),
/* harmony export */   VideoBlockReader: () => (/* binding */ VideoBlockReader)
/* harmony export */ });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/ts/editor/block/block.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        _this.inputTextLabel.innerHTML = 'Paste a Youtube or Vimeo url';
        _this.inputTextIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092 2.222.188 1.485.397.939.952c-.545.554-.75 1.305-.846 2.16C-.002 3.969 0 5.003 0 6.365v7.272c0 1.36-.004 2.393.09 3.248.095.855.3 1.606.845 2.16.544.556 1.282.766 2.122.862.84.097 1.856.094 3.193.094h12.5c1.336 0 2.35.004 3.19-.092.84-.096 1.577-.305 2.122-.86.545-.554.75-1.305.846-2.16.095-.856.092-1.89.092-3.252V6.364c0-1.36.004-2.393-.09-3.248-.095-.855-.3-1.605-.845-2.16C23.521.4 22.783.19 21.943.093 21.103-.002 20.087 0 18.75 0H6.25zm0 1.818h12.5c1.336 0 2.327.005 2.993.082.665.076.934.21 1.06.339.126.129.256.402.331 1.08.075.677.08 1.685.08 3.045v7.272c0 1.361-.005 2.37-.08 3.047-.075.678-.207.951-.333 1.08-.126.128-.394.261-1.06.337-.666.076-1.656.082-2.99.082H6.25c-1.337 0-2.327-.005-2.993-.082-.666-.076-.934-.21-1.06-.339-.127-.129-.257-.402-.332-1.08-.075-.677-.08-1.685-.08-3.045V6.364c0-1.361.005-2.37.08-3.047.075-.678.207-.951.333-1.08.126-.128.395-.261 1.06-.337.666-.076 1.656-.082 2.991-.082z"/><path d="M8.744 4.192a1.369 1.369 0 0 0-.708 1.202v9.212c0 .5.271.965.708 1.202.434.236.965.21 1.374-.067l6.784-4.606h.001a1.376 1.376 0 0 0-.001-2.27c-1.428-.968-5.216-3.54-6.784-4.605a1.324 1.324 0 0 0-1.374-.068zm1.078 2.05c1.61 1.094 4.078 2.77 5.535 3.758l-5.535 3.757V6.243z"/></g></svg>';
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
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=|shorts\/)([^#\&\?]*).*/;
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
                this.videoIframe.src = "https://www.youtube.com/embed/".concat(youtubeId, "?rel=0");
                this.videoIframe.width = "560";
                this.videoIframe.height = "315";
                this.videoPanel.style.display = 'block';
                this.videoElem.style.display = 'none';
                this.uploadPanel.style.display = 'none';
            }
            else if (this.videoUrl.includes('vimeo')) {
                var vimeoId = VideoBlock.extractVimeoId(this.videoUrl);
                this.videoIframe.src = "https://player.vimeo.com/video/".concat(vimeoId, "?color=ec7070&portrait=0");
                this.videoIframe.width = "560";
                this.videoIframe.height = "315";
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
}(_block__WEBPACK_IMPORTED_MODULE_0__.Block));



/***/ }),

/***/ "./src/ts/editor/control.ts":
/*!**********************************!*\
  !*** ./src/ts/editor/control.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* binding */ Control)
/* harmony export */ });
/* harmony import */ var _block_image_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block/image-block */ "./src/ts/editor/block/image-block.ts");
/* harmony import */ var _block_quote_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block/quote-block */ "./src/ts/editor/block/quote-block.ts");
/* harmony import */ var _block_header_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/header-block */ "./src/ts/editor/block/header-block.ts");
/* harmony import */ var _block_text_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block/text-block */ "./src/ts/editor/block/text-block.ts");
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
            editor.add(new _block_header_block__WEBPACK_IMPORTED_MODULE_0__.HeaderBlock(editor, ''), _this.block);
            _this.collapseAll();
        };
        this.dashboard.appendChild(this.quoteButton);
        this.quoteButton.classList.add('editor-control__dashboard__button', 'js-quote-button');
        this.quoteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15"><path fill="#666" fill-rule="evenodd" d="M6.881 14.195H.511V9.64c0-1.843.163-3.298.488-4.363.325-1.065.926-2.021 1.802-2.867C3.677 1.562 4.796.898 6.156.414l1.246 2.63c-1.269.422-2.18 1.012-2.731 1.767-.552.756-.842 1.76-.873 3.015h3.083v6.37zm10.63 0h-6.369V9.64c0-1.858.163-3.317.488-4.374.325-1.058.929-2.01 1.813-2.856.884-.847 1.998-1.511 3.343-1.995l1.247 2.63c-1.27.422-2.18 1.012-2.731 1.767-.552.756-.843 1.76-.873 3.015h3.083v6.37z"/></svg><p>Quote<p>';
        this.quoteButton.onclick = function () {
            editor.add(new _block_quote_block__WEBPACK_IMPORTED_MODULE_1__.QuoteBlock(editor, ''), _this.block);
            _this.collapseAll();
        };
        this.dashboard.appendChild(this.textButton);
        this.textButton.classList.add('editor-control__dashboard__button', 'js-text-button');
        this.textButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><text fill="#666" fill-rule="evenodd" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="20" transform="translate(-146 -32)"> <tspan x="144.57" y="47">Bd</tspan> </text></svg><p>Body Text</p>';
        this.textButton.onclick = function () {
            editor.add(new _block_text_block__WEBPACK_IMPORTED_MODULE_2__.TextBlock(editor, ''), _this.block);
            _this.collapseAll();
        };
        if (this.editor.options.uploadImage) {
            this.imageButton = document.createElement('div');
            this.dashboard.appendChild(this.imageButton);
            this.imageButton.classList.add('editor-control__dashboard__button', 'js-image-button');
            this.imageButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><path fill="#666" fill-rule="nonzero" d="M1.902 0C.862 0 0 .907 0 2v16c0 1.093.862 2 1.902 2h21.196c1.04 0 1.902-.907 1.902-2V2c0-1.093-.862-2-1.902-2H1.902zm0 1.714h21.196c.164 0 .272.113.272.286v11.357l-4.11-3.455a.805.805 0 0 0-.969-.045l-3.855 2.786-5.23-4.455A.798.798 0 0 0 8.601 8a.796.796 0 0 0-.373.152L1.63 12.937V2c0-.173.108-.286.272-.286zM14.402 4c-1.34 0-2.445 1.161-2.445 2.571 0 1.41 1.104 2.572 2.445 2.572 1.341 0 2.446-1.162 2.446-2.572 0-1.41-1.105-2.571-2.446-2.571zm0 1.714c.46 0 .815.374.815.857 0 .484-.355.858-.815.858-.46 0-.815-.374-.815-.858 0-.483.355-.857.815-.857zM8.662 9.93l5.23 4.446a.805.805 0 0 0 .969.045l3.847-2.786 4.662 3.92V18c0 .173-.108.286-.272.286H1.902c-.164 0-.272-.113-.272-.286v-2.973l7.032-5.098z"/></svg><p>Image</p>';
            this.imageButton.onclick = function () {
                editor.add(new _block_image_block__WEBPACK_IMPORTED_MODULE_3__.ImageBlock(editor, ''), _this.block);
                _this.collapseAll();
            };
        }
        this.videoButton = document.createElement('div');
        this.dashboard.appendChild(this.videoButton);
        this.videoButton.classList.add('editor-control__dashboard__button', 'js-video-button');
        this.videoButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092 2.222.188 1.485.397.939.952c-.545.554-.75 1.305-.846 2.16C-.002 3.969 0 5.003 0 6.365v7.272c0 1.36-.004 2.393.09 3.248.095.855.3 1.606.845 2.16.544.556 1.282.766 2.122.862.84.097 1.856.094 3.193.094h12.5c1.336 0 2.35.004 3.19-.092.84-.096 1.577-.305 2.122-.86.545-.554.75-1.305.846-2.16.095-.856.092-1.89.092-3.252V6.364c0-1.36.004-2.393-.09-3.248-.095-.855-.3-1.605-.845-2.16C23.521.4 22.783.19 21.943.093 21.103-.002 20.087 0 18.75 0H6.25zm0 1.818h12.5c1.336 0 2.327.005 2.993.082.665.076.934.21 1.06.339.126.129.256.402.331 1.08.075.677.08 1.685.08 3.045v7.272c0 1.361-.005 2.37-.08 3.047-.075.678-.207.951-.333 1.08-.126.128-.394.261-1.06.337-.666.076-1.656.082-2.99.082H6.25c-1.337 0-2.327-.005-2.993-.082-.666-.076-.934-.21-1.06-.339-.127-.129-.257-.402-.332-1.08-.075-.677-.08-1.685-.08-3.045V6.364c0-1.361.005-2.37.08-3.047.075-.678.207-.951.333-1.08.126-.128.395-.261 1.06-.337.666-.076 1.656-.082 2.991-.082z"/><path d="M8.744 4.192a1.369 1.369 0 0 0-.708 1.202v9.212c0 .5.271.965.708 1.202.434.236.965.21 1.374-.067l6.784-4.606h.001a1.376 1.376 0 0 0-.001-2.27c-1.428-.968-5.216-3.54-6.784-4.605a1.324 1.324 0 0 0-1.374-.068zm1.078 2.05c1.61 1.094 4.078 2.77 5.535 3.758l-5.535 3.757V6.243z"/></g></svg><p>Video</p>';
        this.videoButton.onclick = function () {
            editor.add(new _block_video_block__WEBPACK_IMPORTED_MODULE_4__.VideoBlock(editor, ''), _this.block);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Editor: () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control */ "./src/ts/editor/control.ts");
/* harmony import */ var _block_image_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block/image-block */ "./src/ts/editor/block/image-block.ts");
/* harmony import */ var _block_quote_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block/quote-block */ "./src/ts/editor/block/quote-block.ts");
/* harmony import */ var _block_header_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block/header-block */ "./src/ts/editor/block/header-block.ts");
/* harmony import */ var _block_text_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/text-block */ "./src/ts/editor/block/text-block.ts");
/* harmony import */ var _block_video_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block/video-block */ "./src/ts/editor/block/video-block.ts");






var BLOCKS = [
    new _block_text_block__WEBPACK_IMPORTED_MODULE_0__.TextBlockReader(),
    new _block_header_block__WEBPACK_IMPORTED_MODULE_1__.HeaderBlockReader(),
    new _block_quote_block__WEBPACK_IMPORTED_MODULE_2__.QuoteBlockReader(),
    new _block_image_block__WEBPACK_IMPORTED_MODULE_3__.ImageBlockReader(),
    new _block_video_block__WEBPACK_IMPORTED_MODULE_4__.VideoBlockReader(),
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
            console.warn("Unrecognized block type: '".concat(rawBlock.type, "'. Ignore."));
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
        // Trigger the initial onChange event
        this.triggerOnChange();
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
        this.triggerOnChange();
    };
    Editor.prototype.remove = function (block) {
        for (var i = 0; i < this.blocks.length; i++) {
            if (block == this.blocks[i]) {
                this.blocks.splice(i, 1);
                block.elem.remove();
                break;
            }
        }
        this.triggerOnChange();
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
    Editor.prototype.triggerOnChange = function () {
        if (this.options.onChange) {
            this.options.onChange(this.getContent()); // Call onChange with current content
        }
    };
    Editor.prototype.render = function () {
        for (var _i = 0, _a = this.blocks; _i < _a.length; _i++) {
            var block = _a[_i];
            this.elem.appendChild(block.elem);
        }
        this.lastControl = new _control__WEBPACK_IMPORTED_MODULE_5__.Control(this, null);
        this.elem.appendChild(this.lastControl.elem);
        this.lastControl.expandDashboard();
    };
    return Editor;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Editor: () => (/* reexport safe */ _editor_editor__WEBPACK_IMPORTED_MODULE_0__.Editor)
/* harmony export */ });
/* harmony import */ var _editor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor/editor */ "./src/ts/editor/editor.ts");

window.installEditor = function (elem, options) {
    if (options === void 0) { options = {}; }
    return new _editor_editor__WEBPACK_IMPORTED_MODULE_0__.Editor(elem, options);
};


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL3RzL2VkaXRvci9ibG9jay9ibG9jay50cyIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvdHMvZWRpdG9yL2Jsb2NrL2hlYWRlci1ibG9jay50cyIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvdHMvZWRpdG9yL2Jsb2NrL2ltYWdlLWJsb2NrLnRzIiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9lZGl0b3IvYmxvY2svcXVvdGUtYmxvY2sudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL3RzL2VkaXRvci9ibG9jay90ZXh0LWJhc2VkLWJsb2NrLnRzIiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9lZGl0b3IvYmxvY2svdGV4dC1ibG9jay50cyIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvdHMvZWRpdG9yL2Jsb2NrL3ZpZGVvLWJsb2NrLnRzIiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9lZGl0b3IvY29udHJvbC50cyIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvdHMvZWRpdG9yL2VkaXRvci50cyIsIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWRpdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZWRpdG9yXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImVkaXRvclwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJpbXBvcnQge0NvbnRyb2x9IGZyb20gJy4uL2NvbnRyb2wnO1xuaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmF3QmxvY2sge1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuXG4gIHBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jaywgZWRpdG9yOiBFZGl0b3IpOiBCbG9ja1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmxvY2sge1xuICBlbGVtOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlbGV0ZUJ1dHRvbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBkZWxldGVJY29uOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250cm9sOiBDb250cm9sO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvcikge1xuICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sKGVkaXRvciwgdGhpcyk7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9jaycpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuZWxlbSk7XG4gICAgdGhpcy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB0aGlzLmVkaXRvci5zaG93RGVsZXRlQnV0dG9uKHRoaXMpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fY29udGFpbmVyJyk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVCdXR0b24pO1xuXG4gICAgdGhpcy5kZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19jb250YWluZXJfX2RlbGV0ZS1idXR0b24nKTtcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMVwiICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj4nICtcbiAgICAgICc8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOTIgMTg4djIxNmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC0yNGMtNi42MjcgMC0xMi01LjM3My0xMi0xMlYxODhjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgyNGM2LjYyNyAnICtcbiAgICAgICcwIDEyIDUuMzczIDEyIDEyem0xMDAtMTJoLTI0Yy02LjYyNyAwLTEyIDUuMzczLTEyIDEydjIxNmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyaDI0YzYuNjI3IDAgMTItNS4zNzMgMTItMTJWMTg4YzAtNi42MjctNS4zNzMtMTItMTItMTJ6bTEzMi05NmMxMy4yNTUgJyArXG4gICAgICAnMCAyNCAxMC43NDUgMjQgMjR2MTJjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtMjB2MzM2YzAgMjYuNTEtMjEuNDkgNDgtNDggNDhIODBjLTI2LjUxIDAtNDgtMjEuNDktNDgtNDhWMTI4SDEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0xMmMwLTEzLjI1NSAxMC43NDUtMjQgJyArXG4gICAgICAnMjQtMjRoNzQuNDExbDM0LjAxOC01Ni42OTZBNDggNDggMCAwIDEgMTczLjU4OSAwaDEwMC44MjNhNDggNDggMCAwIDEgNDEuMTYgMjMuMzA0TDM0OS41ODkgODBINDI0em0tMjY5LjYxMSAwaDEzOS4yMjNMMjc2LjE2IDUwLjkxM0E2IDYgMCAwIDAgMjcxLjAxNSA0OGgtOTQuMDI4YTYgJyArXG4gICAgICAnNiAwIDAgMC01LjE0NSAyLjkxM0wxNTQuMzg5IDgwek0zNjggMTI4SDgwdjMzMGE2IDYgMCAwIDAgNiA2aDI3NmE2IDYgMCAwIDAgNi02VjEyOHpcIj4nICtcbiAgICAgICc8L3BhdGg+PC9zdmc+JztcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZCh0aGlzLmRlbGV0ZUljb24pO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBsZXQgYW5zd2VyID0gY29uZmlybShcIllvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGJsb2NrP1wiKTtcbiAgICAgIGlmIChhbnN3ZXIgPT0gdHJ1ZSlcbiAgICAgICAgdGhpcy5lZGl0b3IucmVtb3ZlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlZHJhdygpIHt9XG5cbiAgYWJzdHJhY3QgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9ja1xuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdG9yLnNob3dEZWxldGVCdXR0b24odGhpcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7RWRpdG9yfSBmcm9tICcuLi9lZGl0b3InO1xuaW1wb3J0IHtCbG9jaywgQmxvY2tSZWFkZXIsIFJhd0Jsb2NrfSBmcm9tICcuL2Jsb2NrJ1xuaW1wb3J0IHtUZXh0QmFzZWRCbG9ja30gZnJvbSBcIi4vdGV4dC1iYXNlZC1ibG9ja1wiO1xuXG5jb25zdCBUWVBFOiBzdHJpbmcgPSAnaGVhZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBSYXdIZWFkZXJCbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyQmxvY2tSZWFkZXIgaW1wbGVtZW50cyBCbG9ja1JlYWRlciB7XG4gIGNhblBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jayk6IEJvb2xlYW4ge1xuICAgIHJldHVybiByYXdCbG9jay50eXBlID09IFRZUEU7XG4gIH1cblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2sge1xuICAgIGxldCByYXdIZWFkZXJCbG9jayA9IHJhd0Jsb2NrIGFzIFJhd0hlYWRlckJsb2NrO1xuICAgIHJldHVybiBuZXcgSGVhZGVyQmxvY2soZWRpdG9yLCByYXdIZWFkZXJCbG9jay5jb250ZW50KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyQmxvY2sgZXh0ZW5kcyBUZXh0QmFzZWRCbG9jayB7XG5cbiAgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9jaycsICdlZGl0b3ItYmxvY2tfX3RleHQnKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy50ZXh0YXJlYSk7XG5cbiAgICB0aGlzLnRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fY29udGFpbmVyX19lZGl0b3InLCAnZWRpdG9yLWJsb2NrX19oZWFkZXInKTtcbiAgICB0aGlzLnRleHRhcmVhLnBsYWNlaG9sZGVyID0gJ0hlYWRlcic7XG4gICAgdGhpcy50ZXh0YXJlYS5yb3dzID0gMTtcbiAgICB0aGlzLnRleHRhcmVhLmlubmVySFRNTCA9IHRoaXMuY29udGVudDtcblxuICAgIHRoaXMuZW5hYmxlTmV3TGluZVByZXZlbnRpb24oKTtcbiAgICB0aGlzLmVuYWJsZUF1dG9yZXNpemluZygpO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgc3VwZXIuZm9jdXMoKTtcbiAgICB0aGlzLnRleHRhcmVhLmZvY3VzKCk7XG4gIH1cblxuICBnZXRSYXdDb250ZW50KCk6IFJhd0Jsb2NrIHtcbiAgICBsZXQgcmF3OiBSYXdIZWFkZXJCbG9jayA9IHtcbiAgICAgIHR5cGU6IFRZUEUsXG4gICAgICBjb250ZW50OiB0aGlzLnRleHRhcmVhLnZhbHVlXG4gICAgfTtcbiAgICByZXR1cm4gcmF3O1xuICB9XG59IiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBSYXdCbG9jaywgQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICdpbWFnZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmF3SW1hZ2VCbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUJsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3SW1hZ2VCbG9jayA9IHJhd0Jsb2NrIGFzIFJhd0ltYWdlQmxvY2s7XG4gICAgcmV0dXJuIG5ldyBJbWFnZUJsb2NrKGVkaXRvciwgcmF3SW1hZ2VCbG9jay51cmwpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUJsb2NrIGV4dGVuZHMgQmxvY2sge1xuXG4gIHVwbG9hZFBhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cGxvYWRJY29uOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cGxvYWRMYWJlbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdXBsb2FkQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsb2FkaW5nSWNvbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBpbnB1dEZpbGU6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIGltYWdlUGFuZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltZzogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIHVybDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWRpdG9yKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZScpO1xuICAgIHRoaXMuaW1nLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19faW1hZ2VfX2ltZycpO1xuXG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkUGFuZWwpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmltYWdlUGFuZWwpO1xuXG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0RmlsZSk7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZEJ1dHRvbik7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZEljb24pO1xuICAgIHRoaXMudXBsb2FkUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRMYWJlbCk7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmxvYWRpbmdJY29uKTtcbiAgICB0aGlzLmltYWdlUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy5pbWcpO1xuXG4gICAgdGhpcy51cGxvYWRQYW5lbC5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlX191cGxvYWQtcGFuZWwnKVxuICAgIHRoaXMudXBsb2FkSWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlX191cGxvYWQtcGFuZWxfX2ljb24nKVxuICAgIHRoaXMudXBsb2FkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19faW1hZ2VfX3VwbG9hZC1wYW5lbF9fYnV0dG9uJyk7XG4gICAgdGhpcy5pbnB1dEZpbGUuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZV9fdXBsb2FkLXBhbmVsX19pbnB1dCcpO1xuXG4gICAgdGhpcy51cGxvYWRJY29uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjUzXCIgaGVpZ2h0PVwiNDJcIiB2aWV3Qm94PVwiMCAwIDUzIDQyXCI+XFxuJyArXG4gICAgICAnICAgIDxkZWZzPlxcbicgK1xuICAgICAgJyAgICAgICAgPHBhdGggaWQ9XCJiXCIgZD1cIk0xMyAwdjI5aDMwVjBoMjB2NTNIMFYwaDEzelwiLz5cXG4nICtcbiAgICAgICcgICAgICAgIDxyZWN0IGlkPVwiYVwiIHdpZHRoPVwiNTNcIiBoZWlnaHQ9XCIzNFwiIHg9XCI1XCIgeT1cIjEyXCIgcng9XCIyXCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPG1hc2sgaWQ9XCJkXCIgd2lkdGg9XCI1M1wiIGhlaWdodD1cIjM0XCIgeD1cIjBcIiB5PVwiMFwiIGZpbGw9XCIjZmZmXCI+XFxuJyArXG4gICAgICAnICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2FcIi8+XFxuJyArXG4gICAgICAnICAgICAgICA8L21hc2s+XFxuJyArXG4gICAgICAnICAgIDwvZGVmcz5cXG4nICtcbiAgICAgICcgICAgPGcgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01IC00KVwiPlxcbicgK1xuICAgICAgJyAgICAgICAgPG1hc2sgaWQ9XCJjXCIgZmlsbD1cIiNmZmZcIj5cXG4nICtcbiAgICAgICcgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjYlwiLz5cXG4nICtcbiAgICAgICcgICAgICAgIDwvbWFzaz5cXG4nICtcbiAgICAgICcgICAgICAgIDxnIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBzdHJva2U9XCIjNjY2XCIgc3Ryb2tlLWRhc2hhcnJheT1cIjQsMlwiIHN0cm9rZS13aWR0aD1cIjRcIiBtYXNrPVwidXJsKCNjKVwiPlxcbicgK1xuICAgICAgJyAgICAgICAgICAgIDx1c2UgbWFzaz1cInVybCgjZClcIiB4bGluazpocmVmPVwiI2FcIi8+XFxuJyArXG4gICAgICAnICAgICAgICA8L2c+XFxuJyArXG4gICAgICAnICAgICAgICA8cGF0aCBmaWxsPVwiIzY2NlwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBkPVwiTTE1LjI4MyA0QzE0LjAzNSA0IDEzIDUuMDg4IDEzIDYuNHYxOS4yYzAgMS4zMTIgMS4wMzUgMi40IDIuMjgzIDIuNGgyNS40MzRDNDEuOTY1IDI4IDQzIDI2LjkxMiA0MyAyNS42VjYuNEM0MyA1LjA4OCA0MS45NjUgNCA0MC43MTcgNEgxNS4yODN6bS4wNDIgMmgyNS4zNWMuMTk3IDAgLjMyNS4xMzUuMzI1LjM0NFYyMGwtNC45MTYtNC4xNTVhLjk2Ljk2IDAgMCAwLTEuMTU3LS4wNTRsLTQuNjExIDMuMzUtNi4yNTctNS4zNTdhLjk1Ljk1IDAgMCAwLS43Mi0uMjI2Ljk1Ljk1IDAgMCAwLS40NDguMTgzTDE1IDE5LjQ5NVY2LjM0NGMwLS4yMDkuMTI4LS4zNDQuMzI1LS4zNDR6TTMwIDljLTEuNjQ1IDAtMyAxLjM1NS0zIDNzMS4zNTUgMyAzIDMgMy0xLjM1NSAzLTMtMS4zNTUtMy0zLTN6bTAgMmMuNTY0IDAgMSAuNDM2IDEgMSAwIC41NjQtLjQzNiAxLTEgMS0uNTY0IDAtMS0uNDM2LTEtMSAwLS41NjQuNDM2LTEgMS0xem0tNi41OSA1bDYuMjU2IDUuMzJhLjk2My45NjMgMCAwIDAgMS4xNTcuMDU0bDQuNjAxLTMuMzMzTDQxIDIyLjczdjIuOTI3YzAgLjIwNy0uMTI4LjM0Mi0uMzI1LjM0MmgtMjUuMzVjLS4xOTcgMC0uMzI1LS4xMzUtLjMyNS0uMzQyVjIyLjFsOC40MS02LjF6XCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPHBhdGggc3Ryb2tlPVwiIzY2NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTM0IDI0bC0zIDExaDRsMSA1aDNsLTEtNWg0elwiLz5cXG4nICtcbiAgICAgICcgICAgPC9nPlxcbicgK1xuICAgICAgJzwvc3ZnPlxcbic7XG5cbiAgICBpZiAodGhpcy5pc0FkdmFuY2VkVXBsb2FkKCkpXG4gICAgICB0aGlzLnVwbG9hZExhYmVsLmlubmVySFRNTCA9ICdEcmFnIGFuZCBkcm9wIGEgcGhvdG8gdG8gdXBsb2FkIG9yIHRhcCB0byB1cGxvYWQnO1xuICAgIGVsc2VcbiAgICAgIHRoaXMudXBsb2FkTGFiZWwuaW5uZXJIVE1MID0gJ1RhcCB0byB1cGxvYWQnO1xuICAgIHRoaXMudXBsb2FkUGFuZWwub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5wdXRGaWxlLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgWydkcmFnZW50ZXInLCAnZHJhZ292ZXInLCAnZHJhZ2xlYXZlJywgJ2Ryb3AnXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLnVwbG9hZFBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzLnByZXZlbnREZWZhdWx0cywgZmFsc2UpXG4gICAgfSk7XG5cbiAgICBbJ2RyYWdlbnRlcicsICdkcmFnb3ZlciddLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsICgpID0+IHtcbiAgICAgICAgdGhpcy51cGxvYWRQYW5lbC5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlX191cGxvYWQtcGFuZWwtLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBbJ2RyYWdsZWF2ZScsICdkcm9wJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKCkgPT4ge1xuICAgICAgICB0aGlzLnVwbG9hZFBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRvci1ibG9ja19faW1hZ2VfX3VwbG9hZC1wYW5lbC0tYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICB9KVxuXG4gICAgdGhpcy51cGxvYWRQYW5lbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcbiAgICAgIGxldCBkdCA9IGV2ZW50LmRhdGFUcmFuc2ZlcjtcbiAgICAgIGxldCBmaWxlcyA9IGR0LmZpbGVzO1xuXG4gICAgICB0aGlzLmhhbmRsZUZpbGVzKGZpbGVzKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZGluZ0ljb24uaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiZWRpdG9yLWJsb2NrX19pbWFnZV9fbG9hZGluZy1pY29uXCI+PC9zcGFuPiBVcGxvYWRpbmcgaW1hZ2UuLi4nXG4gICAgdGhpcy5zdG9wTG9hZGluZygpO1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLmlubmVySFRNTCA9ICdVcGxvYWQgaW1hZ2UnO1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7IHRoaXMuaW5wdXRGaWxlLmNsaWNrKCkgfVxuXG4gICAgdGhpcy5pbnB1dEZpbGUudHlwZSA9ICdmaWxlJztcbiAgICB0aGlzLmlucHV0RmlsZS5hY2NlcHQgPSAnaW1hZ2UvKic7XG4gICAgdGhpcy5pbnB1dEZpbGUub25jaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KTogYW55ID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICAgIHRoaXMuaGFuZGxlRmlsZXModGFyZ2V0LmZpbGVzKTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBoYW5kbGVGaWxlcyhmaWxlczogRmlsZUxpc3QpOiB2b2lkIHtcbiAgICBpZiAoZmlsZXMubGVuZ3RoID09IDApIHtcbiAgICAgIC8vIGluIElFIDExLCB0aGUgY2hhbmdlIGV2ZW50IGlzIGZpcmVkIHdoZW4gd2UgcHJvZ3JhbW1hdGljYWxseSBzZXQgYC5qcy1maWxlSW5wdXRgJ3MgdmFsdWUgdG8gZW1wdHkgc3RyaW5nLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RhcnRMb2FkaW5nKCk7XG5cbiAgICBsZXQgc3VjY2Vzc0NhbGxiYWNrID0gKHVybDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH07XG5cbiAgICBsZXQgZmFpbENhbGxiYWNrID0gKGVycm9yOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5lZGl0b3Iub3B0aW9ucy51cGxvYWRJbWFnZShmaWxlc1swXSwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsQ2FsbGJhY2spO1xuICAgIHRoaXMuaW5wdXRGaWxlLnZhbHVlID0gJyc7XG4gIH07XG5cbiAgcHJldmVudERlZmF1bHRzKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbiAgc3RhcnRMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMudXBsb2FkTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLmxvYWRpbmdJY29uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfVxuXG4gIHN0b3BMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMudXBsb2FkTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIHRoaXMubG9hZGluZ0ljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGlzQWR2YW5jZWRVcGxvYWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICgnZHJhZ2dhYmxlJyBpbiB0aGlzLnVwbG9hZFBhbmVsKSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiB0aGlzLnVwbG9hZFBhbmVsICYmICdvbmRyb3AnIGluIHRoaXMudXBsb2FkUGFuZWwpO1xuICB9XG5cbiAgdXBkYXRlVmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMudXJsO1xuICAgICAgdGhpcy5pbWFnZVBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltYWdlUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgc3VwZXIuZm9jdXMoKTtcbiAgfVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd0ltYWdlQmxvY2sgPSB7XG4gICAgICB0eXBlOiBUWVBFLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH07XG4gICAgcmV0dXJuIHJhdztcbiAgfVxufVxuIiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBSYXdCbG9jaywgQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2snXG5pbXBvcnQge1RleHRCYXNlZEJsb2NrfSBmcm9tIFwiLi90ZXh0LWJhc2VkLWJsb2NrXCI7XG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICdxdW90ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmF3UXVvdGVCbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUXVvdGVCbG9ja1JlYWRlciBpbXBsZW1lbnRzIEJsb2NrUmVhZGVyIHtcbiAgY2FuUGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIHJhd0Jsb2NrLnR5cGUgPT0gVFlQRTtcbiAgfVxuXG4gIHBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jaywgZWRpdG9yOiBFZGl0b3IpOiBCbG9jayB7XG4gICAgbGV0IHJhd1F1b3RlQmxvY2sgPSByYXdCbG9jayBhcyBSYXdRdW90ZUJsb2NrO1xuICAgIHJldHVybiBuZXcgUXVvdGVCbG9jayhlZGl0b3IsIHJhd1F1b3RlQmxvY2suY29udGVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1b3RlQmxvY2sgZXh0ZW5kcyBUZXh0QmFzZWRCbG9jayB7XG5cbiAgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdGV4dCcpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRleHRhcmVhKTtcblxuICAgIHRoaXMudGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19jb250YWluZXJfX2VkaXRvcicsICdlZGl0b3ItYmxvY2tfX3F1b3RlJyk7XG4gICAgdGhpcy50ZXh0YXJlYS5wbGFjZWhvbGRlciA9ICdRdW90ZSc7XG4gICAgdGhpcy50ZXh0YXJlYS5yb3dzID0gMTtcbiAgICB0aGlzLnRleHRhcmVhLmlubmVySFRNTCA9IHRoaXMuY29udGVudDtcblxuICAgIHRoaXMuZW5hYmxlTmV3TGluZVByZXZlbnRpb24oKTtcbiAgICB0aGlzLmVuYWJsZUF1dG9yZXNpemluZygpO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgc3VwZXIuZm9jdXMoKTtcbiAgICB0aGlzLnRleHRhcmVhLmZvY3VzKCk7XG4gIH1cblxuICBnZXRSYXdDb250ZW50KCk6IFJhd0Jsb2NrIHtcbiAgICBsZXQgcmF3OiBSYXdRdW90ZUJsb2NrID0ge1xuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMudGV4dGFyZWEudmFsdWVcbiAgICB9O1xuICAgIHJldHVybiByYXc7XG4gIH1cbn0iLCJpbXBvcnQge0Jsb2NrfSBmcm9tIFwiLi9ibG9ja1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGV4dEJhc2VkQmxvY2sgZXh0ZW5kcyBCbG9jayB7XG5cbiAgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG5cbiAgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy50ZXh0YXJlYSkgeyByZXR1cm47IH1cbiAgICBsZXQgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICBldnQuaW5pdEV2ZW50KFwiaW5wdXRcIiwgdHJ1ZSwgdHJ1ZSk7XG4gICAgdGhpcy50ZXh0YXJlYS5kaXNwYXRjaEV2ZW50KGV2dClcbiAgfVxuXG4gIGVuYWJsZU5ld0xpbmVQcmV2ZW50aW9uKCk6IHZvaWQge1xuICAgIHRoaXMudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXYpID0+IHtcbiAgICAgIC8vIDEzIGlzIHRoZSBlbnRlciBrZXlcbiAgICAgIGlmICgoZXYgYXMgS2V5Ym9hcmRFdmVudCkua2V5Q29kZSA9PSAxMykge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlQXV0b3Jlc2l6aW5nKCk6IHZvaWQge1xuICAgIHRoaXMudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAvLyBXZSBkb24ndCByZXNpemUgdGhlIHRleHRhcmVhIHRvIGJlIGxlc3MgdGhhbiAxMHB4LlxuICAgICAgLy8gVGhpcyBoYW5kbGVzIHRoZSBjYXNlIHdoZXJlIHRoZSBlZGl0b3IgaXMgaW5pdGlhbGx5IGhpZGRlbiBhbmQgbGF0ZXIgYmVjb21lcyB2aXNpYmxlLlxuICAgICAgLy8gVGhlIHNjcm9sbEhlaWdodCBpcyAwIHdoZW4gdGhlIHRleHRhcmVhIGlzIGhpZGRlbi5cbiAgICAgIGlmICh0aGlzLnRleHRhcmVhLnNjcm9sbEhlaWdodCA+IDEwKSB7XG4gICAgICAgIHRoaXMudGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICB0aGlzLnRleHRhcmVhLnN0eWxlLmhlaWdodCA9IHRoaXMudGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHRyaWdnZXIgYSBkdW1teSBldmVudCB0byBzZXQgdGhlIGNvcnJlY3QgaGVpZ2h0IG9mIHRoZSB0ZXh0YXJlYSBhZnRlciB0aGUgRE9NIGlzIGluaXRpYWxpemVkXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcIkRPTUNvbnRlbnRMb2FkZWRcIixcbiAgICAgICgpID0+IHsgdGhpcy5yZWRyYXcoKTsgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnJlZHJhdygpOyB9LDEpO1xuICB9XG59XG4iLCJpbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vZWRpdG9yJztcbmltcG9ydCB7QmxvY2ssIEJsb2NrUmVhZGVyLCBSYXdCbG9ja30gZnJvbSAnLi9ibG9jaydcbmltcG9ydCB7VGV4dEJhc2VkQmxvY2t9IGZyb20gXCIuL3RleHQtYmFzZWQtYmxvY2tcIjtcblxuY29uc3QgVFlQRTogc3RyaW5nID0gJ3RleHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhd1RleHRCbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dEJsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3VGV4dEJsb2NrID0gcmF3QmxvY2sgYXMgUmF3VGV4dEJsb2NrO1xuICAgIHJldHVybiBuZXcgVGV4dEJsb2NrKGVkaXRvciwgcmF3VGV4dEJsb2NrLmNvbnRlbnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0QmxvY2sgZXh0ZW5kcyBUZXh0QmFzZWRCbG9jayB7XG5cbiAgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdGV4dCcpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRleHRhcmVhKTtcblxuICAgIHRoaXMudGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19jb250YWluZXJfX2VkaXRvcicsICdlZGl0b3ItYmxvY2tfX2JvZHknKTtcbiAgICB0aGlzLnRleHRhcmVhLnBsYWNlaG9sZGVyID0gJ0JvZHkgdGV4dCc7XG4gICAgdGhpcy50ZXh0YXJlYS5yb3dzID0gMTtcbiAgICB0aGlzLnRleHRhcmVhLmlubmVySFRNTCA9IHRoaXMuY29udGVudDtcblxuICAgIHRoaXMuZW5hYmxlQXV0b3Jlc2l6aW5nKCk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBzdXBlci5mb2N1cygpO1xuICAgIHRoaXMudGV4dGFyZWEuZm9jdXMoKTtcbiAgfVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd1RleHRCbG9jayA9IHtcbiAgICAgIHR5cGU6IFRZUEUsXG4gICAgICBjb250ZW50OiB0aGlzLnRleHRhcmVhLnZhbHVlXG4gICAgfTtcbiAgICByZXR1cm4gcmF3O1xuICB9XG59IiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBSYXdCbG9jaywgQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICd2aWRlbyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmF3VmlkZW9CbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb0Jsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3VmlkZW9CbG9jayA9IHJhd0Jsb2NrIGFzIFJhd1ZpZGVvQmxvY2s7XG4gICAgcmV0dXJuIG5ldyBWaWRlb0Jsb2NrKGVkaXRvciwgcmF3VmlkZW9CbG9jay51cmwpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb0Jsb2NrIGV4dGVuZHMgQmxvY2sge1xuXG4gIHVwbG9hZFBhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGlucHV0VGV4dENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5wdXRUZXh0TGFiZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0VGV4dEljb246IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW5wdXRUZXh0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICB2aWRlb1BhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2aWRlb0VsZW06IEhUTUxWaWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICB2aWRlb0lmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWRpdG9yOiBFZGl0b3IsIHB1YmxpYyB2aWRlb1VybDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWRpdG9yKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlbycpO1xuICAgIHRoaXMudmlkZW9FbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3ZpZGVvLWVsZW0nKVxuXG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkUGFuZWwpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvUGFuZWwpO1xuXG4gICAgdGhpcy52aWRlb1BhbmVsLmFwcGVuZENoaWxkKHRoaXMudmlkZW9FbGVtKTtcbiAgICB0aGlzLnZpZGVvUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy52aWRlb0lmcmFtZSk7XG4gICAgdGhpcy52aWRlb0lmcmFtZS5mcmFtZUJvcmRlciA9IFwiMFwiO1xuXG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0VGV4dExhYmVsKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRUZXh0Q29udGFpbmVyKTtcbiAgICB0aGlzLmlucHV0VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0VGV4dEljb24pO1xuICAgIHRoaXMuaW5wdXRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRUZXh0KTtcblxuICAgIHRoaXMudXBsb2FkUGFuZWwuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLXBhbmVsJyk7XG4gICAgdGhpcy5pbnB1dFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLXBhbmVsX19pbnB1dC1jb250YWluZXInKTtcbiAgICB0aGlzLmlucHV0VGV4dExhYmVsLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3VwbG9hZC1wYW5lbF9faW5wdXQtY29udGFpbmVyX19sYWJlbCcpO1xuICAgIHRoaXMuaW5wdXRUZXh0SWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3ZpZGVvX191cGxvYWQtcGFuZWxfX2lucHV0LWNvbnRhaW5lcl9faWNvbicpO1xuICAgIHRoaXMuaW5wdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3VwbG9hZC1wYW5lbF9faW5wdXQtY29udGFpbmVyX19pbnB1dCcpO1xuICAgIHRoaXMudmlkZW9JZnJhbWUuY2xhc3NMaXN0LmFkZCgnanMtdmlkZW8taWZyYW1lJyk7XG5cbiAgICB0aGlzLmlucHV0VGV4dExhYmVsLmlubmVySFRNTCA9ICdQYXN0ZSBhIFlvdXR1YmUgb3IgVmltZW8gdXJsJ1xuICAgIHRoaXMuaW5wdXRUZXh0SWNvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzNVwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNSAyMFwiPjxnIGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxwYXRoIGQ9XCJNNi4yNSAwQzQuOTE1IDAgMy45LS4wMDQgMy4wNi4wOTIgMi4yMjIuMTg4IDEuNDg1LjM5Ny45MzkuOTUyYy0uNTQ1LjU1NC0uNzUgMS4zMDUtLjg0NiAyLjE2Qy0uMDAyIDMuOTY5IDAgNS4wMDMgMCA2LjM2NXY3LjI3MmMwIDEuMzYtLjAwNCAyLjM5My4wOSAzLjI0OC4wOTUuODU1LjMgMS42MDYuODQ1IDIuMTYuNTQ0LjU1NiAxLjI4Mi43NjYgMi4xMjIuODYyLjg0LjA5NyAxLjg1Ni4wOTQgMy4xOTMuMDk0aDEyLjVjMS4zMzYgMCAyLjM1LjAwNCAzLjE5LS4wOTIuODQtLjA5NiAxLjU3Ny0uMzA1IDIuMTIyLS44Ni41NDUtLjU1NC43NS0xLjMwNS44NDYtMi4xNi4wOTUtLjg1Ni4wOTItMS44OS4wOTItMy4yNTJWNi4zNjRjMC0xLjM2LjAwNC0yLjM5My0uMDktMy4yNDgtLjA5NS0uODU1LS4zLTEuNjA1LS44NDUtMi4xNkMyMy41MjEuNCAyMi43ODMuMTkgMjEuOTQzLjA5MyAyMS4xMDMtLjAwMiAyMC4wODcgMCAxOC43NSAwSDYuMjV6bTAgMS44MThoMTIuNWMxLjMzNiAwIDIuMzI3LjAwNSAyLjk5My4wODIuNjY1LjA3Ni45MzQuMjEgMS4wNi4zMzkuMTI2LjEyOS4yNTYuNDAyLjMzMSAxLjA4LjA3NS42NzcuMDggMS42ODUuMDggMy4wNDV2Ny4yNzJjMCAxLjM2MS0uMDA1IDIuMzctLjA4IDMuMDQ3LS4wNzUuNjc4LS4yMDcuOTUxLS4zMzMgMS4wOC0uMTI2LjEyOC0uMzk0LjI2MS0xLjA2LjMzNy0uNjY2LjA3Ni0xLjY1Ni4wODItMi45OS4wODJINi4yNWMtMS4zMzcgMC0yLjMyNy0uMDA1LTIuOTkzLS4wODItLjY2Ni0uMDc2LS45MzQtLjIxLTEuMDYtLjMzOS0uMTI3LS4xMjktLjI1Ny0uNDAyLS4zMzItMS4wOC0uMDc1LS42NzctLjA4LTEuNjg1LS4wOC0zLjA0NVY2LjM2NGMwLTEuMzYxLjAwNS0yLjM3LjA4LTMuMDQ3LjA3NS0uNjc4LjIwNy0uOTUxLjMzMy0xLjA4LjEyNi0uMTI4LjM5NS0uMjYxIDEuMDYtLjMzNy42NjYtLjA3NiAxLjY1Ni0uMDgyIDIuOTkxLS4wODJ6XCIvPjxwYXRoIGQ9XCJNOC43NDQgNC4xOTJhMS4zNjkgMS4zNjkgMCAwIDAtLjcwOCAxLjIwMnY5LjIxMmMwIC41LjI3MS45NjUuNzA4IDEuMjAyLjQzNC4yMzYuOTY1LjIxIDEuMzc0LS4wNjdsNi43ODQtNC42MDZoLjAwMWExLjM3NiAxLjM3NiAwIDAgMC0uMDAxLTIuMjdjLTEuNDI4LS45NjgtNS4yMTYtMy41NC02Ljc4NC00LjYwNWExLjMyNCAxLjMyNCAwIDAgMC0xLjM3NC0uMDY4em0xLjA3OCAyLjA1YzEuNjEgMS4wOTQgNC4wNzggMi43NyA1LjUzNSAzLjc1OGwtNS41MzUgMy43NTdWNi4yNDN6XCIvPjwvZz48L3N2Zz4nO1xuICAgIHRoaXMuaW5wdXRUZXh0LnR5cGUgPSAndGV4dCc7XG4gICAgdGhpcy5pbnB1dFRleHQudmFsdWUgPSB2aWRlb1VybDtcbiAgICB0aGlzLmlucHV0VGV4dC5vbmNoYW5nZSA9IChldmVudDogRXZlbnQpOiBhbnkgPT4ge1xuICAgICAgdGhpcy52aWRlb1VybCA9IHRoaXMuaW5wdXRUZXh0LnZhbHVlLnRyaW0oKTtcbiAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIHN0YXRpYyBleHRyYWN0WW91dHViZUlkKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgcmVnRXhwID0gL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PXxcXD92PXxzaG9ydHNcXC8pKFteI1xcJlxcP10qKS4qLztcbiAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsyXSA6IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdFZpbWVvSWQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCByZWdFeHAgPSAvXi4rdmltZW8uY29tXFwvKC4qXFwvKT8oW14jXFw/XSopLztcbiAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsyXSB8fCBtYXRjaFsxXSA6IG51bGw7XG4gIH1cblxuICB1cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZpZGVvVXJsKSB7XG4gICAgICBpZiAodGhpcy52aWRlb1VybC5pbmNsdWRlcygnY2xvdWRpbmFyeScpKSB7XG4gICAgICAgIHRoaXMudmlkZW9FbGVtLnNyYyA9IHRoaXMudmlkZW9Vcmw7XG4gICAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnVwbG9hZFBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudmlkZW9VcmwuaW5jbHVkZXMoJ3lvdXR1YmUnKSkge1xuICAgICAgICBsZXQgeW91dHViZUlkID0gVmlkZW9CbG9jay5leHRyYWN0WW91dHViZUlkKHRoaXMudmlkZW9VcmwpO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLnNyYz1gaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt5b3V0dWJlSWR9P3JlbD0wYDtcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS53aWR0aD1cIjU2MFwiO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLmhlaWdodD1cIjMxNVwiO1xuXG4gICAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy52aWRlb0VsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZGVvVXJsLmluY2x1ZGVzKCd2aW1lbycpKSB7XG4gICAgICAgIGxldCB2aW1lb0lkID0gVmlkZW9CbG9jay5leHRyYWN0VmltZW9JZCh0aGlzLnZpZGVvVXJsKTtcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS5zcmM9YGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3ZpbWVvSWR9P2NvbG9yPWVjNzA3MCZwb3J0cmFpdD0wYDtcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS53aWR0aD1cIjU2MFwiO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLmhlaWdodD1cIjMxNVwiO1xuXG4gICAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy52aWRlb0VsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZGVvUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgc3VwZXIuZm9jdXMoKTtcbiAgfVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd1ZpZGVvQmxvY2sgPSB7XG4gICAgICB0eXBlOiBUWVBFLFxuICAgICAgdXJsOiB0aGlzLnZpZGVvVXJsLFxuICAgIH07XG4gICAgcmV0dXJuIHJhdztcbiAgfVxufVxuIiwiaW1wb3J0IHtCbG9ja30gZnJvbSAnLi9ibG9jay9ibG9jayc7XG5pbXBvcnQge0ltYWdlQmxvY2t9IGZyb20gJy4vYmxvY2svaW1hZ2UtYmxvY2snO1xuaW1wb3J0IHtRdW90ZUJsb2NrfSBmcm9tICcuL2Jsb2NrL3F1b3RlLWJsb2NrJztcbmltcG9ydCB7SGVhZGVyQmxvY2t9IGZyb20gJy4vYmxvY2svaGVhZGVyLWJsb2NrJztcbmltcG9ydCB7VGV4dEJsb2NrfSBmcm9tICcuL2Jsb2NrL3RleHQtYmxvY2snO1xuaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4vZWRpdG9yJztcbmltcG9ydCB7VmlkZW9CbG9ja30gZnJvbSBcIi4vYmxvY2svdmlkZW8tYmxvY2tcIjtcblxuXG5leHBvcnQgY2xhc3MgQ29udHJvbCB7XG4gIGVsZW06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRhc2hib2FyZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXhwYW5kSGFuZGxlOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBleHBhbmRCdXR0b246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHF1b3RlQnV0dG9uOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJCdXR0b246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRleHRCdXR0b246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlQnV0dG9uOiBIVE1MRGl2RWxlbWVudDtcbiAgdmlkZW9CdXR0b246IEhUTUxEaXZFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIGJsb2NrOiBCbG9jaykge1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbCcpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmV4cGFuZEhhbmRsZSk7XG4gICAgdGhpcy5leHBhbmRIYW5kbGUuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2V4cGFuZC1oYW5kbGUnLCAnanMtZXhwYW5kLWhhbmRsZScpO1xuXG4gICAgdGhpcy5leHBhbmRIYW5kbGUuYXBwZW5kQ2hpbGQodGhpcy5leHBhbmRCdXR0b24pO1xuICAgIHRoaXMuZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19leHBhbmQtaGFuZGxlX19idXR0b24nKTtcbiAgICB0aGlzLmV4cGFuZEJ1dHRvbi5pbm5lckhUTUwgPSAnKyBBREQnO1xuICAgIHRoaXMuZXhwYW5kSGFuZGxlLm9uY2xpY2sgPSAoKSA9PiB7IHRoaXMudG9nZ2xlRGFzaGJvYXJkKCk7IH07XG5cbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy5kYXNoYm9hcmQpO1xuICAgIHRoaXMuZGFzaGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19kYXNoYm9hcmQnKTtcblxuICAgIHRoaXMuZGFzaGJvYXJkLmFwcGVuZENoaWxkKHRoaXMuaGVhZGVyQnV0dG9uKTtcbiAgICB0aGlzLmhlYWRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZGFzaGJvYXJkX19idXR0b24nLCAnanMtaGVhZGVyLWJ1dHRvbicpO1xuICAgIHRoaXMuaGVhZGVyQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDIyIDE0XCI+PHRleHQgZmlsbD1cIiM2NjZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZm9udC1mYW1pbHk9XCJTb3VyY2VTYW5zUHJvLUJvbGQsIFNvdXJjZSBTYW5zIFByb1wiIGZvbnQtc2l6ZT1cIjIwXCIgZm9udC13ZWlnaHQ9XCJib2xkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00OCAtMzMpXCI+PHRzcGFuIHg9XCI0Ni45OFwiIHk9XCI0N1wiPkgxPC90c3Bhbj48L3RleHQ+PC9zdmc+PHA+SGVhZGVyIFRleHQ8L3A+JztcbiAgICB0aGlzLmhlYWRlckJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZWRpdG9yLmFkZChuZXcgSGVhZGVyQmxvY2soZWRpdG9yLCAnJyksIHRoaXMuYmxvY2spO1xuICAgICAgdGhpcy5jb2xsYXBzZUFsbCgpO1xuICAgIH07XG5cbiAgICB0aGlzLmRhc2hib2FyZC5hcHBlbmRDaGlsZCh0aGlzLnF1b3RlQnV0dG9uKTtcbiAgICB0aGlzLnF1b3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19kYXNoYm9hcmRfX2J1dHRvbicsICdqcy1xdW90ZS1idXR0b24nKTtcbiAgICB0aGlzLnF1b3RlQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDE4IDE1XCI+PHBhdGggZmlsbD1cIiM2NjZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk02Ljg4MSAxNC4xOTVILjUxMVY5LjY0YzAtMS44NDMuMTYzLTMuMjk4LjQ4OC00LjM2My4zMjUtMS4wNjUuOTI2LTIuMDIxIDEuODAyLTIuODY3QzMuNjc3IDEuNTYyIDQuNzk2Ljg5OCA2LjE1Ni40MTRsMS4yNDYgMi42M2MtMS4yNjkuNDIyLTIuMTggMS4wMTItMi43MzEgMS43NjctLjU1Mi43NTYtLjg0MiAxLjc2LS44NzMgMy4wMTVoMy4wODN2Ni4zN3ptMTAuNjMgMGgtNi4zNjlWOS42NGMwLTEuODU4LjE2My0zLjMxNy40ODgtNC4zNzQuMzI1LTEuMDU4LjkyOS0yLjAxIDEuODEzLTIuODU2Ljg4NC0uODQ3IDEuOTk4LTEuNTExIDMuMzQzLTEuOTk1bDEuMjQ3IDIuNjNjLTEuMjcuNDIyLTIuMTggMS4wMTItMi43MzEgMS43NjctLjU1Mi43NTYtLjg0MyAxLjc2LS44NzMgMy4wMTVoMy4wODN2Ni4zN3pcIi8+PC9zdmc+PHA+UXVvdGU8cD4nO1xuICAgIHRoaXMucXVvdGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGVkaXRvci5hZGQobmV3IFF1b3RlQmxvY2soZWRpdG9yLCAnJyksIHRoaXMuYmxvY2spO1xuICAgICAgdGhpcy5jb2xsYXBzZUFsbCgpO1xuICAgIH07XG5cbiAgICB0aGlzLmRhc2hib2FyZC5hcHBlbmRDaGlsZCh0aGlzLnRleHRCdXR0b24pO1xuICAgIHRoaXMudGV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZGFzaGJvYXJkX19idXR0b24nLCAnanMtdGV4dC1idXR0b24nKTtcbiAgICB0aGlzLnRleHRCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjAgMTZcIj48dGV4dCBmaWxsPVwiIzY2NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBmb250LWZhbWlseT1cIlNvdXJjZVNhbnNQcm8tUmVndWxhciwgU291cmNlIFNhbnMgUHJvXCIgZm9udC1zaXplPVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE0NiAtMzIpXCI+IDx0c3BhbiB4PVwiMTQ0LjU3XCIgeT1cIjQ3XCI+QmQ8L3RzcGFuPiA8L3RleHQ+PC9zdmc+PHA+Qm9keSBUZXh0PC9wPic7XG4gICAgdGhpcy50ZXh0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBlZGl0b3IuYWRkKG5ldyBUZXh0QmxvY2soZWRpdG9yLCAnJyksIHRoaXMuYmxvY2spO1xuICAgICAgdGhpcy5jb2xsYXBzZUFsbCgpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5lZGl0b3Iub3B0aW9ucy51cGxvYWRJbWFnZSkge1xuICAgICAgdGhpcy5pbWFnZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5kYXNoYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy5pbWFnZUJ1dHRvbik7XG5cbiAgICAgIHRoaXMuaW1hZ2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2Rhc2hib2FyZF9fYnV0dG9uJywgJ2pzLWltYWdlLWJ1dHRvbicpO1xuICAgICAgdGhpcy5pbWFnZUJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNSAyMFwiPjxwYXRoIGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIGQ9XCJNMS45MDIgMEMuODYyIDAgMCAuOTA3IDAgMnYxNmMwIDEuMDkzLjg2MiAyIDEuOTAyIDJoMjEuMTk2YzEuMDQgMCAxLjkwMi0uOTA3IDEuOTAyLTJWMmMwLTEuMDkzLS44NjItMi0xLjkwMi0ySDEuOTAyem0wIDEuNzE0aDIxLjE5NmMuMTY0IDAgLjI3Mi4xMTMuMjcyLjI4NnYxMS4zNTdsLTQuMTEtMy40NTVhLjgwNS44MDUgMCAwIDAtLjk2OS0uMDQ1bC0zLjg1NSAyLjc4Ni01LjIzLTQuNDU1QS43OTguNzk4IDAgMCAwIDguNjAxIDhhLjc5Ni43OTYgMCAwIDAtLjM3My4xNTJMMS42MyAxMi45MzdWMmMwLS4xNzMuMTA4LS4yODYuMjcyLS4yODZ6TTE0LjQwMiA0Yy0xLjM0IDAtMi40NDUgMS4xNjEtMi40NDUgMi41NzEgMCAxLjQxIDEuMTA0IDIuNTcyIDIuNDQ1IDIuNTcyIDEuMzQxIDAgMi40NDYtMS4xNjIgMi40NDYtMi41NzIgMC0xLjQxLTEuMTA1LTIuNTcxLTIuNDQ2LTIuNTcxem0wIDEuNzE0Yy40NiAwIC44MTUuMzc0LjgxNS44NTcgMCAuNDg0LS4zNTUuODU4LS44MTUuODU4LS40NiAwLS44MTUtLjM3NC0uODE1LS44NTggMC0uNDgzLjM1NS0uODU3LjgxNS0uODU3ek04LjY2MiA5LjkzbDUuMjMgNC40NDZhLjgwNS44MDUgMCAwIDAgLjk2OS4wNDVsMy44NDctMi43ODYgNC42NjIgMy45MlYxOGMwIC4xNzMtLjEwOC4yODYtLjI3Mi4yODZIMS45MDJjLS4xNjQgMC0uMjcyLS4xMTMtLjI3Mi0uMjg2di0yLjk3M2w3LjAzMi01LjA5OHpcIi8+PC9zdmc+PHA+SW1hZ2U8L3A+JztcbiAgICAgIHRoaXMuaW1hZ2VCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZWRpdG9yLmFkZChuZXcgSW1hZ2VCbG9jayhlZGl0b3IsICcnKSwgdGhpcy5ibG9jayk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VBbGwoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy52aWRlb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZGFzaGJvYXJkLmFwcGVuZENoaWxkKHRoaXMudmlkZW9CdXR0b24pO1xuXG4gICAgdGhpcy52aWRlb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZGFzaGJvYXJkX19idXR0b24nLCAnanMtdmlkZW8tYnV0dG9uJylcbiAgICB0aGlzLnZpZGVvQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI1IDIwXCI+PGcgZmlsbD1cIiM2NjZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PHBhdGggZD1cIk02LjI1IDBDNC45MTUgMCAzLjktLjAwNCAzLjA2LjA5MiAyLjIyMi4xODggMS40ODUuMzk3LjkzOS45NTJjLS41NDUuNTU0LS43NSAxLjMwNS0uODQ2IDIuMTZDLS4wMDIgMy45NjkgMCA1LjAwMyAwIDYuMzY1djcuMjcyYzAgMS4zNi0uMDA0IDIuMzkzLjA5IDMuMjQ4LjA5NS44NTUuMyAxLjYwNi44NDUgMi4xNi41NDQuNTU2IDEuMjgyLjc2NiAyLjEyMi44NjIuODQuMDk3IDEuODU2LjA5NCAzLjE5My4wOTRoMTIuNWMxLjMzNiAwIDIuMzUuMDA0IDMuMTktLjA5Mi44NC0uMDk2IDEuNTc3LS4zMDUgMi4xMjItLjg2LjU0NS0uNTU0Ljc1LTEuMzA1Ljg0Ni0yLjE2LjA5NS0uODU2LjA5Mi0xLjg5LjA5Mi0zLjI1MlY2LjM2NGMwLTEuMzYuMDA0LTIuMzkzLS4wOS0zLjI0OC0uMDk1LS44NTUtLjMtMS42MDUtLjg0NS0yLjE2QzIzLjUyMS40IDIyLjc4My4xOSAyMS45NDMuMDkzIDIxLjEwMy0uMDAyIDIwLjA4NyAwIDE4Ljc1IDBINi4yNXptMCAxLjgxOGgxMi41YzEuMzM2IDAgMi4zMjcuMDA1IDIuOTkzLjA4Mi42NjUuMDc2LjkzNC4yMSAxLjA2LjMzOS4xMjYuMTI5LjI1Ni40MDIuMzMxIDEuMDguMDc1LjY3Ny4wOCAxLjY4NS4wOCAzLjA0NXY3LjI3MmMwIDEuMzYxLS4wMDUgMi4zNy0uMDggMy4wNDctLjA3NS42NzgtLjIwNy45NTEtLjMzMyAxLjA4LS4xMjYuMTI4LS4zOTQuMjYxLTEuMDYuMzM3LS42NjYuMDc2LTEuNjU2LjA4Mi0yLjk5LjA4Mkg2LjI1Yy0xLjMzNyAwLTIuMzI3LS4wMDUtMi45OTMtLjA4Mi0uNjY2LS4wNzYtLjkzNC0uMjEtMS4wNi0uMzM5LS4xMjctLjEyOS0uMjU3LS40MDItLjMzMi0xLjA4LS4wNzUtLjY3Ny0uMDgtMS42ODUtLjA4LTMuMDQ1VjYuMzY0YzAtMS4zNjEuMDA1LTIuMzcuMDgtMy4wNDcuMDc1LS42NzguMjA3LS45NTEuMzMzLTEuMDguMTI2LS4xMjguMzk1LS4yNjEgMS4wNi0uMzM3LjY2Ni0uMDc2IDEuNjU2LS4wODIgMi45OTEtLjA4MnpcIi8+PHBhdGggZD1cIk04Ljc0NCA0LjE5MmExLjM2OSAxLjM2OSAwIDAgMC0uNzA4IDEuMjAydjkuMjEyYzAgLjUuMjcxLjk2NS43MDggMS4yMDIuNDM0LjIzNi45NjUuMjEgMS4zNzQtLjA2N2w2Ljc4NC00LjYwNmguMDAxYTEuMzc2IDEuMzc2IDAgMCAwLS4wMDEtMi4yN2MtMS40MjgtLjk2OC01LjIxNi0zLjU0LTYuNzg0LTQuNjA1YTEuMzI0IDEuMzI0IDAgMCAwLTEuMzc0LS4wNjh6bTEuMDc4IDIuMDVjMS42MSAxLjA5NCA0LjA3OCAyLjc3IDUuNTM1IDMuNzU4bC01LjUzNSAzLjc1N1Y2LjI0M3pcIi8+PC9nPjwvc3ZnPjxwPlZpZGVvPC9wPic7XG4gICAgdGhpcy52aWRlb0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZWRpdG9yLmFkZChuZXcgVmlkZW9CbG9jayhlZGl0b3IsICcnKSwgdGhpcy5ibG9jayk7XG4gICAgfTtcbiAgfVxuXG4gIHRvZ2dsZURhc2hib2FyZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXNoYm9hcmQuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpXG4gICAgICB0aGlzLmV4cGFuZERhc2hib2FyZCgpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuY29sbGFwc2VEYXNoYm9hcmQoKTtcbiAgfVxuXG4gIGNvbGxhcHNlRGFzaGJvYXJkKCk6IHZvaWQge1xuICAgIHRoaXMuZGFzaGJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5leHBhbmRCdXR0b24uaW5uZXJIVE1MID0gJysgQUREJ1xuICB9XG5cbiAgZXhwYW5kRGFzaGJvYXJkKCk6IHZvaWQge1xuICAgIHRoaXMuY29sbGFwc2VBbGwoKTtcbiAgICB0aGlzLmRhc2hib2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRoaXMuZXhwYW5kQnV0dG9uLmlubmVySFRNTCA9ICdISURFJztcbiAgfVxuXG4gIGNvbGxhcHNlQWxsKCkge1xuICAgIGZvciAobGV0IGk9MDtpIDwgdGhpcy5lZGl0b3IuYmxvY2tzLmxlbmd0aDtpKyspIHtcbiAgICAgIHRoaXMuZWRpdG9yLmJsb2Nrc1tpXS5jb250cm9sLmNvbGxhcHNlRGFzaGJvYXJkKCk7XG4gICAgfVxuICAgIHRoaXMuZWRpdG9yLmxhc3RDb250cm9sLmNvbGxhcHNlRGFzaGJvYXJkKCk7XG4gIH1cbn0iLCJpbXBvcnQge0NvbnRyb2x9IGZyb20gJy4vY29udHJvbCc7XG5pbXBvcnQge0Jsb2NrLCBCbG9ja1JlYWRlciwgUmF3QmxvY2t9IGZyb20gJy4vYmxvY2svYmxvY2snO1xuaW1wb3J0IHtJbWFnZUJsb2NrUmVhZGVyfSBmcm9tICcuL2Jsb2NrL2ltYWdlLWJsb2NrJztcbmltcG9ydCB7UXVvdGVCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jay9xdW90ZS1ibG9jayc7XG5pbXBvcnQge0hlYWRlckJsb2NrUmVhZGVyfSBmcm9tICcuL2Jsb2NrL2hlYWRlci1ibG9jayc7XG5pbXBvcnQge1RleHRCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jay90ZXh0LWJsb2NrJztcbmltcG9ydCB7VmlkZW9CbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jay92aWRlby1ibG9jayc7XG5cbmNvbnN0IEJMT0NLUzogQXJyYXk8QmxvY2tSZWFkZXI+ID0gW1xuICBuZXcgVGV4dEJsb2NrUmVhZGVyKCksXG4gIG5ldyBIZWFkZXJCbG9ja1JlYWRlcigpLFxuICBuZXcgUXVvdGVCbG9ja1JlYWRlcigpLFxuICBuZXcgSW1hZ2VCbG9ja1JlYWRlcigpLFxuICBuZXcgVmlkZW9CbG9ja1JlYWRlcigpLFxuXTtcblxuZnVuY3Rpb24gY29udmVydFJhd0NvbnRlbnQocmF3Q29udGVudDogQXJyYXk8UmF3QmxvY2s+LCBlZGl0b3I6IEVkaXRvcik6IEFycmF5PEJsb2NrPiB7XG4gIGxldCBibG9ja3M6IEFycmF5PEJsb2NrPiA9IFtdO1xuXG4gIGZvciAobGV0IHJhd0Jsb2NrIG9mIHJhd0NvbnRlbnQpIHtcbiAgICBsZXQgcHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgZm9yIChsZXQgYmxvY2sgb2YgQkxPQ0tTKSB7XG4gICAgICBpZiAoYmxvY2suY2FuUGFyc2UocmF3QmxvY2spKSB7XG4gICAgICAgIHByb2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIGJsb2Nrcy5wdXNoKGJsb2NrLnBhcnNlKHJhd0Jsb2NrLCBlZGl0b3IpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwcm9jZXNzZWQpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVW5yZWNvZ25pemVkIGJsb2NrIHR5cGU6ICcke3Jhd0Jsb2NrLnR5cGV9Jy4gSWdub3JlLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBibG9ja3M7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdG9yT3B0aW9ucyB7XG4gIGNvbnRlbnQ6IEFycmF5PFJhd0Jsb2NrPjtcbiAgdXBsb2FkSW1hZ2U/OiAoZmlsZTogRmlsZSwgc3VjY2Vzc0NhbGxiYWNrOiAodXJsOiBzdHJpbmcpID0+IHZvaWQsIGZhaWx1cmVDYWxsYmFjazogKGVycm9yOiBzdHJpbmcpID0+IHZvaWQpID0+IHZvaWQ7XG4gIG9uQ2hhbmdlPzogKGNvbnRlbnQ6IEFycmF5PFJhd0Jsb2NrPikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEVkaXRvciB7XG4gIGJsb2NrczogQXJyYXk8QmxvY2s+O1xuICBsYXN0Q29udHJvbDogQ29udHJvbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbTogSFRNTERpdkVsZW1lbnQsXG4gICAgcHVibGljIG9wdGlvbnM6IEVkaXRvck9wdGlvbnNcbiAgKSB7XG4gICAgdGhpcy5ibG9ja3MgPSBjb252ZXJ0UmF3Q29udGVudCh0aGlzLm9wdGlvbnMuY29udGVudCwgdGhpcyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIC8vIFRyaWdnZXIgdGhlIGluaXRpYWwgb25DaGFuZ2UgZXZlbnRcbiAgICB0aGlzLnRyaWdnZXJPbkNoYW5nZSgpO1xuICB9XG5cbiAgYWRkKGJsb2NrOiBCbG9jaywgYmVmb3JlQmxvY2s6IEJsb2NrKSB7XG4gICAgaWYgKGJlZm9yZUJsb2NrKSB7XG4gICAgICBmb3IgKGxldCBpPTA7aSA8IHRoaXMuYmxvY2tzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgaWYgKGJlZm9yZUJsb2NrID09IHRoaXMuYmxvY2tzW2ldKSB7XG4gICAgICAgICAgdGhpcy5ibG9ja3Muc3BsaWNlKGksIDAsIGJsb2NrKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5lbGVtLmluc2VydEJlZm9yZShibG9jay5lbGVtLCBiZWZvcmVCbG9jay5lbGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ibG9ja3MucHVzaChibG9jayk7XG4gICAgICB0aGlzLmVsZW0uaW5zZXJ0QmVmb3JlKGJsb2NrLmVsZW0sIHRoaXMubGFzdENvbnRyb2wuZWxlbSk7XG4gICAgfVxuXG4gICAgYmxvY2suZm9jdXMoKTtcbiAgICB0aGlzLnRyaWdnZXJPbkNoYW5nZSgpO1xuICB9XG5cbiAgcmVtb3ZlKGJsb2NrOiBCbG9jaykge1xuICAgIGZvciAobGV0IGk9MDtpIDwgdGhpcy5ibG9ja3MubGVuZ3RoO2krKykge1xuICAgICAgaWYgKGJsb2NrID09IHRoaXMuYmxvY2tzW2ldKSB7XG4gICAgICAgIHRoaXMuYmxvY2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYmxvY2suZWxlbS5yZW1vdmUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudHJpZ2dlck9uQ2hhbmdlKCk7XG4gIH1cblxuICByZWRyYXcoKSB7XG4gICAgZm9yIChsZXQgYmxvY2sgb2YgdGhpcy5ibG9ja3MpIHtcbiAgICAgIGJsb2NrLnJlZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbnRlbnQoKTogQXJyYXk8UmF3QmxvY2s+IHtcbiAgICBsZXQgcmF3Q29udGVudDogQXJyYXk8UmF3QmxvY2s+ID0gW107XG4gICAgZm9yIChsZXQgYmxvY2sgb2YgdGhpcy5ibG9ja3MpIHtcbiAgICAgIHJhd0NvbnRlbnQucHVzaChibG9jay5nZXRSYXdDb250ZW50KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmF3Q29udGVudDtcbiAgfVxuXG4gIHNob3dEZWxldGVCdXR0b24oYmxvY2s6IEJsb2NrKSB7XG4gICAgZm9yIChsZXQgaT0wO2kgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7aSsrKSB7XG4gICAgICB0aGlzLmJsb2Nrc1tpXS5kZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGlmIChibG9jayA9PSB0aGlzLmJsb2Nrc1tpXSkge1xuICAgICAgICB0aGlzLmJsb2Nrc1tpXS5kZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJpZ2dlck9uQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5vbkNoYW5nZSh0aGlzLmdldENvbnRlbnQoKSk7IC8vIENhbGwgb25DaGFuZ2Ugd2l0aCBjdXJyZW50IGNvbnRlbnRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpIHtcbiAgICBmb3IgKGxldCBibG9jayBvZiB0aGlzLmJsb2Nrcykge1xuICAgICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKGJsb2NrLmVsZW0pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmxhc3RDb250cm9sID0gbmV3IENvbnRyb2wodGhpcywgbnVsbCk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMubGFzdENvbnRyb2wuZWxlbSk7XG4gICAgdGhpcy5sYXN0Q29udHJvbC5leHBhbmREYXNoYm9hcmQoKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0VkaXRvciwgRWRpdG9yT3B0aW9uc30gZnJvbSAnLi9lZGl0b3IvZWRpdG9yJ1xuaW1wb3J0IHtSYXdCbG9ja30gZnJvbSAnLi9lZGl0b3IvYmxvY2svYmxvY2snO1xuaW1wb3J0IHtSYXdIZWFkZXJCbG9ja30gZnJvbSAnLi9lZGl0b3IvYmxvY2svaGVhZGVyLWJsb2NrJztcbmltcG9ydCB7UmF3SW1hZ2VCbG9ja30gZnJvbSAnLi9lZGl0b3IvYmxvY2svaW1hZ2UtYmxvY2snO1xuaW1wb3J0IHtSYXdRdW90ZUJsb2NrfSBmcm9tICcuL2VkaXRvci9ibG9jay9xdW90ZS1ibG9jayc7XG5pbXBvcnQge1Jhd1RleHRCbG9ja30gZnJvbSAnLi9lZGl0b3IvYmxvY2svdGV4dC1ibG9jayc7XG5pbXBvcnQge1Jhd1ZpZGVvQmxvY2t9IGZyb20gJy4vZWRpdG9yL2Jsb2NrL3ZpZGVvLWJsb2NrJztcblxuKDxhbnk+d2luZG93KS5pbnN0YWxsRWRpdG9yID0gKGVsZW06IEhUTUxEaXZFbGVtZW50LCBvcHRpb25zOiBFZGl0b3JPcHRpb25zID0gKDxFZGl0b3JPcHRpb25zPnt9KSkgPT4ge1xuICByZXR1cm4gbmV3IEVkaXRvcihlbGVtLCBvcHRpb25zKTtcbn07XG5cbmV4cG9ydCB7IEVkaXRvciwgRWRpdG9yT3B0aW9ucywgUmF3QmxvY2ssIFJhd0hlYWRlckJsb2NrLCBSYXdJbWFnZUJsb2NrLCBSYXdRdW90ZUJsb2NrLCBSYXdUZXh0QmxvY2ssIFJhd1ZpZGVvQmxvY2sgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==