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
        _this.setupListeners();
        _this.enableNewLinePrevention();
        _this.enableAutoresizing();
        return _this;
    }
    /**
     * Setup input listeners, including the debounced onChange
     */
    HeaderBlock.prototype.setupListeners = function () {
        var _this = this;
        this.textarea.addEventListener('input', function () {
            _this.debouncedTriggerOnChange(); // This is inherited from TextBasedBlock
        });
    };
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
        return rawBlock.type === TYPE;
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
        _this.inputFile.type = 'file';
        _this.inputFile.accept = 'image/*';
        _this.debouncedTriggerOnChange = _this.debounce(function () {
            _this.triggerOnChange();
        }, 300);
        _this.setupListeners();
        _this.addDragAndDropListeners(); // Restore drag and drop functionality
        _this.updateView();
        return _this;
    }
    ImageBlock.prototype.setupListeners = function () {
        var _this = this;
        this.inputFile.onchange = function (event) {
            var target = event.target;
            _this.handleFiles(target.files);
        };
        this.uploadPanel.onclick = function () {
            _this.inputFile.click();
        };
    };
    ImageBlock.prototype.addDragAndDropListeners = function () {
        var _this = this;
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
        this.uploadPanel.addEventListener('drop', function (event) {
            var dt = event.dataTransfer;
            var files = dt === null || dt === void 0 ? void 0 : dt.files;
            if (files) {
                _this.handleFiles(files);
            }
        });
    };
    ImageBlock.prototype.handleFiles = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        this.startLoading();
        var successCallback = function (url) {
            _this.stopLoading();
            _this.url = url;
            _this.updateView();
            _this.debouncedTriggerOnChange(); // Trigger onChange
        };
        var failCallback = function (error) {
            _this.stopLoading();
        };
        this.editor.options.uploadImage(files[0], successCallback, failCallback);
        this.inputFile.value = '';
    };
    /**
     * Triggers the editor's onChange callback with the updated content
     */
    ImageBlock.prototype.triggerOnChange = function () {
        if (this.editor.options.onChange) {
            this.editor.options.onChange(this.editor.getContent());
        }
    };
    /**
     * Debounce utility to delay execution of a function
     */
    ImageBlock.prototype.debounce = function (func, wait) {
        var timeout;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                func.apply(void 0, args);
            }, wait);
        };
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
        return ('draggable' in this.uploadPanel ||
            ('ondragstart' in this.uploadPanel && 'ondrop' in this.uploadPanel));
    };
    ImageBlock.prototype.preventDefaults = function (e) {
        e.preventDefault();
        e.stopPropagation();
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
        _this.setupListeners();
        _this.enableNewLinePrevention();
        _this.enableAutoresizing();
        return _this;
    }
    /**
     * Setup input listeners, including the debounced onChange
     */
    QuoteBlock.prototype.setupListeners = function () {
        var _this = this;
        this.textarea.addEventListener('input', function () {
            _this.debouncedTriggerOnChange(); // This is inherited from TextBasedBlock
        });
    };
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
    function TextBasedBlock(editor) {
        var _this = _super.call(this, editor) || this;
        _this.editor = editor;
        _this.textarea = null; // textarea is now nullable
        // Debounce the onChange method with a 300ms delay
        _this.debouncedTriggerOnChange = _this.debounce(function () {
            _this.triggerOnChange();
        }, 300);
        return _this;
    }
    /**
     * Redraw the block and trigger input events for proper resizing
     */
    TextBasedBlock.prototype.redraw = function () {
        if (!this.textarea) {
            return;
        }
        var evt = document.createEvent("Event");
        evt.initEvent("input", true, true);
        this.textarea.dispatchEvent(evt);
    };
    /**
     * Prevents new lines in the textarea (enter key is disabled)
     */
    TextBasedBlock.prototype.enableNewLinePrevention = function () {
        this.textarea.addEventListener("keypress", function (ev) {
            // 13 is the enter key
            if (ev.keyCode === 13) {
                ev.preventDefault();
            }
        });
    };
    /**
     * Automatically resizes the textarea to fit its content
     */
    TextBasedBlock.prototype.enableAutoresizing = function () {
        var _this = this;
        if (!this.textarea) {
            return;
        }
        this.textarea.addEventListener("input", function () {
            if (_this.textarea.scrollHeight > 10) {
                _this.textarea.style.height = "auto";
                _this.textarea.style.height = "".concat(_this.textarea.scrollHeight, "px");
            }
        });
        window.addEventListener("DOMContentLoaded", function () {
            _this.redraw();
        }, false);
        setTimeout(function () {
            _this.redraw();
        }, 1);
    };
    /**
     * Triggers the editor's onChange callback with the updated content
     */
    TextBasedBlock.prototype.triggerOnChange = function () {
        if (this.editor.options.onChange) {
            this.editor.options.onChange(this.editor.getContent());
        }
    };
    /**
     * Debounce utility to delay execution of a function
     */
    TextBasedBlock.prototype.debounce = function (func, wait) {
        var timeout;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                func.apply(void 0, args);
            }, wait);
        };
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
        _this.setupListeners();
        _this.enableAutoresizing();
        return _this;
    }
    /**
     * Setup input listeners, including the debounced onChange
     */
    TextBlock.prototype.setupListeners = function () {
        var _this = this;
        this.textarea.addEventListener('input', function () {
            _this.debouncedTriggerOnChange(); // This is inherited from TextBasedBlock
        });
    };
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
        return rawBlock.type === TYPE;
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
        _this.inputTextLabel.innerHTML = 'Paste a Youtube or Vimeo URL';
        _this.inputTextIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092..."></g></svg>';
        _this.inputText.type = 'text';
        _this.inputText.value = videoUrl;
        // Debounce onChange logic for the video URL
        _this.debouncedTriggerOnChange = _this.debounce(function () {
            _this.triggerOnChange();
        }, 300);
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
    /**
     * Update the view based on the video URL.
     */
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
        this.debouncedTriggerOnChange(); // Trigger onChange
    };
    /**
     * Trigger the editor's onChange callback with the updated content.
     */
    VideoBlock.prototype.triggerOnChange = function () {
        if (this.editor.options.onChange) {
            this.editor.options.onChange(this.editor.getContent());
        }
    };
    /**
     * Debounce utility to delay execution of a function.
     */
    VideoBlock.prototype.debounce = function (func, wait) {
        var timeout;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                func.apply(void 0, args);
            }, wait);
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmRldi5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7O0FDVm1DO0FBWW5DO0lBT0UsZUFBbUIsTUFBYztRQUFqQyxpQkEyQkM7UUEzQmtCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOakMsU0FBSSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELGNBQVMsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxpQkFBWSxHQUFvQixRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELGVBQVUsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUl6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksNkNBQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFZCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLHNIQUFzSDtZQUNsSixtSUFBbUk7WUFDbkksc0pBQXNKO1lBQ3RKLDhKQUE4SjtZQUM5SixvS0FBb0s7WUFDcEssdUZBQXVGO1lBQ3ZGLGVBQWUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUc7WUFDMUIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxNQUFNLElBQUksSUFBSTtnQkFDaEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxzQkFBTSxHQUFOLGNBQVUsQ0FBQztJQUlYLHFCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRpRDtBQUVsRCxJQUFNLElBQUksR0FBVyxRQUFRLENBQUM7QUFNOUI7SUFBQTtJQVNBLENBQUM7SUFSQyxvQ0FBUSxHQUFSLFVBQVMsUUFBa0I7UUFDekIsT0FBTyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsaUNBQUssR0FBTCxVQUFNLFFBQWtCLEVBQUUsTUFBYztRQUN0QyxJQUFJLGNBQWMsR0FBRyxRQUEwQixDQUFDO1FBQ2hELE9BQU8sSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDOztBQUVEO0lBQWlDLCtCQUFjO0lBSTdDLHFCQUFtQixNQUFjLEVBQVMsT0FBZTtRQUN2RCxrQkFBSyxZQUFDLE1BQU0sQ0FBQyxTQUFDO1FBREcsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGFBQU8sR0FBUCxPQUFPLENBQVE7UUFGekQsY0FBUSxHQUF3QixRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBSWpFLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUM5RCxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFDdkYsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUN2QixLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDO1FBRXZDLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixLQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzs7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssb0NBQWMsR0FBdEI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQ3RDLEtBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsd0NBQXdDO1FBQzNFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJCQUFLLEdBQUw7UUFDRSxnQkFBSyxDQUFDLEtBQUssV0FBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsbUNBQWEsR0FBYjtRQUNFLElBQUksR0FBRyxHQUFtQjtZQUN4QixJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7U0FDN0IsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxDQXhDZ0MsNkRBQWMsR0F3QzlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RHNEO0FBRXZELElBQU0sSUFBSSxHQUFXLE9BQU8sQ0FBQztBQU03QjtJQUFBO0lBU0EsQ0FBQztJQVJDLG1DQUFRLEdBQVIsVUFBUyxRQUFrQjtRQUN6QixPQUFPLFFBQVEsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQ0FBSyxHQUFMLFVBQU0sUUFBa0IsRUFBRSxNQUFjO1FBQ3RDLElBQUksYUFBYSxHQUFHLFFBQXlCLENBQUM7UUFDOUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDSCx1QkFBQztBQUFELENBQUM7O0FBRUQ7SUFBZ0MsOEJBQUs7SUFhbkMsb0JBQW1CLE1BQWMsRUFBUyxHQUFXO1FBQ25ELGtCQUFLLFlBQUMsTUFBTSxDQUFDLFNBQUM7UUFERyxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsU0FBRyxHQUFILEdBQUcsQ0FBUTtRQVpyRCxpQkFBVyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELGdCQUFVLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsaUJBQVcsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxrQkFBWSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLGlCQUFXLEdBQW9CLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsZUFBUyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlELGdCQUFVLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsU0FBRyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBT3BELEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQy9DLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRW5ELEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDcEUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDekUsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDN0UsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFFekUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsa0lBQWtJO1lBQzVKLGNBQWM7WUFDZCwwREFBMEQ7WUFDMUQscUVBQXFFO1lBQ3JFLHdFQUF3RTtZQUN4RSxzQ0FBc0M7WUFDdEMsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZix3RUFBd0U7WUFDeEUscUNBQXFDO1lBQ3JDLHNDQUFzQztZQUN0QyxtQkFBbUI7WUFDbkIsd0dBQXdHO1lBQ3hHLHFEQUFxRDtZQUNyRCxnQkFBZ0I7WUFDaEIsNHBCQUE0cEI7WUFDNXBCLGtJQUFrSTtZQUNsSSxZQUFZO1lBQ1osVUFBVSxDQUFDO1FBRWIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzdCLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUVsQyxLQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQztZQUM1QyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLEtBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsc0NBQXNDO1FBQ3RFLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7SUFDcEIsQ0FBQztJQUVPLG1DQUFjLEdBQXRCO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFDLEtBQVk7WUFDckMsSUFBSSxNQUFNLEdBQXNCLEtBQUssQ0FBQyxNQUFPLENBQUM7WUFDOUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUc7WUFDekIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sNENBQXVCLEdBQS9CO1FBQUEsaUJBd0JDO1FBdkJDLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFTO1lBQzlELEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUUsQ0FBQyxDQUFDLENBQUM7UUFFSCxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQVM7WUFDekMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7Z0JBQzNDLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1lBQzlFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQVM7WUFDckMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7Z0JBQzNDLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1lBQ2pGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQWdCO1lBQ3pELElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDNUIsSUFBSSxLQUFLLEdBQUcsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLEtBQUssQ0FBQztZQUN0QixJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNWLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdDQUFXLEdBQVgsVUFBWSxLQUFlO1FBQTNCLGlCQWtCQztRQWpCQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU87UUFFL0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLElBQU0sZUFBZSxHQUFHLFVBQUMsR0FBVztZQUNsQyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDZixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQyxtQkFBbUI7UUFDdEQsQ0FBQyxDQUFDO1FBRUYsSUFBTSxZQUFZLEdBQUcsVUFBQyxLQUFhO1lBQ2pDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssb0NBQWUsR0FBdkI7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLDZCQUFRLEdBQWhCLFVBQWlCLElBQThCLEVBQUUsSUFBWTtRQUMzRCxJQUFJLE9BQXNDLENBQUM7UUFDM0MsT0FBTztZQUFDLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxVQUFVLENBQUM7Z0JBQ25CLElBQUksZUFBSSxJQUFJLEVBQUU7WUFDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7SUFDbEQsQ0FBQztJQUVELGdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUMsQ0FBQztJQUVELHFDQUFnQixHQUFoQjtRQUNFLE9BQU8sQ0FDTCxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVc7WUFDL0IsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUNwRSxDQUFDO0lBQ0osQ0FBQztJQUVELG9DQUFlLEdBQWYsVUFBZ0IsQ0FBUTtRQUN0QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwrQkFBVSxHQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMxQyxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQyxDQUFDO0lBQ0gsQ0FBQztJQUVELDBCQUFLLEdBQUw7UUFDRSxnQkFBSyxDQUFDLEtBQUssV0FBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxrQ0FBYSxHQUFiO1FBQ0UsSUFBSSxHQUFHLEdBQWtCO1lBQ3ZCLElBQUksRUFBRSxJQUFJO1lBQ1YsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1NBQ2QsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxDQTdMK0IseUNBQUssR0E2THBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTWlEO0FBRWxELElBQU0sSUFBSSxHQUFXLE9BQU8sQ0FBQztBQU03QjtJQUFBO0lBU0EsQ0FBQztJQVJDLG1DQUFRLEdBQVIsVUFBUyxRQUFrQjtRQUN6QixPQUFPLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBSyxHQUFMLFVBQU0sUUFBa0IsRUFBRSxNQUFjO1FBQ3RDLElBQUksYUFBYSxHQUFHLFFBQXlCLENBQUM7UUFDOUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDSCx1QkFBQztBQUFELENBQUM7O0FBRUQ7SUFBZ0MsOEJBQWM7SUFJNUMsb0JBQW1CLE1BQWMsRUFBUyxPQUFlO1FBQ3ZELGtCQUFLLFlBQUMsTUFBTSxDQUFDLFNBQUM7UUFERyxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZ6RCxjQUFRLEdBQXdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFJakUsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDOUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3RGLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUNwQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDdkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQztRQUV2QyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsS0FBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7O0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNLLG1DQUFjLEdBQXRCO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUN0QyxLQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLHdDQUF3QztRQUMzRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0UsZ0JBQUssQ0FBQyxLQUFLLFdBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGtDQUFhLEdBQWI7UUFDRSxJQUFJLEdBQUcsR0FBa0I7WUFDdkIsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1NBQzdCLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQ0F4QytCLDZEQUFjLEdBd0M3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RCtCO0FBR2hDO0lBQTZDLGtDQUFLO0lBS2hELHdCQUFtQixNQUFjO1FBQy9CLGtCQUFLLFlBQUMsTUFBTSxDQUFDLFNBQUM7UUFERyxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBSmpDLGNBQVEsR0FBK0IsSUFBSSxDQUFDLENBQUMsMkJBQTJCO1FBT3RFLGtEQUFrRDtRQUNsRCxLQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQztZQUM1QyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQUNWLENBQUM7SUFFRDs7T0FFRztJQUNILCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0RBQXVCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBQyxFQUFFO1lBQzVDLHNCQUFzQjtZQUN0QixJQUFLLEVBQW9CLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRSxDQUFDO2dCQUN6QyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMkNBQWtCLEdBQWxCO1FBQUEsaUJBdUJDO1FBdEJDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkIsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUN0QyxJQUFJLEtBQUksQ0FBQyxRQUFTLENBQUMsWUFBWSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUNyQyxLQUFJLENBQUMsUUFBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNyQyxLQUFJLENBQUMsUUFBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsVUFBRyxLQUFJLENBQUMsUUFBUyxDQUFDLFlBQVksT0FBSSxDQUFDO1lBQ25FLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FDckIsa0JBQWtCLEVBQ2xCO1lBQ0UsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsRUFDRCxLQUFLLENBQ04sQ0FBQztRQUVGLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQ7O09BRUc7SUFDSyx3Q0FBZSxHQUF2QjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN6RCxDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ssaUNBQVEsR0FBaEIsVUFBaUIsSUFBOEIsRUFBRSxJQUFZO1FBQzNELElBQUksT0FBc0MsQ0FBQztRQUMzQyxPQUFPO1lBQUMsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUNwQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEIsT0FBTyxHQUFHLFVBQVUsQ0FBQztnQkFDbkIsSUFBSSxlQUFJLElBQUksRUFBRTtZQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLENBdkY0Qyx5Q0FBSyxHQXVGakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGbUQ7QUFFcEQsSUFBTSxJQUFJLEdBQVcsTUFBTSxDQUFDO0FBTTVCO0lBQUE7SUFTQSxDQUFDO0lBUkMsa0NBQVEsR0FBUixVQUFTLFFBQWtCO1FBQ3pCLE9BQU8sUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELCtCQUFLLEdBQUwsVUFBTSxRQUFrQixFQUFFLE1BQWM7UUFDdEMsSUFBSSxZQUFZLEdBQUcsUUFBd0IsQ0FBQztRQUM1QyxPQUFPLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUErQiw2QkFBYztJQUkzQyxtQkFBbUIsTUFBYyxFQUFTLE9BQWU7UUFDdkQsa0JBQUssWUFBQyxNQUFNLENBQUMsU0FBQztRQURHLFlBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxhQUFPLEdBQVAsT0FBTyxDQUFRO1FBRnpELGNBQVEsR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUlqRSxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM5QyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDckYsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUN2QixLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDO1FBRXZDLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzs7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssa0NBQWMsR0FBdEI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQ3RDLEtBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsd0NBQXdDO1FBQzNFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDRSxnQkFBSyxDQUFDLEtBQUssV0FBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsaUNBQWEsR0FBYjtRQUNFLElBQUksR0FBRyxHQUFpQjtZQUN0QixJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7U0FDN0IsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxDQXZDOEIsNkRBQWMsR0F1QzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRHNEO0FBRXZELElBQU0sSUFBSSxHQUFXLE9BQU8sQ0FBQztBQU03QjtJQUFBO0lBU0EsQ0FBQztJQVJDLG1DQUFRLEdBQVIsVUFBUyxRQUFrQjtRQUN6QixPQUFPLFFBQVEsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQ0FBSyxHQUFMLFVBQU0sUUFBa0IsRUFBRSxNQUFjO1FBQ3RDLElBQUksYUFBYSxHQUFHLFFBQXlCLENBQUM7UUFDOUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDSCx1QkFBQztBQUFELENBQUM7O0FBRUQ7SUFBZ0MsOEJBQUs7SUFjbkMsb0JBQW1CLE1BQWMsRUFBUyxRQUFnQjtRQUN4RCxrQkFBSyxZQUFDLE1BQU0sQ0FBQyxTQUFDO1FBREcsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGNBQVEsR0FBUixRQUFRLENBQVE7UUFaMUQsaUJBQVcsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCx3QkFBa0IsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRSxvQkFBYyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELG1CQUFhLEdBQW9CLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsZUFBUyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlELGdCQUFVLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsZUFBUyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlELGlCQUFXLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFNaEUsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDL0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFFaEUsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV2QyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUVuQyxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEQsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEQsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDcEUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQztRQUM1RixLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMkRBQTJELENBQUMsQ0FBQztRQUMvRixLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUM3RixLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMkRBQTJELENBQUMsQ0FBQztRQUMxRixLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVsRCxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztRQUMvRCxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxpTEFBaUwsQ0FBQztRQUNqTixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDN0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBRWhDLDRDQUE0QztRQUM1QyxLQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQztZQUM1QyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBQyxLQUFZO1lBQ3JDLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQztRQUVGLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7SUFDcEIsQ0FBQztJQUVNLDJCQUFnQixHQUF2QixVQUF3QixHQUFXO1FBQ2pDLElBQUksTUFBTSxHQUFHLCtFQUErRSxDQUFDO1FBQzdGLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFTSx5QkFBYyxHQUFyQixVQUFzQixHQUFXO1FBQy9CLElBQUksTUFBTSxHQUFHLGdDQUFnQyxDQUFDO1FBQzlDLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCwrQkFBVSxHQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQzFDLENBQUM7aUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO2dCQUM3QyxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyx3Q0FBaUMsU0FBUyxXQUFRLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUVoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQzFDLENBQUM7aUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcseUNBQWtDLE9BQU8sNkJBQTBCLENBQUM7Z0JBQzNGLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUVoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQzFDLENBQUM7UUFDSCxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQyxDQUFDO1FBRUQsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsQ0FBQyxtQkFBbUI7SUFDdEQsQ0FBQztJQUVEOztPQUVHO0lBQ0ssb0NBQWUsR0FBdkI7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLDZCQUFRLEdBQWhCLFVBQWlCLElBQThCLEVBQUUsSUFBWTtRQUMzRCxJQUFJLE9BQXNDLENBQUM7UUFDM0MsT0FBTztZQUFDLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxVQUFVLENBQUM7Z0JBQ25CLElBQUksZUFBSSxJQUFJLEVBQUU7WUFDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELDBCQUFLLEdBQUw7UUFDRSxnQkFBSyxDQUFDLEtBQUssV0FBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxrQ0FBYSxHQUFiO1FBQ0UsSUFBSSxHQUFHLEdBQWtCO1lBQ3ZCLElBQUksRUFBRSxJQUFJO1lBQ1YsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ25CLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQ0ExSStCLHlDQUFLLEdBMElwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0o4QztBQUNBO0FBQ0U7QUFDSjtBQUVFO0FBRy9DO0lBV0UsaUJBQW1CLE1BQWMsRUFBUyxLQUFZO1FBQXRELGlCQXlEQztRQXpEa0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQU87UUFWdEQsU0FBSSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELGNBQVMsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxpQkFBWSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELGlCQUFZLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsZ0JBQVcsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxpQkFBWSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELGVBQVUsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUt6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxjQUFRLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLCtTQUErUyxDQUFDO1FBQzlVLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHO1lBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSw0REFBVyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxraUJBQWtpQixDQUFDO1FBQ2hrQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRztZQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksMERBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsaVNBQWlTLENBQUM7UUFDOVQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUc7WUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLHdEQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsRCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTdDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLG8xQkFBbzFCLENBQUM7WUFDbDNCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHO2dCQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksMERBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuRCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLGlCQUFpQixDQUFDO1FBQ3RGLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLDYyQ0FBNjJDLENBQUM7UUFDMzRDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSwwREFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGlDQUFlLEdBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxNQUFNO1lBQ3hDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7WUFFdkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELG1DQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsT0FBTztJQUN2QyxDQUFDO0lBRUQsaUNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUN2QyxDQUFDO0lBRUQsNkJBQVcsR0FBWDtRQUNFLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNwRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R2lDO0FBRW1CO0FBQ0E7QUFDRTtBQUNKO0FBQ0U7QUFFckQsSUFBTSxNQUFNLEdBQXVCO0lBQ2pDLElBQUksOERBQWUsRUFBRTtJQUNyQixJQUFJLGtFQUFpQixFQUFFO0lBQ3ZCLElBQUksZ0VBQWdCLEVBQUU7SUFDdEIsSUFBSSxnRUFBZ0IsRUFBRTtJQUN0QixJQUFJLGdFQUFnQixFQUFFO0NBQ3ZCLENBQUM7QUFFRixTQUFTLGlCQUFpQixDQUFDLFVBQTJCLEVBQUUsTUFBYztJQUNwRSxJQUFJLE1BQU0sR0FBaUIsRUFBRSxDQUFDO0lBRTlCLEtBQXFCLFVBQVUsRUFBVix5QkFBVSxFQUFWLHdCQUFVLEVBQVYsSUFBVSxFQUFFLENBQUM7UUFBN0IsSUFBSSxRQUFRO1FBQ2YsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLEtBQWtCLFVBQU0sRUFBTixpQkFBTSxFQUFOLG9CQUFNLEVBQU4sSUFBTSxFQUFFLENBQUM7WUFBdEIsSUFBSSxLQUFLO1lBQ1osSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQzdCLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDM0MsTUFBTTtZQUNSLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxvQ0FBNkIsUUFBUSxDQUFDLElBQUksZUFBWSxDQUFDLENBQUM7UUFDdkUsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBUUQ7SUFJRSxnQkFDUyxJQUFvQixFQUNwQixPQUFzQjtRQUR0QixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0JBQUcsR0FBSCxVQUFJLEtBQVksRUFBRSxXQUFrQjtRQUNsQyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN4QyxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ2hDLE1BQU07Z0JBQ1IsQ0FBQztZQUNILENBQUM7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sS0FBWTtRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDcEIsTUFBTTtZQUNSLENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0UsS0FBa0IsVUFBVyxFQUFYLFNBQUksQ0FBQyxNQUFNLEVBQVgsY0FBVyxFQUFYLElBQVcsRUFBRSxDQUFDO1lBQTNCLElBQUksS0FBSztZQUNaLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUVELDJCQUFVLEdBQVY7UUFDRSxJQUFJLFVBQVUsR0FBb0IsRUFBRSxDQUFDO1FBQ3JDLEtBQWtCLFVBQVcsRUFBWCxTQUFJLENBQUMsTUFBTSxFQUFYLGNBQVcsRUFBWCxJQUFXLEVBQUUsQ0FBQztZQUEzQixJQUFJLEtBQUs7WUFDWixVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsaUNBQWdCLEdBQWhCLFVBQWlCLEtBQVk7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDbkQsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztZQUM3RCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTyxnQ0FBZSxHQUF2QjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLHFDQUFxQztRQUNqRixDQUFDO0lBQ0gsQ0FBQztJQUVPLHVCQUFNLEdBQWQ7UUFDRSxLQUFrQixVQUFXLEVBQVgsU0FBSSxDQUFDLE1BQU0sRUFBWCxjQUFXLEVBQVgsSUFBVyxFQUFFLENBQUM7WUFBM0IsSUFBSSxLQUFLO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksNkNBQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7VUM3SEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05xRDtBQVEvQyxNQUFPLENBQUMsYUFBYSxHQUFHLFVBQUMsSUFBb0IsRUFBRSxPQUE0QztJQUE1QyxvQ0FBeUMsRUFBRztJQUMvRixPQUFPLElBQUksa0RBQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRW9IIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWRpdG9yL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvdHMvZWRpdG9yL2Jsb2NrL2Jsb2NrLnRzIiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9lZGl0b3IvYmxvY2svaGVhZGVyLWJsb2NrLnRzIiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9lZGl0b3IvYmxvY2svaW1hZ2UtYmxvY2sudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL3RzL2VkaXRvci9ibG9jay9xdW90ZS1ibG9jay50cyIsIndlYnBhY2s6Ly9lZGl0b3IvLi9zcmMvdHMvZWRpdG9yL2Jsb2NrL3RleHQtYmFzZWQtYmxvY2sudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL3RzL2VkaXRvci9ibG9jay90ZXh0LWJsb2NrLnRzIiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9lZGl0b3IvYmxvY2svdmlkZW8tYmxvY2sudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yLy4vc3JjL3RzL2VkaXRvci9jb250cm9sLnRzIiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9lZGl0b3IvZWRpdG9yLnRzIiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lZGl0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VkaXRvci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VkaXRvci8uL3NyYy90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJlZGl0b3JcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZWRpdG9yXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCB7Q29udHJvbH0gZnJvbSAnLi4vY29udHJvbCc7XG5pbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vZWRpdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBSYXdCbG9jayB7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCbG9ja1JlYWRlciB7XG4gIGNhblBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jayk6IEJvb2xlYW5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCbG9jayB7XG4gIGVsZW06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVsZXRlQnV0dG9uOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGRlbGV0ZUljb246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRyb2w6IENvbnRyb2w7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yKSB7XG4gICAgdGhpcy5jb250cm9sID0gbmV3IENvbnRyb2woZWRpdG9yLCB0aGlzKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrJyk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbC5lbGVtKTtcbiAgICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIHRoaXMuZWRpdG9yLnNob3dEZWxldGVCdXR0b24odGhpcyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19jb250YWluZXInKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRlbGV0ZUJ1dHRvbik7XG5cbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2NvbnRhaW5lcl9fZGVsZXRlLWJ1dHRvbicpO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIxXCIgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPicgK1xuICAgICAgJzxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5MiAxODh2MjE2YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTI0Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEyVjE4OGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDI0YzYuNjI3ICcgK1xuICAgICAgJzAgMTIgNS4zNzMgMTIgMTJ6bTEwMC0xMmgtMjRjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ2MjE2YzAgNi42MjcgNS4zNzMgMTIgMTIgMTJoMjRjNi42MjcgMCAxMi01LjM3MyAxMi0xMlYxODhjMC02LjYyNy01LjM3My0xMi0xMi0xMnptMTMyLTk2YzEzLjI1NSAnICtcbiAgICAgICcwIDI0IDEwLjc0NSAyNCAyNHYxMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC0yMHYzMzZjMCAyNi41MS0yMS40OSA0OC00OCA0OEg4MGMtMjYuNTEgMC00OC0yMS40OS00OC00OFYxMjhIMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTEyYzAtMTMuMjU1IDEwLjc0NS0yNCAnICtcbiAgICAgICcyNC0yNGg3NC40MTFsMzQuMDE4LTU2LjY5NkE0OCA0OCAwIDAgMSAxNzMuNTg5IDBoMTAwLjgyM2E0OCA0OCAwIDAgMSA0MS4xNiAyMy4zMDRMMzQ5LjU4OSA4MEg0MjR6bS0yNjkuNjExIDBoMTM5LjIyM0wyNzYuMTYgNTAuOTEzQTYgNiAwIDAgMCAyNzEuMDE1IDQ4aC05NC4wMjhhNiAnICtcbiAgICAgICc2IDAgMCAwLTUuMTQ1IDIuOTEzTDE1NC4zODkgODB6TTM2OCAxMjhIODB2MzMwYTYgNiAwIDAgMCA2IDZoMjc2YTYgNiAwIDAgMCA2LTZWMTI4elwiPicgK1xuICAgICAgJzwvcGF0aD48L3N2Zz4nO1xuICAgIHRoaXMuZGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKHRoaXMuZGVsZXRlSWNvbik7XG4gICAgdGhpcy5kZWxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGxldCBhbnN3ZXIgPSBjb25maXJtKFwiWW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgYmxvY2s/XCIpO1xuICAgICAgaWYgKGFuc3dlciA9PSB0cnVlKVxuICAgICAgICB0aGlzLmVkaXRvci5yZW1vdmUodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcmVkcmF3KCkge31cblxuICBhYnN0cmFjdCBnZXRSYXdDb250ZW50KCk6IFJhd0Jsb2NrXG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0b3Iuc2hvd0RlbGV0ZUJ1dHRvbih0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBCbG9ja1JlYWRlciwgUmF3QmxvY2t9IGZyb20gJy4vYmxvY2snXG5pbXBvcnQge1RleHRCYXNlZEJsb2NrfSBmcm9tIFwiLi90ZXh0LWJhc2VkLWJsb2NrXCI7XG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICdoZWFkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhd0hlYWRlckJsb2NrIGV4dGVuZHMgUmF3QmxvY2sge1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJCbG9ja1JlYWRlciBpbXBsZW1lbnRzIEJsb2NrUmVhZGVyIHtcbiAgY2FuUGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIHJhd0Jsb2NrLnR5cGUgPT0gVFlQRTtcbiAgfVxuXG4gIHBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jaywgZWRpdG9yOiBFZGl0b3IpOiBCbG9jayB7XG4gICAgbGV0IHJhd0hlYWRlckJsb2NrID0gcmF3QmxvY2sgYXMgUmF3SGVhZGVyQmxvY2s7XG4gICAgcmV0dXJuIG5ldyBIZWFkZXJCbG9jayhlZGl0b3IsIHJhd0hlYWRlckJsb2NrLmNvbnRlbnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJCbG9jayBleHRlbmRzIFRleHRCYXNlZEJsb2NrIHtcblxuICB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgY29udGVudDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWRpdG9yKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrJywgJ2VkaXRvci1ibG9ja19fdGV4dCcpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRleHRhcmVhKTtcblxuICAgIHRoaXMudGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19jb250YWluZXJfX2VkaXRvcicsICdlZGl0b3ItYmxvY2tfX2hlYWRlcicpO1xuICAgIHRoaXMudGV4dGFyZWEucGxhY2Vob2xkZXIgPSAnSGVhZGVyJztcbiAgICB0aGlzLnRleHRhcmVhLnJvd3MgPSAxO1xuICAgIHRoaXMudGV4dGFyZWEuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50O1xuXG4gICAgdGhpcy5zZXR1cExpc3RlbmVycygpO1xuICAgIHRoaXMuZW5hYmxlTmV3TGluZVByZXZlbnRpb24oKTtcbiAgICB0aGlzLmVuYWJsZUF1dG9yZXNpemluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIGlucHV0IGxpc3RlbmVycywgaW5jbHVkaW5nIHRoZSBkZWJvdW5jZWQgb25DaGFuZ2VcbiAgICovXG4gIHByaXZhdGUgc2V0dXBMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy50ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIHRoaXMuZGVib3VuY2VkVHJpZ2dlck9uQ2hhbmdlKCk7IC8vIFRoaXMgaXMgaW5oZXJpdGVkIGZyb20gVGV4dEJhc2VkQmxvY2tcbiAgICB9KTtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHN1cGVyLmZvY3VzKCk7XG4gICAgdGhpcy50ZXh0YXJlYS5mb2N1cygpO1xuICB9XG5cbiAgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9jayB7XG4gICAgbGV0IHJhdzogUmF3SGVhZGVyQmxvY2sgPSB7XG4gICAgICB0eXBlOiBUWVBFLFxuICAgICAgY29udGVudDogdGhpcy50ZXh0YXJlYS52YWx1ZVxuICAgIH07XG4gICAgcmV0dXJuIHJhdztcbiAgfVxufSIsImltcG9ydCB7IEVkaXRvciB9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQgeyBCbG9jaywgUmF3QmxvY2ssIEJsb2NrUmVhZGVyIH0gZnJvbSAnLi9ibG9jayc7XG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICdpbWFnZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmF3SW1hZ2VCbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUJsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PT0gVFlQRTtcbiAgfVxuXG4gIHBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jaywgZWRpdG9yOiBFZGl0b3IpOiBCbG9jayB7XG4gICAgbGV0IHJhd0ltYWdlQmxvY2sgPSByYXdCbG9jayBhcyBSYXdJbWFnZUJsb2NrO1xuICAgIHJldHVybiBuZXcgSW1hZ2VCbG9jayhlZGl0b3IsIHJhd0ltYWdlQmxvY2sudXJsKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VCbG9jayBleHRlbmRzIEJsb2NrIHtcbiAgdXBsb2FkUGFuZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwbG9hZEljb246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwbG9hZExhYmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cGxvYWRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxvYWRpbmdJY29uOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGlucHV0RmlsZTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIFxuICBpbWFnZVBhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWc6IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBwcml2YXRlIGRlYm91bmNlZFRyaWdnZXJPbkNoYW5nZTogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWRpdG9yOiBFZGl0b3IsIHB1YmxpYyB1cmw6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG5cbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZScpO1xuICAgIHRoaXMuaW1nLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19faW1hZ2VfX2ltZycpO1xuXG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkUGFuZWwpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmltYWdlUGFuZWwpO1xuXG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0RmlsZSk7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZEJ1dHRvbik7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZEljb24pO1xuICAgIHRoaXMudXBsb2FkUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRMYWJlbCk7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmxvYWRpbmdJY29uKTtcbiAgICB0aGlzLmltYWdlUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy5pbWcpO1xuXG4gICAgdGhpcy51cGxvYWRQYW5lbC5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlX191cGxvYWQtcGFuZWwnKTtcbiAgICB0aGlzLnVwbG9hZEljb24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZV9fdXBsb2FkLXBhbmVsX19pY29uJyk7XG4gICAgdGhpcy51cGxvYWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZV9fdXBsb2FkLXBhbmVsX19idXR0b24nKTtcbiAgICB0aGlzLmlucHV0RmlsZS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlX191cGxvYWQtcGFuZWxfX2lucHV0Jyk7XG5cbiAgICB0aGlzLnVwbG9hZEljb24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiNTNcIiBoZWlnaHQ9XCI0MlwiIHZpZXdCb3g9XCIwIDAgNTMgNDJcIj5cXG4nICtcbiAgICAgICcgICAgPGRlZnM+XFxuJyArXG4gICAgICAnICAgICAgICA8cGF0aCBpZD1cImJcIiBkPVwiTTEzIDB2MjloMzBWMGgyMHY1M0gwVjBoMTN6XCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPHJlY3QgaWQ9XCJhXCIgd2lkdGg9XCI1M1wiIGhlaWdodD1cIjM0XCIgeD1cIjVcIiB5PVwiMTJcIiByeD1cIjJcIi8+XFxuJyArXG4gICAgICAnICAgICAgICA8bWFzayBpZD1cImRcIiB3aWR0aD1cIjUzXCIgaGVpZ2h0PVwiMzRcIiB4PVwiMFwiIHk9XCIwXCIgZmlsbD1cIiNmZmZcIj5cXG4nICtcbiAgICAgICcgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjYVwiLz5cXG4nICtcbiAgICAgICcgICAgICAgIDwvbWFzaz5cXG4nICtcbiAgICAgICcgICAgPC9kZWZzPlxcbicgK1xuICAgICAgJyAgICA8ZyBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUgLTQpXCI+XFxuJyArXG4gICAgICAnICAgICAgICA8bWFzayBpZD1cImNcIiBmaWxsPVwiI2ZmZlwiPlxcbicgK1xuICAgICAgJyAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNiXCIvPlxcbicgK1xuICAgICAgJyAgICAgICAgPC9tYXNrPlxcbicgK1xuICAgICAgJyAgICAgICAgPGcgZmlsbC1ydWxlPVwibm9uemVyb1wiIHN0cm9rZT1cIiM2NjZcIiBzdHJva2UtZGFzaGFycmF5PVwiNCwyXCIgc3Ryb2tlLXdpZHRoPVwiNFwiIG1hc2s9XCJ1cmwoI2MpXCI+XFxuJyArXG4gICAgICAnICAgICAgICAgICAgPHVzZSBtYXNrPVwidXJsKCNkKVwiIHhsaW5rOmhyZWY9XCIjYVwiLz5cXG4nICtcbiAgICAgICcgICAgICAgIDwvZz5cXG4nICtcbiAgICAgICcgICAgICAgIDxwYXRoIGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIGQ9XCJNMTUuMjgzIDRDMTQuMDM1IDQgMTMgNS4wODggMTMgNi40djE5LjJjMCAxLjMxMiAxLjAzNSAyLjQgMi4yODMgMi40aDI1LjQzNEM0MS45NjUgMjggNDMgMjYuOTEyIDQzIDI1LjZWNi40QzQzIDUuMDg4IDQxLjk2NSA0IDQwLjcxNyA0SDE1LjI4M3ptLjA0MiAyaDI1LjM1Yy4xOTcgMCAuMzI1LjEzNS4zMjUuMzQ0VjIwbC00LjkxNi00LjE1NWEuOTYuOTYgMCAwIDAtMS4xNTctLjA1NGwtNC42MTEgMy4zNS02LjI1Ny01LjM1N2EuOTUuOTUgMCAwIDAtLjcyLS4yMjYuOTUuOTUgMCAwIDAtLjQ0OC4xODNMMTUgMTkuNDk1VjYuMzQ0YzAtLjIwOS4xMjgtLjM0NC4zMjUtLjM0NHpNMzAgOWMtMS42NDUgMC0zIDEuMzU1LTMgM3MxLjM1NSAzIDMgMyAzLTEuMzU1IDMtMy0xLjM1NS0zLTMtM3ptMCAyYy41NjQgMCAxIC40MzYgMSAxIDAgLjU2NC0uNDM2IDEtMSAxLS41NjQgMC0xLS40MzYtMS0xIDAtLjU2NC40MzYtMSAxLTF6bS02LjU5IDVsNi4yNTYgNS4zMmEuOTYzLjk2MyAwIDAgMCAxLjE1Ny4wNTRsNC42MDEtMy4zMzNMNDEgMjIuNzN2Mi45MjdjMCAuMjA3LS4xMjguMzQyLS4zMjUuMzQyaC0yNS4zNWMtLjE5NyAwLS4zMjUtLjEzNS0uMzI1LS4zNDJWMjIuMWw4LjQxLTYuMXpcIi8+XFxuJyArXG4gICAgICAnICAgICAgICA8cGF0aCBzdHJva2U9XCIjNjY2XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMzQgMjRsLTMgMTFoNGwxIDVoM2wtMS01aDR6XCIvPlxcbicgK1xuICAgICAgJyAgICA8L2c+XFxuJyArXG4gICAgICAnPC9zdmc+XFxuJztcbiAgICBcbiAgICB0aGlzLmlucHV0RmlsZS50eXBlID0gJ2ZpbGUnO1xuICAgIHRoaXMuaW5wdXRGaWxlLmFjY2VwdCA9ICdpbWFnZS8qJztcblxuICAgIHRoaXMuZGVib3VuY2VkVHJpZ2dlck9uQ2hhbmdlID0gdGhpcy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXJPbkNoYW5nZSgpO1xuICAgIH0sIDMwMCk7XG5cbiAgICB0aGlzLnNldHVwTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5hZGREcmFnQW5kRHJvcExpc3RlbmVycygpOyAvLyBSZXN0b3JlIGRyYWcgYW5kIGRyb3AgZnVuY3Rpb25hbGl0eVxuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cExpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RmlsZS5vbmNoYW5nZSA9IChldmVudDogRXZlbnQpOiBhbnkgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9ICg8SFRNTElucHV0RWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgICAgdGhpcy5oYW5kbGVGaWxlcyh0YXJnZXQuZmlsZXMpO1xuICAgIH07XG5cbiAgICB0aGlzLnVwbG9hZFBhbmVsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlucHV0RmlsZS5jbGljaygpO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGFkZERyYWdBbmREcm9wTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJywgJ2RyYWdsZWF2ZScsICdkcm9wJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy5wcmV2ZW50RGVmYXVsdHMsIGZhbHNlKTtcbiAgICB9KTtcblxuICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKCkgPT4ge1xuICAgICAgICB0aGlzLnVwbG9hZFBhbmVsLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19faW1hZ2VfX3VwbG9hZC1wYW5lbC0tYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIFsnZHJhZ2xlYXZlJywgJ2Ryb3AnXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLnVwbG9hZFBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudXBsb2FkUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdG9yLWJsb2NrX19pbWFnZV9fdXBsb2FkLXBhbmVsLS1hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy51cGxvYWRQYW5lbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50OiBEcmFnRXZlbnQpID0+IHtcbiAgICAgIGxldCBkdCA9IGV2ZW50LmRhdGFUcmFuc2ZlcjtcbiAgICAgIGxldCBmaWxlcyA9IGR0Py5maWxlcztcbiAgICAgIGlmIChmaWxlcykge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbGVzKGZpbGVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUZpbGVzKGZpbGVzOiBGaWxlTGlzdCk6IHZvaWQge1xuICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIHRoaXMuc3RhcnRMb2FkaW5nKCk7XG5cbiAgICBjb25zdCBzdWNjZXNzQ2FsbGJhY2sgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgICB0aGlzLmRlYm91bmNlZFRyaWdnZXJPbkNoYW5nZSgpOyAvLyBUcmlnZ2VyIG9uQ2hhbmdlXG4gICAgfTtcblxuICAgIGNvbnN0IGZhaWxDYWxsYmFjayA9IChlcnJvcjogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgfTtcblxuICAgIHRoaXMuZWRpdG9yLm9wdGlvbnMudXBsb2FkSW1hZ2UoZmlsZXNbMF0sIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbENhbGxiYWNrKTtcbiAgICB0aGlzLmlucHV0RmlsZS52YWx1ZSA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHRoZSBlZGl0b3IncyBvbkNoYW5nZSBjYWxsYmFjayB3aXRoIHRoZSB1cGRhdGVkIGNvbnRlbnRcbiAgICovXG4gIHByaXZhdGUgdHJpZ2dlck9uQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLmVkaXRvci5vcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLmVkaXRvci5vcHRpb25zLm9uQ2hhbmdlKHRoaXMuZWRpdG9yLmdldENvbnRlbnQoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlYm91bmNlIHV0aWxpdHkgdG8gZGVsYXkgZXhlY3V0aW9uIG9mIGEgZnVuY3Rpb25cbiAgICovXG4gIHByaXZhdGUgZGVib3VuY2UoZnVuYzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLCB3YWl0OiBudW1iZXIpIHtcbiAgICBsZXQgdGltZW91dDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG4gICAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmdW5jKC4uLmFyZ3MpO1xuICAgICAgfSwgd2FpdCk7XG4gICAgfTtcbiAgfVxuXG4gIHN0YXJ0TG9hZGluZygpOiB2b2lkIHtcbiAgICB0aGlzLnVwbG9hZExhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5sb2FkaW5nSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIH1cblxuICBzdG9wTG9hZGluZygpOiB2b2lkIHtcbiAgICB0aGlzLnVwbG9hZExhYmVsLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICB0aGlzLmxvYWRpbmdJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBpc0FkdmFuY2VkVXBsb2FkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAnZHJhZ2dhYmxlJyBpbiB0aGlzLnVwbG9hZFBhbmVsIHx8XG4gICAgICAoJ29uZHJhZ3N0YXJ0JyBpbiB0aGlzLnVwbG9hZFBhbmVsICYmICdvbmRyb3AnIGluIHRoaXMudXBsb2FkUGFuZWwpXG4gICAgKTtcbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0cyhlOiBFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgdXBkYXRlVmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMudXJsO1xuICAgICAgdGhpcy5pbWFnZVBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltYWdlUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgc3VwZXIuZm9jdXMoKTtcbiAgfVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd0ltYWdlQmxvY2sgPSB7XG4gICAgICB0eXBlOiBUWVBFLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH07XG4gICAgcmV0dXJuIHJhdztcbiAgfVxufVxuIiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBSYXdCbG9jaywgQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2snXG5pbXBvcnQge1RleHRCYXNlZEJsb2NrfSBmcm9tIFwiLi90ZXh0LWJhc2VkLWJsb2NrXCI7XG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICdxdW90ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmF3UXVvdGVCbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUXVvdGVCbG9ja1JlYWRlciBpbXBsZW1lbnRzIEJsb2NrUmVhZGVyIHtcbiAgY2FuUGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIHJhd0Jsb2NrLnR5cGUgPT0gVFlQRTtcbiAgfVxuXG4gIHBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jaywgZWRpdG9yOiBFZGl0b3IpOiBCbG9jayB7XG4gICAgbGV0IHJhd1F1b3RlQmxvY2sgPSByYXdCbG9jayBhcyBSYXdRdW90ZUJsb2NrO1xuICAgIHJldHVybiBuZXcgUXVvdGVCbG9jayhlZGl0b3IsIHJhd1F1b3RlQmxvY2suY29udGVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1b3RlQmxvY2sgZXh0ZW5kcyBUZXh0QmFzZWRCbG9jayB7XG5cbiAgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdGV4dCcpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRleHRhcmVhKTtcblxuICAgIHRoaXMudGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19jb250YWluZXJfX2VkaXRvcicsICdlZGl0b3ItYmxvY2tfX3F1b3RlJyk7XG4gICAgdGhpcy50ZXh0YXJlYS5wbGFjZWhvbGRlciA9ICdRdW90ZSc7XG4gICAgdGhpcy50ZXh0YXJlYS5yb3dzID0gMTtcbiAgICB0aGlzLnRleHRhcmVhLmlubmVySFRNTCA9IHRoaXMuY29udGVudDtcblxuICAgIHRoaXMuc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmVuYWJsZU5ld0xpbmVQcmV2ZW50aW9uKCk7XG4gICAgdGhpcy5lbmFibGVBdXRvcmVzaXppbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBpbnB1dCBsaXN0ZW5lcnMsIGluY2x1ZGluZyB0aGUgZGVib3VuY2VkIG9uQ2hhbmdlXG4gICAqL1xuICBwcml2YXRlIHNldHVwTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIHRoaXMudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmRlYm91bmNlZFRyaWdnZXJPbkNoYW5nZSgpOyAvLyBUaGlzIGlzIGluaGVyaXRlZCBmcm9tIFRleHRCYXNlZEJsb2NrXG4gICAgfSk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBzdXBlci5mb2N1cygpO1xuICAgIHRoaXMudGV4dGFyZWEuZm9jdXMoKTtcbiAgfVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd1F1b3RlQmxvY2sgPSB7XG4gICAgICB0eXBlOiBUWVBFLFxuICAgICAgY29udGVudDogdGhpcy50ZXh0YXJlYS52YWx1ZVxuICAgIH07XG4gICAgcmV0dXJuIHJhdztcbiAgfVxufSIsImltcG9ydCB7IEJsb2NrIH0gZnJvbSBcIi4vYmxvY2tcIjtcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gXCIuLi9lZGl0b3JcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRleHRCYXNlZEJsb2NrIGV4dGVuZHMgQmxvY2sge1xuICB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCB8IG51bGwgPSBudWxsOyAvLyB0ZXh0YXJlYSBpcyBub3cgbnVsbGFibGVcblxuICBwcm90ZWN0ZWQgZGVib3VuY2VkVHJpZ2dlck9uQ2hhbmdlOiAoKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvcikge1xuICAgIHN1cGVyKGVkaXRvcik7XG5cbiAgICAvLyBEZWJvdW5jZSB0aGUgb25DaGFuZ2UgbWV0aG9kIHdpdGggYSAzMDBtcyBkZWxheVxuICAgIHRoaXMuZGVib3VuY2VkVHJpZ2dlck9uQ2hhbmdlID0gdGhpcy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXJPbkNoYW5nZSgpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICAvKipcbiAgICogUmVkcmF3IHRoZSBibG9jayBhbmQgdHJpZ2dlciBpbnB1dCBldmVudHMgZm9yIHByb3BlciByZXNpemluZ1xuICAgKi9cbiAgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy50ZXh0YXJlYSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICBldnQuaW5pdEV2ZW50KFwiaW5wdXRcIiwgdHJ1ZSwgdHJ1ZSk7XG4gICAgdGhpcy50ZXh0YXJlYS5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cblxuICAvKipcbiAgICogUHJldmVudHMgbmV3IGxpbmVzIGluIHRoZSB0ZXh0YXJlYSAoZW50ZXIga2V5IGlzIGRpc2FibGVkKVxuICAgKi9cbiAgZW5hYmxlTmV3TGluZVByZXZlbnRpb24oKTogdm9pZCB7XG4gICAgdGhpcy50ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2KSA9PiB7XG4gICAgICAvLyAxMyBpcyB0aGUgZW50ZXIga2V5XG4gICAgICBpZiAoKGV2IGFzIEtleWJvYXJkRXZlbnQpLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQXV0b21hdGljYWxseSByZXNpemVzIHRoZSB0ZXh0YXJlYSB0byBmaXQgaXRzIGNvbnRlbnRcbiAgICovXG4gIGVuYWJsZUF1dG9yZXNpemluZygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudGV4dGFyZWEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy50ZXh0YXJlYSEuc2Nyb2xsSGVpZ2h0ID4gMTApIHtcbiAgICAgICAgdGhpcy50ZXh0YXJlYSEuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICAgIHRoaXMudGV4dGFyZWEhLnN0eWxlLmhlaWdodCA9IGAke3RoaXMudGV4dGFyZWEhLnNjcm9sbEhlaWdodH1weGA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiRE9NQ29udGVudExvYWRlZFwiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9LCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyB0aGUgZWRpdG9yJ3Mgb25DaGFuZ2UgY2FsbGJhY2sgd2l0aCB0aGUgdXBkYXRlZCBjb250ZW50XG4gICAqL1xuICBwcml2YXRlIHRyaWdnZXJPbkNoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5lZGl0b3Iub3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5lZGl0b3Iub3B0aW9ucy5vbkNoYW5nZSh0aGlzLmVkaXRvci5nZXRDb250ZW50KCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWJvdW5jZSB1dGlsaXR5IHRvIGRlbGF5IGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uXG4gICAqL1xuICBwcml2YXRlIGRlYm91bmNlKGZ1bmM6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCwgd2FpdDogbnVtYmVyKSB7XG4gICAgbGV0IHRpbWVvdXQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuICAgIHJldHVybiAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZnVuYyguLi5hcmdzKTtcbiAgICAgIH0sIHdhaXQpO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEVkaXRvciB9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQgeyBCbG9jaywgQmxvY2tSZWFkZXIsIFJhd0Jsb2NrIH0gZnJvbSAnLi9ibG9jayc7XG5pbXBvcnQgeyBUZXh0QmFzZWRCbG9jayB9IGZyb20gJy4vdGV4dC1iYXNlZC1ibG9jayc7XG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICd0ZXh0JztcblxuZXhwb3J0IGludGVyZmFjZSBSYXdUZXh0QmxvY2sgZXh0ZW5kcyBSYXdCbG9jayB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFRleHRCbG9ja1JlYWRlciBpbXBsZW1lbnRzIEJsb2NrUmVhZGVyIHtcbiAgY2FuUGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIHJhd0Jsb2NrLnR5cGUgPT0gVFlQRTtcbiAgfVxuXG4gIHBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jaywgZWRpdG9yOiBFZGl0b3IpOiBCbG9jayB7XG4gICAgbGV0IHJhd1RleHRCbG9jayA9IHJhd0Jsb2NrIGFzIFJhd1RleHRCbG9jaztcbiAgICByZXR1cm4gbmV3IFRleHRCbG9jayhlZGl0b3IsIHJhd1RleHRCbG9jay5jb250ZW50KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dEJsb2NrIGV4dGVuZHMgVGV4dEJhc2VkQmxvY2sge1xuXG4gIHRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWRpdG9yOiBFZGl0b3IsIHB1YmxpYyBjb250ZW50OiBzdHJpbmcpIHtcbiAgICBzdXBlcihlZGl0b3IpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3RleHQnKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy50ZXh0YXJlYSk7XG5cbiAgICB0aGlzLnRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fY29udGFpbmVyX19lZGl0b3InLCAnZWRpdG9yLWJsb2NrX19ib2R5Jyk7XG4gICAgdGhpcy50ZXh0YXJlYS5wbGFjZWhvbGRlciA9ICdCb2R5IHRleHQnO1xuICAgIHRoaXMudGV4dGFyZWEucm93cyA9IDE7XG4gICAgdGhpcy50ZXh0YXJlYS5pbm5lckhUTUwgPSB0aGlzLmNvbnRlbnQ7XG5cbiAgICB0aGlzLnNldHVwTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5lbmFibGVBdXRvcmVzaXppbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBpbnB1dCBsaXN0ZW5lcnMsIGluY2x1ZGluZyB0aGUgZGVib3VuY2VkIG9uQ2hhbmdlXG4gICAqL1xuICBwcml2YXRlIHNldHVwTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIHRoaXMudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmRlYm91bmNlZFRyaWdnZXJPbkNoYW5nZSgpOyAvLyBUaGlzIGlzIGluaGVyaXRlZCBmcm9tIFRleHRCYXNlZEJsb2NrXG4gICAgfSk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBzdXBlci5mb2N1cygpO1xuICAgIHRoaXMudGV4dGFyZWEuZm9jdXMoKTtcbiAgfVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd1RleHRCbG9jayA9IHtcbiAgICAgIHR5cGU6IFRZUEUsXG4gICAgICBjb250ZW50OiB0aGlzLnRleHRhcmVhLnZhbHVlXG4gICAgfTtcbiAgICByZXR1cm4gcmF3O1xuICB9XG59XG4iLCJpbXBvcnQgeyBFZGl0b3IgfSBmcm9tICcuLi9lZGl0b3InO1xuaW1wb3J0IHsgQmxvY2ssIFJhd0Jsb2NrLCBCbG9ja1JlYWRlciB9IGZyb20gJy4vYmxvY2snO1xuXG5jb25zdCBUWVBFOiBzdHJpbmcgPSAndmlkZW8nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhd1ZpZGVvQmxvY2sgZXh0ZW5kcyBSYXdCbG9jayB7XG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVmlkZW9CbG9ja1JlYWRlciBpbXBsZW1lbnRzIEJsb2NrUmVhZGVyIHtcbiAgY2FuUGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIHJhd0Jsb2NrLnR5cGUgPT09IFRZUEU7XG4gIH1cblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2sge1xuICAgIGxldCByYXdWaWRlb0Jsb2NrID0gcmF3QmxvY2sgYXMgUmF3VmlkZW9CbG9jaztcbiAgICByZXR1cm4gbmV3IFZpZGVvQmxvY2soZWRpdG9yLCByYXdWaWRlb0Jsb2NrLnVybCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZGVvQmxvY2sgZXh0ZW5kcyBCbG9jayB7XG5cbiAgdXBsb2FkUGFuZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0VGV4dENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5wdXRUZXh0TGFiZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0VGV4dEljb246IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW5wdXRUZXh0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICB2aWRlb1BhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2aWRlb0VsZW06IEhUTUxWaWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICB2aWRlb0lmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblxuICBwcml2YXRlIGRlYm91bmNlZFRyaWdnZXJPbkNoYW5nZTogKCkgPT4gdm9pZDsgLy8gQWRkIGRlYm91bmNlZCB0cmlnZ2VyXG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgdmlkZW9Vcmw6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW8nKTtcbiAgICB0aGlzLnZpZGVvRWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3ZpZGVvX192aWRlby1lbGVtJyk7XG5cbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRQYW5lbCk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudmlkZW9QYW5lbCk7XG5cbiAgICB0aGlzLnZpZGVvUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy52aWRlb0VsZW0pO1xuICAgIHRoaXMudmlkZW9QYW5lbC5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvSWZyYW1lKTtcbiAgICB0aGlzLnZpZGVvSWZyYW1lLmZyYW1lQm9yZGVyID0gXCIwXCI7XG5cbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRUZXh0TGFiZWwpO1xuICAgIHRoaXMudXBsb2FkUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dFRleHRDb250YWluZXIpO1xuICAgIHRoaXMuaW5wdXRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRUZXh0SWNvbik7XG4gICAgdGhpcy5pbnB1dFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dFRleHQpO1xuXG4gICAgdGhpcy51cGxvYWRQYW5lbC5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3ZpZGVvX191cGxvYWQtcGFuZWwnKTtcbiAgICB0aGlzLmlucHV0VGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3ZpZGVvX191cGxvYWQtcGFuZWxfX2lucHV0LWNvbnRhaW5lcicpO1xuICAgIHRoaXMuaW5wdXRUZXh0TGFiZWwuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLXBhbmVsX19pbnB1dC1jb250YWluZXJfX2xhYmVsJyk7XG4gICAgdGhpcy5pbnB1dFRleHRJY29uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3VwbG9hZC1wYW5lbF9faW5wdXQtY29udGFpbmVyX19pY29uJyk7XG4gICAgdGhpcy5pbnB1dFRleHQuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLXBhbmVsX19pbnB1dC1jb250YWluZXJfX2lucHV0Jyk7XG4gICAgdGhpcy52aWRlb0lmcmFtZS5jbGFzc0xpc3QuYWRkKCdqcy12aWRlby1pZnJhbWUnKTtcblxuICAgIHRoaXMuaW5wdXRUZXh0TGFiZWwuaW5uZXJIVE1MID0gJ1Bhc3RlIGEgWW91dHViZSBvciBWaW1lbyBVUkwnO1xuICAgIHRoaXMuaW5wdXRUZXh0SWNvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzNVwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNSAyMFwiPjxnIGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxwYXRoIGQ9XCJNNi4yNSAwQzQuOTE1IDAgMy45LS4wMDQgMy4wNi4wOTIuLi5cIj48L2c+PC9zdmc+JztcbiAgICB0aGlzLmlucHV0VGV4dC50eXBlID0gJ3RleHQnO1xuICAgIHRoaXMuaW5wdXRUZXh0LnZhbHVlID0gdmlkZW9Vcmw7XG5cbiAgICAvLyBEZWJvdW5jZSBvbkNoYW5nZSBsb2dpYyBmb3IgdGhlIHZpZGVvIFVSTFxuICAgIHRoaXMuZGVib3VuY2VkVHJpZ2dlck9uQ2hhbmdlID0gdGhpcy5kZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXJPbkNoYW5nZSgpO1xuICAgIH0sIDMwMCk7XG5cbiAgICB0aGlzLmlucHV0VGV4dC5vbmNoYW5nZSA9IChldmVudDogRXZlbnQpOiBhbnkgPT4ge1xuICAgICAgdGhpcy52aWRlb1VybCA9IHRoaXMuaW5wdXRUZXh0LnZhbHVlLnRyaW0oKTtcbiAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIHN0YXRpYyBleHRyYWN0WW91dHViZUlkKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgcmVnRXhwID0gL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PXxcXD92PXxzaG9ydHNcXC8pKFteI1xcJlxcP10qKS4qLztcbiAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsyXSA6IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdFZpbWVvSWQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCByZWdFeHAgPSAvXi4rdmltZW8uY29tXFwvKC4qXFwvKT8oW14jXFw/XSopLztcbiAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsyXSB8fCBtYXRjaFsxXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSB2aWV3IGJhc2VkIG9uIHRoZSB2aWRlbyBVUkwuXG4gICAqL1xuICB1cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZpZGVvVXJsKSB7XG4gICAgICBpZiAodGhpcy52aWRlb1VybC5pbmNsdWRlcygnY2xvdWRpbmFyeScpKSB7XG4gICAgICAgIHRoaXMudmlkZW9FbGVtLnNyYyA9IHRoaXMudmlkZW9Vcmw7XG4gICAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnVwbG9hZFBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudmlkZW9VcmwuaW5jbHVkZXMoJ3lvdXR1YmUnKSkge1xuICAgICAgICBsZXQgeW91dHViZUlkID0gVmlkZW9CbG9jay5leHRyYWN0WW91dHViZUlkKHRoaXMudmlkZW9VcmwpO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLnNyYyA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3lvdXR1YmVJZH0/cmVsPTBgO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLndpZHRoID0gXCI1NjBcIjtcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS5oZWlnaHQgPSBcIjMxNVwiO1xuXG4gICAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy52aWRlb0VsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZGVvVXJsLmluY2x1ZGVzKCd2aW1lbycpKSB7XG4gICAgICAgIGxldCB2aW1lb0lkID0gVmlkZW9CbG9jay5leHRyYWN0VmltZW9JZCh0aGlzLnZpZGVvVXJsKTtcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS5zcmMgPSBgaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7dmltZW9JZH0/Y29sb3I9ZWM3MDcwJnBvcnRyYWl0PTBgO1xuICAgICAgICB0aGlzLnZpZGVvSWZyYW1lLndpZHRoID0gXCI1NjBcIjtcbiAgICAgICAgdGhpcy52aWRlb0lmcmFtZS5oZWlnaHQgPSBcIjMxNVwiO1xuXG4gICAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy52aWRlb0VsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZGVvUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICAgICAgICBcbiAgICB0aGlzLmRlYm91bmNlZFRyaWdnZXJPbkNoYW5nZSgpOyAvLyBUcmlnZ2VyIG9uQ2hhbmdlXG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgZWRpdG9yJ3Mgb25DaGFuZ2UgY2FsbGJhY2sgd2l0aCB0aGUgdXBkYXRlZCBjb250ZW50LlxuICAgKi9cbiAgcHJpdmF0ZSB0cmlnZ2VyT25DaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yLm9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuZWRpdG9yLm9wdGlvbnMub25DaGFuZ2UodGhpcy5lZGl0b3IuZ2V0Q29udGVudCgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVib3VuY2UgdXRpbGl0eSB0byBkZWxheSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi5cbiAgICovXG4gIHByaXZhdGUgZGVib3VuY2UoZnVuYzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkLCB3YWl0OiBudW1iZXIpIHtcbiAgICBsZXQgdGltZW91dDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG4gICAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmdW5jKC4uLmFyZ3MpO1xuICAgICAgfSwgd2FpdCk7XG4gICAgfTtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHN1cGVyLmZvY3VzKCk7XG4gIH1cblxuICBnZXRSYXdDb250ZW50KCk6IFJhd0Jsb2NrIHtcbiAgICBsZXQgcmF3OiBSYXdWaWRlb0Jsb2NrID0ge1xuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIHVybDogdGhpcy52aWRlb1VybCxcbiAgICB9O1xuICAgIHJldHVybiByYXc7XG4gIH1cbn1cbiIsImltcG9ydCB7QmxvY2t9IGZyb20gJy4vYmxvY2svYmxvY2snO1xuaW1wb3J0IHtJbWFnZUJsb2NrfSBmcm9tICcuL2Jsb2NrL2ltYWdlLWJsb2NrJztcbmltcG9ydCB7UXVvdGVCbG9ja30gZnJvbSAnLi9ibG9jay9xdW90ZS1ibG9jayc7XG5pbXBvcnQge0hlYWRlckJsb2NrfSBmcm9tICcuL2Jsb2NrL2hlYWRlci1ibG9jayc7XG5pbXBvcnQge1RleHRCbG9ja30gZnJvbSAnLi9ibG9jay90ZXh0LWJsb2NrJztcbmltcG9ydCB7RWRpdG9yfSBmcm9tICcuL2VkaXRvcic7XG5pbXBvcnQge1ZpZGVvQmxvY2t9IGZyb20gXCIuL2Jsb2NrL3ZpZGVvLWJsb2NrXCI7XG5cblxuZXhwb3J0IGNsYXNzIENvbnRyb2wge1xuICBlbGVtOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXNoYm9hcmQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV4cGFuZEhhbmRsZTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXhwYW5kQnV0dG9uOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBxdW90ZUJ1dHRvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyQnV0dG9uOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZXh0QnV0dG9uOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZUJ1dHRvbjogSFRNTERpdkVsZW1lbnQ7XG4gIHZpZGVvQnV0dG9uOiBIVE1MRGl2RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWRpdG9yOiBFZGl0b3IsIHB1YmxpYyBibG9jazogQmxvY2spIHtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2wnKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy5leHBhbmRIYW5kbGUpO1xuICAgIHRoaXMuZXhwYW5kSGFuZGxlLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19leHBhbmQtaGFuZGxlJywgJ2pzLWV4cGFuZC1oYW5kbGUnKTtcblxuICAgIHRoaXMuZXhwYW5kSGFuZGxlLmFwcGVuZENoaWxkKHRoaXMuZXhwYW5kQnV0dG9uKTtcbiAgICB0aGlzLmV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZXhwYW5kLWhhbmRsZV9fYnV0dG9uJyk7XG4gICAgdGhpcy5leHBhbmRCdXR0b24uaW5uZXJIVE1MID0gJysgQUREJztcbiAgICB0aGlzLmV4cGFuZEhhbmRsZS5vbmNsaWNrID0gKCkgPT4geyB0aGlzLnRvZ2dsZURhc2hib2FyZCgpOyB9O1xuXG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMuZGFzaGJvYXJkKTtcbiAgICB0aGlzLmRhc2hib2FyZC5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZGFzaGJvYXJkJyk7XG5cbiAgICB0aGlzLmRhc2hib2FyZC5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlckJ1dHRvbik7XG4gICAgdGhpcy5oZWFkZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2Rhc2hib2FyZF9fYnV0dG9uJywgJ2pzLWhlYWRlci1idXR0b24nKTtcbiAgICB0aGlzLmhlYWRlckJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMlwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAyMiAxNFwiPjx0ZXh0IGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGZvbnQtZmFtaWx5PVwiU291cmNlU2Fuc1Byby1Cb2xkLCBTb3VyY2UgU2FucyBQcm9cIiBmb250LXNpemU9XCIyMFwiIGZvbnQtd2VpZ2h0PVwiYm9sZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDggLTMzKVwiPjx0c3BhbiB4PVwiNDYuOThcIiB5PVwiNDdcIj5IMTwvdHNwYW4+PC90ZXh0Pjwvc3ZnPjxwPkhlYWRlciBUZXh0PC9wPic7XG4gICAgdGhpcy5oZWFkZXJCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGVkaXRvci5hZGQobmV3IEhlYWRlckJsb2NrKGVkaXRvciwgJycpLCB0aGlzLmJsb2NrKTtcbiAgICAgIHRoaXMuY29sbGFwc2VBbGwoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kYXNoYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy5xdW90ZUJ1dHRvbik7XG4gICAgdGhpcy5xdW90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZGFzaGJvYXJkX19idXR0b24nLCAnanMtcXVvdGUtYnV0dG9uJyk7XG4gICAgdGhpcy5xdW90ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE1XCIgdmlld0JveD1cIjAgMCAxOCAxNVwiPjxwYXRoIGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNi44ODEgMTQuMTk1SC41MTFWOS42NGMwLTEuODQzLjE2My0zLjI5OC40ODgtNC4zNjMuMzI1LTEuMDY1LjkyNi0yLjAyMSAxLjgwMi0yLjg2N0MzLjY3NyAxLjU2MiA0Ljc5Ni44OTggNi4xNTYuNDE0bDEuMjQ2IDIuNjNjLTEuMjY5LjQyMi0yLjE4IDEuMDEyLTIuNzMxIDEuNzY3LS41NTIuNzU2LS44NDIgMS43Ni0uODczIDMuMDE1aDMuMDgzdjYuMzd6bTEwLjYzIDBoLTYuMzY5VjkuNjRjMC0xLjg1OC4xNjMtMy4zMTcuNDg4LTQuMzc0LjMyNS0xLjA1OC45MjktMi4wMSAxLjgxMy0yLjg1Ni44ODQtLjg0NyAxLjk5OC0xLjUxMSAzLjM0My0xLjk5NWwxLjI0NyAyLjYzYy0xLjI3LjQyMi0yLjE4IDEuMDEyLTIuNzMxIDEuNzY3LS41NTIuNzU2LS44NDMgMS43Ni0uODczIDMuMDE1aDMuMDgzdjYuMzd6XCIvPjwvc3ZnPjxwPlF1b3RlPHA+JztcbiAgICB0aGlzLnF1b3RlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBlZGl0b3IuYWRkKG5ldyBRdW90ZUJsb2NrKGVkaXRvciwgJycpLCB0aGlzLmJsb2NrKTtcbiAgICAgIHRoaXMuY29sbGFwc2VBbGwoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kYXNoYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy50ZXh0QnV0dG9uKTtcbiAgICB0aGlzLnRleHRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2Rhc2hib2FyZF9fYnV0dG9uJywgJ2pzLXRleHQtYnV0dG9uJyk7XG4gICAgdGhpcy50ZXh0QnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDIwIDE2XCI+PHRleHQgZmlsbD1cIiM2NjZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZm9udC1mYW1pbHk9XCJTb3VyY2VTYW5zUHJvLVJlZ3VsYXIsIFNvdXJjZSBTYW5zIFByb1wiIGZvbnQtc2l6ZT1cIjIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNDYgLTMyKVwiPiA8dHNwYW4geD1cIjE0NC41N1wiIHk9XCI0N1wiPkJkPC90c3Bhbj4gPC90ZXh0Pjwvc3ZnPjxwPkJvZHkgVGV4dDwvcD4nO1xuICAgIHRoaXMudGV4dEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZWRpdG9yLmFkZChuZXcgVGV4dEJsb2NrKGVkaXRvciwgJycpLCB0aGlzLmJsb2NrKTtcbiAgICAgIHRoaXMuY29sbGFwc2VBbGwoKTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuZWRpdG9yLm9wdGlvbnMudXBsb2FkSW1hZ2UpIHtcbiAgICAgIHRoaXMuaW1hZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZGFzaGJvYXJkLmFwcGVuZENoaWxkKHRoaXMuaW1hZ2VCdXR0b24pO1xuXG4gICAgICB0aGlzLmltYWdlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19kYXNoYm9hcmRfX2J1dHRvbicsICdqcy1pbWFnZS1idXR0b24nKTtcbiAgICAgIHRoaXMuaW1hZ2VCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjUgMjBcIj48cGF0aCBmaWxsPVwiIzY2NlwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBkPVwiTTEuOTAyIDBDLjg2MiAwIDAgLjkwNyAwIDJ2MTZjMCAxLjA5My44NjIgMiAxLjkwMiAyaDIxLjE5NmMxLjA0IDAgMS45MDItLjkwNyAxLjkwMi0yVjJjMC0xLjA5My0uODYyLTItMS45MDItMkgxLjkwMnptMCAxLjcxNGgyMS4xOTZjLjE2NCAwIC4yNzIuMTEzLjI3Mi4yODZ2MTEuMzU3bC00LjExLTMuNDU1YS44MDUuODA1IDAgMCAwLS45NjktLjA0NWwtMy44NTUgMi43ODYtNS4yMy00LjQ1NUEuNzk4Ljc5OCAwIDAgMCA4LjYwMSA4YS43OTYuNzk2IDAgMCAwLS4zNzMuMTUyTDEuNjMgMTIuOTM3VjJjMC0uMTczLjEwOC0uMjg2LjI3Mi0uMjg2ek0xNC40MDIgNGMtMS4zNCAwLTIuNDQ1IDEuMTYxLTIuNDQ1IDIuNTcxIDAgMS40MSAxLjEwNCAyLjU3MiAyLjQ0NSAyLjU3MiAxLjM0MSAwIDIuNDQ2LTEuMTYyIDIuNDQ2LTIuNTcyIDAtMS40MS0xLjEwNS0yLjU3MS0yLjQ0Ni0yLjU3MXptMCAxLjcxNGMuNDYgMCAuODE1LjM3NC44MTUuODU3IDAgLjQ4NC0uMzU1Ljg1OC0uODE1Ljg1OC0uNDYgMC0uODE1LS4zNzQtLjgxNS0uODU4IDAtLjQ4My4zNTUtLjg1Ny44MTUtLjg1N3pNOC42NjIgOS45M2w1LjIzIDQuNDQ2YS44MDUuODA1IDAgMCAwIC45NjkuMDQ1bDMuODQ3LTIuNzg2IDQuNjYyIDMuOTJWMThjMCAuMTczLS4xMDguMjg2LS4yNzIuMjg2SDEuOTAyYy0uMTY0IDAtLjI3Mi0uMTEzLS4yNzItLjI4NnYtMi45NzNsNy4wMzItNS4wOTh6XCIvPjwvc3ZnPjxwPkltYWdlPC9wPic7XG4gICAgICB0aGlzLmltYWdlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGVkaXRvci5hZGQobmV3IEltYWdlQmxvY2soZWRpdG9yLCAnJyksIHRoaXMuYmxvY2spO1xuICAgICAgICB0aGlzLmNvbGxhcHNlQWxsKCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMudmlkZW9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmRhc2hib2FyZC5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvQnV0dG9uKTtcblxuICAgIHRoaXMudmlkZW9CdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2Rhc2hib2FyZF9fYnV0dG9uJywgJ2pzLXZpZGVvLWJ1dHRvbicpXG4gICAgdGhpcy52aWRlb0J1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNSAyMFwiPjxnIGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjxwYXRoIGQ9XCJNNi4yNSAwQzQuOTE1IDAgMy45LS4wMDQgMy4wNi4wOTIgMi4yMjIuMTg4IDEuNDg1LjM5Ny45MzkuOTUyYy0uNTQ1LjU1NC0uNzUgMS4zMDUtLjg0NiAyLjE2Qy0uMDAyIDMuOTY5IDAgNS4wMDMgMCA2LjM2NXY3LjI3MmMwIDEuMzYtLjAwNCAyLjM5My4wOSAzLjI0OC4wOTUuODU1LjMgMS42MDYuODQ1IDIuMTYuNTQ0LjU1NiAxLjI4Mi43NjYgMi4xMjIuODYyLjg0LjA5NyAxLjg1Ni4wOTQgMy4xOTMuMDk0aDEyLjVjMS4zMzYgMCAyLjM1LjAwNCAzLjE5LS4wOTIuODQtLjA5NiAxLjU3Ny0uMzA1IDIuMTIyLS44Ni41NDUtLjU1NC43NS0xLjMwNS44NDYtMi4xNi4wOTUtLjg1Ni4wOTItMS44OS4wOTItMy4yNTJWNi4zNjRjMC0xLjM2LjAwNC0yLjM5My0uMDktMy4yNDgtLjA5NS0uODU1LS4zLTEuNjA1LS44NDUtMi4xNkMyMy41MjEuNCAyMi43ODMuMTkgMjEuOTQzLjA5MyAyMS4xMDMtLjAwMiAyMC4wODcgMCAxOC43NSAwSDYuMjV6bTAgMS44MThoMTIuNWMxLjMzNiAwIDIuMzI3LjAwNSAyLjk5My4wODIuNjY1LjA3Ni45MzQuMjEgMS4wNi4zMzkuMTI2LjEyOS4yNTYuNDAyLjMzMSAxLjA4LjA3NS42NzcuMDggMS42ODUuMDggMy4wNDV2Ny4yNzJjMCAxLjM2MS0uMDA1IDIuMzctLjA4IDMuMDQ3LS4wNzUuNjc4LS4yMDcuOTUxLS4zMzMgMS4wOC0uMTI2LjEyOC0uMzk0LjI2MS0xLjA2LjMzNy0uNjY2LjA3Ni0xLjY1Ni4wODItMi45OS4wODJINi4yNWMtMS4zMzcgMC0yLjMyNy0uMDA1LTIuOTkzLS4wODItLjY2Ni0uMDc2LS45MzQtLjIxLTEuMDYtLjMzOS0uMTI3LS4xMjktLjI1Ny0uNDAyLS4zMzItMS4wOC0uMDc1LS42NzctLjA4LTEuNjg1LS4wOC0zLjA0NVY2LjM2NGMwLTEuMzYxLjAwNS0yLjM3LjA4LTMuMDQ3LjA3NS0uNjc4LjIwNy0uOTUxLjMzMy0xLjA4LjEyNi0uMTI4LjM5NS0uMjYxIDEuMDYtLjMzNy42NjYtLjA3NiAxLjY1Ni0uMDgyIDIuOTkxLS4wODJ6XCIvPjxwYXRoIGQ9XCJNOC43NDQgNC4xOTJhMS4zNjkgMS4zNjkgMCAwIDAtLjcwOCAxLjIwMnY5LjIxMmMwIC41LjI3MS45NjUuNzA4IDEuMjAyLjQzNC4yMzYuOTY1LjIxIDEuMzc0LS4wNjdsNi43ODQtNC42MDZoLjAwMWExLjM3NiAxLjM3NiAwIDAgMC0uMDAxLTIuMjdjLTEuNDI4LS45NjgtNS4yMTYtMy41NC02Ljc4NC00LjYwNWExLjMyNCAxLjMyNCAwIDAgMC0xLjM3NC0uMDY4em0xLjA3OCAyLjA1YzEuNjEgMS4wOTQgNC4wNzggMi43NyA1LjUzNSAzLjc1OGwtNS41MzUgMy43NTdWNi4yNDN6XCIvPjwvZz48L3N2Zz48cD5WaWRlbzwvcD4nO1xuICAgIHRoaXMudmlkZW9CdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGVkaXRvci5hZGQobmV3IFZpZGVvQmxvY2soZWRpdG9yLCAnJyksIHRoaXMuYmxvY2spO1xuICAgIH07XG4gIH1cblxuICB0b2dnbGVEYXNoYm9hcmQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkLnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKVxuICAgICAgdGhpcy5leHBhbmREYXNoYm9hcmQoKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmNvbGxhcHNlRGFzaGJvYXJkKCk7XG4gIH1cblxuICBjb2xsYXBzZURhc2hib2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhc2hib2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuZXhwYW5kQnV0dG9uLmlubmVySFRNTCA9ICcrIEFERCdcbiAgfVxuXG4gIGV4cGFuZERhc2hib2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbGxhcHNlQWxsKCk7XG4gICAgdGhpcy5kYXNoYm9hcmQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB0aGlzLmV4cGFuZEJ1dHRvbi5pbm5lckhUTUwgPSAnSElERSc7XG4gIH1cblxuICBjb2xsYXBzZUFsbCgpIHtcbiAgICBmb3IgKGxldCBpPTA7aSA8IHRoaXMuZWRpdG9yLmJsb2Nrcy5sZW5ndGg7aSsrKSB7XG4gICAgICB0aGlzLmVkaXRvci5ibG9ja3NbaV0uY29udHJvbC5jb2xsYXBzZURhc2hib2FyZCgpO1xuICAgIH1cbiAgICB0aGlzLmVkaXRvci5sYXN0Q29udHJvbC5jb2xsYXBzZURhc2hib2FyZCgpO1xuICB9XG59IiwiaW1wb3J0IHtDb250cm9sfSBmcm9tICcuL2NvbnRyb2wnO1xuaW1wb3J0IHtCbG9jaywgQmxvY2tSZWFkZXIsIFJhd0Jsb2NrfSBmcm9tICcuL2Jsb2NrL2Jsb2NrJztcbmltcG9ydCB7SW1hZ2VCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jay9pbWFnZS1ibG9jayc7XG5pbXBvcnQge1F1b3RlQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2svcXVvdGUtYmxvY2snO1xuaW1wb3J0IHtIZWFkZXJCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jay9oZWFkZXItYmxvY2snO1xuaW1wb3J0IHtUZXh0QmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2svdGV4dC1ibG9jayc7XG5pbXBvcnQge1ZpZGVvQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2svdmlkZW8tYmxvY2snO1xuXG5jb25zdCBCTE9DS1M6IEFycmF5PEJsb2NrUmVhZGVyPiA9IFtcbiAgbmV3IFRleHRCbG9ja1JlYWRlcigpLFxuICBuZXcgSGVhZGVyQmxvY2tSZWFkZXIoKSxcbiAgbmV3IFF1b3RlQmxvY2tSZWFkZXIoKSxcbiAgbmV3IEltYWdlQmxvY2tSZWFkZXIoKSxcbiAgbmV3IFZpZGVvQmxvY2tSZWFkZXIoKSxcbl07XG5cbmZ1bmN0aW9uIGNvbnZlcnRSYXdDb250ZW50KHJhd0NvbnRlbnQ6IEFycmF5PFJhd0Jsb2NrPiwgZWRpdG9yOiBFZGl0b3IpOiBBcnJheTxCbG9jaz4ge1xuICBsZXQgYmxvY2tzOiBBcnJheTxCbG9jaz4gPSBbXTtcblxuICBmb3IgKGxldCByYXdCbG9jayBvZiByYXdDb250ZW50KSB7XG4gICAgbGV0IHByb2Nlc3NlZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGJsb2NrIG9mIEJMT0NLUykge1xuICAgICAgaWYgKGJsb2NrLmNhblBhcnNlKHJhd0Jsb2NrKSkge1xuICAgICAgICBwcm9jZXNzZWQgPSB0cnVlO1xuICAgICAgICBibG9ja3MucHVzaChibG9jay5wYXJzZShyYXdCbG9jaywgZWRpdG9yKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcHJvY2Vzc2VkKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFVucmVjb2duaXplZCBibG9jayB0eXBlOiAnJHtyYXdCbG9jay50eXBlfScuIElnbm9yZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYmxvY2tzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRvck9wdGlvbnMge1xuICBjb250ZW50OiBBcnJheTxSYXdCbG9jaz47XG4gIHVwbG9hZEltYWdlPzogKGZpbGU6IEZpbGUsIHN1Y2Nlc3NDYWxsYmFjazogKHVybDogc3RyaW5nKSA9PiB2b2lkLCBmYWlsdXJlQ2FsbGJhY2s6IChlcnJvcjogc3RyaW5nKSA9PiB2b2lkKSA9PiB2b2lkO1xuICBvbkNoYW5nZT86IChjb250ZW50OiBBcnJheTxSYXdCbG9jaz4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBFZGl0b3Ige1xuICBibG9ja3M6IEFycmF5PEJsb2NrPjtcbiAgbGFzdENvbnRyb2w6IENvbnRyb2w7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW06IEhUTUxEaXZFbGVtZW50LFxuICAgIHB1YmxpYyBvcHRpb25zOiBFZGl0b3JPcHRpb25zXG4gICkge1xuICAgIHRoaXMuYmxvY2tzID0gY29udmVydFJhd0NvbnRlbnQodGhpcy5vcHRpb25zLmNvbnRlbnQsIHRoaXMpO1xuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBpbml0aWFsIG9uQ2hhbmdlIGV2ZW50XG4gICAgdGhpcy50cmlnZ2VyT25DaGFuZ2UoKTtcbiAgfVxuXG4gIGFkZChibG9jazogQmxvY2ssIGJlZm9yZUJsb2NrOiBCbG9jaykge1xuICAgIGlmIChiZWZvcmVCbG9jaykge1xuICAgICAgZm9yIChsZXQgaT0wO2kgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGlmIChiZWZvcmVCbG9jayA9PSB0aGlzLmJsb2Nrc1tpXSkge1xuICAgICAgICAgIHRoaXMuYmxvY2tzLnNwbGljZShpLCAwLCBibG9jayk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZWxlbS5pbnNlcnRCZWZvcmUoYmxvY2suZWxlbSwgYmVmb3JlQmxvY2suZWxlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgdGhpcy5lbGVtLmluc2VydEJlZm9yZShibG9jay5lbGVtLCB0aGlzLmxhc3RDb250cm9sLmVsZW0pO1xuICAgIH1cblxuICAgIGJsb2NrLmZvY3VzKCk7XG4gICAgdGhpcy50cmlnZ2VyT25DaGFuZ2UoKTtcbiAgfVxuXG4gIHJlbW92ZShibG9jazogQmxvY2spIHtcbiAgICBmb3IgKGxldCBpPTA7aSA8IHRoaXMuYmxvY2tzLmxlbmd0aDtpKyspIHtcbiAgICAgIGlmIChibG9jayA9PSB0aGlzLmJsb2Nrc1tpXSkge1xuICAgICAgICB0aGlzLmJsb2Nrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJsb2NrLmVsZW0ucmVtb3ZlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRyaWdnZXJPbkNoYW5nZSgpO1xuICB9XG5cbiAgcmVkcmF3KCkge1xuICAgIGZvciAobGV0IGJsb2NrIG9mIHRoaXMuYmxvY2tzKSB7XG4gICAgICBibG9jay5yZWRyYXcoKTtcbiAgICB9XG4gIH1cblxuICBnZXRDb250ZW50KCk6IEFycmF5PFJhd0Jsb2NrPiB7XG4gICAgbGV0IHJhd0NvbnRlbnQ6IEFycmF5PFJhd0Jsb2NrPiA9IFtdO1xuICAgIGZvciAobGV0IGJsb2NrIG9mIHRoaXMuYmxvY2tzKSB7XG4gICAgICByYXdDb250ZW50LnB1c2goYmxvY2suZ2V0UmF3Q29udGVudCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhd0NvbnRlbnQ7XG4gIH1cblxuICBzaG93RGVsZXRlQnV0dG9uKGJsb2NrOiBCbG9jaykge1xuICAgIGZvciAobGV0IGk9MDtpIDwgdGhpcy5ibG9ja3MubGVuZ3RoO2krKykge1xuICAgICAgdGhpcy5ibG9ja3NbaV0uZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBpZiAoYmxvY2sgPT0gdGhpcy5ibG9ja3NbaV0pIHtcbiAgICAgICAgdGhpcy5ibG9ja3NbaV0uZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyaWdnZXJPbkNoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9wdGlvbnMub25DaGFuZ2UodGhpcy5nZXRDb250ZW50KCkpOyAvLyBDYWxsIG9uQ2hhbmdlIHdpdGggY3VycmVudCBjb250ZW50XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKSB7XG4gICAgZm9yIChsZXQgYmxvY2sgb2YgdGhpcy5ibG9ja3MpIHtcbiAgICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZChibG9jay5lbGVtKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5sYXN0Q29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMsIG51bGwpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmxhc3RDb250cm9sLmVsZW0pO1xuICAgIHRoaXMubGFzdENvbnRyb2wuZXhwYW5kRGFzaGJvYXJkKCk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtFZGl0b3IsIEVkaXRvck9wdGlvbnN9IGZyb20gJy4vZWRpdG9yL2VkaXRvcidcbmltcG9ydCB7UmF3QmxvY2t9IGZyb20gJy4vZWRpdG9yL2Jsb2NrL2Jsb2NrJztcbmltcG9ydCB7UmF3SGVhZGVyQmxvY2t9IGZyb20gJy4vZWRpdG9yL2Jsb2NrL2hlYWRlci1ibG9jayc7XG5pbXBvcnQge1Jhd0ltYWdlQmxvY2t9IGZyb20gJy4vZWRpdG9yL2Jsb2NrL2ltYWdlLWJsb2NrJztcbmltcG9ydCB7UmF3UXVvdGVCbG9ja30gZnJvbSAnLi9lZGl0b3IvYmxvY2svcXVvdGUtYmxvY2snO1xuaW1wb3J0IHtSYXdUZXh0QmxvY2t9IGZyb20gJy4vZWRpdG9yL2Jsb2NrL3RleHQtYmxvY2snO1xuaW1wb3J0IHtSYXdWaWRlb0Jsb2NrfSBmcm9tICcuL2VkaXRvci9ibG9jay92aWRlby1ibG9jayc7XG5cbig8YW55PndpbmRvdykuaW5zdGFsbEVkaXRvciA9IChlbGVtOiBIVE1MRGl2RWxlbWVudCwgb3B0aW9uczogRWRpdG9yT3B0aW9ucyA9ICg8RWRpdG9yT3B0aW9ucz57fSkpID0+IHtcbiAgcmV0dXJuIG5ldyBFZGl0b3IoZWxlbSwgb3B0aW9ucyk7XG59O1xuXG5leHBvcnQgeyBFZGl0b3IsIEVkaXRvck9wdGlvbnMsIFJhd0Jsb2NrLCBSYXdIZWFkZXJCbG9jaywgUmF3SW1hZ2VCbG9jaywgUmF3UXVvdGVCbG9jaywgUmF3VGV4dEJsb2NrLCBSYXdWaWRlb0Jsb2NrIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=