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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/editor/block/block.ts":
/*!***********************************!*\
  !*** ./src/editor/block/block.ts ***!
  \***********************************/
/*! exports provided: Block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../control */ "./src/editor/control.ts");

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

/***/ "./src/editor/block/image-block.ts":
/*!*****************************************!*\
  !*** ./src/editor/block/image-block.ts ***!
  \*****************************************/
/*! exports provided: ImageBlockReader, ImageBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBlockReader", function() { return ImageBlockReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBlock", function() { return ImageBlock; });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/editor/block/block.ts");
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

/***/ "./src/editor/block/text-block.ts":
/*!****************************************!*\
  !*** ./src/editor/block/text-block.ts ***!
  \****************************************/
/*! exports provided: TextBlockReader, TextBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBlockReader", function() { return TextBlockReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBlock", function() { return TextBlock; });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/editor/block/block.ts");
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

/***/ "./src/editor/block/video-block.ts":
/*!*****************************************!*\
  !*** ./src/editor/block/video-block.ts ***!
  \*****************************************/
/*! exports provided: VideoBlockReader, VideoBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoBlockReader", function() { return VideoBlockReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoBlock", function() { return VideoBlock; });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/editor/block/block.ts");
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

/***/ "./src/editor/control.ts":
/*!*******************************!*\
  !*** ./src/editor/control.ts ***!
  \*******************************/
/*! exports provided: Control */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Control", function() { return Control; });
/* harmony import */ var _block_image_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/image-block */ "./src/editor/block/image-block.ts");
/* harmony import */ var _block_text_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block/text-block */ "./src/editor/block/text-block.ts");
/* harmony import */ var _block_video_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block/video-block */ "./src/editor/block/video-block.ts");



var Control = /** @class */ (function () {
    function Control(editor, block) {
        var _this = this;
        this.editor = editor;
        this.block = block;
        this.elem = document.createElement('div');
        this.textButton = document.createElement('span');
        this.elem.appendChild(this.textButton);
        this.elem.classList.add('editor-control');
        this.textButton.classList.add('editor-control__text-button');
        this.textButton.innerHTML = 'Add text';
        this.textButton.onclick = function () {
            editor.add(new _block_text_block__WEBPACK_IMPORTED_MODULE_1__["TextBlock"](editor, ''), _this.block);
        };
        if (this.editor.options.uploadImage) {
            this.imageButton = document.createElement('span');
            this.elem.appendChild(this.imageButton);
            this.imageButton.classList.add('editor-control__image-button');
            this.imageButton.innerHTML = 'Add image';
            this.imageButton.onclick = function () {
                editor.add(new _block_image_block__WEBPACK_IMPORTED_MODULE_0__["ImageBlock"](editor, ''), _this.block);
            };
        }
        if (this.editor.options.uploadVideo) {
            this.videoButton = document.createElement('span');
            this.elem.appendChild(this.videoButton);
            this.videoButton.classList.add('editor-control__video-button');
            this.videoButton.innerHTML = 'Add video';
            this.videoButton.onclick = function () {
                editor.add(new _block_video_block__WEBPACK_IMPORTED_MODULE_2__["VideoBlock"](editor, ''), _this.block);
            };
        }
    }
    return Control;
}());



/***/ }),

/***/ "./src/editor/editor.ts":
/*!******************************!*\
  !*** ./src/editor/editor.ts ***!
  \******************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control */ "./src/editor/control.ts");
/* harmony import */ var _block_image_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block/image-block */ "./src/editor/block/image-block.ts");
/* harmony import */ var _block_text_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block/text-block */ "./src/editor/block/text-block.ts");
/* harmony import */ var _block_video_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block/video-block */ "./src/editor/block/video-block.ts");




var BLOCKS = [
    new _block_text_block__WEBPACK_IMPORTED_MODULE_2__["TextBlockReader"](),
    new _block_image_block__WEBPACK_IMPORTED_MODULE_1__["ImageBlockReader"](),
    new _block_video_block__WEBPACK_IMPORTED_MODULE_3__["VideoBlockReader"]()
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor/editor */ "./src/editor/editor.ts");

window.installEditor = function (elem, options) {
    if (options === void 0) { options = {}; }
    return new _editor_editor__WEBPACK_IMPORTED_MODULE_0__["Editor"](elem, options);
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9ibG9jay9ibG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL2Jsb2NrL2ltYWdlLWJsb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IvYmxvY2svdGV4dC1ibG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL2Jsb2NrL3ZpZGVvLWJsb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IvY29udHJvbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL2VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBcUM7QUFZckM7SUFJRSxlQUFtQixNQUFjO1FBQWQs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QyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDcEZEO0FBQUE7QUFBdUQ7QUFFakQsTUFBTyxDQUFDLGFBQWEsR0FBRyxVQUFDLElBQW9CLEVBQUUsT0FBNEM7SUFBNUMsb0NBQXlDLEVBQUc7SUFDL0YsT0FBTyxJQUFJLHFEQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQyIsImZpbGUiOiJlZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IENvbnRyb2wgfSBmcm9tICcuLi9jb250cm9sJztcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gJy4uL2VkaXRvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmF3QmxvY2sge1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuXG4gIHBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jaywgZWRpdG9yOiBFZGl0b3IpOiBCbG9ja1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmxvY2sge1xuICBlbGVtOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250cm9sOiBDb250cm9sO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvcikge1xuICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sKGVkaXRvciwgdGhpcyk7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9jaycpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRyb2wuZWxlbSk7XG4gIH1cblxuICBhYnN0cmFjdCBnZXRSYXdDb250ZW50KCk6IFJhd0Jsb2NrXG5cbiAgYWJzdHJhY3QgZm9jdXMoKTogdm9pZFxufVxuXG4iLCJpbXBvcnQgeyBFZGl0b3IgfSBmcm9tICcuLi9lZGl0b3InO1xuaW1wb3J0IHsgQmxvY2ssIFJhd0Jsb2NrLCBCbG9ja1JlYWRlciB9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICdpbWFnZSc7XG5cbmludGVyZmFjZSBSYXdJbWFnZUJsb2NrIGV4dGVuZHMgUmF3QmxvY2sge1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlQmxvY2tSZWFkZXIgaW1wbGVtZW50cyBCbG9ja1JlYWRlciB7XG4gIGNhblBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jayk6IEJvb2xlYW4ge1xuICAgIHJldHVybiByYXdCbG9jay50eXBlID09IFRZUEU7XG4gIH1cblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2sge1xuICAgIGxldCByYXdJbWFnZUJsb2NrID0gcmF3QmxvY2sgYXMgUmF3SW1hZ2VCbG9jaztcbiAgICByZXR1cm4gbmV3IEltYWdlQmxvY2soZWRpdG9yLCByYXdJbWFnZUJsb2NrLnVybCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlQmxvY2sgZXh0ZW5kcyBCbG9jayB7XG5cbiAgdXBsb2FkUGFuZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwbG9hZEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbG9hZGluZ0ljb246IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW5wdXRGaWxlOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBpbWFnZVBhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWc6IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWRpdG9yOiBFZGl0b3IsIHB1YmxpYyB1cmw6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19faW1hZ2UnKTtcbiAgICB0aGlzLmltZy5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlX19pbWcnKTtcbiAgICB0aGlzLnVwbG9hZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlX191cGxvYWQtYnV0dG9uJyk7XG5cbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRQYW5lbCk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMuaW1hZ2VQYW5lbCk7XG5cbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRGaWxlKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkQnV0dG9uKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMubG9hZGluZ0ljb24pO1xuICAgIHRoaXMuaW1hZ2VQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmltZyk7XG5cbiAgICB0aGlzLmxvYWRpbmdJY29uLmlubmVySFRNTCA9ICdVcGxvYWRpbmcgaW1hZ2UuLi4nXG4gICAgdGhpcy5zdG9wTG9hZGluZygpO1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLmlubmVySFRNTCA9ICdVcGxvYWQgaW1hZ2UnO1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7IHRoaXMuaW5wdXRGaWxlLmNsaWNrKCkgfVxuICAgIHRoaXMuaW5wdXRGaWxlLnR5cGUgPSAnZmlsZSc7XG4gICAgdGhpcy5pbnB1dEZpbGUub25jaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KTogYW55ID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICAgIGlmICh0YXJnZXQuZmlsZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgLy8gaW4gSUUgMTEsIHRoZSBjaGFuZ2UgZXZlbnQgaXMgZmlyZWQgd2hlbiB3ZSBwcm9ncmFtbWF0aWNhbGx5IHNldCBgLmpzLWZpbGVJbnB1dGAncyB2YWx1ZSB0byBlbXB0eSBzdHJpbmcuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGFydExvYWRpbmcoKTtcblxuICAgICAgbGV0IHN1Y2Nlc3NDYWxsYmFjayA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBmYWlsQ2FsbGJhY2sgPSAoZXJyb3I6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmVkaXRvci5vcHRpb25zLnVwbG9hZEltYWdlKHRhcmdldC5maWxlc1swXSwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsQ2FsbGJhY2spO1xuICAgICAgdGhpcy5pbnB1dEZpbGUudmFsdWUgPSAnJztcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBzdGFydExvYWRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIH1cblxuICBzdG9wTG9hZGluZygpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmdJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICB1cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5pbWcuc3JjID0gdGhpcy51cmw7XG4gICAgICB0aGlzLmltYWdlUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLnVwbG9hZFBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW1hZ2VQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHt9XG5cbiAgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9jayB7XG4gICAgbGV0IHJhdzogUmF3SW1hZ2VCbG9jayA9IHtcbiAgICAgIHR5cGU6IFRZUEUsXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfTtcbiAgICByZXR1cm4gcmF3O1xuICB9XG59XG4iLCJpbXBvcnQgeyBFZGl0b3IgfSBmcm9tICcuLi9lZGl0b3InO1xuaW1wb3J0IHsgQmxvY2ssIFJhd0Jsb2NrLCBCbG9ja1JlYWRlciB9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICd0ZXh0JztcblxuaW50ZXJmYWNlIFJhd1RleHRCbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dEJsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3VGV4dEJsb2NrID0gcmF3QmxvY2sgYXMgUmF3VGV4dEJsb2NrO1xuICAgIHJldHVybiBuZXcgVGV4dEJsb2NrKGVkaXRvciwgcmF3VGV4dEJsb2NrLmNvbnRlbnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0QmxvY2sgZXh0ZW5kcyBCbG9jayB7XG5cbiAgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdGV4dCcpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRleHRhcmVhKTtcblxuICAgIHRoaXMudGV4dGFyZWEuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy50ZXh0YXJlYS5mb2N1cygpO1xuICB9XG5cbiAgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9jayB7XG4gICAgbGV0IHJhdzogUmF3VGV4dEJsb2NrID0ge1xuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMudGV4dGFyZWEudmFsdWVcbiAgICB9O1xuICAgIHJldHVybiByYXc7XG4gIH1cbn0iLCJpbXBvcnQgeyBFZGl0b3IgfSBmcm9tICcuLi9lZGl0b3InO1xuaW1wb3J0IHsgQmxvY2ssIFJhd0Jsb2NrLCBCbG9ja1JlYWRlciB9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICd2aWRlbyc7XG5cbmludGVyZmFjZSBSYXdWaWRlb0Jsb2NrIGV4dGVuZHMgUmF3QmxvY2sge1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFZpZGVvQmxvY2tSZWFkZXIgaW1wbGVtZW50cyBCbG9ja1JlYWRlciB7XG4gIGNhblBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jayk6IEJvb2xlYW4ge1xuICAgIHJldHVybiByYXdCbG9jay50eXBlID09IFRZUEU7XG4gIH1cblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2sge1xuICAgIGxldCByYXdWaWRlb0Jsb2NrID0gcmF3QmxvY2sgYXMgUmF3VmlkZW9CbG9jaztcbiAgICByZXR1cm4gbmV3IFZpZGVvQmxvY2soZWRpdG9yLCByYXdWaWRlb0Jsb2NrLnVybCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZGVvQmxvY2sgZXh0ZW5kcyBCbG9jayB7XG5cbiAgdXBsb2FkUGFuZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwbG9hZEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbG9hZGluZ0ljb246IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW5wdXRGaWxlOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICB2aWRlb1BhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2aWRlb0VsZW06IEhUTUxWaWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIHZpZGVvVXJsOiBzdHJpbmcpIHtcbiAgICBzdXBlcihlZGl0b3IpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3ZpZGVvJyk7XG4gICAgdGhpcy51cGxvYWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJsb2NrX192aWRlb19fdXBsb2FkLWJ1dHRvbicpO1xuICAgIHRoaXMudmlkZW9FbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdmlkZW9fX3ZpZGVvLWVsZW0nKVxuXG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkUGFuZWwpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvUGFuZWwpO1xuXG4gICAgdGhpcy52aWRlb1BhbmVsLmFwcGVuZENoaWxkKHRoaXMudmlkZW9FbGVtKTtcblxuICAgIHRoaXMudXBsb2FkUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dEZpbGUpO1xuICAgIHRoaXMudXBsb2FkUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRCdXR0b24pO1xuICAgIHRoaXMudXBsb2FkUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy5sb2FkaW5nSWNvbik7XG5cbiAgICB0aGlzLnZpZGVvRWxlbS5jb250cm9scyA9IHRydWU7XG4gICAgdGhpcy5zdG9wTG9hZGluZygpO1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLmlubmVySFRNTCA9ICdVcGxvYWQgdmlkZW8nO1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7IHRoaXMuaW5wdXRGaWxlLmNsaWNrKCkgfVxuICAgIHRoaXMuaW5wdXRGaWxlLnR5cGUgPSAnZmlsZSc7XG4gICAgdGhpcy5pbnB1dEZpbGUub25jaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KTogYW55ID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICAgIGlmICh0YXJnZXQuZmlsZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgLy8gaW4gSUUgMTEsIHRoZSBjaGFuZ2UgZXZlbnQgaXMgZmlyZWQgd2hlbiB3ZSBwcm9ncmFtbWF0aWNhbGx5IHNldCBgLmpzLWZpbGVJbnB1dGAncyB2YWx1ZSB0byBlbXB0eSBzdHJpbmcuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGFydExvYWRpbmcoKTtcblxuICAgICAgbGV0IHByb2dyZXNzQ2FsbGJhY2sgPSAobG9hZGVkOiBOdW1iZXIsIHRvdGFsOiBOdW1iZXIsIGxhYmVsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nSWNvbi5pbm5lckhUTUwgPSBsYWJlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdJY29uLmlubmVySFRNTCA9IGBVcGxvYWRpbmcgdmlkZW8gKCR7bG9hZGVkfS8ke3RvdGFsfSkuLi5gO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBzdWNjZXNzQ2FsbGJhY2sgPSAodmlkZW9Vcmw6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgICAgIHRoaXMudmlkZW9VcmwgPSB2aWRlb1VybDtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgICB9O1xuXG4gICAgICBsZXQgZmFpbENhbGxiYWNrID0gKGVycm9yOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5zdG9wTG9hZGluZygpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5lZGl0b3Iub3B0aW9ucy51cGxvYWRWaWRlbyh0YXJnZXQuZmlsZXNbMF0sIHByb2dyZXNzQ2FsbGJhY2ssIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbENhbGxiYWNrKTtcbiAgICAgIHRoaXMuaW5wdXRGaWxlLnZhbHVlID0gJyc7XG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG5cbiAgc3RhcnRMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ0ljb24uaW5uZXJIVE1MID0gJ1VwbG9hZGluZyB2aWRlby4uLidcbiAgICB0aGlzLmxvYWRpbmdJY29uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfVxuXG4gIHN0b3BMb2FkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ0ljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIHVwZGF0ZVZpZXcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmlkZW9VcmwpIHtcbiAgICAgIHRoaXMudmlkZW9FbGVtLnNyYyA9IHRoaXMudmlkZW9Vcmw7XG4gICAgICB0aGlzLnZpZGVvUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLnVwbG9hZFBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHt9XG5cbiAgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9jayB7XG4gICAgbGV0IHJhdzogUmF3VmlkZW9CbG9jayA9IHtcbiAgICAgIHR5cGU6IFRZUEUsXG4gICAgICB1cmw6IHRoaXMudmlkZW9VcmwsXG4gICAgfTtcbiAgICByZXR1cm4gcmF3O1xuICB9XG59XG5cbiIsImltcG9ydCB7IEJsb2NrIH0gZnJvbSAnLi9ibG9jay9ibG9jayc7XG5pbXBvcnQgeyBJbWFnZUJsb2NrIH0gZnJvbSAnLi9ibG9jay9pbWFnZS1ibG9jayc7XG5pbXBvcnQgeyBUZXh0QmxvY2sgfSBmcm9tICcuL2Jsb2NrL3RleHQtYmxvY2snO1xuaW1wb3J0IHsgVmlkZW9CbG9jayB9IGZyb20gJy4vYmxvY2svdmlkZW8tYmxvY2snO1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnLi9lZGl0b3InO1xuXG5leHBvcnQgY2xhc3MgQ29udHJvbCB7XG4gIGVsZW06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRleHRCdXR0b246IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW1hZ2VCdXR0b246IEhUTUxTcGFuRWxlbWVudDtcbiAgdmlkZW9CdXR0b246IEhUTUxTcGFuRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWRpdG9yOiBFZGl0b3IsIHB1YmxpYyBibG9jazogQmxvY2spIHtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy50ZXh0QnV0dG9uKTtcblxuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbCcpO1xuXG4gICAgdGhpcy50ZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX190ZXh0LWJ1dHRvbicpXG4gICAgdGhpcy50ZXh0QnV0dG9uLmlubmVySFRNTCA9ICdBZGQgdGV4dCc7XG4gICAgdGhpcy50ZXh0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBlZGl0b3IuYWRkKG5ldyBUZXh0QmxvY2soZWRpdG9yLCAnJyksIHRoaXMuYmxvY2spO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5lZGl0b3Iub3B0aW9ucy51cGxvYWRJbWFnZSkge1xuICAgICAgdGhpcy5pbWFnZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLmltYWdlQnV0dG9uKTtcblxuICAgICAgdGhpcy5pbWFnZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9faW1hZ2UtYnV0dG9uJylcbiAgICAgIHRoaXMuaW1hZ2VCdXR0b24uaW5uZXJIVE1MID0gJ0FkZCBpbWFnZSc7XG4gICAgICB0aGlzLmltYWdlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGVkaXRvci5hZGQobmV3IEltYWdlQmxvY2soZWRpdG9yLCAnJyksIHRoaXMuYmxvY2spO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lZGl0b3Iub3B0aW9ucy51cGxvYWRWaWRlbykge1xuICAgICAgdGhpcy52aWRlb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvQnV0dG9uKTtcblxuICAgICAgdGhpcy52aWRlb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItY29udHJvbF9fdmlkZW8tYnV0dG9uJylcbiAgICAgIHRoaXMudmlkZW9CdXR0b24uaW5uZXJIVE1MID0gJ0FkZCB2aWRlbyc7XG4gICAgICB0aGlzLnZpZGVvQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGVkaXRvci5hZGQobmV3IFZpZGVvQmxvY2soZWRpdG9yLCAnJyksIHRoaXMuYmxvY2spO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnLi9jb250cm9sJztcbmltcG9ydCB7IEJsb2NrLCBCbG9ja1JlYWRlciwgUmF3QmxvY2sgfSBmcm9tICcuL2Jsb2NrL2Jsb2NrJztcbmltcG9ydCB7IEltYWdlQmxvY2tSZWFkZXIgfSBmcm9tICcuL2Jsb2NrL2ltYWdlLWJsb2NrJztcbmltcG9ydCB7IFRleHRCbG9ja1JlYWRlciB9IGZyb20gJy4vYmxvY2svdGV4dC1ibG9jayc7XG5pbXBvcnQgeyBWaWRlb0Jsb2NrUmVhZGVyIH0gZnJvbSAnLi9ibG9jay92aWRlby1ibG9jayc7XG5cbmNvbnN0IEJMT0NLUzogQXJyYXk8QmxvY2tSZWFkZXI+ID0gW1xuICBuZXcgVGV4dEJsb2NrUmVhZGVyKCksXG4gIG5ldyBJbWFnZUJsb2NrUmVhZGVyKCksXG4gIG5ldyBWaWRlb0Jsb2NrUmVhZGVyKClcbl07XG5cbmZ1bmN0aW9uIGNvbnZlcnRSYXdDb250ZW50KHJhd0NvbnRlbnQ6IEFycmF5PFJhd0Jsb2NrPiwgZWRpdG9yOiBFZGl0b3IpOiBBcnJheTxCbG9jaz4ge1xuICBsZXQgYmxvY2tzOiBBcnJheTxCbG9jaz4gPSBbXTtcblxuICBmb3IgKGxldCByYXdCbG9jayBvZiByYXdDb250ZW50KSB7XG4gICAgbGV0IHByb2Nlc3NlZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGJsb2NrIG9mIEJMT0NLUykge1xuICAgICAgaWYgKGJsb2NrLmNhblBhcnNlKHJhd0Jsb2NrKSkge1xuICAgICAgICBwcm9jZXNzZWQgPSB0cnVlO1xuICAgICAgICBibG9ja3MucHVzaChibG9jay5wYXJzZShyYXdCbG9jaywgZWRpdG9yKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcHJvY2Vzc2VkKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFVucmVjb2duaXplZCBibG9jayB0eXBlOiAnJHtyYXdCbG9jay50eXBlfScuIElnbm9yZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYmxvY2tzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRvck9wdGlvbnMge1xuICBjb250ZW50OiBBcnJheTxSYXdCbG9jaz47XG4gIHVwbG9hZEltYWdlOiAoZmlsZTogRmlsZSwgc3VjY2Vzc0NhbGxiYWNrOiAodXJsOiBzdHJpbmcpID0+IHZvaWQsIGZhaWx1cmVDYWxsYmFjazogKGVycm9yOiBzdHJpbmcpID0+IHZvaWQpID0+IHZvaWQ7XG4gIHVwbG9hZFZpZGVvOiAoZmlsZTogRmlsZSwgcHJvZ3Jlc3NDYWxsYmFjazogKGxvYWRlZDogTnVtYmVyLCB0b3RhbDogTnVtYmVyLCBsYWJlbDogU3RyaW5nKSA9PiB2b2lkLCBzdWNjZXNzQ2FsbGJhY2s6ICh0aHVtYm5haWxVcmw6IHN0cmluZywgdmlkZW9Vcmw6IHN0cmluZykgPT4gdm9pZCwgZmFpbHVyZUNhbGxiYWNrOiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEVkaXRvciB7XG4gIGJsb2NrczogQXJyYXk8QmxvY2s+O1xuICBsYXN0Q29udHJvbDogQ29udHJvbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbTogSFRNTERpdkVsZW1lbnQsXG4gICAgcHVibGljIG9wdGlvbnM6IEVkaXRvck9wdGlvbnNcbiAgKSB7XG4gICAgdGhpcy5ibG9ja3MgPSBjb252ZXJ0UmF3Q29udGVudCh0aGlzLm9wdGlvbnMuY29udGVudCwgdGhpcyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGFkZChibG9jazogQmxvY2ssIGJlZm9yZUJsb2NrOiBCbG9jaykge1xuICAgIGlmIChiZWZvcmVCbG9jaykge1xuICAgICAgZm9yIChsZXQgaT0wO2kgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGlmIChiZWZvcmVCbG9jayA9PSB0aGlzLmJsb2Nrc1tpXSkge1xuICAgICAgICAgIHRoaXMuYmxvY2tzLnNwbGljZShpLCAwLCBibG9jayk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZWxlbS5pbnNlcnRCZWZvcmUoYmxvY2suZWxlbSwgYmVmb3JlQmxvY2suZWxlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgdGhpcy5lbGVtLmluc2VydEJlZm9yZShibG9jay5lbGVtLCB0aGlzLmxhc3RDb250cm9sLmVsZW0pO1xuICAgIH1cblxuICAgIGJsb2NrLmZvY3VzKCk7XG4gIH1cblxuICBnZXRDb250ZW50KCk6IEFycmF5PFJhd0Jsb2NrPiB7XG4gICAgbGV0IHJhd0NvbnRlbnQ6IEFycmF5PFJhd0Jsb2NrPiA9IFtdO1xuICAgIGZvciAobGV0IGJsb2NrIG9mIHRoaXMuYmxvY2tzKSB7XG4gICAgICByYXdDb250ZW50LnB1c2goYmxvY2suZ2V0UmF3Q29udGVudCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhd0NvbnRlbnQ7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpIHtcbiAgICBmb3IgKGxldCBibG9jayBvZiB0aGlzLmJsb2Nrcykge1xuICAgICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKGJsb2NrLmVsZW0pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmxhc3RDb250cm9sID0gbmV3IENvbnRyb2wodGhpcywgbnVsbCk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMubGFzdENvbnRyb2wuZWxlbSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEVkaXRvciwgRWRpdG9yT3B0aW9ucyB9IGZyb20gJy4vZWRpdG9yL2VkaXRvcidcblxuKDxhbnk+d2luZG93KS5pbnN0YWxsRWRpdG9yID0gKGVsZW06IEhUTUxEaXZFbGVtZW50LCBvcHRpb25zOiBFZGl0b3JPcHRpb25zID0gKDxFZGl0b3JPcHRpb25zPnt9KSkgPT4ge1xuICByZXR1cm4gbmV3IEVkaXRvcihlbGVtLCBvcHRpb25zKTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==