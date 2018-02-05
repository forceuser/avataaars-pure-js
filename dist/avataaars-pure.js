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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
exports.render = render;

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

var _body = __webpack_require__(13);

var _body2 = _interopRequireDefault(_body);

var _common = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import accessories from "accessories/index";
// import faces from "faces/index";
// import facialHair from "facial-hair/index";
// import top from "./top/index";
var id = {
	bodyMask: (0, _common.uid)("mask-"),
	bodyPath: (0, _common.uid)("path-"),
	contentMask: (0, _common.uid)("mask-"),
	contentPath: (0, _common.uid)("path-"),
	cicleMask: (0, _common.uid)("mask-"),
	circlePath: (0, _common.uid)("path-")
};

var avatar = new _common.AvatarPart({
	circle: function circle() {
		return "\n\t\t\t<g\n\t\t\t\tclass=\"circle\"\n\t\t\t\tstroke-width=\"1\"\n\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\ttransform=\"translate(12.000000, 40.000000)\">\n\t\t\t\t<use\n\t\t\t\t\tclass=\"circle-background\"\n\t\t\t\t\tfill=\"#E6E6E6\"\n\t\t\t\t\txlink:href=\"#" + id.circlePath + "\"\n\t\t\t\t/>\n\t\t\t\t<g mask=\"url(#" + id.cicleMask + ")\" fill=\"#65C9FF\">\n\t\t\t\t\t<rect x=\"0\" y=\"0\" width=\"240\" height=\"240\" />\n\t\t\t\t</g>\n\t\t\t</g>";
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

		return "\n\t\t<svg width=\"264px\" height=\"280px\" viewBox=\"0 0 264 280\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n\t\t\t<defs>\n\t\t\t\t" + defs.join("\n") + "\n\t\t\t</defs>\n\t\t\t<g class=\"avataaar\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n\t\t\t\t<g class=\"avataaar-circle\" transform=\"translate(-825.000000, -1100.000000)\">\n\t\t\t\t  \t<g transform=\"translate(825.000000, 1100.000000)\">\n\t\t\t\t\t\t" + (avatarStyle === "circle" ? circle() : "") + "\n\t\t\t\t\t\t<g\n\t\t\t\t\t\t\tclass=\"avataaar-content\"\n\t\t\t\t\t\t\tstroke-width=\"1\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\tmask=\"url(#" + id.contentMask + ")\">\n\t\t\t\t\t\t\t" + this.include(_body2.default.set({ maskID: id.bodyMask, color: skin })) + "\n\t\t\t\t\t\t\t" + this.include(clothe) /*}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ${this.include(face)}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ${this.include(facialHair)}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ${this.include(accessory)}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ${this.include(top)*/ + "\n\t\t\t\t\t\t</g>\n\t\t\t\t  \t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</svg>";
	},

	attrs: {
		skin: _body2.default.attr("color"),
		clothe: _index2.default,
		// accesory: accessories,
		// facialHair,
		// face: faces,
		// top,
		avatarStyle: ["none", "circle"]
	}
});

function render() {
	return avatar.set({
		skin: "red",
		clothe: _index2.default.Hoodie.set({ color: "#FF488E" }),
		avatarStyle: avatar.attr("avatarStyle")[1]
	}).render();
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _blazerShirt = __webpack_require__(5);

var _blazerShirt2 = _interopRequireDefault(_blazerShirt);

var _blazerSweater = __webpack_require__(6);

var _blazerSweater2 = _interopRequireDefault(_blazerSweater);

var _collarSweater = __webpack_require__(7);

var _collarSweater2 = _interopRequireDefault(_collarSweater);

var _hoodie = __webpack_require__(8);

var _hoodie2 = _interopRequireDefault(_hoodie);

var _overall = __webpack_require__(9);

var _overall2 = _interopRequireDefault(_overall);

var _shirtCrewNeck = __webpack_require__(10);

var _shirtCrewNeck2 = _interopRequireDefault(_shirtCrewNeck);

var _shirtScoopNeck = __webpack_require__(11);

var _shirtScoopNeck2 = _interopRequireDefault(_shirtScoopNeck);

var _shirtVNeck = __webpack_require__(12);

var _shirtVNeck2 = _interopRequireDefault(_shirtVNeck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	BlazerShirt: _blazerShirt2.default,
	BlazerSweater: _blazerSweater2.default,
	CollarShirt: _collarSweater2.default,
	Hoodie: _hoodie2.default,
	Overall: _overall2.default,
	ShirtCrewNeck: _shirtCrewNeck2.default,
	ShirtScoopNeck: _shirtScoopNeck2.default,
	ShirtVNeck: _shirtVNeck2.default
};

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
	defs: ["\n            <path\n                id=\"" + id.path + "\"\n                d=\"M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z\"/>\n        ", "\n            <mask id=\"" + id.mask + "\" fill=\"white\">\n                <use xlink:href=\"#" + id.path + "\"/>\n            </mask>\n        "],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g class=\"clothing--overall\" transform=\"translate(0.000000, 170.000000)\">\n\t            <use class=\"overall\" fill=\"#B7C1DB\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            " + (0, _makeColor2.default)(color, id.mask) + "\n\t            <circle class=\"clothing--button\" fill=\"#F4F4F4\" fill-rule=\"evenodd\" cx=\"81\" cy=\"83\" r=\"5\"/>\n\t            <circle class=\"clothing--button\" fill=\"#F4F4F4\" fill-rule=\"evenodd\" cx=\"183\" cy=\"83\" r=\"5\"/>\n\t        </g>\n\t    ";
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
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M165.960472,29.2949161 C202.936473,32.3249982 232,63.2942856 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.9525631 61.591985,31.7649812 99.0454063,29.2195264 C99.0152598,29.5931145 99,29.9692272 99,30.3476251 C99,42.2107177 113.998461,51.8276544 132.5,51.8276544 C151.001539,51.8276544 166,42.2107177 166,30.3476251 C166,29.9946691 165.986723,29.6437014 165.960472,29.2949161 Z\"/>\n        ", "<mask id=\"" + id.mask + "\" fill=\"white\">\n            <use xlink:href=\"#" + id.path + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g class=\"clothing--shirt-crew-neck\" transform=\"translate(0.000000, 170.000000)\">\n\t            <use class=\"clothes\" fill=\"#E6E6E6\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            " + (0, _makeColor2.default)(color, id.mask) + "\n\t            <g class=\"shadowy\" opacity=\"0.599999964\" stroke-width=\"1\" fill-rule=\"evenodd\" mask=\"url(#" + id.mask + ")\" fill-opacity=\"0.16\" fill=\"#000000\">\n\t                <g transform=\"translate(92.000000, 4.000000)\">\n\t                    <ellipse cx=\"40.5\" cy=\"27.8476251\" rx=\"39.6351047\" ry=\"26.9138272\"/>\n\t                </g>\n\t            </g>\n\t        </g>\n\t    ";
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
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M181.544255,32.3304167 C210.784209,41.4878872 232,68.7921987 232,101.051724 L232,110 L32,110 L32,101.051724 C32,68.3969699 53.7388273,40.8195914 83.5340368,32.0020332 C83.182234,33.4201865 83,34.8712315 83,36.3476251 C83,52.6289957 105.161905,65.8276544 132.5,65.8276544 C159.838095,65.8276544 182,52.6289957 182,36.3476251 C182,34.9849859 181.844766,33.6439396 181.544255,32.3304167 Z\"/>\n        ", "<mask id=\"" + id.mask + "\" fill=\"white\">\n            <use xlink:href=\"#" + id.path + "\"/>\n        </mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g class=\"clothing--shirt-scoop-neck\" transform=\"translate(0.000000, 170.000000)\">\n\t            <use class=\"clothes\" fill=\"#E6E6E6\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            " + (0, _makeColor2.default)(color, id.mask) + "\n\t        </g>\n\t    ";
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
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M171.319631,29.9364358 C205.706337,35.3665707 232,65.13854 232,101.051724 L232,110 L32,110 L32,101.051724 C32,65.1380521 58.2943778,35.3657617 92.6817711,29.9362145 C93.5835973,35.0053598 96.116393,39.8238432 100.236125,43.5389794 L100.236125,43.5389794 L129.321203,69.7676333 C130.843316,71.1402598 133.156684,71.1402598 134.678797,69.7676333 L134.678797,69.7676333 L163.763875,43.5389794 C164.189462,43.1551884 164.601167,42.7562772 164.998197,42.3430127 C168.414164,38.7873666 170.517305,34.4520434 171.319628,29.9364354 Z\"/>\n        ", "<mask id=\"" + id.mask + "\" fill=\"white\">\n            <use xlink:href=\"#" + id.path + "\"/>\n        </mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g class=\"clothing--shirt-v-neck\" transform=\"translate(0.000000, 170.000000)\">\n\t            <use class=\"clothes\" fill=\"#E6E6E6\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            " + (0, _makeColor2.default)(color, id.mask) + "\n\t        </g>\n\t    ";
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