(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Avataaar"] = factory();
	else
		root["Avataaar"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.uid = uid;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var uidStorage = {};

var AvatarPart = exports.AvatarPart = function () {
	function AvatarPart(data) {
		_classCallCheck(this, AvatarPart);

		this.data = {};
		this.set(data);
	}

	_createClass(AvatarPart, [{
		key: "set",
		value: function set() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			if (typeof args[0] === "string") {
				this.data[args[0]] = this.data[args[1]];
			} else {
				this.data = Object.assign(this.data, args[0]);
			}
			return this;
		}
	}, {
		key: "attr",
		value: function attr(key) {
			return key ? this.data.attrs[key] : this.data.attrs;
		}
	}, {
		key: "render",
		value: function render() {
			if (typeof this.data.render === "function") {
				return this.data.render.call(this, this.data);
			}
			return this.data.render;
		}
	}, {
		key: "include",
		value: function include(part, options) {
			var _data$defs;

			(_data$defs = this.data.defs).push.apply(_data$defs, _toConsumableArray(part.data.defs || []));
			return part.render();
		}
	}]);

	return AvatarPart;
}();

function uid(key) {
	key = key || 0;
	uidStorage[key] = (uidStorage[key] || 0) + 1;
	return (key || "") + uidStorage[key];
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function makeColor(color, maskId) {
    return "\n        <g class=\"color--palette-color\" mask=\"url(#" + maskId + ")\" fill-rule=\"evenodd\" fill=\"" + color + "\">\n            <rect x=\"0\" y=\"0\" width=\"264\" height=\"110\"/>\n        </g>\n    ";
}

exports.default = makeColor;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	"black": "#262E33",
	"blue01": "#65C9FF",
	"blue02": "#5199E4",
	"blue03": "#25557C",
	"gray01": "#E6E6E6",
	"gray02": "#929598",
	"heather": "#3C4F5C",
	"pastelBlue": "#B1E2FF",
	"pastelGreen": "#A7FFC4",
	"pastelOrange": "#FFDEB5",
	"pastelRed": "#FFAFB9",
	"pastelYellow": "#FFFFB1",
	"pink": "#FF488E",
	"red": "#FF5C5C",
	"white": "#FFFFFF"
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	"auburn": "#A55728",
	"black": "#2C1B18",
	"blonde": "#B58143",
	"blondeGolden": "#D6B370",
	"brown": "#724133",
	"brownDark": "#4A312C",
	"platinum": "#ECDCBF",
	"red": "#C93305"
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function makeColor(color, maskId) {
	return "\n\t\t<g mask=\"url(#" + maskId + ")\" fill=\"" + color + "\">\n\t\t\t<g transform=\"translate(-32.000000, 0.000000)\">\n\t\t\t\t<rect x=\"0\" y=\"0\" width=\"264\" height=\"244\"/>\n\t\t\t</g>\n\t\t</g>\n    ";
}

exports.default = makeColor;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.render = render;

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(15);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(24);

var _index6 = _interopRequireDefault(_index5);

var _body = __webpack_require__(31);

var _body2 = _interopRequireDefault(_body);

var _common = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import top from "./top/index";
var id = {
	bodyMask: (0, _common.uid)("mask-"),
	bodyPath: (0, _common.uid)("path-"),
	contentMask: (0, _common.uid)("mask-"),
	contentPath: (0, _common.uid)("path-"),
	circleMask: (0, _common.uid)("mask-"),
	circlePath: (0, _common.uid)("path-")
};
// import faces from "./faces/index";


var avatar = new _common.AvatarPart({
	circle: function circle() {
		return "\n\t\t\t<g\n\t\t\t\tclass=\"circle\"\n\t\t\t\tstroke-width=\"1\"\n\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\ttransform=\"translate(12.000000, 40.000000)\">\n\t\t\t\t<use\n\t\t\t\t\tclass=\"circle-background\"\n\t\t\t\t\tfill=\"#E6E6E6\"\n\t\t\t\t\txlink:href=\"#" + id.circlePath + "\"\n\t\t\t\t/>\n\t\t\t\t<g mask=\"url(#" + id.circleMask + ")\" fill=\"#65C9FF\">\n\t\t\t\t\t<rect x=\"0\" y=\"0\" width=\"240\" height=\"240\" />\n\t\t\t\t</g>\n\t\t\t</g>";
	},

	defs: ["<path\n\t\t\tid=\"" + id.bodyPath + "\"\n\t\t\td=\"M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z\"\n\t\t/>", "<mask id=\"" + id.bodyMask + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.bodyPath + "\" />\n\t\t</mask>", "<circle id=\"" + id.circlePath + "\" cx=\"120\" cy=\"120\" r=\"120\" />", "<mask id=\"" + id.circleMask + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.circlePath + "\" />\n\t\t</mask>", "<path\n\t\t\tid=\"" + id.contentPath + "\"\n\t\t\td=\"M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z\"\n\t\t/>", "<mask id=\"" + id.contentMask + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.contentPath + "\" />\n\t\t</mask>"],
	render: function render(_ref) {
		var defs = _ref.defs,
		    clothe = _ref.clothe,
		    accessory = _ref.accessory,
		    face = _ref.face,
		    top = _ref.top,
		    skin = _ref.skin,
		    facialHair = _ref.facialHair,
		    avatarStyle = _ref.avatarStyle,
		    circle = _ref.circle;

		return ("\n\t\t<svg width=\"264px\" height=\"280px\" viewBox=\"0 0 264 280\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n\t\t\t<defs>\n\t\t\t\t%defs%\n\t\t\t</defs>\n\t\t\t<g class=\"avataaar\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n\t\t\t\t<g class=\"avataaar-circle\" transform=\"translate(-825.000000, -1100.000000)\">\n\t\t\t\t  \t<g transform=\"translate(825.000000, 1100.000000)\">\n\t\t\t\t\t\t" + (avatarStyle === "circle" ? circle() : "") + "\n\t\t\t\t\t\t<g\n\t\t\t\t\t\t\tclass=\"avataaar-content\"\n\t\t\t\t\t\t\tstroke-width=\"1\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\tmask=\"url(#" + id.contentMask + ")\">\n\t\t\t\t\t\t\t" + this.include(_body2.default.set({ maskID: id.bodyMask, color: skin })) + "\n\t\t\t\t\t\t\t" + this.include(clothe) + "\n\t\t\t\t\t\t\t" + (false && this.include(face)) + "\n\t\t\t\t\t\t\t" + this.include(facialHair) + "\n\t\t\t\t\t\t\t" + this.include(accessory) + "\n\t\t\t\t\t\t\t" + (false && this.include(top)) + "\n\t\t\t\t\t\t</g>\n\t\t\t\t  \t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</svg>").replace("%defs%", defs.join("\n"));
	},

	attrs: {
		skin: _body2.default.attr("color"),
		clothe: _index2.default,
		accessory: _index4.default,
		facialHair: _index6.default,
		// face: faces,
		// top,
		avatarStyle: ["none", "circle"]
	}
});

function render() {
	return avatar.set({
		skin: _body2.default.attr("color").brown,
		clothe: _index2.default.shirtCrewNeck.set({ color: "#FF488E" }),
		facialHair: _index6.default.beardLight.set({ color: _index6.default.beardLight.attr("color").blonde }),
		accessory: _index4.default.eyepatch,
		avatarStyle: avatar.attr("avatarStyle")[1]
	}).render();
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _blazerShirt = __webpack_require__(7);

var _blazerShirt2 = _interopRequireDefault(_blazerShirt);

var _blazerSweater = __webpack_require__(8);

var _blazerSweater2 = _interopRequireDefault(_blazerSweater);

var _collarSweater = __webpack_require__(9);

var _collarSweater2 = _interopRequireDefault(_collarSweater);

var _hoodie = __webpack_require__(10);

var _hoodie2 = _interopRequireDefault(_hoodie);

var _overall = __webpack_require__(11);

var _overall2 = _interopRequireDefault(_overall);

var _shirtCrewNeck = __webpack_require__(12);

var _shirtCrewNeck2 = _interopRequireDefault(_shirtCrewNeck);

var _shirtScoopNeck = __webpack_require__(13);

var _shirtScoopNeck2 = _interopRequireDefault(_shirtScoopNeck);

var _shirtVNeck = __webpack_require__(14);

var _shirtVNeck2 = _interopRequireDefault(_shirtVNeck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	blazerShirt: _blazerShirt2.default,
	blazerSweater: _blazerSweater2.default,
	collarShirt: _collarSweater2.default,
	hoodie: _hoodie2.default,
	overall: _overall2.default,
	shirtCrewNeck: _shirtCrewNeck2.default,
	shirtScoopNeck: _shirtScoopNeck2.default,
	shirtVNeck: _shirtVNeck2.default
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M133.960472,0.294916112 C170.936473,3.32499816 200,34.2942856 200,72.0517235 L200,81 L0,81 L0,72.0517235 C1.22536245e-14,33.9525631 29.591985,2.76498122 67.0454063,0.219526408 C67.0152598,0.593114549 67,0.969227185 67,1.34762511 C67,13.2107177 81.9984609,22.8276544 100.5,22.8276544 C119.001539,22.8276544 134,13.2107177 134,1.34762511 C134,0.994669088 133.986723,0.64370138 133.960472,0.294916112 Z\"/>\n        ", "<mask id=\"" + id.mask + "\" fill=\"white\">\n            <use xlink:href=\"#" + id.path + "\"/>\n        </mask>"],
	render: function render() {
		return "\n\t        <g class=\"clothing--blazer-shirt\" transform=\"translate(0.000000, 170.000000)\">\n\n\t            <g id=\"shirt\" transform=\"translate(32.000000, 29.000000)\">\n\t                <use class=\"clothes\" fill=\"#E6E6E6\" xlink:href=\"#" + id.path + "\"/>\n\t                <g class=\"color--palette--black\" mask=\"url(#" + id.mask + ")\" fill=\"#262E33\">\n\t                    <g class=\"fill\" transform=\"translate(-32.000000, -29.000000)\">\n\t                        <rect x=\"0\" y=\"0\" width=\"264\" height=\"110\"/>\n\t                    </g>\n\t                </g>\n\t                <g class=\"shadowy\" opacity=\"0.599999964\" mask=\"url(#" + id.mask + ")\" fill-opacity=\"0.16\" fill=\"#000000\">\n\t                    <g transform=\"translate(60.000000, -25.000000)\">\n\t                        <ellipse cx=\"40.5\" cy=\"27.8476251\" rx=\"39.6351047\" ry=\"26.9138272\"/>\n\t                    </g>\n\t                </g>\n\t            </g>\n\t            <g class=\"blazer\" transform=\"translate(32.000000, 28.000000)\">\n\t                <path\n\t                    class=\"saco\"\n\t                    d=\"M68.784807,1.12222847 C30.512317,2.80409739 -1.89486556e-14,34.3646437 -1.42108547e-14,73.0517235 L0,73.0517235 L0,82 L69.3616767,82 C65.9607412,69.9199941 64,55.7087296 64,40.5 C64,26.1729736 65.7399891,12.7311115 68.784807,1.12222847 Z M131.638323,82 L200,82 L200,73.0517235 C200,34.7067641 170.024954,3.36285166 132.228719,1.17384225 C135.265163,12.7709464 137,26.1942016 137,40.5 C137,55.7087296 135.039259,69.9199941 131.638323,82 Z\"\n\t                    fill=\"#3A4C5A\"/>\n\t                <path class=\"pocket-hanky\" d=\"M149,58 L158.555853,50.83311 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L149,58 Z\" fill=\"#E6E6E6\"/>\n\t                <path class=\"wing\" d=\"M69,1.13686838e-13 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,1.13686838e-13 Z\" fill=\"#2F4351\"/>\n\t                <path\n\t                    class=\"wing\"\n\t                    d=\"M151,1.13686838e-13 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,1.13686838e-13 Z\"\n\t                    fill=\"#2F4351\"\n\t                    transform=\"translate(141.000000, 41.000000) scale(-1, 1) translate(-141.000000, -41.000000)\"/>\n\t            </g>\n\t        </g>\n\t    ";
	}
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M105.192402,29.0517235 L104,29.0517235 L104,29.0517235 C64.235498,29.0517235 32,61.2872215 32,101.051724 L32,110 L232,110 L232,101.051724 C232,61.2872215 199.764502,29.0517235 160,29.0517235 L160,29.0517235 L158.807598,29.0517235 C158.934638,30.0353144 159,31.0364513 159,32.0517235 C159,45.8588423 146.911688,57.0517235 132,57.0517235 C117.088312,57.0517235 105,45.8588423 105,32.0517235 C105,31.0364513 105.065362,30.0353144 105.192402,29.0517235 Z\"/>\n        ", "<mask id=\"" + id.mask + "\" fill=\"white\">\n            <use xlink:href=\"#" + id.path + "\"/>\n        </mask>"],
	render: function render() {
		return "\n\t        <g class=\"clothing--blazer-sweater\" transform=\"translate(0.000000, 170.000000)\">\n\t            <use class=\"clothes\" fill=\"#E6E6E6\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            <g class=\"color--palette-black\" mask=\"url(#" + id.mask + ")\" fill-rule=\"evenodd\" fill=\"#262E33\">\n\t                <rect class=\"color\" x=\"0\" y=\"0\" width=\"264\" height=\"110\"/>\n\t            </g>\n\t            <g class=\"blazer\" stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(32.000000, 28.000000)\">\n\t                <path\n\t                    class=\"saco\"\n\t                    d=\"M68.784807,1.12222847 C30.512317,2.80409739 1.24427139e-14,34.3646437 0,73.0517235 L0,82 L69.3616767,82 C65.9607412,69.9199941 64,55.7087296 64,40.5 C64,26.1729736 65.7399891,12.7311115 68.784807,1.12222847 Z M131.638323,82 L200,82 L200,73.0517235 C200,34.7067641 170.024954,3.36285166 132.228719,1.17384225 C135.265163,12.7709464 137,26.1942016 137,40.5 C137,55.7087296 135.039259,69.9199941 131.638323,82 Z\"\n\t                    fill=\"#3A4C5A\"/>\n\t                <path class=\"pocket-hanky\" d=\"M149,58 L158.555853,50.83311 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L149,58 Z\" fill=\"#E6E6E6\"/>\n\t                <path class=\"wing\" d=\"M69,1.13686838e-13 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,1.13686838e-13 Z\" fill=\"#2F4351\"/>\n\t                <path\n\t                    class=\"wing\"\n\t                    d=\"M151,1.13686838e-13 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,1.13686838e-13 Z\"\n\t                    fill=\"#2F4351\"\n\t                    transform=\"translate(141.000000, 41.000000) scale(-1, 1) translate(-141.000000, -41.000000) \"/>\n\t            </g>\n\t            <path\n\t                class=\"collar\"\n\t                d=\"M156,21.5390062 C162.772319,26.1359565 167,32.6563196 167,39.8878801 C167,47.2887711 162.572015,53.9447688 155.520105,58.5564942 L149.57933,53.8764929 L145,54.207887 L146,51.0567821 L145.922229,50.995516 C152.022491,47.8530505 156,42.7003578 156,36.8768102 L156,21.5390062 Z M108,21.5390062 C101.227681,26.1359565 97,32.6563196 97,39.8878801 C97,47.2887711 101.427985,53.9447688 108.479895,58.5564942 L114.42067,53.8764929 L119,54.207887 L118,51.0567821 L118.077771,50.995516 C111.977509,47.8530505 108,42.7003578 108,36.8768102 L108,21.5390062 Z\"\n\t                fill=\"#F2F2F2\"\n\t                fill-rule=\"evenodd\"/>\n\t        </g>\n\t    ";
	}
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _makeColor = __webpack_require__(1);

var _makeColor2 = _interopRequireDefault(_makeColor);

var _colors = __webpack_require__(2);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M105.192402,29.0517235 L104,29.0517235 L104,29.0517235 C64.235498,29.0517235 32,61.2872215 32,101.051724 L32,110 L232,110 L232,101.051724 C232,61.2872215 199.764502,29.0517235 160,29.0517235 L160,29.0517235 L158.807598,29.0517235 C158.934638,30.0353144 159,31.0364513 159,32.0517235 C159,45.8588423 146.911688,57.0517235 132,57.0517235 C117.088312,57.0517235 105,45.8588423 105,32.0517235 C105,31.0364513 105.065362,30.0353144 105.192402,29.0517235 Z\"/>\n        ", "<mask id=\"" + id.mask + "\" fill=\"white\">\n            <use xlink:href=\"#" + id.path + "\"/>\n        </mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g class=\"clothing--collar-sweater\" transform=\"translate(0.000000, 170.000000)\">\n\t            <use class=\"clothes\" fill=\"#E6E6E6\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            " + (0, _makeColor2.default)(color, id.mask) + "\n\t            <path\n\t                class=\"collar\"\n\t                d=\"M156,22.2794906 C162.181647,26.8351858 166,33.1057265 166,40.027915 C166,47.2334941 161.862605,53.7329769 155.228997,58.3271669 L149.57933,53.8764929 L145,54.207887 L146,51.0567821 L145.922229,50.995516 C152.022491,47.8530505 156,42.7003578 156,36.8768102 L156,22.2794906 Z M108,21.5714994 C101.232748,26.1740081 97,32.7397769 97,40.027915 C97,47.4261549 101.361602,54.080035 108.308428,58.6915723 L114.42067,53.8764929 L119,54.207887 L118,51.0567821 L118.077771,50.995516 C111.977509,47.8530505 108,42.7003578 108,36.8768102 L108,21.5714994 Z\"\n\t                fill=\"#F2F2F2\"\n\t                fill-rule=\"evenodd\"/>\n\t        </g>\n\t    ";
	},

	attrs: { "color": _colors2.default }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _makeColor = __webpack_require__(1);

var _makeColor2 = _interopRequireDefault(_makeColor);

var _colors = __webpack_require__(2);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M108,13.0708856 C90.0813006,15.075938 76.2798424,20.5518341 76.004203,34.6449676 C50.1464329,45.5680933 32,71.1646257 32,100.999485 L32,100.999485 L32,110 L232,110 L232,100.999485 C232,71.1646257 213.853567,45.5680933 187.995797,34.6449832 C187.720158,20.5518341 173.918699,15.075938 156,13.0708856 L156,32 L156,32 C156,45.254834 145.254834,56 132,56 L132,56 C118.745166,56 108,45.254834 108,32 L108,13.0708856 Z\"/>\n        ", "<mask id=\"" + id.mask + "\" fill=\"white\">\n            <use xlink:href=\"#" + id.path + "\"/>\n        </mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g class=\"clothing--hoodie\" transform=\"translate(0.000000, 170.000000)\">\n\t            <use class=\"hoodie\" fill=\"#B7C1DB\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            " + (0, _makeColor2.default)(color, id.mask) + "\n\t            <path\n\t                id=\"class\"\n\t                d=\"M102,61.7390531 L102,110 L95,110 L95,58.1502625 C97.2037542,59.4600576 99.5467694,60.6607878 102,61.7390531 Z M169,58.1502625 L169,98.5 C169,100.432997 167.432997,102 165.5,102 C163.567003,102 162,100.432997 162,98.5 L162,61.7390531 C164.453231,60.6607878 166.796246,59.4600576 169,58.1502625 Z\"\n\t                fill=\"#F4F4F4\"\n\t                fill-rule=\"evenodd\"\n\t                mask=\"url(#" + id.mask + ")\"/>\n\t            <path\n\t                class=\"shadow\"\n\t                d=\"M90.9601329,12.7243537 C75.9093095,15.5711782 65.5,21.2428847 65.5,32.3076923 C65.5,52.0200095 98.5376807,68 132,68 C165.462319,68 198.5,52.0200095 198.5,32.3076923 C198.5,21.2428847 188.09069,15.5711782 173.039867,12.7243537 C182.124921,16.0744598 188,21.7060546 188,31.0769231 C188,51.4689754 160.178795,68 132,68 C103.821205,68 76,51.4689754 76,31.0769231 C76,21.7060546 81.8750795,16.0744598 90.9601329,12.7243537 Z\"\n\t                fill-opacity=\"0.16\"\n\t                fill=\"#000000\"\n\t                fill-rule=\"evenodd\"\n\t                mask=\"url(#" + id.mask + ")\"/>\n\t        </g>\n\t    ";
	},

	attrs: { "color": _colors2.default }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _makeColor = __webpack_require__(1);

var _makeColor2 = _interopRequireDefault(_makeColor);

var _colors = __webpack_require__(2);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["\n            <path\n                id=\"" + id.path + "\"\n                d=\"M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z\"/>\n        ", "\n            <mask id=\"" + id.mask + "\" fill=\"white\">\n                <use xlink:href=\"#" + id.path + "\"/>\n            </mask>\n        "],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g class=\"clothing--overall\" transform=\"translate(0.000000, 170.000000)\">\n\t            <use class=\"overall\" fill=\"#B7C1DB\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            " + (0, _makeColor2.default)(color, id.mask) + "\n\t            <circle class=\"clothing--button\" fill=\"#F4F4F4\" fill-rule=\"evenodd\" cx=\"81\" cy=\"83\" r=\"5\"/>\n\t            <circle class=\"clothing--button\" fill=\"#F4F4F4\" fill-rule=\"evenodd\" cx=\"183\" cy=\"83\" r=\"5\"/>\n\t        </g>\n\t    ";
	},

	attrs: { "color": _colors2.default }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _makeColor = __webpack_require__(1);

var _makeColor2 = _interopRequireDefault(_makeColor);

var _colors = __webpack_require__(2);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M165.960472,29.2949161 C202.936473,32.3249982 232,63.2942856 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.9525631 61.591985,31.7649812 99.0454063,29.2195264 C99.0152598,29.5931145 99,29.9692272 99,30.3476251 C99,42.2107177 113.998461,51.8276544 132.5,51.8276544 C151.001539,51.8276544 166,42.2107177 166,30.3476251 C166,29.9946691 165.986723,29.6437014 165.960472,29.2949161 Z\"/>\n        ", "<mask id=\"" + id.mask + "\" fill=\"white\">\n            <use xlink:href=\"#" + id.path + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g class=\"clothing--shirt-crew-neck\" transform=\"translate(0.000000, 170.000000)\">\n\t            <use class=\"clothes\" fill=\"#E6E6E6\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            " + (0, _makeColor2.default)(color, id.mask) + "\n\t            <g class=\"shadowy\" opacity=\"0.599999964\" stroke-width=\"1\" fill-rule=\"evenodd\" mask=\"url(#" + id.mask + ")\" fill-opacity=\"0.16\" fill=\"#000000\">\n\t                <g transform=\"translate(92.000000, 4.000000)\">\n\t                    <ellipse cx=\"40.5\" cy=\"27.8476251\" rx=\"39.6351047\" ry=\"26.9138272\"/>\n\t                </g>\n\t            </g>\n\t        </g>\n\t    ";
	},

	attrs: { "color": _colors2.default }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _makeColor = __webpack_require__(1);

var _makeColor2 = _interopRequireDefault(_makeColor);

var _colors = __webpack_require__(2);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M181.544255,32.3304167 C210.784209,41.4878872 232,68.7921987 232,101.051724 L232,110 L32,110 L32,101.051724 C32,68.3969699 53.7388273,40.8195914 83.5340368,32.0020332 C83.182234,33.4201865 83,34.8712315 83,36.3476251 C83,52.6289957 105.161905,65.8276544 132.5,65.8276544 C159.838095,65.8276544 182,52.6289957 182,36.3476251 C182,34.9849859 181.844766,33.6439396 181.544255,32.3304167 Z\"/>\n        ", "<mask id=\"" + id.mask + "\" fill=\"white\">\n            <use xlink:href=\"#" + id.path + "\"/>\n        </mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g class=\"clothing--shirt-scoop-neck\" transform=\"translate(0.000000, 170.000000)\">\n\t            <use class=\"clothes\" fill=\"#E6E6E6\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            " + (0, _makeColor2.default)(color, id.mask) + "\n\t        </g>\n\t    ";
	},

	attrs: { "color": _colors2.default }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _makeColor = __webpack_require__(1);

var _makeColor2 = _interopRequireDefault(_makeColor);

var _colors = __webpack_require__(2);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M171.319631,29.9364358 C205.706337,35.3665707 232,65.13854 232,101.051724 L232,110 L32,110 L32,101.051724 C32,65.1380521 58.2943778,35.3657617 92.6817711,29.9362145 C93.5835973,35.0053598 96.116393,39.8238432 100.236125,43.5389794 L100.236125,43.5389794 L129.321203,69.7676333 C130.843316,71.1402598 133.156684,71.1402598 134.678797,69.7676333 L134.678797,69.7676333 L163.763875,43.5389794 C164.189462,43.1551884 164.601167,42.7562772 164.998197,42.3430127 C168.414164,38.7873666 170.517305,34.4520434 171.319628,29.9364354 Z\"/>\n        ", "<mask id=\"" + id.mask + "\" fill=\"white\">\n            <use xlink:href=\"#" + id.path + "\"/>\n        </mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g class=\"clothing--shirt-v-neck\" transform=\"translate(0.000000, 170.000000)\">\n\t            <use class=\"clothes\" fill=\"#E6E6E6\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            " + (0, _makeColor2.default)(color, id.mask) + "\n\t        </g>\n\t    ";
	},

	attrs: { "color": _colors2.default }
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _blank = __webpack_require__(16);

var _blank2 = _interopRequireDefault(_blank);

var _eyepatch = __webpack_require__(17);

var _eyepatch2 = _interopRequireDefault(_eyepatch);

var _kurt = __webpack_require__(18);

var _kurt2 = _interopRequireDefault(_kurt);

var _prescription = __webpack_require__(19);

var _prescription2 = _interopRequireDefault(_prescription);

var _prescription3 = __webpack_require__(20);

var _prescription4 = _interopRequireDefault(_prescription3);

var _round = __webpack_require__(21);

var _round2 = _interopRequireDefault(_round);

var _sunglasses = __webpack_require__(22);

var _sunglasses2 = _interopRequireDefault(_sunglasses);

var _wayfarers = __webpack_require__(23);

var _wayfarers2 = _interopRequireDefault(_wayfarers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	blank: _blank2.default,
	eyepatch: _eyepatch2.default,
	kurt: _kurt2.default,
	prescription01: _prescription2.default,
	prescription02: _prescription4.default,
	round: _round2.default,
	sunglasses: _sunglasses2.default,
	wayfarers: _wayfarers2.default
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	defs: [],
	render: function render() {
		return "";
	},

	attrs: {}
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<rect id=\"" + id.path + "\" x=\"0\" y=\"0\" width=\"264\" height=\"280\"/>", "<mask id=\"" + id.mask + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path + "\"/>\n\t\t</mask>"],
	render: function render() {
		return "\n\t\t<g class=\"accesories\" stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t<g class=\"accesories-eyepatch\" mask=\"url(#" + id.mask + ")\">\n\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t<path\n\t\t\t\t\t\tclass=\"badass-eyepatch\"\n\t\t\t\t\t\tfill=\"#28354B\"\n\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\td=\"M160.395307,39.7810237 C157.318088,36.6927979 154.11865,43.6386608 152.623361,45.4281124 C149.013122,49.7486528 145.540256,54.182935 141.868413,58.4518947 C134.616309,66.8823544 127.439316,75.3743141 120.233991,83.8401528 C119.140279,85.1257012 119.27271,85.2649028 117.837048,85.3885641 C116.88598,85.4708947 115.563312,84.9802173 114.5737,84.9256608 C111.823607,84.774556 109.112057,85.2348141 106.435756,85.8227012 C101.091389,86.9961608 95.4264863,88.9291124 90.7890799,91.898306 C89.5718308,92.677306 88.7874545,93.5971608 87.4670933,93.841177 C86.3183659,94.0534512 84.794416,93.6295641 83.622299,93.5194592 C81.5412806,93.3237173 78.5378542,92.4726366 76.4953793,92.9137173 C73.9027538,93.4738302 72.9174244,96.6109915 75.5604528,98.0003624 C77.570314,99.0564431 81.5706,98.4761608 83.8235816,98.6447899 C86.3971,98.8372253 85.6120649,98.704306 85.2473843,101.164306 C84.7239177,104.69758 85.5985582,108.646475 87.0885766,111.878201 C90.5482655,119.383185 100.122861,127.335201 108.8551,126.603153 C116.142123,125.992451 122.526834,119.413274 125.519389,113.099935 C127.050916,109.868871 127.954546,106.192096 128.250376,102.628403 C128.438811,100.36183 128.333722,97.9580399 127.684083,95.7632173 C127.362888,94.6783705 126.853916,93.5554995 126.308378,92.5695157 C125.866281,91.7710076 123.908799,89.9203866 123.788886,89.1165882 C123.556307,87.5602415 127.973324,83.3874995 128.816339,82.3443141 C132.788953,77.4276205 136.780344,72.5320882 140.721662,67.5889431 C144.603353,62.7201931 148.506456,57.8640076 152.489612,53.0785802 C154.294237,50.9098786 163.318023,42.7148382 160.395307,39.7810237\"\n\t\t\t\t\t\t/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>";
	},

	attrs: {}
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	filter: (0, _common.uid)("filter-")
};

exports.default = new _common.AvatarPart({
	defs: ["<filter x=\"-0.8%\" y=\"-2.0%\" width=\"101.5%\" height=\"108.0%\" filterUnits=\"objectBoundingBox\" id=\"" + id.filter + "\">\n\t\t\t<feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/>\n\t\t\t<feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0\" type=\"matrix\" in=\"shadowOffsetOuter1\" result=\"shadowMatrixOuter1\"/>\n\t\t\t<feMerge>\n\t\t\t\t<feMergeNode in=\"shadowMatrixOuter1\"/>\n\t\t\t\t<feMergeNode in=\"SourceGraphic\"/>\n\t\t\t</feMerge>\n\t\t</filter>"],
	render: function render() {
		return "\n\t\t\t<g class=\"accessories\" fill=\"none\" transform=\"translate(62.000000, 85.000000)\" stroke-width=\"1\">\n\t\t\t\t<g class=\"accessories-kurt\" filter=\"url(#" + id.filter + ")\" transform=\"translate(5.000000, 2.000000)\">\n\t\t\t\t\t<path\n\t\t\t\t\t\tfill=\"#F4F4F4\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\td=\"M66,11.1111111 C54.9625586,11.1111111 53.3705645,2.0266011 30.6705882,0.740740741 C7.98552275,-0.283199952 0.815225204,6.4494855 0.776470588,11.1111111 C0.813236892,15.4042795 -0.352293566,26.5612661 14.3647059,39.6296296 C29.1367705,55.1420807 44.2704162,49.8818301 49.6941176,44.8148148 C55.1352081,42.4731118 61.3403442,21.4596351 66,21.4814815 C70.6596558,21.5033279 76.8647919,42.4731118 82.3058824,44.8148148 C87.7295838,49.8818301 102.86323,55.1420807 117.635294,39.6296296 C132.352294,26.5612661 131.186763,15.4042795 131.223529,11.1111111 C131.184775,6.4494855 124.014477,-0.283199952 101.329412,0.740740741 C78.6294355,2.0266011 77.0374414,11.1111111 66,11.1111111 Z\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\tfill=\"#2F383B\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\td=\"M55.1294118,21.4814815 C55.5103632,13.8233491 42.2156493,5.64243259 27.9529412,5.92592593 C13.6973442,6.22450879 11.8417942,15.3786982 11.6470588,18.8888889 C11.2982286,27.0220633 20.014463,45.3037598 36.1058824,44.8148148 C52.1972736,44.305848 54.9092435,26.5344305 55.1294118,21.4814815 Z\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\tfill=\"#2F383B\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\td=\"M120.352941,21.4814815 C120.733893,13.8233491 107.439179,5.64243259 93.1764706,5.92592593 C78.9208736,6.22450879 77.0653236,15.3786982 76.8705882,18.8888889 C76.521758,27.0220633 85.2379924,45.3037598 101.329412,44.8148148 C117.420803,44.305848 120.132773,26.5344305 120.352941,21.4814815 Z\"\n\t\t\t\t\t\ttransform=\"translate(98.611765, 25.370370) scale(-1, 1) translate(-98.611765, -25.370370) \"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {}
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	filter: (0, _common.uid)("filter-")
};

exports.default = new _common.AvatarPart({
	defs: ["<filter x=\"-0.8%\" y=\"-2.4%\" width=\"101.5%\" height=\"109.8%\" filterUnits=\"objectBoundingBox\" id=\"" + id.filter + "\">\n\t\t\t<feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/>\n\t\t\t<feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0\" type=\"matrix\" in=\"shadowOffsetOuter1\" result=\"shadowMatrixOuter1\"/>\n\t\t\t<feMerge>\n\t\t\t\t<feMergeNode in=\"shadowMatrixOuter1\"/>\n\t\t\t\t<feMergeNode in=\"SourceGraphic\"/>\n\t\t\t</feMerge>\n\t\t</filter>"],
	render: function render() {
		return "\n\t\t\t<g class=\"accesories\" fill=\"none\" transform=\"translate(62.000000, 85.000000)\" stroke-width=\"1\">\n\t\t\t\t<g class=\"glasses\" filter=\"url(#" + id.filter + ")\" transform=\"translate(8.000000, 8.000000)\" fill=\"#D6EAF2\">\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M46.2491397,7.27516667 C48.6207695,7.2975 49.7419096,7.69183333 50.1459601,10.1651667 C50.5553446,12.6705 50.1572949,15.4871667 49.6852359,17.9548333 C48.9648125,21.7228333 47.7666627,25.4145 44.9776475,28.1685 C43.5084639,29.6188333 41.7165732,30.7748333 39.8106684,31.5641667 C38.7985419,31.9835 37.7297416,32.2861667 36.6612747,32.5158333 C36.3489024,32.5828333 33.6822357,32.9501667 35.3177735,32.7635 C31.5009631,33.1991667 27.3601122,33.1818333 24.1723805,30.7525 C20.6396056,28.0601667 18.2203032,23.7998333 17.1565036,19.5561667 C16.5340925,17.0731667 15.2262624,11.1345 17.6158944,9.14916667 C20.3532365,6.8745 46.2491397,7.27516667 46.2491397,7.27516667 L46.2491397,7.27516667 Z M22.2178029,0.4905 C16.7774562,0.677833333 13.1466691,1.63383333 10.4633337,7.06916667 C5.54571911,17.0301667 13.9627711,31.9688333 23.352278,36.0395 C34.3293166,40.7991667 46.5921826,35.5318333 52.3955746,26.0058333 C55.4689587,20.9621667 57.0224862,13.3231667 56.9224737,7.50383333 C56.7951245,0.0765 51.6071427,-0.1295 45.5090472,0.0338333333 L22.2178029,0.4905 Z\"\n\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M79.6805515,7.27256667 C77.3089217,7.29523333 76.1877816,7.68923333 75.7837311,10.1625667 C75.3743466,12.6679 75.7723963,15.4845667 76.244122,17.9522333 C76.9648787,21.7202333 78.1630285,25.4119 80.9520437,28.1659 C82.4212273,29.6162333 84.213118,30.7722333 86.1190228,31.5619 C87.1311493,31.9809 88.1999496,32.2835667 89.2684165,32.5132333 C89.5807888,32.5802333 92.2471221,32.9479 90.6119177,32.7609 C94.4287281,33.1965667 98.569579,33.1792333 101.757311,30.7499 C105.290086,28.0575667 107.709388,23.7975667 108.773188,19.5539 C109.395599,17.0705667 110.703095,11.1322333 108.313797,9.14656667 C105.576455,6.8719 79.6805515,7.27256667 79.6805515,7.27256667 L79.6805515,7.27256667 Z M103.711555,0.4879 C109.152235,0.675233333 112.783022,1.63156667 115.466357,7.06656667 C120.383639,17.0275667 111.96692,31.9662333 102.577413,36.0372333 C91.6003746,40.7965667 79.3375086,35.5292333 73.5337832,26.0035667 C70.4607325,20.9595667 68.907205,13.3205667 69.0068841,7.50123333 C69.1345667,0.0739 74.3225485,-0.1321 80.420644,0.0315666667 L103.711555,0.4879 Z\"\n\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M13.1969483,4.9267 C9.78501392,5.11836667 5.88606327,5.16436667 2.69005822,6.63936667 C-0.69461078,8.20136667 -1.2176675,11.7387 3.04920921,12.2260333 C4.97094906,12.4457 6.89488267,12.0827 8.78716336,11.7450333 C10.336903,11.4683667 12.4419791,11.5580333 13.9064752,10.9657 C16.6355213,9.86236667 16.4603333,4.74003333 13.1969483,4.9267\"\n\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M112.73467,4.9267 C116.146606,5.11836667 120.045559,5.16436667 123.241565,6.63936667 C126.626236,8.20136667 127.149293,11.7387 122.882414,12.2260333 C120.960673,12.4457 119.036739,12.0827 117.144457,11.7450333 C115.594717,11.4683667 113.489639,11.5580333 112.025143,10.9657 C109.295782,9.86236667 109.471283,4.74003333 112.73467,4.9267\"\n\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M73.1094302,7.01263333 C71.1631869,4.71263333 66.0912197,3.38463333 62.8914864,3.38463333 C59.6914198,3.38463333 54.7681378,4.71263333 52.8222279,7.01263333 C51.8407719,8.1723 51.8074344,9.72396667 53.5083137,10.4509667 C55.6262451,11.3566333 57.5174814,9.7143 59.2126933,8.8553 C61.3809643,7.75663333 64.7120473,7.8773 66.7189648,8.8553 C68.4271783,9.68796667 70.3050797,11.3566333 72.4233444,10.4509667 C74.1242237,9.72396667 74.0908862,8.1723 73.1094302,7.01263333\"\n\t\t\t\t\t/>\n\t\t\t\t</g>\n\t\t\t</g>\n\n\t\t";
	},

	attrs: {}
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	filter: (0, _common.uid)("filter-")
};

exports.default = new _common.AvatarPart({
	defs: ["<filter x=\"-0.8%\" y=\"-2.4%\" width=\"101.5%\" height=\"109.8%\" filterUnits=\"objectBoundingBox\" id=\"" + id.filter + "\">\n\t\t\t<feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/>\n\t\t\t<feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0\" type=\"matrix\" in=\"shadowOffsetOuter1\" result=\"shadowMatrixOuter1\"/>\n\t\t\t<feMerge>\n\t\t\t\t<feMergeNode in=\"shadowMatrixOuter1\"/>\n\t\t\t\t<feMergeNode in=\"SourceGraphic\"/>\n\t\t\t</feMerge>\n\t\t</filter>"],
	render: function render() {
		return "\n\t\t\t<g fill=\"none\" transform=\"translate(62.000000, 85.000000)\" stroke-width=\"1\">\n\t\t\t\t<g class=\"wayfarers\" filter=\"url(#" + id.filter + ")\" transform=\"translate(6.000000, 7.000000)\" fill=\"#252C2F\">\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M34,41 L31.2421498,41 C17.3147125,41 9,33.3359286 9,20.5 C9,10.127 10.8170058,0 32.5299306,0 L35.4700694,0 C57.1829942,0 59,10.127 59,20.5 C59,32.5686429 48.7212748,41 34,41 Z M32.3853606,6 C13,6 13,12.8410159 13,21.5015498 C13,28.5719428 16.116254,37 30.9709365,37 L34,37 C46.3649085,37 55,30.6270373 55,21.5015498 C55,12.8410159 55,6 35.6146394,6 L32.3853606,6 Z\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"/>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M96,41 L93.2421498,41 C79.3147125,41 71,33.3359286 71,20.5 C71,10.127 72.8170058,0 94.5299306,0 L97.4700694,0 C119.182994,0 121,10.127 121,20.5 C121,32.5686429 110.721275,41 96,41 Z M94.3853606,6 C75,6 75,12.8410159 75,21.5015498 C75,28.5719428 78.1194833,37 92.9709365,37 L96,37 C108.364909,37 117,30.6270373 117,21.5015498 C117,12.8410159 117,6 97.6146394,6 L94.3853606,6 Z\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"/>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M2.95454545,5.77156439 C3.64590909,5.09629136 11.2095455,0 32.5,0 C50.3513636,0 54.1302273,1.85267217 59.8502273,4.6518809 L60.2689233,4.85850899 C60.6666014,4.99901896 62.7002447,5.68982981 65.0790606,5.76579519 C67.2462948,5.67278567 69.1000195,5.08540191 69.641698,4.89719767 C76.1703915,1.7220864 82.5610971,0 97.5,0 C118.790455,0 126.354091,5.09629136 127.045455,5.77156439 C128.679318,5.77156439 130,7.06150904 130,8.65734659 L130,11.5431288 C130,13.1389663 128.679318,14.428911 127.045455,14.428911 C127.045455,14.428911 120.143997,14.428911 120.143997,17.3146932 C120.143997,20.2004754 118.181818,13.1389663 118.181818,11.5431288 L118.181818,8.73240251 C114.578575,7.35340151 108.128411,4.78617535 97.5,4.78617535 C85.6584651,4.78617535 79.7610984,6.88602813 74.7022935,8.97112368 L74.7588636,9.10752861 L74.7563667,11.0937608 L72.5391666,16.4436339 L69.8004908,15.3608351 C69.5558969,15.2641292 69.0281396,15.090392 68.2963505,14.9099044 C66.256272,14.4067419 64.1589087,14.253569 62.3040836,14.6343084 C61.6235903,14.7739931 60.9922286,14.9836085 60.4128127,15.266732 L57.7704824,16.5578701 L55.1266751,11.3962031 L55.2440909,9.10175705 L55.3248203,8.90683855 C50.9620526,6.87386374 46.9392639,4.78617535 32.5,4.78617535 C21.8721459,4.78617535 15.422131,7.3524397 11.8181818,8.7314671 L11.8181818,11.5431288 C11.8181818,13.1389663 8.86363636,20.2004754 8.86363636,17.3146932 C8.86363636,14.428911 2.95454545,14.428911 2.95454545,14.428911 C1.32363636,14.428911 0,13.1389663 0,11.5431288 L0,8.65734659 C0,7.06150904 1.32363636,5.77156439 2.95454545,5.77156439 Z\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\n\t\t";
	},

	attrs: {}
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	path: (0, _common.uid)("path-"),
	filter: (0, _common.uid)("filter-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path + "\"\n\t\t\td=\"M80.4646192,16.3941179 C84.3801509,8.45869677 92.552602,3 102,3 C110.919691,3 118.702887,7.86591082 122.839921,15.0880638 C123.050197,15.0306504 123.271519,15 123.5,15 L131.5,15 C132.880712,15 134,16.1192881 134,17.5 C134,18.8807119 132.880712,20 131.5,20 L124.963126,20 C125.637355,22.2145921 126,24.5649459 126,27 C126,40.254834 115.254834,51 102,51 C88.745166,51 78,40.254834 78,27 C78,25.5781066 78.1236513,24.1850936 78.3607874,22.8311273 C78.2762458,18.4553035 74.9135957,15 70.8624171,15 C67.1256697,15 63.9747186,17.9397535 63.4417635,21.8300629 C63.8073299,23.4951922 64,25.2250958 64,27 C64,40.254834 53.254834,51 40,51 C26.745166,51 16,40.254834 16,27 C16,24.5649459 16.3626451,22.2145921 17.0368738,20 L10.5,20 C9.11928813,20 8,18.8807119 8,17.5 C8,16.1192881 9.11928813,15 10.5,15 L10.5,15 L18.5,15 C18.728481,15 18.9498033,15.0306504 19.1600793,15.0880638 C23.2971127,7.86591082 31.0803092,3 40,3 C49.3521568,3 57.4549431,8.34919095 61.415666,16.15488 C63.4929212,13.0392725 66.9494432,11 70.8624171,11 C74.8746823,11 78.4070368,13.1440781 80.4646192,16.3941179 Z M40,47 C51.045695,47 60,38.045695 60,27 C60,15.954305 51.045695,7 40,7 C28.954305,7 20,15.954305 20,27 C20,38.045695 28.954305,47 40,47 Z M102,47 C113.045695,47 122,38.045695 122,27 C122,15.954305 113.045695,7 102,7 C90.954305,7 82,15.954305 82,27 C82,38.045695 90.954305,47 102,47 Z\"\n\t\t\t/>", "<filter x=\"-0.8%\" y=\"-2.1%\" width=\"101.6%\" height=\"108.3%\" filterUnits=\"objectBoundingBox\" id=\"" + id.filter + "\">\n\t\t\t<feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/>\n\t\t\t<feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0\" type=\"matrix\" in=\"shadowOffsetOuter1\"/>\n\t\t</filter>"],
	render: function render() {
		return "\n\t\t\t<g fill=\"none\" transform=\"translate(62.000000, 85.000000)\">\n\t\t\t\t<g class=\"lennon-glasses\">\n\t\t\t\t\t<use fill=\"black\" fill-opacity=\"1\" filter=\"url(#" + id.filter + "\" xlink:href=\"#" + id.path + "\"/>\n\t\t\t\t\t<use fill=\"#252C2F\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {}
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	path1: (0, _common.uid)("path-"),
	path2: (0, _common.uid)("path-"),
	filter: (0, _common.uid)("filter-"),
	linearGradient1: (0, _common.uid)("linear-gradient-"),
	linearGradient2: (0, _common.uid)("linear-gradient-")
};

exports.default = new _common.AvatarPart({
	defs: ["<filter id=\"" + id.filter + "\" x=\"-0.8%\" y=\"-2.6%\" width=\"101.6%\" height=\"110.5%\" filterUnits=\"objectBoundingBox\">\n\t\t\t<feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/>\n\t\t\t<feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0\" type=\"matrix\" in=\"shadowOffsetOuter1\" result=\"shadowMatrixOuter1\"/>\n\t\t\t<feMerge>\n\t\t\t\t<feMergeNode in=\"shadowMatrixOuter1\"/>\n\t\t\t\t<feMergeNode in=\"SourceGraphic\"/>\n\t\t\t</feMerge>\n\t\t</filter>", "<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M47.0104611,6.27728008 C49.5212682,6.30134922 50.7082016,6.72633117 51.1359635,9.39189846 C51.5693724,12.0919529 51.1479634,15.1275382 50.648202,17.7869984 C49.8855011,21.8478573 48.6170388,25.8264499 45.6643523,28.794498 C44.1089507,30.3575551 42.2119044,31.6034024 40.1941529,32.4540848 C39.1226305,32.9060098 37.9911085,33.2322006 36.8599395,33.4797175 C36.5292357,33.5519249 33.7060778,33.9478084 35.4375958,33.7466335 C31.3967988,34.2161613 27.0129452,34.1974808 23.6381438,31.5793333 C19.8980507,28.6777448 17.3367734,24.0862872 16.2105455,19.5127916 C15.5516086,16.8368063 14.1670294,10.4365709 16.6968952,8.29693227 C19.5948762,5.84547255 47.0104611,6.27728008 47.0104611,6.27728008 L47.0104611,6.27728008 Z\"\n\t\t\t/>", "<path\n\t\t\tid=\"" + id.path2 + "\"\n\t\t\td=\"M78.9192315,6.27468008 C76.4084239,6.29910846 75.2214902,6.72373117 74.7937283,9.38929846 C74.3603192,12.0893529 74.7817283,15.1249382 75.2811369,17.7843984 C76.0441909,21.8452573 77.3126534,25.8238499 80.2653406,28.791898 C81.8207425,30.3549551 83.7177893,31.6008024 85.7355412,32.4518441 C86.8070638,32.9034098 87.938586,33.2296006 89.0697553,33.4771175 C89.4004591,33.5493249 92.2232647,33.9455676 90.4920992,33.7440335 C94.5328971,34.2135613 98.9167517,34.1948808 102.291554,31.5767333 C106.031648,28.6751448 108.592926,24.0840464 109.719154,19.5105508 C110.378091,16.8342063 111.762317,10.4343302 109.232804,8.29433227 C106.334822,5.84287255 78.9192315,6.27468008 78.9192315,6.27468008 L78.9192315,6.27468008 Z\"\n\t\t\t/>", "<linearGradient id=\"" + id.linearGradient1 + "\" x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"70.5058195%\">\n\t\t\t<stop stopColor=\"#FFFFFF\" stopOpacity=\"0.5\" offset=\"0%\"/>\n\t\t\t<stop stopColor=\"#000000\" stopOpacity=\"0.5\" offset=\"100%\"/>\n\t\t</linearGradient>", "<linearGradient id=\"" + id.linearGradient2 + "\" x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" >\n\t\t\t<stop stopColor=\"#FFFFFF\" stopOpacity=\"0.5\" offset=\"0%\"/>\n\t\t\t<stop stopColor=\"#000000\" stopOpacity=\"0.5\" offset=\"70.5058195%\"/>\n\t\t</linearGradient>"],
	render: function render() {
		return "\n\t\t\t<g class=\"accesories\" fill=\"none\" transform=\"translate(62.000000, 85.000000)\" stroke-width=\"1\">\n\t\t\t\t<g class=\"sunglasses\" filter=\"url(#" + id.filter + ")\" transform=\"translate(8.000000, 8.000000)\">\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<use fill-opacity=\"0.700000048\" fill=\"#000000\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t<use fill=\"url(#" + id.linearGradient1 + ")\" style=\"mixBlendMode: screen;\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<use fill-opacity=\"0.700000048\" fill=\"#000000\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t\t<use fill=\"url(#" + id.linearGradient2 + ")\" style=\"mixBlendMode: screen;\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g fill=\"#252C2F\">\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\td=\"M46.2491397,7.27516667 C48.6207695,7.2975 49.7419096,7.69183333 50.1459601,10.1651667 C50.5553446,12.6705 50.1572949,15.4871667 49.6852359,17.9548333 C48.9648125,21.7228333 47.7666627,25.4145 44.9776475,28.1685 C43.5084639,29.6188333 41.7165732,30.7748333 39.8106684,31.5641667 C38.7985419,31.9835 37.7297416,32.2861667 36.6612747,32.5158333 C36.3489024,32.5828333 33.6822357,32.9501667 35.3177735,32.7635 C31.5009631,33.1991667 27.3601122,33.1818333 24.1723805,30.7525 C20.6396056,28.0601667 18.2203032,23.7998333 17.1565036,19.5561667 C16.5340925,17.0731667 15.2262624,11.1345 17.6158944,9.14916667 C20.3532365,6.8745 46.2491397,7.27516667 46.2491397,7.27516667 L46.2491397,7.27516667 Z M22.2178029,0.4905 C16.7774562,0.677833333 13.1466691,1.63383333 10.4633337,7.06916667 C5.54571911,17.0301667 13.9627711,31.9688333 23.352278,36.0395 C34.3293166,40.7991667 46.5921826,35.5318333 52.3955746,26.0058333 C55.4689587,20.9621667 57.0224862,13.3231667 56.9224737,7.50383333 C56.7951245,0.0765 51.6071427,-0.1295 45.5090472,0.0338333333 L22.2178029,0.4905 Z\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\td=\"M79.6805515,7.27256667 C77.3089217,7.29523333 76.1877816,7.68923333 75.7837311,10.1625667 C75.3743466,12.6679 75.7723963,15.4845667 76.244122,17.9522333 C76.9648787,21.7202333 78.1630285,25.4119 80.9520437,28.1659 C82.4212273,29.6162333 84.213118,30.7722333 86.1190228,31.5619 C87.1311493,31.9809 88.1999496,32.2835667 89.2684165,32.5132333 C89.5807888,32.5802333 92.2471221,32.9479 90.6119177,32.7609 C94.4287281,33.1965667 98.569579,33.1792333 101.757311,30.7499 C105.290086,28.0575667 107.709388,23.7975667 108.773188,19.5539 C109.395599,17.0705667 110.703095,11.1322333 108.313797,9.14656667 C105.576455,6.8719 79.6805515,7.27256667 79.6805515,7.27256667 L79.6805515,7.27256667 Z M103.711555,0.4879 C109.152235,0.675233333 112.783022,1.63156667 115.466357,7.06656667 C120.383639,17.0275667 111.96692,31.9662333 102.577413,36.0372333 C91.6003746,40.7965667 79.3375086,35.5292333 73.5337832,26.0035667 C70.4607325,20.9595667 68.907205,13.3205667 69.0068841,7.50123333 C69.1345667,0.0739 74.3225485,-0.1321 80.420644,0.0315666667 L103.711555,0.4879 Z\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\td=\"M13.1969483,4.9267 C9.78501392,5.11836667 5.88606327,5.16436667 2.69005822,6.63936667 C-0.69461078,8.20136667 -1.2176675,11.7387 3.04920921,12.2260333 C4.97094906,12.4457 6.89488267,12.0827 8.78716336,11.7450333 C10.336903,11.4683667 12.4419791,11.5580333 13.9064752,10.9657 C16.6355213,9.86236667 16.4603333,4.74003333 13.1969483,4.9267\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\td=\"M112.73467,4.9267 C116.146606,5.11836667 120.045559,5.16436667 123.241565,6.63936667 C126.626236,8.20136667 127.149293,11.7387 122.882414,12.2260333 C120.960673,12.4457 119.036739,12.0827 117.144457,11.7450333 C115.594717,11.4683667 113.489639,11.5580333 112.025143,10.9657 C109.295782,9.86236667 109.471283,4.74003333 112.73467,4.9267\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\td=\"M73.1094302,7.01263333 C71.1631869,4.71263333 66.0912197,3.38463333 62.8914864,3.38463333 C59.6914198,3.38463333 54.7681378,4.71263333 52.8222279,7.01263333 C51.8407719,8.1723 51.8074344,9.72396667 53.5083137,10.4509667 C55.6262451,11.3566333 57.5174814,9.7143 59.2126933,8.8553 C61.3809643,7.75663333 64.7120473,7.8773 66.7189648,8.8553 C68.4271783,9.68796667 70.3050797,11.3566333 72.4233444,10.4509667 C74.1242237,9.72396667 74.0908862,8.1723 73.1094302,7.01263333\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {}
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	path1: (0, _common.uid)("path-"),
	path2: (0, _common.uid)("mask-"),
	filter: (0, _common.uid)("filter-"),
	linearGradient: (0, _common.uid)("linear-gradient-")
};

exports.default = new _common.AvatarPart({
	defs: ["<filter x=\"-0.8%\" y=\"-2.4%\" width=\"101.6%\" height=\"109.8%\" filterUnits=\"objectBoundingBox\" id=\"" + id.filter + "\">\n\t\t\t<feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/>\n\t\t\t<feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0\" type=\"matrix\" in=\"shadowOffsetOuter1\" result=\"shadowMatrixOuter1\"/>\n\t\t\t<feMerge>\n\t\t\t\t<feMergeNode in=\"shadowMatrixOuter1\"/>\n\t\t\t\t<feMergeNode in=\"SourceGraphic\"/>\n\t\t\t</feMerge>\n\t\t</filter>", "<linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"" + id.linearGradient + "\">\n\t\t\t<stop stopColor=\"#FFFFFF\" stopOpacity=\"0.5\" offset=\"0%\"/>\n\t\t\t<stop stopColor=\"#000000\" stopOpacity=\"0.5\" offset=\"70.5058195%\"/>\n\t\t</linearGradient>", "<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M44.9178864,17.5714286 C44.9178864,27.2737857 36.66775,35.1428571 22.9204545,35.1428571 L20.1704091,35.1428571 C6.42311364,35.1428571 0.923022727,27.2708571 0.923022727,17.5714286 L0.923022727,17.5714286 C0.923022727,7.86614286 2.20715909,0 21.4545455,0 L24.3863636,0 C43.63375,0 44.9178864,7.86614286 44.9178864,17.5714286 L44.9178864,17.5714286 Z\"\n\t\t\t/>", "<path\n\t\t\tid=\"" + id.path2 + "\"\n\t\t\td=\"M106.486068,17.5714286 C106.486068,27.2737857 98.2388636,35.1428571 84.4886364,35.1428571 L81.7385909,35.1428571 C67.9912955,35.1428571 62.4912045,27.2708571 62.4912045,17.5714286 L62.4912045,17.5714286 C62.4912045,7.86614286 63.7753409,0 83.0227273,0 L85.9545455,0 C105.199,0 106.486068,7.86614286 106.486068,17.5714286 L106.486068,17.5714286 Z\"\n\t\t\t/>"],
	render: function render() {
		return "\n\t\t\t<g fill=\"none\" transform=\"translate(62.000000, 85.000000)\" stroke-width=\"1\">\n\t\t\t\t<g filter=\"url(#" + id.filter + ")\" transform=\"translate(7.000000, 7.000000)\">\n\t\t\t\t\t<g transform=\"translate(10.795455, 2.928571)\" fill-rule=\"nonzero\">\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<use fill-opacity=\"0.700000048\" fill=\"#000000\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t\t<use fill=\"url(#" + id.linearGradient + ")\" fill-rule=\"evenodd\" style=\"mixBlendMode: screen;\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<g>\n\t\t\t\t\t\t\t<use fill-opacity=\"0.700000048\" fill=\"#000000\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t\t\t<use fill=\"url(#" + id.linearGradient + ")\" fill-rule=\"evenodd\" style=\"mixBlendMode: screen;\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t\t<path\n\t\t\t\t\t\tfill=\"#252C2F\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\td=\"M33.7159091,41 L30.9658636,41 C17.0778409,41 8.78665909,33.3359286 8.78665909,20.5 C8.78665909,10.127 10.5985227,0 32.25,0 L35.1818182,0 C56.8332955,0 58.6451591,10.127 58.6451591,20.5 C58.6451591,32.5686429 48.3955227,41 33.7159091,41 Z M32.25,5.85421429 C14.6502955,5.85421429 14.6502955,12.3175714 14.6502955,20.5 C14.6502955,27.1800714 17.4795,35.1428571 30.9658636,35.1428571 L33.7159091,35.1428571 C44.9418409,35.1428571 52.7815227,29.1217143 52.7815227,20.5 C52.7815227,12.3175714 52.7815227,5.85421429 35.1818182,5.85421429 L32.25,5.85421429 Z\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\tfill=\"#252C2F\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\td=\"M95.2840909,41 L92.5340455,41 C78.6460227,41 70.3548409,33.3359286 70.3548409,20.5 C70.3548409,10.127 72.1667045,0 93.8181818,0 L96.75,0 C118.401477,0 120.213341,10.127 120.213341,20.5 C120.213341,32.5686429 109.963705,41 95.2840909,41 Z M93.8181818,5.85421429 C76.2184773,5.85421429 76.2184773,12.3175714 76.2184773,20.5 C76.2184773,27.1800714 79.0506136,35.1428571 92.5340455,35.1428571 L95.2840909,35.1428571 C106.510023,35.1428571 114.349705,29.1217143 114.349705,20.5 C114.349705,12.3175714 114.349705,5.85421429 96.75,5.85421429 L93.8181818,5.85421429 Z\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\tfill=\"#252C2F\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\td=\"M2.93181818,5.85714286 C3.61786364,5.17185714 11.1233182,0 32.25,0 C49.9640455,0 53.7138409,1.88014286 59.3898409,4.72085714 L59.8053162,4.93054903 C60.1999353,5.07314243 62.2179351,5.77419634 64.5784525,5.85128811 C66.7290156,5.75689949 68.5684809,5.16080623 69.1059926,4.96981137 C75.5844654,1.74762081 81.9260118,0 96.75,0 C117.876682,0 125.382136,5.17185714 126.068182,5.85714286 C127.689477,5.85714286 129,7.16621429 129,8.78571429 L129,11.7142857 C129,13.3337857 127.689477,14.6428571 126.068182,14.6428571 C126.068182,14.6428571 120.204545,14.6428571 120.204545,17.5714286 C120.204545,20.5 117.272727,13.3337857 117.272727,11.7142857 L117.272727,8.8618831 C113.697201,7.46243482 107.296654,5.85714286 96.75,5.85714286 C84.9995538,5.85714286 79.1475515,6.98813142 74.1276604,9.10414393 L74.1837955,9.24257143 L71.6878772,10.2500422 L74.1813177,11.2582547 L71.981173,16.6874536 L69.263564,15.5885995 C69.0208516,15.4904597 68.4971539,15.3141463 67.770994,15.1309826 C65.7466083,14.6203594 63.6653786,14.4649153 61.8248214,14.8513001 C61.1495627,14.993056 60.5230576,15.2057795 59.9480988,15.4931011 L57.3260941,16.8033836 L54.7026238,11.5651815 L57.3246285,10.2548989 L57.3310023,10.251716 L54.8191364,9.23671429 L54.8992448,9.03890561 C50.5700368,6.97578666 46.5781927,5.85714286 32.25,5.85714286 C21.7038986,5.85714286 15.3034993,7.46145875 11.7272727,8.86093383 L11.7272727,11.7142857 C11.7272727,13.3337857 8.79545455,20.5 8.79545455,17.5714286 C8.79545455,14.6428571 2.93181818,14.6428571 2.93181818,14.6428571 C1.31345455,14.6428571 0,13.3337857 0,11.7142857 L0,8.78571429 C0,7.16621429 1.31345455,5.85714286 2.93181818,5.85714286 Z\"\n\t\t\t\t\t\t/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {}
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _beardLight = __webpack_require__(25);

var _beardLight2 = _interopRequireDefault(_beardLight);

var _beardMagestic = __webpack_require__(26);

var _beardMagestic2 = _interopRequireDefault(_beardMagestic);

var _beardMedium = __webpack_require__(27);

var _beardMedium2 = _interopRequireDefault(_beardMedium);

var _blank = __webpack_require__(28);

var _blank2 = _interopRequireDefault(_blank);

var _moustacheFancy = __webpack_require__(29);

var _moustacheFancy2 = _interopRequireDefault(_moustacheFancy);

var _moustacheMagnum = __webpack_require__(30);

var _moustacheMagnum2 = _interopRequireDefault(_moustacheMagnum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	blank: _blank2.default,
	beardLight: _beardLight2.default,
	beardMagestic: _beardMagestic2.default,
	beardMedium: _beardMedium2.default,
	moustacheFancy: _moustacheFancy2.default,
	moustacheMagnum: _moustacheMagnum2.default
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _hairColors = __webpack_require__(3);

var _hairColors2 = _interopRequireDefault(_hairColors);

var _makeColor = __webpack_require__(4);

var _makeColor2 = _interopRequireDefault(_makeColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path + "\"\n\t\t\td=\"M101.428403,98.1685688 C98.9148372,100.462621 96.23722,101.494309 92.8529444,100.772863 C92.2705777,100.648833 89.8963391,96.2345713 83.9998344,96.2345713 C78.1033297,96.2345713 75.7294253,100.648833 75.1467245,100.772863 C71.7624488,101.494309 69.0848316,100.462621 66.5712661,98.1685688 C61.8461772,93.855604 57.9166219,87.9081858 60.2778299,81.4191814 C61.5083844,78.0369425 63.5097479,74.3237342 67.1506257,73.2459109 C71.0384163,72.0955419 76.4968931,73.2439051 80.4147542,72.4582708 C81.6840664,72.2035248 83.0706538,71.7508657 83.9998344,71 C84.929015,71.7508657 86.3159365,72.2035248 87.5845805,72.4582708 C91.5027758,73.2439051 96.9612525,72.0955419 100.849043,73.2459109 C104.489921,74.3237342 106.491284,78.0369425 107.722173,81.4191814 C110.083381,87.9081858 106.153826,93.855604 101.428403,98.1685688 M140.081033,26 C136.670693,34.4002532 137.987774,44.8580348 137.356666,53.6758724 C136.844038,60.8431942 135.33712,71.5857526 128.972858,76.214531 C125.718361,78.5816138 119.79436,82.5598986 115.54187,81.4501943 C112.614539,80.6863848 112.302182,72.290096 108.455284,69.1469801 C104.09172,65.5823153 98.6429854,64.0160432 93.1491481,64.2578722 C90.7785381,64.3622683 85.9841367,64.3374908 83.9999331,66.1604584 C82.0157295,64.3374908 77.2216647,64.3622683 74.8510547,64.2578722 C69.3568808,64.0160432 63.9081467,65.5823153 59.5445817,69.1469801 C55.6976839,72.290096 55.3856641,80.6863848 52.4583326,81.4501943 C48.2058427,82.5598986 42.2818421,78.5816138 39.0270077,76.214531 C32.6624096,71.5857526 31.1561652,60.8431942 30.642864,53.6758724 C30.0120926,44.8580348 31.3291729,34.4002532 27.9188335,26 C26.2597768,26 27.3540339,42.1288693 27.3540339,42.1288693 L27.3540339,62.4851205 C27.3856735,77.7732046 36.935095,100.655445 58.1080116,109.393004 C63.2861266,111.52982 75.0153111,115 83.9999331,115 C92.9845551,115 104.71374,111.860188 109.891855,109.723371 C131.064771,100.985813 140.614193,77.7732046 140.646169,62.4851205 L140.646169,42.1288693 C140.646169,42.1288693 141.740089,26 140.081033,26\"\n\t\t\t/>", "<mask id=\"" + id.mask + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g transform=\"translate(49.000000, 72.000000)\">\n\t\t\t\t<use fill=\"#331B0C\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t\t\t\t" + (0, _makeColor2.default)(color, id.mask) + "\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _hairColors2.default
	}
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _hairColors = __webpack_require__(3);

var _hairColors2 = _interopRequireDefault(_hairColors);

var _makeColor = __webpack_require__(4);

var _makeColor2 = _interopRequireDefault(_makeColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path + "\"\n\t\t\td=\"M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z\"\n\t\t\t/>", "<mask id=\"" + id.mask + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g transform=\"translate(49.000000, 72.000000)\">\n\t\t\t\t<use fill=\"#5E7AA9\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t\t\t\t" + (0, _makeColor2.default)(color, id.mask) + "\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _hairColors2.default
	}
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _hairColors = __webpack_require__(3);

var _hairColors2 = _interopRequireDefault(_hairColors);

var _makeColor = __webpack_require__(4);

var _makeColor2 = _interopRequireDefault(_makeColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path + "\"\n\t\t\td=\"M105.017591,94.1296214 C101.150441,99.7213834 98.257542,95.9467308 94.1374777,92.8762163 C91.6567227,91.0272796 87.9608129,88.7275108 84.5044337,88.8410391 C81.0477114,88.7275108 77.3518016,91.0272796 74.8710466,92.8762163 C70.7509822,95.9467308 67.8580835,99.7213834 63.9909333,94.1296214 C61.0884259,89.9323547 62.3028943,82.8739117 65.014944,78.9027173 C68.8738581,73.2512381 74.1088724,75.9847769 79.9622738,75.3400279 C81.5538829,75.1648137 83.1526985,74.7228407 84.5044337,74 C85.856169,74.7228407 87.4546414,75.1648137 89.0462504,75.3400279 C94.899995,75.9847769 100.134666,73.2512381 103.993923,78.9027173 C106.70563,82.8739117 107.920098,89.9323547 105.017591,94.1296214 M140.39109,26 C136.966521,40.0748212 135.393023,54.4337754 132.909944,68.6711471 C132.392536,71.6390145 131.826063,74.5963095 131.224594,77.5496398 C131.098329,78.1697764 130.973781,80.4725746 130.362704,80.7643064 C128.511632,81.6484223 124.739149,76.9466834 123.730409,75.8851496 C121.196893,73.219256 118.684993,70.5292442 115.599415,68.437233 C109.364783,64.2102603 102.065485,61.7108818 94.4700836,61.117837 C91.2922091,60.8693859 86.9951134,61.3025234 84.000116,63.1104016 C81.0051185,61.3025234 76.7080229,60.8693859 73.5298053,61.117837 C65.9344039,61.7108818 58.6351055,64.2102603 52.4004739,68.437233 C49.3148957,70.5292442 46.8033387,73.219256 44.2694796,75.8851496 C43.2607395,76.9466834 39.4882573,81.6484223 37.6371849,80.7643064 C37.0261079,80.4725746 36.9015594,78.1697764 36.7752954,77.5496398 C36.1738255,74.5963095 35.6073527,71.6390145 35.0899445,68.6711471 C32.6072086,54.4337754 31.0337113,40.0748212 27.6091415,26 C26.6127533,26 25.7385119,44.7478165 25.6273446,46.4945731 C25.174784,53.5889755 24.6463963,60.5254529 25.3216346,67.6261326 C26.485803,79.8749043 27.6993791,95.2339402 37.032627,104.58753 C45.4659003,113.039493 57.7103052,114.806417 68.2713185,120.141327 C69.631059,120.828202 71.4347824,121.676306 73.3798667,122.37111 C75.4289129,123.934171 79.4926946,125 84.1740722,125 C89.0846465,125 93.3155222,123.827456 95.2540874,122.137856 C96.9548781,121.49261 98.5180822,120.752874 99.7285704,120.141327 C110.288776,114.805245 122.533989,113.039493 130.967262,104.58753 C140.30051,95.2339402 141.514086,79.8749043 142.678597,67.6261326 C143.353493,60.5254529 142.825105,53.5889755 142.372887,46.4945731 C142.261377,44.7478165 141.387136,26 140.39109,26 Z\"\n\t\t\t/>", "<mask id=\"" + id.mask + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g transform=\"translate(49.000000, 72.000000)\">\n\t\t\t\t<use fill=\"#252E32\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t\t\t\t" + (0, _makeColor2.default)(color, id.mask) + "\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _hairColors2.default
	}
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	defs: [],
	render: function render() {
		return "\n\n\t\t";
	},

	attrs: {}
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _hairColors = __webpack_require__(3);

var _hairColors2 = _interopRequireDefault(_hairColors);

var _makeColor = __webpack_require__(4);

var _makeColor2 = _interopRequireDefault(_makeColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path + "\"\n\t\t\td=\"M84.0002865,69.2970648 C77.2083681,65.7112456 67.5782013,65.1489138 62.3885276,67.1316942 C56.6144416,69.3374281 51.5052994,75.5829845 42.6388201,72.8283797 C42.2699314,72.7136458 41.9094725,73.0449523 42.0204089,73.408662 C43.3937943,77.9183313 51.0278347,81.0068878 53.6221945,81.1080652 C64.961124,81.549609 74.0949802,72.8302891 84.0002865,72.1614794 C93.9055921,72.8302891 103.03945,81.549609 114.378714,81.1080652 C116.972736,81.0068878 124.607113,77.9183313 125.980498,73.408662 C126.091098,73.0449523 125.730639,72.7136458 125.36175,72.8283797 C116.495271,75.5829845 111.386129,69.3374281 105.612044,67.1316942 C100.422371,65.1489138 90.7922044,65.7112456 84.0002865,69.2970648 Z\"\n\t\t\t/>", "<mask id=\"" + id.mask + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g transform=\"translate(49.000000, 72.000000)\">\n\t\t\t\t<use fill=\"#28354B\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t\t\t\t" + (0, _makeColor2.default)(color, id.mask) + "\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _hairColors2.default
	}
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _hairColors = __webpack_require__(3);

var _hairColors2 = _interopRequireDefault(_hairColors);

var _makeColor = __webpack_require__(4);

var _makeColor2 = _interopRequireDefault(_makeColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path + "\"\n\t\t\td=\"M83.9980103,74.839711 C83.4569991,75.6087366 82.761047,76.2496937 81.949688,76.6891498 C73.0477917,81.5102869 63.8767499,77.3322546 58.8763101,77.6298353 C56.459601,77.7739966 53.3405442,79.4153191 52.2155358,77.6791014 C50.9768736,75.7669804 55.0680827,65.2207224 64.7214121,63.4643353 C71.7310704,62.1893309 81.4972391,63.6024033 83.9980103,66.9380109 C86.4987814,63.6024033 96.2649453,62.1893309 103.274279,63.4643353 C112.927938,65.2207224 117.019147,75.7669804 115.780485,77.6791014 C114.655476,79.4153191 111.53642,77.7739966 109.119711,77.6298353 C104.118941,77.3322546 94.948229,81.5102869 86.0463327,76.6891498 C85.2349736,76.2496937 84.5390216,75.6087366 83.9980103,74.839711 Z\"\n\t\t\t/>", "<mask id=\"" + id.mask + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g transform=\"translate(49.000000, 72.000000)\">\n\t\t\t\t<use fill=\"#28354B\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t\t\t\t" + (0, _makeColor2.default)(color, id.mask) + "\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _hairColors2.default
	}
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render(_ref) {
		var maskID = _ref.maskID,
		    color = _ref.color;

		return "\n\t\t<g class=\"body\" transform=\"translate(32.000000, 36.000000)\">\n\t\t\t<g\n\t\t\t\tclass=\"skin\"\n\t\t\t\tmask=\"url(#" + maskID + ")\"\n\t\t\t\tfill=\"" + color + "\">\n\t\t\t\t<g transform=\"translate(-32.000000, 0.000000)\">\n\t\t\t\t\t<rect x=\"0\" y=\"0\" width=\"264\" height=\"244\" />\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<path\n\t\t\t\tclass=\"neck-shadow\"\n\t\t\t\tfill-opacity=\"0.100000001\"\n\t\t\t\tfill=\"#000000\"\n\t\t\t\tmask=\"url(#" + maskID + ")\"\n\t\t\t\td=\"M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z\"\n\t\t\t/>\n\t\t</g>";
	},

	attrs: {
		color: {
			"tanned": "#FD9841",
			"yellow": "#F8D25C",
			"pale": "#FFDBB4",
			"light": "#EDB98A",
			"brown": "#D08B5B",
			"dark-brown": "#AE5D29",
			"black": "#614335"
		}
	}
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=avataaars-pure.js.map