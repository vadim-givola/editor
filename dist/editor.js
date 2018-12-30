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
        _this.uploadButton = document.createElement('button');
        _this.loadingIcon = document.createElement('span');
        _this.inputFile = document.createElement('input');
        _this.imagePanel = document.createElement('div');
        _this.img = document.createElement('img');
        _this.elem.classList.add('editor-block__image');
        _this.img.classList.add('editor-block__image__img');
        _this.uploadButton.classList.add('editor-block__image__upload-button');
        _this.elem.appendChild(_this.uploadPanel);
        _this.elem.appendChild(_this.imagePanel);
        _this.uploadPanel.appendChild(_this.inputFile);
        _this.uploadPanel.appendChild(_this.uploadButton);
        _this.uploadPanel.appendChild(_this.loadingIcon);
        _this.imagePanel.appendChild(_this.img);
        _this.loadingIcon.innerHTML = 'Uploading image...';
        _this.stopLoading();
        _this.uploadButton.innerHTML = 'Upload image';
        _this.uploadButton.onclick = function () { _this.inputFile.click(); };
        _this.inputFile.type = 'file';
        _this.inputFile.onchange = function (event) {
            var target = event.target;
            if (target.files.length == 0) {
                // in IE 11, the change event is fired when we programmatically set `.js-fileInput`'s value to empty string.
                return;
            }
            _this.startLoading();
            var successCallback = function (url) {
                _this.stopLoading();
                _this.url = url;
                _this.updateView();
            };
            var failCallback = function (error) {
                _this.stopLoading();
            };
            _this.editor.options.uploadImage(target.files[0], successCallback, failCallback);
            _this.inputFile.value = '';
        };
        _this.updateView();
        return _this;
    }
    ImageBlock.prototype.startLoading = function () {
        this.loadingIcon.style.display = 'inline-block';
    };
    ImageBlock.prototype.stopLoading = function () {
        this.loadingIcon.style.display = 'none';
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
        _this.uploadButton = document.createElement('button');
        _this.loadingIcon = document.createElement('span');
        _this.inputFile = document.createElement('input');
        _this.videoPanel = document.createElement('div');
        _this.videoElem = document.createElement('video');
        _this.elem.classList.add('editor-block__video');
        _this.uploadButton.classList.add('editor-block__video__upload-button');
        _this.videoElem.classList.add('editor-block__video__video-elem');
        _this.elem.appendChild(_this.uploadPanel);
        _this.elem.appendChild(_this.videoPanel);
        _this.videoPanel.appendChild(_this.videoElem);
        _this.uploadPanel.appendChild(_this.inputFile);
        _this.uploadPanel.appendChild(_this.uploadButton);
        _this.uploadPanel.appendChild(_this.loadingIcon);
        _this.videoElem.controls = true;
        _this.stopLoading();
        _this.uploadButton.innerHTML = 'Upload video';
        _this.uploadButton.onclick = function () { _this.inputFile.click(); };
        _this.inputFile.type = 'file';
        _this.inputFile.onchange = function (event) {
            var target = event.target;
            if (target.files.length == 0) {
                // in IE 11, the change event is fired when we programmatically set `.js-fileInput`'s value to empty string.
                return;
            }
            _this.startLoading();
            var progressCallback = function (loaded, total, label) {
                if (label) {
                    _this.loadingIcon.innerHTML = label;
                }
                else {
                    _this.loadingIcon.innerHTML = "Uploading video (" + loaded + "/" + total + ")...";
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
            _this.editor.options.uploadVideo(target.files[0], progressCallback, successCallback, failCallback);
            _this.inputFile.value = '';
        };
        _this.updateView();
        return _this;
    }
    VideoBlock.prototype.startLoading = function () {
        this.loadingIcon.innerHTML = 'Uploading video...';
        this.loadingIcon.style.display = 'inline-block';
    };
    VideoBlock.prototype.stopLoading = function () {
        this.loadingIcon.style.display = 'none';
    };
    VideoBlock.prototype.updateView = function () {
        if (this.videoUrl) {
            this.videoElem.src = this.videoUrl;
            this.videoPanel.style.display = 'block';
            this.uploadPanel.style.display = 'none';
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
    return VideoBlock;
}(_block__WEBPACK_IMPORTED_MODULE_0__["Block"]));



/***/ }),

/***/ "./src/ts/editor/block/youtube-block.ts":
/*!**********************************************!*\
  !*** ./src/ts/editor/block/youtube-block.ts ***!
  \**********************************************/
/*! exports provided: YoutubeBlockReader, YoutubeBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeBlockReader", function() { return YoutubeBlockReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeBlock", function() { return YoutubeBlock; });
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

var TYPE = 'youtube';
var YoutubeBlockReader = /** @class */ (function () {
    function YoutubeBlockReader() {
    }
    YoutubeBlockReader.prototype.canParse = function (rawBlock) {
        return rawBlock.type == TYPE;
    };
    YoutubeBlockReader.prototype.parse = function (rawBlock, editor) {
        return new YoutubeBlock(editor, rawBlock.url);
    };
    return YoutubeBlockReader;
}());

var YoutubeBlock = /** @class */ (function (_super) {
    __extends(YoutubeBlock, _super);
    function YoutubeBlock(editor, url) {
        var _this = _super.call(this, editor) || this;
        _this.editor = editor;
        _this.inputPanel = document.createElement('div');
        _this.inputText = document.createElement('input');
        _this.previewPanel = document.createElement('div');
        _this.elem.classList.add('editor-block__youtube');
        _this.elem.appendChild(_this.previewPanel);
        _this.elem.appendChild(_this.inputPanel);
        _this.inputPanel.appendChild(_this.inputText);
        _this.inputText.type = 'text';
        _this.inputText.value = url;
        _this.inputText.onchange = function (event) {
            _this.updateView();
        };
        _this.updateView();
        return _this;
    }
    YoutubeBlock.extractYoutubeId = function (url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        return match ? match[2] : null;
    };
    YoutubeBlock.prototype.updateView = function () {
        var _this = this;
        var youtubeId = YoutubeBlock.extractYoutubeId(this.inputText.value.trim());
        if (this.img) {
            this.img.remove();
            this.img = null;
        }
        if (youtubeId) {
            var source = "https://img.youtube.com/vi/" + youtubeId + "/sddefault.jpg";
            var fallbackSource_1 = "https://img.youtube.com/vi/" + youtubeId + "/0.jpg";
            this.img = document.createElement('img');
            this.img.classList.add('editor-block__youtube__img');
            this.img.addEventListener("load", function () {
                // If the preview image doesn't exist, youtube returns 404 with a default image whose width is 120px.
                // Since we cannot check the status code, we have to check the natural width instead.
                if (_this.img.naturalWidth < 600 && _this.img.src != fallbackSource_1) {
                    _this.img.src = fallbackSource_1;
                }
                _this.img.removeAttribute("width"); // IE 11 needs this setting.
                _this.img.removeAttribute("height"); // IE 11 needs this setting.
                _this.previewPanel.appendChild(_this.img);
            });
            this.img.src = source;
        }
    };
    YoutubeBlock.prototype.focus = function () {
        this.inputText.focus();
    };
    YoutubeBlock.prototype.getRawContent = function () {
        var raw = {
            type: TYPE,
            url: this.inputText.value.trim()
        };
        return raw;
    };
    return YoutubeBlock;
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
/* harmony import */ var _block_youtube_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block/youtube-block */ "./src/ts/editor/block/youtube-block.ts");





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
        this.youtubeButton = document.createElement('span');
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
        this.dashboard.appendChild(this.youtubeButton);
        this.youtubeButton.classList.add('editor-control__dashboard__button', 'js-youtube-button');
        this.youtubeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092 2.222.188 1.485.397.939.952c-.545.554-.75 1.305-.846 2.16C-.002 3.969 0 5.003 0 6.365v7.272c0 1.36-.004 2.393.09 3.248.095.855.3 1.606.845 2.16.544.556 1.282.766 2.122.862.84.097 1.856.094 3.193.094h12.5c1.336 0 2.35.004 3.19-.092.84-.096 1.577-.305 2.122-.86.545-.554.75-1.305.846-2.16.095-.856.092-1.89.092-3.252V6.364c0-1.36.004-2.393-.09-3.248-.095-.855-.3-1.605-.845-2.16C23.521.4 22.783.19 21.943.093 21.103-.002 20.087 0 18.75 0H6.25zm0 1.818h12.5c1.336 0 2.327.005 2.993.082.665.076.934.21 1.06.339.126.129.256.402.331 1.08.075.677.08 1.685.08 3.045v7.272c0 1.361-.005 2.37-.08 3.047-.075.678-.207.951-.333 1.08-.126.128-.394.261-1.06.337-.666.076-1.656.082-2.99.082H6.25c-1.337 0-2.327-.005-2.993-.082-.666-.076-.934-.21-1.06-.339-.127-.129-.257-.402-.332-1.08-.075-.677-.08-1.685-.08-3.045V6.364c0-1.361.005-2.37.08-3.047.075-.678.207-.951.333-1.08.126-.128.395-.261 1.06-.337.666-.076 1.656-.082 2.991-.082z"/><path d="M8.744 4.192a1.369 1.369 0 0 0-.708 1.202v9.212c0 .5.271.965.708 1.202.434.236.965.21 1.374-.067l6.784-4.606h.001a1.376 1.376 0 0 0-.001-2.27c-1.428-.968-5.216-3.54-6.784-4.605a1.324 1.324 0 0 0-1.374-.068zm1.078 2.05c1.61 1.094 4.078 2.77 5.535 3.758l-5.535 3.757V6.243z"/></g></svg><p>Youtube</p>';
        this.youtubeButton.onclick = function () {
            editor.add(new _block_youtube_block__WEBPACK_IMPORTED_MODULE_4__["YoutubeBlock"](editor, ''), _this.block);
            _this.collapseAll();
        };
        // if (this.editor.options.uploadVideo) {
        //   this.videoButton = document.createElement('div');
        //   this.dashboard.appendChild(this.videoButton);
        //   this.videoButton.classList.add('editor-control__dashboard__button')
        //   this.videoButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092 2.222.188 1.485.397.939.952c-.545.554-.75 1.305-.846 2.16C-.002 3.969 0 5.003 0 6.365v7.272c0 1.36-.004 2.393.09 3.248.095.855.3 1.606.845 2.16.544.556 1.282.766 2.122.862.84.097 1.856.094 3.193.094h12.5c1.336 0 2.35.004 3.19-.092.84-.096 1.577-.305 2.122-.86.545-.554.75-1.305.846-2.16.095-.856.092-1.89.092-3.252V6.364c0-1.36.004-2.393-.09-3.248-.095-.855-.3-1.605-.845-2.16C23.521.4 22.783.19 21.943.093 21.103-.002 20.087 0 18.75 0H6.25zm0 1.818h12.5c1.336 0 2.327.005 2.993.082.665.076.934.21 1.06.339.126.129.256.402.331 1.08.075.677.08 1.685.08 3.045v7.272c0 1.361-.005 2.37-.08 3.047-.075.678-.207.951-.333 1.08-.126.128-.394.261-1.06.337-.666.076-1.656.082-2.99.082H6.25c-1.337 0-2.327-.005-2.993-.082-.666-.076-.934-.21-1.06-.339-.127-.129-.257-.402-.332-1.08-.075-.677-.08-1.685-.08-3.045V6.364c0-1.361.005-2.37.08-3.047.075-.678.207-.951.333-1.08.126-.128.395-.261 1.06-.337.666-.076 1.656-.082 2.991-.082z"/><path d="M8.744 4.192a1.369 1.369 0 0 0-.708 1.202v9.212c0 .5.271.965.708 1.202.434.236.965.21 1.374-.067l6.784-4.606h.001a1.376 1.376 0 0 0-.001-2.27c-1.428-.968-5.216-3.54-6.784-4.605a1.324 1.324 0 0 0-1.374-.068zm1.078 2.05c1.61 1.094 4.078 2.77 5.535 3.758l-5.535 3.757V6.243z"/></g></svg><p>Video</p>';
        //   this.videoButton.onclick = () => {
        //     editor.add(new VideoBlock(editor, ''), this.block);
        //   };
        // }
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
/* harmony import */ var _block_youtube_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block/youtube-block */ "./src/ts/editor/block/youtube-block.ts");







var BLOCKS = [
    new _block_text_block__WEBPACK_IMPORTED_MODULE_4__["TextBlockReader"](),
    new _block_header_block__WEBPACK_IMPORTED_MODULE_3__["HeaderBlockReader"](),
    new _block_quote_block__WEBPACK_IMPORTED_MODULE_2__["QuoteBlockReader"](),
    new _block_image_block__WEBPACK_IMPORTED_MODULE_1__["ImageBlockReader"](),
    new _block_video_block__WEBPACK_IMPORTED_MODULE_5__["VideoBlockReader"](),
    new _block_youtube_block__WEBPACK_IMPORTED_MODULE_6__["YoutubeBlockReader"](),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2VkaXRvci9ibG9jay9ibG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZWRpdG9yL2Jsb2NrL2hlYWRlci1ibG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZWRpdG9yL2Jsb2NrL2ltYWdlLWJsb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9lZGl0b3IvYmxvY2svcXVvdGUtYmxvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2VkaXRvci9ibG9jay90ZXh0LWJsb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9lZGl0b3IvYmxvY2svdmlkZW8tYmxvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2VkaXRvci9ibG9jay95b3V0dWJlLWJsb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9lZGl0b3IvY29udHJvbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZWRpdG9yL2VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNB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QUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzNGRDtBQUFBO0FBQXFEO0FBRS9DLE1BQU8sQ0FBQyxhQUFhLEdBQUcsVUFBQyxJQUFvQixFQUFFLE9BQTRDO0lBQTVDLG9DQUF5QyxFQUFHO0lBQy9GLE9BQU8sSUFBSSxxREFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMiLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQge0NvbnRyb2x9IGZyb20gJy4uL2NvbnRyb2wnO1xuaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmF3QmxvY2sge1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuXG4gIHBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jaywgZWRpdG9yOiBFZGl0b3IpOiBCbG9ja1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmxvY2sge1xuICBlbGVtOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250cm9sOiBDb250cm9sO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvcikge1xuICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sKGVkaXRvciwgdGhpcyk7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9jaycpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuZWxlbSk7XG4gIH1cblxuICBhYnN0cmFjdCBnZXRSYXdDb250ZW50KCk6IFJhd0Jsb2NrXG5cbiAgYWJzdHJhY3QgZm9jdXMoKTogdm9pZFxufVxuXG4iLCJpbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vZWRpdG9yJztcbmltcG9ydCB7QmxvY2ssIFJhd0Jsb2NrLCBCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jaydcblxuY29uc3QgVFlQRTogc3RyaW5nID0gJ2hlYWRlcic7XG5cbmludGVyZmFjZSBSYXdUZXh0QmxvY2sgZXh0ZW5kcyBSYXdCbG9jayB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEhlYWRlckJsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3SGVhZGVyQmxvY2sgPSByYXdCbG9jayBhcyBSYXdUZXh0QmxvY2s7XG4gICAgcmV0dXJuIG5ldyBIZWFkZXJCbG9jayhlZGl0b3IsIHJhd0hlYWRlckJsb2NrLmNvbnRlbnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJCbG9jayBleHRlbmRzIEJsb2NrIHtcblxuICB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgY29udGVudDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWRpdG9yKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrJywgJ2VkaXRvci1ibG9ja19fdGV4dCcpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRleHRhcmVhKTtcblxuICAgIHRoaXMudGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19lZGl0b3InLCAnZWRpdG9yLWJsb2NrX19oZWFkZXInKTtcbiAgICB0aGlzLnRleHRhcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICcxJyk7XG4gICAgdGhpcy50ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ID4gdGhpcy50ZXh0YXJlYS5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSB0aGlzLnRleHRhcmVhLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy50ZXh0YXJlYS5pbm5lckhUTUwgPSB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLnRleHRhcmVhLmZvY3VzKCk7XG4gIH1cblxuICBnZXRSYXdDb250ZW50KCk6IFJhd0Jsb2NrIHtcbiAgICBsZXQgcmF3OiBSYXdUZXh0QmxvY2sgPSB7XG4gICAgICB0eXBlOiBUWVBFLFxuICAgICAgY29udGVudDogdGhpcy50ZXh0YXJlYS52YWx1ZVxuICAgIH07XG4gICAgcmV0dXJuIHJhdztcbiAgfVxufSIsImltcG9ydCB7RWRpdG9yfSBmcm9tICcuLi9lZGl0b3InO1xuaW1wb3J0IHtCbG9jaywgUmF3QmxvY2ssIEJsb2NrUmVhZGVyfSBmcm9tICcuL2Jsb2NrJ1xuXG5jb25zdCBUWVBFOiBzdHJpbmcgPSAnaW1hZ2UnO1xuXG5pbnRlcmZhY2UgUmF3SW1hZ2VCbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUJsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3SW1hZ2VCbG9jayA9IHJhd0Jsb2NrIGFzIFJhd0ltYWdlQmxvY2s7XG4gICAgcmV0dXJuIG5ldyBJbWFnZUJsb2NrKGVkaXRvciwgcmF3SW1hZ2VCbG9jay51cmwpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUJsb2NrIGV4dGVuZHMgQmxvY2sge1xuXG4gIHVwbG9hZFBhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cGxvYWRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxvYWRpbmdJY29uOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGlucHV0RmlsZTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgaW1hZ2VQYW5lbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1nOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgdXJsOiBzdHJpbmcpIHtcbiAgICBzdXBlcihlZGl0b3IpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlJyk7XG4gICAgdGhpcy5pbWcuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZV9faW1nJyk7XG4gICAgdGhpcy51cGxvYWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19pbWFnZV9fdXBsb2FkLWJ1dHRvbicpO1xuXG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkUGFuZWwpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmltYWdlUGFuZWwpO1xuXG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0RmlsZSk7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZEJ1dHRvbik7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmxvYWRpbmdJY29uKTtcbiAgICB0aGlzLmltYWdlUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy5pbWcpO1xuXG4gICAgdGhpcy5sb2FkaW5nSWNvbi5pbm5lckhUTUwgPSAnVXBsb2FkaW5nIGltYWdlLi4uJ1xuICAgIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICB0aGlzLnVwbG9hZEJ1dHRvbi5pbm5lckhUTUwgPSAnVXBsb2FkIGltYWdlJztcbiAgICB0aGlzLnVwbG9hZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4geyB0aGlzLmlucHV0RmlsZS5jbGljaygpIH1cbiAgICB0aGlzLmlucHV0RmlsZS50eXBlID0gJ2ZpbGUnO1xuICAgIHRoaXMuaW5wdXRGaWxlLm9uY2hhbmdlID0gKGV2ZW50OiBFdmVudCk6IGFueSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0ID0gKDxIVE1MSW5wdXRFbGVtZW50PmV2ZW50LnRhcmdldCk7XG4gICAgICBpZiAodGFyZ2V0LmZpbGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIC8vIGluIElFIDExLCB0aGUgY2hhbmdlIGV2ZW50IGlzIGZpcmVkIHdoZW4gd2UgcHJvZ3JhbW1hdGljYWxseSBzZXQgYC5qcy1maWxlSW5wdXRgJ3MgdmFsdWUgdG8gZW1wdHkgc3RyaW5nLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhcnRMb2FkaW5nKCk7XG5cbiAgICAgIGxldCBzdWNjZXNzQ2FsbGJhY2sgPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5zdG9wTG9hZGluZygpO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgICB9O1xuXG4gICAgICBsZXQgZmFpbENhbGxiYWNrID0gKGVycm9yOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5zdG9wTG9hZGluZygpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5lZGl0b3Iub3B0aW9ucy51cGxvYWRJbWFnZSh0YXJnZXQuZmlsZXNbMF0sIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbENhbGxiYWNrKTtcbiAgICAgIHRoaXMuaW5wdXRGaWxlLnZhbHVlID0gJyc7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG5cbiAgc3RhcnRMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ0ljb24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICB9XG5cbiAgc3RvcExvYWRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgdXBkYXRlVmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgIHRoaXMuaW1nLnNyYyA9IHRoaXMudXJsO1xuICAgICAgdGhpcy5pbWFnZVBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltYWdlUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7fVxuXG4gIGdldFJhd0NvbnRlbnQoKTogUmF3QmxvY2sge1xuICAgIGxldCByYXc6IFJhd0ltYWdlQmxvY2sgPSB7XG4gICAgICB0eXBlOiBUWVBFLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH07XG4gICAgcmV0dXJuIHJhdztcbiAgfVxufVxuIiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBSYXdCbG9jaywgQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICdxdW90ZSc7XG5cbmludGVyZmFjZSBSYXdRdW90ZUJsb2NrIGV4dGVuZHMgUmF3QmxvY2sge1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBRdW90ZUJsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3UXVvdGVCbG9jayA9IHJhd0Jsb2NrIGFzIFJhd1F1b3RlQmxvY2s7XG4gICAgcmV0dXJuIG5ldyBRdW90ZUJsb2NrKGVkaXRvciwgcmF3UXVvdGVCbG9jay5jb250ZW50KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVvdGVCbG9jayBleHRlbmRzIEJsb2NrIHtcblxuICB0ZXh0YXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgY29udGVudDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZWRpdG9yKTtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX190ZXh0Jyk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudGV4dGFyZWEpO1xuXG4gICAgdGhpcy50ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2VkaXRvcicsICdlZGl0b3ItYmxvY2tfX3F1b3RlJyk7XG4gICAgdGhpcy50ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMScpO1xuICAgIHRoaXMudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnRleHRhcmVhLnNjcm9sbEhlaWdodCA+IHRoaXMudGV4dGFyZWEuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMudGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gdGhpcy50ZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMudGV4dGFyZWEuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy50ZXh0YXJlYS5mb2N1cygpO1xuICB9XG5cbiAgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9jayB7XG4gICAgbGV0IHJhdzogUmF3UXVvdGVCbG9jayA9IHtcbiAgICAgIHR5cGU6IFRZUEUsXG4gICAgICBjb250ZW50OiB0aGlzLnRleHRhcmVhLnZhbHVlXG4gICAgfTtcbiAgICByZXR1cm4gcmF3O1xuICB9XG59IiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBSYXdCbG9jaywgQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICd0ZXh0JztcblxuaW50ZXJmYWNlIFJhd1RleHRCbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dEJsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3VGV4dEJsb2NrID0gcmF3QmxvY2sgYXMgUmF3VGV4dEJsb2NrO1xuICAgIHJldHVybiBuZXcgVGV4dEJsb2NrKGVkaXRvciwgcmF3VGV4dEJsb2NrLmNvbnRlbnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0QmxvY2sgZXh0ZW5kcyBCbG9jayB7XG5cbiAgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdGV4dCcpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRleHRhcmVhKTtcblxuICAgIHRoaXMudGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX19lZGl0b3InLCAnZWRpdG9yLWJsb2NrX19ib2R5Jyk7XG4gICAgdGhpcy50ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMScpO1xuICAgIHRoaXMudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnRleHRhcmVhLnNjcm9sbEhlaWdodCA+IHRoaXMudGV4dGFyZWEuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMudGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gdGhpcy50ZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMudGV4dGFyZWEuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy50ZXh0YXJlYS5mb2N1cygpO1xuICB9XG5cbiAgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9jayB7XG4gICAgbGV0IHJhdzogUmF3VGV4dEJsb2NrID0ge1xuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMudGV4dGFyZWEudmFsdWVcbiAgICB9O1xuICAgIHJldHVybiByYXc7XG4gIH1cbn0iLCJpbXBvcnQge0VkaXRvcn0gZnJvbSAnLi4vZWRpdG9yJztcbmltcG9ydCB7QmxvY2ssIFJhd0Jsb2NrLCBCbG9ja1JlYWRlcn0gZnJvbSAnLi9ibG9jaydcblxuY29uc3QgVFlQRTogc3RyaW5nID0gJ3ZpZGVvJztcblxuaW50ZXJmYWNlIFJhd1ZpZGVvQmxvY2sgZXh0ZW5kcyBSYXdCbG9jayB7XG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVmlkZW9CbG9ja1JlYWRlciBpbXBsZW1lbnRzIEJsb2NrUmVhZGVyIHtcbiAgY2FuUGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrKTogQm9vbGVhbiB7XG4gICAgcmV0dXJuIHJhd0Jsb2NrLnR5cGUgPT0gVFlQRTtcbiAgfVxuXG4gIHBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jaywgZWRpdG9yOiBFZGl0b3IpOiBCbG9jayB7XG4gICAgbGV0IHJhd1ZpZGVvQmxvY2sgPSByYXdCbG9jayBhcyBSYXdWaWRlb0Jsb2NrO1xuICAgIHJldHVybiBuZXcgVmlkZW9CbG9jayhlZGl0b3IsIHJhd1ZpZGVvQmxvY2sudXJsKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmlkZW9CbG9jayBleHRlbmRzIEJsb2NrIHtcblxuICB1cGxvYWRQYW5lbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdXBsb2FkQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsb2FkaW5nSWNvbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBpbnB1dEZpbGU6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIHZpZGVvUGFuZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZpZGVvRWxlbTogSFRNTFZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgdmlkZW9Vcmw6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW8nKTtcbiAgICB0aGlzLnVwbG9hZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3ZpZGVvX191cGxvYWQtYnV0dG9uJyk7XG4gICAgdGhpcy52aWRlb0VsZW0uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdmlkZW8tZWxlbScpXG5cbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRQYW5lbCk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudmlkZW9QYW5lbCk7XG5cbiAgICB0aGlzLnZpZGVvUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy52aWRlb0VsZW0pO1xuXG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0RmlsZSk7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZEJ1dHRvbik7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmxvYWRpbmdJY29uKTtcblxuICAgIHRoaXMudmlkZW9FbGVtLmNvbnRyb2xzID0gdHJ1ZTtcbiAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgdGhpcy51cGxvYWRCdXR0b24uaW5uZXJIVE1MID0gJ1VwbG9hZCB2aWRlbyc7XG4gICAgdGhpcy51cGxvYWRCdXR0b24ub25jbGljayA9ICgpID0+IHsgdGhpcy5pbnB1dEZpbGUuY2xpY2soKSB9XG4gICAgdGhpcy5pbnB1dEZpbGUudHlwZSA9ICdmaWxlJztcbiAgICB0aGlzLmlucHV0RmlsZS5vbmNoYW5nZSA9IChldmVudDogRXZlbnQpOiBhbnkgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9ICg8SFRNTElucHV0RWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgICAgaWYgKHRhcmdldC5maWxlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAvLyBpbiBJRSAxMSwgdGhlIGNoYW5nZSBldmVudCBpcyBmaXJlZCB3aGVuIHdlIHByb2dyYW1tYXRpY2FsbHkgc2V0IGAuanMtZmlsZUlucHV0YCdzIHZhbHVlIHRvIGVtcHR5IHN0cmluZy5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXJ0TG9hZGluZygpO1xuXG4gICAgICBsZXQgcHJvZ3Jlc3NDYWxsYmFjayA9IChsb2FkZWQ6IE51bWJlciwgdG90YWw6IE51bWJlciwgbGFiZWw6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdJY29uLmlubmVySFRNTCA9IGxhYmVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0ljb24uaW5uZXJIVE1MID0gYFVwbG9hZGluZyB2aWRlbyAoJHtsb2FkZWR9LyR7dG90YWx9KS4uLmA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHN1Y2Nlc3NDYWxsYmFjayA9ICh2aWRlb1VybDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICAgICAgdGhpcy52aWRlb1VybCA9IHZpZGVvVXJsO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBmYWlsQ2FsbGJhY2sgPSAoZXJyb3I6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmVkaXRvci5vcHRpb25zLnVwbG9hZFZpZGVvKHRhcmdldC5maWxlc1swXSwgcHJvZ3Jlc3NDYWxsYmFjaywgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsQ2FsbGJhY2spO1xuICAgICAgdGhpcy5pbnB1dEZpbGUudmFsdWUgPSAnJztcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBzdGFydExvYWRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nSWNvbi5pbm5lckhUTUwgPSAnVXBsb2FkaW5nIHZpZGVvLi4uJ1xuICAgIHRoaXMubG9hZGluZ0ljb24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICB9XG5cbiAgc3RvcExvYWRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgdXBkYXRlVmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aWRlb1VybCkge1xuICAgICAgdGhpcy52aWRlb0VsZW0uc3JjID0gdGhpcy52aWRlb1VybDtcbiAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWRlb1BhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLnVwbG9hZFBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge31cblxuICBnZXRSYXdDb250ZW50KCk6IFJhd0Jsb2NrIHtcbiAgICBsZXQgcmF3OiBSYXdWaWRlb0Jsb2NrID0ge1xuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIHVybDogdGhpcy52aWRlb1VybCxcbiAgICB9O1xuICAgIHJldHVybiByYXc7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHtFZGl0b3J9IGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQge0Jsb2NrLCBSYXdCbG9jaywgQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICd5b3V0dWJlJztcblxuaW50ZXJmYWNlIFJhd1lvdXR1YmVCbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBZb3V0dWJlQmxvY2tSZWFkZXIgaW1wbGVtZW50cyBCbG9ja1JlYWRlciB7XG4gIGNhblBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jayk6IEJvb2xlYW4ge1xuICAgIHJldHVybiByYXdCbG9jay50eXBlID09IFRZUEU7XG4gIH1cblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2sge1xuICAgIHJldHVybiBuZXcgWW91dHViZUJsb2NrKGVkaXRvciwgKHJhd0Jsb2NrIGFzIFJhd1lvdXR1YmVCbG9jaykudXJsKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgWW91dHViZUJsb2NrIGV4dGVuZHMgQmxvY2sge1xuXG4gIGlucHV0UGFuZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0VGV4dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgcHJldmlld1BhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCB1cmw6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19feW91dHViZScpO1xuXG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMucHJldmlld1BhbmVsKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy5pbnB1dFBhbmVsKTtcblxuICAgIHRoaXMuaW5wdXRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0VGV4dCk7XG5cbiAgICB0aGlzLmlucHV0VGV4dC50eXBlID0gJ3RleHQnO1xuICAgIHRoaXMuaW5wdXRUZXh0LnZhbHVlID0gdXJsO1xuICAgIHRoaXMuaW5wdXRUZXh0Lm9uY2hhbmdlID0gKGV2ZW50OiBFdmVudCk6IGFueSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdFlvdXR1YmVJZCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHJlZ0V4cCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj18XFw/dj0pKFteI1xcJlxcP10qKS4qLztcbiAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsyXSA6IG51bGw7XG4gIH1cblxuICB1cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIGxldCB5b3V0dWJlSWQgPSBZb3V0dWJlQmxvY2suZXh0cmFjdFlvdXR1YmVJZCh0aGlzLmlucHV0VGV4dC52YWx1ZS50cmltKCkpO1xuICAgIGlmICh0aGlzLmltZykge1xuICAgICAgdGhpcy5pbWcucmVtb3ZlKCk7XG4gICAgICB0aGlzLmltZyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHlvdXR1YmVJZCkge1xuICAgICAgbGV0IHNvdXJjZSA9IFwiaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvXCIgKyB5b3V0dWJlSWQgKyBcIi9zZGRlZmF1bHQuanBnXCI7XG4gICAgICBsZXQgZmFsbGJhY2tTb3VyY2UgPSBcImh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpL1wiICsgeW91dHViZUlkICsgXCIvMC5qcGdcIjtcblxuICAgICAgdGhpcy5pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHRoaXMuaW1nLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19feW91dHViZV9faW1nJyk7XG4gICAgICB0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImxvYWRcIixcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIElmIHRoZSBwcmV2aWV3IGltYWdlIGRvZXNuJ3QgZXhpc3QsIHlvdXR1YmUgcmV0dXJucyA0MDQgd2l0aCBhIGRlZmF1bHQgaW1hZ2Ugd2hvc2Ugd2lkdGggaXMgMTIwcHguXG4gICAgICAgICAgLy8gU2luY2Ugd2UgY2Fubm90IGNoZWNrIHRoZSBzdGF0dXMgY29kZSwgd2UgaGF2ZSB0byBjaGVjayB0aGUgbmF0dXJhbCB3aWR0aCBpbnN0ZWFkLlxuICAgICAgICAgIGlmICh0aGlzLmltZy5uYXR1cmFsV2lkdGggPCA2MDAgJiYgdGhpcy5pbWcuc3JjICE9IGZhbGxiYWNrU291cmNlKSB7XG4gICAgICAgICAgICB0aGlzLmltZy5zcmMgPSBmYWxsYmFja1NvdXJjZVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmltZy5yZW1vdmVBdHRyaWJ1dGUoXCJ3aWR0aFwiKTsgLy8gSUUgMTEgbmVlZHMgdGhpcyBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMuaW1nLnJlbW92ZUF0dHJpYnV0ZShcImhlaWdodFwiKTsgLy8gSUUgMTEgbmVlZHMgdGhpcyBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMucHJldmlld1BhbmVsLmFwcGVuZENoaWxkKHRoaXMuaW1nKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuaW1nLnNyYyA9IHNvdXJjZTtcbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0VGV4dC5mb2N1cygpO1xuICB9XG5cbiAgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9jayB7XG4gICAgbGV0IHJhdzogUmF3WW91dHViZUJsb2NrID0ge1xuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIHVybDogdGhpcy5pbnB1dFRleHQudmFsdWUudHJpbSgpXG4gICAgfTtcbiAgICByZXR1cm4gcmF3O1xuICB9XG59XG4iLCJpbXBvcnQge0Jsb2NrfSBmcm9tICcuL2Jsb2NrL2Jsb2NrJztcbmltcG9ydCB7SW1hZ2VCbG9ja30gZnJvbSAnLi9ibG9jay9pbWFnZS1ibG9jayc7XG5pbXBvcnQge1F1b3RlQmxvY2t9IGZyb20gJy4vYmxvY2svcXVvdGUtYmxvY2snO1xuaW1wb3J0IHtIZWFkZXJCbG9ja30gZnJvbSAnLi9ibG9jay9oZWFkZXItYmxvY2snO1xuaW1wb3J0IHtUZXh0QmxvY2t9IGZyb20gJy4vYmxvY2svdGV4dC1ibG9jayc7XG5pbXBvcnQge0VkaXRvcn0gZnJvbSAnLi9lZGl0b3InO1xuaW1wb3J0IHtZb3V0dWJlQmxvY2t9IGZyb20gXCIuL2Jsb2NrL3lvdXR1YmUtYmxvY2tcIjtcblxuZXhwb3J0IGNsYXNzIENvbnRyb2wge1xuICBlbGVtOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXNoYm9hcmQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV4cGFuZEhhbmRsZTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcXVvdGVCdXR0b246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckJ1dHRvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGV4dEJ1dHRvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1hZ2VCdXR0b246IEhUTUxEaXZFbGVtZW50O1xuICB2aWRlb0J1dHRvbjogSFRNTERpdkVsZW1lbnQ7XG4gIHlvdXR1YmVCdXR0b246IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWRpdG9yOiBFZGl0b3IsIHB1YmxpYyBibG9jazogQmxvY2spIHtcblxuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbCcpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmV4cGFuZEhhbmRsZSk7XG4gICAgdGhpcy5leHBhbmRIYW5kbGUuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2V4cGFuZC1oYW5kbGUnLCAnanMtZXhwYW5kLWhhbmRsZScpXG5cbiAgICBsZXQgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5leHBhbmRIYW5kbGUuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcbiAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2V4cGFuZC1oYW5kbGVfX2J1dHRvbicpXG4gICAgZXhwYW5kQnV0dG9uLmlubmVySFRNTCA9ICcrJztcbiAgICB0aGlzLmV4cGFuZEhhbmRsZS5vbmNsaWNrID0gKCkgPT4geyB0aGlzLmV4cGFuZERhc2hib2FyZCgpOyB9O1xuXG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMuZGFzaGJvYXJkKTtcbiAgICB0aGlzLmRhc2hib2FyZC5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZGFzaGJvYXJkJylcblxuICAgIHRoaXMuZGFzaGJvYXJkLmFwcGVuZENoaWxkKHRoaXMuaGVhZGVyQnV0dG9uKTtcbiAgICB0aGlzLmhlYWRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZGFzaGJvYXJkX19idXR0b24nLCAnanMtaGVhZGVyLWJ1dHRvbicpO1xuICAgIHRoaXMuaGVhZGVyQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIyXCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDIyIDE0XCI+PHRleHQgZmlsbD1cIiM2NjZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZm9udC1mYW1pbHk9XCJTb3VyY2VTYW5zUHJvLUJvbGQsIFNvdXJjZSBTYW5zIFByb1wiIGZvbnQtc2l6ZT1cIjIwXCIgZm9udC13ZWlnaHQ9XCJib2xkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00OCAtMzMpXCI+PHRzcGFuIHg9XCI0Ni45OFwiIHk9XCI0N1wiPkgxPC90c3Bhbj48L3RleHQ+PC9zdmc+PHA+SGVhZGVyIFRleHQ8L3A+JztcbiAgICB0aGlzLmhlYWRlckJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZWRpdG9yLmFkZChuZXcgSGVhZGVyQmxvY2soZWRpdG9yLCAnJyksIHRoaXMuYmxvY2spO1xuICAgICAgdGhpcy5jb2xsYXBzZUFsbCgpO1xuICAgIH07XG5cbiAgICB0aGlzLmRhc2hib2FyZC5hcHBlbmRDaGlsZCh0aGlzLnF1b3RlQnV0dG9uKTtcbiAgICB0aGlzLnF1b3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19kYXNoYm9hcmRfX2J1dHRvbicsICdqcy1xdW90ZS1idXR0b24nKTtcbiAgICB0aGlzLnF1b3RlQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDE4IDE1XCI+PHBhdGggZmlsbD1cIiM2NjZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk02Ljg4MSAxNC4xOTVILjUxMVY5LjY0YzAtMS44NDMuMTYzLTMuMjk4LjQ4OC00LjM2My4zMjUtMS4wNjUuOTI2LTIuMDIxIDEuODAyLTIuODY3QzMuNjc3IDEuNTYyIDQuNzk2Ljg5OCA2LjE1Ni40MTRsMS4yNDYgMi42M2MtMS4yNjkuNDIyLTIuMTggMS4wMTItMi43MzEgMS43NjctLjU1Mi43NTYtLjg0MiAxLjc2LS44NzMgMy4wMTVoMy4wODN2Ni4zN3ptMTAuNjMgMGgtNi4zNjlWOS42NGMwLTEuODU4LjE2My0zLjMxNy40ODgtNC4zNzQuMzI1LTEuMDU4LjkyOS0yLjAxIDEuODEzLTIuODU2Ljg4NC0uODQ3IDEuOTk4LTEuNTExIDMuMzQzLTEuOTk1bDEuMjQ3IDIuNjNjLTEuMjcuNDIyLTIuMTggMS4wMTItMi43MzEgMS43NjctLjU1Mi43NTYtLjg0MyAxLjc2LS44NzMgMy4wMTVoMy4wODN2Ni4zN3pcIi8+PC9zdmc+PHA+UXVvdGU8cD4nO1xuICAgIHRoaXMucXVvdGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGVkaXRvci5hZGQobmV3IFF1b3RlQmxvY2soZWRpdG9yLCAnJyksIHRoaXMuYmxvY2spO1xuICAgICAgdGhpcy5jb2xsYXBzZUFsbCgpO1xuICAgIH07XG5cbiAgICB0aGlzLmRhc2hib2FyZC5hcHBlbmRDaGlsZCh0aGlzLnRleHRCdXR0b24pO1xuICAgIHRoaXMudGV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fZGFzaGJvYXJkX19idXR0b24nLCAnanMtdGV4dC1idXR0b24nKTtcbiAgICB0aGlzLnRleHRCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjAgMTZcIj48dGV4dCBmaWxsPVwiIzY2NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBmb250LWZhbWlseT1cIlNvdXJjZVNhbnNQcm8tUmVndWxhciwgU291cmNlIFNhbnMgUHJvXCIgZm9udC1zaXplPVwiMjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE0NiAtMzIpXCI+IDx0c3BhbiB4PVwiMTQ0LjU3XCIgeT1cIjQ3XCI+QmQ8L3RzcGFuPiA8L3RleHQ+PC9zdmc+PHA+Qm9keSBUZXh0PC9wPic7XG4gICAgdGhpcy50ZXh0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBlZGl0b3IuYWRkKG5ldyBUZXh0QmxvY2soZWRpdG9yLCAnJyksIHRoaXMuYmxvY2spO1xuICAgICAgdGhpcy5jb2xsYXBzZUFsbCgpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5lZGl0b3Iub3B0aW9ucy51cGxvYWRJbWFnZSkge1xuICAgICAgdGhpcy5pbWFnZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5kYXNoYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy5pbWFnZUJ1dHRvbik7XG5cbiAgICAgIHRoaXMuaW1hZ2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2Rhc2hib2FyZF9fYnV0dG9uJywgJ2pzLWltYWdlLWJ1dHRvbicpO1xuICAgICAgdGhpcy5pbWFnZUJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNSAyMFwiPjxwYXRoIGZpbGw9XCIjNjY2XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIGQ9XCJNMS45MDIgMEMuODYyIDAgMCAuOTA3IDAgMnYxNmMwIDEuMDkzLjg2MiAyIDEuOTAyIDJoMjEuMTk2YzEuMDQgMCAxLjkwMi0uOTA3IDEuOTAyLTJWMmMwLTEuMDkzLS44NjItMi0xLjkwMi0ySDEuOTAyem0wIDEuNzE0aDIxLjE5NmMuMTY0IDAgLjI3Mi4xMTMuMjcyLjI4NnYxMS4zNTdsLTQuMTEtMy40NTVhLjgwNS44MDUgMCAwIDAtLjk2OS0uMDQ1bC0zLjg1NSAyLjc4Ni01LjIzLTQuNDU1QS43OTguNzk4IDAgMCAwIDguNjAxIDhhLjc5Ni43OTYgMCAwIDAtLjM3My4xNTJMMS42MyAxMi45MzdWMmMwLS4xNzMuMTA4LS4yODYuMjcyLS4yODZ6TTE0LjQwMiA0Yy0xLjM0IDAtMi40NDUgMS4xNjEtMi40NDUgMi41NzEgMCAxLjQxIDEuMTA0IDIuNTcyIDIuNDQ1IDIuNTcyIDEuMzQxIDAgMi40NDYtMS4xNjIgMi40NDYtMi41NzIgMC0xLjQxLTEuMTA1LTIuNTcxLTIuNDQ2LTIuNTcxem0wIDEuNzE0Yy40NiAwIC44MTUuMzc0LjgxNS44NTcgMCAuNDg0LS4zNTUuODU4LS44MTUuODU4LS40NiAwLS44MTUtLjM3NC0uODE1LS44NTggMC0uNDgzLjM1NS0uODU3LjgxNS0uODU3ek04LjY2MiA5LjkzbDUuMjMgNC40NDZhLjgwNS44MDUgMCAwIDAgLjk2OS4wNDVsMy44NDctMi43ODYgNC42NjIgMy45MlYxOGMwIC4xNzMtLjEwOC4yODYtLjI3Mi4yODZIMS45MDJjLS4xNjQgMC0uMjcyLS4xMTMtLjI3Mi0uMjg2di0yLjk3M2w3LjAzMi01LjA5OHpcIi8+PC9zdmc+PHA+SW1hZ2U8L3A+JztcbiAgICAgIHRoaXMuaW1hZ2VCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZWRpdG9yLmFkZChuZXcgSW1hZ2VCbG9jayhlZGl0b3IsICcnKSwgdGhpcy5ibG9jayk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VBbGwoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5kYXNoYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy55b3V0dWJlQnV0dG9uKTtcbiAgICB0aGlzLnlvdXR1YmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX2Rhc2hib2FyZF9fYnV0dG9uJywgJ2pzLXlvdXR1YmUtYnV0dG9uJylcbiAgICB0aGlzLnlvdXR1YmVCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjUgMjBcIj48ZyBmaWxsPVwiIzY2NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cGF0aCBkPVwiTTYuMjUgMEM0LjkxNSAwIDMuOS0uMDA0IDMuMDYuMDkyIDIuMjIyLjE4OCAxLjQ4NS4zOTcuOTM5Ljk1MmMtLjU0NS41NTQtLjc1IDEuMzA1LS44NDYgMi4xNkMtLjAwMiAzLjk2OSAwIDUuMDAzIDAgNi4zNjV2Ny4yNzJjMCAxLjM2LS4wMDQgMi4zOTMuMDkgMy4yNDguMDk1Ljg1NS4zIDEuNjA2Ljg0NSAyLjE2LjU0NC41NTYgMS4yODIuNzY2IDIuMTIyLjg2Mi44NC4wOTcgMS44NTYuMDk0IDMuMTkzLjA5NGgxMi41YzEuMzM2IDAgMi4zNS4wMDQgMy4xOS0uMDkyLjg0LS4wOTYgMS41NzctLjMwNSAyLjEyMi0uODYuNTQ1LS41NTQuNzUtMS4zMDUuODQ2LTIuMTYuMDk1LS44NTYuMDkyLTEuODkuMDkyLTMuMjUyVjYuMzY0YzAtMS4zNi4wMDQtMi4zOTMtLjA5LTMuMjQ4LS4wOTUtLjg1NS0uMy0xLjYwNS0uODQ1LTIuMTZDMjMuNTIxLjQgMjIuNzgzLjE5IDIxLjk0My4wOTMgMjEuMTAzLS4wMDIgMjAuMDg3IDAgMTguNzUgMEg2LjI1em0wIDEuODE4aDEyLjVjMS4zMzYgMCAyLjMyNy4wMDUgMi45OTMuMDgyLjY2NS4wNzYuOTM0LjIxIDEuMDYuMzM5LjEyNi4xMjkuMjU2LjQwMi4zMzEgMS4wOC4wNzUuNjc3LjA4IDEuNjg1LjA4IDMuMDQ1djcuMjcyYzAgMS4zNjEtLjAwNSAyLjM3LS4wOCAzLjA0Ny0uMDc1LjY3OC0uMjA3Ljk1MS0uMzMzIDEuMDgtLjEyNi4xMjgtLjM5NC4yNjEtMS4wNi4zMzctLjY2Ni4wNzYtMS42NTYuMDgyLTIuOTkuMDgySDYuMjVjLTEuMzM3IDAtMi4zMjctLjAwNS0yLjk5My0uMDgyLS42NjYtLjA3Ni0uOTM0LS4yMS0xLjA2LS4zMzktLjEyNy0uMTI5LS4yNTctLjQwMi0uMzMyLTEuMDgtLjA3NS0uNjc3LS4wOC0xLjY4NS0uMDgtMy4wNDVWNi4zNjRjMC0xLjM2MS4wMDUtMi4zNy4wOC0zLjA0Ny4wNzUtLjY3OC4yMDctLjk1MS4zMzMtMS4wOC4xMjYtLjEyOC4zOTUtLjI2MSAxLjA2LS4zMzcuNjY2LS4wNzYgMS42NTYtLjA4MiAyLjk5MS0uMDgyelwiLz48cGF0aCBkPVwiTTguNzQ0IDQuMTkyYTEuMzY5IDEuMzY5IDAgMCAwLS43MDggMS4yMDJ2OS4yMTJjMCAuNS4yNzEuOTY1LjcwOCAxLjIwMi40MzQuMjM2Ljk2NS4yMSAxLjM3NC0uMDY3bDYuNzg0LTQuNjA2aC4wMDFhMS4zNzYgMS4zNzYgMCAwIDAtLjAwMS0yLjI3Yy0xLjQyOC0uOTY4LTUuMjE2LTMuNTQtNi43ODQtNC42MDVhMS4zMjQgMS4zMjQgMCAwIDAtMS4zNzQtLjA2OHptMS4wNzggMi4wNWMxLjYxIDEuMDk0IDQuMDc4IDIuNzcgNS41MzUgMy43NThsLTUuNTM1IDMuNzU3VjYuMjQzelwiLz48L2c+PC9zdmc+PHA+WW91dHViZTwvcD4nO1xuICAgIHRoaXMueW91dHViZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZWRpdG9yLmFkZChuZXcgWW91dHViZUJsb2NrKGVkaXRvciwgJycpLCB0aGlzLmJsb2NrKTtcbiAgICAgIHRoaXMuY29sbGFwc2VBbGwoKTtcbiAgICB9O1xuXG4gICAgLy8gaWYgKHRoaXMuZWRpdG9yLm9wdGlvbnMudXBsb2FkVmlkZW8pIHtcbiAgICAvLyAgIHRoaXMudmlkZW9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyAgIHRoaXMuZGFzaGJvYXJkLmFwcGVuZENoaWxkKHRoaXMudmlkZW9CdXR0b24pO1xuXG4gICAgLy8gICB0aGlzLnZpZGVvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19kYXNoYm9hcmRfX2J1dHRvbicpXG4gICAgLy8gICB0aGlzLnZpZGVvQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI1IDIwXCI+PGcgZmlsbD1cIiM2NjZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PHBhdGggZD1cIk02LjI1IDBDNC45MTUgMCAzLjktLjAwNCAzLjA2LjA5MiAyLjIyMi4xODggMS40ODUuMzk3LjkzOS45NTJjLS41NDUuNTU0LS43NSAxLjMwNS0uODQ2IDIuMTZDLS4wMDIgMy45NjkgMCA1LjAwMyAwIDYuMzY1djcuMjcyYzAgMS4zNi0uMDA0IDIuMzkzLjA5IDMuMjQ4LjA5NS44NTUuMyAxLjYwNi44NDUgMi4xNi41NDQuNTU2IDEuMjgyLjc2NiAyLjEyMi44NjIuODQuMDk3IDEuODU2LjA5NCAzLjE5My4wOTRoMTIuNWMxLjMzNiAwIDIuMzUuMDA0IDMuMTktLjA5Mi44NC0uMDk2IDEuNTc3LS4zMDUgMi4xMjItLjg2LjU0NS0uNTU0Ljc1LTEuMzA1Ljg0Ni0yLjE2LjA5NS0uODU2LjA5Mi0xLjg5LjA5Mi0zLjI1MlY2LjM2NGMwLTEuMzYuMDA0LTIuMzkzLS4wOS0zLjI0OC0uMDk1LS44NTUtLjMtMS42MDUtLjg0NS0yLjE2QzIzLjUyMS40IDIyLjc4My4xOSAyMS45NDMuMDkzIDIxLjEwMy0uMDAyIDIwLjA4NyAwIDE4Ljc1IDBINi4yNXptMCAxLjgxOGgxMi41YzEuMzM2IDAgMi4zMjcuMDA1IDIuOTkzLjA4Mi42NjUuMDc2LjkzNC4yMSAxLjA2LjMzOS4xMjYuMTI5LjI1Ni40MDIuMzMxIDEuMDguMDc1LjY3Ny4wOCAxLjY4NS4wOCAzLjA0NXY3LjI3MmMwIDEuMzYxLS4wMDUgMi4zNy0uMDggMy4wNDctLjA3NS42NzgtLjIwNy45NTEtLjMzMyAxLjA4LS4xMjYuMTI4LS4zOTQuMjYxLTEuMDYuMzM3LS42NjYuMDc2LTEuNjU2LjA4Mi0yLjk5LjA4Mkg2LjI1Yy0xLjMzNyAwLTIuMzI3LS4wMDUtMi45OTMtLjA4Mi0uNjY2LS4wNzYtLjkzNC0uMjEtMS4wNi0uMzM5LS4xMjctLjEyOS0uMjU3LS40MDItLjMzMi0xLjA4LS4wNzUtLjY3Ny0uMDgtMS42ODUtLjA4LTMuMDQ1VjYuMzY0YzAtMS4zNjEuMDA1LTIuMzcuMDgtMy4wNDcuMDc1LS42NzguMjA3LS45NTEuMzMzLTEuMDguMTI2LS4xMjguMzk1LS4yNjEgMS4wNi0uMzM3LjY2Ni0uMDc2IDEuNjU2LS4wODIgMi45OTEtLjA4MnpcIi8+PHBhdGggZD1cIk04Ljc0NCA0LjE5MmExLjM2OSAxLjM2OSAwIDAgMC0uNzA4IDEuMjAydjkuMjEyYzAgLjUuMjcxLjk2NS43MDggMS4yMDIuNDM0LjIzNi45NjUuMjEgMS4zNzQtLjA2N2w2Ljc4NC00LjYwNmguMDAxYTEuMzc2IDEuMzc2IDAgMCAwLS4wMDEtMi4yN2MtMS40MjgtLjk2OC01LjIxNi0zLjU0LTYuNzg0LTQuNjA1YTEuMzI0IDEuMzI0IDAgMCAwLTEuMzc0LS4wNjh6bTEuMDc4IDIuMDVjMS42MSAxLjA5NCA0LjA3OCAyLjc3IDUuNTM1IDMuNzU4bC01LjUzNSAzLjc1N1Y2LjI0M3pcIi8+PC9nPjwvc3ZnPjxwPlZpZGVvPC9wPic7XG4gICAgLy8gICB0aGlzLnZpZGVvQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgLy8gICAgIGVkaXRvci5hZGQobmV3IFZpZGVvQmxvY2soZWRpdG9yLCAnJyksIHRoaXMuYmxvY2spO1xuICAgIC8vICAgfTtcbiAgICAvLyB9XG4gIH1cblxuICBjb2xsYXBzZURhc2hib2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhc2hib2FyZC5zdHlsZS5tYXhIZWlnaHQgPSAnMCc7XG4gIH1cblxuICBleHBhbmREYXNoYm9hcmQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xsYXBzZUFsbCgpO1xuICAgIHRoaXMuZGFzaGJvYXJkLnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZGFzaGJvYXJkLnNjcm9sbEhlaWdodCArIDMwICsgXCJweFwiO1xuICB9XG5cbiAgY29sbGFwc2VBbGwoKSB7XG4gICAgZm9yIChsZXQgaT0wO2kgPCB0aGlzLmVkaXRvci5ibG9ja3MubGVuZ3RoO2krKykge1xuICAgICAgdGhpcy5lZGl0b3IuYmxvY2tzW2ldLmNvbnRyb2wuY29sbGFwc2VEYXNoYm9hcmQoKTtcbiAgICB9XG4gICAgdGhpcy5lZGl0b3IubGFzdENvbnRyb2wuY29sbGFwc2VEYXNoYm9hcmQoKTtcbiAgfVxufSIsImltcG9ydCB7Q29udHJvbH0gZnJvbSAnLi9jb250cm9sJztcbmltcG9ydCB7QmxvY2ssIEJsb2NrUmVhZGVyLCBSYXdCbG9ja30gZnJvbSAnLi9ibG9jay9ibG9jayc7XG5pbXBvcnQge0ltYWdlQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2svaW1hZ2UtYmxvY2snO1xuaW1wb3J0IHtRdW90ZUJsb2NrUmVhZGVyfSBmcm9tICcuL2Jsb2NrL3F1b3RlLWJsb2NrJztcbmltcG9ydCB7SGVhZGVyQmxvY2tSZWFkZXJ9IGZyb20gJy4vYmxvY2svaGVhZGVyLWJsb2NrJztcbmltcG9ydCB7VGV4dEJsb2NrUmVhZGVyfSBmcm9tICcuL2Jsb2NrL3RleHQtYmxvY2snO1xuaW1wb3J0IHtWaWRlb0Jsb2NrUmVhZGVyfSBmcm9tICcuL2Jsb2NrL3ZpZGVvLWJsb2NrJztcbmltcG9ydCB7WW91dHViZUJsb2NrUmVhZGVyfSBmcm9tICcuL2Jsb2NrL3lvdXR1YmUtYmxvY2snO1xuXG5jb25zdCBCTE9DS1M6IEFycmF5PEJsb2NrUmVhZGVyPiA9IFtcbiAgbmV3IFRleHRCbG9ja1JlYWRlcigpLFxuICBuZXcgSGVhZGVyQmxvY2tSZWFkZXIoKSxcbiAgbmV3IFF1b3RlQmxvY2tSZWFkZXIoKSxcbiAgbmV3IEltYWdlQmxvY2tSZWFkZXIoKSxcbiAgbmV3IFZpZGVvQmxvY2tSZWFkZXIoKSxcbiAgbmV3IFlvdXR1YmVCbG9ja1JlYWRlcigpLFxuXTtcblxuZnVuY3Rpb24gY29udmVydFJhd0NvbnRlbnQocmF3Q29udGVudDogQXJyYXk8UmF3QmxvY2s+LCBlZGl0b3I6IEVkaXRvcik6IEFycmF5PEJsb2NrPiB7XG4gIGxldCBibG9ja3M6IEFycmF5PEJsb2NrPiA9IFtdO1xuXG4gIGZvciAobGV0IHJhd0Jsb2NrIG9mIHJhd0NvbnRlbnQpIHtcbiAgICBsZXQgcHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgZm9yIChsZXQgYmxvY2sgb2YgQkxPQ0tTKSB7XG4gICAgICBpZiAoYmxvY2suY2FuUGFyc2UocmF3QmxvY2spKSB7XG4gICAgICAgIHByb2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIGJsb2Nrcy5wdXNoKGJsb2NrLnBhcnNlKHJhd0Jsb2NrLCBlZGl0b3IpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwcm9jZXNzZWQpIHtcbiAgICAgIGNvbnNvbGUud2FybihgVW5yZWNvZ25pemVkIGJsb2NrIHR5cGU6ICcke3Jhd0Jsb2NrLnR5cGV9Jy4gSWdub3JlLmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBibG9ja3M7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdG9yT3B0aW9ucyB7XG4gIGNvbnRlbnQ6IEFycmF5PFJhd0Jsb2NrPjtcbiAgdXBsb2FkSW1hZ2U6IChmaWxlOiBGaWxlLCBzdWNjZXNzQ2FsbGJhY2s6ICh1cmw6IHN0cmluZykgPT4gdm9pZCwgZmFpbHVyZUNhbGxiYWNrOiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZCkgPT4gdm9pZDtcbiAgdXBsb2FkVmlkZW86IChmaWxlOiBGaWxlLCBwcm9ncmVzc0NhbGxiYWNrOiAobG9hZGVkOiBOdW1iZXIsIHRvdGFsOiBOdW1iZXIsIGxhYmVsOiBTdHJpbmcpID0+IHZvaWQsIHN1Y2Nlc3NDYWxsYmFjazogKHRodW1ibmFpbFVybDogc3RyaW5nLCB2aWRlb1VybDogc3RyaW5nKSA9PiB2b2lkLCBmYWlsdXJlQ2FsbGJhY2s6IChlcnJvcjogc3RyaW5nKSA9PiB2b2lkKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgRWRpdG9yIHtcbiAgYmxvY2tzOiBBcnJheTxCbG9jaz47XG4gIGxhc3RDb250cm9sOiBDb250cm9sO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtOiBIVE1MRGl2RWxlbWVudCxcbiAgICBwdWJsaWMgb3B0aW9uczogRWRpdG9yT3B0aW9uc1xuICApIHtcbiAgICB0aGlzLmJsb2NrcyA9IGNvbnZlcnRSYXdDb250ZW50KHRoaXMub3B0aW9ucy5jb250ZW50LCB0aGlzKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYWRkKGJsb2NrOiBCbG9jaywgYmVmb3JlQmxvY2s6IEJsb2NrKSB7XG4gICAgaWYgKGJlZm9yZUJsb2NrKSB7XG4gICAgICBmb3IgKGxldCBpPTA7aSA8IHRoaXMuYmxvY2tzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgaWYgKGJlZm9yZUJsb2NrID09IHRoaXMuYmxvY2tzW2ldKSB7XG4gICAgICAgICAgdGhpcy5ibG9ja3Muc3BsaWNlKGksIDAsIGJsb2NrKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5lbGVtLmluc2VydEJlZm9yZShibG9jay5lbGVtLCBiZWZvcmVCbG9jay5lbGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ibG9ja3MucHVzaChibG9jayk7XG4gICAgICB0aGlzLmVsZW0uaW5zZXJ0QmVmb3JlKGJsb2NrLmVsZW0sIHRoaXMubGFzdENvbnRyb2wuZWxlbSk7XG4gICAgfVxuXG4gICAgYmxvY2suZm9jdXMoKTtcbiAgICBibG9jay5jb250cm9sLmV4cGFuZERhc2hib2FyZCgpO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpOiBBcnJheTxSYXdCbG9jaz4ge1xuICAgIGxldCByYXdDb250ZW50OiBBcnJheTxSYXdCbG9jaz4gPSBbXTtcbiAgICBmb3IgKGxldCBibG9jayBvZiB0aGlzLmJsb2Nrcykge1xuICAgICAgcmF3Q29udGVudC5wdXNoKGJsb2NrLmdldFJhd0NvbnRlbnQoKSk7XG4gICAgfVxuICAgIHJldHVybiByYXdDb250ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKSB7XG4gICAgZm9yIChsZXQgYmxvY2sgb2YgdGhpcy5ibG9ja3MpIHtcbiAgICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZChibG9jay5lbGVtKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5sYXN0Q29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMsIG51bGwpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmxhc3RDb250cm9sLmVsZW0pO1xuICB9XG59XG4iLCJpbXBvcnQge0VkaXRvciwgRWRpdG9yT3B0aW9uc30gZnJvbSAnLi9lZGl0b3IvZWRpdG9yJ1xuXG4oPGFueT53aW5kb3cpLmluc3RhbGxFZGl0b3IgPSAoZWxlbTogSFRNTERpdkVsZW1lbnQsIG9wdGlvbnM6IEVkaXRvck9wdGlvbnMgPSAoPEVkaXRvck9wdGlvbnM+e30pKSA9PiB7XG4gIHJldHVybiBuZXcgRWRpdG9yKGVsZW0sIG9wdGlvbnMpO1xufTsiXSwic291cmNlUm9vdCI6IiJ9