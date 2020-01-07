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

/***/ "./node_modules/country-list/country-list.js":
/*!***************************************************!*\
  !*** ./node_modules/country-list/country-list.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar data = __webpack_require__(/*! ./data.json */ \"./node_modules/country-list/data.json\")\n\n/** Precompute name and code lookups. */\nvar nameMap = {}\nvar codeMap = {}\ndata.forEach(mapCodeAndName)\n\nfunction mapCodeAndName (country) {\n  nameMap[country.name.toLowerCase()] = country.code\n  codeMap[country.code.toLowerCase()] = country.name\n}\n\nexports.overwrite = function overwrite (countries) {\n  if (!countries || !countries.length) return\n  countries.forEach(function (country) {\n    var foundIndex = data.findIndex(function (item) {\n      return item.code === country.code\n    })\n    data[foundIndex] = country\n    mapCodeAndName(country)\n  })\n}\n\nexports.getCode = function getCode (name) {\n  return nameMap[name.toLowerCase()]\n}\n\nexports.getName = function getName (code) {\n  return codeMap[code.toLowerCase()]\n}\n\nexports.getNames = function getNames () {\n  return data.map(function (country) {\n    return country.name\n  })\n}\n\nexports.getCodes = function getCodes () {\n  return data.map(function (country) {\n    return country.code\n  })\n}\n\nexports.getCodeList = function getCodeList () {\n  return codeMap\n}\n\nexports.getNameList = function getNameList () {\n  return nameMap\n}\n\nexports.getData = function getData () {\n  return data\n}\n\n\n//# sourceURL=webpack:///./node_modules/country-list/country-list.js?");

/***/ }),

/***/ "./node_modules/country-list/data.json":
/*!*********************************************!*\
  !*** ./node_modules/country-list/data.json ***!
  \*********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"code\\\":\\\"AD\\\",\\\"name\\\":\\\"Andorra\\\"},{\\\"code\\\":\\\"AE\\\",\\\"name\\\":\\\"United Arab Emirates\\\"},{\\\"code\\\":\\\"AF\\\",\\\"name\\\":\\\"Afghanistan\\\"},{\\\"code\\\":\\\"AG\\\",\\\"name\\\":\\\"Antigua and Barbuda\\\"},{\\\"code\\\":\\\"AI\\\",\\\"name\\\":\\\"Anguilla\\\"},{\\\"code\\\":\\\"AL\\\",\\\"name\\\":\\\"Albania\\\"},{\\\"code\\\":\\\"AM\\\",\\\"name\\\":\\\"Armenia\\\"},{\\\"code\\\":\\\"AO\\\",\\\"name\\\":\\\"Angola\\\"},{\\\"code\\\":\\\"AQ\\\",\\\"name\\\":\\\"Antarctica\\\"},{\\\"code\\\":\\\"AR\\\",\\\"name\\\":\\\"Argentina\\\"},{\\\"code\\\":\\\"AS\\\",\\\"name\\\":\\\"American Samoa\\\"},{\\\"code\\\":\\\"AT\\\",\\\"name\\\":\\\"Austria\\\"},{\\\"code\\\":\\\"AU\\\",\\\"name\\\":\\\"Australia\\\"},{\\\"code\\\":\\\"AW\\\",\\\"name\\\":\\\"Aruba\\\"},{\\\"code\\\":\\\"AX\\\",\\\"name\\\":\\\"Åland Islands\\\"},{\\\"code\\\":\\\"AZ\\\",\\\"name\\\":\\\"Azerbaijan\\\"},{\\\"code\\\":\\\"BA\\\",\\\"name\\\":\\\"Bosnia and Herzegovina\\\"},{\\\"code\\\":\\\"BB\\\",\\\"name\\\":\\\"Barbados\\\"},{\\\"code\\\":\\\"BD\\\",\\\"name\\\":\\\"Bangladesh\\\"},{\\\"code\\\":\\\"BE\\\",\\\"name\\\":\\\"Belgium\\\"},{\\\"code\\\":\\\"BF\\\",\\\"name\\\":\\\"Burkina Faso\\\"},{\\\"code\\\":\\\"BG\\\",\\\"name\\\":\\\"Bulgaria\\\"},{\\\"code\\\":\\\"BH\\\",\\\"name\\\":\\\"Bahrain\\\"},{\\\"code\\\":\\\"BI\\\",\\\"name\\\":\\\"Burundi\\\"},{\\\"code\\\":\\\"BJ\\\",\\\"name\\\":\\\"Benin\\\"},{\\\"code\\\":\\\"BL\\\",\\\"name\\\":\\\"Saint Barthélemy\\\"},{\\\"code\\\":\\\"BM\\\",\\\"name\\\":\\\"Bermuda\\\"},{\\\"code\\\":\\\"BN\\\",\\\"name\\\":\\\"Brunei Darussalam\\\"},{\\\"code\\\":\\\"BO\\\",\\\"name\\\":\\\"Bolivia, Plurinational State of\\\"},{\\\"code\\\":\\\"BQ\\\",\\\"name\\\":\\\"Bonaire, Sint Eustatius and Saba\\\"},{\\\"code\\\":\\\"BR\\\",\\\"name\\\":\\\"Brazil\\\"},{\\\"code\\\":\\\"BS\\\",\\\"name\\\":\\\"Bahamas\\\"},{\\\"code\\\":\\\"BT\\\",\\\"name\\\":\\\"Bhutan\\\"},{\\\"code\\\":\\\"BV\\\",\\\"name\\\":\\\"Bouvet Island\\\"},{\\\"code\\\":\\\"BW\\\",\\\"name\\\":\\\"Botswana\\\"},{\\\"code\\\":\\\"BY\\\",\\\"name\\\":\\\"Belarus\\\"},{\\\"code\\\":\\\"BZ\\\",\\\"name\\\":\\\"Belize\\\"},{\\\"code\\\":\\\"CA\\\",\\\"name\\\":\\\"Canada\\\"},{\\\"code\\\":\\\"CC\\\",\\\"name\\\":\\\"Cocos (Keeling) Islands\\\"},{\\\"code\\\":\\\"CD\\\",\\\"name\\\":\\\"Congo, Democratic Republic of the\\\"},{\\\"code\\\":\\\"CF\\\",\\\"name\\\":\\\"Central African Republic\\\"},{\\\"code\\\":\\\"CG\\\",\\\"name\\\":\\\"Congo\\\"},{\\\"code\\\":\\\"CH\\\",\\\"name\\\":\\\"Switzerland\\\"},{\\\"code\\\":\\\"CI\\\",\\\"name\\\":\\\"Côte d'Ivoire\\\"},{\\\"code\\\":\\\"CK\\\",\\\"name\\\":\\\"Cook Islands\\\"},{\\\"code\\\":\\\"CL\\\",\\\"name\\\":\\\"Chile\\\"},{\\\"code\\\":\\\"CM\\\",\\\"name\\\":\\\"Cameroon\\\"},{\\\"code\\\":\\\"CN\\\",\\\"name\\\":\\\"China\\\"},{\\\"code\\\":\\\"CO\\\",\\\"name\\\":\\\"Colombia\\\"},{\\\"code\\\":\\\"CR\\\",\\\"name\\\":\\\"Costa Rica\\\"},{\\\"code\\\":\\\"CU\\\",\\\"name\\\":\\\"Cuba\\\"},{\\\"code\\\":\\\"CV\\\",\\\"name\\\":\\\"Cabo Verde\\\"},{\\\"code\\\":\\\"CW\\\",\\\"name\\\":\\\"Curaçao\\\"},{\\\"code\\\":\\\"CX\\\",\\\"name\\\":\\\"Christmas Island\\\"},{\\\"code\\\":\\\"CY\\\",\\\"name\\\":\\\"Cyprus\\\"},{\\\"code\\\":\\\"CZ\\\",\\\"name\\\":\\\"Czechia\\\"},{\\\"code\\\":\\\"DE\\\",\\\"name\\\":\\\"Germany\\\"},{\\\"code\\\":\\\"DJ\\\",\\\"name\\\":\\\"Djibouti\\\"},{\\\"code\\\":\\\"DK\\\",\\\"name\\\":\\\"Denmark\\\"},{\\\"code\\\":\\\"DM\\\",\\\"name\\\":\\\"Dominica\\\"},{\\\"code\\\":\\\"DO\\\",\\\"name\\\":\\\"Dominican Republic\\\"},{\\\"code\\\":\\\"DZ\\\",\\\"name\\\":\\\"Algeria\\\"},{\\\"code\\\":\\\"EC\\\",\\\"name\\\":\\\"Ecuador\\\"},{\\\"code\\\":\\\"EE\\\",\\\"name\\\":\\\"Estonia\\\"},{\\\"code\\\":\\\"EG\\\",\\\"name\\\":\\\"Egypt\\\"},{\\\"code\\\":\\\"EH\\\",\\\"name\\\":\\\"Western Sahara\\\"},{\\\"code\\\":\\\"ER\\\",\\\"name\\\":\\\"Eritrea\\\"},{\\\"code\\\":\\\"ES\\\",\\\"name\\\":\\\"Spain\\\"},{\\\"code\\\":\\\"ET\\\",\\\"name\\\":\\\"Ethiopia\\\"},{\\\"code\\\":\\\"FI\\\",\\\"name\\\":\\\"Finland\\\"},{\\\"code\\\":\\\"FJ\\\",\\\"name\\\":\\\"Fiji\\\"},{\\\"code\\\":\\\"FK\\\",\\\"name\\\":\\\"Falkland Islands (Malvinas)\\\"},{\\\"code\\\":\\\"FM\\\",\\\"name\\\":\\\"Micronesia, Federated States of\\\"},{\\\"code\\\":\\\"FO\\\",\\\"name\\\":\\\"Faroe Islands\\\"},{\\\"code\\\":\\\"FR\\\",\\\"name\\\":\\\"France\\\"},{\\\"code\\\":\\\"GA\\\",\\\"name\\\":\\\"Gabon\\\"},{\\\"code\\\":\\\"GB\\\",\\\"name\\\":\\\"United Kingdom of Great Britain and Northern Ireland\\\"},{\\\"code\\\":\\\"GD\\\",\\\"name\\\":\\\"Grenada\\\"},{\\\"code\\\":\\\"GE\\\",\\\"name\\\":\\\"Georgia\\\"},{\\\"code\\\":\\\"GF\\\",\\\"name\\\":\\\"French Guiana\\\"},{\\\"code\\\":\\\"GG\\\",\\\"name\\\":\\\"Guernsey\\\"},{\\\"code\\\":\\\"GH\\\",\\\"name\\\":\\\"Ghana\\\"},{\\\"code\\\":\\\"GI\\\",\\\"name\\\":\\\"Gibraltar\\\"},{\\\"code\\\":\\\"GL\\\",\\\"name\\\":\\\"Greenland\\\"},{\\\"code\\\":\\\"GM\\\",\\\"name\\\":\\\"Gambia\\\"},{\\\"code\\\":\\\"GN\\\",\\\"name\\\":\\\"Guinea\\\"},{\\\"code\\\":\\\"GP\\\",\\\"name\\\":\\\"Guadeloupe\\\"},{\\\"code\\\":\\\"GQ\\\",\\\"name\\\":\\\"Equatorial Guinea\\\"},{\\\"code\\\":\\\"GR\\\",\\\"name\\\":\\\"Greece\\\"},{\\\"code\\\":\\\"GS\\\",\\\"name\\\":\\\"South Georgia and the South Sandwich Islands\\\"},{\\\"code\\\":\\\"GT\\\",\\\"name\\\":\\\"Guatemala\\\"},{\\\"code\\\":\\\"GU\\\",\\\"name\\\":\\\"Guam\\\"},{\\\"code\\\":\\\"GW\\\",\\\"name\\\":\\\"Guinea-Bissau\\\"},{\\\"code\\\":\\\"GY\\\",\\\"name\\\":\\\"Guyana\\\"},{\\\"code\\\":\\\"HK\\\",\\\"name\\\":\\\"Hong Kong\\\"},{\\\"code\\\":\\\"HM\\\",\\\"name\\\":\\\"Heard Island and McDonald Islands\\\"},{\\\"code\\\":\\\"HN\\\",\\\"name\\\":\\\"Honduras\\\"},{\\\"code\\\":\\\"HR\\\",\\\"name\\\":\\\"Croatia\\\"},{\\\"code\\\":\\\"HT\\\",\\\"name\\\":\\\"Haiti\\\"},{\\\"code\\\":\\\"HU\\\",\\\"name\\\":\\\"Hungary\\\"},{\\\"code\\\":\\\"ID\\\",\\\"name\\\":\\\"Indonesia\\\"},{\\\"code\\\":\\\"IE\\\",\\\"name\\\":\\\"Ireland\\\"},{\\\"code\\\":\\\"IL\\\",\\\"name\\\":\\\"Israel\\\"},{\\\"code\\\":\\\"IM\\\",\\\"name\\\":\\\"Isle of Man\\\"},{\\\"code\\\":\\\"IN\\\",\\\"name\\\":\\\"India\\\"},{\\\"code\\\":\\\"IO\\\",\\\"name\\\":\\\"British Indian Ocean Territory\\\"},{\\\"code\\\":\\\"IQ\\\",\\\"name\\\":\\\"Iraq\\\"},{\\\"code\\\":\\\"IR\\\",\\\"name\\\":\\\"Iran, Islamic Republic of\\\"},{\\\"code\\\":\\\"IS\\\",\\\"name\\\":\\\"Iceland\\\"},{\\\"code\\\":\\\"IT\\\",\\\"name\\\":\\\"Italy\\\"},{\\\"code\\\":\\\"JE\\\",\\\"name\\\":\\\"Jersey\\\"},{\\\"code\\\":\\\"JM\\\",\\\"name\\\":\\\"Jamaica\\\"},{\\\"code\\\":\\\"JO\\\",\\\"name\\\":\\\"Jordan\\\"},{\\\"code\\\":\\\"JP\\\",\\\"name\\\":\\\"Japan\\\"},{\\\"code\\\":\\\"KE\\\",\\\"name\\\":\\\"Kenya\\\"},{\\\"code\\\":\\\"KG\\\",\\\"name\\\":\\\"Kyrgyzstan\\\"},{\\\"code\\\":\\\"KH\\\",\\\"name\\\":\\\"Cambodia\\\"},{\\\"code\\\":\\\"KI\\\",\\\"name\\\":\\\"Kiribati\\\"},{\\\"code\\\":\\\"KM\\\",\\\"name\\\":\\\"Comoros\\\"},{\\\"code\\\":\\\"KN\\\",\\\"name\\\":\\\"Saint Kitts and Nevis\\\"},{\\\"code\\\":\\\"KP\\\",\\\"name\\\":\\\"Korea, Democratic People's Republic of\\\"},{\\\"code\\\":\\\"KR\\\",\\\"name\\\":\\\"Korea, Republic of\\\"},{\\\"code\\\":\\\"KW\\\",\\\"name\\\":\\\"Kuwait\\\"},{\\\"code\\\":\\\"KY\\\",\\\"name\\\":\\\"Cayman Islands\\\"},{\\\"code\\\":\\\"KZ\\\",\\\"name\\\":\\\"Kazakhstan\\\"},{\\\"code\\\":\\\"LA\\\",\\\"name\\\":\\\"Lao People's Democratic Republic\\\"},{\\\"code\\\":\\\"LB\\\",\\\"name\\\":\\\"Lebanon\\\"},{\\\"code\\\":\\\"LC\\\",\\\"name\\\":\\\"Saint Lucia\\\"},{\\\"code\\\":\\\"LI\\\",\\\"name\\\":\\\"Liechtenstein\\\"},{\\\"code\\\":\\\"LK\\\",\\\"name\\\":\\\"Sri Lanka\\\"},{\\\"code\\\":\\\"LR\\\",\\\"name\\\":\\\"Liberia\\\"},{\\\"code\\\":\\\"LS\\\",\\\"name\\\":\\\"Lesotho\\\"},{\\\"code\\\":\\\"LT\\\",\\\"name\\\":\\\"Lithuania\\\"},{\\\"code\\\":\\\"LU\\\",\\\"name\\\":\\\"Luxembourg\\\"},{\\\"code\\\":\\\"LV\\\",\\\"name\\\":\\\"Latvia\\\"},{\\\"code\\\":\\\"LY\\\",\\\"name\\\":\\\"Libya\\\"},{\\\"code\\\":\\\"MA\\\",\\\"name\\\":\\\"Morocco\\\"},{\\\"code\\\":\\\"MC\\\",\\\"name\\\":\\\"Monaco\\\"},{\\\"code\\\":\\\"MD\\\",\\\"name\\\":\\\"Moldova, Republic of\\\"},{\\\"code\\\":\\\"ME\\\",\\\"name\\\":\\\"Montenegro\\\"},{\\\"code\\\":\\\"MF\\\",\\\"name\\\":\\\"Saint Martin, (French part)\\\"},{\\\"code\\\":\\\"MG\\\",\\\"name\\\":\\\"Madagascar\\\"},{\\\"code\\\":\\\"MH\\\",\\\"name\\\":\\\"Marshall Islands\\\"},{\\\"code\\\":\\\"MK\\\",\\\"name\\\":\\\"North Macedonia\\\"},{\\\"code\\\":\\\"ML\\\",\\\"name\\\":\\\"Mali\\\"},{\\\"code\\\":\\\"MM\\\",\\\"name\\\":\\\"Myanmar\\\"},{\\\"code\\\":\\\"MN\\\",\\\"name\\\":\\\"Mongolia\\\"},{\\\"code\\\":\\\"MO\\\",\\\"name\\\":\\\"Macao\\\"},{\\\"code\\\":\\\"MP\\\",\\\"name\\\":\\\"Northern Mariana Islands\\\"},{\\\"code\\\":\\\"MQ\\\",\\\"name\\\":\\\"Martinique\\\"},{\\\"code\\\":\\\"MR\\\",\\\"name\\\":\\\"Mauritania\\\"},{\\\"code\\\":\\\"MS\\\",\\\"name\\\":\\\"Montserrat\\\"},{\\\"code\\\":\\\"MT\\\",\\\"name\\\":\\\"Malta\\\"},{\\\"code\\\":\\\"MU\\\",\\\"name\\\":\\\"Mauritius\\\"},{\\\"code\\\":\\\"MV\\\",\\\"name\\\":\\\"Maldives\\\"},{\\\"code\\\":\\\"MW\\\",\\\"name\\\":\\\"Malawi\\\"},{\\\"code\\\":\\\"MX\\\",\\\"name\\\":\\\"Mexico\\\"},{\\\"code\\\":\\\"MY\\\",\\\"name\\\":\\\"Malaysia\\\"},{\\\"code\\\":\\\"MZ\\\",\\\"name\\\":\\\"Mozambique\\\"},{\\\"code\\\":\\\"NA\\\",\\\"name\\\":\\\"Namibia\\\"},{\\\"code\\\":\\\"NC\\\",\\\"name\\\":\\\"New Caledonia\\\"},{\\\"code\\\":\\\"NE\\\",\\\"name\\\":\\\"Niger\\\"},{\\\"code\\\":\\\"NF\\\",\\\"name\\\":\\\"Norfolk Island\\\"},{\\\"code\\\":\\\"NG\\\",\\\"name\\\":\\\"Nigeria\\\"},{\\\"code\\\":\\\"NI\\\",\\\"name\\\":\\\"Nicaragua\\\"},{\\\"code\\\":\\\"NL\\\",\\\"name\\\":\\\"Netherlands\\\"},{\\\"code\\\":\\\"NO\\\",\\\"name\\\":\\\"Norway\\\"},{\\\"code\\\":\\\"NP\\\",\\\"name\\\":\\\"Nepal\\\"},{\\\"code\\\":\\\"NR\\\",\\\"name\\\":\\\"Nauru\\\"},{\\\"code\\\":\\\"NU\\\",\\\"name\\\":\\\"Niue\\\"},{\\\"code\\\":\\\"NZ\\\",\\\"name\\\":\\\"New Zealand\\\"},{\\\"code\\\":\\\"OM\\\",\\\"name\\\":\\\"Oman\\\"},{\\\"code\\\":\\\"PA\\\",\\\"name\\\":\\\"Panama\\\"},{\\\"code\\\":\\\"PE\\\",\\\"name\\\":\\\"Peru\\\"},{\\\"code\\\":\\\"PF\\\",\\\"name\\\":\\\"French Polynesia\\\"},{\\\"code\\\":\\\"PG\\\",\\\"name\\\":\\\"Papua New Guinea\\\"},{\\\"code\\\":\\\"PH\\\",\\\"name\\\":\\\"Philippines\\\"},{\\\"code\\\":\\\"PK\\\",\\\"name\\\":\\\"Pakistan\\\"},{\\\"code\\\":\\\"PL\\\",\\\"name\\\":\\\"Poland\\\"},{\\\"code\\\":\\\"PM\\\",\\\"name\\\":\\\"Saint Pierre and Miquelon\\\"},{\\\"code\\\":\\\"PN\\\",\\\"name\\\":\\\"Pitcairn\\\"},{\\\"code\\\":\\\"PR\\\",\\\"name\\\":\\\"Puerto Rico\\\"},{\\\"code\\\":\\\"PS\\\",\\\"name\\\":\\\"Palestine, State of\\\"},{\\\"code\\\":\\\"PT\\\",\\\"name\\\":\\\"Portugal\\\"},{\\\"code\\\":\\\"PW\\\",\\\"name\\\":\\\"Palau\\\"},{\\\"code\\\":\\\"PY\\\",\\\"name\\\":\\\"Paraguay\\\"},{\\\"code\\\":\\\"QA\\\",\\\"name\\\":\\\"Qatar\\\"},{\\\"code\\\":\\\"RE\\\",\\\"name\\\":\\\"Réunion\\\"},{\\\"code\\\":\\\"RO\\\",\\\"name\\\":\\\"Romania\\\"},{\\\"code\\\":\\\"RS\\\",\\\"name\\\":\\\"Serbia\\\"},{\\\"code\\\":\\\"RU\\\",\\\"name\\\":\\\"Russian Federation\\\"},{\\\"code\\\":\\\"RW\\\",\\\"name\\\":\\\"Rwanda\\\"},{\\\"code\\\":\\\"SA\\\",\\\"name\\\":\\\"Saudi Arabia\\\"},{\\\"code\\\":\\\"SB\\\",\\\"name\\\":\\\"Solomon Islands\\\"},{\\\"code\\\":\\\"SC\\\",\\\"name\\\":\\\"Seychelles\\\"},{\\\"code\\\":\\\"SD\\\",\\\"name\\\":\\\"Sudan\\\"},{\\\"code\\\":\\\"SE\\\",\\\"name\\\":\\\"Sweden\\\"},{\\\"code\\\":\\\"SG\\\",\\\"name\\\":\\\"Singapore\\\"},{\\\"code\\\":\\\"SH\\\",\\\"name\\\":\\\"Saint Helena, Ascension and Tristan da Cunha\\\"},{\\\"code\\\":\\\"SI\\\",\\\"name\\\":\\\"Slovenia\\\"},{\\\"code\\\":\\\"SJ\\\",\\\"name\\\":\\\"Svalbard and Jan Mayen\\\"},{\\\"code\\\":\\\"SK\\\",\\\"name\\\":\\\"Slovakia\\\"},{\\\"code\\\":\\\"SL\\\",\\\"name\\\":\\\"Sierra Leone\\\"},{\\\"code\\\":\\\"SM\\\",\\\"name\\\":\\\"San Marino\\\"},{\\\"code\\\":\\\"SN\\\",\\\"name\\\":\\\"Senegal\\\"},{\\\"code\\\":\\\"SO\\\",\\\"name\\\":\\\"Somalia\\\"},{\\\"code\\\":\\\"SR\\\",\\\"name\\\":\\\"Suriname\\\"},{\\\"code\\\":\\\"SS\\\",\\\"name\\\":\\\"South Sudan\\\"},{\\\"code\\\":\\\"ST\\\",\\\"name\\\":\\\"Sao Tome and Principe\\\"},{\\\"code\\\":\\\"SV\\\",\\\"name\\\":\\\"El Salvador\\\"},{\\\"code\\\":\\\"SX\\\",\\\"name\\\":\\\"Sint Maarten, (Dutch part)\\\"},{\\\"code\\\":\\\"SY\\\",\\\"name\\\":\\\"Syrian Arab Republic\\\"},{\\\"code\\\":\\\"SZ\\\",\\\"name\\\":\\\"Eswatini\\\"},{\\\"code\\\":\\\"TC\\\",\\\"name\\\":\\\"Turks and Caicos Islands\\\"},{\\\"code\\\":\\\"TD\\\",\\\"name\\\":\\\"Chad\\\"},{\\\"code\\\":\\\"TF\\\",\\\"name\\\":\\\"French Southern Territories\\\"},{\\\"code\\\":\\\"TG\\\",\\\"name\\\":\\\"Togo\\\"},{\\\"code\\\":\\\"TH\\\",\\\"name\\\":\\\"Thailand\\\"},{\\\"code\\\":\\\"TJ\\\",\\\"name\\\":\\\"Tajikistan\\\"},{\\\"code\\\":\\\"TK\\\",\\\"name\\\":\\\"Tokelau\\\"},{\\\"code\\\":\\\"TL\\\",\\\"name\\\":\\\"Timor-Leste\\\"},{\\\"code\\\":\\\"TM\\\",\\\"name\\\":\\\"Turkmenistan\\\"},{\\\"code\\\":\\\"TN\\\",\\\"name\\\":\\\"Tunisia\\\"},{\\\"code\\\":\\\"TO\\\",\\\"name\\\":\\\"Tonga\\\"},{\\\"code\\\":\\\"TR\\\",\\\"name\\\":\\\"Turkey\\\"},{\\\"code\\\":\\\"TT\\\",\\\"name\\\":\\\"Trinidad and Tobago\\\"},{\\\"code\\\":\\\"TV\\\",\\\"name\\\":\\\"Tuvalu\\\"},{\\\"code\\\":\\\"TW\\\",\\\"name\\\":\\\"Taiwan, Province of China\\\"},{\\\"code\\\":\\\"TZ\\\",\\\"name\\\":\\\"Tanzania, United Republic of\\\"},{\\\"code\\\":\\\"UA\\\",\\\"name\\\":\\\"Ukraine\\\"},{\\\"code\\\":\\\"UG\\\",\\\"name\\\":\\\"Uganda\\\"},{\\\"code\\\":\\\"UM\\\",\\\"name\\\":\\\"United States Minor Outlying Islands\\\"},{\\\"code\\\":\\\"US\\\",\\\"name\\\":\\\"United States of America\\\"},{\\\"code\\\":\\\"UY\\\",\\\"name\\\":\\\"Uruguay\\\"},{\\\"code\\\":\\\"UZ\\\",\\\"name\\\":\\\"Uzbekistan\\\"},{\\\"code\\\":\\\"VA\\\",\\\"name\\\":\\\"Holy See\\\"},{\\\"code\\\":\\\"VC\\\",\\\"name\\\":\\\"Saint Vincent and the Grenadines\\\"},{\\\"code\\\":\\\"VE\\\",\\\"name\\\":\\\"Venezuela, Bolivarian Republic of\\\"},{\\\"code\\\":\\\"VG\\\",\\\"name\\\":\\\"Virgin Islands, British\\\"},{\\\"code\\\":\\\"VI\\\",\\\"name\\\":\\\"Virgin Islands, U.S.\\\"},{\\\"code\\\":\\\"VN\\\",\\\"name\\\":\\\"Viet Nam\\\"},{\\\"code\\\":\\\"VU\\\",\\\"name\\\":\\\"Vanuatu\\\"},{\\\"code\\\":\\\"WF\\\",\\\"name\\\":\\\"Wallis and Futuna\\\"},{\\\"code\\\":\\\"WS\\\",\\\"name\\\":\\\"Samoa\\\"},{\\\"code\\\":\\\"YE\\\",\\\"name\\\":\\\"Yemen\\\"},{\\\"code\\\":\\\"YT\\\",\\\"name\\\":\\\"Mayotte\\\"},{\\\"code\\\":\\\"ZA\\\",\\\"name\\\":\\\"South Africa\\\"},{\\\"code\\\":\\\"ZM\\\",\\\"name\\\":\\\"Zambia\\\"},{\\\"code\\\":\\\"ZW\\\",\\\"name\\\":\\\"Zimbabwe\\\"}]\");\n\n//# sourceURL=webpack:///./node_modules/country-list/data.json?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var country_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! country-list */ \"./node_modules/country-list/country-list.js\");\n/* harmony import */ var country_list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(country_list__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body */ \"./src/body.js\");\n\n\n\nObject(_body__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst tempNum = document.querySelector(\".temp-num\");\nconst tempDescription = document.querySelector(\".weather-description\");\nconst noLocationFound = document.querySelector(\".current-location\");\nconst city = document.querySelector(\".city\");\nconst country = document.querySelector(\".country\");\nconst tempBtn = document.querySelector(\".temperature\");\nconst icon = document.querySelector(\".wu\");\nconst convertToCelsius = tempInKelvin => Math.floor(tempInKelvin + -273.15);\nconst convertToFahrenheit = tempInKelvin => Math.floor(tempInKelvin + -459.67);\n\nconst getImageAtLocation = location => {\n  const w = window.innerWidth;\n  const h = window.innerHeight;\n  const imgApi = `https://source.unsplash.com/${w}x${h}/?${location}`;\n  document.body.style.backgroundImage = `url(${imgApi})`;\n};\n\nconst renderData = data => {\n  if (tempBtn.classList.contains(\"fahrenheit\")) {\n    tempNum.innerText = convertToFahrenheit(data.main.temp);\n    document.querySelector(\".temp-degree\").innerText = \"\";\n    document.querySelector(\".temp-celsius\").innerText = \"F\";\n  } else {\n    tempNum.innerText = convertToCelsius(data.main.temp);\n    document.querySelector(\".temp-degree\").innerText = \"o\";\n    document.querySelector(\".temp-celsius\").innerText = \"C\";\n  }\n\n  tempDescription.innerText = data.weather[0].description;\n  city.innerText = data.name;\n\n  country.innerText = country_list__WEBPACK_IMPORTED_MODULE_0___default.a.getName(data.sys.country);\n  icon.classList.toggle(\"wu-chancerain\");\n  noLocationFound.classList.remove(\"no-location\");\n  noLocationFound.classList.add(\"found-location\");\n  \n};\n\nconst getWeatherAtLocation = inputLocation => {\n  const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&APPID=2874e0623c8807994e18916c8cd78f21`;\n  fetch(weatherApi, { mode: \"cors\" })\n    .then(response => response.json())\n    .then(data => {\n      if (data.main === undefined) {\n        noLocationFound.innerText = \"Location weather unavailable\";\n        noLocationFound.classList.remove(\"found-location\");\n        noLocationFound.classList.add(\"no-location\");\n      } else {\n        noLocationFound.innerText = `Weather in ${data.name}`;\n        renderData(data);\n      }\n    });\n};\n\nconst listenToTempChange = () => {\n  tempBtn.addEventListener(\"click\", () => {\n    tempBtn.classList.toggle(\"fahrenheit\");\n    const cityInput = document.querySelector(\"#get-location-id\").value;\n    getWeatherAtLocation(cityInput);\n  });\n};\n\nconst showWeatherAtUserLat = (lat, lng) => {\n  const weatherApi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=2874e0623c8807994e18916c8cd78f21`;\n  fetch(weatherApi, { mode: \"cors\" })\n    .then(response => response.json())\n    .then(data => {\n      noLocationFound.innerText = `You're currently in ${data.name}`;\n      noLocationFound.classList.add(\"found-location\");\n      renderData(data);\n      getImageAtLocation(data.name);\n    });\n};\n\nconst runForm = () => {\n  const submitForm = document.querySelector(\".get-location\");\n  submitForm.addEventListener(\"submit\", event => {\n    event.preventDefault();\n    const cityInput = document.querySelector(\"#get-location-id\").value;\n    getWeatherAtLocation(cityInput);\n    getImageAtLocation(cityInput);\n  });\n};\n\nconst grabUserLocation = (lat, lng) => {\n  if (lat === undefined && lng === undefined) {\n    noLocationFound.innerText = \"Click 'Allow' to enable location\";\n  } else {\n    showWeatherAtUserLat(lat, lng);\n  }\n};\n\nconst getCurrentLocation = () => {\n  const successFunction = position => {\n    const lat = position.coords.latitude;\n    const lng = position.coords.longitude;\n    grabUserLocation(lat, lng);\n  };\n\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(successFunction);\n  }\n};\n\ngetCurrentLocation();\nrunForm();\ngrabUserLocation();\nlistenToTempChange();\n\n\n//# sourceURL=webpack:///./src/app.js?");

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