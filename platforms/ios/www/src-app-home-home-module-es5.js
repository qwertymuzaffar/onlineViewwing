(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n<ion-header class=\"ion-padding-vertical\">\n    <h5 class=\"ion-text-center\">Подтвердите ваше согласие</h5>\n</ion-header>\n-->\n\n<ion-content class=\"ion-padding\">\n  <h5 class=\"ion-text-center ion-no-margin title\">Подтвердите ваше согласие</h5>\n  <div>\n    <div class=\"d-flex ion-justify-content-around\">\n      <div routerLink=\"/microloans\" class=\"div-icon\">\n        <img src=\"assets/img/money.png\" width=\"40\">\n        <p class=\"fs-12\">МИКРОЗАЙМЫ</p>\n      </div>\n      <div routerLink=\"/cards\" class=\"div-icon ion-text-center\">\n        <img src=\"assets/img/svg/credit-card.svg\">\n        <p class=\"fs-12\">КРЕДИТНЫЕ КАРТЫ</p>\n      </div>\n    </div>\n\n    <div class=\"d-flex ion-justify-content-around ion-padding-top\">\n      <div routerLink=\"/calculator\" class=\"div-icon ion-text-center\">\n        <img src=\"assets/img/svg/money-bag.svg\">\n        <p class=\"fs-12\">КРЕДИТЫ</p>\n      </div>\n      <div class=\"div-icon ion-text-center articles\">\n        <img src=\"assets/img/svg/online-payment.svg\">\n        <p class=\"fs-12\">СТАТЬИ</p>\n      </div>\n    </div>\n  </div>\n  <!--<ion-row class=\"ion-text-center\">\n    <ion-col size=\"6\">\n      <div class=\"div-icon\">\n        <img src=\"assets/img/svg/money.svg\">\n        <p class=\"fs-12\">МИКРОЗАЙМЫ</p>\n      </div>\n    </ion-col>\n    <ion-col>\n        <div class=\"div-icon\">\n          <img src=\"assets/img/svg/credit-card.svg\">\n          <p class=\"fs-12\">КРЕДИТНЫЕ КАРТЫ</p>\n        </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"ion-text-center\">\n    <ion-col>\n      <div class=\"div-icon\">\n        <img src=\"assets/img/svg/money-bag.svg\">\n        <p class=\"fs-12\">КРЕДИТЫ</p>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class=\"div-icon\">\n        <img src=\"assets/img/svg/online-payment.svg\">\n        <p class=\"fs-12\">СТАТЬИ</p>\n      </div>\n    </ion-col>\n  </ion-row>-->\n</ion-content>\n\n<ion-footer class=\"d-flex ion-align-items-center ion-justify-content-center\">\n  <img src=\"assets/img/svg/shield.svg\">\n  <span routerLink=\"/privacy-policy\" class=\"footer-text\">политика конфиденциальности</span>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/home/home.component.scss":
    /*!******************************************!*\
      !*** ./src/app/home/home.component.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".div-icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 151px;\n  height: 134px;\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n}\n\n.title {\n  padding-top: 80px;\n  padding-bottom: 44px;\n}\n\nion-footer {\n  padding-bottom: 59px;\n}\n\n.footer-text {\n  color: #333333;\n  font-size: 12px;\n  padding-left: 10px;\n}\n\n.footer-md::before {\n  background: none;\n}\n\n.articles {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTUxcHg7XG4gIGhlaWdodDogMTM0cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udGl0bGUge1xuICBwYWRkaW5nLXRvcDogODBweDtcbiAgcGFkZGluZy1ib3R0b206IDQ0cHg7XG59XG5cbmlvbi1mb290ZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNTlweDtcbn1cblxuLmZvb3Rlci10ZXh0IHtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZm9vdGVyLW1kOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uYXJ0aWNsZXMge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/home/home.component.ts":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.component.scss */
        "./src/app/home/home.component.scss"))["default"]]
      })], HomeComponent);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomeModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home.component */
      "./src/app/home/home.component.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var homeRoutes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
      }];

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(homeRoutes)]
      })], HomeModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-home-home-module-es5.js.map