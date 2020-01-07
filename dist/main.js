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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'node_modules/country-list/country-list'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body */ \"./src/body.js\");\n\n\n\n\nObject(_body__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst tempNum = document.querySelector('.temp-num');\nconst tempDescription = document.querySelector('.weather-description');\nconst noLocationFound = document.querySelector('.current-location');\nconst city = document.querySelector('.city');\nconst country = document.querySelector('.country');\nconst tempBtn = document.querySelector('.temperature');\nconst icon = document.querySelector('.wu');\nconst convertToCelsius = tempInKelvin => Math.floor(tempInKelvin + -273.15);\nconst convertToFahrenheit = tempInKelvin => Math.floor(tempInKelvin + -459.67);\n\nconst renderData = (data) => {\n  if (tempBtn.classList.contains('fahrenheit')) {\n    tempNum.innerText = convertToFahrenheit(data.main.temp);\n    document.querySelector('.temp-degree').innerText = '';\n    document.querySelector('.temp-celsius').innerText = 'F';\n  } else {\n    tempNum.innerText = convertToCelsius(data.main.temp);\n    document.querySelector('.temp-degree').innerText = 'o';\n    document.querySelector('.temp-celsius').innerText = 'C';\n  }\n\n  tempDescription.innerText = data.weather[0].description;\n  city.innerText = data.name;\n\n  country.innerText = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'node_modules/country-list/country-list'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).getName(data.sys.country);\n  icon.classList.toggle('wu-chancerain');\n  noLocationFound.classList.remove('no-location');\n  noLocationFound.classList.add('found-location');\n};\n\nconst getWeatherAtLocation = (inputLocation) => {\n  const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&APPID=2874e0623c8807994e18916c8cd78f21`;\n  fetch(weatherApi, { mode: 'cors' })\n    .then(response => response.json())\n    .then((data) => {\n      if (data.main === undefined) {\n        noLocationFound.innerText = 'Location weather unavailable';\n        noLocationFound.classList.remove('found-location');\n        noLocationFound.classList.add('no-location');\n      } else {\n        noLocationFound.innerText = `Weather in ${data.name}`;\n        renderData(data);\n      }\n    });\n};\n\nconst listenToTempChange = () => {\n  tempBtn.addEventListener('click', () => {\n    tempBtn.classList.toggle('fahrenheit');\n    const cityInput = document.querySelector('#get-location-id').value;\n    getWeatherAtLocation(cityInput);\n  });\n};\n\nconst showWeatherAtUserLat = (lat, lng) => {\n  const weatherApi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=2874e0623c8807994e18916c8cd78f21`;\n  fetch(weatherApi, { mode: 'cors' })\n    .then(response => response.json())\n    .then((data) => {\n      noLocationFound.innerText = `You're currently in ${data.name}`;\n      noLocationFound.classList.add('found-location');\n      renderData(data);\n    });\n};\n\nconst runForm = () => {\n  const submitForm = document.querySelector('.get-location');\n  submitForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const cityInput = document.querySelector('#get-location-id').value;\n    getWeatherAtLocation(cityInput);\n  });\n};\n\nconst grabUserLocation = (lat, lng) => {\n  if (lat === undefined && lng === undefined) {\n    noLocationFound.innerText = 'Click \\'Allow\\' to enable location';\n  } else {\n    showWeatherAtUserLat(lat, lng);\n  }\n};\n\nconst getCurrentLocation = () => {\n  const successFunction = (position) => {\n    const lat = position.coords.latitude;\n    const lng = position.coords.longitude;\n    grabUserLocation(lat, lng);\n  };\n\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(successFunction);\n  }\n};\n\nconst getImageAtLocation = (location) =>{\n  const imgApi = 'https://api.unsplash.com/search/photos?page=1&query=office';\n  fetch(imgApi)\n   .then(response => response.json())\n     .then( data => console.log(data));\n}\n// getCurrentLocation();\nrunForm();\ngrabUserLocation();\nlistenToTempChange();\ngetImageAtLocation();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst appLoad = () => {\n  const appBody = document.querySelector('.app-body');\n  appBody.innerHTML = `\n<nav class=\"app-title\">\n<h2>Weatherify</h2>\n</nav>\n<main class=\"app-work\">\n<div class=\"current-location-wrapper\">\n  <h4 class=\"current-location no-location\">\n          Unable to identify your location\n  </h4>\n</div>\n\n<section class=\"app-info\">\n\n  <div class=\"weather-img\">\n  <i class=\"wu wu-black wu-128 wu-chanceflurries\"></i>\n  </div>\n  <div class=\"temperature\">\n    <span class=\"temp-num\">__</span><span class=\"temp-degree\"></span>\n    <span class=\"temp-celsius\"></span>          \n  </div>\n\n  <div>\n    <h3 class=\"weather-description\">_______</h3>\n  </div>\n  <div class=\"weather-location\">\n    <span><em class=\"city\"></em>, </span\n    ><span><em class=\"country\"></em> </span>\n    \n  </div>\n</section>\n<section class=\"location\">\n  <form action=\"\" class=\"get-location\">\n    <input\n      type=\"text\"\n      placeholder=\"enter a City name to see the weather\" id=\"get-location-id\" onclick=reset();\n    />\n  </form>\n</section>\n</main>\n`;\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (appLoad);\n\n//# sourceURL=webpack:///./src/body.js?");

/***/ })

/******/ });