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
    console.log(rawContent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci9ibG9jay9ibG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL2Jsb2NrL2ltYWdlLWJsb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IvYmxvY2svdGV4dC1ibG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL2Jsb2NrL3ZpZGVvLWJsb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IvY29udHJvbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWRpdG9yL2VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBcUM7QUFZckM7SUFJRSxlQUFtQixNQUFjO1FBQWQs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O0lBQTVDLG9DQUF5QyxFQUFHO0lBQy9GLE9BQU8sSUFBSSxxREFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMiLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnLi4vY29udHJvbCc7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICcuLi9lZGl0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhd0Jsb2NrIHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrUmVhZGVyIHtcbiAgY2FuUGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrKTogQm9vbGVhblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2tcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJsb2NrIHtcbiAgZWxlbTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udHJvbDogQ29udHJvbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWRpdG9yOiBFZGl0b3IpIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29udHJvbChlZGl0b3IsIHRoaXMpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2snKTtcbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sLmVsZW0pO1xuICB9XG5cbiAgYWJzdHJhY3QgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9ja1xuXG4gIGFic3RyYWN0IGZvY3VzKCk6IHZvaWRcbn1cblxuIiwiaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnLi4vZWRpdG9yJztcbmltcG9ydCB7IEJsb2NrLCBSYXdCbG9jaywgQmxvY2tSZWFkZXIgfSBmcm9tICcuL2Jsb2NrJ1xuXG5jb25zdCBUWVBFOiBzdHJpbmcgPSAnaW1hZ2UnO1xuXG5pbnRlcmZhY2UgUmF3SW1hZ2VCbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUJsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3SW1hZ2VCbG9jayA9IHJhd0Jsb2NrIGFzIFJhd0ltYWdlQmxvY2s7XG4gICAgcmV0dXJuIG5ldyBJbWFnZUJsb2NrKGVkaXRvciwgcmF3SW1hZ2VCbG9jay51cmwpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUJsb2NrIGV4dGVuZHMgQmxvY2sge1xuXG4gIHVwbG9hZFBhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cGxvYWRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxvYWRpbmdJY29uOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGlucHV0RmlsZTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgaW1hZ2VQYW5lbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1nOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVkaXRvcjogRWRpdG9yLCBwdWJsaWMgdXJsOiBzdHJpbmcpIHtcbiAgICBzdXBlcihlZGl0b3IpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX2ltYWdlJyk7XG5cbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRQYW5lbCk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMuaW1hZ2VQYW5lbCk7XG5cbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMuaW5wdXRGaWxlKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMudXBsb2FkQnV0dG9uKTtcbiAgICB0aGlzLnVwbG9hZFBhbmVsLmFwcGVuZENoaWxkKHRoaXMubG9hZGluZ0ljb24pO1xuICAgIHRoaXMuaW1hZ2VQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmltZyk7XG5cbiAgICB0aGlzLmxvYWRpbmdJY29uLmlubmVySFRNTCA9ICdVcGxvYWRpbmcgaW1hZ2UuLi4nXG4gICAgdGhpcy5zdG9wTG9hZGluZygpO1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLmlubmVySFRNTCA9ICdVcGxvYWQgaW1hZ2UnO1xuICAgIHRoaXMudXBsb2FkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7IHRoaXMuaW5wdXRGaWxlLmNsaWNrKCkgfVxuICAgIHRoaXMuaW5wdXRGaWxlLnR5cGUgPSAnZmlsZSc7XG4gICAgdGhpcy5pbnB1dEZpbGUub25jaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KTogYW55ID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICAgIGlmICh0YXJnZXQuZmlsZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgLy8gaW4gSUUgMTEsIHRoZSBjaGFuZ2UgZXZlbnQgaXMgZmlyZWQgd2hlbiB3ZSBwcm9ncmFtbWF0aWNhbGx5IHNldCBgLmpzLWZpbGVJbnB1dGAncyB2YWx1ZSB0byBlbXB0eSBzdHJpbmcuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGFydExvYWRpbmcoKTtcblxuICAgICAgbGV0IHN1Y2Nlc3NDYWxsYmFjayA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBmYWlsQ2FsbGJhY2sgPSAoZXJyb3I6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmVkaXRvci5vcHRpb25zLnVwbG9hZEltYWdlKHRhcmdldC5maWxlc1swXSwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsQ2FsbGJhY2spO1xuICAgICAgdGhpcy5pbnB1dEZpbGUudmFsdWUgPSAnJztcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBzdGFydExvYWRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIH1cblxuICBzdG9wTG9hZGluZygpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmdJY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICB1cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgdGhpcy5pbWcuc3JjID0gdGhpcy51cmw7XG4gICAgICB0aGlzLmltYWdlUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLnVwbG9hZFBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW1hZ2VQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy51cGxvYWRQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHt9XG5cbiAgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9jayB7XG4gICAgbGV0IHJhdzogUmF3SW1hZ2VCbG9jayA9IHtcbiAgICAgIHR5cGU6IFRZUEUsXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfTtcbiAgICByZXR1cm4gcmF3O1xuICB9XG59XG4iLCJpbXBvcnQgeyBFZGl0b3IgfSBmcm9tICcuLi9lZGl0b3InO1xuaW1wb3J0IHsgQmxvY2ssIFJhd0Jsb2NrLCBCbG9ja1JlYWRlciB9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICd0ZXh0JztcblxuaW50ZXJmYWNlIFJhd1RleHRCbG9jayBleHRlbmRzIFJhd0Jsb2NrIHtcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVGV4dEJsb2NrUmVhZGVyIGltcGxlbWVudHMgQmxvY2tSZWFkZXIge1xuICBjYW5QYXJzZShyYXdCbG9jazogUmF3QmxvY2spOiBCb29sZWFuIHtcbiAgICByZXR1cm4gcmF3QmxvY2sudHlwZSA9PSBUWVBFO1xuICB9XG5cbiAgcGFyc2UocmF3QmxvY2s6IFJhd0Jsb2NrLCBlZGl0b3I6IEVkaXRvcik6IEJsb2NrIHtcbiAgICBsZXQgcmF3VGV4dEJsb2NrID0gcmF3QmxvY2sgYXMgUmF3VGV4dEJsb2NrO1xuICAgIHJldHVybiBuZXcgVGV4dEJsb2NrKGVkaXRvciwgcmF3VGV4dEJsb2NrLmNvbnRlbnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0QmxvY2sgZXh0ZW5kcyBCbG9jayB7XG5cbiAgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHN1cGVyKGVkaXRvcik7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9ja19fdGV4dCcpO1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRleHRhcmVhKTtcblxuICAgIHRoaXMudGV4dGFyZWEuaW5uZXJIVE1MID0gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy50ZXh0YXJlYS5mb2N1cygpO1xuICB9XG5cbiAgZ2V0UmF3Q29udGVudCgpOiBSYXdCbG9jayB7XG4gICAgbGV0IHJhdzogUmF3VGV4dEJsb2NrID0ge1xuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMudGV4dGFyZWEudmFsdWVcbiAgICB9O1xuICAgIHJldHVybiByYXc7XG4gIH1cbn0iLCJpbXBvcnQgeyBFZGl0b3IgfSBmcm9tICcuLi9lZGl0b3InO1xuaW1wb3J0IHsgQmxvY2ssIFJhd0Jsb2NrLCBCbG9ja1JlYWRlciB9IGZyb20gJy4vYmxvY2snXG5cbmNvbnN0IFRZUEU6IHN0cmluZyA9ICd2aWRlbyc7XG5cbmludGVyZmFjZSBSYXdWaWRlb0Jsb2NrIGV4dGVuZHMgUmF3QmxvY2sge1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFZpZGVvQmxvY2tSZWFkZXIgaW1wbGVtZW50cyBCbG9ja1JlYWRlciB7XG4gIGNhblBhcnNlKHJhd0Jsb2NrOiBSYXdCbG9jayk6IEJvb2xlYW4ge1xuICAgIHJldHVybiByYXdCbG9jay50eXBlID09IFRZUEU7XG4gIH1cblxuICBwYXJzZShyYXdCbG9jazogUmF3QmxvY2ssIGVkaXRvcjogRWRpdG9yKTogQmxvY2sge1xuICAgIGxldCByYXdWaWRlb0Jsb2NrID0gcmF3QmxvY2sgYXMgUmF3VmlkZW9CbG9jaztcbiAgICByZXR1cm4gbmV3IFZpZGVvQmxvY2soZWRpdG9yLCByYXdWaWRlb0Jsb2NrLnVybCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZGVvQmxvY2sgZXh0ZW5kcyBCbG9jayB7XG5cbiAgdXBsb2FkUGFuZWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwbG9hZEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbG9hZGluZ0ljb246IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgaW5wdXRGaWxlOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICB2aWRlb1BhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2aWRlb0VsZW06IEhUTUxWaWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIHZpZGVvVXJsOiBzdHJpbmcpIHtcbiAgICBzdXBlcihlZGl0b3IpO1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdlZGl0b3ItYmxvY2tfX3ZpZGVvJyk7XG5cbiAgICB0aGlzLmVsZW0uYXBwZW5kQ2hpbGQodGhpcy51cGxvYWRQYW5lbCk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudmlkZW9QYW5lbCk7XG5cbiAgICB0aGlzLnZpZGVvUGFuZWwuYXBwZW5kQ2hpbGQodGhpcy52aWRlb0VsZW0pO1xuXG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0RmlsZSk7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLnVwbG9hZEJ1dHRvbik7XG4gICAgdGhpcy51cGxvYWRQYW5lbC5hcHBlbmRDaGlsZCh0aGlzLmxvYWRpbmdJY29uKTtcblxuICAgIHRoaXMudmlkZW9FbGVtLmNvbnRyb2xzID0gdHJ1ZTtcbiAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgdGhpcy51cGxvYWRCdXR0b24uaW5uZXJIVE1MID0gJ1VwbG9hZCB2aWRlbyc7XG4gICAgdGhpcy51cGxvYWRCdXR0b24ub25jbGljayA9ICgpID0+IHsgdGhpcy5pbnB1dEZpbGUuY2xpY2soKSB9XG4gICAgdGhpcy5pbnB1dEZpbGUudHlwZSA9ICdmaWxlJztcbiAgICB0aGlzLmlucHV0RmlsZS5vbmNoYW5nZSA9IChldmVudDogRXZlbnQpOiBhbnkgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9ICg8SFRNTElucHV0RWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgICAgaWYgKHRhcmdldC5maWxlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAvLyBpbiBJRSAxMSwgdGhlIGNoYW5nZSBldmVudCBpcyBmaXJlZCB3aGVuIHdlIHByb2dyYW1tYXRpY2FsbHkgc2V0IGAuanMtZmlsZUlucHV0YCdzIHZhbHVlIHRvIGVtcHR5IHN0cmluZy5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXJ0TG9hZGluZygpO1xuXG4gICAgICBsZXQgcHJvZ3Jlc3NDYWxsYmFjayA9IChsb2FkZWQ6IE51bWJlciwgdG90YWw6IE51bWJlciwgbGFiZWw6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdJY29uLmlubmVySFRNTCA9IGxhYmVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0ljb24uaW5uZXJIVE1MID0gYFVwbG9hZGluZyB2aWRlbyAoJHtsb2FkZWR9LyR7dG90YWx9KS4uLmA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHN1Y2Nlc3NDYWxsYmFjayA9ICh2aWRlb1VybDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcExvYWRpbmcoKTtcbiAgICAgICAgdGhpcy52aWRlb1VybCA9IHZpZGVvVXJsO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBmYWlsQ2FsbGJhY2sgPSAoZXJyb3I6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnN0b3BMb2FkaW5nKCk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmVkaXRvci5vcHRpb25zLnVwbG9hZFZpZGVvKHRhcmdldC5maWxlc1swXSwgcHJvZ3Jlc3NDYWxsYmFjaywgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsQ2FsbGJhY2spO1xuICAgICAgdGhpcy5pbnB1dEZpbGUudmFsdWUgPSAnJztcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBzdGFydExvYWRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nSWNvbi5pbm5lckhUTUwgPSAnVXBsb2FkaW5nIHZpZGVvLi4uJ1xuICAgIHRoaXMubG9hZGluZ0ljb24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICB9XG5cbiAgc3RvcExvYWRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nSWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgdXBkYXRlVmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aWRlb1VybCkge1xuICAgICAgdGhpcy52aWRlb0VsZW0uc3JjID0gdGhpcy52aWRlb1VybDtcbiAgICAgIHRoaXMudmlkZW9QYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMudXBsb2FkUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWRlb1BhbmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLnVwbG9hZFBhbmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge31cblxuICBnZXRSYXdDb250ZW50KCk6IFJhd0Jsb2NrIHtcbiAgICBsZXQgcmF3OiBSYXdWaWRlb0Jsb2NrID0ge1xuICAgICAgdHlwZTogVFlQRSxcbiAgICAgIHVybDogdGhpcy52aWRlb1VybCxcbiAgICB9O1xuICAgIHJldHVybiByYXc7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgQmxvY2sgfSBmcm9tICcuL2Jsb2NrL2Jsb2NrJztcbmltcG9ydCB7IEltYWdlQmxvY2sgfSBmcm9tICcuL2Jsb2NrL2ltYWdlLWJsb2NrJztcbmltcG9ydCB7IFRleHRCbG9jayB9IGZyb20gJy4vYmxvY2svdGV4dC1ibG9jayc7XG5pbXBvcnQgeyBWaWRlb0Jsb2NrIH0gZnJvbSAnLi9ibG9jay92aWRlby1ibG9jayc7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICcuL2VkaXRvcic7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sIHtcbiAgZWxlbTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGV4dEJ1dHRvbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBpbWFnZUJ1dHRvbjogSFRNTFNwYW5FbGVtZW50O1xuICB2aWRlb0J1dHRvbjogSFRNTFNwYW5FbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlZGl0b3I6IEVkaXRvciwgcHVibGljIGJsb2NrOiBCbG9jaykge1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0aGlzLnRleHRCdXR0b24pO1xuXG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sJyk7XG5cbiAgICB0aGlzLnRleHRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWNvbnRyb2xfX3RleHQtYnV0dG9uJylcbiAgICB0aGlzLnRleHRCdXR0b24uaW5uZXJIVE1MID0gJ0FkZCB0ZXh0JztcbiAgICB0aGlzLnRleHRCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGVkaXRvci5hZGQobmV3IFRleHRCbG9jayhlZGl0b3IsICcnKSwgdGhpcy5ibG9jayk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmVkaXRvci5vcHRpb25zLnVwbG9hZEltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMuaW1hZ2VCdXR0b24pO1xuXG4gICAgICB0aGlzLmltYWdlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX19pbWFnZS1idXR0b24nKVxuICAgICAgdGhpcy5pbWFnZUJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkIGltYWdlJztcbiAgICAgIHRoaXMuaW1hZ2VCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZWRpdG9yLmFkZChuZXcgSW1hZ2VCbG9jayhlZGl0b3IsICcnKSwgdGhpcy5ibG9jayk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVkaXRvci5vcHRpb25zLnVwbG9hZFZpZGVvKSB7XG4gICAgICB0aGlzLnZpZGVvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMudmlkZW9CdXR0b24pO1xuXG4gICAgICB0aGlzLnZpZGVvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1jb250cm9sX192aWRlby1idXR0b24nKVxuICAgICAgdGhpcy52aWRlb0J1dHRvbi5pbm5lckhUTUwgPSAnQWRkIHZpZGVvJztcbiAgICAgIHRoaXMudmlkZW9CdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZWRpdG9yLmFkZChuZXcgVmlkZW9CbG9jayhlZGl0b3IsICcnKSwgdGhpcy5ibG9jayk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IENvbnRyb2wgfSBmcm9tICcuL2NvbnRyb2wnO1xuaW1wb3J0IHsgQmxvY2ssIEJsb2NrUmVhZGVyLCBSYXdCbG9jayB9IGZyb20gJy4vYmxvY2svYmxvY2snO1xuaW1wb3J0IHsgSW1hZ2VCbG9ja1JlYWRlciB9IGZyb20gJy4vYmxvY2svaW1hZ2UtYmxvY2snO1xuaW1wb3J0IHsgVGV4dEJsb2NrUmVhZGVyIH0gZnJvbSAnLi9ibG9jay90ZXh0LWJsb2NrJztcbmltcG9ydCB7IFZpZGVvQmxvY2tSZWFkZXIgfSBmcm9tICcuL2Jsb2NrL3ZpZGVvLWJsb2NrJztcblxuY29uc3QgQkxPQ0tTOiBBcnJheTxCbG9ja1JlYWRlcj4gPSBbXG4gIG5ldyBUZXh0QmxvY2tSZWFkZXIoKSxcbiAgbmV3IEltYWdlQmxvY2tSZWFkZXIoKSxcbiAgbmV3IFZpZGVvQmxvY2tSZWFkZXIoKVxuXTtcblxuZnVuY3Rpb24gY29udmVydFJhd0NvbnRlbnQocmF3Q29udGVudDogQXJyYXk8UmF3QmxvY2s+LCBlZGl0b3I6IEVkaXRvcik6IEFycmF5PEJsb2NrPiB7XG4gIGNvbnNvbGUubG9nKHJhd0NvbnRlbnQpO1xuICBsZXQgYmxvY2tzOiBBcnJheTxCbG9jaz4gPSBbXTtcblxuICBmb3IgKGxldCByYXdCbG9jayBvZiByYXdDb250ZW50KSB7XG4gICAgbGV0IHByb2Nlc3NlZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGJsb2NrIG9mIEJMT0NLUykge1xuICAgICAgaWYgKGJsb2NrLmNhblBhcnNlKHJhd0Jsb2NrKSkge1xuICAgICAgICBwcm9jZXNzZWQgPSB0cnVlO1xuICAgICAgICBibG9ja3MucHVzaChibG9jay5wYXJzZShyYXdCbG9jaywgZWRpdG9yKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcHJvY2Vzc2VkKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFVucmVjb2duaXplZCBibG9jayB0eXBlOiAnJHtyYXdCbG9jay50eXBlfScuIElnbm9yZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYmxvY2tzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRvck9wdGlvbnMge1xuICBjb250ZW50OiBBcnJheTxSYXdCbG9jaz47XG4gIHVwbG9hZEltYWdlOiAoZmlsZTogRmlsZSwgc3VjY2Vzc0NhbGxiYWNrOiAodXJsOiBzdHJpbmcpID0+IHZvaWQsIGZhaWx1cmVDYWxsYmFjazogKGVycm9yOiBzdHJpbmcpID0+IHZvaWQpID0+IHZvaWQ7XG4gIHVwbG9hZFZpZGVvOiAoZmlsZTogRmlsZSwgcHJvZ3Jlc3NDYWxsYmFjazogKGxvYWRlZDogTnVtYmVyLCB0b3RhbDogTnVtYmVyLCBsYWJlbDogU3RyaW5nKSA9PiB2b2lkLCBzdWNjZXNzQ2FsbGJhY2s6ICh0aHVtYm5haWxVcmw6IHN0cmluZywgdmlkZW9Vcmw6IHN0cmluZykgPT4gdm9pZCwgZmFpbHVyZUNhbGxiYWNrOiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEVkaXRvciB7XG4gIGJsb2NrczogQXJyYXk8QmxvY2s+O1xuICBsYXN0Q29udHJvbDogQ29udHJvbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbTogSFRNTERpdkVsZW1lbnQsXG4gICAgcHVibGljIG9wdGlvbnM6IEVkaXRvck9wdGlvbnNcbiAgKSB7XG4gICAgdGhpcy5ibG9ja3MgPSBjb252ZXJ0UmF3Q29udGVudCh0aGlzLm9wdGlvbnMuY29udGVudCwgdGhpcyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGFkZChibG9jazogQmxvY2ssIGJlZm9yZUJsb2NrOiBCbG9jaykge1xuICAgIGlmIChiZWZvcmVCbG9jaykge1xuICAgICAgZm9yIChsZXQgaT0wO2kgPCB0aGlzLmJsb2Nrcy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGlmIChiZWZvcmVCbG9jayA9PSB0aGlzLmJsb2Nrc1tpXSkge1xuICAgICAgICAgIHRoaXMuYmxvY2tzLnNwbGljZShpLCAwLCBibG9jayk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZWxlbS5pbnNlcnRCZWZvcmUoYmxvY2suZWxlbSwgYmVmb3JlQmxvY2suZWxlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmxvY2tzLnB1c2goYmxvY2spO1xuICAgICAgdGhpcy5lbGVtLmluc2VydEJlZm9yZShibG9jay5lbGVtLCB0aGlzLmxhc3RDb250cm9sLmVsZW0pO1xuICAgIH1cblxuICAgIGJsb2NrLmZvY3VzKCk7XG4gIH1cblxuICBnZXRDb250ZW50KCk6IEFycmF5PFJhd0Jsb2NrPiB7XG4gICAgbGV0IHJhd0NvbnRlbnQ6IEFycmF5PFJhd0Jsb2NrPiA9IFtdO1xuICAgIGZvciAobGV0IGJsb2NrIG9mIHRoaXMuYmxvY2tzKSB7XG4gICAgICByYXdDb250ZW50LnB1c2goYmxvY2suZ2V0UmF3Q29udGVudCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhd0NvbnRlbnQ7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpIHtcbiAgICBmb3IgKGxldCBibG9jayBvZiB0aGlzLmJsb2Nrcykge1xuICAgICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKGJsb2NrLmVsZW0pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmxhc3RDb250cm9sID0gbmV3IENvbnRyb2wodGhpcywgbnVsbCk7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRoaXMubGFzdENvbnRyb2wuZWxlbSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEVkaXRvciwgRWRpdG9yT3B0aW9ucyB9IGZyb20gJy4vZWRpdG9yL2VkaXRvcidcblxuKDxhbnk+d2luZG93KS5pbnN0YWxsRWRpdG9yID0gKGVsZW06IEhUTUxEaXZFbGVtZW50LCBvcHRpb25zOiBFZGl0b3JPcHRpb25zID0gKDxFZGl0b3JPcHRpb25zPnt9KSkgPT4ge1xuICByZXR1cm4gbmV3IEVkaXRvcihlbGVtLCBvcHRpb25zKTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==