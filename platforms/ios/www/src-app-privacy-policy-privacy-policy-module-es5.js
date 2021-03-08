(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-privacy-policy-privacy-policy-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.component.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPrivacyPolicyPrivacyPolicyComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"header\">\n    <ion-buttons>\n      <ion-back-button class=\"back-button\" text=\"\" icon=\"chevron-back-outline\" defaultHref=\"/home\"></ion-back-button>\n      <ion-title>Политика конфиден...</ion-title>\n    </ion-buttons>\n<!--    <img (click)=\"getPrivacyPolicy()\" class=\"ion-padding-end\" slot=\"end\" src=\"assets/img/svg/refresh.svg\">-->\n    <!--<ion-text class=\"ion-padding-start\" slot=\"start\">\n      <ion-buttons>\n        <ion-back-button text=\"\" icon=\"chevron-back-outline\" defaultHref=\"/home\"></ion-back-button>\n      </ion-buttons>\n&lt;!&ndash;      <img (click)=\"goBack()\" src=\"assets/img/svg/arrow_left.svg\">&ndash;&gt;\n      <span class=\"ion-padding-start\">Политика конфиденциальности</span>\n    </ion-text>\n    <img (click)=\"getPrivacyPolicy()\" class=\"ion-padding-end\" slot=\"end\" src=\"assets/img/svg/refresh.svg\">-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h2 class=\"fs-title lh-24 color-style ion-no-margin title\">{{policyTitle}}</h2>\n  <ion-text>\n    <p [innerHTML]=\"policyDescription\" class=\"fs-12 lh-24 description\"></p>\n  </ion-text>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/privacy-policy/privacy-policy.component.scss":
    /*!**************************************************************!*\
      !*** ./src/app/privacy-policy/privacy-policy.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPrivacyPolicyPrivacyPolicyComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('group.jpg');\n}\n\n.title {\n  padding: 41px 17px 0 31px;\n}\n\n.description {\n  padding: 30px 31px 25px 31px;\n}\n\nion-title {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvZ3JvdXAuanBnKTtcbn1cblxuLnRpdGxlIHtcbiAgcGFkZGluZzogNDFweCAxN3B4IDAgMzFweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMzBweCAzMXB4IDI1cHggMzFweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/privacy-policy/privacy-policy.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
      \************************************************************/

    /*! exports provided: PrivacyPolicyComponent */

    /***/
    function srcAppPrivacyPolicyPrivacyPolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
        return PrivacyPolicyComponent;
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


      var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../http.service */
      "./src/app/http.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var PrivacyPolicyComponent = /*#__PURE__*/function () {
        function PrivacyPolicyComponent(httpService, location) {
          _classCallCheck(this, PrivacyPolicyComponent);

          this.httpService = httpService;
          this.location = location;
        }

        _createClass(PrivacyPolicyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPrivacyPolicy();
          }
        }, {
          key: "getPrivacyPolicy",
          value: function getPrivacyPolicy() {
            var _this = this;

            this.httpService.getPrivacyPolicy().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (policy) {
              for (;;) {
                if (policy[0].text.includes('\n')) {
                  policy[0].text = policy[0].text.replace('\n', '<br>');
                } else {
                  break;
                }
              }

              return policy;
            })).subscribe(function (policy) {
              _this.policyTitle = policy[0].title;
              _this.policyDescription = policy[0].text;
            });
          }
        }]);

        return PrivacyPolicyComponent;
      }();

      PrivacyPolicyComponent.ctorParameters = function () {
        return [{
          type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      };

      PrivacyPolicyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy-policy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./privacy-policy.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./privacy-policy.component.scss */
        "./src/app/privacy-policy/privacy-policy.component.scss"))["default"]]
      })], PrivacyPolicyComponent);
      /***/
    },

    /***/
    "./src/app/privacy-policy/privacy-policy.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/privacy-policy/privacy-policy.module.ts ***!
      \*********************************************************/

    /*! exports provided: PrivacyPolicyModule */

    /***/
    function srcAppPrivacyPolicyPrivacyPolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyModule", function () {
        return PrivacyPolicyModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _privacy_policy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./privacy-policy.component */
      "./src/app/privacy-policy/privacy-policy.component.ts");

      var privacyPolicyRoutes = [{
        path: '',
        component: _privacy_policy_component__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyComponent"]
      }];

      var PrivacyPolicyModule = function PrivacyPolicyModule() {
        _classCallCheck(this, PrivacyPolicyModule);
      };

      PrivacyPolicyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_privacy_policy_component__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(privacyPolicyRoutes)]
      })], PrivacyPolicyModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-privacy-policy-privacy-policy-module-es5.js.map