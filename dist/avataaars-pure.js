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
				this.data[args[0]] = args[1];
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
		value: function include(part) {
			if (part) {
				var _data$defs;

				this.data.defs = this.data.defs || [];
				var res = part.render();
				(_data$defs = this.data.defs).push.apply(_data$defs, _toConsumableArray(part.data.defs || []));
				return res;
			}
			return "";
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
var fabricColors = exports.fabricColors = {
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
	"yellow": "#e3c33a",
	"green": "#34c339",
	"brown": "#724133",
	"brownDark": "#4A312C",
	"white": "#F4F4F4"
};

var hairColors = exports.hairColors = {
	"auburn": "#A55728",
	"black": "#2C1B18",
	"blonde": "#B58143",
	"blondeGolden": "#D6B370",
	"brown": "#724133",
	"brownDark": "#4A312C",
	"platinum": "#ECDCBF",
	"red": "#C93305"
};

var skinColors = exports.skinColors = {
	"tanned": "#FD9841",
	"yellow": "#F8D25C",
	"pale": "#FFDBB4",
	"light": "#EDB98A",
	"brown": "#D08B5B",
	"dark-brown": "#AE5D29",
	"black": "#614335"
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function makeColor(color, maskId) {
    return "\n        <g mask=\"url(#" + maskId + ")\" fill-rule=\"evenodd\" fill=\"" + color + "\">\n            <rect x=\"0\" y=\"0\" width=\"264\" height=\"280\"/>\n        </g>\n    ";
}

exports.default = makeColor;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.avatar = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.random = random;

var _colors = __webpack_require__(1);

var _avatar = __webpack_require__(4);

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.avatar = _avatar2.default;


function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomVal(collection) {
	if (Array.isArray(collection)) {
		return collection[getRandomInt(0, collection.length - 1)];
	} else {
		var keys = Object.keys(collection);
		return collection[keys[getRandomInt(0, keys.length - 1)]];
	}
}

random.getRandomInt = getRandomInt;
random.randomVal = randomVal;

function random(target, part) {
	var selectFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : randomVal;

	if (target instanceof _avatar2.default.constructor) {
		if (part) {
			part.target.set(part.key, target);
		}
		var attrs = target.attr() || {};
		var keys = Object.keys(attrs);
		keys.forEach(function (key) {
			random(attrs[key], {
				key: key,
				target: target,
				path: part ? part.key + "." + key : key
			}, selectFunc);
		});
	} else if ((typeof target === "undefined" ? "undefined" : _typeof(target)) === "object") {
		var _keys = Object.keys(target);
		var key = selectFunc(_keys, part, target);
		random(target[key], Object.assign({}, part, {
			path: part.path + "." + key
		}), selectFunc);
	} else {
		if (part) {
			part.target.set(part.key, target);
		}
	}
	return target;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(14);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(23);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(66);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(73);

var _index10 = _interopRequireDefault(_index9);

var _body = __webpack_require__(109);

var _body2 = _interopRequireDefault(_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	bodyMask: "bodyMask",
	bodyPath: "bodyPath",
	contentMask: "contentMask",
	contentPath: "contentPath",
	circleMask: "cirecleMask",
	circlePath: "circlePath"
};

exports.default = new _common.AvatarPart({
	circle: function circle() {
		return "\n\t\t\t<g\n\n\t\t\t\tstroke-width=\"1\"\n\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\ttransform=\"translate(12.000000, 40.000000)\">\n\t\t\t\t<use\n\n\t\t\t\t\tfill=\"#E6E6E6\"\n\t\t\t\t\txlink:href=\"#" + id.circlePath + "\"\n\t\t\t\t/>\n\t\t\t\t<g mask=\"url(#" + id.circleMask + ")\" fill=\"#65C9FF\">\n\t\t\t\t\t<rect x=\"0\" y=\"0\" width=\"240\" height=\"240\" />\n\t\t\t\t</g>\n\t\t\t</g>";
	},

	defs: ["<rect id=\"framePath\" x=\"0\" y=\"0\" width=\"264\" height=\"280\"/>", "<mask id=\"frameMask\" fill=\"white\">\n\t\t\t<use xlink:href=\"#framePath\"/>\n\t\t</mask>", "<path\n\n\t\t\tid=\"" + id.bodyPath + "\"\n\t\t\td=\"M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z\"\n\t\t/>", "<mask id=\"" + id.bodyMask + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.bodyPath + "\" />\n\t\t</mask>", "<circle id=\"" + id.circlePath + "\" cx=\"120\" cy=\"120\" r=\"120\" />", "<mask id=\"" + id.circleMask + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.circlePath + "\" />\n\t\t</mask>", "<path\n\t\t\tid=\"" + id.contentPath + "\"\n\t\t\td=\"M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z\"\n\t\t/>", "<mask id=\"" + id.contentMask + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.contentPath + "\" />\n\t\t</mask>"],
	render: function render(_ref) {
		var defs = _ref.defs,
		    clothe = _ref.clothe,
		    _ref$face = _ref.face,
		    face = _ref$face === undefined ? _index6.default : _ref$face,
		    accessory = _ref.accessory,
		    _ref$body = _ref.body,
		    body = _ref$body === undefined ? _body2.default : _ref$body,
		    top = _ref.top,
		    facialHair = _ref.facialHair,
		    avatarStyle = _ref.avatarStyle,
		    circle = _ref.circle;

		return ("\n\t\t<svg width=\"264px\" height=\"280px\" viewBox=\"0 0 264 280\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n\t\t\t<defs>\n\t\t\t\t%defs%\n\t\t\t</defs>\n\t\t\t<g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n\t\t\t\t<g transform=\"translate(-825.000000, -1100.000000)\">\n\t\t\t\t  \t<g transform=\"translate(825.000000, 1100.000000)\">\n\t\t\t\t\t\t" + (avatarStyle === "circle" ? circle() : "") + "\n\t\t\t\t\t\t<g\n\t\t\t\t\t\t\tstroke-width=\"1\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\tmask=\"" + (avatarStyle === "circle" ? "url(#" + id.contentMask + ")" : "") + "\">\n\t\t\t\t\t\t\t" + this.include(body.set({ maskID: id.bodyMask })) + "\n\t\t\t\t\t\t\t" + this.include(clothe) + "\n\t\t\t\t\t\t\t" + this.include(top) + "\n\t\t\t\t\t\t\t" + this.include(face) + "\n\t\t\t\t\t\t\t" + this.include(facialHair) + "\n\t\t\t\t\t\t\t" + this.include(accessory) + "\n\t\t\t\t\t\t</g>\n\t\t\t\t  \t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</svg>").replace("%defs%", defs.join("\n"));
	},

	attrs: {
		clothe: _index2.default,
		accessory: _index4.default,
		face: _index6.default,
		facialHair: _index8.default,
		body: _body2.default,
		top: _index10.default,
		avatarStyle: ["none", "circle"]
	}
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _blazerShirt = __webpack_require__(6);

var _blazerShirt2 = _interopRequireDefault(_blazerShirt);

var _blazerSweater = __webpack_require__(7);

var _blazerSweater2 = _interopRequireDefault(_blazerSweater);

var _collarSweater = __webpack_require__(8);

var _collarSweater2 = _interopRequireDefault(_collarSweater);

var _hoodie = __webpack_require__(9);

var _hoodie2 = _interopRequireDefault(_hoodie);

var _overall = __webpack_require__(10);

var _overall2 = _interopRequireDefault(_overall);

var _shirtCrewNeck = __webpack_require__(11);

var _shirtCrewNeck2 = _interopRequireDefault(_shirtCrewNeck);

var _shirtScoopNeck = __webpack_require__(12);

var _shirtScoopNeck2 = _interopRequireDefault(_shirtScoopNeck);

var _shirtVNeck = __webpack_require__(13);

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
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M133.960472,0.294916112 C170.936473,3.32499816 200,34.2942856 200,72.0517235 L200,81 L0,81 L0,72.0517235 C1.22536245e-14,33.9525631 29.591985,2.76498122 67.0454063,0.219526408 C67.0152598,0.593114549 67,0.969227185 67,1.34762511 C67,13.2107177 81.9984609,22.8276544 100.5,22.8276544 C119.001539,22.8276544 134,13.2107177 134,1.34762511 C134,0.994669088 133.986723,0.64370138 133.960472,0.294916112 Z\"/>\n        ", "<mask id=\"" + id.mask + "\" fill=\"white\">\n            <use xlink:href=\"#" + id.path + "\"/>\n        </mask>"],
	render: function render() {
		return "\n\t        <g transform=\"translate(0.000000, 170.000000)\">\n\n\t            <g  transform=\"translate(32.000000, 29.000000)\">\n\t                <use fill=\"#E6E6E6\" xlink:href=\"#" + id.path + "\"/>\n\t                <g mask=\"url(#" + id.mask + ")\" fill=\"#262E33\">\n\t                    <g transform=\"translate(-32.000000, -29.000000)\">\n\t                        <rect x=\"0\" y=\"0\" width=\"264\" height=\"110\"/>\n\t                    </g>\n\t                </g>\n\t                <g opacity=\"0.599999964\" mask=\"url(#" + id.mask + ")\" fill-opacity=\"0.16\" fill=\"#000000\">\n\t                    <g transform=\"translate(60.000000, -25.000000)\">\n\t                        <ellipse cx=\"40.5\" cy=\"27.8476251\" rx=\"39.6351047\" ry=\"26.9138272\"/>\n\t                    </g>\n\t                </g>\n\t            </g>\n\t            <g transform=\"translate(32.000000, 28.000000)\">\n\t                <path\n\n\t                    d=\"M68.784807,1.12222847 C30.512317,2.80409739 -1.89486556e-14,34.3646437 -1.42108547e-14,73.0517235 L0,73.0517235 L0,82 L69.3616767,82 C65.9607412,69.9199941 64,55.7087296 64,40.5 C64,26.1729736 65.7399891,12.7311115 68.784807,1.12222847 Z M131.638323,82 L200,82 L200,73.0517235 C200,34.7067641 170.024954,3.36285166 132.228719,1.17384225 C135.265163,12.7709464 137,26.1942016 137,40.5 C137,55.7087296 135.039259,69.9199941 131.638323,82 Z\"\n\t                    fill=\"#3A4C5A\"/>\n\t                <path d=\"M149,58 L158.555853,50.83311 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L149,58 Z\" fill=\"#E6E6E6\"/>\n\t                <path d=\"M69,1.13686838e-13 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,1.13686838e-13 Z\" fill=\"#2F4351\"/>\n\t                <path\n\n\t                    d=\"M151,1.13686838e-13 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,1.13686838e-13 Z\"\n\t                    fill=\"#2F4351\"\n\t                    transform=\"translate(141.000000, 41.000000) scale(-1, 1) translate(-141.000000, -41.000000)\"/>\n\t            </g>\n\t        </g>\n\t    ";
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

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M105.192402,29.0517235 L104,29.0517235 L104,29.0517235 C64.235498,29.0517235 32,61.2872215 32,101.051724 L32,110 L232,110 L232,101.051724 C232,61.2872215 199.764502,29.0517235 160,29.0517235 L160,29.0517235 L158.807598,29.0517235 C158.934638,30.0353144 159,31.0364513 159,32.0517235 C159,45.8588423 146.911688,57.0517235 132,57.0517235 C117.088312,57.0517235 105,45.8588423 105,32.0517235 C105,31.0364513 105.065362,30.0353144 105.192402,29.0517235 Z\"/>\n        ", "<mask id=\"" + id.mask + "\" fill=\"white\">\n            <use xlink:href=\"#" + id.path + "\"/>\n        </mask>"],
	render: function render() {
		return "\n\t        <g transform=\"translate(0.000000, 170.000000)\">\n\t            <use fill=\"#E6E6E6\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            <g mask=\"url(#" + id.mask + ")\" fill-rule=\"evenodd\" fill=\"#262E33\">\n\t                <rect x=\"0\" y=\"0\" width=\"264\" height=\"110\"/>\n\t            </g>\n\t            <g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(32.000000, 28.000000)\">\n\t                <path\n\t                   \n\t                    d=\"M68.784807,1.12222847 C30.512317,2.80409739 1.24427139e-14,34.3646437 0,73.0517235 L0,82 L69.3616767,82 C65.9607412,69.9199941 64,55.7087296 64,40.5 C64,26.1729736 65.7399891,12.7311115 68.784807,1.12222847 Z M131.638323,82 L200,82 L200,73.0517235 C200,34.7067641 170.024954,3.36285166 132.228719,1.17384225 C135.265163,12.7709464 137,26.1942016 137,40.5 C137,55.7087296 135.039259,69.9199941 131.638323,82 Z\"\n\t                    fill=\"#3A4C5A\"/>\n\t                <path d=\"M149,58 L158.555853,50.83311 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L149,58 Z\" fill=\"#E6E6E6\"/>\n\t                <path d=\"M69,1.13686838e-13 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,1.13686838e-13 Z\" fill=\"#2F4351\"/>\n\t                <path\n\t                   \n\t                    d=\"M151,1.13686838e-13 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,1.13686838e-13 Z\"\n\t                    fill=\"#2F4351\"\n\t                    transform=\"translate(141.000000, 41.000000) scale(-1, 1) translate(-141.000000, -41.000000) \"/>\n\t            </g>\n\t            <path\n\t               \n\t                d=\"M156,21.5390062 C162.772319,26.1359565 167,32.6563196 167,39.8878801 C167,47.2887711 162.572015,53.9447688 155.520105,58.5564942 L149.57933,53.8764929 L145,54.207887 L146,51.0567821 L145.922229,50.995516 C152.022491,47.8530505 156,42.7003578 156,36.8768102 L156,21.5390062 Z M108,21.5390062 C101.227681,26.1359565 97,32.6563196 97,39.8878801 C97,47.2887711 101.427985,53.9447688 108.479895,58.5564942 L114.42067,53.8764929 L119,54.207887 L118,51.0567821 L118.077771,50.995516 C111.977509,47.8530505 108,42.7003578 108,36.8768102 L108,21.5390062 Z\"\n\t                fill=\"#F2F2F2\"\n\t                fill-rule=\"evenodd\"/>\n\t        </g>\n\t    ";
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

var _makeColor = __webpack_require__(2);

var _makeColor2 = _interopRequireDefault(_makeColor);

var _colors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M105.192402,29.0517235 L104,29.0517235 L104,29.0517235 C64.235498,29.0517235 32,61.2872215 32,101.051724 L32,110 L232,110 L232,101.051724 C232,61.2872215 199.764502,29.0517235 160,29.0517235 L160,29.0517235 L158.807598,29.0517235 C158.934638,30.0353144 159,31.0364513 159,32.0517235 C159,45.8588423 146.911688,57.0517235 132,57.0517235 C117.088312,57.0517235 105,45.8588423 105,32.0517235 C105,31.0364513 105.065362,30.0353144 105.192402,29.0517235 Z\"/>\n        "],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g transform=\"translate(0.000000, 170.000000)\">\n\t            <use fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            <path\n\t                d=\"M156,22.2794906 C162.181647,26.8351858 166,33.1057265 166,40.027915 C166,47.2334941 161.862605,53.7329769 155.228997,58.3271669 L149.57933,53.8764929 L145,54.207887 L146,51.0567821 L145.922229,50.995516 C152.022491,47.8530505 156,42.7003578 156,36.8768102 L156,22.2794906 Z M108,21.5714994 C101.232748,26.1740081 97,32.7397769 97,40.027915 C97,47.4261549 101.361602,54.080035 108.308428,58.6915723 L114.42067,53.8764929 L119,54.207887 L118,51.0567821 L118.077771,50.995516 C111.977509,47.8530505 108,42.7003578 108,36.8768102 L108,21.5714994 Z\"\n\t                fill=\"#F2F2F2\"\n\t                fill-rule=\"evenodd\"/>\n\t        </g>\n\t    ";
	},

	attrs: { "color": _colors.fabricColors }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _makeColor = __webpack_require__(2);

var _makeColor2 = _interopRequireDefault(_makeColor);

var _colors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M108,13.0708856 C90.0813006,15.075938 76.2798424,20.5518341 76.004203,34.6449676 C50.1464329,45.5680933 32,71.1646257 32,100.999485 L32,100.999485 L32,110 L232,110 L232,100.999485 C232,71.1646257 213.853567,45.5680933 187.995797,34.6449832 C187.720158,20.5518341 173.918699,15.075938 156,13.0708856 L156,32 L156,32 C156,45.254834 145.254834,56 132,56 L132,56 C118.745166,56 108,45.254834 108,32 L108,13.0708856 Z\"/>\n        ", "<mask id=\"" + id.mask + "\" fill=\"white\">\n            <use xlink:href=\"#" + id.path + "\"/>\n        </mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g transform=\"translate(0.000000, 170.000000)\">\n\t            <use fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            <path\n\t                \n\t                d=\"M102,61.7390531 L102,110 L95,110 L95,58.1502625 C97.2037542,59.4600576 99.5467694,60.6607878 102,61.7390531 Z M169,58.1502625 L169,98.5 C169,100.432997 167.432997,102 165.5,102 C163.567003,102 162,100.432997 162,98.5 L162,61.7390531 C164.453231,60.6607878 166.796246,59.4600576 169,58.1502625 Z\"\n\t                fill=\"#F4F4F4\"\n\t                fill-rule=\"evenodd\"\n\t                mask=\"url(#" + id.mask + ")\"/>\n\t            <path\n\n\t                d=\"M90.9601329,12.7243537 C75.9093095,15.5711782 65.5,21.2428847 65.5,32.3076923 C65.5,52.0200095 98.5376807,68 132,68 C165.462319,68 198.5,52.0200095 198.5,32.3076923 C198.5,21.2428847 188.09069,15.5711782 173.039867,12.7243537 C182.124921,16.0744598 188,21.7060546 188,31.0769231 C188,51.4689754 160.178795,68 132,68 C103.821205,68 76,51.4689754 76,31.0769231 C76,21.7060546 81.8750795,16.0744598 90.9601329,12.7243537 Z\"\n\t                fill-opacity=\"0.16\"\n\t                fill=\"#000000\"\n\t                fill-rule=\"evenodd\"\n\t                mask=\"url(#" + id.mask + ")\"/>\n\t        </g>\n\t    ";
	},

	attrs: { "color": _colors.fabricColors }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _makeColor = __webpack_require__(2);

var _makeColor2 = _interopRequireDefault(_makeColor);

var _colors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g transform=\"translate(0.000000, 170.000000)\">\n\t            <use fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            <circle fill=\"#F4F4F4\" fill-rule=\"evenodd\" cx=\"81\" cy=\"83\" r=\"5\"/>\n\t            <circle fill=\"#F4F4F4\" fill-rule=\"evenodd\" cx=\"183\" cy=\"83\" r=\"5\"/>\n\t        </g>\n\t    ";
	},

	attrs: { "color": _colors.fabricColors }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _makeColor = __webpack_require__(2);

var _makeColor2 = _interopRequireDefault(_makeColor);

var _colors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-"),
	mask: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M165.960472,29.2949161 C202.936473,32.3249982 232,63.2942856 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.9525631 61.591985,31.7649812 99.0454063,29.2195264 C99.0152598,29.5931145 99,29.9692272 99,30.3476251 C99,42.2107177 113.998461,51.8276544 132.5,51.8276544 C151.001539,51.8276544 166,42.2107177 166,30.3476251 C166,29.9946691 165.986723,29.6437014 165.960472,29.2949161 Z\"/>\n        ", "<mask id=\"" + id.mask + "\" fill=\"white\">\n            <use xlink:href=\"#" + id.path + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g transform=\"translate(0.000000, 170.000000)\">\n\t            <use fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t            <g opacity=\"0.599999964\" stroke-width=\"1\" fill-rule=\"evenodd\" mask=\"url(#" + id.mask + ")\" fill-opacity=\"0.16\" fill=\"#000000\">\n\t                <g transform=\"translate(92.000000, 4.000000)\">\n\t                    <ellipse cx=\"40.5\" cy=\"27.8476251\" rx=\"39.6351047\" ry=\"26.9138272\"/>\n\t                </g>\n\t            </g>\n\t        </g>\n\t    ";
	},

	attrs: { "color": _colors.fabricColors }
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _makeColor = __webpack_require__(2);

var _makeColor2 = _interopRequireDefault(_makeColor);

var _colors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M181.544255,32.3304167 C210.784209,41.4878872 232,68.7921987 232,101.051724 L232,110 L32,110 L32,101.051724 C32,68.3969699 53.7388273,40.8195914 83.5340368,32.0020332 C83.182234,33.4201865 83,34.8712315 83,36.3476251 C83,52.6289957 105.161905,65.8276544 132.5,65.8276544 C159.838095,65.8276544 182,52.6289957 182,36.3476251 C182,34.9849859 181.844766,33.6439396 181.544255,32.3304167 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g transform=\"translate(0.000000, 170.000000)\">\n\t            <use fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t        </g>\n\t    ";
	},

	attrs: { "color": _colors.fabricColors }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _makeColor = __webpack_require__(2);

var _makeColor2 = _interopRequireDefault(_makeColor);

var _colors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n            id=\"" + id.path + "\"\n            d=\"M171.319631,29.9364358 C205.706337,35.3665707 232,65.13854 232,101.051724 L232,110 L32,110 L32,101.051724 C32,65.1380521 58.2943778,35.3657617 92.6817711,29.9362145 C93.5835973,35.0053598 96.116393,39.8238432 100.236125,43.5389794 L100.236125,43.5389794 L129.321203,69.7676333 C130.843316,71.1402598 133.156684,71.1402598 134.678797,69.7676333 L134.678797,69.7676333 L163.763875,43.5389794 C164.189462,43.1551884 164.601167,42.7562772 164.998197,42.3430127 C168.414164,38.7873666 170.517305,34.4520434 171.319628,29.9364354 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t        <g transform=\"translate(0.000000, 170.000000)\">\n\t            <use fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t        </g>\n\t    ";
	},

	attrs: { "color": _colors.fabricColors }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _blank = __webpack_require__(15);

var _blank2 = _interopRequireDefault(_blank);

var _eyepatch = __webpack_require__(16);

var _eyepatch2 = _interopRequireDefault(_eyepatch);

var _kurt = __webpack_require__(17);

var _kurt2 = _interopRequireDefault(_kurt);

var _prescription = __webpack_require__(18);

var _prescription2 = _interopRequireDefault(_prescription);

var _prescription3 = __webpack_require__(19);

var _prescription4 = _interopRequireDefault(_prescription3);

var _round = __webpack_require__(20);

var _round2 = _interopRequireDefault(_round);

var _sunglasses = __webpack_require__(21);

var _sunglasses2 = _interopRequireDefault(_sunglasses);

var _wayfarers = __webpack_require__(22);

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
/* 15 */
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
/* 16 */
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
		return "\n\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t<g mask=\"url(#" + id.mask + ")\">\n\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t<path\n\t\t\t\t\t\t\n\t\t\t\t\t\tfill=\"#28354B\"\n\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\td=\"M160.395307,39.7810237 C157.318088,36.6927979 154.11865,43.6386608 152.623361,45.4281124 C149.013122,49.7486528 145.540256,54.182935 141.868413,58.4518947 C134.616309,66.8823544 127.439316,75.3743141 120.233991,83.8401528 C119.140279,85.1257012 119.27271,85.2649028 117.837048,85.3885641 C116.88598,85.4708947 115.563312,84.9802173 114.5737,84.9256608 C111.823607,84.774556 109.112057,85.2348141 106.435756,85.8227012 C101.091389,86.9961608 95.4264863,88.9291124 90.7890799,91.898306 C89.5718308,92.677306 88.7874545,93.5971608 87.4670933,93.841177 C86.3183659,94.0534512 84.794416,93.6295641 83.622299,93.5194592 C81.5412806,93.3237173 78.5378542,92.4726366 76.4953793,92.9137173 C73.9027538,93.4738302 72.9174244,96.6109915 75.5604528,98.0003624 C77.570314,99.0564431 81.5706,98.4761608 83.8235816,98.6447899 C86.3971,98.8372253 85.6120649,98.704306 85.2473843,101.164306 C84.7239177,104.69758 85.5985582,108.646475 87.0885766,111.878201 C90.5482655,119.383185 100.122861,127.335201 108.8551,126.603153 C116.142123,125.992451 122.526834,119.413274 125.519389,113.099935 C127.050916,109.868871 127.954546,106.192096 128.250376,102.628403 C128.438811,100.36183 128.333722,97.9580399 127.684083,95.7632173 C127.362888,94.6783705 126.853916,93.5554995 126.308378,92.5695157 C125.866281,91.7710076 123.908799,89.9203866 123.788886,89.1165882 C123.556307,87.5602415 127.973324,83.3874995 128.816339,82.3443141 C132.788953,77.4276205 136.780344,72.5320882 140.721662,67.5889431 C144.603353,62.7201931 148.506456,57.8640076 152.489612,53.0785802 C154.294237,50.9098786 163.318023,42.7148382 160.395307,39.7810237\"\n\t\t\t\t\t\t/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>";
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

var _colors = __webpack_require__(1);

var id = {
	filter: (0, _common.uid)("filter-")
};

exports.default = new _common.AvatarPart({
	defs: ["<filter x=\"-0.8%\" y=\"-2.0%\" width=\"101.5%\" height=\"108.0%\" filterUnits=\"objectBoundingBox\" id=\"" + id.filter + "\">\n\t\t\t<feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/>\n\t\t\t<feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0\" type=\"matrix\" in=\"shadowOffsetOuter1\" result=\"shadowMatrixOuter1\"/>\n\t\t\t<feMerge>\n\t\t\t\t<feMergeNode in=\"shadowMatrixOuter1\"/>\n\t\t\t\t<feMergeNode in=\"SourceGraphic\"/>\n\t\t\t</feMerge>\n\t\t</filter>"],
	render: function render(_ref) {
		var _ref$color = _ref.color,
		    color = _ref$color === undefined ? _colors.fabricColors.white : _ref$color;

		return "\n\t\t\t<g fill=\"none\" transform=\"translate(62.000000, 85.000000)\" stroke-width=\"1\">\n\t\t\t\t<g filter=\"url(#" + id.filter + ")\" transform=\"translate(5.000000, 2.000000)\">\n\t\t\t\t\t<path\n\t\t\t\t\t\tfill=\"" + color + "\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\td=\"M66,11.1111111 C54.9625586,11.1111111 53.3705645,2.0266011 30.6705882,0.740740741 C7.98552275,-0.283199952 0.815225204,6.4494855 0.776470588,11.1111111 C0.813236892,15.4042795 -0.352293566,26.5612661 14.3647059,39.6296296 C29.1367705,55.1420807 44.2704162,49.8818301 49.6941176,44.8148148 C55.1352081,42.4731118 61.3403442,21.4596351 66,21.4814815 C70.6596558,21.5033279 76.8647919,42.4731118 82.3058824,44.8148148 C87.7295838,49.8818301 102.86323,55.1420807 117.635294,39.6296296 C132.352294,26.5612661 131.186763,15.4042795 131.223529,11.1111111 C131.184775,6.4494855 124.014477,-0.283199952 101.329412,0.740740741 C78.6294355,2.0266011 77.0374414,11.1111111 66,11.1111111 Z\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\tfill=\"#2F383B\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\td=\"M55.1294118,21.4814815 C55.5103632,13.8233491 42.2156493,5.64243259 27.9529412,5.92592593 C13.6973442,6.22450879 11.8417942,15.3786982 11.6470588,18.8888889 C11.2982286,27.0220633 20.014463,45.3037598 36.1058824,44.8148148 C52.1972736,44.305848 54.9092435,26.5344305 55.1294118,21.4814815 Z\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\tfill=\"#2F383B\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\td=\"M120.352941,21.4814815 C120.733893,13.8233491 107.439179,5.64243259 93.1764706,5.92592593 C78.9208736,6.22450879 77.0653236,15.3786982 76.8705882,18.8888889 C76.521758,27.0220633 85.2379924,45.3037598 101.329412,44.8148148 C117.420803,44.305848 120.132773,26.5344305 120.352941,21.4814815 Z\"\n\t\t\t\t\t\ttransform=\"translate(98.611765, 25.370370) scale(-1, 1) translate(-98.611765, -25.370370) \"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.fabricColors
	}
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
	defs: ["<filter x=\"-0.8%\" y=\"-2.4%\" width=\"101.5%\" height=\"109.8%\" filterUnits=\"objectBoundingBox\" id=\"" + id.filter + "\">\n\t\t\t<feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/>\n\t\t\t<feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0\" type=\"matrix\" in=\"shadowOffsetOuter1\" result=\"shadowMatrixOuter1\"/>\n\t\t\t<feMerge>\n\t\t\t\t<feMergeNode in=\"shadowMatrixOuter1\"/>\n\t\t\t\t<feMergeNode in=\"SourceGraphic\"/>\n\t\t\t</feMerge>\n\t\t</filter>"],
	render: function render() {
		return "\n\t\t\t<g fill=\"none\" transform=\"translate(62.000000, 85.000000)\" stroke-width=\"1\">\n\t\t\t\t<g filter=\"url(#" + id.filter + ")\" transform=\"translate(8.000000, 8.000000)\" fill=\"#D6EAF2\">\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M46.2491397,7.27516667 C48.6207695,7.2975 49.7419096,7.69183333 50.1459601,10.1651667 C50.5553446,12.6705 50.1572949,15.4871667 49.6852359,17.9548333 C48.9648125,21.7228333 47.7666627,25.4145 44.9776475,28.1685 C43.5084639,29.6188333 41.7165732,30.7748333 39.8106684,31.5641667 C38.7985419,31.9835 37.7297416,32.2861667 36.6612747,32.5158333 C36.3489024,32.5828333 33.6822357,32.9501667 35.3177735,32.7635 C31.5009631,33.1991667 27.3601122,33.1818333 24.1723805,30.7525 C20.6396056,28.0601667 18.2203032,23.7998333 17.1565036,19.5561667 C16.5340925,17.0731667 15.2262624,11.1345 17.6158944,9.14916667 C20.3532365,6.8745 46.2491397,7.27516667 46.2491397,7.27516667 L46.2491397,7.27516667 Z M22.2178029,0.4905 C16.7774562,0.677833333 13.1466691,1.63383333 10.4633337,7.06916667 C5.54571911,17.0301667 13.9627711,31.9688333 23.352278,36.0395 C34.3293166,40.7991667 46.5921826,35.5318333 52.3955746,26.0058333 C55.4689587,20.9621667 57.0224862,13.3231667 56.9224737,7.50383333 C56.7951245,0.0765 51.6071427,-0.1295 45.5090472,0.0338333333 L22.2178029,0.4905 Z\"\n\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M79.6805515,7.27256667 C77.3089217,7.29523333 76.1877816,7.68923333 75.7837311,10.1625667 C75.3743466,12.6679 75.7723963,15.4845667 76.244122,17.9522333 C76.9648787,21.7202333 78.1630285,25.4119 80.9520437,28.1659 C82.4212273,29.6162333 84.213118,30.7722333 86.1190228,31.5619 C87.1311493,31.9809 88.1999496,32.2835667 89.2684165,32.5132333 C89.5807888,32.5802333 92.2471221,32.9479 90.6119177,32.7609 C94.4287281,33.1965667 98.569579,33.1792333 101.757311,30.7499 C105.290086,28.0575667 107.709388,23.7975667 108.773188,19.5539 C109.395599,17.0705667 110.703095,11.1322333 108.313797,9.14656667 C105.576455,6.8719 79.6805515,7.27256667 79.6805515,7.27256667 L79.6805515,7.27256667 Z M103.711555,0.4879 C109.152235,0.675233333 112.783022,1.63156667 115.466357,7.06656667 C120.383639,17.0275667 111.96692,31.9662333 102.577413,36.0372333 C91.6003746,40.7965667 79.3375086,35.5292333 73.5337832,26.0035667 C70.4607325,20.9595667 68.907205,13.3205667 69.0068841,7.50123333 C69.1345667,0.0739 74.3225485,-0.1321 80.420644,0.0315666667 L103.711555,0.4879 Z\"\n\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M13.1969483,4.9267 C9.78501392,5.11836667 5.88606327,5.16436667 2.69005822,6.63936667 C-0.69461078,8.20136667 -1.2176675,11.7387 3.04920921,12.2260333 C4.97094906,12.4457 6.89488267,12.0827 8.78716336,11.7450333 C10.336903,11.4683667 12.4419791,11.5580333 13.9064752,10.9657 C16.6355213,9.86236667 16.4603333,4.74003333 13.1969483,4.9267\"\n\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M112.73467,4.9267 C116.146606,5.11836667 120.045559,5.16436667 123.241565,6.63936667 C126.626236,8.20136667 127.149293,11.7387 122.882414,12.2260333 C120.960673,12.4457 119.036739,12.0827 117.144457,11.7450333 C115.594717,11.4683667 113.489639,11.5580333 112.025143,10.9657 C109.295782,9.86236667 109.471283,4.74003333 112.73467,4.9267\"\n\t\t\t\t\t/>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M73.1094302,7.01263333 C71.1631869,4.71263333 66.0912197,3.38463333 62.8914864,3.38463333 C59.6914198,3.38463333 54.7681378,4.71263333 52.8222279,7.01263333 C51.8407719,8.1723 51.8074344,9.72396667 53.5083137,10.4509667 C55.6262451,11.3566333 57.5174814,9.7143 59.2126933,8.8553 C61.3809643,7.75663333 64.7120473,7.8773 66.7189648,8.8553 C68.4271783,9.68796667 70.3050797,11.3566333 72.4233444,10.4509667 C74.1242237,9.72396667 74.0908862,8.1723 73.1094302,7.01263333\"\n\t\t\t\t\t/>\n\t\t\t\t</g>\n\t\t\t</g>\n\n\t\t";
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
		return "\n\t\t\t<g fill=\"none\" transform=\"translate(62.000000, 85.000000)\" stroke-width=\"1\">\n\t\t\t\t<g filter=\"url(#" + id.filter + ")\" transform=\"translate(6.000000, 7.000000)\" fill=\"#252C2F\">\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M34,41 L31.2421498,41 C17.3147125,41 9,33.3359286 9,20.5 C9,10.127 10.8170058,0 32.5299306,0 L35.4700694,0 C57.1829942,0 59,10.127 59,20.5 C59,32.5686429 48.7212748,41 34,41 Z M32.3853606,6 C13,6 13,12.8410159 13,21.5015498 C13,28.5719428 16.116254,37 30.9709365,37 L34,37 C46.3649085,37 55,30.6270373 55,21.5015498 C55,12.8410159 55,6 35.6146394,6 L32.3853606,6 Z\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"/>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M96,41 L93.2421498,41 C79.3147125,41 71,33.3359286 71,20.5 C71,10.127 72.8170058,0 94.5299306,0 L97.4700694,0 C119.182994,0 121,10.127 121,20.5 C121,32.5686429 110.721275,41 96,41 Z M94.3853606,6 C75,6 75,12.8410159 75,21.5015498 C75,28.5719428 78.1194833,37 92.9709365,37 L96,37 C108.364909,37 117,30.6270373 117,21.5015498 C117,12.8410159 117,6 97.6146394,6 L94.3853606,6 Z\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"/>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M2.95454545,5.77156439 C3.64590909,5.09629136 11.2095455,0 32.5,0 C50.3513636,0 54.1302273,1.85267217 59.8502273,4.6518809 L60.2689233,4.85850899 C60.6666014,4.99901896 62.7002447,5.68982981 65.0790606,5.76579519 C67.2462948,5.67278567 69.1000195,5.08540191 69.641698,4.89719767 C76.1703915,1.7220864 82.5610971,0 97.5,0 C118.790455,0 126.354091,5.09629136 127.045455,5.77156439 C128.679318,5.77156439 130,7.06150904 130,8.65734659 L130,11.5431288 C130,13.1389663 128.679318,14.428911 127.045455,14.428911 C127.045455,14.428911 120.143997,14.428911 120.143997,17.3146932 C120.143997,20.2004754 118.181818,13.1389663 118.181818,11.5431288 L118.181818,8.73240251 C114.578575,7.35340151 108.128411,4.78617535 97.5,4.78617535 C85.6584651,4.78617535 79.7610984,6.88602813 74.7022935,8.97112368 L74.7588636,9.10752861 L74.7563667,11.0937608 L72.5391666,16.4436339 L69.8004908,15.3608351 C69.5558969,15.2641292 69.0281396,15.090392 68.2963505,14.9099044 C66.256272,14.4067419 64.1589087,14.253569 62.3040836,14.6343084 C61.6235903,14.7739931 60.9922286,14.9836085 60.4128127,15.266732 L57.7704824,16.5578701 L55.1266751,11.3962031 L55.2440909,9.10175705 L55.3248203,8.90683855 C50.9620526,6.87386374 46.9392639,4.78617535 32.5,4.78617535 C21.8721459,4.78617535 15.422131,7.3524397 11.8181818,8.7314671 L11.8181818,11.5431288 C11.8181818,13.1389663 8.86363636,20.2004754 8.86363636,17.3146932 C8.86363636,14.428911 2.95454545,14.428911 2.95454545,14.428911 C1.32363636,14.428911 0,13.1389663 0,11.5431288 L0,8.65734659 C0,7.06150904 1.32363636,5.77156439 2.95454545,5.77156439 Z\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\n\t\t";
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
	path: (0, _common.uid)("path-"),
	filter: (0, _common.uid)("filter-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path + "\"\n\t\t\td=\"M80.4646192,16.3941179 C84.3801509,8.45869677 92.552602,3 102,3 C110.919691,3 118.702887,7.86591082 122.839921,15.0880638 C123.050197,15.0306504 123.271519,15 123.5,15 L131.5,15 C132.880712,15 134,16.1192881 134,17.5 C134,18.8807119 132.880712,20 131.5,20 L124.963126,20 C125.637355,22.2145921 126,24.5649459 126,27 C126,40.254834 115.254834,51 102,51 C88.745166,51 78,40.254834 78,27 C78,25.5781066 78.1236513,24.1850936 78.3607874,22.8311273 C78.2762458,18.4553035 74.9135957,15 70.8624171,15 C67.1256697,15 63.9747186,17.9397535 63.4417635,21.8300629 C63.8073299,23.4951922 64,25.2250958 64,27 C64,40.254834 53.254834,51 40,51 C26.745166,51 16,40.254834 16,27 C16,24.5649459 16.3626451,22.2145921 17.0368738,20 L10.5,20 C9.11928813,20 8,18.8807119 8,17.5 C8,16.1192881 9.11928813,15 10.5,15 L10.5,15 L18.5,15 C18.728481,15 18.9498033,15.0306504 19.1600793,15.0880638 C23.2971127,7.86591082 31.0803092,3 40,3 C49.3521568,3 57.4549431,8.34919095 61.415666,16.15488 C63.4929212,13.0392725 66.9494432,11 70.8624171,11 C74.8746823,11 78.4070368,13.1440781 80.4646192,16.3941179 Z M40,47 C51.045695,47 60,38.045695 60,27 C60,15.954305 51.045695,7 40,7 C28.954305,7 20,15.954305 20,27 C20,38.045695 28.954305,47 40,47 Z M102,47 C113.045695,47 122,38.045695 122,27 C122,15.954305 113.045695,7 102,7 C90.954305,7 82,15.954305 82,27 C82,38.045695 90.954305,47 102,47 Z\"\n\t\t\t/>", "<filter x=\"-0.8%\" y=\"-2.1%\" width=\"101.6%\" height=\"108.3%\" filterUnits=\"objectBoundingBox\" id=\"" + id.filter + "\">\n\t\t\t<feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/>\n\t\t\t<feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0\" type=\"matrix\" in=\"shadowOffsetOuter1\"/>\n\t\t</filter>"],
	render: function render() {
		return "\n\t\t\t<g fill=\"none\" transform=\"translate(62.000000, 85.000000)\">\n\t\t\t\t<g>\n\t\t\t\t\t<use fill=\"black\" fill-opacity=\"1\" filter=\"url(#" + id.filter + "\" xlink:href=\"#" + id.path + "\"/>\n\t\t\t\t\t<use fill=\"#252C2F\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
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
	path1: (0, _common.uid)("path-"),
	path2: (0, _common.uid)("path-"),
	filter: (0, _common.uid)("filter-"),
	linearGradient1: (0, _common.uid)("linear-gradient-"),
	linearGradient2: (0, _common.uid)("linear-gradient-")
};

exports.default = new _common.AvatarPart({
	defs: ["<filter id=\"" + id.filter + "\" x=\"-0.8%\" y=\"-2.6%\" width=\"101.6%\" height=\"110.5%\" filterUnits=\"objectBoundingBox\">\n\t\t\t<feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/>\n\t\t\t<feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0\" type=\"matrix\" in=\"shadowOffsetOuter1\" result=\"shadowMatrixOuter1\"/>\n\t\t\t<feMerge>\n\t\t\t\t<feMergeNode in=\"shadowMatrixOuter1\"/>\n\t\t\t\t<feMergeNode in=\"SourceGraphic\"/>\n\t\t\t</feMerge>\n\t\t</filter>", "<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M47.0104611,6.27728008 C49.5212682,6.30134922 50.7082016,6.72633117 51.1359635,9.39189846 C51.5693724,12.0919529 51.1479634,15.1275382 50.648202,17.7869984 C49.8855011,21.8478573 48.6170388,25.8264499 45.6643523,28.794498 C44.1089507,30.3575551 42.2119044,31.6034024 40.1941529,32.4540848 C39.1226305,32.9060098 37.9911085,33.2322006 36.8599395,33.4797175 C36.5292357,33.5519249 33.7060778,33.9478084 35.4375958,33.7466335 C31.3967988,34.2161613 27.0129452,34.1974808 23.6381438,31.5793333 C19.8980507,28.6777448 17.3367734,24.0862872 16.2105455,19.5127916 C15.5516086,16.8368063 14.1670294,10.4365709 16.6968952,8.29693227 C19.5948762,5.84547255 47.0104611,6.27728008 47.0104611,6.27728008 L47.0104611,6.27728008 Z\"\n\t\t\t/>", "<path\n\t\t\tid=\"" + id.path2 + "\"\n\t\t\td=\"M78.9192315,6.27468008 C76.4084239,6.29910846 75.2214902,6.72373117 74.7937283,9.38929846 C74.3603192,12.0893529 74.7817283,15.1249382 75.2811369,17.7843984 C76.0441909,21.8452573 77.3126534,25.8238499 80.2653406,28.791898 C81.8207425,30.3549551 83.7177893,31.6008024 85.7355412,32.4518441 C86.8070638,32.9034098 87.938586,33.2296006 89.0697553,33.4771175 C89.4004591,33.5493249 92.2232647,33.9455676 90.4920992,33.7440335 C94.5328971,34.2135613 98.9167517,34.1948808 102.291554,31.5767333 C106.031648,28.6751448 108.592926,24.0840464 109.719154,19.5105508 C110.378091,16.8342063 111.762317,10.4343302 109.232804,8.29433227 C106.334822,5.84287255 78.9192315,6.27468008 78.9192315,6.27468008 L78.9192315,6.27468008 Z\"\n\t\t\t/>", "<linearGradient id=\"" + id.linearGradient1 + "\" x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"70.5058195%\">\n\t\t\t<stop stopColor=\"#FFFFFF\" stopOpacity=\"0.5\" offset=\"0%\"/>\n\t\t\t<stop stopColor=\"#000000\" stopOpacity=\"0.5\" offset=\"100%\"/>\n\t\t</linearGradient>", "<linearGradient id=\"" + id.linearGradient2 + "\" x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" >\n\t\t\t<stop stopColor=\"#FFFFFF\" stopOpacity=\"0.5\" offset=\"0%\"/>\n\t\t\t<stop stopColor=\"#000000\" stopOpacity=\"0.5\" offset=\"70.5058195%\"/>\n\t\t</linearGradient>"],
	render: function render() {
		return "\n\t\t\t<g fill=\"none\" transform=\"translate(62.000000, 85.000000)\" stroke-width=\"1\">\n\t\t\t\t<g filter=\"url(#" + id.filter + ")\" transform=\"translate(8.000000, 8.000000)\">\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<use fill-opacity=\"0.700000048\" fill=\"#000000\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t<use fill=\"url(#" + id.linearGradient1 + ")\" style=\"mixBlendMode: screen;\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<use fill-opacity=\"0.700000048\" fill=\"#000000\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t\t<use fill=\"url(#" + id.linearGradient2 + ")\" style=\"mixBlendMode: screen;\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g fill=\"#252C2F\">\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\td=\"M46.2491397,7.27516667 C48.6207695,7.2975 49.7419096,7.69183333 50.1459601,10.1651667 C50.5553446,12.6705 50.1572949,15.4871667 49.6852359,17.9548333 C48.9648125,21.7228333 47.7666627,25.4145 44.9776475,28.1685 C43.5084639,29.6188333 41.7165732,30.7748333 39.8106684,31.5641667 C38.7985419,31.9835 37.7297416,32.2861667 36.6612747,32.5158333 C36.3489024,32.5828333 33.6822357,32.9501667 35.3177735,32.7635 C31.5009631,33.1991667 27.3601122,33.1818333 24.1723805,30.7525 C20.6396056,28.0601667 18.2203032,23.7998333 17.1565036,19.5561667 C16.5340925,17.0731667 15.2262624,11.1345 17.6158944,9.14916667 C20.3532365,6.8745 46.2491397,7.27516667 46.2491397,7.27516667 L46.2491397,7.27516667 Z M22.2178029,0.4905 C16.7774562,0.677833333 13.1466691,1.63383333 10.4633337,7.06916667 C5.54571911,17.0301667 13.9627711,31.9688333 23.352278,36.0395 C34.3293166,40.7991667 46.5921826,35.5318333 52.3955746,26.0058333 C55.4689587,20.9621667 57.0224862,13.3231667 56.9224737,7.50383333 C56.7951245,0.0765 51.6071427,-0.1295 45.5090472,0.0338333333 L22.2178029,0.4905 Z\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\td=\"M79.6805515,7.27256667 C77.3089217,7.29523333 76.1877816,7.68923333 75.7837311,10.1625667 C75.3743466,12.6679 75.7723963,15.4845667 76.244122,17.9522333 C76.9648787,21.7202333 78.1630285,25.4119 80.9520437,28.1659 C82.4212273,29.6162333 84.213118,30.7722333 86.1190228,31.5619 C87.1311493,31.9809 88.1999496,32.2835667 89.2684165,32.5132333 C89.5807888,32.5802333 92.2471221,32.9479 90.6119177,32.7609 C94.4287281,33.1965667 98.569579,33.1792333 101.757311,30.7499 C105.290086,28.0575667 107.709388,23.7975667 108.773188,19.5539 C109.395599,17.0705667 110.703095,11.1322333 108.313797,9.14656667 C105.576455,6.8719 79.6805515,7.27256667 79.6805515,7.27256667 L79.6805515,7.27256667 Z M103.711555,0.4879 C109.152235,0.675233333 112.783022,1.63156667 115.466357,7.06656667 C120.383639,17.0275667 111.96692,31.9662333 102.577413,36.0372333 C91.6003746,40.7965667 79.3375086,35.5292333 73.5337832,26.0035667 C70.4607325,20.9595667 68.907205,13.3205667 69.0068841,7.50123333 C69.1345667,0.0739 74.3225485,-0.1321 80.420644,0.0315666667 L103.711555,0.4879 Z\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\td=\"M13.1969483,4.9267 C9.78501392,5.11836667 5.88606327,5.16436667 2.69005822,6.63936667 C-0.69461078,8.20136667 -1.2176675,11.7387 3.04920921,12.2260333 C4.97094906,12.4457 6.89488267,12.0827 8.78716336,11.7450333 C10.336903,11.4683667 12.4419791,11.5580333 13.9064752,10.9657 C16.6355213,9.86236667 16.4603333,4.74003333 13.1969483,4.9267\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\td=\"M112.73467,4.9267 C116.146606,5.11836667 120.045559,5.16436667 123.241565,6.63936667 C126.626236,8.20136667 127.149293,11.7387 122.882414,12.2260333 C120.960673,12.4457 119.036739,12.0827 117.144457,11.7450333 C115.594717,11.4683667 113.489639,11.5580333 112.025143,10.9657 C109.295782,9.86236667 109.471283,4.74003333 112.73467,4.9267\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\td=\"M73.1094302,7.01263333 C71.1631869,4.71263333 66.0912197,3.38463333 62.8914864,3.38463333 C59.6914198,3.38463333 54.7681378,4.71263333 52.8222279,7.01263333 C51.8407719,8.1723 51.8074344,9.72396667 53.5083137,10.4509667 C55.6262451,11.3566333 57.5174814,9.7143 59.2126933,8.8553 C61.3809643,7.75663333 64.7120473,7.8773 66.7189648,8.8553 C68.4271783,9.68796667 70.3050797,11.3566333 72.4233444,10.4509667 C74.1242237,9.72396667 74.0908862,8.1723 73.1094302,7.01263333\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _index = __webpack_require__(24);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(38);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(51);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(64);

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _common.AvatarPart({
	render: function render(_ref) {
		var eyebrow = _ref.eyebrow,
		    eyes = _ref.eyes,
		    mouth = _ref.mouth,
		    nose = _ref.nose;

		return "\n\t\t<g class=\"face\" transform=\"translate(76.000000, 82.000000)\" fill=\"#000000\">\n\t\t\t" + this.include(eyebrow) + "\n\t\t\t" + this.include(eyes) + "\n\t\t\t" + this.include(mouth) + "\n\t\t\t" + this.include(nose) + "\n\t\t</g>\n\t\t";
	},

	attrs: {
		eyebrow: _index2.default,
		eyes: _index4.default,
		mouth: _index6.default,
		nose: _index8.default
	}
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _angryNatural = __webpack_require__(25);

var _angryNatural2 = _interopRequireDefault(_angryNatural);

var _angry = __webpack_require__(26);

var _angry2 = _interopRequireDefault(_angry);

var _basicNatural = __webpack_require__(27);

var _basicNatural2 = _interopRequireDefault(_basicNatural);

var _basic = __webpack_require__(28);

var _basic2 = _interopRequireDefault(_basic);

var _flatNatural = __webpack_require__(29);

var _flatNatural2 = _interopRequireDefault(_flatNatural);

var _frownNatural = __webpack_require__(30);

var _frownNatural2 = _interopRequireDefault(_frownNatural);

var _raisedExcitedNatural = __webpack_require__(31);

var _raisedExcitedNatural2 = _interopRequireDefault(_raisedExcitedNatural);

var _raisedExcited = __webpack_require__(32);

var _raisedExcited2 = _interopRequireDefault(_raisedExcited);

var _sadConcernedNatural = __webpack_require__(33);

var _sadConcernedNatural2 = _interopRequireDefault(_sadConcernedNatural);

var _sadConcerned = __webpack_require__(34);

var _sadConcerned2 = _interopRequireDefault(_sadConcerned);

var _unibrowNatural = __webpack_require__(35);

var _unibrowNatural2 = _interopRequireDefault(_unibrowNatural);

var _upDownNatural = __webpack_require__(36);

var _upDownNatural2 = _interopRequireDefault(_upDownNatural);

var _upDown = __webpack_require__(37);

var _upDown2 = _interopRequireDefault(_upDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	angryNatural: _angryNatural2.default,
	angry: _angry2.default,
	basicNatural: _basicNatural2.default,
	basic: _basic2.default,
	flatNatural: _flatNatural2.default,
	frownNatural: _frownNatural2.default,
	raisedExcitedNatural: _raisedExcitedNatural2.default,
	raisedExcited: _raisedExcited2.default,
	sadConcernedNatural: _sadConcernedNatural2.default,
	sadConcerned: _sadConcerned2.default,
	unibrowNatural: _unibrowNatural2.default,
	upDownNatural: _upDownNatural2.default,
	upDown: _upDown2.default
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g fill-opacity=\"0.599999964\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M44.8565785,12.2282877 C44.8578785,12.2192877 44.8578785,12.2192877 44.8565785,12.2282877 M17.5862288,7.89238094 C15.2441598,8.3302947 13.0866155,9.78806858 12.1523766,12.0987479 C11.8009169,12.967391 11.3917103,14.9243181 11.7083227,15.8073302 C11.8284629,16.14295 12.0332321,16.1008692 12.9555234,16.0430509 C14.643791,15.9369937 16.9330912,13.6622369 18.7484684,13.2557982 C21.2753939,12.6899315 23.9825295,13.1148447 26.4961798,13.6882381 C30.8109365,14.6725177 36.4854008,17.7875215 40.9461842,16.1699775 C41.2783949,16.0495512 45.6210294,12.9225732 44.3685187,12.2769925 C43.9238011,11.9068186 41.1370145,12.0854053 40.6216067,11.9988489 C38.2277647,11.5971998 35.7297127,10.9345131 33.373373,10.3265657 C28.2329017,9.00016592 22.9666484,6.88073171 17.5862288,7.89238094\"\n\t\t\t\t\ttransform=\"translate(28.094701, 12.127505) rotate(17.000000) translate(-28.094701, -12.127505) \"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M100.918293,12.2094196 C100.919593,12.2004196 100.919593,12.2004196 100.918293,12.2094196 M73.5862288,7.89238094 C71.2441598,8.3302947 69.0866155,9.78806858 68.1523766,12.0987479 C67.8009169,12.967391 67.3917103,14.9243181 67.7083227,15.8073302 C67.8284629,16.14295 68.0332321,16.1008692 68.9555234,16.0430509 C70.643791,15.9369937 72.9330912,13.6622369 74.7484684,13.2557982 C77.2753939,12.6899315 79.9825295,13.1148447 82.4961798,13.6882381 C86.8109365,14.6725177 92.4854008,17.7875215 96.9461842,16.1699775 C97.2783949,16.0495512 101.621029,12.9225732 100.368519,12.2769925 C99.9238011,11.9068186 97.1370145,12.0854053 96.6216067,11.9988489 C94.2277647,11.5971998 91.7297127,10.9345131 89.373373,10.3265657 C84.2329017,9.00016592 78.9666484,6.88073171 73.5862288,7.89238094\"\n\t\t\t\t\ttransform=\"translate(84.094701, 12.127505) scale(-1, 1) rotate(17.000000) translate(-84.094701, -12.127505) \"/>\n\t\t\t</g>\n\t\t";
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

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g fill-opacity=\"0.599999964\" fill-rule=\"nonzero\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M15.6114904,15.1845247 C19.8515017,9.41618792 22.4892046,9.70087612 28.9238518,14.5564693 C29.1057771,14.6937504 29.2212592,14.7812575 29.5936891,15.063789 C34.4216439,18.7263562 36.7081807,20 40,20 C41.1045695,20 42,19.1045695 42,18 C42,16.8954305 41.1045695,16 40,16 C37.9337712,16 36.0986396,14.9777974 32.011227,11.8770179 C31.6358269,11.5922331 31.5189458,11.5036659 31.3332441,11.3635351 C27.5737397,8.52660822 25.3739873,7.28738405 22.6379899,6.99208688 C18.9538127,6.59445233 15.5799484,8.47367246 12.3885096,12.8154753 C11.7343147,13.7054768 11.9254737,14.9572954 12.8154753,15.6114904 C13.7054768,16.2656853 14.9572954,16.0745263 15.6114904,15.1845247 Z\"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M73.6114904,15.1845247 C77.8515017,9.41618792 80.4892046,9.70087612 86.9238518,14.5564693 C87.1057771,14.6937504 87.2212592,14.7812575 87.5936891,15.063789 C92.4216439,18.7263562 94.7081807,20 98,20 C99.1045695,20 100,19.1045695 100,18 C100,16.8954305 99.1045695,16 98,16 C95.9337712,16 94.0986396,14.9777974 90.011227,11.8770179 C89.6358269,11.5922331 89.5189458,11.5036659 89.3332441,11.3635351 C85.5737397,8.52660822 83.3739873,7.28738405 80.6379899,6.99208688 C76.9538127,6.59445233 73.5799484,8.47367246 70.3885096,12.8154753 C69.7343147,13.7054768 69.9254737,14.9572954 70.8154753,15.6114904 C71.7054768,16.2656853 72.9572954,16.0745263 73.6114904,15.1845247 Z\"\n\t\t\t\t\ttransform=\"translate(84.999934, 13.470064) scale(-1, 1) translate(-84.999934, -13.470064) \"/>\n\t\t\t</g>\n\t\t";
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

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g fill-opacity=\"0.599999964\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M26.0390934,6.21012364 C20.2775554,6.98346216 11.2929313,12.0052479 12.04426,17.8178111 C12.0689481,18.0080543 12.3567302,18.0673468 12.4809077,17.9084937 C14.9674041,14.7203351 34.1927973,10.0365481 41.1942673,11.0147151 C41.8350523,11.1044465 42.2580662,10.4430343 41.8210501,10.0302067 C38.0765663,6.49485426 31.2003792,5.51224825 26.0390934,6.21012364\"\n\t\t\t\t\ttransform=\"translate(27.000000, 12.000000) rotate(5.000000) translate(-27.000000, -12.000000) \"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M85.0390934,6.21012364 C79.2775554,6.98346216 70.2929313,12.0052479 71.04426,17.8178111 C71.0689481,18.0080543 71.3567302,18.0673468 71.4809077,17.9084937 C73.9674041,14.7203351 93.1927973,10.0365481 100.194267,11.0147151 C100.835052,11.1044465 101.258066,10.4430343 100.82105,10.0302067 C97.0765663,6.49485426 90.2003792,5.51224825 85.0390934,6.21012364\"\n\t\t\t\t\ttransform=\"translate(86.000000, 12.000000) scale(-1, 1) rotate(5.000000) translate(-86.000000, -12.000000) \"/>\n\t\t\t</g>\n\t\t";
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
	render: function render() {
		return "\n\t\t\t<g fill-opacity=\"0.599999964\">\n\t\t\t\t<g transform=\"translate(12.000000, 6.000000)\">\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M3.63024536,11.1585767 C7.54515501,5.64986673 18.2779197,2.56083721 27.5230268,4.83118046 C28.5957248,5.0946055 29.6788665,4.43856013 29.9422916,3.36586212 C30.2057166,2.2931641 29.5496712,1.21002236 28.4769732,0.94659732 C17.7403633,-1.69001789 5.31209962,1.88699832 0.369754639,8.84142326 C-0.270109626,9.74178291 -0.0589363917,10.9903811 0.84142326,11.6302454 C1.74178291,12.2701096 2.9903811,12.0589364 3.63024536,11.1585767 Z\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"/>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M61.6302454,11.1585767 C65.545155,5.64986673 76.2779197,2.56083721 85.5230268,4.83118046 C86.5957248,5.0946055 87.6788665,4.43856013 87.9422916,3.36586212 C88.2057166,2.2931641 87.5496712,1.21002236 86.4769732,0.94659732 C75.7403633,-1.69001789 63.3120996,1.88699832 58.3697546,8.84142326 C57.7298904,9.74178291 57.9410636,10.9903811 58.8414233,11.6302454 C59.7417829,12.2701096 60.9903811,12.0589364 61.6302454,11.1585767 Z\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\ttransform=\"translate(73.000154, 6.039198) scale(-1, 1) translate(-73.000154, -6.039198) \"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g fill-opacity=\"0.599999964\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M38.5686071,10.7022978 C33.5865557,11.2384494 28.6553385,11.1338998 23.6562444,11.1010606 C19.8231061,11.0762636 15.91974,10.6892291 12.3246118,12.5091287 C11.6361455,12.8572921 7.8767609,14.9449324 8.00311195,16.0108688 C8.10389896,16.8633498 12.0128479,18.0636592 12.7165939,18.2838164 C16.4280826,19.4452548 19.9241869,18.9282036 23.6870976,18.5703225 C28.3024371,18.1316834 32.9139567,18.1745756 37.5322346,17.8739956 C40.6422336,17.6719334 45.4224171,16.9769469 46.8293214,13.1484895 C47.2530382,11.9954284 46.8152171,9.73353891 46.3074622,8.50642195 C46.1050066,8.01751871 45.5634602,7.84963624 45.1688335,8.14921095 C43.7560524,9.22218432 40.9851444,10.4425994 38.5686071,10.7022978\"\n\t\t\t\t\ttransform=\"translate(27.500000, 13.500000) rotate(2.000000) translate(-27.500000, -13.500000) \"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M95.5686071,10.7022978 C90.5865557,11.2384494 85.6553385,11.1338998 80.6562444,11.1010606 C76.8231061,11.0762636 72.91974,10.6892291 69.3246118,12.5091287 C68.6361455,12.8572921 64.8767609,14.9449324 65.003112,16.0108688 C65.103899,16.8633498 69.0128479,18.0636592 69.7165939,18.2838164 C73.4280826,19.4452548 76.9241869,18.9282036 80.6870976,18.5703225 C85.3024371,18.1316834 89.9139567,18.1745756 94.5322346,17.8739956 C97.6422336,17.6719334 102.422417,16.9769469 103.829321,13.1484895 C104.253038,11.9954284 103.815217,9.73353891 103.307462,8.50642195 C103.105007,8.01751871 102.56346,7.84963624 102.168833,8.14921095 C100.756052,9.22218432 97.9851444,10.4425994 95.5686071,10.7022978\"\n\t\t\t\t\ttransform=\"translate(84.500000, 13.500000) scale(-1, 1) rotate(2.000000) translate(-84.500000, -13.500000) \"/>\n\t\t\t</g>\n\t\t";
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

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g fill-opacity=\"0.599999964\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M36.3692975,6.87618545 C34.3991755,9.78053246 30.8236346,11.5165625 27.6315757,12.5601676 C23.6890255,13.8490851 9.08080143,15.9390364 12.5196198,23.9079177 C12.572332,24.029546 12.7390347,24.0312591 12.7920764,23.9096308 C13.9448284,21.2646433 30.256648,18.7865093 31.7648785,18.2064622 C36.2101722,16.4974987 40.1579937,12.7153722 40.9269343,7.66282939 C41.2794477,5.34640965 40.2901039,1.6143049 39.3791695,0.113308759 C39.2697915,-0.0669067099 39.0052417,-0.02339461 38.9498938,0.181831751 C38.5898029,1.51323348 37.5385221,5.15317482 36.3692975,6.87618545\"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M95.3692975,6.87618545 C93.3991755,9.78053246 89.8236346,11.5165625 86.6315757,12.5601676 C82.6890255,13.8490851 68.0808014,15.9390364 71.5196198,23.9079177 C71.572332,24.029546 71.7390347,24.0312591 71.7920764,23.9096308 C72.9448284,21.2646433 89.256648,18.7865093 90.7648785,18.2064622 C95.2101722,16.4974987 99.1579937,12.7153722 99.9269343,7.66282939 C100.279448,5.34640965 99.2901039,1.6143049 98.3791695,0.113308759 C98.2697915,-0.0669067099 98.0052417,-0.02339461 97.9498938,0.181831751 C97.5898029,1.51323348 96.5385221,5.15317482 95.3692975,6.87618545\"\n\t\t\t\t\ttransform=\"translate(85.500000, 12.000000) scale(-1, 1) translate(-85.500000, -12.000000) \"/>\n\t\t\t</g>\n\t\t";
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
	render: function render() {
		return "\n\t\t\t<g fill-opacity=\"0.599999964\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M22.7663531,1.57844898 L23.6772984,1.17582144 C28.9190996,-0.905265751 36.8645466,-0.0328729562 41.7227321,2.29911638 C42.2897848,2.57148957 41.9021563,3.4519421 41.3211012,3.40711006 C26.4021788,2.25602197 16.3582869,11.5525942 12.9460869,17.8470939 C12.8449215,18.0337142 12.5391523,18.05489 12.4635344,17.8808353 C10.156283,12.5620676 16.9134476,3.89614725 22.7663531,1.57844898 Z\"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M80.7663531,1.57844898 L81.6772984,1.17582144 C86.9190996,-0.905265751 94.8645466,-0.0328729562 99.7227321,2.29911638 C100.289785,2.57148957 99.9021563,3.4519421 99.3211012,3.40711006 C84.4021788,2.25602197 74.3582869,11.5525942 70.9460869,17.8470939 C70.8449215,18.0337142 70.5391523,18.05489 70.4635344,17.8808353 C68.156283,12.5620676 74.9134476,3.89614725 80.7663531,1.57844898 Z\"\n\t\t\t\t\ttransform=\"translate(85.000000, 9.000000) scale(-1, 1) translate(-85.000000, -9.000000) \"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g fill-opacity=\"0.599999964\">\n\t\t\t\t<g transform=\"translate(12.000000, 0.000000)\">\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M3.97579559,17.1279169 C5.47099148,7.60476158 18.0585488,1.10867597 27.1635167,5.30104271 C28.1668367,5.76301969 29.3546946,5.32417444 29.8166716,4.32085442 C30.2786486,3.3175344 29.8398033,2.12967649 28.8364833,1.66769952 C17.3488212,-3.62177466 1.93575948,4.3324746 0.0242044059,16.507492 C-0.147121205,17.5986938 0.598585765,18.6221744 1.68978754,18.7935 C2.78098932,18.9648257 3.80446998,18.2191187 3.97579559,17.1279169 Z\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"/>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M61.9757956,17.1279169 C63.4709915,7.60476158 76.0585488,1.10867597 85.1635167,5.30104271 C86.1668367,5.76301969 87.3546946,5.32417444 87.8166716,4.32085442 C88.2786486,3.3175344 87.8398033,2.12967649 86.8364833,1.66769952 C75.3488212,-3.62177466 59.9357595,4.3324746 58.0242044,16.507492 C57.8528788,17.5986938 58.5985858,18.6221744 59.6897875,18.7935 C60.7809893,18.9648257 61.80447,18.2191187 61.9757956,17.1279169 Z\"\n\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\ttransform=\"translate(73.000097, 9.410436) scale(-1, 1) translate(-73.000097, -9.410436) \"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g fill-opacity=\"0.599999964\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M22.7663531,5.57844898 L23.6772984,5.17582144 C28.9190996,3.09473425 36.8645466,3.96712704 41.7227321,6.29911638 C42.2897848,6.57148957 41.9021563,7.4519421 41.3211012,7.40711006 C26.4021788,6.25602197 16.3582869,15.5525942 12.9460869,21.8470939 C12.8449215,22.0337142 12.5391523,22.05489 12.4635344,21.8808353 C10.156283,16.5620676 16.9134476,7.89614725 22.7663531,5.57844898 Z\"\n\t\t\t\t\ttransform=\"translate(27.000000, 13.000000) scale(-1, -1) translate(-27.000000, -13.000000) \"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M80.7663531,5.57844898 L81.6772984,5.17582144 C86.9190996,3.09473425 94.8645466,3.96712704 99.7227321,6.29911638 C100.289785,6.57148957 99.9021563,7.4519421 99.3211012,7.40711006 C84.4021788,6.25602197 74.3582869,15.5525942 70.9460869,21.8470939 C70.8449215,22.0337142 70.5391523,22.05489 70.4635344,21.8808353 C68.156283,16.5620676 74.9134476,7.89614725 80.7663531,5.57844898 Z\"\n\t\t\t\t\ttransform=\"translate(85.000000, 13.000000) scale(1, -1) translate(-85.000000, -13.000000) \"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g fill-opacity=\"0.599999964\" fill-rule=\"nonzero\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M15.9726042,19.4088529 C17.452356,11.0203704 30.0622688,5.22829657 39.2106453,8.9774793 C40.2254706,9.39337449 41.4016967,8.94600219 41.8378196,7.97824531 C42.2739426,7.01048842 41.8048116,5.88881678 40.7899862,5.47292159 C29.3457328,0.782843812 13.9550264,7.85221132 12.0280273,18.7760684 C11.84479,19.8148122 12.5792704,20.798534 13.6685352,20.9732726 C14.7578,21.1480113 15.7893668,20.4475967 15.9726042,19.4088529 Z\"\n\t\t\t\t\ttransform=\"translate(27.000414, 12.500000) scale(-1, -1) translate(-27.000414, -12.500000) \"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M73.9726042,19.4088529 C75.452356,11.0203704 88.0622688,5.22829657 97.2106453,8.9774793 C98.2254706,9.39337449 99.4016967,8.94600219 99.8378196,7.97824531 C100.273943,7.01048842 99.8048116,5.88881678 98.7899862,5.47292159 C87.3457328,0.782843812 71.9550264,7.85221132 70.0280273,18.7760684 C69.84479,19.8148122 70.5792704,20.798534 71.6685352,20.9732726 C72.7578,21.1480113 73.7893668,20.4475967 73.9726042,19.4088529 Z\"\n\t\t\t\t\ttransform=\"translate(85.000414, 12.500000) scale(1, -1) translate(-85.000414, -12.500000) \"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g fill-opacity=\"0.599999964\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M57.000525,12 C56.999825,11.9961 56.999825,11.9961 57.000525,12 M59.4596631,14.892451 C61.3120123,16.058698 64.1131185,16.7894891 65.7030886,17.0505179 C71.9486685,18.0766191 78.0153663,15.945512 84.1715051,15.0153209 C89.636055,14.1895424 95.8563653,13.4967455 100.86041,16.507708 C100.987756,16.584232 101.997542,17.2147893 102.524546,17.7511372 C102.91024,18.1443003 103.563259,18.0619945 103.822605,17.5722412 C105.241692,14.8939029 97.7243204,8.76008291 96.2812935,8.14993193 C89.7471082,5.39200867 81.0899445,8.32440654 74.4284137,9.38927986 C70.6888462,9.98718701 66.9279989,10.3803501 63.2409655,11.2908151 C61.9188284,11.6171635 60.6278928,12.2066818 59.3382119,12.3724317 C59.1848981,12.1429782 58.9889964,12 58.7633758,12 C57.5922879,12 55.8451696,15.4574504 58.0750241,15.6547468 C58.7728345,15.7164887 59.215997,15.3816732 59.4596631,14.892451 Z\"\n\t\t\t\t\ttransform=\"translate(80.500000, 12.500000) rotate(-2.000000) translate(-80.500000, -12.500000) \"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M54.999475,12 C55.000175,11.9961 55.000175,11.9961 54.999475,12 M15.7187065,8.14993193 C22.2528918,5.39200867 30.9100555,8.32440654 37.5715863,9.38927986 C41.3111538,9.98718701 45.0720011,10.3803501 48.7590345,11.2908151 C50.2416282,11.6567696 51.6849876,12.3536477 53.1313394,12.4128263 C53.8325707,12.4413952 54.2674737,13.2763566 53.8149484,13.8242681 C52.3320222,15.6179895 48.3271239,16.7172136 46.2969114,17.0505179 C40.0513315,18.0766191 33.9846337,15.945512 27.8284949,15.0153209 C22.363945,14.1895424 16.1436347,13.4967455 11.1395899,16.507708 C11.0122444,16.584232 10.0024581,17.2147893 9.47545402,17.7511372 C9.0897602,18.1443003 8.43674067,18.0619945 8.17739482,17.5722412 C6.75830756,14.8939029 14.2756796,8.76008291 15.7187065,8.14993193 Z M54.9339874,11 C56.1050753,11 57.8521936,15.4015737 55.6223391,15.6527457 C53.3924847,15.9039176 53.7628995,11 54.9339874,11 Z\"\n\t\t\t\t\ttransform=\"translate(32.348682, 12.500000) rotate(2.000000) translate(-32.348682, -12.500000) \"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g fill-opacity=\"0.599999964\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M22.7663531,1.57844898 L23.6772984,1.17582144 C28.9190996,-0.905265751 36.8645466,-0.0328729562 41.7227321,2.29911638 C42.2897848,2.57148957 41.9021563,3.4519421 41.3211012,3.40711006 C26.4021788,2.25602197 16.3582869,11.5525942 12.9460869,17.8470939 C12.8449215,18.0337142 12.5391523,18.05489 12.4635344,17.8808353 C10.156283,12.5620676 16.9134476,3.89614725 22.7663531,1.57844898 Z\"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M86.535177,12.0246305 C92.3421916,12.2928751 101.730304,16.5124899 101.488432,22.3684172 C101.480419,22.5600881 101.1989,22.6442368 101.06135,22.496811 C98.306449,19.5374968 78.7459953,16.5471364 71.8564209,18.1317995 C71.2258949,18.2770375 70.7468448,17.6550104 71.1462176,17.2056651 C74.5683263,13.3574126 81.3327077,11.7792465 86.535177,12.0246305 Z\"\n\t\t\t\t\ttransform=\"translate(86.246508, 17.285912) rotate(5.000000) translate(-86.246508, -17.285912) \"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g fill-opacity=\"0.599999964\" fill-rule=\"nonzero\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M15.5914402,14.1619718 C20.0874642,7.83556966 29.6031809,4.65350252 39.3473715,7.79575991 C40.3986323,8.13476518 41.5256656,7.55736801 41.8646708,6.50610724 C42.2036761,5.45484647 41.6262789,4.32781316 40.5750182,3.98880789 C29.1665516,0.309863172 17.8358054,4.09887835 12.3309495,11.8448183 C11.6910852,12.7451779 11.9022584,13.9937761 12.8026181,14.6336404 C13.7029777,15.2735046 14.9515759,15.0623314 15.5914402,14.1619718 Z\"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M73.6376405,21.1577995 C77.5525501,15.6490895 88.2853148,12.56006 97.5304219,14.8304032 C98.6031199,15.0938282 99.6862617,14.4377829 99.9496867,13.3650849 C100.213112,12.2923868 99.5570664,11.2092451 98.4843684,10.9458201 C87.7477584,8.30920485 75.3194947,11.8862211 70.3771498,18.840646 C69.7372855,19.7410057 69.9484587,20.9896038 70.8488184,21.6294681 C71.749178,22.2693324 72.9977762,22.0581591 73.6376405,21.1577995 Z\"\n\t\t\t\t\ttransform=\"translate(85.007549, 16.038421) scale(-1, 1) translate(-85.007549, -16.038421) \"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _basic = __webpack_require__(39);

var _basic2 = _interopRequireDefault(_basic);

var _close = __webpack_require__(40);

var _close2 = _interopRequireDefault(_close);

var _cry = __webpack_require__(41);

var _cry2 = _interopRequireDefault(_cry);

var _dizzy = __webpack_require__(42);

var _dizzy2 = _interopRequireDefault(_dizzy);

var _eyeRoll = __webpack_require__(43);

var _eyeRoll2 = _interopRequireDefault(_eyeRoll);

var _happy = __webpack_require__(44);

var _happy2 = _interopRequireDefault(_happy);

var _hearts = __webpack_require__(45);

var _hearts2 = _interopRequireDefault(_hearts);

var _side = __webpack_require__(46);

var _side2 = _interopRequireDefault(_side);

var _squint = __webpack_require__(47);

var _squint2 = _interopRequireDefault(_squint);

var _surprised = __webpack_require__(48);

var _surprised2 = _interopRequireDefault(_surprised);

var _winkWacky = __webpack_require__(49);

var _winkWacky2 = _interopRequireDefault(_winkWacky);

var _wink = __webpack_require__(50);

var _wink2 = _interopRequireDefault(_wink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	basic: _basic2.default,
	close: _close2.default,
	cry: _cry2.default,
	dizzy: _dizzy2.default,
	eyeRoll: _eyeRoll2.default,
	happy: _happy2.default,
	hearts: _hearts2.default,
	side: _side2.default,
	squint: _squint2.default,
	surprised: _surprised2.default,
	winkWacky: _winkWacky2.default,
	wink: _wink2.default
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(0.000000, 8.000000)\" fill-opacity=\"0.599999964\">\n\t\t\t\t<circle cx=\"30\" cy=\"22\" r=\"6\"/>\n\t\t\t\t<circle cx=\"82\" cy=\"22\" r=\"6\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(0.000000, 8.000000)\" fill-opacity=\"0.599999964\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M16.1601674,32.4473116 C18.006676,28.648508 22.1644225,26 26.9975803,26 C31.8136766,26 35.9591217,28.629842 37.8153518,32.4071242 C38.3667605,33.5291977 37.5821037,34.4474817 36.790607,33.7670228 C34.3395063,31.6597833 30.8587163,30.3437884 26.9975803,30.3437884 C23.2572061,30.3437884 19.8737584,31.5787519 17.4375392,33.5716412 C16.5467928,34.3002944 15.6201012,33.5583844 16.1601674,32.4473116 Z\"\n\t\t\t\t\ttransform=\"translate(27.000000, 30.000000) scale(1, -1) translate(-27.000000, -30.000000) \"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M74.1601674,32.4473116 C76.006676,28.648508 80.1644225,26 84.9975803,26 C89.8136766,26 93.9591217,28.629842 95.8153518,32.4071242 C96.3667605,33.5291977 95.5821037,34.4474817 94.790607,33.7670228 C92.3395063,31.6597833 88.8587163,30.3437884 84.9975803,30.3437884 C81.2572061,30.3437884 77.8737584,31.5787519 75.4375392,33.5716412 C74.5467928,34.3002944 73.6201012,33.5583844 74.1601674,32.4473116 Z\"\n\t\t\t\t\ttransform=\"translate(85.000000, 30.000000) scale(1, -1) translate(-85.000000, -30.000000) \"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(0.000000, 8.000000)\">\n\t\t\t\t<circle fill-opacity=\"0.599999964\" fill=\"#000000\" fill-rule=\"evenodd\" cx=\"30\" cy=\"22\" r=\"6\"/>\n\t\t\t\t<path d=\"M25,27 C25,27 19,34.2706667 19,38.2706667 C19,41.5846667 21.686,44.2706667 25,44.2706667 C28.314,44.2706667 31,41.5846667 31,38.2706667 C31,34.2706667 25,27 25,27 Z\" fill=\"#92D9FF\" fill-rule=\"nonzero\"/>\n\t\t\t\t<circle fill-opacity=\"0.599999964\" fill=\"#000000\" fill-rule=\"evenodd\" cx=\"82\" cy=\"22\" r=\"6\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(0.000000, 8.000000)\" fill-opacity=\"0.599999964\" fill-rule=\"nonzero\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M29,25.2 L34.5,30.7 C35,31.1 35.7,31.1 36.1,30.7 L37.7,29.1 C38.1,28.6 38.1,27.9 37.7,27.5 L32.2,22 L37.7,16.5 C38.1,16 38.1,15.3 37.7,14.9 L36.1,13.3 C35.6,12.9 34.9,12.9 34.5,13.3 L29,18.8 L23.5,13.3 C23,12.9 22.3,12.9 21.9,13.3 L20.3,14.9 C19.9,15.3 19.9,16 20.3,16.5 L25.8,22 L20.3,27.5 C19.9,28 19.9,28.7 20.3,29.1 L21.9,30.7 C22.4,31.1 23.1,31.1 23.5,30.7 L29,25.2 Z\"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M83,25.2 L88.5,30.7 C89,31.1 89.7,31.1 90.1,30.7 L91.7,29.1 C92.1,28.6 92.1,27.9 91.7,27.5 L86.2,22 L91.7,16.5 C92.1,16 92.1,15.3 91.7,14.9 L90.1,13.3 C89.6,12.9 88.9,12.9 88.5,13.3 L83,18.8 L77.5,13.3 C77,12.9 76.3,12.9 75.9,13.3 L74.3,14.9 C73.9,15.3 73.9,16 74.3,16.5 L79.8,22 L74.3,27.5 C73.9,28 73.9,28.7 74.3,29.1 L75.9,30.7 C76.4,31.1 77.1,31.1 77.5,30.7 L83,25.2 Z\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(0.000000, 8.000000)\">\n\t\t\t\t<circle fill=\"#FFFFFF\" cx=\"30\" cy=\"22\" r=\"14\"/>\n\t\t\t\t<circle fill=\"#FFFFFF\" cx=\"82\" cy=\"22\" r=\"14\"/>\n\t\t\t\t<circle fill-opacity=\"0.699999988\" fill=\"#000000\" cx=\"30\" cy=\"14\" r=\"6\"/>\n\t\t\t\t<circle fill-opacity=\"0.699999988\" fill=\"#000000\" cx=\"82\" cy=\"14\" r=\"6\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(0.000000, 8.000000)\" fill-opacity=\"0.599999964\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M16.1601674,22.4473116 C18.006676,18.648508 22.1644225,16 26.9975803,16 C31.8136766,16 35.9591217,18.629842 37.8153518,22.4071242 C38.3667605,23.5291977 37.5821037,24.4474817 36.790607,23.7670228 C34.3395063,21.6597833 30.8587163,20.3437884 26.9975803,20.3437884 C23.2572061,20.3437884 19.8737584,21.5787519 17.4375392,23.5716412 C16.5467928,24.3002944 15.6201012,23.5583844 16.1601674,22.4473116 Z\"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M74.1601674,22.4473116 C76.006676,18.648508 80.1644225,16 84.9975803,16 C89.8136766,16 93.9591217,18.629842 95.8153518,22.4071242 C96.3667605,23.5291977 95.5821037,24.4474817 94.790607,23.7670228 C92.3395063,21.6597833 88.8587163,20.3437884 84.9975803,20.3437884 C81.2572061,20.3437884 77.8737584,21.5787519 75.4375392,23.5716412 C74.5467928,24.3002944 73.6201012,23.5583844 74.1601674,22.4473116 Z\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(0.000000, 8.000000)\" fill-opacity=\"0.8\" fill-rule=\"nonzero\" fill=\"#FF5353\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M35.9583333,10 C33.4074091,10 30.8837273,11.9797894 29.5,13.8206358 C28.1106364,11.9797894 25.5925909,10 23.0416667,10 C17.5523182,10 14,13.3341032 14,17.6412715 C14,23.3708668 18.4118636,26.771228 23.0416667,30.376724 C24.695,31.6133636 27.8223436,34.7777086 28.2083333,35.470905 C28.5943231,36.1641015 30.3143077,36.1885229 30.7916667,35.470905 C31.2690257,34.7532872 34.3021818,31.6133636 35.9583333,30.376724 C40.5853182,26.771228 45,23.3708668 45,17.6412715 C45,13.3341032 41.4476818,10 35.9583333,10 Z\"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M88.9583333,10 C86.4074091,10 83.8837273,11.9797894 82.5,13.8206358 C81.1106364,11.9797894 78.5925909,10 76.0416667,10 C70.5523182,10 67,13.3341032 67,17.6412715 C67,23.3708668 71.4118636,26.771228 76.0416667,30.376724 C77.695,31.6133636 80.8223436,34.7777086 81.2083333,35.470905 C81.5943231,36.1641015 83.3143077,36.1885229 83.7916667,35.470905 C84.2690257,34.7532872 87.3021818,31.6133636 88.9583333,30.376724 C93.5853182,26.771228 98,23.3708668 98,17.6412715 C98,13.3341032 94.4476818,10 88.9583333,10 Z\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(0.000000, 8.000000)\" fill-opacity=\"0.599999964\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M27.2409577,20.3455337 C26.462715,21.3574913 26,22.6247092 26,24 C26,27.3137085 28.6862915,30 32,30 C35.3137085,30 38,27.3137085 38,24 C38,23.7097898 37.9793961,23.4243919 37.9395713,23.1451894 C37.9474218,22.9227843 37.9097825,22.6709538 37.8153518,22.4071242 C37.7703692,22.2814477 37.7221152,22.1572512 37.6706873,22.0345685 C37.3370199,21.0717264 36.7650456,20.2202109 36.0253277,19.550585 C33.898886,17.3173253 30.5064735,16 26.9975803,16 C22.1644225,16 18.006676,18.648508 16.1601674,22.4473116 C15.6201012,23.5583844 16.5467928,24.3002944 17.4375392,23.5716412 C19.8737584,21.5787519 23.2572061,20.3437884 26.9975803,20.3437884 C27.0788767,20.3437884 27.1600045,20.3443718 27.2409577,20.3455337 Z\"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M85.2409577,20.3455337 C84.462715,21.3574913 84,22.6247092 84,24 C84,27.3137085 86.6862915,30 90,30 C93.3137085,30 96,27.3137085 96,24 C96,23.7097898 95.9793961,23.4243919 95.9395713,23.1451894 C95.9474218,22.9227843 95.9097825,22.6709538 95.8153518,22.4071242 C95.7703692,22.2814477 95.7221152,22.1572512 95.6706873,22.0345685 C95.3370199,21.0717264 94.7650456,20.2202109 94.0253277,19.550585 C91.898886,17.3173253 88.5064735,16 84.9975803,16 C80.1644225,16 76.006676,18.648508 74.1601674,22.4473116 C73.6201012,23.5583844 74.5467928,24.3002944 75.4375392,23.5716412 C77.8737584,21.5787519 81.2572061,20.3437884 84.9975803,20.3437884 C85.0788767,20.3437884 85.1600045,20.3443718 85.2409577,20.3455337 Z\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	mask1: (0, _common.uid)("mask-"),
	mask2: (0, _common.uid)("mask-"),
	path1: (0, _common.uid)("path-"),
	path2: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z\"\n\t\t\t/>", "<path\n\t\t\tid=\"" + id.path2 + "\"\n\t\t\td=\"M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z\"\n\t\t\t/>", "<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path1 + "\"/>\n\t\t</mask>", "<mask id=\"" + id.mask2 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path2 + "\"/>\n\t\t</mask>"],
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(0.000000, 8.000000)\">\n\t\t\t\t<g transform=\"translate(16.000000, 13.000000)\">\n\t\t\t\t\t<use fill=\"#FFFFFF\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t<circle fill-opacity=\"0.699999988\" fill=\"#000000\" mask=\"url(#" + id.mask1 + ")\" cx=\"14\" cy=\"10\" r=\"6\"/>\n\t\t\t\t</g>\n\t\t\t\t<g transform=\"translate(68.000000, 13.000000)\">\n\t\t\t\t\t<use fill=\"#FFFFFF\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t<circle fill-opacity=\"0.699999988\" fill=\"#000000\" mask=\"url(#" + id.mask2 + ")\" cx=\"14\" cy=\"10\" r=\"6\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(0.000000, 8.000000)\">\n\t\t\t\t<circle fill=\"#FFFFFF\" cx=\"30\" cy=\"22\" r=\"14\"/>\n\t\t\t\t<circle fill=\"#FFFFFF\" cx=\"82\" cy=\"22\" r=\"14\"/>\n\t\t\t\t<circle fill-opacity=\"0.699999988\" fill=\"#000000\" cx=\"30\" cy=\"22\" r=\"6\"/>\n\t\t\t\t<circle fill-opacity=\"0.699999988\" fill=\"#000000\" cx=\"82\" cy=\"22\" r=\"6\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(0.000000, 8.000000)\">\n\t\t\t\t<circle fill=\"#FFFFFF\" cx=\"82\" cy=\"22\" r=\"12\"/>\n\t\t\t\t<circle fill-opacity=\"0.699999988\" fill=\"#000000\" cx=\"82\" cy=\"22\" r=\"6\"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M16.1601674,25.4473116 C18.006676,21.648508 22.1644225,19 26.9975803,19 C31.8136766,19 35.9591217,21.629842 37.8153518,25.4071242 C38.3667605,26.5291977 37.5821037,27.4474817 36.790607,26.7670228 C34.3395063,24.6597833 30.8587163,23.3437884 26.9975803,23.3437884 C23.2572061,23.3437884 19.8737584,24.5787519 17.4375392,26.5716412 C16.5467928,27.3002944 15.6201012,26.5583844 16.1601674,25.4473116 Z\"\n\t\t\t\t\tfill-opacity=\"0.599999964\"\n\t\t\t\t\tfill=\"#000000\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(0.000000, 8.000000)\" fill-opacity=\"0.599999964\">\n\t\t\t\t<circle cx=\"30\" cy=\"22\" r=\"6\"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M70.4123979,24.204889 C72.2589064,20.4060854 76.4166529,17.7575774 81.2498107,17.7575774 C86.065907,17.7575774 90.2113521,20.3874194 92.0675822,24.1647016 C92.618991,25.2867751 91.8343342,26.2050591 91.0428374,25.5246002 C88.5917368,23.4173607 85.1109468,22.1013658 81.2498107,22.1013658 C77.5094365,22.1013658 74.1259889,23.3363293 71.6897696,25.3292186 C70.7990233,26.0578718 69.8723316,25.3159619 70.4123979,24.204889 Z\"\n\t\t\t\t\ttransform=\"translate(81.252230, 21.757577) rotate(-4.000000) translate(-81.252230, -21.757577) \"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _basic = __webpack_require__(52);

var _basic2 = _interopRequireDefault(_basic);

var _concerned = __webpack_require__(53);

var _concerned2 = _interopRequireDefault(_concerned);

var _disbelief = __webpack_require__(54);

var _disbelief2 = _interopRequireDefault(_disbelief);

var _eating = __webpack_require__(55);

var _eating2 = _interopRequireDefault(_eating);

var _grimace = __webpack_require__(56);

var _grimace2 = _interopRequireDefault(_grimace);

var _sad = __webpack_require__(57);

var _sad2 = _interopRequireDefault(_sad);

var _screamOpen = __webpack_require__(58);

var _screamOpen2 = _interopRequireDefault(_screamOpen);

var _serious = __webpack_require__(59);

var _serious2 = _interopRequireDefault(_serious);

var _smile = __webpack_require__(60);

var _smile2 = _interopRequireDefault(_smile);

var _tongue = __webpack_require__(61);

var _tongue2 = _interopRequireDefault(_tongue);

var _twinkle = __webpack_require__(62);

var _twinkle2 = _interopRequireDefault(_twinkle);

var _vomit = __webpack_require__(63);

var _vomit2 = _interopRequireDefault(_vomit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	basic: _basic2.default,
	concerned: _concerned2.default,
	disbelief: _disbelief2.default,
	eating: _eating2.default,
	grimace: _grimace2.default,
	sad: _sad2.default,
	screamOpen: _screamOpen2.default,
	serious: _serious2.default,
	smile: _smile2.default,
	tongue: _tongue2.default,
	twinkle: _twinkle2.default,
	vomit: _vomit2.default
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	defs: [],
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(2.000000, 52.000000)\" fill-opacity=\"0.699999988\">\n\t\t\t\t<path d=\"M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	path1: (0, _common.uid)("path-"),
	mask1: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z\"\n\t\t\t/>", "<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path1 + "\" transform=\"translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) \"/>\n\t\t</mask>"],
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(2.000000, 52.000000)\">\n\t\t\t\t<use fill-opacity=\"0.699999988\" fill=\"#000000\" fill-rule=\"evenodd\" transform=\"translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) \" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t<rect fill=\"#FFFFFF\" fill-rule=\"evenodd\" mask=\"url(#" + id.mask1 + ")\" x=\"39\" y=\"2\" width=\"31\" height=\"16\" rx=\"5\"/>\n\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" mask=\"url(#" + id.mask1 + ")\" fill=\"#FF4F6D\">\n\t\t\t\t\t<g transform=\"translate(38.000000, 24.000000)\">\n\t\t\t\t\t\t<circle cx=\"11\" cy=\"11\" r=\"11\"/>\n\t\t\t\t\t\t<circle cx=\"21\" cy=\"11\" r=\"11\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	defs: [],
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(2.000000, 52.000000)\" fill-opacity=\"0.699999988\" fill=\"#000000\">\n\t\t\t\t<path d=\"M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15\" transform=\"translate(54.000000, 22.000000) scale(1, -1) translate(-54.000000, -22.000000) \"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	defs: [],
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(2.000000, 52.000000)\">\n\t\t\t\t<g opacity=\"0.599999964\" stroke-width=\"1\" transform=\"translate(28.000000, 6.000000)\" fill-opacity=\"0.599999964\" fill=\"#000000\">\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M16.1906378,10.106319 C16.0179484,4.99553347 11.7923466,0.797193688 6.29352385,0 C9.66004124,1.95870633 11.9804619,5.49520667 11.9804619,9.67694348 C11.9804619,15.344608 6.50694731,20.2451296 0.176591694,20.2451296 C0.11761218,20.2451296 0.0587475828,20.2447983 0,20.244138 L8.8963743e-11,20.244138 C1.35764479,20.7317259 2.83995964,21 4.39225962,21 C9.71395931,21 14.2131224,17.8469699 15.6863572,13.5136402 C18.1609431,15.6698775 21.8629994,17.0394229 26,17.0394229 C30.1370006,17.0394229 33.8390569,15.6698775 36.3136428,13.5136402 C37.7868776,17.8469699 42.2860407,21 47.6077404,21 C49.1600404,21 50.6423552,20.7317259 52,20.244138 L52,20.244138 C51.9412524,20.2447983 51.8823878,20.2451296 51.8234083,20.2451296 C45.4930527,20.2451296 40.0195381,15.344608 40.0195381,9.67694348 C40.0195381,5.49520667 42.3399588,1.95870633 45.7064761,0 C40.2076534,0.797193688 35.9820516,4.99553347 35.8093622,10.106319 C33.2452605,11.8422828 29.7948543,12.9056086 26,12.9056086 C22.2051457,12.9056086 18.7547395,11.8422828 16.1906378,10.106319 Z\"/>\n\t\t\t\t</g>\n\t\t\t\t<circle fill-opacity=\"0.2\" fill=\"#FF4646\" cx=\"17\" cy=\"15\" r=\"9\"/>\n\t\t\t\t<circle fill-opacity=\"0.2\" fill=\"#FF4646\" cx=\"91\" cy=\"15\" r=\"9\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	path1: (0, _common.uid)("path-"),
	mask1: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<rect id=\"" + id.path1 + "\" x=\"24\" y=\"9\" width=\"60\" height=\"22\" rx=\"11\"/>", "<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path1 + "\"/>\n\t\t</mask>"],
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(2.000000, 52.000000)\">\n\t\t\t\t<rect fill-opacity=\"0.599999964\" fill=\"#000000\" fill-rule=\"evenodd\" x=\"22\" y=\"7\" width=\"64\" height=\"26\" rx=\"13\"/>\n\t\t\t\t<use fill=\"#FFFFFF\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t<path\n\t\t\t\t\td=\"M71,22 L62,22 L62,34 L58,34 L58,22 L49,22 L49,34 L45,34 L45,22 L36,22 L36,34 L32,34 L32,22 L24,22 L24,18 L32,18 L32,6 L36,6 L36,18 L45,18 L45,6 L49,6 L49,18 L58,18 L58,6 L62,6 L62,18 L71,18 L71,6 L75,6 L75,18 L83.8666667,18 L83.8666667,22 L75,22 L75,34 L71,34 L71,22 Z\"\n\t\t\t\t\tfill=\"#E6E6E6\"\n\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\tmask=\"url(#" + id.mask1 + ")\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	defs: [],
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(2.000000, 52.000000)\" fill-opacity=\"0.699999988\" fill=\"#000000\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M40.0582943,16.6539438 C40.7076459,23.6831146 46.7016363,28.3768187 54,28.3768187 C61.3416045,28.3768187 67.3633339,23.627332 67.9526838,16.5287605 C67.9840218,16.1513016 67.0772329,15.8529531 66.6289111,16.077395 C61.0902255,18.8502083 56.8805885,20.2366149 54,20.2366149 C51.1558456,20.2366149 47.0072148,18.8804569 41.5541074,16.168141 C41.0473376,15.9160792 40.0197139,16.2363147 40.0582943,16.6539438 Z\"\n\t\t\t\t\ttransform=\"translate(54.005357, 22.188409) scale(1, -1) translate(-54.005357, -22.188409) \"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	path1: (0, _common.uid)("path-"),
	mask1: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\td=\"M34.0082051,15.1361102 C35.1280248,29.123916 38.2345159,40.9925405 53.9961505,40.9999965 C69.757785,41.0074525 72.9169073,29.0566179 73.9942614,15.0063928 C74.0809675,13.8756222 73.1738581,12.9999965 72.0369872,12.9999965 C65.3505138,12.9999965 62.6703194,14.9936002 53.9894323,14.9999965 C45.3085452,15.0063928 40.7567994,12.9999965 36.0924943,12.9999965 C34.9490269,12.9999965 33.8961688,13.7366502 34.0082051,15.1361102 Z\"\n\t\t\tid=\"" + id.path1 + "\"/>", "<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path1 + "\" transform=\"translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998) \"/>\n\t\t</mask>"],
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(2.000000, 52.000000)\">\n\t\t\t\t<use fill-opacity=\"0.699999988\" fill=\"#000000\" fill-rule=\"evenodd\" transform=\"translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998) \" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t<rect fill=\"#FFFFFF\" fill-rule=\"evenodd\" mask=\"url(#" + id.mask1 + ")\" x=\"39\" y=\"2\" width=\"31\" height=\"16\" rx=\"5\"/>\n\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" mask=\"url(#" + id.mask1 + ")\" fill=\"#FF4F6D\">\n\t\t\t\t\t<g transform=\"translate(38.000000, 32.000000)\">\n\t\t\t\t\t\t<circle cx=\"11\" cy=\"11\" r=\"11\"/>\n\t\t\t\t\t\t<circle cx=\"21\" cy=\"11\" r=\"11\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	defs: [],
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(2.000000, 52.000000)\" fill=\"#000000\" fill-opacity=\"0.699999988\">\n\t\t\t\t<rect x=\"42\" y=\"18\" width=\"24\" height=\"6\" rx=\"3\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	path1: (0, _common.uid)("path-"),
	mask1: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z\"\n\t\t\t/>", "<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path1 + "\"/>\n\t\t</mask>"],
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(2.000000, 52.000000)\">\n\t\t\t\t<use fill-opacity=\"0.699999988\" fill=\"#000000\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t<rect fill=\"#FFFFFF\" fill-rule=\"evenodd\" mask=\"url(#" + id.mask1 + ")\" x=\"39\" y=\"2\" width=\"31\" height=\"16\" rx=\"5\"/>\n\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" mask=\"url(#" + id.mask1 + ")\" fill=\"#FF4F6D\">\n\t\t\t\t\t<g transform=\"translate(38.000000, 24.000000)\">\n\t\t\t\t\t\t<circle cx=\"11\" cy=\"11\" r=\"11\"/>\n\t\t\t\t\t\t<circle cx=\"21\" cy=\"11\" r=\"11\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	path1: (0, _common.uid)("path-"),
	mask1: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M29,15.6086957 C30.410031,25.2313711 41.062182,33 54,33 C66.9681454,33 77.6461342,25.183301 79,14.7391304 C79.1012093,14.3397326 78.775269,13 76.826087,13 C56.838426,13 41.7395748,13 31.173913,13 C29.3833142,13 28.870211,14.2404669 29,15.6086957 Z\"\n\t\t\t/>", "<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path1 + "\"/>\n\t\t</mask>"],
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(2.000000, 52.000000)\">\n\t\t\t\t<use fill-opacity=\"0.699999988\" fill=\"#000000\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t<rect fill=\"#FFFFFF\" fill-rule=\"evenodd\" mask=\"url(#" + id.mask1 + ")\" x=\"39\" y=\"2\" width=\"31\" height=\"16\" rx=\"5\"/>\n\t\t\t\t<path\n\t\t\t\t\tfill=\"#FF4F6D\"\n\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\td=\"M65.9841079,23.7466656 C65.9945954,23.8296335 66,23.9141856 66,24 L66,33 C66,39.0751322 61.0751322,44 55,44 L54,44 C47.9248678,44 43,39.0751322 43,33 L43,24 L43,24 C43,23.9141856 43.0054046,23.8296335 43.0158921,23.7466656 C43.0053561,23.6651805 43,23.5829271 43,23.5 C43,21.5670034 45.9101491,20 49.5,20 C51.510438,20 53.3076958,20.4914717 54.5,21.2634601 C55.6923042,20.4914717 57.489562,20 59.5,20 C63.0898509,20 66,21.5670034 66,23.5 C66,23.5829271 65.9946439,23.6651805 65.9841079,23.7466656 Z\"\n\t\t\t\t\t/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	defs: [],
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(2.000000, 52.000000)\" fill-opacity=\"0.599999964\" fill-rule=\"nonzero\" fill=\"#000000\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M40,16 C40,21.371763 46.1581544,25 54,25 C61.8418456,25 68,21.371763 68,16 C68,14.8954305 67.050301,14 66,14 C64.7072748,14 64.1302316,14.9051755 64,16 C62.7575758,18.9378973 59.6832595,20.7163149 54,21 C48.3167405,20.7163149 45.2424242,18.9378973 44,16 C43.8697684,14.9051755 43.2927252,14 42,14 C40.949699,14 40,14.8954305 40,16 Z\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	path1: (0, _common.uid)("path-"),
	path2: (0, _common.uid)("path-"),
	filter1: (0, _common.uid)("filter-"),
	mask1: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\td=\"M34.0082051,12.6020819 C35.1280248,23.0929366 38.2345159,31.9944054 53.9961505,31.9999974 C69.757785,32.0055894 72.9169073,23.0424631 73.9942614,12.5047938 C74.0809675,11.6567158 73.1738581,10.9999965 72.0369872,10.9999965 C65.3505138,10.9999965 62.6703194,12.4951994 53.9894323,12.4999966 C45.3085452,12.5047938 40.7567994,10.9999965 36.0924943,10.9999965 C34.9490269,10.9999965 33.8961688,11.5524868 34.0082051,12.6020819 Z\"\n\t\t\tid=\"" + id.path1 + "\"/>", "<path\n\t\t\td=\"M59.9170416,36 L60,36 C60,39.3137085 62.6862915,42 66,42 C69.3137085,42 72,39.3137085 72,36 L72,35 L72,31 C72,27.6862915 69.3137085,25 66,25 L66,25 L42,25 L42,25 C38.6862915,25 36,27.6862915 36,31 L36,31 L36,35 L36,38 C36,41.3137085 38.6862915,44 42,44 C45.3137085,44 48,41.3137085 48,38 L48,36 L48.0829584,36 C48.5590365,33.1622867 51.0270037,31 54,31 C56.9729963,31 59.4409635,33.1622867 59.9170416,36 Z\"\n\t\t\tid=\"" + id.path2 + "\"/>", "<filter x=\"-1.4%\" y=\"-2.6%\" width=\"102.8%\" height=\"105.3%\" filterUnits=\"objectBoundingBox\" id=\"" + id.filter1 + "\">\n\t\t\t<feOffset dx=\"0\" dy=\"-1\" in=\"SourceAlpha\" result=\"shadowOffsetInner1\"/>\n\t\t\t<feComposite in=\"shadowOffsetInner1\" in2=\"SourceAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\" result=\"shadowInnerInner1\"/>\n\t\t\t<feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0\" type=\"matrix\" in=\"shadowInnerInner1\"/>\n\t\t</filter>", "<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path1 + "\" transform=\"translate(54.000000, 21.499998) scale(1, -1) translate(-54.000000, -21.499998) \"/>\n\t\t</mask>"],
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(2.000000, 52.000000)\">\n\t\t\t\t<use fill-opacity=\"0.699999988\" fill=\"#000000\" fill-rule=\"evenodd\" transform=\"translate(54.000000, 21.499998) scale(1, -1) translate(-54.000000, -21.499998) \" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t<rect fill=\"#FFFFFF\" fill-rule=\"evenodd\" mask=\"url(#" + id.mask1 + ")\" x=\"39\" y=\"0\" width=\"31\" height=\"16\" rx=\"5\"/>\n\t\t\t\t<g>\n\t\t\t\t\t<use fill=\"#88C553\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t<use fill=\"black\" fill-opacity=\"1\" filter=\"url(#" + id.filter1 + ")\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _general = __webpack_require__(65);

var _general2 = _interopRequireDefault(_general);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	general: _general2.default
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

exports.default = new _common.AvatarPart({
	defs: [],
	render: function render() {
		return "\n\t\t\t<g transform=\"translate(28.000000, 40.000000)\" fill-opacity=\"0.16\">\n\t\t\t\t<path d=\"M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8\"/>\n\t\t\t</g>\n\t\t";
	}
});

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _beardLight = __webpack_require__(67);

var _beardLight2 = _interopRequireDefault(_beardLight);

var _beardMagestic = __webpack_require__(68);

var _beardMagestic2 = _interopRequireDefault(_beardMagestic);

var _beardMedium = __webpack_require__(69);

var _beardMedium2 = _interopRequireDefault(_beardMedium);

var _blank = __webpack_require__(70);

var _blank2 = _interopRequireDefault(_blank);

var _moustacheFancy = __webpack_require__(71);

var _moustacheFancy2 = _interopRequireDefault(_moustacheFancy);

var _moustacheMagnum = __webpack_require__(72);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var _makeColor = __webpack_require__(2);

var _makeColor2 = _interopRequireDefault(_makeColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path + "\"\n\t\t\td=\"M101.428403,98.1685688 C98.9148372,100.462621 96.23722,101.494309 92.8529444,100.772863 C92.2705777,100.648833 89.8963391,96.2345713 83.9998344,96.2345713 C78.1033297,96.2345713 75.7294253,100.648833 75.1467245,100.772863 C71.7624488,101.494309 69.0848316,100.462621 66.5712661,98.1685688 C61.8461772,93.855604 57.9166219,87.9081858 60.2778299,81.4191814 C61.5083844,78.0369425 63.5097479,74.3237342 67.1506257,73.2459109 C71.0384163,72.0955419 76.4968931,73.2439051 80.4147542,72.4582708 C81.6840664,72.2035248 83.0706538,71.7508657 83.9998344,71 C84.929015,71.7508657 86.3159365,72.2035248 87.5845805,72.4582708 C91.5027758,73.2439051 96.9612525,72.0955419 100.849043,73.2459109 C104.489921,74.3237342 106.491284,78.0369425 107.722173,81.4191814 C110.083381,87.9081858 106.153826,93.855604 101.428403,98.1685688 M140.081033,26 C136.670693,34.4002532 137.987774,44.8580348 137.356666,53.6758724 C136.844038,60.8431942 135.33712,71.5857526 128.972858,76.214531 C125.718361,78.5816138 119.79436,82.5598986 115.54187,81.4501943 C112.614539,80.6863848 112.302182,72.290096 108.455284,69.1469801 C104.09172,65.5823153 98.6429854,64.0160432 93.1491481,64.2578722 C90.7785381,64.3622683 85.9841367,64.3374908 83.9999331,66.1604584 C82.0157295,64.3374908 77.2216647,64.3622683 74.8510547,64.2578722 C69.3568808,64.0160432 63.9081467,65.5823153 59.5445817,69.1469801 C55.6976839,72.290096 55.3856641,80.6863848 52.4583326,81.4501943 C48.2058427,82.5598986 42.2818421,78.5816138 39.0270077,76.214531 C32.6624096,71.5857526 31.1561652,60.8431942 30.642864,53.6758724 C30.0120926,44.8580348 31.3291729,34.4002532 27.9188335,26 C26.2597768,26 27.3540339,42.1288693 27.3540339,42.1288693 L27.3540339,62.4851205 C27.3856735,77.7732046 36.935095,100.655445 58.1080116,109.393004 C63.2861266,111.52982 75.0153111,115 83.9999331,115 C92.9845551,115 104.71374,111.860188 109.891855,109.723371 C131.064771,100.985813 140.614193,77.7732046 140.646169,62.4851205 L140.646169,42.1288693 C140.646169,42.1288693 141.740089,26 140.081033,26\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g transform=\"translate(49.000000, 72.000000)\">\n\t\t\t\t<use fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var _makeColor = __webpack_require__(2);

var _makeColor2 = _interopRequireDefault(_makeColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = {
	path: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path + "\"\n\t\t\td=\"M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g transform=\"translate(49.000000, 72.000000)\">\n\t\t\t\t<use fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path + "\"\n\t\t\td=\"M105.017591,94.1296214 C101.150441,99.7213834 98.257542,95.9467308 94.1374777,92.8762163 C91.6567227,91.0272796 87.9608129,88.7275108 84.5044337,88.8410391 C81.0477114,88.7275108 77.3518016,91.0272796 74.8710466,92.8762163 C70.7509822,95.9467308 67.8580835,99.7213834 63.9909333,94.1296214 C61.0884259,89.9323547 62.3028943,82.8739117 65.014944,78.9027173 C68.8738581,73.2512381 74.1088724,75.9847769 79.9622738,75.3400279 C81.5538829,75.1648137 83.1526985,74.7228407 84.5044337,74 C85.856169,74.7228407 87.4546414,75.1648137 89.0462504,75.3400279 C94.899995,75.9847769 100.134666,73.2512381 103.993923,78.9027173 C106.70563,82.8739117 107.920098,89.9323547 105.017591,94.1296214 M140.39109,26 C136.966521,40.0748212 135.393023,54.4337754 132.909944,68.6711471 C132.392536,71.6390145 131.826063,74.5963095 131.224594,77.5496398 C131.098329,78.1697764 130.973781,80.4725746 130.362704,80.7643064 C128.511632,81.6484223 124.739149,76.9466834 123.730409,75.8851496 C121.196893,73.219256 118.684993,70.5292442 115.599415,68.437233 C109.364783,64.2102603 102.065485,61.7108818 94.4700836,61.117837 C91.2922091,60.8693859 86.9951134,61.3025234 84.000116,63.1104016 C81.0051185,61.3025234 76.7080229,60.8693859 73.5298053,61.117837 C65.9344039,61.7108818 58.6351055,64.2102603 52.4004739,68.437233 C49.3148957,70.5292442 46.8033387,73.219256 44.2694796,75.8851496 C43.2607395,76.9466834 39.4882573,81.6484223 37.6371849,80.7643064 C37.0261079,80.4725746 36.9015594,78.1697764 36.7752954,77.5496398 C36.1738255,74.5963095 35.6073527,71.6390145 35.0899445,68.6711471 C32.6072086,54.4337754 31.0337113,40.0748212 27.6091415,26 C26.6127533,26 25.7385119,44.7478165 25.6273446,46.4945731 C25.174784,53.5889755 24.6463963,60.5254529 25.3216346,67.6261326 C26.485803,79.8749043 27.6993791,95.2339402 37.032627,104.58753 C45.4659003,113.039493 57.7103052,114.806417 68.2713185,120.141327 C69.631059,120.828202 71.4347824,121.676306 73.3798667,122.37111 C75.4289129,123.934171 79.4926946,125 84.1740722,125 C89.0846465,125 93.3155222,123.827456 95.2540874,122.137856 C96.9548781,121.49261 98.5180822,120.752874 99.7285704,120.141327 C110.288776,114.805245 122.533989,113.039493 130.967262,104.58753 C140.30051,95.2339402 141.514086,79.8749043 142.678597,67.6261326 C143.353493,60.5254529 142.825105,53.5889755 142.372887,46.4945731 C142.261377,44.7478165 141.387136,26 140.39109,26 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g transform=\"translate(49.000000, 72.000000)\">\n\t\t\t\t<use fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 70 */
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path + "\"\n\t\t\td=\"M84.0002865,69.2970648 C77.2083681,65.7112456 67.5782013,65.1489138 62.3885276,67.1316942 C56.6144416,69.3374281 51.5052994,75.5829845 42.6388201,72.8283797 C42.2699314,72.7136458 41.9094725,73.0449523 42.0204089,73.408662 C43.3937943,77.9183313 51.0278347,81.0068878 53.6221945,81.1080652 C64.961124,81.549609 74.0949802,72.8302891 84.0002865,72.1614794 C93.9055921,72.8302891 103.03945,81.549609 114.378714,81.1080652 C116.972736,81.0068878 124.607113,77.9183313 125.980498,73.408662 C126.091098,73.0449523 125.730639,72.7136458 125.36175,72.8283797 C116.495271,75.5829845 111.386129,69.3374281 105.612044,67.1316942 C100.422371,65.1489138 90.7922044,65.7112456 84.0002865,69.2970648 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g transform=\"translate(49.000000, 72.000000)\">\n\t\t\t\t<use fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path + "\"\n\t\t\td=\"M83.9980103,74.839711 C83.4569991,75.6087366 82.761047,76.2496937 81.949688,76.6891498 C73.0477917,81.5102869 63.8767499,77.3322546 58.8763101,77.6298353 C56.459601,77.7739966 53.3405442,79.4153191 52.2155358,77.6791014 C50.9768736,75.7669804 55.0680827,65.2207224 64.7214121,63.4643353 C71.7310704,62.1893309 81.4972391,63.6024033 83.9980103,66.9380109 C86.4987814,63.6024033 96.2649453,62.1893309 103.274279,63.4643353 C112.927938,65.2207224 117.019147,75.7669804 115.780485,77.6791014 C114.655476,79.4153191 111.53642,77.7739966 109.119711,77.6298353 C104.118941,77.3322546 94.948229,81.5102869 86.0463327,76.6891498 C85.2349736,76.2496937 84.5390216,75.6087366 83.9980103,74.839711 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g transform=\"translate(49.000000, 72.000000)\">\n\t\t\t\t<use fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path + "\"/>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _hat = __webpack_require__(74);

var _hat2 = _interopRequireDefault(_hat);

var _hijab = __webpack_require__(75);

var _hijab2 = _interopRequireDefault(_hijab);

var _blank = __webpack_require__(76);

var _blank2 = _interopRequireDefault(_blank);

var _turban = __webpack_require__(77);

var _turban2 = _interopRequireDefault(_turban);

var _winterHat = __webpack_require__(78);

var _winterHat2 = _interopRequireDefault(_winterHat);

var _winterHat3 = __webpack_require__(79);

var _winterHat4 = _interopRequireDefault(_winterHat3);

var _winterHat5 = __webpack_require__(80);

var _winterHat6 = _interopRequireDefault(_winterHat5);

var _winterHat7 = __webpack_require__(81);

var _winterHat8 = _interopRequireDefault(_winterHat7);

var _longHairBig = __webpack_require__(82);

var _longHairBig2 = _interopRequireDefault(_longHairBig);

var _longHairBob = __webpack_require__(83);

var _longHairBob2 = _interopRequireDefault(_longHairBob);

var _longHairBun = __webpack_require__(84);

var _longHairBun2 = _interopRequireDefault(_longHairBun);

var _longHairCurly = __webpack_require__(85);

var _longHairCurly2 = _interopRequireDefault(_longHairCurly);

var _longHairCurvy = __webpack_require__(86);

var _longHairCurvy2 = _interopRequireDefault(_longHairCurvy);

var _longHairDreads = __webpack_require__(87);

var _longHairDreads2 = _interopRequireDefault(_longHairDreads);

var _longHairFrida = __webpack_require__(88);

var _longHairFrida2 = _interopRequireDefault(_longHairFrida);

var _longHairFroBand = __webpack_require__(89);

var _longHairFroBand2 = _interopRequireDefault(_longHairFroBand);

var _longHairFro = __webpack_require__(90);

var _longHairFro2 = _interopRequireDefault(_longHairFro);

var _longHairMiaWallace = __webpack_require__(91);

var _longHairMiaWallace2 = _interopRequireDefault(_longHairMiaWallace);

var _longHairNotTooLong = __webpack_require__(92);

var _longHairNotTooLong2 = _interopRequireDefault(_longHairNotTooLong);

var _longHairShavedSides = __webpack_require__(93);

var _longHairShavedSides2 = _interopRequireDefault(_longHairShavedSides);

var _longHairStraight = __webpack_require__(94);

var _longHairStraight2 = _interopRequireDefault(_longHairStraight);

var _longHairStraight3 = __webpack_require__(95);

var _longHairStraight4 = _interopRequireDefault(_longHairStraight3);

var _longHairStraightStrand = __webpack_require__(96);

var _longHairStraightStrand2 = _interopRequireDefault(_longHairStraightStrand);

var _shortHairDreads = __webpack_require__(97);

var _shortHairDreads2 = _interopRequireDefault(_shortHairDreads);

var _shortHairDreads3 = __webpack_require__(98);

var _shortHairDreads4 = _interopRequireDefault(_shortHairDreads3);

var _shortHairFrizzle = __webpack_require__(99);

var _shortHairFrizzle2 = _interopRequireDefault(_shortHairFrizzle);

var _shortHairShaggyMullet = __webpack_require__(100);

var _shortHairShaggyMullet2 = _interopRequireDefault(_shortHairShaggyMullet);

var _shortHairShaggy = __webpack_require__(101);

var _shortHairShaggy2 = _interopRequireDefault(_shortHairShaggy);

var _shortHairShortCurly = __webpack_require__(102);

var _shortHairShortCurly2 = _interopRequireDefault(_shortHairShortCurly);

var _shortHairShortFlat = __webpack_require__(103);

var _shortHairShortFlat2 = _interopRequireDefault(_shortHairShortFlat);

var _shortHairShortRound = __webpack_require__(104);

var _shortHairShortRound2 = _interopRequireDefault(_shortHairShortRound);

var _shortHairShortWaved = __webpack_require__(105);

var _shortHairShortWaved2 = _interopRequireDefault(_shortHairShortWaved);

var _shortHairSides = __webpack_require__(106);

var _shortHairSides2 = _interopRequireDefault(_shortHairSides);

var _shortHairTheCaesarSidePart = __webpack_require__(107);

var _shortHairTheCaesarSidePart2 = _interopRequireDefault(_shortHairTheCaesarSidePart);

var _shortHairTheCaesar = __webpack_require__(108);

var _shortHairTheCaesar2 = _interopRequireDefault(_shortHairTheCaesar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	blank: _blank2.default,
	hat: _hat2.default,
	hijab: _hijab2.default,
	turban: _turban2.default,
	winterHat1: _winterHat2.default,
	winterHat2: _winterHat4.default,
	winterHat3: _winterHat6.default,
	winterHat4: _winterHat8.default,
	longHairBig: _longHairBig2.default,
	longHairBob: _longHairBob2.default,
	longHairBun: _longHairBun2.default,
	longHairCurly: _longHairCurly2.default,
	longHairCurvy: _longHairCurvy2.default,
	longHairDreads: _longHairDreads2.default,
	longHairFrida: _longHairFrida2.default,
	longHairFroBand: _longHairFroBand2.default,
	longHairFro: _longHairFro2.default,
	longHairMiaWallace: _longHairMiaWallace2.default,
	longHairNotTooLong: _longHairNotTooLong2.default,
	longHairShavedSides: _longHairShavedSides2.default,
	longHairStraight01: _longHairStraight2.default,
	longHairStraight02: _longHairStraight4.default,
	longHairStraightStrand: _longHairStraightStrand2.default,
	shortHairDreads01: _shortHairDreads2.default,
	shortHairDreads02: _shortHairDreads4.default,
	shortHairFrizzle: _shortHairFrizzle2.default,
	shortHairShaggyMullet: _shortHairShaggyMullet2.default,
	shortHairShaggy: _shortHairShaggy2.default,
	shortHairShortCurly: _shortHairShortCurly2.default,
	shortHairShortFlat: _shortHairShortFlat2.default,
	shortHairShortRound: _shortHairShortRound2.default,
	shortHairShortWaved: _shortHairShortWaved2.default,
	shortHairSides: _shortHairSides2.default,
	shortHairTheCaesarSidePart: _shortHairTheCaesarSidePart2.default,
	shortHairTheCaesar: _shortHairTheCaesar2.default
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var id = {
	mask1: (0, _common.uid)("mask-"),
	mask2: (0, _common.uid)("mask-"),
	path1: (0, _common.uid)("path-"),
	path2: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<rect id=\"" + id.path1 + "\" x=\"0\" y=\"0\" width=\"264\" height=\"280\"/>", "<path\n\t\t\tid=\"" + id.path2 + "\"\n\t\t\td=\"M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,84.0546578 186.345324,76.495786 183.361772,69.6491845 C173.434911,53 89.3126235,53.8033992 80.7098777,69.4854816 C77.6811789,76.3752214 76,83.9912805 76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z\"\n\t\t\t/>", "<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path1 + "\"/>\n\t\t</mask>", "<mask id=\"" + id.mask2 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path2 + "\"/>\n\t\t</mask>"],
	render: function render() {
		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#" + id.mask1 + ")\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(1.000000, 0.000000)\">\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill=\"#1F333C\"\n\t\t\t\t\t\t\t\tmask=\"url(#" + id.mask2 + ")\"\n\t\t\t\t\t\t\t\td=\"M123.182388,2 L141.817612,2 L141.817612,2 C160.609055,2 176.866947,15.0804442 180.890118,33.4361631 L190,75 L75,75 L84.1098821,33.4361631 L84.1098821,33.4361631 C88.1330533,15.0804442 104.390945,2 123.182388,2 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<ellipse fill=\"#1F333C\" mask=\"url(#" + id.mask2 + ")\" cx=\"132\" cy=\"87.5\" rx=\"122\" ry=\"57.5\"/>\n\t\t\t\t\t\t\t<ellipse fill=\"#15232A\" mask=\"url(#" + id.mask2 + ")\" cx=\"132\" cy=\"82\" rx=\"62\" ry=\"25\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>";
	},

	attrs: {}
});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	mask1: (0, _common.uid)("mask-"),
	mask2: (0, _common.uid)("mask-"),
	path1: (0, _common.uid)("path-"),
	path2: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<rect id=\"" + id.path1 + "\" x=\"0\" y=\"0\" width=\"264\" height=\"280\"/>", "<path\n\t\t\tid=\"" + id.path2 + "\"\n\t\t\td=\"M66.0421575,77.0749852 C71.6795257,45.2058307 99.5129755,21 133,21 L133,21 L133,21 C170.555363,21 201,51.444637 201,89 L201,119.751022 C201.875211,129.554379 202.693946,136.422143 203.456205,140.354314 C204.833317,147.458254 209.150269,145.115419 209.150269,155.220201 C209.150269,165.324983 204.822005,168.720206 204.803237,177.705482 C204.784469,186.690758 220.200444,193.836185 220.200444,205.242606 C220.200444,216.649027 213.126079,270.475928 142.577598,270.475928 C127.507235,270.475928 114.670509,266.188589 104.06742,257.613911 C104.750275,264.103957 105.394468,271.565987 106,280 L59,280 C59.9324304,256.228591 51.7156549,242.936205 51.7156549,216.44564 C51.7156549,189.955074 65.3525844,151.427541 65,142 C65.019981,141.417741 65.0406721,140.728417 65.0620734,139.932027 C65.0208303,138.959828 65,137.982347 65,137 L65,89 L65,89 C65,85.0240875 65.3412247,81.1278723 65.9959868,77.3390417 C65.9973236,77.2261704 65.9986613,77.1131564 66,77 C66.0140661,77.0249783 66.0281186,77.0499734 66.0421575,77.0749852 Z M132.5,53 L132.5,53 C102.400481,53 78,77.4004811 78,107.5 L78,107.5 L78,130.5 C78,160.599519 102.400481,185 132.5,185 L133.5,185 C163.599519,185 188,160.599519 188,130.5 L188,107.5 C188,77.4004811 163.599519,53 133.5,53 L133.5,53 L132.5,53 Z\"\n\t\t\t/>", "<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path1 + "\"/>\n\t\t</mask>", "<mask id=\"" + id.mask2 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path2 + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#" + id.mask1 + ")\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<use stroke=\"none\" fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tstroke=\"none\"\n\t\t\t\t\t\t\tfill-opacity=\"0.5\"\n\t\t\t\t\t\t\tfill=\"#FFFFFF\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\tmask=\"url(#" + id.mask2 + ")\"\n\t\t\t\t\t\t\td=\"M72.0744416,104.959767 C71.3690172,101.246903 71,97.4161983 71,93.5 C71,59.5344879 98.7583455,32 133,32 C167.241654,32 195,59.5344879 195,93.5 C195,97.4161983 194.630983,101.246903 193.925558,104.959767 C192.341315,72.6827942 165.669927,47 133,47 C100.330073,47 73.6586845,72.6827942 72.0744428,104.959774 Z\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tstroke=\"none\"\n\t\t\t\t\t\t\tfill-opacity=\"0.16\"\n\t\t\t\t\t\t\tfill=\"#000000\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\topacity=\"0.899999976\"\n\t\t\t\t\t\t\tmask=\"url(#" + id.mask2 + ")\"\n\t\t\t\t\t\t\td=\"M187.929085,104.69543 C188.631457,108.187732 189,111.800827 189,115.5 L189,138.5 C189,168.599519 164.599519,193 134.5,193 L131.5,193 C101.400481,193 77,168.599519 77,138.5 L77,115.5 L77,115.5 C77,111.800827 77.3685433,108.187732 78.0709154,104.69543 C78.0238287,105.624341 78,106.559388 78,107.5 L78,107.5 L78,130.5 C78,160.599519 102.400481,185 132.5,185 L133.5,185 C163.599519,185 188,160.599519 188,130.5 L188,130.5 L188,107.5 C188,106.559388 187.976171,105.624341 187.929085,104.69543 Z M114.16682,206.995462 C120.651206,211.981028 135.663493,213.708321 152.404574,210.756416 C169.145655,207.804512 182.661822,201.046883 187.049987,194.144193 C187.118291,194.396526 187.175421,194.652296 187.221114,194.911435 C188.930607,204.606451 173.985409,215.345413 153.84008,218.897578 C133.694752,222.449742 115.977919,217.469978 114.268426,207.774963 C114.222732,207.515823 114.188938,207.255938 114.166824,206.995464 Z M126.034638,235.921439 C134.227056,241.574977 150.421729,241.843835 167.103682,235.772101 C183.785635,229.700366 196.018656,219.084674 198.660388,209.487828 C198.803116,209.80837 198.935124,210.134883 199.056117,210.46731 C203.582768,222.904181 190.979008,238.909268 170.904831,246.215671 C150.830654,253.522074 130.887742,249.363007 126.361091,236.926135 C126.240098,236.593709 126.131343,236.258733 126.034643,235.921442 Z\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		"color": _colors.fabricColors
	}
});

/***/ }),
/* 76 */
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	mask1: (0, _common.uid)("mask-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\td=\"M83.9715543,55.8170792 C107.404232,69.414362 145.114919,82.1112884 139,138 C158.377483,132.360101 168.044149,116.801277 168,91.3235294 C167.918252,44.1482824 115.850571,6.80154462e-15 86,0 C85.3259486,0 84.6559706,0.0296343787 83.9916946,0.0880669528 C83.3328225,0.0296343217 82.6684563,0 82.0002187,0 C52.0737254,6.80154462e-15 0.0804892181,44.1482783 0.00021866091,91.3235294 C-0.0442202163,117.440393 9.62244645,132.999216 29.0002187,138 C22.8618971,82.1112789 60.5101967,69.4143577 83.9715662,55.8170722 Z\"\n\t\t\tid=\"" + id.path1 + "\"/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(1.000000, 0.000000)\">\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill=\"#EDECE3\"\n\t\t\t\t\t\t\t\td=\"M74.5304294,97.5 C73.529284,95.0905557 73,92.5798498 73,90 C73,71.7746033 99.4151998,57 132,57 C164.5848,57 191,71.7746033 191,90 C191,92.5798498 190.470716,95.0905557 189.469571,97.5 C183.398106,82.8878805 159.972341,72 132,72 C104.027659,72 80.6018941,82.8878805 74.5304294,97.5 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<g transform=\"translate(48.000000, 3.000000)\">\n\t\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill-opacity=\"0.16\"\n\t\t\t\t\t\t\t\tfill=\"#000000\"\n\t\t\t\t\t\t\t\td=\"M48.0110963,96.0123559 C48.3807929,121.112082 58.0438337,136.107963 77.0002187,141 C57.6224465,136.289117 47.9557798,121.632254 48.0002187,97.0294118 C48.0008313,96.6902213 48.0044682,96.351197 48.0110963,96.0123559 Z M152.645822,30.4681115 C153.39011,36.1953086 152.126202,42.8891982 148.000219,50.135763 C136.847465,71.5667661 76.561434,72.0039826 76.3339794,129.679698 C76.1051437,67.7612631 136.805324,67.3799133 148.000219,44.5441176 C150.669864,39.5668152 152.141299,34.8351296 152.645822,30.4681115 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.fabricColors
	}
});

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-"),
	path2: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\td=\"M120,54 L20,54 L20,155 C20,160.522847 15.5228475,165 10,165 C4.4771525,165 6.76353751e-16,160.522847 0,155 L0,54 L0,44 C-2.9759565e-15,19.699471 19.699471,4.46393476e-15 44,0 L96,0 C120.300529,-4.46393476e-15 140,19.699471 140,44 L140,54 L140,155 C140,160.522847 135.522847,165 130,165 C124.477153,165 120,160.522847 120,155 L120,54 Z\"\n\t\t\tid=\"" + id.path1 + "\"/>", "<rect id=\"" + id.path2 + "\" x=\"74\" y=\"50\" width=\"118\" height=\"36\" rx=\"8\"/>"],
	render: function render(_ref) {
		var _ref$color = _ref.color,
		    color = _ref$color === undefined ? _colors.fabricColors.red : _ref$color,
		    _ref$color2 = _ref.color2,
		    color2 = _ref$color2 === undefined ? _colors.fabricColors.white : _ref$color2;

		return "\n\t\t\t<g>\n\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(63.000000, 20.000000)\">\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill=\"" + color2 + "\"\n\t\t\t\t\t\t\td=\"M1,48 L23.6714286,48 L23.6714286,153.664286 C23.6714286,159.924828 18.5962564,165 12.3357143,165 C6.07517216,165 1,159.924828 1,153.664286 L1,48 Z M116.328571,48 L139,48 L139,153.664286 C139,159.924828 133.924828,165 127.664286,165 C121.403744,165 116.328571,159.924828 116.328571,153.664286 L116.328571,48 Z\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<use fill=\"black\" fill-opacity=\"1\" filter=\"url(#" + id.path2 + ")\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t\t<use fill=\"" + color2 + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.fabricColors,
		color2: _colors.fabricColors
	}
});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	mask1: (0, _common.uid)("mask-"),
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M72,21 C126.772655,21 144,68.8032255 144,103.04488 L144,176.910255 C144,196.404852 121.366901,196.446757 121.366901,165.988782 L121.366901,86.5347425 C121.366901,80.4596103 117.635097,77.5347425 111.551408,77.5347425 L72,77.5347425 L32.4485915,77.5347425 C26.3649028,77.5347425 22.6330986,80.4596103 22.6330986,86.5347425 L22.6330986,165.988782 C22.6330986,196.446757 -1.41137102e-14,196.404852 0,176.910255 L0,103.04488 C-7.11930515e-15,68.8032255 17.2273451,21 72,21 Z\"\n\t\t\t/>", "<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path1 + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g>\n\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(61.000000, 0.000000)\">\n\t\t\t\t\t\t<g transform=\"translate(0.000000, 176.000000)\" fill=\"#F4F4F4\">\n\t\t\t\t\t\t\t<circle cx=\"9\" cy=\"65\" r=\"9\"/>\n\t\t\t\t\t\t\t<rect x=\"8\" y=\"0\" width=\"2\" height=\"58\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<g transform=\"translate(126.000000, 168.000000)\" fill=\"#F4F4F4\">\n\t\t\t\t\t\t\t<circle  cx=\"9\" cy=\"65\" r=\"9\"/>\n\t\t\t\t\t\t\t<rect x=\"8\" y=\"0\" width=\"2\" height=\"58\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<circle fill=\"#F4F4F4\" cx=\"72\" cy=\"20\" r=\"20\"/>\n\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t<rect fill-opacity=\"0.2\" fill=\"#000000\" x=\"-1\" y=\"21\" width=\"146\" height=\"46\" mask=\"url(#" + id.mask1 + ")\"/>\n\t\t\t\t\t\t<g transform=\"translate(29.000000, 32.000000)\" fill=\"#FFFFFF\" fill-opacity=\"0.5\">\n\t\t\t\t\t\t\t<polygon transform=\"translate(12.500000, 9.000000) rotate(180.000000) translate(-12.500000, -9.000000)\" points=\"12.5 0 25 18 0 18\"/>\n\t\t\t\t\t\t\t<polygon transform=\"translate(43.500000, 9.000000) rotate(180.000000) translate(-43.500000, -9.000000)\" points=\"43.5 0 56 18 31 18\"/>\n\t\t\t\t\t\t\t<polygon transform=\"translate(74.500000, 9.000000) rotate(180.000000) translate(-74.500000, -9.000000)\" points=\"74.5 0 87 18 62 18\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<g transform=\"translate(13.000000, 41.000000)\" fill=\"#000000\" fill-opacity=\"0.5\">\n\t\t\t\t\t\t\t<polygon points=\"12.5 0 25 18 0 18\"/>\n\t\t\t\t\t\t\t<polygon points=\"43.5 0 56 18 31 18\"/>\n\t\t\t\t\t\t\t<polygon points=\"74.5 0 87 18 62 18\"/>\n\t\t\t\t\t\t\t<polygon points=\"105.5 0 118 18 93 18\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.fabricColors
	}
});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-"),
	path2: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M66,0 L66,0 C102.450793,-6.69590214e-15 132,29.5492065 132,66 L132,71 L0,71 L0,66 C-4.46393476e-15,29.5492065 29.5492065,6.69590214e-15 66,0 Z\"\n\t\t\t/>", "<path\n\t\t\tid=\"" + id.path2 + "\"\n\t\t\td=\"M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g>\n\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(67.000000, 12.000000)\">\n\t\t\t\t\t\t<circle fill=\"#F4F4F4\" cx=\"66\" cy=\"8\" r=\"20\"/>\n\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<use fill=\"black\" fill-opacity=\"1\" filter=\"url(#" + id.path2 + ")\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t\t<use fill=\"#F4F4F4\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.fabricColors
	}
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-"),
	path2: (0, _common.uid)("path-"),
	path3: (0, _common.uid)("path-"),
	path4: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M129.659138,38.3566287 C132.459581,45.3577056 134,52.9989608 134,61 L134,69 L2,69 L2,61 C2,52.9748603 3.54971254,45.3116754 6.36620203,38.2933809 C-0.0371821146,24.8304767 -1.28053094,13.7727805 2.63615554,5.12029235 C10.141056,2.84355825 18.8342301,4.64979084 28.7156778,10.5389901 C38.4862647,3.88774159 50.289117,-4.77047603e-15 63,-7.10542736e-15 L73,-7.10542736e-15 C85.7221104,-9.44244112e-15 97.5345852,3.89461262 107.310208,10.5566215 C117.203883,4.65339747 125.906912,2.84128775 133.419297,5.12029235 C137.342115,13.7863263 136.088729,24.8651051 129.659138,38.3566287 Z\"\n\t\t\t/>", "<path\n\t\t\tid=\"" + id.path2 + "\"\n\t\t\td=\"M28.7156857,10.5389848 C18.758718,17.3171083 10.9122881,26.9651756 6.36620203,38.2933809 C-0.0371821146,24.8304767 -1.28053094,13.7727805 2.63615554,5.12029235 C10.1410556,2.84355836 18.8342292,4.64979066 28.7156763,10.5389892 Z M129.659138,38.3566287 C125.120833,27.0109143 117.273404,17.34646 107.310208,10.5566215 C117.203883,4.65339747 125.906912,2.84128775 133.419297,5.12029235 C137.342115,13.7863263 136.088729,24.8651051 129.659138,38.3566287 Z\"\n\t\t\t/>", "<path\n\t\t\tid=\"" + id.path3 + "\"\n\t\t\td=\"M21.8615933,15.9591438 C17.3889306,20.0465694 13.5271638,24.7913314 10.4291788,30.040544 C7.50356643,21.9322189 7.00287124,16.3214118 8.92709323,13.2081228 C11.5782173,12.0615989 15.8897174,12.9786059 21.8615933,15.9591438 Z M125.352616,29.6737564 C122.278044,24.5465519 118.471613,19.9084198 114.077736,15.903773 C119.880509,13.0520429 124.083178,12.1889392 126.68574,13.3144617 C128.572308,16.3668294 128.127934,21.8199276 125.352616,29.6737564 Z\"\n\t\t\t/>", "<path\n\t\t\tid=\"" + id.path4 + "\"\n\t\t\td=\"M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g>\n\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(65.000000, 4.000000)\">\n\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t<use fill-opacity=\"0.24\" fill=\"#000000\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t\t<use fill-opacity=\"0.300000012\" fill=\"#FFFFFF\" xlink:href=\"#" + id.path3 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g>\n\t\t\t\t\t\t<use fill=\"black\" fill-opacity=\"1\" filter=\"url(#" + id.path4 + ")\" xlink:href=\"#" + id.path4 + "\"/>\n\t\t\t\t\t\t<use fill=\"#F4F4F4\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path4 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.fabricColors
	}
});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	mask1: (0, _common.uid)("mask-"),
	path1: (0, _common.uid)("path-"),
	path2: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\td=\"M222.384814,182.806274 C217.011239,188.518122 211.648364,192.127879 211.831204,198 C212.148076,209.888877 255.439069,245.051165 216.999964,267.00001 L16.0053198,267 C-22.4337677,245.051165 20.8572256,209.888877 21.1740982,198 C21.3569373,192.127879 15.9940628,188.518122 10.6204878,182.806274 C5.24691269,177.094426 -0.137362978,169.280486 0.00267373922,155 C0.944497502,125.971596 31.3716806,128.588232 31.2026676,109 C31.3716806,89.9992744 19.8139454,82.1607482 31.2026676,46 C42.8395963,9.53932757 72.9165934,0.768171773 116.002651,0.0159928999 L116.002651,0 C116.16951,0.002426813 116.336177,0.0049705256 116.502651,0.0076322645 C116.669125,0.0049705256 116.835791,0.002426813 117.002651,0 L117.002651,0.0159928999 C160.088708,0.768171773 190.165705,9.53932757 201.802634,46 C213.191356,82.1607482 201.633621,89.9992744 201.802634,109 C201.633621,128.588232 232.060804,125.971596 233.002628,155 C233.142665,169.280486 227.758389,177.094426 222.384814,182.806274 Z M182.884023,95.3249541 C161.364085,83.7373848 142.890027,67.1442914 130.845581,48.302359 C112.763849,73.9237118 76.5299076,78.5347548 51.2240944,94.679971 C51.0770557,95.4306015 51,96.2063021 51,97 L51,110 C51,116.018625 55.4308707,121.002364 61.2085808,121.867187 C62.9518066,142.114792 75.4692178,159.282984 93,167.610951 L93,186 L89,186 L89,186 C49.235498,186 17,218.235498 17,258 L17,267 L217,267 L217,258 C217,218.235498 184.764502,186 145,186 L141,186 L141,167.610951 C158.530782,159.282984 171.048193,142.114792 172.791419,121.867187 C178.569129,121.002364 183,116.018625 183,110 L183,97 C183,96.4315537 182.960475,95.8723389 182.884023,95.3249541 Z\"\n\t\t\tid=\"" + id.path2 + "\"/>", "<path\n\t\t\td=\"M222.384814,182.806274 C217.011239,188.518122 211.648364,192.127879 211.831204,198 C212.148076,209.888877 255.439069,245.051165 216.999964,267.00001 L16.0053198,267 C-22.4337677,245.051165 20.8572256,209.888877 21.1740982,198 C21.3569373,192.127879 15.9940628,188.518122 10.6204878,182.806274 C5.24691269,177.094426 -0.137362978,169.280486 0.00267373922,155 C0.944497502,125.971596 31.3716806,128.588232 31.2026676,109 C31.3716806,89.9992744 19.8139454,82.1607482 31.2026676,46 C42.8395963,9.53932757 72.9165934,0.768171773 116.002651,0.0159928999 L116.002651,0 C116.16951,0.002426813 116.336177,0.0049705256 116.502651,0.0076322645 C116.669125,0.0049705256 116.835791,0.002426813 117.002651,0 L117.002651,0.0159928999 C160.088708,0.768171773 190.165705,9.53932757 201.802634,46 C213.191356,82.1607482 201.633621,89.9992744 201.802634,109 C201.633621,128.588232 232.060804,125.971596 233.002628,155 C233.142665,169.280486 227.758389,177.094426 222.384814,182.806274 Z M93,186 L89,186 L89,186 C49.235498,186 17,218.235498 17,258 L17,267 L217,267 L217,258 C217,218.235498 184.764502,186 145,186 L141,186 L141,140 L93,140 L93,186 Z\"\n\t\t\tid=\"" + id.path1 + "\"/>", "<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path1 + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask})\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(16.000000, 13.000000)\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<g stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(16.000000, 13.000000)\">\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill-opacity=\"0.16\"\n\t\t\t\t\t\t\t\tfill=\"#000000\"\n\t\t\t\t\t\t\t\tmask=\"url(#" + id.mask1 + ")\"\n\t\t\t\t\t\t\t\td=\"M30.0988695,115.056827 C27.7250732,118.08281 24.5296181,122.528485 24.3618393,122.19381 C26.2345006,119.810609 27.3747977,117.011661 27.3409475,113.436088 C27.517612,95.334874 15.4366324,87.8674306 27.3409475,53.4185647 C28.0096512,51.5090274 29.1070085,49.7044671 30.585889,48.0048838 C20.2433352,82.4586863 31.3685109,90.3556196 31.2026676,109 C31.2224682,111.294844 30.8223327,113.284923 30.0988695,115.056827 Z M202.419413,48.0048838 C203.898293,49.7044671 204.995651,51.5090274 205.664354,53.4185647 C215.822041,82.8130155 208.516445,92.5627534 206.263744,106.036479 C205.964379,106.841192 206.195125,107.789747 205.880216,108.603009 C175.207016,98.1454461 147.589972,78.5596292 131.494917,55.6119279 C108.710969,85.0357527 58.3544031,85.3732378 33.6737341,110.936101 C34.0607045,110.391798 34.4280855,109.884956 34.7584999,109.446288 C57.2940449,79.527377 108.24688,80.3241416 130.845581,48.302359 C146.243536,72.3904102 172.664446,92.9495135 202.009146,103.926748 C202.310417,103.073073 202.089664,102.077381 202.376063,101.232679 C204.483829,87.4002546 211.215481,77.3069293 202.419413,48.0048838 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill-opacity=\"0.1\"\n\t\t\t\t\t\t\tfill=\"#FFFFFF\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\td=\"M50.7584999,122.446288 C73.2940449,92.527377 124.24688,93.3241416 146.845581,61.302359 C162.243536,85.3904102 188.664446,105.949514 218.009146,116.926748 C218.310417,116.073073 218.089664,115.077381 218.376063,114.232679 C220.531197,100.089398 227.520377,89.8551619 217.802634,59 C206.165705,22.5393276 176.088708,13.7681718 133.002651,13.0159929 C132.336177,13.0049705 132.16951,13.0024268 132.002651,13 C88.9165934,13.7681718 58.8395963,22.5393276 47.2026676,59 C35.8139454,95.1607482 47.3716806,102.999274 47.2026676,122 C47.2350518,125.753256 46.1441426,128.691293 44.3525888,131.192923 C44.5361111,131.59459 48.5061717,125.436551 50.7584999,122.446288 Z\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M38,79.3595521 L38,111 C38,133.339168 51.0804213,152.623239 70,161.610951 L70,174.74565 C50.3625813,177.434228 34.6409914,182.163507 23.3845374,181.000327 C9.16164761,179.530612 1.49623627,150.795665 1,126 C0.382878875,95.1640258 29.3189583,30.7950013 40,18 C47.9231015,8.50878211 69.6952966,0.550643437 94.0001685,1 C118.30504,1.44935656 140.861928,6.81215989 149.000169,17 C161.324059,32.4276364 186.868727,91.0786423 187.000169,126 C187.093514,150.800049 177.46255,175.65995 164.000169,177 C152.920532,178.102871 137.475571,175.511343 118,173.997342 L118,161.610951 C136.919579,152.623239 150,133.339168 150,111 L150,82.9882378 C140.478735,78.1305678 131.863294,72.248172 124.153679,65.3410505 C127.362309,70.6368571 130.848786,75.1475352 134.61311,78.8730846 C107.596314,71.2928169 86.1055278,58.4501118 70.1407506,40.3449693 C62.1597317,56.8095313 51.4461487,69.8143919 38.0000014,79.3595511 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(39.000000, 19.000000)\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M114.939716,28.3372418 C113.953527,28.5587334 112.985531,28.7906134 112.036894,29.0299707 C96.9448338,32.8379559 88.0168242,43.6513048 80.3566792,59.6480618 C76.5956048,67.5028569 74.3660182,76.7914798 74.0230569,85.4813651 C73.8884429,88.8932666 74.3484305,92.415154 75.267729,95.7003546 C75.6049405,96.9061873 77.4232441,101.086987 77.9224658,97.70885 C78.0885348,96.584253 77.4804043,95.0327505 77.4215529,93.8376154 C77.3444374,92.2693977 77.4273028,90.6807875 77.5341822,89.1149098 C77.7340739,86.1874141 78.2559568,83.3154127 79.1847257,80.524647 C80.5119249,76.5367405 82.2013644,72.212859 84.7874413,68.8480942 C91.1883705,60.5205939 95.7648164,43.2055199 133,41.6707324 C170.235184,40.1359449 181.748751,67.461069 185.182761,73.3006826 C189.2479,80.2147477 187.37751,88.7073939 188.619138,96.2008069 C189.091302,99.05041 190.164155,98.986558 190.751315,96.4378281 C191.748406,92.1082634 192.219217,87.6102098 191.901961,83.1592929 C191.183568,73.1114668 187.496636,46.7057251 167.308863,35.006118 C161.866498,31.8520537 156.438352,29.6874962 151.116597,28.2827668 C154.176091,25.3110645 156,21.5675963 156,17.5 C156,7.83501688 145.702549,0 133,0 C120.297451,0 110,7.83501688 110,17.5 C110,21.5924906 111.846303,25.3568736 114.939716,28.3372418 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<use stroke=\"none\" fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\td=\"M48.7246602,89.2187346 C44.7420117,91.1711421 42,95.2653555 42,100 L42,113 C42,119.018625 46.4308707,124.002364 52.2085808,124.867187 C53.9518066,145.114792 66.4692178,162.282984 84,170.610951 L84,189 L80,189 L80,189 C78.4137385,189 76.8394581,189.051297 75.2787271,189.152323 C70.3620966,186.639548 65.7724391,183.578174 61.590479,180.048925 C57.2814481,181.318646 52.7202934,182 48,182 C21.490332,182 0,160.509668 0,134 C0,119.590902 6.34904132,106.664702 16.4021743,97.866349 C11.1175746,90.6060809 8,81.6671147 8,72 C8,50.160623 23.9112243,32.0375116 44.7738169,28.5905219 C51.0188047,11.8901624 67.1208542,0 86,0 C94.0143172,0 101.528186,2.14267429 108,5.88641659 C114.471814,2.14267429 121.985683,0 130,0 C148.879146,0 164.981195,11.8901624 171.226183,28.5905219 C192.088776,32.0375116 208,50.160623 208,72 C208,81.6671147 204.882425,90.6060809 199.597826,97.866349 C209.650959,106.664702 216,119.590902 216,134 C216,160.509668 194.509668,182 168,182 C163.279707,182 158.718552,181.318646 154.409521,180.048925 C150.227561,183.578174 145.637903,186.639548 140.721273,189.152323 C139.160542,189.051297 137.586262,189 136,189 L136,189 L132,189 L132,170.610951 C149.530782,162.282984 162.048193,145.114792 163.791419,124.867187 C169.569129,124.002364 174,119.018625 174,113 L174,100 C174,95.778427 171.820067,92.0660046 168.524466,89.9269981 C167.450514,89.5343912 166.370126,89.0424011 165.289302,88.4564081 C164.868503,88.3367332 164.43828,88.2394463 164,88.1659169 L164,87.7130302 C155.319369,82.4100235 146.764694,71.1747746 141.449951,56.7992877 C131.312295,58.8351061 119.547256,60 107,60 C95.038684,60 83.7882341,58.9413637 73.9808476,57.0787685 C68.7546917,71.0641476 60.4637821,82.0431875 52,87.4230168 L52,88.1659169 C50.9777341,88.3374206 49.9992949,88.6381729 49.0820602,89.050796 C48.9628927,89.1079465 48.8437566,89.1639284 48.7246602,89.2187346 Z\"\n\t\t\tid=\"" + id.path1 + "\"/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill-opacity=\"0.16\"\n\t\t\t\t\t\t\tfill=\"#000000\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\td=\"M105.984735,27.7643628 C114.013215,26.6267967 122.796163,26 132,26 C142.358003,26 152.182939,26.7938545 160.999342,28.2161842 C183.451688,38.7497687 199,61.559133 199,88 L199,105.044138 C187.461887,104.672508 173.831239,90.7644306 166.449951,70.7992877 C156.312295,72.8351061 144.547256,74 132,74 C120.038684,74 108.788234,72.9413637 98.9808476,71.0787685 C91.6758772,90.6271291 78.3831001,104.301811 67,105.021902 L67,88 L67,88 C67,61.1745453 83.0039076,38.0870034 105.984735,27.7643628 Z\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t<g stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(25.000000, 10.000000)\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	mask1: (0, _common.uid)("mask-"),
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M162.831093,71.6181521 C162.943003,73.0640672 163,74.5253775 163,76 L163,114 C163,136.339168 149.919579,155.623239 131,164.610951 L131,183 L135,183 C136.524404,183 137.037743,183.047374 138.538625,183.140731 C123.625568,210.496321 119.823733,233.574048 137.47212,247.543277 C139.169858,248.745686 140.396085,249.328761 140.607243,249.428275 C142.980035,250.546232 145.444343,251.76781 148.074296,252.382591 C152.696796,253.463231 158.007057,252.010459 162.630756,251.429524 C164.742591,251.164137 166.847633,251.000636 168.977452,250.993519 C171.542066,250.985014 174.188404,251.078221 176.119408,252.691023 C178.003455,254.264772 177.763079,259.889444 172.244213,262.523872 C176.3432,264.37915 181.25603,260.071171 182.931671,257.34666 C184.398107,254.962171 185.526058,252.378599 186.146081,249.741914 C186.917963,246.458686 186.967717,243.016815 186.363678,239.728032 C185.106048,232.88022 182.187563,226.295538 180.201011,219.605673 C179.468692,217.139607 178.51478,214.440611 178.099366,211.916746 C177.986471,211.23167 177.851996,208.701383 177.957698,208.171998 C178.036425,207.778517 178.016643,207.37549 179.372782,206.996069 C183.288539,205.899634 187.379733,204.063449 190.225486,201.476579 C193.590156,198.418295 195.343925,194.445304 196.758409,190.497133 C198.998525,184.244662 200.281132,177.550111 200.870584,171.057073 C200.99307,169.708269 201.062205,168.361722 201.086383,167.009968 C201.10077,166.193153 201.000862,165.263344 201.094375,164.445141 C201.247433,163.105189 201.039826,163.457881 202.341615,162.571291 C206.599454,159.671476 209.921164,155.448546 212.051783,151.200622 C215.39827,144.528634 215.834064,137.49302 213.117591,130.733555 C210.864687,125.12728 207.291411,119.498616 201.725588,115.887863 C199.588776,114.501568 197.334273,113.244582 195.115337,111.95809 C193.906862,111.257566 191.067703,110.342511 190.209501,109.441341 C189.609259,108.810939 190.56477,105.649382 190.685858,104.583322 C191.213967,99.9353218 190.606132,95.4261763 189.520542,90.8868298 C187.127368,80.8793698 177.487944,64.7382958 173.617944,55.2249863 C170.293437,47.0528435 165.481911,-0.0750473139 108.58669,0.198941193 C51.691468,0.4729297 41.4185991,50.4377258 33.7159879,59.7736698 C25.3512665,69.9121239 16.9074766,89.1763214 22.602684,107.035643 C17.099033,113.95809 4.54481227,124.04369 1.3853513,134.125611 C-0.596804833,140.450807 -0.511883829,147.495621 2.0289526,153.633016 C3.46621561,157.104393 5.52490056,160.250502 7.94045353,163.272162 C10.0566849,165.919435 12.4084972,168.423513 14.4577909,171.110359 C15.6946403,172.732013 16.0263318,173.129312 15.5599656,175.128304 C14.6406208,179.068318 12.7411877,182.853334 11.0939201,186.603116 C8.54189405,192.412639 6.39748885,197.82226 6.0799842,204.016065 C5.77766543,209.912373 7.40435223,226.688671 24.3409972,236.576369 C26.3249517,237.73442 28.2831301,238.743202 30.3833764,239.685161 C29.2931905,236.290327 30.5294405,224.161856 32.7263968,219.653578 C33.2860762,221.204589 34.2369916,222.697108 35.2618383,224.05216 C36.8611506,226.167444 40.636039,231.460774 45.4085994,231.706547 C43.4722007,228.722725 41.3891385,226.708805 40.7853002,223.10864 C44.7616013,225.068753 50.4191385,226.855644 55.0466338,226.691448 C58.4512667,226.570818 63.4709972,224.871405 66.0000446,222.74779 C57.6284322,224.074724 49.679027,221.3155 46.4820009,215.419366 C45.8146217,214.188415 45.3084926,212.898625 45.0141664,211.558847 C44.5967546,209.659309 43.9381673,206.615432 44.8227444,204.862039 C45.0375932,204.436124 45.3893685,204.001198 45.806628,203.572743 C45.7407358,203.49425 45.6753213,203.415537 45.6103845,203.336606 C51.303506,198.550494 58.4494475,190.932516 62.2752482,185.367908 C62.3459243,185.245492 62.416066,185.122857 62.4856702,185 L62.5253504,185 C62.5536953,184.957813 62.5818364,184.915755 62.6097716,184.873828 C67.874859,183.648086 73.3617452,183 79,183 L83,183 L83,164.610951 C64.0804213,155.623239 51,136.339168 51,114 L51,76 L51,76 C51,73.537425 51.1589523,71.1119753 51.4671565,68.733351 C55.4088487,67.4702772 59.365485,66.2776957 63.3986046,65.2045441 C67.8552588,64.0189378 77.7980098,62.0907786 81.6887904,61.1941723 L84.4252449,58.215348 L85.4876566,60.1702128 C87.6456492,60.0042337 99.5663601,58.212708 99.5663601,58.212708 L100.896323,54.9898699 C102.612526,56.7530625 103.834989,57.668872 103.834989,57.668872 C106.391211,57.460454 117.488488,57.2113208 120.119841,57.2427023 C120.119841,57.2427023 127.460212,57.5012269 129.240756,57.5714137 L130.907605,56.9328981 L131.456495,58.0098503 C132.910143,58.601117 141.699367,61.6008734 143.434153,62.138079 L145.980784,61.2323702 C147.100342,63.9256202 149.920119,63.586016 152.257345,65.7132858 C154.760315,67.9915694 159.482831,69.7372554 162.831093,71.6181521 Z\"\n\t\t\t/>", "<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path1 + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill-opacity=\"0.16\"\n\t\t\t\t\t\t\tfill=\"#000000\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\td=\"M100.899906,42.4648024 C91.1016204,48.4721303 82.3855283,56.3273858 76.5871222,65.36024 C73.8252914,69.662826 71.5532049,74.1995784 69.4361743,78.7575668 C68.3739624,81.0447336 67.4048638,83.3600237 66.475928,85.6893613 C65.8894735,87.1594817 64.9889112,88.7449062 65.8359233,90.2878445 C66.3526427,89.9857996 66.5492598,90.0943892 66.224362,90.6353417 C68.9162579,91.3693254 72.6583769,89.3003017 74.9906073,88.5362205 C79.7539763,86.9753339 84.5203425,85.5025753 89.3986046,84.2045441 C93.8552588,83.0189378 103.79801,81.0907786 107.68879,80.1941723 L110.425245,77.215348 L111.487657,79.1702128 C113.645649,79.0042337 125.56636,77.212708 125.56636,77.212708 L126.896323,73.9898699 C128.612526,75.7530625 129.834989,76.668872 129.834989,76.668872 C132.391211,76.460454 143.488488,76.2113208 146.119841,76.2427023 C146.119841,76.2427023 153.460212,76.5012269 155.240756,76.5714137 L156.907605,75.9328981 L157.456495,77.0098503 C158.910143,77.601117 167.699367,80.6008734 169.434153,81.138079 L171.980784,80.2323702 C173.100342,82.9256202 175.920119,82.586016 178.257345,84.7132858 C181.34867,87.5271086 187.825645,89.5285179 190.917768,91.9756241 C192.024938,92.8519441 193.059576,93.7675012 194.100208,94.7015404 C195.255933,95.7385867 195.085291,95.890424 195.460742,97.0802141 C195.573237,97.4361731 196.715775,99.2788807 197.202722,99.4296139 C198.935909,99.9660566 187.048767,68.9435732 183.785603,64.9771662 C180.417736,60.8830307 158.574915,33.3231248 129.612057,34.2254634\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t<g stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(26.000000, 16.000000)\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill-opacity=\"0.24\"\n\t\t\t\t\t\t\t\tfill=\"#000000\"\n\t\t\t\t\t\t\t\tmask=\"url(#" + id.mask1 + ")\"\n\t\t\t\t\t\t\t\td=\"M62.6794556,184.462132 C69.755442,174.755405 62.148959,147.786913 56.1278159,137.800593 C72.9649824,130.137708 106.213574,131.553467 155.87359,142.047871 C151.079203,150.900348 149.123448,158.803527 150.006324,165.757409 C145.469118,171.332534 141.720304,177.127222 138.759883,183.141474 L103.888915,191.746789 C81.8528509,194.400378 68.1163643,191.97216 62.6794556,184.462132 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill-opacity=\"0.6\"\n\t\t\t\t\t\t\tfill=\"#FFFFFF\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\td=\"M79.0404573,170.094305 C78.9812573,169.892618 78.8354573,169.667152 78.6348573,169.428842 C78.7708573,169.650142 78.9074573,169.871269 79.0404573,170.094305 Z M56.409572,120.375261 C57.2661752,126.5406 58.7356083,132.465374 60.8662263,138.377476 C62.9277086,144.09848 65.285915,149.836145 68.678559,155.067858 C71.8402179,159.943234 75.6031176,164.4923 78.6348973,169.428772 C77.8378388,168.48126 76.1633964,167.329804 75.5207941,166.65115 C74.4643769,165.535276 73.4750971,164.385382 72.5369698,163.193485 C70.6143583,160.749982 68.9003527,158.193833 67.243494,155.609567 C63.9913192,150.536843 61.5529875,145.034363 59.4397533,139.530668 C55.2902133,128.722708 51.1268862,115.61687 54.7738936,104.200899 C54.4921557,104.935095 55.2326668,106.688314 55.3491585,107.497319 C55.5525692,108.91069 55.7349995,110.333608 55.8267142,111.757219 C56.0123415,114.639678 56.0109428,117.505994 56.409572,120.375261 Z M68.8553146,165.041212 C67.4967783,163.309515 64.9739252,161.944396 63.4129772,160.279177 C61.9976938,158.769648 60.9019131,157.07822 59.9070386,155.339754 C57.6517365,151.39922 56.1697151,147.374505 55.6897616,142.969154 C55.7992598,143.49177 56.6083072,144.395543 56.8630702,144.824778 C57.4766993,145.858902 58.0839345,146.89424 58.6508072,147.948671 C59.7481863,149.989667 60.6639345,152.099744 61.7731027,154.135533 C63.8106073,157.875421 66.402796,161.495374 68.8553146,165.041212 Z M73.5320242,183.498629 C74.6465874,185.460651 75.5723262,187.464851 76.1569823,189.60079 C76.4654954,190.727599 76.7138643,191.869508 76.9272658,193.013501 C76.9962017,193.382508 77.0093894,194.709963 77.1846264,195.283955 C74.9700864,190.992812 73.2798587,186.448779 70.6421125,182.34214 C68.0381348,178.288092 64.6948448,174.560527 61.1958996,171.061031 C57.5013364,167.36575 53.7855929,163.879099 51.8038364,159.214262 C50.0788411,155.153619 49.4126608,150.996124 49.8138875,146.658464 C49.8160855,148.56911 51.5706533,151.280256 52.1766896,153.126681 C53.0063178,155.654018 53.6655046,158.231689 54.9143429,160.634229 C57.039566,164.722991 60.873,167.876911 64.0792175,171.321558 C67.631513,175.137643 71.0245567,179.084252 73.5320242,183.498629 Z M59.2286696,174.179456 C60.2874847,175.196917 61.2164205,176.28259 62.0352588,177.454354 C62.9328239,178.738937 63.5914112,180.09017 64.1800637,181.504062 C64.6869921,182.721301 64.9105841,184.986375 65.7074428,186.0021 C63.1288415,182.856337 60.4739112,179.884838 58.6955655,176.312444 C58.0893295,175.089825 57.1480051,173.289222 56.4530516,171.817184 C56.6844363,172.409922 58.7059559,173.677148 59.2286696,174.179456 Z M48.9033745,180.528033 C51.7405353,184.777866 55.450684,188.609052 57.877027,193.056233 C60.7067946,198.242644 61.9518364,203.862978 62.202803,209.595957 C62.3216924,212.307277 62.3152983,215.0606 61.9498383,217.764455 C61.7540204,219.211673 61.4399126,220.650211 61.0810465,222.075732 C60.944973,222.616747 60.2406283,224.002173 60.1037556,224.846586 C59.8140251,214.305575 61.5584024,203.763696 56.0767017,193.942823 C53.4811162,189.292219 49.4912277,185.327212 46.398105,180.924811 C43.6164926,176.966226 40.8998197,173.083838 38.6846803,168.851361 C40.0408188,170.567263 42.485145,171.915893 44.0009349,173.619818 C45.8995688,175.753674 47.3488206,178.199606 48.9033745,180.528033 Z M60.1036574,224.846603 C60.0710574,225.050581 60.0700574,225.224111 60.1172574,225.346603 C60.1116574,225.180112 60.1082574,225.01327 60.1036574,224.846603 Z M50.5604331,202.493815 C50.5610325,202.989874 51.376474,204.011501 51.5992667,204.528562 C52.1207816,205.73799 52.5455864,207.007473 52.7573894,208.289626 C53.1752007,210.818004 52.6269108,213.429521 51.6899823,215.850286 C49.7909489,220.757251 46.8161162,225.102895 43.0767946,229.15 C44.4121524,227.402335 44.9438578,224.56136 45.8833838,222.612182 C46.8478866,220.611106 47.8829238,218.6411 48.7335325,216.600624 C50.652947,211.995842 50.4835046,207.289696 50.5604331,202.493815 Z M41.9174331,221.200893 C42.3180604,220.652936 42.1102537,218.018161 42.3222565,217.328919 C42.714092,216.055618 43.3920613,214.827097 44.170737,213.693866 C43.7551236,214.392828 44.3691524,216.160106 44.1663411,217.067177 C43.8338504,218.55553 42.9962296,219.998582 41.9174331,221.200893 Z M99.6077106,42.748374 C99.5269106,42.804974 99.4471106,42.908174 99.3681106,43.044574 C99.4481106,42.945974 99.5267106,42.846574 99.6077106,42.748374 Z M84.8469387,64.3317143 C86.2672175,63.085837 87.0237138,60.1410677 88.0032026,58.5522183 C89.1283559,56.7269681 90.4213532,54.9730547 91.6476125,53.1960567 C94.0795502,49.6719145 96.3744154,46.2123399 99.3680307,43.0054816 C98.7464089,43.9398028 98.1949219,46.7736616 97.8536394,47.5189663 C96.9620688,49.4667561 95.8988578,51.3334892 94.6328355,53.1235049 C91.7722965,57.1680066 88.7029517,60.9266404 84.8469387,64.3317143 Z M84.3117165,54.1218036 C85.0620186,52.7952168 86.2055548,51.6739619 87.4917584,50.7082248 C86.9188913,51.2107066 86.6607314,53.2831189 86.2670976,53.9831221 C85.472237,55.3952784 84.3143141,56.6130375 83.0714703,57.7545999 C83.7352528,57.1726235 83.842553,54.9516363 84.3117165,54.1218036 Z M203.505599,152.127968 C203.498805,152.179518 203.485417,152.282271 203.464637,152.438483 C203.462638,150.913159 202.784469,149.237352 202.704144,147.668984 C202.592048,145.478545 202.906556,143.353715 203.787137,141.277137 C205.526519,137.175704 208.790083,134.069516 212.950612,131.638511 C211.805877,132.313173 210.683921,134.851617 209.949604,135.906916 C208.84663,137.493162 207.668126,139.094161 206.735993,140.757819 C204.793001,144.225725 204.229725,148.375062 203.505599,152.127968 Z M201.998401,130.481881 C201.761221,131.706583 201.448912,132.921738 201.009121,134.107908 C200.534762,135.386937 199.915938,136.630558 199.22578,137.835993 C198.79578,138.586852 197.246621,140.162684 197.24762,140.993211 C197.165296,136.095098 198.975812,131.657983 202.419809,127.7355 C202.04236,128.392806 202.137271,129.766083 201.998401,130.481881 Z M201.196906,165.719988 C204.852905,165.202752 208.302496,166.981313 210.618342,169.271033 C211.855791,170.494694 212.955568,171.900428 213.683091,173.404055 C214.229783,174.534509 214.228783,176.387356 214.9631,177.323587 C213.165772,174.905078 210.886892,172.951214 208.638584,170.859535 C207.075238,169.404855 203.950944,165.678852 201.196906,165.719988 Z M200.41897,176.096698 C200.227148,176.031957 198.485169,175.539368 198.081944,175.776984 C198.679388,175.510035 199.412106,175.184941 200.068895,175.097983 C204.35311,174.529024 209.561066,178.239232 210.13633,181.81909 C209.657576,180.592826 207.111145,179.578489 205.959616,178.968568 C204.136711,178.002484 202.395531,176.832456 200.41897,176.096698 Z M202.227687,183.908269 C202.969797,184.089822 204.54713,185.083504 205.275252,185.072742 C202.345977,185.143906 199.703236,184.81829 196.883858,184.158729 C197.036117,184.200212 198.643022,183.702937 198.694974,183.695647 C199.910043,183.523987 201.052381,183.620492 202.227687,183.908269 Z M190.882541,197.765243 C195.171151,197.522941 200.218656,198.149351 204.314046,199.181739 C206.346955,199.694288 208.253382,200.468058 210.006351,201.476666 C211.420436,202.290531 213.935896,203.408661 214.881616,204.614097 C211.142494,198.162369 203.032039,194.811448 194.722769,196.473197 C193.615199,196.695886 191.914181,197.749796 190.882541,197.765243 Z M189.923153,210.197773 C192.611453,209.233424 195.584487,208.30431 198.505969,208.169273 C201.277391,208.042395 204.351332,208.458613 206.915546,209.342078 C206.033367,209.102206 203.92333,209.674289 202.995793,209.779298 C201.699199,209.926138 200.399608,210.077837 199.099817,210.196558 C197.506299,210.342009 195.898395,210.422718 194.298883,210.41942 C193.159543,210.41699 190.979371,209.87858 189.923153,210.197773 Z M179.458947,227.410508 C179.711912,231.383499 182.010574,234.84533 185.39043,237.491388 C188.973097,240.296087 193.769036,241.572686 196.369816,245.319691 C197.637437,247.145462 198.312809,249.270812 198.20431,251.417686 C198.148362,252.524014 197.870221,253.636069 197.5695,254.712196 C197.371684,255.420184 196.66734,256.580144 196.667939,257.270775 C196.69911,253.384221 196.751661,248.859281 194.031592,245.598095 C191.300932,242.324066 186.539161,241.170701 183.203065,238.482813 C179.924714,235.841442 177.437828,232.389157 176.877749,228.498264 C176.425569,225.354411 176.648562,219.871892 179.90773,217.738557 C179.246345,218.128392 179.377224,220.111764 179.361438,220.669267 C179.298097,222.900321 179.317079,225.185182 179.458947,227.410508 Z M177.005789,242.672904 C177.402221,243.19257 179.575399,243.82436 180.213805,244.182606 C181.67045,245.000116 183.07914,245.92923 184.234665,247.059684 C186.55111,249.326146 188.044121,252.504886 188.151821,255.553623 C188.151821,254.833139 186.505553,253.096583 186.043183,252.481107 C185.275297,251.458613 184.407904,250.511969 183.524526,249.564283 C181.371329,247.253734 179.135209,244.999942 177.005789,242.672904 Z M229.167807,153.791051 C230.371887,154.841663 231.178936,156.147595 231.842519,157.49987 C233.373295,160.619424 233.65823,164.217333 232.431571,167.500388 C232.634582,166.795698 232.030544,165.31585 231.860502,164.601614 C231.488248,163.038626 230.906389,161.56225 230.298355,160.059664 C229.118053,157.144401 228.163741,154.41208 226.113648,151.858014 C226.644354,152.52556 228.442481,153.157872 229.167807,153.791051 Z M171.509602,41.9832998 C171.510002,42.3148163 172.426549,43.2758671 172.633357,43.6374111 C173.149677,44.5392749 173.557297,45.4857459 173.696967,46.4924453 C173.85542,47.6336606 173.6616,48.7505762 173.315522,49.8605491 C173.109914,50.5202844 172.131624,51.7949741 172.132423,52.3894475 C171.972572,48.891167 171.198691,45.5298324 171.509602,41.9832998 Z M179.146978,48.8048339 C179.312224,50.0477605 178.906202,51.4491555 178.183074,52.546805 C178.314952,52.2364639 177.729296,50.1642252 177.710314,49.7849773 C177.650969,48.6118253 177.77925,47.4056953 177.856378,46.2332376 C177.857178,46.8738803 179.039478,47.9958294 179.146978,48.8048339 Z M118.377388,50.3732542 C117.142336,51.8857333 115.738043,53.3032702 114.227248,54.6164922 C113.2036,55.5060327 111.243024,56.5057893 110.46315,57.5267214 C113.964293,51.8147436 118.00913,46.8878178 122.764906,41.8951095 C122.049172,42.8155452 121.862346,44.8121078 121.337434,45.8885819 C120.563354,47.4758692 119.527518,48.9645693 118.377388,50.3732542 Z M124.275361,52.8515919 C124.845431,52.5155626 125.378934,50.859195 125.81333,50.3013446 C126.54465,49.3623371 127.437619,48.4554398 128.390733,47.6728177 C128.186123,47.8927295 127.788693,49.7158968 127.5657,50.0739694 C126.843372,51.2344508 125.56616,52.1809219 124.275361,52.8515919 Z\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	mask1: (0, _common.uid)("mask-"),
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M85.718098,185.073467 C86.8059563,185.024663 87.900098,185 89,185 L89,185 L93,185 L93,166.610951 C81.2286384,161.018987 71.7176526,151.441235 66.2110974,139.621749 C63.4467803,131.013632 63.6113966,121.686985 63.000708,112.826222 C62.1957105,101.145772 62.8887367,89.7481762 65.5369124,78.2476834 C67.9263583,67.8722634 71.3610508,62.3068417 79.1631677,53.9925443 C83.5224388,49.3467459 90.0678681,49.0779432 96.5828586,47.4293172 C103.17612,45.7598396 109.194306,43.2191332 113.317676,38.4387068 C122.400941,48.8499369 146.671683,45.1030183 155.554378,56.4493915 C166.355804,70.2471725 166.476604,79.1499376 167.747424,95.0917937 C168.700138,107.043152 167.218859,128.656014 166.803718,141.630125 C161.185514,152.525228 152.097197,161.339247 141,166.610951 L141,185 L145,185 C151.635699,185 158.061736,185.89767 164.1633,187.578199 C162.113115,190.752042 159.66929,193.757151 157.112045,196.551224 C153.280561,200.738743 149.430596,205.07041 145.111547,208.917959 C140.170678,213.319433 135.443967,216.514694 132.444114,221.999991 C131.086326,224.482676 128.707208,227.093643 131.224932,229.817026 C133.524148,232.304244 137.149083,231.79157 139.609734,229.99245 C143.247171,227.332528 145.947527,223.133676 149.2996,220.076669 C146.062216,225.891963 141.557817,234.561189 143.870623,241.081807 C144.65714,243.298862 145.455615,243.254893 146.671536,244.732627 C148.591355,244.77569 149.350151,245.644199 148.948467,247.337701 C149.128382,247.821818 149.308297,248.305028 149.488756,248.789145 C150.944383,251.382887 153.73062,253.199684 157.268587,251.977153 C168.828809,247.982737 155.493353,230.015568 168.22112,224.674872 C170.498594,227.504326 167.135107,235.453723 167.044334,238.930932 C166.932906,243.218176 167.166089,252.943574 173.685972,254.109896 C182.182202,255.630241 178.905139,247.513126 179.240509,244.059941 C179.630235,240.043766 182.101213,234.747946 184.111805,231.19141 C182.888817,234.970512 180.603189,243.344644 186.927937,245.060811 C194.245208,247.046687 193.409228,238.475373 194.5197,234.910224 C194.748535,240.185647 201.565196,252.659813 207.724704,242.806586 C210.898493,237.730613 208.733533,229.366 208.385661,223.95323 C212.799287,228.512903 216.32584,222.602417 216.224196,219.322843 C217.902135,224.075166 224.207315,237.325369 229.795009,226.807615 C233.19274,220.412559 229.568892,211.82266 227.311529,205.648358 C233.255792,206.168285 232.061613,200.411919 231.17617,197.553001 C229.869476,193.331485 230.56685,192.711833 230.835907,188.347077 C239.08591,193.151981 238.833159,180.113465 238.377664,176.915484 C237.232404,168.863643 230.969077,161.653567 226.135287,154.862787 C222.669068,149.991702 216.20028,141.510593 218.096726,135.636824 C220.053506,138.105004 224.604107,138.079166 226.413041,135.494944 C227.944765,133.306899 226.321725,129.699141 225.582497,127.51291 C223.561578,121.532617 219.523001,117.668749 215.871976,112.532035 C208.763972,102.531035 209.78639,89.3991407 209.129238,78.2191259 C208.309564,64.2703984 205.315147,50.5387982 192.648801,40.3918378 C185.862036,34.9554966 177.590835,30.4783232 171.278589,24.7101717 C169.557166,23.1372455 168.829352,21.1885396 167.213378,19.672275 C165.399552,17.9706136 164.553244,18.373591 163.055221,15.951194 C160.386934,11.6367527 157.252824,7.59700681 150.804147,7.39438491 C146.585112,7.26247669 141.249081,10.823092 137.446405,10.3027118 C134.324254,9.87616325 132.352254,5.42437419 129.78996,3.93032097 C125.824219,1.61762086 123.056462,2.51559399 118.817859,3.85507435 C112.508874,5.8486563 108.488235,6.54355423 102.06293,4.16059373 C97.6906135,2.53871192 93.5645254,-0.846479064 88.4018873,0.357013447 C84.3524397,1.30167574 82.5435053,4.56991717 80.1584078,7.07481345 C77.6972133,9.66084915 78.8865008,8.80593884 75.2887432,9.38026087 C71.6083661,9.9681817 68.7020041,10.5017074 65.9103313,12.9118655 C61.397779,16.8074642 64.5237352,22.8666297 60.95696,26.3007763 C59.0317058,28.154744 55.0219374,29.0377585 52.7922952,30.954734 C50.3582782,33.0471337 48.3677981,35.5901066 46.5441878,38.0655389 C42.992632,42.8881215 40.5678554,48.1435988 37.9642508,53.3460408 C33.1206766,63.0274694 28.8027153,73.0171372 26.9622549,83.4183949 C26.0170215,88.7645307 24.4238764,93.9946236 23.4503783,99.3303337 C22.6997357,103.444873 23.0198867,107.95151 21.5539323,111.946834 C19.8145722,116.686464 15.6553275,121.042608 13.4023127,125.704271 C10.4144183,131.887186 8.40763163,137.818976 7.77222166,144.475128 C7.14822625,151.019317 8.88486854,156.786109 9.65073052,163.202016 C10.0942673,166.919017 9.32731826,167.341033 6.77100254,170.849066 C4.80389503,173.548878 2.81124068,176.221946 1.54639979,179.227278 C-0.815325022,184.841763 -0.684329469,190.304395 3.42490864,195.240301 C6.24484612,198.627758 15.7238148,202.173415 14.9476254,194.622463 C14.5872518,191.114429 10.1763434,189.527451 11.0188459,185.502664 C11.6020751,182.715366 14.443211,180.786605 17.8920358,179.924895 C20.328227,179.316576 21.5278419,179.343321 22.6269,182.014575 C23.6232272,184.435613 22.3024007,189.72146 21.996382,192.265793 C21.8735397,193.288422 21.691994,194.184582 21.5686081,195.131511 C20.7005588,201.806248 20.5407551,207.947459 16.8870119,214.076432 C14.6426939,217.842389 10.2513533,223.149088 15.258536,226.778604 C19.2177543,229.649308 26.0490909,227.900051 29.1359115,224.896532 C32.3923196,228.923586 31.668311,233.320073 30.4502154,237.765516 C29.6941373,240.525616 27.6264731,244.567629 30.8812505,246.798736 C35.2888976,249.820386 42.4838692,245.061265 45.7886533,242.659719 C47.6992316,246.926565 49.4918595,262.485842 57.0243756,253.211017 C59.2224919,250.505765 62.8816706,247.867147 63.5785017,244.677325 C64.7346326,239.386945 63.9046317,233.818695 64.3834993,228.474826 C66.7870774,235.472308 68.4211208,238.262053 69.8925107,245.444931 C70.7774101,249.766172 71.124195,264.264472 80.0666799,262.354749 C86.9474795,260.885627 82.5468986,251.830921 81.6679782,248.139757 C79.9846038,241.070655 79.1724081,238.077382 77.5455629,230.999667 C80.078506,235.625521 82.2918416,240.371497 84.725315,245.034067 C87.115848,249.613685 97.8039252,259.060923 100.930715,255.083614 C104.057505,251.106306 96.435013,245.438857 94.7010885,240.623528 C91.0924599,230.599863 86.7201436,220.618354 85.6835937,210.116466 C85.1851583,205.067237 86.1200644,200.404213 86.5299011,195.413459 C86.8096981,192.003861 86.3887166,188.510775 85.718098,185.073467 Z\"\n\t\t\t/>", "<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path1 + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(16.000000, 14.000000)\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill-opacity=\"0.24\"\n\t\t\t\t\t\t\t\tfill=\"#000000\"\n\t\t\t\t\t\t\t\tmask=\"url(#" + id.mask1 + ")\"\n\t\t\t\t\t\t\t\td=\"M85.718098,185.073467 C86.8059563,185.024663 87.900098,185 89,185 L89,185 L93,185 L93,166.610951 C81.2286384,161.018987 71.7176526,151.441235 66.2110974,139.621749 C66.7437304,141.280375 67.3851037,142.912325 68.1617154,144.509125 C73.916823,156.341882 81.4183567,166.92083 84.4877837,179.589912 C84.9233139,181.387079 85.3569126,183.222183 85.718098,185.073467 Z M164.1633,187.578199 C158.061736,185.89767 151.635699,185 145,185 L145,185 L141,185 L141,166.610951 C151.900717,161.432585 160.863061,152.836228 166.502046,142.206866 C166.424719,145.200638 166.492065,148.178617 166.874747,151.055581 C167.944997,159.099715 170.876362,166.366 169.515856,174.635875 C168.770949,179.167686 166.790265,183.511457 164.1633,187.578199 Z\"/>\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill-opacity=\"0.300000012\"\n\t\t\t\t\t\t\t\tfill=\"#FFFFFF\"\n\t\t\t\t\t\t\t\tmask=\"url(#" + id.mask1 + ")\"\n\t\t\t\t\t\t\t\td=\"M49.3607552,108.248307 C49.2357387,105.826133 47.3806025,97.711311 49.6885159,96.3093564 C52.2181977,94.7715832 51.6909542,104.01582 51.7170446,104.962941 C51.7605286,106.500263 52.928074,118.098087 50.7897482,118.046647 C48.6579451,117.995659 49.4428313,109.828495 49.3607552,108.248307 Z M57.7950752,165.998415 C57.7863784,167.012316 56.722651,166.95095 55.9633116,166.68563 C55.0256879,166.358041 55.5996767,164.201639 55.5502136,163.49457 C55.4197616,161.635525 54.5272525,156.156756 55.8904759,154.62169 C58.6158357,151.553363 57.8059462,164.569838 57.7950752,165.998415 Z M32.1210881,179.161492 C34.0501471,179.106894 32.2645853,141.329473 29.29952,141.371437 C27.2171799,141.400766 30.6611128,179.198041 32.1210881,179.161492 Z M34.3531219,198.516092 C31.9555228,198.516092 32.3963419,206.978357 33.8084848,207.654742 C35.9484412,208.679924 37.0349977,198.516092 34.3531219,198.516092 Z M49.5898072,202.054956 C49.6110057,203.112626 48.4113908,203.129321 47.6107416,202.798574 C46.701926,202.423155 47.082411,199.293461 47.0465367,198.598576 C46.9334783,196.41149 45.0299661,187.926664 46.7611729,186.367683 C48.7353466,184.59031 48.7782871,186.540953 49.3093354,187.8662 C50.8731288,191.768841 49.505557,197.898275 49.5898072,202.054956 Z M190.242397,122.33319 C190.352194,123.795609 191.311016,133.35074 189.717871,134.079016 C186.975661,135.332969 188.156795,129.428696 188.167666,128.666127 C188.274745,121.229044 187.19906,113.85423 186.381017,106.456855 C186.225562,105.052193 183.755671,94.2318284 185.564605,93.3352452 C188.272028,91.9937546 187.86817,95.5809897 188.023082,96.7451491 C189.152035,105.213731 189.651014,113.824449 190.242397,122.33319 Z M187.023004,155.587221 C184.490605,155.085459 183.16543,163.680835 184.321017,164.602687 C186.238118,166.132789 189.670093,156.113348 187.023004,155.587221 Z M186.754925,193.385172 C185.616188,193.158658 177.321615,209.117567 178.004314,210.020016 C179.303942,211.738731 190.833725,194.199633 186.754925,193.385172 Z M166.332555,200.758587 C164.551342,199.95631 156.998715,211.509915 158.926686,212.377619 C160.674743,213.163653 168.488275,201.725562 166.332555,200.758587 Z M208.425286,157.447168 C206.274459,157.447168 206.370123,169.269251 208.025233,170.015125 C209.736329,170.785817 210.967469,157.447168 208.425286,157.447168 Z M178.139603,48.8435128 C177.531371,47.9735519 170.964743,40.2233192 175.668081,41.3306242 C177.959145,41.8698375 181.116083,48.6833281 182.149372,50.7413632 C182.743472,51.9235715 186.133593,57.2006425 182.541271,56.8270286 C181.563968,56.7259543 178.951667,50.0063184 178.139603,48.8435128 Z M155.04775,33.3564939 C154.201443,33.7373274 154.215575,34.0946972 155.090147,34.4281522 C155.936998,34.0473186 155.922322,33.6904 155.04775,33.3564939 Z M70.6188876,41.486432 C68.6137316,43.3296843 61.07578,54.0047545 58.4928303,54.1116947 C53.7862308,54.3066237 62.7711125,45.0867526 63.7902688,43.9135688 C64.2452201,43.387441 66.275923,40.8222295 67.5119557,40.1914176 C68.7729918,39.5475202 72.9556091,39.3322861 70.6188876,41.486432 Z M43.2540252,69.9805849 C41.0711283,69.5519216 37.4190158,80.245492 38.693097,81.5359942 C40.6167205,83.4857354 45.7005438,70.4661025 43.2540252,69.9805849 Z M68.1928608,188.992366 C68.6054153,190.333405 72.8244505,200.071733 71.7639844,201.353211 C70.1425747,203.310623 69.6772959,200.536495 69.1467911,199.385872 C67.9689182,196.830588 64.9087316,190.540066 65.4006444,187.850317 C65.8784249,185.241788 67.775958,187.648619 68.1928608,188.992366 Z M59.986234,211.816206 C57.6913658,211.816206 57.9560747,221.618156 59.3225594,222.200687 C61.4391432,223.102685 62.8012795,211.816206 59.986234,211.816206 Z M221.791072,203.446532 C221.927503,204.049819 223.845148,209.009228 221.128485,208.290879 C219.566322,207.878008 219.325529,203.506094 218.926564,202.180847 C217.697597,198.095009 213.646519,193.018282 213.294842,188.98659 C212.955123,185.090266 215.135302,186.575246 216.80998,189.875503 C219.046145,194.283064 220.722996,198.746577 221.791072,203.446532 Z M202.089015,202.950817 C199.957212,202.941341 199.853937,213.724254 201.187265,214.35281 C203.051098,215.231344 204.808395,202.950817 202.089015,202.950817 Z M208.249611,114.654432 C209.831341,114.242012 204.839921,101.328868 203.071753,101.471004 C200.377376,101.688494 205.847663,115.273512 208.249611,114.654432 Z M181.434114,170.746831 C180.587263,171.127665 180.601939,171.485034 181.476511,171.818489 C182.322818,171.437656 182.308686,171.080286 181.434114,170.746831 Z M157.216135,225.987499 C158.009718,225.987499 158.337478,224.763778 157.165041,224.736253 C156.389939,224.742571 155.980645,225.987499 157.216135,225.987499 Z M58.6844317,170.628746 C58.7137834,168.720066 56.215084,170.119764 56.230847,171.730185 C56.26346,174.943806 58.6317074,173.476424 58.6844317,170.628746 Z M52.5187808,122.883143 C51.7148704,122.883143 51.3854791,124.119498 52.5698745,124.148828 C53.3536737,124.142962 53.7673152,122.883143 52.5187808,122.883143 Z M33.3865269,185.392722 C33.3087993,183.451554 31.6863025,185.43604 31.7770753,185.438747 C32.0651568,185.445967 33.4474045,186.856043 33.3865269,185.392722 Z M37.5995831,84.0632577 C35.2318792,84.0632577 35.5754028,89.8168218 37.0864719,90.1859235 C39.6063697,90.801845 39.9509805,84.0632577 37.5995831,84.0632577 Z M50.212933,208.325849 C47.9273051,208.325849 47.7729369,216.139704 49.3503191,216.625673 C51.8011861,217.379669 52.5931385,208.325849 50.212933,208.325849 Z M31.4567613,213.932223 C30.5849071,214.323435 30.5990394,214.691634 31.4991582,215.035467 C32.371556,214.644256 32.3568801,214.276959 31.4567613,213.932223 Z M201.455507,217.282881 C199.135636,217.282881 199.226409,226.836207 200.65051,227.481458 C202.64099,228.383907 204.139014,217.282881 201.455507,217.282881 Z M177.94561,226.161536 C175.534966,225.679629 174.272299,233.567034 175.395817,234.451885 C177.248236,235.910694 180.42148,226.656078 177.94561,226.161536 Z M157.46508,233.451204 C155.467534,233.451204 155.95836,237.025805 157.110686,237.557799 C159.104971,238.478297 159.694179,233.451204 157.46508,233.451204 Z M86.479514,19.5090896 C84.8080977,19.5090896 74.3192131,24.2532644 78.2392958,25.6588288 C80.6358078,26.5179603 90.7371413,19.5090896 86.479514,19.5090896 Z\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	mask1: (0, _common.uid)("mask-"),
	path1: (0, _common.uid)("path-"),
	path2: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<rect id=\"" + id.path2 + "\" x=\"0\" y=\"0\" width=\"264\" height=\"280\"/>\n\t\t<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z\"\n\t\t\t/>\n\t\t<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path2 + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t<g mask=\"url(#" + id.mask1 + ")\">\n\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(57.000000, 12.000000)\">\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill=\"" + color + "\"\n\t\t\t\t\t\t\td=\"M132,85.9365741 L132,86.1659169 C137.155374,87.0308248 141.196116,91.1828748 141.893354,96.3931952 C144.449672,93.4871212 146,89.6746099 146,85.5 C146,83.370043 145.596416,81.3343479 144.861548,79.4652142 C148.026608,76.4588698 150,72.2098901 150,67.5 C150,61.6639649 146.970105,56.5355997 142.397534,53.6021248 C143.424844,51.4510861 144,49.0427105 144,46.5 C144,38.865183 138.814518,32.4415002 131.77335,30.5587463 C131.922635,29.560863 132,28.5394662 132,27.5 C132,16.1781626 122.821837,7 111.5,7 C108.870853,7 106.357304,7.49493913 104.047446,8.3967274 C100.317449,3.30576666 94.2947759,0 87.5,0 C83.2377504,0 79.2793114,1.30076749 76,3.52698535 C72.7206886,1.30076749 68.7622496,0 64.5,0 C57.7052241,0 51.6825514,3.30576666 47.9525545,8.3967274 C45.6426956,7.49493913 43.1291474,7 40.5,7 C29.1781626,7 20,16.1781626 20,27.5 C20,28.5394662 20.0773647,29.560863 20.2266501,30.5587463 C13.1854816,32.4415002 8,38.865183 8,46.5 C8,48.6917361 8.4273349,50.7836628 9.20323008,52.6970055 C3.75045759,55.3899422 0,61.0069879 0,67.5 C0,72.9379417 2.63063706,77.7614652 6.68874609,80.7674054 C6.2406808,82.2665254 6,83.8551557 6,85.5 C6,89.6746099 7.55032816,93.4871212 10.1066457,96.3931952 C10.8038839,91.1828748 14.8446259,87.0308248 20,86.1659169 L20,85.9365741 C20.0276665,85.957925 20.0554443,85.9790669 20.0833333,86 C22.985911,38.8525302 68.5527463,55.7423492 76.000002,29.3361688 C83.4472619,55.7423461 129.014089,38.8525344 131.916667,86 C131.944556,85.9790669 131.972333,85.957925 132,85.9365741 Z M52,168.610951 L52,172.811832 C51.1847358,172.935746 50.3498715,173 49.5,173 C42.6790709,173 36.8248202,168.861157 34.3116389,162.957863 C25.7536314,162.348807 19,155.213101 19,146.5 C19,145.029028 19.1924867,143.603013 19.5536459,142.245771 C12.8575367,140.144362 8,133.88945 8,126.5 C8,122.755519 9.24731211,119.302363 11.3491137,116.533355 C13.0865598,119.870864 16.346706,122.289132 20.2085808,122.867187 C21.9518066,143.114792 34.4692178,160.282984 52,168.610951 Z M100,168.610951 L100,172.811832 C100.815264,172.935746 101.650128,173 102.5,173 C109.320929,173 115.17518,168.861157 117.688361,162.957863 C126.246369,162.348807 133,155.213101 133,146.5 C133,145.029028 132.807513,143.603013 132.446354,142.245771 C139.142463,140.144362 144,133.88945 144,126.5 C144,122.755519 142.752688,119.302363 140.650886,116.533355 C138.91344,119.870864 135.653294,122.289132 131.791419,122.867187 C130.048193,143.114792 117.530782,160.282984 100,168.610951 Z\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t</g>\n\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(67.000000, 0.000000)\">\n\t\t\t\t\t\t<g opacity=\"0.899999976\" transform=\"translate(120.000000, 64.500000) scale(1, -1) rotate(-20.000000) translate(-120.000000, -64.500000) translate(107.000000, 57.000000)\" fill-rule=\"nonzero\">\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill=\"#5DD362\"\n\t\t\t\t\t\t\t\td=\"M3.61111111,10 C3.61111111,10 1.95,0 13,0 C20.2222222,0 25.2777778,5.71428571 25.2777778,5.71428571 C25.2777778,5.71428571 19.8611111,14.2857143 11.5555556,14.2857143 C5.05555556,14.2857143 3.61111111,10 3.61111111,10 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill=\"#42BC53\"\n\t\t\t\t\t\t\t\td=\"M25.2777778,5.71428571 C25.2777778,5.71428571 19.8611111,14.2857143 11.5555556,14.2857143 C7.22222222,14.2857143 5.12777778,12.3571429 4.18888889,11.0714286 C2.09444444,12.8571429 1.37222222,14.5 1.37222222,14.5714286 C1.3,14.8571429 1.01111111,15 0.722222222,15 C0.65,15 0.505555556,15 0.433333333,14.9285714 C0.0722222222,14.7857143 -0.0722222222,14.3571429 0.0722222222,14 C0.144444444,13.7857143 1.95,9.85714286 7.43888889,7.28571429 C15.3833333,3.14285714 25.2777778,5.71428571 25.2777778,5.71428571 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<g  transform=\"translate(93.307368, 21.745191) scale(-1, -1) rotate(-120.000000) translate(-93.307368, -21.745191) translate(85.807368, 7.245191)\">\n\t\t\t\t\t\t\t<path fill=\"#5DD362\" d=\"M15,12 C15,5.9 9,0 9,0 C9,0 1.7,4.3 1,13 C0.3,21.7 6.8,23.7 6.8,23.7 C6.8,23.7 15,20.8 15,12 Z\" />\n\t\t\t\t\t\t\t<path fill=\"#42BC53\" d=\"M8,29 C8.1,29 8.2,29 8.3,28.9 C8.8,28.7 9.1,28.1 8.9,27.6 C8.4,26.1 8,24.7 7.8,23.2 C10,22.2 15,18.9 15,12 C15,5.9 9,0 9,0 C9,0 8.6,1.1 8,3 C8,3 8,3 8,3 C7.8,3.5 2.8,16.6 7.1,28.3 C7.2,28.7 7.6,29 8,29 Z\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<g  transform=\"translate(29.307368, 59.745191) rotate(-120.000000) translate(-29.307368, -59.745191) translate(21.807368, 45.245191)\">\n\t\t\t\t\t\t\t<path fill=\"#5DD362\" d=\"M15,12 C15,5.9 9,0 9,0 C9,0 1.7,4.3 1,13 C0.3,21.7 6.8,23.7 6.8,23.7 C6.8,23.7 15,20.8 15,12 Z\"/>\n\t\t\t\t\t\t\t<path fill=\"#42BC53\" d=\"M8,29 C8.1,29 8.2,29 8.3,28.9 C8.8,28.7 9.1,28.1 8.9,27.6 C8.4,26.1 8,24.7 7.8,23.2 C10,22.2 15,18.9 15,12 C15,5.9 9,0 9,0 C9,0 8.6,1.1 8,3 C8,3 8,3 8,3 C7.8,3.5 2.8,16.6 7.1,28.3 C7.2,28.7 7.6,29 8,29 Z\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<g transform=\"translate(13.000000, 42.000000) scale(-1, 1) translate(-13.000000, -42.000000) translate(0.000000, 29.000000)\">\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill=\"#4ACAD3\"\n\t\t\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\t\t\td=\"M24.4244753,20.9561089 C25.2601813,19.8468762 25.6139026,18.4784184 25.4208747,17.1027473 C25.2278468,15.7270762 24.5099609,14.5094298 23.401533,13.6738657 C23.1024018,13.448127 22.7077101,13.2632031 22.2596302,13.1057873 C22.7130645,12.9646232 23.1137179,12.7934099 23.4204085,12.5786628 C25.7688628,10.9342574 26.3421384,7.68540233 24.6974016,5.33647474 C23.0526648,2.98754715 19.8036678,2.41507618 17.4552135,4.05948158 C17.148523,4.2742286 16.8506035,4.59216121 16.5623958,4.97030055 C16.5681989,4.4950724 16.5289465,4.06126726 16.4191304,3.70296871 C16.0132035,2.3748027 15.1137169,1.2836091 13.8873598,0.632188307 C12.6611446,-0.0200371698 11.2540931,-0.154883395 9.92559572,0.250570203 C7.18364131,1.0892266 5.6350141,4.00181908 6.47286581,6.7436316 C6.58216096,7.10017888 6.78669399,7.47891226 7.05541252,7.86771872 C6.6074755,7.71655089 6.18638481,7.62487741 5.81372806,7.61849197 C2.94678437,7.56848119 0.573854142,9.85989025 0.523370073,12.7271653 C0.504358584,13.8654889 0.853022045,14.9255192 1.46080913,15.7935291 C2.38423063,17.1113044 3.90375474,17.9869973 5.63218533,18.0167186 C6.00484208,18.0231041 6.42832327,17.945939 6.88109576,17.8108811 C6.59932552,18.1901555 6.38197496,18.5617056 6.2605192,18.9140724 C5.69762142,20.5489044 5.99965968,22.2756795 6.92293929,23.5942594 C7.53072638,24.4622693 8.40824188,25.1534041 9.48422896,25.5235908 C12.1953795,26.4571485 15.1603315,25.0102268 16.0934159,22.2994077 C16.2148717,21.947041 16.272275,21.5203224 16.2839005,21.0473654 C16.5573519,21.4328579 16.8436218,21.7550638 17.1409542,21.9792407 C18.2505182,22.81542 19.6186447,23.168668 20.9943157,22.9756401 C22.3707915,22.7827541 23.5887693,22.0653415 24.4244753,20.9561089 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill=\"#FFFFFF\"\n\t\t\t\t\t\t\t\td=\"M11.178297,8.63990176 C10.9452631,7.87696713 11.3743225,7.06939957 12.1372572,6.83636565 C12.9001918,6.60333173 13.7077594,7.03239119 13.9407933,7.79532582 C14.1738272,8.55826044 13.7087793,11.9767907 13.7087793,11.9767907 C13.7087793,11.9767907 11.4113309,9.40283638 11.178297,8.63990176 Z M8.9355486,14.4373723 C8.1377895,14.4232361 7.50243635,13.7656743 7.5165726,12.9679152 C7.53070884,12.1701561 8.18827062,11.534803 8.98602972,11.5489392 C9.78378882,11.5630754 12.8914353,13.0618808 12.8914353,13.0618808 C12.8914353,13.0618808 9.73297629,14.4510353 8.9355486,14.4373723 Z M14.9931854,12.4189898 C14.9931854,12.4189898 16.7313261,9.4385895 17.3849366,8.98092648 C18.0385471,8.52326347 18.9389925,8.68203629 19.3966555,9.33564681 C19.8543185,9.98925733 19.6955457,10.8897027 19.0419352,11.3473657 C18.3883247,11.8050287 14.9931854,12.4189898 14.9931854,12.4189898 Z M11.9202121,19.2569641 C11.1657288,18.9973982 10.7651265,18.1754621 11.0246924,17.4209789 C11.2842584,16.6664957 13.670556,14.1745805 13.670556,14.1745805 C13.670556,14.1745805 14.0160946,17.6074345 13.7565287,18.3619178 C13.4966313,19.1159277 12.6746953,19.5165301 11.9202121,19.2569641 Z M17.2395979,17.2963365 C16.6023761,16.8164172 14.9694239,13.7771777 14.9694239,13.7771777 C14.9694239,13.7771777 18.3408473,14.5093818 18.978069,14.9893011 C19.6152908,15.4692204 19.7426018,16.3753059 19.2623511,17.0120544 C18.7824319,17.6492761 17.8763463,17.7765872 17.2395979,17.2963365 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<g transform=\"translate(20.000000, 16.000000)\">\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill=\"#FDB599\"\n\t\t\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\t\t\td=\"M30.5258511,33.0981022 L30.7843694,30.7838831 L33.0980227,30.5247992 C35.9451175,30.2051869 38.2084249,28.4080043 39.1519882,25.7142103 C40.2177395,22.6719541 39.217042,19.3553405 36.6052724,17.4325757 L34.7311566,16.052869 L35.6634061,13.9191036 C36.8915092,11.1127382 36.3082875,8.02353005 34.142278,5.85752056 C31.9762685,3.69151107 28.8870604,3.10828939 26.0801294,4.33582677 L23.9469296,5.26864203 L22.5666572,3.39396053 C20.6438924,0.78558504 17.3267131,-0.217940904 14.2844569,0.847810436 C11.5917943,1.79137373 9.79348029,4.05468111 9.4749994,6.90177585 L9.21591547,9.21542924 L6.90226208,9.47451317 C4.05460165,9.79355975 1.79129427,11.5918737 0.847730981,14.2845363 C-0.0896097682,16.9607941 0.549614762,19.8457897 2.51650298,21.812678 L2.51706867,21.8132437 C2.78576925,22.0819442 3.08049135,22.3348056 3.39388108,22.5656053 L5.26856258,23.9458777 L4.33518163,26.0796431 C3.10877562,28.8865742 3.6919973,31.9757823 5.85800679,34.1417918 C8.02401628,36.3078013 11.1132244,36.891023 13.9201555,35.664617 L16.0539209,34.731236 L17.4341933,36.6059175 C19.3513012,39.2165558 22.6741374,40.217819 25.7169593,39.1526333 C28.4096219,38.2079386 30.2073702,35.9451969 30.5258511,33.0981022 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill=\"#FFFFFF\"\n\t\t\t\t\t\t\t\td=\"M22.8816016,25.1907295 C23.087511,25.9589303 22.6315686,26.7486271 21.8633678,26.9545366 C21.095167,27.1604461 20.3049044,26.703938 20.0995606,25.9363028 C19.8942168,25.1686677 20,20 20,20 C20,20 17.50759,24.5288775 16.9452987,25.0911688 C16.3835731,25.6528945 15.4711225,25.6534601 14.9088312,25.0911688 C14.3465399,24.5288775 14.3471055,23.6164269 14.9088312,23.0547013 C15.4711225,22.49241 20,20 20,20 C20,20 14.831898,20.1063489 14.0636972,19.9004394 C13.2954963,19.6945299 12.8395539,18.904833 13.0454634,18.1366322 C13.2513729,17.3684314 14.0410697,16.912489 14.8092705,17.1183984 C15.5774713,17.3243079 20,20 20,20 C20,20 17.3243079,15.5774713 17.1183984,14.8092705 C16.912489,14.0410697 17.3684314,13.2513729 18.1366322,13.0454634 C18.904833,12.8395539 19.6945299,13.2954963 19.9004394,14.0636972 C20.1063489,14.831898 20,20 20,20 C20,20 22.49241,15.4711225 23.0547013,14.9088312 C23.6169926,14.3465399 24.5288775,14.3465399 25.0911688,14.9088312 C25.6534601,15.4711225 25.6534601,16.3830074 25.0911688,16.9452987 C24.5288775,17.50759 20,20 20,20 C20,20 25.1686677,19.8942168 25.9363028,20.0995606 C26.703938,20.3049044 27.1604461,21.095167 26.9545366,21.8633678 C26.7486271,22.6315686 25.9589303,23.087511 25.1907295,22.8816016 C24.4225287,22.6756921 20,20 20,20 C20,20 22.6751264,24.421963 22.8816016,25.1907295 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<g transform=\"translate(89.000000, 26.000000)\">\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill=\"#F7D30C\"\n\t\t\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\t\t\td=\"M34.7579072,29.8221549 C35.9471811,28.2436316 36.4505537,26.2962107 36.1758602,24.338525 C35.9011667,22.3808393 34.8795597,20.6480348 33.3021815,19.4589627 C32.8764948,19.1377192 32.3148182,18.8745582 31.6771661,18.6505434 C32.322438,18.4496561 32.8925986,18.2060063 33.3290428,17.9004048 C36.6710739,15.5602894 37.4868893,10.9369187 35.1463023,7.59421406 C32.8057153,4.25150941 28.1821427,3.43683918 24.8401115,5.77695456 C24.4036673,6.08255608 23.979705,6.53499864 23.5695632,7.07312001 C23.5778216,6.3968338 23.5219623,5.77949571 23.3656856,5.26960932 C22.7880204,3.37952692 21.5079818,1.82667448 19.7627813,0.899652591 C18.0177827,-0.0285144339 16.0154402,-0.220410986 14.1248862,0.356580673 C10.2228742,1.55005325 8.01905852,5.69489638 9.21138596,9.59670651 C9.36692136,10.1041007 9.6579876,10.6430675 10.0403947,11.196369 C9.40294591,10.9812455 8.80370145,10.8507871 8.27338223,10.8417001 C4.19350083,10.7705309 0.816638586,14.0313823 0.744795872,18.1117353 C0.717741062,19.7316573 1.21391599,21.2401619 2.07884376,22.4754068 C3.39294359,24.3507024 5.55534329,25.5968808 8.01503297,25.6391765 C8.54535219,25.6482635 9.14799849,25.5384516 9.79232859,25.3462538 C9.39134786,25.8859905 9.08204129,26.414735 8.9092004,26.9161799 C8.10815356,29.2426717 8.53797723,31.7000054 9.85187515,33.5764461 C10.7168029,34.811691 11.965575,35.7952289 13.4967874,36.322033 C17.3549631,37.6505575 21.5743179,35.5914767 22.9021688,31.7337725 C23.0750097,31.2323275 23.1566991,30.6250741 23.173243,29.95202 C23.5623854,30.5006054 23.9697696,30.9591293 24.3928963,31.2781502 C25.9718913,32.4680977 27.9188405,32.9707967 29.8765262,32.6961032 C31.8353571,32.4216117 33.5686332,31.4006783 34.7579072,29.8221549 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill=\"#FFFFFF\"\n\t\t\t\t\t\t\t\td=\"M15.9075765,12.2952448 C15.5759513,11.2095302 16.1865359,10.0602994 17.2722506,9.72867419 C18.3579653,9.397049 19.507196,10.0076336 19.8388212,11.0933483 C20.1704464,12.1790629 19.5086475,17.0438945 19.5086475,17.0438945 C19.5086475,17.0438945 16.2392017,13.3809595 15.9075765,12.2952448 Z M12.715973,20.5454914 C11.5807004,20.5253744 10.676544,19.5896134 10.696661,18.4543409 C10.716778,17.3190683 11.652539,16.4149119 12.7878115,16.4350289 C13.9230841,16.4551458 18.3455041,18.5880611 18.3455041,18.5880611 C18.3455041,18.5880611 13.850774,20.5649348 12.715973,20.5454914 Z M21.3364561,17.6731778 C21.3364561,17.6731778 23.8099641,13.4318389 24.7401021,12.7805492 C25.6702401,12.1292596 26.9516432,12.3552055 27.6029329,13.2853435 C28.2542225,14.2154816 28.0282766,15.4968846 27.0981386,16.1481743 C26.1680005,16.799464 21.3364561,17.6731778 21.3364561,17.6731778 Z M16.9633787,27.4041412 C15.889691,27.0347589 15.3196031,25.8650807 15.6889854,24.7913931 C16.0583677,23.7177054 19.4542528,20.1715184 19.4542528,20.1715184 C19.4542528,20.1715184 19.9459808,25.0567338 19.5765985,26.1304214 C19.2067446,27.2034356 18.0370664,27.7735236 16.9633787,27.4041412 Z M24.5332739,24.6140173 C23.6264583,23.9310553 21.3026416,19.6059836 21.3026416,19.6059836 C21.3026416,19.6059836 26.1004365,20.6479665 27.0072521,21.3309285 C27.9140676,22.0138905 28.095241,23.30332 27.4118074,24.209462 C26.7288453,25.1162776 25.4394159,25.297451 24.5332739,24.6140173 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<g transform=\"translate(48.000000, 0.000000)\">\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill=\"#FF7398\"\n\t\t\t\t\t\t\t\tfill-rule=\"nonzero\"\n\t\t\t\t\t\t\t\td=\"M54.1379237,31.5464048 C55.9625462,24.5630399 48.1438056,19.13187 45.1845324,17.3616591 C45.6989766,14.4276922 46.8574047,4.80065356 40.7169237,1.24584505 C34.6121663,-2.28828261 26.9236153,3.44959091 24.6013353,5.39402404 C24.4009276,5.26871855 24.1656352,5.12587117 23.8977086,4.97076479 C20.8314374,3.19565841 13.1300975,-0.380512394 7.84990403,4.73636964 C2.20473848,10.2044755 5.53732179,18.7392794 6.80518652,21.4340926 C4.64577053,23.4449497 -1.57937327,30.0260297 0.986877047,37.024011 C1.69277097,38.9530347 2.99822799,40.4795811 4.86875265,41.5624535 C8.89955964,43.8959428 14.4760657,43.5196765 16.591707,43.2691852 C17.5849083,45.1496134 20.4220029,49.9813784 24.4796026,52.3303784 C26.1496784,53.2972082 27.8550402,53.7431811 29.5502657,53.6552686 C36.4552712,53.2971895 39.4664791,43.6601819 40.2201879,40.7426742 C43.0812084,40.3465884 52.3062726,38.5442744 54.1379237,31.5464048 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill=\"#FFFFFF\"\n\t\t\t\t\t\t\t\td=\"M27.7643057,25.6030632 C27.7643057,25.6030632 31.4492792,33.7908502 28.1176886,34.3138653 C24.7835165,34.8339614 26.6574825,25.7216143 26.6574825,25.7216143 C26.6574825,25.7216143 19.5457139,31.7290717 18.5074329,28.7503567 C17.4680864,25.7710249 26.208593,24.7024398 26.208593,24.7024398 C26.208593,24.7024398 18.2208741,20.0098596 20.8149072,17.8660564 C23.4089403,15.7222531 27.0309781,23.9576566 27.0309781,23.9576566 C27.0309781,23.9576566 28.975509,15.0385915 31.8514465,16.7035111 C34.727384,18.3684307 27.9942413,24.5153028 27.9942413,24.5153028 C27.9942413,24.5153028 36.8711392,23.5256765 36.3635103,26.8673556 C35.8586276,30.2092 27.7643057,25.6030632 27.7643057,25.6030632 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	mask1: (0, _common.uid)("mask-"),
	path1: (0, _common.uid)("path-"),
	path2: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<rect id=\"" + id.path1 + "\" x=\"0\" y=\"0\" width=\"264\" height=\"280\"/>", "<path\n\t\t\tid=\"" + id.path2 + "\"\n\t\t\td=\"M80.0203173,73.8104172 C78.0626651,79.5136273 77,85.6327143 77,92 L77,92 L77,98.1659169 C71.3245733,99.1180731 67,104.054007 67,110 L67,123 C67,129.018625 71.4308707,134.002364 77.2085808,134.867187 C78.9518066,155.114792 91.4692178,172.282984 109,180.610951 L109,191.55498 C104.295298,193.764912 99.0418843,195 93.5,195 C84.6936661,195 76.615743,191.881303 70.3104439,186.688122 C68.4019201,186.894245 66.4633102,187 64.5,187 C43.405572,187 25.1625605,174.791635 16.4510993,157.055039 C8.9342791,151.923647 4,143.288055 4,133.5 C4,131.385405 4.23029535,129.324599 4.66717333,127.341294 C2.29639351,121.011656 1,114.157223 1,107 C1,94.2436789 5.11811695,82.4491956 12.0974246,72.8734763 C12.0329017,72.0908558 12,71.2992702 12,70.5 C12,59.2025056 18.5734777,49.4403292 28.1042855,44.8296184 C36.5367477,26.7016558 54.5576512,13.9359054 75.6500672,13.049296 C80.7818839,8.06730831 87.7827378,5 95.5,5 C97.8269611,5 100.088787,5.27887473 102.253881,5.80502563 C111.775927,2.05800249 122.147627,0 133,0 C143.346018,0 153.255173,1.87043661 162.407758,5.29160393 C163.744126,5.09944416 165.11045,5 166.5,5 C174.217262,5 181.218116,8.06730831 186.349933,13.049296 C207.442349,13.9359054 225.463252,26.7016558 233.895715,44.8296184 C243.426522,49.4403292 250,59.2025056 250,70.5 C250,71.2992702 249.967098,72.0908558 249.902575,72.8734763 C256.881883,82.4491956 261,94.2436789 261,107 C261,114.157223 259.703606,121.011656 257.332827,127.341294 C257.769705,129.324599 258,131.385405 258,133.5 C258,143.288055 253.065721,151.923647 245.548901,157.055039 C236.837439,174.791635 218.594428,187 197.5,187 C195.53669,187 193.59808,186.894245 191.689556,186.688122 C185.384257,191.881303 177.306334,195 168.5,195 C164.481965,195 160.61557,194.350752 157,193.151442 L157,180.610951 C174.530782,172.282984 187.048193,155.114792 188.791419,134.867187 C194.569129,134.002364 199,129.018625 199,123 L199,110 C199,104.054007 194.675427,99.1180731 189,98.1659169 L189,92 C189,86.5585666 188.223906,81.2983998 186.776371,76.3241528 L188.153157,89.1947292 L176.812614,65.1945789 L131.676809,45.6707349 L101.563146,56.2283606 L80.0648273,76.419385 L80.0203173,73.8104172 Z\"\n\t\t\t/>", "<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path1 + "\"/>\n\t\t</mask>"],
	render: function render(_ref) {
		var color = _ref.color,
		    _ref$color = _ref.color2,
		    color2 = _ref$color === undefined ? _colors.fabricColors.blue : _ref$color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#" + id.mask1 + ")\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<use stroke=\"none\" fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tstroke=\"none\"\n\t\t\t\t\t\t\tfill=\"" + color2 + "\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\td=\"M76.6313898,98.975 C76.2155465,96.423245 76,93.8109442 76,91.1521739 C76,62.3493236 101.295912,39 132.5,39 C163.704088,39 189,62.3493236 189,91.1521739 C189,93.8109442 188.784453,96.423245 188.36861,98.975 C184.279562,73.883217 160.823662,54.6456522 132.5,54.6456522 C104.176338,54.6456522 80.7204382,73.883217 76.6313898,98.975 Z\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors,
		color2: _colors.fabricColors
	}
});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

exports.default = new _common.AvatarPart({
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill-opacity=\"0.16\"\n\t\t\t\t\t\t\tfill=\"#000000\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\td=\"M67,109.777572 C76.0375502,108.717226 88.9217814,89.3309188 94.3694073,69.3345491 C105.486404,71.0717584 118.905207,72.0867832 133.353789,72.0867832 C147.513023,72.0867832 160.683308,71.1120054 171.66752,69.4380466 C177.129582,89.3913728 189.978479,108.706688 199,109.77655 L199,89 C199,66.1159733 187.353465,45.9521405 169.664405,34.1125124 C169.136033,36.5946509 168.784517,39.3353373 168.624132,42.297284 C158.284896,40.892676 146.228147,40.0867832 133.353789,40.0867832 C120.190372,40.0867832 107.88169,40.9292706 97.3896338,42.392803 C97.2315704,39.3922173 96.8778294,36.6175705 96.3431783,34.1074375 C78.6498638,45.9463781 67,66.1127033 67,89 L67,89 L67,109.777572 Z\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t<g stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(17.000000, 0.000000)\">\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill=\"" + color + "\"\n\t\t\t\t\t\t\t\td=\"M180.665797,104.495381 C181.518431,106.144109 182,108.015816 182,110 L182,123 C182,129.018625 177.569129,134.002364 171.791419,134.867187 C170.048193,155.114792 157.530782,172.282984 140,180.610951 L140,190.054182 C143.832093,191.949549 148.058707,193 152.5,193 C160.121477,193 167.110765,189.906604 172.559029,184.758484 C174.020475,184.918263 175.501874,185 177,185 C195.390093,185 211.259672,172.683502 218.621514,154.88375 C224.900145,149.813883 229,141.454126 229,132 C229,130.214987 228.853847,128.468986 228.57447,126.776775 C230.785923,120.339137 232,113.331199 232,106 C232,93.1344627 228.26103,81.2644681 221.954258,71.7251464 C221.984605,71.1545437 222,70.5793265 222,70 C222,59.0433596 216.493437,49.5565783 208.470603,44.9571334 C201.160166,27.369138 185.740722,14.9905991 167.696954,14.0567347 C163.273738,9.07458291 157.201041,6 150.5,6 C149.549121,6 148.610894,6.0619088 147.688236,6.18239195 C137.909703,2.19640473 127.211351,0 116,0 C104.788649,0 94.0902965,2.19640473 84.3117637,6.18239195 C83.3891064,6.0619088 82.4508793,6 81.5,6 C74.7989589,6 68.7262617,9.07458291 64.3030458,14.0567347 C46.2592779,14.9905991 30.8398341,27.369138 23.5293968,44.9571334 C15.5065631,49.5565783 10,59.0433596 10,70 C10,70.5793265 10.0153947,71.1545437 10.0457422,71.7251464 C3.73896962,81.2644681 0,93.1344627 0,106 C0,113.331199 1.21407678,120.339137 3.42552978,126.776775 C3.14615333,128.468986 3,130.214987 3,132 C3,141.454126 7.0998554,149.813883 13.3784857,154.88375 C20.7403278,172.683502 36.6099075,185 55,185 C56.4981261,185 57.9795252,184.918263 59.4409604,184.758485 C64.8892346,189.906604 71.878523,193 79.5,193 C83.9412925,193 88.1679073,191.949549 92,190.054182 L92,180.610951 C74.4692178,172.282984 61.9518066,155.114792 60.2085808,134.867187 C54.4308707,134.002364 50,129.018625 50,123 L50,110 C50,108.017039 50.4809755,106.146415 51.3326281,104.498428 C54.034525,103.696079 57.0103265,101.444735 59.9905531,98.1675057 C59.9937016,98.1669748 59.9968506,98.1664452 60,98.1659169 L60,98.1571139 C66.866448,90.6014009 73.7548744,77.602262 77.3694073,64.3345491 C88.4864044,66.0717584 101.905207,67.0867832 116.353789,67.0867832 C130.513023,67.0867832 143.683308,66.1120054 154.66752,64.4380466 C158.288087,77.6642508 165.154277,90.6101259 172,98.1475774 L172,98.1659169 C172.006563,98.167018 172.013125,98.1681244 172.019685,98.1692362 C174.995621,101.441388 177.967097,103.690532 180.665797,104.495381 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\td=\"M148.859344,69 C148.952588,70.3212062 149,71.6550662 149,73 L149,111 C149,133.339168 135.919579,152.623239 117,161.610951 L117,170.317435 C135.145605,171.815797 152.721153,174.335027 163.000169,177 C172.952646,163.439362 185.884594,150.800081 186.000169,126 C186.085192,107.014914 158.324059,30.4276364 146.000169,15 C137.861928,4.81215989 117.30504,1.44935656 93.0001685,1 C68.6952966,0.550643437 48.9231015,6.50878211 41,16 C30.3189583,28.7950013 -0.0850232975,107.014914 4.92293245e-13,126 C0.115574613,150.800081 13.047523,163.439362 23,177 C33.2789946,174.335033 50.8544902,171.815807 69,170.317444 L69,161.610951 C50.0804213,152.623239 37,133.339168 37,111 L37,73 L37,73 C37,71.6550662 37.0474121,70.3212062 37.1406562,69 L65.3735517,69 L69.2529753,47.5561285 L72.058097,69 L148.859344,69 Z\"\n\t\t\tid=\"" + id.path1 + "\"/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill-opacity=\"0.16\"\n\t\t\t\t\t\t\tfill=\"#000000\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\td=\"M69.0330562,76.212888 C81.9708809,43.1292208 95.6458945,26.5873873 110.058097,26.5873873 C110.596882,26.5873873 139.311316,26.3494141 158.112657,26.226792 C178.767149,35.5853581 193,55.3036503 193,78.114622 L193,93 L110.058097,93 L107.252975,69.820435 L103.373552,93 L69,93 L69,78.114622 C69,77.478246 69.0110772,76.844277 69.0330621,76.2128728 L69.0330562,76.212888 Z\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t<g stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(40.000000, 19.000000)\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M59,102.340285 C59,118.921045 59,145.474283 59,182 C59,186.418278 62.581722,190 67,190 L109,190 L109,180.610951 C91.4692178,172.282984 78.9518066,155.114792 77.2085808,134.867187 C71.4308707,134.002364 67,129.018625 67,123 L67,110 C67,106.509412 68.4903619,103.366917 70.8694649,101.174135 C82.4088376,98.5552525 94.9706808,93.6376395 107.341516,86.4953343 C119.473269,79.4910638 129.843979,71.2579416 137.820938,62.752196 C134.394107,70.6604321 130.244513,77.5880409 125.372156,83.5350224 C138.047336,78.0120855 146.677812,69.1324394 151.263585,56.8960843 C151.64142,57.8180234 152.034942,58.738913 152.444252,59.6582378 C162.699828,82.6926393 180.317578,99.018563 198.205873,104.403108 C198.718861,106.513486 199,108.48395 199,110 L199,123 C199,129.018625 194.569129,134.002364 188.791419,134.867187 C187.048193,155.114792 174.530782,172.282984 157,180.610951 L157,190 L175,190 C192.673112,190 207,175.673112 207,158 C207,133.944314 207,115.902549 207,103.874706 C207,103.807916 206.990567,103.721208 206.971823,103.615272 C206.82774,91.3536714 206.623862,84.2237818 206.360189,82.2256031 C201.576875,45.9764505 170.555563,18 133,18 C96.9151011,18 66.8627142,43.8282542 60,78 C54.4771525,78 50,83.5964406 50,90.5 C50,95.0507583 51.6949619,99.1431718 54.8534901,101.273154 C55.7582038,101.883256 57.323834,102.197638 58.9999994,102.340287 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<g opacity=\"0.439990942\" stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(50.000000, 18.000000)\" fill-opacity=\"0.159999996\">\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tfill=\"#FFFFFF\"\n\t\t\t\t\t\t\t\td=\"M11.8989604,84.7749122 C25.7109099,83.0145308 41.6792969,77.5379209 57.3415164,68.4953343 C69.4732686,61.4910638 79.8439791,53.2579416 87.8209384,44.752196 C84.3941075,52.6604321 80.2445133,59.5880409 75.3721558,65.5350224 C88.0473359,60.0120855 96.6778122,51.1324394 101.263585,38.8960843 C101.64142,39.8180234 102.034942,40.738913 102.444252,41.6582378 C114.38223,68.4713761 136.296003,86.1944823 157,88.1510343 L157,88.1510343 L157,74 C157,33.1309285 123.869071,-7.50752664e-15 83,0 C46.9151011,6.62868839e-15 16.8627142,25.8282542 10.3212729,60.0063288 C10.214595,60.0021202 10.1074956,60 10,60 C4.4771525,60 0,65.5964406 0,72.5 C0,78.9816827 3.9466744,84.3111215 8.99999442,84.9382803 L8.99999434,85.0927525 C9.31629342,85.0638362 9.63387297,85.0328725 9.95270131,84.9998631 C9.96845895,84.9999543 9.98422521,85 10,85 C10.6492988,85 11.2841443,84.9226474 11.8989604,84.7749122 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	mask1: (0, _common.uid)("mask-"),
	mask3: (0, _common.uid)("mask-"),
	path2: (0, _common.uid)("path-"),
	path3: (0, _common.uid)("path-"),
	path4: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path3 + "\"\n\t\t\td=\"M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,61.072054 162.927946,36 132,36 C101.072054,36 76,61.072054 76,92 L76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z\"\n\t\t\t/>\n\t\t<rect id=\"" + id.path4 + "\" x=\"0\" y=\"0\" width=\"112\" height=\"150\" rx=\"56\"/>\n\t\t<mask id=\"" + id.mask1 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path4 + "\"/>\n\t\t</mask>\n\t\t<mask id=\"" + id.mask3 + "\" fill=\"white\">\n\t\t\t<use xlink:href=\"#" + id.path3 + "\"/>\n\t\t</mask>\n\t\t<path\n\t\t\tid=\"" + id.path2 + "\"\n\t\t\td=\"M90.8779151,52.3613196 C113.02785,65.2272934 140.816672,65.2272934 174.244382,52.3613196 C188.77455,44.5891967 199.330608,29.0424257 182.951044,8.96303524 C180.782417,6.30455678 172.244382,15.6755614 155.351199,16.6504878 C138.458015,17.6254143 142.079654,13.3498661 124.102817,16.0739248 C106.12598,18.7979835 108.111968,33.37843 96.3814191,36.8768239 C84.6508698,40.3752178 86.5778198,49.8635735 90.8779151,52.3613196 Z\"\n\t\t\tfill-rule=\"evenodd\"/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g  stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask})\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1.000000, 0.000000)\">\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\td=\"M116.179148,40 L146,40 C171.405098,40 192,60.5949015 192,86 L192,154.108712 C192,180.650314 210.758775,204.349179 222.609956,226.05167 C234.461138,247.754161 215.254522,268.242596 195.770735,276.769484 C190.902336,278.900091 185.645645,280 180.331438,280 L135.26309,280 C78.9108161,280 70.2166412,216.309596 67.6972794,146.504423 L70.2166412,84.1431398 C71.212998,59.4805095 91.4964003,40 116.179148,40 Z\"\n\t\t\t\t\t\t\t\tfill=\"" + color + "\"\n\t\t\t\t\t\t\t\tmask=\"url(#" + id.mask3 + ")\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<g stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(77.000000, 36.000000)\">\n\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\tmask=\"url(#" + id.mask1 + ")\"\n\t\t\t\t\t\t\t\tfill-opacity=\"0.16\"\n\t\t\t\t\t\t\t\tfill=\"#000000\"\n\t\t\t\t\t\t\t\td=\"M98.8014742,19.9396383 C107.026909,29.4843994 112,41.9114359 112,55.5 L112,65.5 L112,61.5 C112,45.7605792 105.327989,31.5794902 94.657974,21.6307409 C63.9198041,32.6768506 38.0141969,32.8027026 16.9411526,22.0082968 C6.50516181,31.936614 -1.90326939e-15,45.958626 0,61.5 L0,61.5 L0,65.5 L0,55.5 C-1.66642407e-15,41.8926148 4.98687681,29.4499771 13.2327229,19.8999944 C9.3991564,16.860899 8.25944611,8.18718262 19.4671989,4.87682391 C31.3115751,1.37843003 29.3063159,-13.2020165 47.4575903,-15.9260752 C65.6088648,-18.6501339 63.9714902,-11.3745857 81.028596,-12.3495122 C98.0857017,-13.3244386 103.635746,-29.1131795 106.849606,-25.0739991 C119.588767,-9.06341321 116.420993,9.34036319 98.8014742,19.9396383 Z\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t\t<use fill=\"#FFFFFF\" fill-opacity=\"0.15\" xlink:href=\"#" + id.path2 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M133.506381,81.3351151 C137.363649,83.3307002 140,87.3574737 140,92 L140,105 C140,111.018625 135.569129,116.002364 129.791419,116.867187 C128.048193,137.114792 115.530782,154.282984 98,162.610951 L98,162.610951 L98,181 L102,181 C119.490913,181 135.525121,187.236892 148,197.608051 L148,74 C148,53.5654643 139.717268,35.0654643 126.325902,21.6740982 C112.934536,8.28273213 94.4345357,-3.55271368e-15 74,0 C33.1309285,7.10542736e-15 -7.10542736e-15,33.1309285 0,74 L0,257.716445 C13.5691766,255.775526 24,244.105888 24,230 L24,184.423101 C30.9346808,182.200199 38.3271796,181 46,181 L50,181 L50,162.610951 C38.7726252,157.277407 29.6015372,148.317951 24,137.245847 L24,75.2659587 C33.1467898,72.2910056 42.777598,68.0170651 52.3415164,62.4953343 C67.7445474,53.6023901 80.4313947,42.9409152 89.0661426,32.3970356 C90.8310687,37.5951441 93.1752556,42.8009742 96.1104311,47.8848473 C104.877881,63.0705152 117.224186,74.2337047 130,79.9170491 L130,80.1659169 C130.400422,80.233095 130.794121,80.3201038 131.18005,80.4258987 C131.954509,80.7493055 132.730185,81.0524853 133.506381,81.3351151 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(59.000000, 18.000000)\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill-opacity=\"0.24\"\n\t\t\t\t\t\t\tfill=\"#000000\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\td=\"M192.506381,99.3351151 C197.3745,101.107702 202.263079,102.071957 207,102.148232 L207,102.148232 L207,92 C207,71.5654643 198.717268,53.0654643 185.325902,39.6740982 C198.717268,53.0654643 207,71.5654643 207,92 L207,215.608051 C194.525121,205.236892 178.490913,199 161,199 L157,199 L157,180.610951 L157,180.610951 C174.530782,172.282984 187.048193,155.114792 188.791419,134.867187 C194.569129,134.002364 199,129.018625 199,123 L199,110 C199,105.357474 196.363649,101.3307 192.506381,99.3351151 Z M190.18005,98.4258987 C189.794121,98.3201038 189.400422,98.233095 189,98.1659169 L189,97.9170491 C189.392974,98.0918644 189.786355,98.2614951 190.18005,98.4258987 Z M83,155.245847 C88.6015372,166.317951 97.7726252,175.277407 109,180.610951 L109,199 L105,199 C97.3271796,199 89.9346808,200.200199 83,202.423101 L83,155.245847 Z\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M21,157.540812 L21,69.046252 C21,65.5140485 21.3981158,62.0748299 22.1519234,58.7710202 C25.205041,38.7314193 36.7752683,22.8108863 50,13 C69.9046441,-1.75961713 103.441939,-6.01828252 115.047069,11.5221046 C123.698343,7.68103538 136.519049,11.1821114 146,20 C155.565156,29.4150438 163.19967,50.1973768 158.657409,67.2035172 C158.762104,68.4691962 158.815476,69.7490355 158.815476,71.0408963 L158.815476,92.8921195 C157.934142,87.9183006 153.988995,84.0029116 149,83.1659169 L149,83 C142.963851,61.4642087 125.229516,51.5800472 114.429684,41.777113 C97.5353566,60.6732583 44.8226408,60.7398069 27,98 L27,108 C27,114.018625 31.4308707,119.002364 37.2085808,119.867187 C38.9518066,140.114792 51.4692178,157.282984 69,165.610951 L69,166 C71.9303712,209.855112 62.358462,264.797432 0,248 C13.6057325,240.037752 20.8081123,189.055563 21,157.540812 Z M117,165.610951 C134.530782,157.282984 147.048193,140.114792 148.791419,119.867187 C153.87876,119.105701 157.921895,115.150816 158.815476,110.107881 L158.815476,111.47039 L158.815476,111.47039 C158.815476,127.298552 162.572711,142.900645 169.7782,156.993609 L196.726668,209.701177 C203.689761,223.320048 201.645562,239.173573 192.790715,250.468968 C189.966212,213.288807 158.90349,184 121,184 L121,184 L117,184 L117,165.610951 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(40.000000, 15.000000)\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill-opacity=\"0.16\"\n\t\t\t\t\t\t\tfill=\"#000000\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\td=\"M67,113 C84.8226408,80.6646674 137.535357,80.6069148 154.429684,64.2083647 C165.207546,72.6982916 182.891727,79.2665518 188.963018,97.8687161 C182.891727,76.423995 165.207546,66.5601054 154.429684,56.777113 C137.535357,75.6732583 84.8226408,75.7398069 67,113 Z\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M8.46130289,88.6935361 C8.16088005,89.7438903 8,90.8531574 8,92 L8,105 C8,111.018625 12.4308707,116.002364 18.2085808,116.867187 C19.9518066,137.114792 32.4692178,154.282984 50,162.610951 L50,181 L46,181 L46,181 C30.3810228,181 15.9236322,185.973344 4.12503673,194.422823 C1.45272918,186.776619 1.52589027e-14,178.557961 1.42108547e-14,170 L0,74 L0,74 C-5.00501776e-15,33.1309285 33.1309285,7.50752664e-15 74,0 L74,0 L74,0 C114.869071,-7.50752664e-15 148,33.1309285 148,74 L148,170 C148,178.557961 146.547271,186.776619 143.874963,194.422823 C132.076368,185.973344 117.618977,181 102,181 L102,181 L98,181 L98,162.610951 C115.530782,154.282984 128.048193,137.114792 129.791419,116.867187 C135.569129,116.002364 140,111.018625 140,105 L140,92 C140,90.3107559 139.650957,88.7030352 139.021057,87.2450254 C126.064756,85.0568849 111.478699,79.7686298 97.1489304,71.4953343 C85.0171781,64.4910638 74.6464677,56.2579416 66.6695083,47.752196 C70.0963393,55.6604321 74.2459335,62.5880409 79.118291,68.5350224 C66.4431108,63.0120855 57.8126345,54.1324394 53.2268621,41.8960843 C52.8490267,42.8180234 52.455505,43.738913 52.0461952,44.6582378 C42.206947,66.7575512 25.5911314,82.6819966 8.46130289,88.6935361 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(59.000000, 18.000000)\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill-opacity=\"0.16\"\n\t\t\t\t\t\t\tfill=\"#000000\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\td=\"M59,102.418954 L59,108.837908 C78.9453743,105.750496 99.5895621,88.3902571 111.046195,62.6582378 C111.455505,61.738913 111.849027,60.8180234 112.226862,59.8960843 C116.231662,70.5822127 123.321236,78.70828 133.495584,84.2742862 C134.956498,86.4697241 136.497401,88.5566361 138.118291,90.5350224 C125.443111,85.0120855 116.812635,76.1324394 112.226862,63.8960843 C111.849027,64.8180234 111.455505,65.738913 111.046195,66.6582378 C99.5895621,92.3902571 78.9453743,109.750496 59,112.837908 L59,102.418954 Z M207,101.140388 L207,110.280776 C192.046922,109.412723 173.901259,103.744646 156.14893,93.4953343 C145.87623,87.5643877 136.866205,80.7523483 129.502994,73.639773 C128.137922,71.1289501 126.860094,68.4997578 125.669508,65.752196 C133.646468,74.2579416 144.017178,82.4910638 156.14893,89.4953343 C173.901259,99.7446457 192.046922,105.412723 207,106.280776 L207,101.140388 Z\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M185.831676,73.928751 C187.588868,74.9173665 188.980206,84.8279256 189.047535,88.6176558 C189.08965,90.9562115 189.127358,99.8740101 186.654049,99.1031293 C185.901013,98.868423 184.751682,94.1472484 184.58821,91.3840965 C184.424737,88.6209446 182.855069,79.2200034 180.446757,74.8947261 C179.896491,73.9063366 178.320781,72.1708928 179.001547,71.3348066 C179.846064,70.2980597 180.666198,70.8995898 181.697184,71.3146953 C182.8124,71.7641482 185.6344,73.8180261 185.831676,73.928751 Z M186.636742,70.9565876 C185.890663,71.9188016 180.795829,69.217693 178.671174,68.0439722 C160.825581,58.1840558 157.361562,55.0486831 129.245707,55.4578453 C101.129853,55.8670074 81.8674779,69.0400225 80.7839818,70.3874406 C80.0301584,71.3248831 79.0677773,73.8279219 78.2764086,80.8005402 C77.48504,87.7731584 78.4952061,100.277789 75.6304859,100.262618 C73.1915094,100.249702 72.6608912,76.4770353 73.7137309,67.0463924 C73.8753757,65.5984852 74.4983655,63.0083957 74.0474223,61.7058802 C73.6532986,60.5682485 71.7253768,60.5705662 72.0331217,58.6750651 C72.3829065,56.5173393 74.5584694,57.5890837 75.5060085,56.5574014 C77.3005851,54.602966 74.5321945,54.1404306 74.0730403,52.4306721 C73.3905494,49.8892108 75.3628102,49.2336489 77.1396512,48.4310821 C79.1060001,47.5437559 78.8504766,48.3231462 80.4463492,46.5849138 C78.3147968,45.0224912 77.543628,42.8939014 80.4624425,41.7519655 C81.7019616,41.2669159 84.9268789,41.9089031 85.8980654,41.1801698 C86.1512899,40.9901231 86.251463,39.9008308 86.4074703,39.6780059 C87.9583471,37.4593592 87.5757186,35.8532324 87.4183976,33.3624282 C87.2889936,31.3242265 87.3064008,29.4532263 89.7466834,29.2496048 C91.3750712,29.1138571 92.6993269,30.4441843 94.1582415,30.835866 C95.7767762,31.2705896 95.1688403,31.5877757 96.4369334,30.7150174 C98.6630755,29.1817309 97.1479982,26.1942888 98.913344,24.4120212 C101.335891,21.9662454 102.923881,25.5513084 104.868882,25.8218105 C109.09126,26.4101607 107.736132,22.1218586 110.235861,20.5504965 C113.223647,18.6738677 113.512672,22.8012592 115.378847,22.948264 C116.996068,23.0750722 119.907657,19.9545311 121.317306,19.3731338 C125.499944,17.6471518 127.572378,22.5039387 131.554013,21.8844657 C134.443268,21.434843 135.223305,21.067662 137.830761,22.7115333 C140.361692,24.3070651 140.96306,23.1664535 143.828996,23.1436082 C145.853806,23.128378 147.093982,24.8202575 148.787729,24.9967295 C149.632467,25.085131 150.441078,24.2050888 151.347562,24.2603811 C154.58496,24.4567186 154.789576,28.6430444 157.361562,29.7955753 C159.711524,30.8487786 162.474332,29.3691289 164.806559,29.0953159 C170.497048,28.4275036 166.60015,33.7425217 166.760755,36.914713 C168.994451,37.4358517 171.261648,35.3509661 173.485163,35.7347015 C176.986623,36.3392753 175.664995,39.9680424 174.853429,42.4144804 C177.279589,42.3707762 183.612828,39.6776748 185.184725,43.1220237 C185.995306,44.8980006 184.106797,47.2689496 184.13767,49.0743937 C184.181023,51.615855 186.048513,53.7186196 186.709327,56.1240021 C187.601032,59.3710203 188.871834,68.0740038 186.636742,70.9565876 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(1.000000, 0.000000)\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M153.503392,98.8736491 C157.89934,100.654655 161,104.965228 161,110 L161,123 C161,128.28759 157.580126,132.776426 152.8316,134.375285 C151.985668,145.321578 147.992514,155.385777 141.755762,163.66426 C141.964657,164.471736 142.166135,165.290125 142.311896,166.167999 C142.862922,169.494538 142.191903,172.260864 143.956619,175.261034 C144.414366,176.040649 145.140008,176.50834 145.478876,177.405464 C146.012313,178.819858 145.247,181.999219 147.428222,182 C150.534993,182.00039 148.803043,176.034013 148.024863,174.616105 C146.500469,171.843533 145.563369,171.165421 145.642135,167.571852 C147.387236,168.73171 153.172487,170.947581 155.089787,169.887664 C159.522305,167.44029 148.428013,164.951924 147.651918,164.434653 C149.356221,162.768846 151.308063,161.884996 152.848916,159.689035 C154.108583,157.895569 155.254913,155.292428 157.398137,155.187802 C158.584855,155.129634 162.056295,158.072417 163.10825,156.053694 C164.07308,154.203231 161.993578,153.931908 161.181077,153.276828 C159.678802,152.06661 159.340419,153.270972 159.706723,151.14333 C160.792178,152.307873 162.495834,151.571982 162.95061,150.127527 C163.441226,148.569468 161.823998,148.10412 161.853937,147.113692 C161.842192,147.500572 162.687735,141.999153 162.554381,142.176001 C163.413669,141.041128 166.462257,141.392482 167.966582,141.555666 C170.263178,141.804346 170.13091,141.873446 171.222117,143.992109 C172.103838,145.707106 174.419542,149.169502 174.928748,144.633135 C175.050449,143.548232 174.059985,141.228907 173.478827,140.295477 C172.851533,139.287873 170.962455,138.651922 170.567003,137.868403 C169.622984,135.99803 172.731819,131.833707 172.206,129.014288 C173.298856,129.431618 176.063377,135.941423 177.404406,130.612948 C178.111059,127.812658 170.89879,121.667871 173.890225,120.718825 C176.178665,119.993084 178.501504,122.944066 179.140297,124.762907 C179.612624,126.110544 179.400215,129.001405 180.207508,130.116368 C183.243976,134.318949 183.618438,127.375418 183.364612,125.543693 C182.806036,121.517569 181.381252,118.556438 177.742225,117.034295 C179.037272,115.426656 177.396605,114.146948 176.467109,113.140514 C177.994834,111.484467 187.90383,113.244749 185.67495,108.813788 C185.137049,107.742159 183.193837,107.552037 182.208315,107.158911 C179.717195,106.166532 177.22313,104.1482 175.950562,101.597371 C177.79234,101.136708 183.230278,102.394554 182.515816,98.6011044 C181.952817,95.619282 177.112955,96.5335826 175.237767,96.9915137 C176.930155,95.9749301 180.211017,96.8166176 180.67198,94.0499017 C181.203002,90.8666365 177.383839,90.9736042 175.591269,91.6482034 C175.17003,88.2904324 181.122531,85.8176826 182.804663,83.2477249 C183.373237,82.3806618 184.275583,82.0835727 183.551013,80.6153042 C182.244616,77.9719526 178.870779,81.7013778 177.758771,82.7050785 C178.635221,81.0771393 181.079608,74.3018671 180.708517,72.5829664 C180.162561,70.057123 178.355898,69.967723 176.919931,72.0153348 C175.988608,73.3450137 175.729666,76.7176196 175.238294,78.4419859 C173.199533,76.9046179 173.095791,78.6883239 172.991008,76.2507095 C172.923099,74.6707886 174.992708,71.5499862 175.522623,70.0032488 C175.978715,68.6739603 177.190719,66.2433729 176.465593,64.9570277 C174.690293,61.8139729 172.993447,66.1289878 172.525841,67.608968 C171.737261,64.1977131 174.740084,61.5524095 175.629329,58.1778516 C176.170088,56.1298495 177.605245,50.5995409 175.118415,49.6165311 C171.724815,48.2755308 172.918922,54.5725714 172.440664,56.6162793 C172.07606,58.1758997 171.519076,60.6935447 170.302082,61.4622287 C170.125896,61.5734908 167.481496,61.8046035 167.354151,61.6554733 C165.620359,59.6336275 170.392027,55.207741 170.637754,53.3037939 C170.861461,51.5731813 170.198398,50.4792998 168.576831,50.3754553 C167.767833,50.323533 166.456472,51.5751333 166.081721,51.4935411 C164.602506,51.1718572 166.529338,44.4051737 166.669221,42.5269926 C166.819045,40.5238856 166.575417,35.355081 163.186097,37.7423348 C163.413049,35.0454993 163.549887,32.5063826 163.920134,29.8505384 C164.114962,28.45176 165.31836,27.2060156 163.546466,26.0840259 C161.389659,24.7192116 160.195301,27.5757179 159.703512,29.2516754 C158.858129,32.1374612 160.604934,36.6265913 156.546177,36.7183337 C151.880955,36.8237399 155.102123,31.9875502 155.331481,28.8503513 C155.459059,27.1091981 154.318536,22.4287754 152.06891,25.5866651 C151.173373,26.8456828 151.481865,31.2813291 150.985494,32.7702884 C149.878539,32.2772219 151.717562,28.2546115 150.755804,27.2056252 C148.695236,24.958913 146.966535,28.2315783 145.655991,28.8975889 C145.57044,27.4527441 145.468923,26.0067281 145.407913,24.5603216 C145.315305,22.3600662 146.663012,17.7307849 145.2945,16.2125461 C142.95772,13.6238495 141.471891,16.6443209 140.789049,18.7364375 C140.175628,20.6196938 140.091904,22.4795265 137.555716,22.7360147 C137.763741,20.0192692 135.29832,14.3004008 136.520803,12.0087933 C137.073558,10.9742516 138.200031,11.7078002 138.699701,10.5498943 C139.521287,8.64672801 138.176249,7.83939509 136.714154,7.77771298 C129.921887,7.49233563 135.152043,16.9117402 132.745372,19.2693241 C131.646423,18.2285361 132.817064,17.1557359 131.680174,15.6730229 C130.456777,14.0782671 128.507084,14.2133431 126.762486,14.9351799 C126.706116,13.3220757 129.125524,2.01512054 123.682122,7.11833905 C122.329503,8.38945896 122.708203,10.5112454 121.988704,12.004499 C121.293397,13.448563 119.599928,15.6019713 118.647561,16.7751026 C118.138071,14.7079712 118.919891,12.1450405 119.467423,10.1091405 C119.848493,8.69357518 122.399415,4.30399525 121.855094,2.8653967 C120.275192,-1.30204956 115.532497,5.5840942 114.282756,6.69671451 C112.701004,8.10642397 106.402711,12.7415612 104.381766,11.3369268 C103.680648,10.8501066 104.312204,9.04610014 103.355021,8.20948774 C102.885296,7.799575 100.877713,7.60828238 100.304676,7.66059506 C100.663044,6.16656069 99.9590183,4.23411488 98.2500992,4.75060494 C96.1010516,5.40060944 97.031157,8.58855944 95.6691727,9.75271164 C93.1402627,11.9174413 90.1353523,7.6410754 87.4245062,7.76092608 C87.8388134,6.00571874 90.9097688,-0.301081675 86.0261697,1.61691959 C84.7804466,2.10647253 83.8958015,4.9680539 83.5854252,6.15758165 C82.7941498,9.19327834 83.364323,9.74958849 80.0771587,10.6065013 C80.3338947,8.84621888 79.876509,6.65923677 80.7256589,5.08595261 C81.4218191,3.79726501 85.0314735,0.441445987 81.1879964,0.0233349851 C76.4475113,-0.492764683 76.9137424,7.69455926 76.3331882,10.4628367 C72.1267344,7.91396017 69.3589223,11.5606221 66.8533479,14.7153886 C67.3001674,13.2963097 68.4061862,-0.841776108 63.8882057,3.47753307 C62.5963925,4.71468878 64.0256621,6.54407081 63.9388761,7.95573223 C63.8604755,9.23622158 63.4388415,10.377731 62.9428241,11.5742858 C62.1474037,13.4950198 61.2224184,15.460649 59.9693808,17.0979577 C58.3962141,19.1568908 58.9543722,19.318904 57.1484939,17.9212967 C54.7243438,16.0478003 53.5723002,11.2974971 53.6920659,8.39570525 C53.781581,6.23526987 54.8879763,1.84842269 51.3078111,2.86461591 C47.8009276,3.86128948 49.6590375,10.8387852 50.0116201,13.3177814 C50.3931233,16.0052474 50.6468605,18.7543956 50.1948883,21.4906608 C47.2109167,18.4409099 46.7758614,24.7926055 46.1779169,25.8763368 C45.1988562,27.6534061 43.310101,28.5232019 41.8428337,29.7357629 C41.0431153,26.9417195 44.2482173,24.5790605 43.6123112,22.3561622 C42.4186453,18.1910583 39.0417626,24.0719399 38.2998862,25.2263323 C37.6814572,26.1886512 35.6651905,31.6682087 34.9351609,32.1593232 C33.9115906,32.848367 27.3301947,29.6315279 26.6642795,29.0186108 C25.4417603,27.8938883 25.8867201,24.7465391 24.3487748,24.0297774 C19.6293173,21.8322547 22.4173261,29.7638712 23.3441752,31.4035222 C25.7628153,35.687696 26.8597232,40.8604044 26.2928172,45.9077967 C25.4350389,45.6056325 24.378271,44.5964663 23.8253733,43.8305151 C22.7491426,42.3411654 23.1404237,39.9656235 22.017351,38.8436337 C18.7294809,35.5639414 18.3438318,41.7216116 18.6111593,43.6353185 C19.1118632,47.2226407 20.9020846,48.3856217 22.3890054,51.3693961 C23.7571524,54.1197154 21.943774,57.4376663 21.5613192,60.4944442 C18.1321771,57.1944514 3.36588279,59.9510171 7.16521769,64.996067 C9.14262534,67.628878 11.4834592,62.6185731 13.763287,62.7450604 C17.8464603,62.9714884 19.9981829,68.0411331 19.730271,71.5921487 C19.2330959,69.6940575 17.308498,67.8307112 15.9842104,70.148475 C15.0865685,71.7213688 16.6185854,74.4088349 17.3583008,75.9707976 C16.4523462,75.5265303 11.9860935,73.4504198 11.1123314,73.8095815 C7.67255627,75.2239756 12.4125819,77.9610216 13.6493116,78.5079623 C17.8734551,80.3759933 20.5363542,82.427509 21.8496116,87.4998864 C19.4819334,86.7425238 19.8941915,85.6220957 18.2972545,84.4567723 C16.830792,83.3870952 16.5566308,83.9387206 15.2071591,83.5889284 C12.8451619,82.9775728 9.76564295,82.1620417 7.09694168,83.2707581 C5.12707484,84.0898028 1.809527,86.5809011 1.19123199,88.9213077 C0.433581882,91.7946008 2.03522104,92.5273687 4.0949367,91.063785 C6.54565844,89.3249741 6.99233616,85.9593953 10.6783285,86.1030599 C12.4468385,86.1721595 14.198865,87.0989527 15.3182307,88.4286316 C16.1532654,89.4217916 16.6409799,90.859219 17.4378821,91.9242113 C18.1406712,92.8638875 20.0019971,94.1826354 20.3954288,95.1781378 C21.8129983,98.7732678 19.1191629,101.97332 17.3124291,104.492136 C16.8931801,103.937778 13.8353612,102.734196 13.2017458,102.613565 C10.2619363,102.05257 9.16499332,103.411918 11.003339,106.125931 C11.5823428,106.981673 12.8005957,107.342006 13.4385893,108.120059 C14.1501828,108.989074 14.5506213,110.319534 15.2570206,111.263504 C16.6502186,113.127241 18.3720966,114.086046 20.0353361,115.585546 C19.4216552,115.995069 19.4893606,114.962089 18.9332619,115.176024 C18.5290809,115.331791 17.8260425,115.020647 17.3157029,115.190078 C16.4875948,115.464915 16.5976214,116.907417 16.0678004,117.11862 C12.7691062,118.433464 9.44069672,113.504361 6.48191847,113.343909 C4.86832034,113.256461 3.50714906,114.33785 4.28187338,116.365942 C4.82030298,117.777604 7.1521321,118.543555 8.31806645,119.133048 C11.5636759,120.776994 14.7956022,122.001266 18.2658233,120.739516 C21.0634173,123.177911 24.4247131,124.380712 27.9404633,124.415457 C25.9286815,125.412912 23.9404919,126.650458 23.2377959,129.136091 C22.0492883,127.906352 19.1297602,122.18397 17.6048295,126.674272 C16.5600021,129.760719 21.328009,133.54519 23.5253695,134.93577 C20.9696368,135.690791 18.8477815,135.842653 16.2480678,135.542832 C14.8906605,135.386674 11.9114372,133.569004 13.0097195,137.290621 C14.1918233,141.306595 21.2508358,139.501808 23.4900552,138.806518 C23.573221,137.609182 12.720439,150.91495 20.3316507,148.295803 C22.5082405,147.54781 22.7169752,143.295258 25.7496614,142.923213 C29.2527527,142.493 29.604919,146.000291 31.6318019,148.569078 C32.6420388,149.851129 37.301235,152.734182 37.0806939,153.833919 C36.8900419,154.785698 34.3317238,155.329905 33.7876434,156.661927 C33.1549566,158.211397 33.4406255,159.407952 34.3203529,160.740363 C35.8579788,163.072962 38.6803216,163.431343 40.9122645,164.344472 C44.0760798,165.639406 45.222862,167.210738 46.6413081,170.561482 C44.1404008,170.681333 37.0221866,177.920783 41.3837473,179.20908 C43.008912,179.689263 42.7562908,178.242857 43.4326768,177.443722 C43.7062927,176.928403 43.9803807,176.413865 44.2542196,175.898937 C44.712395,174.701211 45.2188422,174.627817 45.7732734,175.678365 C45.8972683,175.647914 47.3835007,176.067196 47.7210266,176.087887 C49.4285338,176.192512 50.5714284,174.896017 51.9872076,174.195261 C53.0103456,173.688921 54.0114437,173.77676 54.7822568,172.609485 C54.6931475,172.74417 55.3356677,170.098476 55.3468697,170.07271 C55.6226004,169.435623 56.3317095,169.525891 56.6573761,168.839152 C47.908417,159.753669 42.1996805,147.719969 41.1683996,134.375285 C36.4198742,132.776426 33,128.28759 33,123 L33,110 C33,104.965228 36.1006595,100.654655 40.4966083,98.8736491 C41.0282518,99.2483349 41.7670825,98.8748923 42,98.0318338 C41.5372601,96.526107 45.2959449,70.1780326 55,63.1563695 C58.618222,60.7183684 78.0082164,60.5372207 97.3126144,60.5504522 C116.408606,60.5635409 135.42084,60.7446886 139,63.1563695 C148.704055,70.1780326 152.46274,96.526107 152,98.0318338 C152.232917,98.8748923 152.971748,99.2483349 153.503392,98.8736491 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(36.000000, 0.000000)\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M90.9102919,55.3613196 L175.085702,55.3613196 C193.333279,44.8338001 196.759397,26.1510357 183.849606,9.92600089 C180.635746,5.88682054 175.085702,21.6755614 158.028596,22.6504878 C140.97149,23.6254143 142.608865,16.3498661 124.45759,19.0739248 C106.306316,21.7979835 108.311575,36.37843 96.4671989,39.8768239 C88.5709482,42.2090865 86.7186458,47.370585 90.9102919,55.3613196 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<use stroke=\"none\" fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	mask1: (0, _common.uid)("mask-"),
	mask2: (0, _common.uid)("mask-"),
	mask3: (0, _common.uid)("mask-"),
	path1: (0, _common.uid)("path-"),
	path2: (0, _common.uid)("path-"),
	path3: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M175.126419,166.897818 C175.841424,169.13759 176.874789,171.230601 178.55519,172.685954 C180.17619,174.090053 183.068114,173.745469 185.098621,173.802748 C186.770693,173.850632 188.444623,173.856087 190.114529,173.783655 C190.95366,173.747287 191.327571,174.79771 190.648775,175.281705 C190.518773,175.374442 190.388771,175.462634 190.25846,175.543856 C189.20761,176.198779 188.11838,176.802787 187.008721,177.356184 C184.485135,178.614206 181.821334,179.600077 179.02722,180.090436 C177.110792,180.426519 175.211229,180.489668 173.372596,180.266511 C173.858877,180.986862 174.419563,181.642356 175.071506,182.207788 C176.801481,183.708407 179.887821,183.340135 182.054832,183.401352 C183.839313,183.452528 185.625776,183.458358 187.407944,183.380946 C188.303488,183.342078 188.702535,184.464709 187.978106,184.981974 C187.839364,185.081086 187.700623,185.175341 187.561551,185.262145 C186.440057,185.962089 185.2776,186.607617 184.093342,187.199055 C181.400104,188.543555 178.557223,189.597195 175.57527,190.121262 C170.075488,191.087126 164.705859,189.943766 160.380755,186.413279 C159.16361,185.419765 158.027363,184.287616 157,183.053001 L157,180.610951 C163.949635,177.309539 170.111406,172.618864 175.126419,166.897818 Z M81.3150549,151.593977 C80.572738,153.13892 79.8051751,154.672522 79.0058562,156.190972 C74.2106831,165.300379 68.2421528,176.792949 56.4993303,177.596328 C55.4105393,177.670743 54.9804404,178.942941 55.8287461,179.588187 C66.9485528,188.041497 92.2609618,193.18734 101.273548,191.569729 C104.095212,191.063278 106.638877,190.402091 109,189.610443 L109,180.610951 C96.5625107,174.702544 86.6484598,164.344483 81.3150549,151.593977 Z M195.90592,68.6796644 C196.081329,74.1868816 195.28885,79.9070851 194.184533,85.2955724 C193.189889,90.1482867 189.869671,93.9714569 188.837367,98.7289227 C184.809898,85.0481908 169.433037,80.4838679 160.242068,71.1548033 C162.238626,74.9478777 165.29094,78.1026546 167.294435,81.8328914 C158.047309,76.1675881 149.087576,67.953725 145.262273,57.5379012 C144.554691,62.9359795 142.545911,67.9275978 139.15401,72.2035294 C136.142657,76.0002417 131.572444,80.0744315 126.858864,81.5445 C129.286511,76.0372828 131.361358,70.327001 133.266412,64.6190342 C131.249704,67.2357231 124.568637,78.352682 122.891185,81.1086057 C121.234875,83.8298033 119.37772,86.426318 117.383805,88.9120401 C116.450603,90.0751967 115.455298,91.1993278 114.453055,92.302954 C113.869349,92.9458816 113.274082,93.578226 112.665931,94.1980029 C112.450882,94.4169423 110.823641,96.2071517 111.753871,95.0036468 C109.537639,97.8062025 106.276221,99.9826977 103.44325,102.112561 C100.59079,104.256976 97.4833088,106.08125 94.2522818,107.589351 C87.0932166,110.931649 79.7402436,112.148383 71.9327267,110.752066 C73.127556,111.05104 75.6533133,109.906073 76.8887739,109.570058 C78.6980301,109.07761 80.3625987,108.452872 82.0017312,107.546357 C85.2753717,105.735312 88.3514706,103.576015 91.1778346,101.127995 C88.4707222,102.280238 86.2726593,104.461694 83.513684,105.671152 C81.2270908,106.673576 78.9669245,107.196782 76.4817987,107.437218 C71.0203357,107.966046 64.4865987,106.716901 59.7607964,103.849523 C54.2686121,100.517478 51.2186099,94.7989286 49.7717335,88.7129442 C48.0913088,81.6460323 49.1355043,73.6726057 53.0992189,67.6388757 C53.2336661,69.781637 57.5349852,70.703365 61.0154166,70.1662691 C70.6728211,68.675365 76.4180436,32.1184491 101.441738,25.5998777 C121.403017,20.3995724 135.651446,29.4743102 136.862131,30.2568033 C138.299428,31.1854765 138.85043,30.796545 140.483286,30.4052984 C146.829392,28.8846292 153.741035,28.1960616 160.187893,29.4782789 C166.528383,30.7396605 172.606255,34.0244119 177.74696,37.856181 C187.273882,44.9574883 195.508524,56.4379129 195.90592,68.6796644 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<use stroke=\"none\" fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tstroke=\"none\"\n\t\t\t\t\t\t\tfill-opacity=\"0.16\"\n\t\t\t\t\t\t\tfill=\"#000000\"\n\t\t\t\t\t\t\tfill-rule=\"evenodd\"\n\t\t\t\t\t\t\td=\"M175.126419,166.897818 C175.841424,169.13759 176.874789,171.230601 178.55519,172.685954 C180.17619,174.090053 183.068114,173.745469 185.098621,173.802748 C186.770693,173.850632 188.444623,173.856087 190.114529,173.783655 C190.95366,173.747287 191.327571,174.79771 190.648775,175.281705 C190.518773,175.374442 190.388771,175.462634 190.25846,175.543856 C189.20761,176.198779 188.11838,176.802787 187.008721,177.356184 C184.485135,178.614206 181.821334,179.600077 179.02722,180.090436 C177.110792,180.426519 175.211229,180.489668 173.372596,180.266511 C173.858877,180.986862 174.419563,181.642356 175.071506,182.207788 C176.801481,183.708407 179.887821,183.340135 182.054832,183.401352 C183.839313,183.452528 185.625776,183.458358 187.407944,183.380946 C188.303488,183.342078 188.702535,184.464709 187.978106,184.981974 C187.839364,185.081086 187.700623,185.175341 187.561551,185.262145 C186.440057,185.962089 185.2776,186.607617 184.093342,187.199055 C181.400104,188.543555 178.557223,189.597195 175.57527,190.121262 C170.075488,191.087126 164.705859,189.943766 160.380755,186.413279 C159.16361,185.419765 158.027363,184.287616 157,183.053001 L157,180.610951 C163.949635,177.309539 170.111406,172.618864 175.126419,166.897818 Z M81.3150549,151.593977 C80.572738,153.13892 79.8051751,154.672522 79.0058562,156.190972 C74.2106831,165.300379 68.2421528,176.792949 56.4993303,177.596328 C55.4105393,177.670743 54.9804404,178.942941 55.8287461,179.588187 C66.9485528,188.041497 92.2609618,193.18734 101.273548,191.569729 C104.095212,191.063278 106.638877,190.402091 109,189.610443 L109,180.610951 C96.5625107,174.702544 86.6484598,164.344483 81.3150549,151.593977 Z\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M198.74696,37.856181 C193.606255,34.0244119 187.528383,30.7396605 181.187893,29.4782789 C174.741035,28.1960616 170.829392,27.8846292 164.483286,29.4052984 C162.85043,29.796545 162.299428,30.1854765 160.862131,29.2568033 C159.651446,28.4743102 151.200134,19.7668788 125.441738,24.5998777 C99.4069464,29.4847361 91.6728211,68.675365 82.0154166,70.1662691 C78.5349852,70.703365 74.2336661,69.781637 74.0992189,67.6388757 C70.1355043,73.6726057 69.0913088,81.6460323 70.7717335,88.7129442 C72.2186099,94.7989286 75.2686121,100.517478 80.7607964,103.849523 C85.4865987,106.716901 92.0203357,107.966046 97.4817987,107.437218 C99.9669245,107.196782 102.227091,106.673576 104.513684,105.671152 C107.272659,104.461694 109.470722,102.280238 112.177835,101.127995 C109.351471,103.576015 106.275372,105.735312 103.001731,107.546357 C101.362599,108.452872 99.6980301,109.07761 97.8887739,109.570058 C96.6533133,109.906073 94.127556,111.05104 92.9327267,110.752066 C100.740244,112.148383 108.093217,110.931649 115.252282,107.589351 C118.483309,106.08125 121.59079,104.256976 124.44325,102.112561 C127.276221,99.9826977 130.537639,97.8062025 132.753871,95.0036468 C131.823641,96.2071517 133.450882,94.4169423 133.665931,94.1980029 C134.274082,93.578226 134.869349,92.9458816 135.453055,92.302954 C136.455298,91.1993278 137.450603,90.0751967 138.383805,88.9120401 C140.37772,86.426318 142.234875,83.8298033 143.891185,81.1086057 C145.568637,78.352682 152.249704,67.2357231 154.266412,64.6190342 C152.361358,70.327001 150.286511,76.0372828 147.858864,81.5445 C152.572444,80.0744315 157.142657,76.0002417 160.15401,72.2035294 C163.545911,67.9275978 165.554691,62.9359795 166.262273,57.5379012 C170.087576,67.953725 179.047309,76.1675881 188.294435,81.8328914 C186.29094,78.1026546 183.238626,74.9478777 181.242068,71.1548033 C190.433037,80.4838679 205.809898,85.0481908 209.837367,98.7289227 C210.869671,93.9714569 214.189889,90.1482867 215.184533,85.2955724 C216.28885,79.9070851 217.081329,74.1868816 216.90592,68.6796644 C216.508524,56.4379129 208.273882,44.9574883 198.74696,37.856181 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<use stroke=\"none\" fill=\"" + color + "\" fill-rule=\"evenodd\" transform=\"translate(143.465161, 67.234158) scale(-1, 1) translate(-143.465161, -67.234158) \" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M94.2519269,52.0221149 C94.3749353,51.9677149 94.0696712,51.9468149 93.3361345,51.9595149 C94.2276637,51.9577149 94.5329279,51.9785149 94.2519269,52.0221149 M86.1169775,36.3015924 C86.1148422,36.2819924 86.1337548,36.4526924 86.1169775,36.3015924 M193.765056,70.7656665 C193.500946,67.448734 193.03295,64.1518864 192.246676,60.9110823 C191.622233,58.3353492 190.769007,55.8775343 189.760006,53.4200433 C189.150703,51.9353766 187.727538,49.8961062 187.560324,48.2944933 C187.395466,46.7168527 188.626521,44.969138 188.889285,43.1323368 C189.144311,41.3447761 189.100909,39.4652134 188.734183,37.6938503 C187.901144,33.6710288 185.140271,29.9300447 180.877167,28.8814158 C179.925362,28.6471994 177.913417,28.9358396 177.240862,28.3815597 C176.469729,27.7459682 175.932761,25.5806808 175.234637,24.7121687 C173.244224,22.2362125 170.13984,20.6417265 166.865887,21.1976261 C164.454917,21.606776 165.839391,22.1053363 164.032005,20.6864317 C163.027041,19.8976114 162.276095,18.6931622 161.300066,17.8392279 C159.832826,16.5563826 158.149588,15.4581893 156.408146,14.556958 C151.851325,12.19892 146.654249,10.4848961 141.564162,9.64942693 C132.278934,8.12523827 122.368926,9.45408458 113.368668,11.8688141 C108.890239,13.0703477 104.381531,14.5951842 100.222053,16.6117782 C98.4385542,17.4764029 97.4090304,18.1936301 95.5494951,18.4200717 C92.6207355,18.7767416 90.1404579,18.7589243 87.3661268,20.0009517 C78.8298269,23.8229236 74.9849256,32.6897818 78.3066539,41.1750259 C78.974835,42.8815988 79.8795374,44.3801954 81.1267416,45.7586062 C82.6474761,47.4392631 83.1975648,47.1085093 81.8877817,49.0411999 C79.9289949,51.9311653 78.2777195,55.0129095 76.9332826,58.2128958 C73.4043038,66.6145606 72.8138416,76.0771643 73.043634,85.0373203 C73.1240445,88.1741362 73.2586228,91.3495022 73.753198,94.4561907 C73.966841,95.8009106 74.0267283,98.3293468 75.0353925,99.3271154 C75.5471264,99.8331265 76.2762042,100.115288 77.0035997,99.9137903 C78.7130802,99.4401742 78.1253096,98.1787097 78.1650102,97.0076274 C78.364859,91.1240324 78.0950295,85.9191145 79.4943071,80.1064647 C80.5278683,75.8118486 82.2504702,71.9114806 84.4827873,68.0713675 C87.3213795,63.1871608 90.3857268,58.8977279 94.2895061,54.7155226 C95.2073299,53.7320079 95.4078515,53.3150832 96.6385698,53.243814 C97.5705244,53.1900382 98.9338023,53.8282213 99.8398505,54.0491558 C101.837665,54.5360539 103.83918,55.0174448 105.873331,55.3452831 C109.613261,55.9481556 113.316519,55.9886494 117.090094,55.8704074 C124.516459,55.6381346 131.974787,55.1172217 139.175061,53.2470535 C143.956964,52.00535 148.196516,49.7762443 152.776887,48.1422364 C152.858644,48.1130808 154.006596,47.2951049 154.207791,47.3284719 C154.488723,47.3747968 156.184746,49.1542588 156.471061,49.3784327 C158.696649,51.1238798 161.137899,51.8566566 163.541467,53.2081794 C166.504881,54.8745825 163.634999,52.4899804 165.269452,54.5668292 C165.745859,55.1716454 165.989782,56.2931632 166.371984,56.9783192 C167.587899,59.1610999 169.279548,61.0795367 171.302932,62.6017816 C173.258018,64.0725184 176.196198,64.7829426 177.193087,66.697168 C177.961865,68.1740599 178.220929,70.1812592 178.841334,71.7579279 C180.468722,75.8931602 182.617937,79.7494709 184.767152,83.6443317 C186.498502,86.7830913 188.392354,89.5250111 188.584801,93.1117947 C188.651754,94.3603012 187.463764,101.849397 190.357534,99.5716982 C190.786502,99.2341415 191.711391,95.415733 191.901483,94.7678314 C192.672616,92.135083 192.94682,89.3866841 193.29605,86.6816947 C193.990474,81.3021672 194.218584,76.1837441 193.765056,70.7656665\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<use stroke=\"none\" fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M180.14998,39.9204083 C177.390206,37.1003988 174.185913,34.7068297 171.069252,32.3065503 C170.381566,31.777442 169.682843,31.2610833 169.010544,30.7118441 C168.857687,30.5870323 167.291999,29.4657388 167.104691,29.0530544 C166.653816,28.0602634 166.915042,28.8332916 166.977255,27.6485857 C167.055857,26.150508 170.11064,21.9193194 167.831176,20.9490079 C166.828413,20.522232 165.039628,21.6579526 164.077671,22.0330592 C162.196235,22.7671676 160.291721,23.3932399 158.346734,23.9330847 C159.278588,22.0763407 161.055333,18.3594977 157.71591,19.3543018 C155.114345,20.1293431 152.690052,22.1219709 150.075777,23.0594018 C150.940735,21.6415124 154.399901,17.2479341 151.274209,17.0023366 C150.301549,16.925839 147.471201,18.7503735 146.423952,19.1395717 C143.287223,20.3054888 140.083264,21.0590571 136.789999,21.6525844 C125.59203,23.6707114 112.497238,23.0953019 102.1368,28.1934632 C94.1494796,32.1236942 86.262502,38.2220278 81.648386,45.987539 C77.2011742,53.472559 75.537818,61.6641751 74.6069673,70.2412987 C73.9239644,76.535909 73.8684412,83.0425652 74.1878671,89.3599905 C74.2922241,91.4297869 74.5250203,100.970847 77.5319724,98.0813859 C79.0300967,96.641688 79.019059,90.8282073 79.3963495,88.8604076 C80.1472513,84.9452748 80.870057,81.0126951 82.122006,77.2227096 C84.3282191,70.5439339 86.9307879,63.4296587 92.4269209,58.8297383 C95.9539853,55.8782066 98.4307906,51.8889248 101.806002,48.9112229 C103.322188,47.5738572 102.165231,47.7130963 104.602902,47.888571 C106.240504,48.006337 107.885464,48.0512961 109.52641,48.0942421 C113.322394,48.1928837 117.124399,48.16772 120.921387,48.1811407 C128.56821,48.208653 136.179243,48.316689 143.818708,47.9164188 C147.213653,47.7385955 150.617965,47.6423024 154.00388,47.3282597 C155.895349,47.152785 159.251496,45.9405668 160.808488,46.8669256 C162.233362,47.7144383 163.71309,50.4817719 164.736257,51.615144 C167.153525,54.2935659 170.035717,56.3392052 172.862385,58.5354911 C178.756547,63.114945 181.732392,68.8666908 183.522515,76.023241 C185.305949,83.1532854 184.805905,89.76815 187.013456,96.78479 C187.401784,98.0184813 188.428965,100.14498 189.695296,98.2389151 C189.930434,97.8849461 189.869559,95.9390277 189.869559,94.819339 C189.869559,90.2995934 191.014141,86.9083772 190.999758,82.3591197 C190.943566,68.5271489 190.49637,50.4908308 180.14998,39.9204083 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<use stroke=\"none\" fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M167.308863,35.006118 C147.121091,23.3065109 127.128954,25.2219854 112.036894,29.0299707 C96.9448338,32.8379559 88.0168242,43.6513048 80.3566792,59.6480618 C76.5956048,67.5028569 74.3660182,76.7914798 74.0230569,85.4813651 C73.8884429,88.8932666 74.3484305,92.415154 75.267729,95.7003546 C75.6049405,96.9061873 77.4232441,101.086987 77.9224658,97.70885 C78.0885348,96.584253 77.4804043,95.0327505 77.4215529,93.8376154 C77.3444374,92.2693977 77.4273028,90.6807875 77.5341822,89.1149098 C77.7340739,86.1874141 78.2559568,83.3154127 79.1847257,80.524647 C80.5119249,76.5367405 82.2013644,72.212859 84.7874413,68.8480942 C91.1883705,60.5205939 102.268658,60.045883 111.066257,55.4635848 C110.302881,56.8686624 107.359637,59.1432635 108.379389,60.7268592 C109.083576,61.8207003 111.749474,61.4890712 113.022219,61.4539693 C116.370996,61.3623702 119.734993,60.7796791 123.042844,60.306974 C128.255923,59.5618115 133.140585,58.0517626 138.046555,56.2181078 C142.06299,54.7164165 146.650012,53.3257139 149.66868,50.1404701 C154.539813,55.1881187 160.809849,59.9345599 167.070414,63.1428706 C172.68835,66.0222267 181.748751,67.461069 185.182761,73.3006826 C189.2479,80.2147477 187.37751,88.7073939 188.619138,96.2008069 C189.091302,99.05041 190.164155,98.986558 190.751315,96.4378281 C191.748406,92.1082634 192.219217,87.6102098 191.901961,83.1592929 C191.183568,73.1114668 187.496636,46.7057251 167.308863,35.006118 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<use stroke=\"none\" fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M183.679824,38.9488198 C189.086072,33.9985622 190.387393,23.9615454 187.317704,17.4493246 C183.549263,9.45385312 175.901319,8.45217737 168.572342,11.9686703 C161.664469,15.2835661 155.515175,16.3878671 147.950196,14.7817319 C140.691624,13.2406923 133.805566,10.5226172 126.303388,10.0762471 C113.978028,9.34292483 102.003367,13.914565 93.6031232,23.1292512 C92.0003538,24.8871655 90.7089493,26.8971594 89.4882796,28.9343872 C88.5115454,30.5644351 87.4105298,32.3133822 86.9950459,34.1921885 C86.7973853,35.0855929 87.165272,37.2898774 86.7203704,38.0218712 C86.2391099,38.8123183 84.4244668,39.5373375 83.6510124,40.1238625 C82.0842713,41.3125222 80.7267597,42.6539573 79.4713836,44.1710842 C76.8052796,47.3926541 75.3376994,50.7577001 74.1034777,54.7428152 C70.0005333,67.9877849 69.6528094,83.7412616 74.9569218,96.7467724 C75.6639385,98.4811062 77.8550622,102.098564 79.1431613,98.3847912 C79.3976741,97.6508047 78.8086588,95.1907873 78.8099809,94.4501584 C78.8146084,91.7300906 80.3160587,73.7213568 86.857084,63.6330196 C88.9862338,60.3491948 98.8298903,48.0522456 100.840541,47.9536058 C101.9058,49.6464245 112.720532,60.4624529 140.783385,59.1948919 C153.445253,58.6229725 163.18265,52.9341181 165.520833,50.4680909 C166.549375,56.0008881 178.51323,64.2839965 180.33625,67.6921976 C185.602529,77.5376948 186.770677,97.9957204 188.780988,97.9573368 C190.791299,97.9189532 192.234429,92.7197798 192.647929,91.7270713 C195.719601,84.351669 196.242509,75.0948338 195.914948,67.1684434 C195.487565,56.9663626 191.276535,45.9419513 183.679824,38.9488198 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<use stroke=\"none\" fill=\"" + color + "\" fill-rule=\"evenodd\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M6,28 C0.923687084,28.0709555 0,26.9937684 0,23 C1.30010922e-16,17.3439836 4.0408529,6.77808536 8,2 C9.17612094,-0.170695788 11.6189856,-1.43187215 11,3 C8.3404922,11.4766099 11.4173429,27.914487 6,28 Z M120,28 C114.582657,27.914487 117.659508,11.4766099 115,3 C114.381014,-1.43187215 116.823879,-0.170695788 118,2 C121.959147,6.77808536 126,17.3439836 126,23 C126,26.9937684 125.076313,28.0709555 120,28 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(70.000000, 74.000000)\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: [""],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<defs>\n\t\t\t\t\t<path\n\t\t\t\t\t\td=\"M82.0179468,24.3784638 C74.9860629,23.6847351 66.6573358,23.2514721 58.3126144,23.245568 C39.0082164,23.2319099 19.618222,25.4833872 16,28 C6.29594493,35.2480719 2.53726005,62.445722 3,64 C2.67275588,65.2226722 1.34685629,65.488448 1,64 C0.280821545,53.7019177 1,1.72563718 58,1 C115,0.274362825 115.719178,53.7019177 115,64 C114.653144,65.488448 113.327244,65.2226722 113,64 C113.46274,62.445722 109.704055,35.2480719 100,28 C98.2407122,26.7763475 92.7526689,25.6101897 85.3587425,24.7390449 L89,16 L82.0179468,24.3784638 Z\"\n\t\t\t\t\t\tid=\"" + id.path1 + "\"/>\n\t\t\t\t</defs>\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(75.000000, 34.000000)\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

var id = {
	path1: (0, _common.uid)("path-")
};

exports.default = new _common.AvatarPart({
	defs: ["<path\n\t\t\tid=\"" + id.path1 + "\"\n\t\t\td=\"M1,64 C1.34685629,65.488448 2.67275588,65.2226722 3,64 C2.53726005,62.445722 6.29594493,35.2480719 16,28 C19.618222,25.4833872 39.0082164,23.2319099 58.3126144,23.245568 C77.4086061,23.2590787 96.4208396,25.5105561 100,28 C109.704055,35.2480719 113.46274,62.445722 113,64 C113.327244,65.2226722 114.653144,65.488448 115,64 C115.719178,53.7019177 115,0.274362825 58,1 C1,1.72563718 0.280821545,53.7019177 1,64 Z\"\n\t\t\t/>"],
	render: function render(_ref) {
		var color = _ref.color;

		return "\n\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\">\n\t\t\t\t<g mask=\"url(#frameMask)\">\n\t\t\t\t\t<g transform=\"translate(-1.000000, 0.000000)\">\n\t\t\t\t\t\t<g stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(75.000000, 34.000000)\">\n\t\t\t\t\t\t\t<use fill=\"" + color + "\" xlink:href=\"#" + id.path1 + "\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t";
	},

	attrs: {
		color: _colors.hairColors
	}
});

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(0);

var _colors = __webpack_require__(1);

exports.default = new _common.AvatarPart({
	render: function render(_ref) {
		var maskID = _ref.maskID,
		    color = _ref.color;

		return "\n\t\t<g transform=\"translate(32.000000, 36.000000)\">\n\t\t\t<g\n\t\t\t\tmask=\"url(#" + maskID + ")\"\n\t\t\t\tfill=\"" + color + "\">\n\t\t\t\t<g transform=\"translate(-32.000000, 0.000000)\">\n\t\t\t\t\t<rect x=\"0\" y=\"0\" width=\"264\" height=\"244\" />\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<path\n\t\t\t\tfill-opacity=\"0.100000001\"\n\t\t\t\tfill=\"#000000\"\n\t\t\t\tmask=\"url(#" + maskID + ")\"\n\t\t\t\td=\"M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z\"\n\t\t\t/>\n\t\t</g>";
	},

	attrs: {
		color: _colors.skinColors
	}
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=avataaars-pure.js.map