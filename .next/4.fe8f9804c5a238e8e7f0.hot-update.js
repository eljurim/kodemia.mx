webpackHotUpdate(4,{

/***/ "./static/js/environment.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _default = {
  constructor: function constructor() {
    this.$mainContainer = document.getElementByClassName('main-container');
  },
  init: function init() {
    var self = this; // --

    console.log('ready');
    console.log(self.$mainContainer);

    window.onload = function () {
      console.log(self.$mainContainer);
    };
  }
};
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/samuel.olvera/Documents/Sites/htdocs/kodemia/static/js/environment.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.fe8f9804c5a238e8e7f0.hot-update.js.map