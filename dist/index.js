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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blocks/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/index.js":
/*!*****************************!*\
  !*** ./src/blocks/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/blocks/map/index.js");
/**
 * Block Registration
 */

/**
 *  WordPress dependencies
 */

/**
 * Internal dependencies
 */



const registerBlocks = () => {
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_map__WEBPACK_IMPORTED_MODULE_1__["name"], _map__WEBPACK_IMPORTED_MODULE_1__["settings"]);
}; // Kick Off all block here


registerBlocks();

/***/ }),

/***/ "./src/blocks/map/index.js":
/*!*********************************!*\
  !*** ./src/blocks/map/index.js ***!
  \*********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/map */ "./src/components/map/index.js");


/**
 * Test Map Block
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Block name
 * 
 * @type string
 */

const name = 'gutenberg-block-components/map';
/**
 * Block Settings
 * 
 * @type {Object}
 */

const settings = {
  /**
   * Block title
   * 
   * @type {string}
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Map', 'gbc'),

  /**
   * Block icon
   * 
   * @type {string}
   */
  icon: 'location-alt',

  /**
   * Block description
   * 
   * @type {string}
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Embed google map by address', 'gbc'),

  /**
   * Block category
   * 
   * @type {string}
   */
  category: 'common',

  /**
   * Block supports
   * 
   * @type {Object}
   */
  support: {
    align: true
  },
  attributes: {
    mapAlign: {
      type: 'string',
      default: ''
    },
    mapQuery: {
      type: 'string',
      default: ''
    },
    mapHeight: {
      type: 'integer',
      default: 400
    },
    mapApiKey: {
      type: 'string',
      default: ''
    },
    mapZoomLevel: {
      type: 'integer',
      default: 12
    }
  },

  /**
   * Creates editor block.
   * 
   * @param {Object} props
   *  
   * @returns {JSX} 
   */
  edit(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_map__WEBPACK_IMPORTED_MODULE_2__["default"], props);
  },

  /**
   * Save
   * 
   * @param {Object} props
   *  
   * @returns {JSX} 
   */
  save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_map__WEBPACK_IMPORTED_MODULE_2__["default"].Content, props);
  }

};

/***/ }),

/***/ "./src/components/map/index.js":
/*!*************************************!*\
  !*** ./src/components/map/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector-control */ "./src/components/map/inspector-control.js");
/* harmony import */ var _toolbar_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar-controls */ "./src/components/map/toolbar-controls.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/components/map/save.js");


/**
 * Map Component
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




/**
 * Map Component
 * 
 * @param {Object} props Component props 
 */

const Map = ({
  attributes,
  setAttributes
}) => {
  const {
    mapQuery,
    mapHeight,
    mapApiKey,
    mapZoomLevel
  } = attributes; // Component states.

  const [showingMap, setShowingMap] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [mapSrc, setMapSrc] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [showNoKeyError, setShowNoKeyError] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  /**
   * Change the source of the map
   * 
   * @return {void}
   */

  const updateMap = () => {
    if (!mapApiKey) {
      setShowNoKeyError(true);
      setShowingMap(false);
      return;
    }

    if (mapQuery) {
      const newMapSrc = isNaN(parseInt(mapZoomLevel)) ? `https://google.com/maps/embed/v1/place?key=${mapApiKey}&q=${encodeURI(mapQuery)}` : `https://google.com/maps/embed/v1/place?key=${mapApiKey}&q=${encodeURI(mapQuery)}&zoom=${mapZoomLevel}`;
      setMapSrc(newMapSrc);
      setShowingMap(true);
    }
  };

  if (showingMap) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "gbc-map"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("iframe", {
      title: "map-location",
      width: "100%",
      height: mapHeight,
      allowFullScreen: "",
      src: mapSrc,
      frameBorder: "1"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inspector_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      showingMap: showingMap,
      stateHandles: {
        setMapSrc,
        setShowNoKeyError,
        setShowingMap
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_toolbar_controls__WEBPACK_IMPORTED_MODULE_4__["default"], {
      stateHandles: {
        setShowingMap
      }
    }));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-map"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], {
    key: "map-placeholder",
    icon: "location-alt",
    className: "placeholder",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Google Map', 'gbc'),
    instructions: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enter a location or address to drop a pin on the Google map')
  }, showNoKeyError && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "placeholder__error"
  }, 'No API Key supplied'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    key: "map-query-input",
    className: "placeholder__input",
    value: mapQuery,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Search for a place or address', 'gbc'),
    onChange: newMapQuery => setAttributes({
      mapQuery: newMapQuery
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    key: "map-button",
    className: "placeholder__button",
    disabled: !mapQuery,
    onClick: updateMap,
    isPrimary: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Apply', 'gbc'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inspector_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    showingMap: showingMap,
    stateHandles: {
      setMapSrc,
      setShowNoKeyError,
      setShowingMap
    }
  }));
};

Map.Content = _save__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./src/components/map/inspector-control.js":
/*!*************************************************!*\
  !*** ./src/components/map/inspector-control.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * MapInspectorControls component
 */

/**
 * WordPress dependencies
 */



/**
 * MapInspectorControls component
 * 
 * @param {Object} props components props
 */

const MapInspectorControls = ({
  attributes,
  setAttributes,
  stateHandles
}) => {
  const {
    mapQuery,
    mapHeight,
    mapApiKey,
    mapZoomLevel
  } = attributes;
  const {
    setMapSrc,
    setShowNoKeyError,
    setShowingMap
  } = stateHandles;
  /**
   * Update zoom level and change map source.
   * 
   * @param {integer} newMapZoomLevel
   * 
   * @return {void} 
   */

  const onChangeZoom = newMapZoomLevel => {
    setAttributes({
      mapZoomLevel: newMapZoomLevel
    });

    if (!mapApiKey) {
      setShowNoKeyError(true);
      setAttributes({
        showingMap: false
      });
      return;
    }

    if (showingMap && mapQuery) {
      const newMapSrc = isNaN(parseInt(newMapZoomLevel)) ? `https://google.com/maps/embed/v1/place?key=${mapApiKey}&q=${encodeURI(mapQuery)}` : `https://google.com/maps/embed/v1/place?key=${mapApiKey}&q=${encodeURI(mapQuery)}&zoom=${newMapZoomLevel}`;
      setMapSrc(newMapSrc);
    }
  };
  /**
   * Update API Key
   * 
   * @param {string} newKey New API Key 
   */


  const onChangeApiKey = newKey => {
    setAttributes({
      mapApiKey: newKey
    });
    setShowNoKeyError(false);
  };

  const onChangeHeight = newHeight => {
    setAttributes({
      mapHeight: newHeight
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    className: "settings",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Map Settings', 'gbc')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    className: "settings__hieht-input",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Map Height in pixcel', 'gbc'),
    value: mapHeight,
    onChange: onChangeHeight,
    min: 50,
    max: 1000,
    step: 20
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    className: "settings__zoom-input",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Zoom Level', 'gbc'),
    value: isNaN(parseInt(mapZoomLevel)) ? '' : mapZoomLevel,
    onChange: onChangeZoom,
    min: 0,
    max: 21,
    step: 1
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    className: "settings__key-input",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Map API Key', 'gbc'),
    value: mapApiKey,
    onChange: onChangeApiKey
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MapInspectorControls);

/***/ }),

/***/ "./src/components/map/save.js":
/*!************************************!*\
  !*** ./src/components/map/save.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Save component
 * 
 * @param {Object} props
 *  
 * @returns {*} 
 */
const Save = ({
  attributes
}) => {
  const {
    mapQuery,
    mapApiKey,
    mapHeight
  } = attributes;
  const mapZoomLevel = 15;

  if (!mapQuery || !mapApiKey) {
    return null;
  }

  const mapSrc = isNaN(parseInt(mapZoomLevel)) ? `https://google.com/maps/embed/v1/place?key=${mapApiKey}&q=${encodeURI(mapQuery)}` : `https://google.com/maps/embed/v1/place?key=${mapApiKey}&q=${encodeURI(mapQuery)}&zoom=${mapZoomLevel}`;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "gbc-map gbc-active"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("iframe", {
    title: "map-location",
    width: "100%",
    height: mapHeight,
    allowFullScreen: "",
    src: mapSrc,
    frameBorder: "1"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/components/map/toolbar-controls.js":
/*!************************************************!*\
  !*** ./src/components/map/toolbar-controls.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Map Toolbar Controls component
 */

/**
 * WordPress dependencies
 */



/**
 * MapToolbarControls Component
 * 
 * @param {Object} props Component props
 *  
 * @returns {JSX}
 */

const MapToolbarControls = ({
  stateHandles
}) => {
  const {
    setShowingMap
  } = stateHandles;
  /**
   * Toolbar controls
   */

  const toolbarControls = [{
    icon: 'edit',
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Edit Location', 'gbc'),
    onClick: () => setShowingMap(false)
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], {
    className: "toolbar"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    className: "toolbar__edit",
    controls: toolbarControls
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MapToolbarControls);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map