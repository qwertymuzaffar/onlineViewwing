(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-microloans-microloans-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/microloans/microloans.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/microloans/microloans.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header\">\n    <ion-buttons>\n      <ion-back-button class=\"back-button\" text=\"\" icon=\"chevron-back-outline\" defaultHref=\"/home\"></ion-back-button>\n      <ion-title>Микрозаймы</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngFor=\"let microloan of microloans\">\n    <ion-card class=\"ion-padding\">\n      <ion-card-header class=\"ion-no-padding ion-padding-bottom ion-margin-bottom\">\n        <ion-toolbar>\n          <ion-title>\n            <img [src]=\"microloan.image_url\" width=\"100\">\n          </ion-title>\n          <ion-text slot=\"end\">\n            <!--<div>\n              <img src=\"assets/img/svg/vector.svg\">\n              <img src=\"assets/img/svg/vector.svg\">\n              <img src=\"assets/img/svg/vector.svg\">\n              <img src=\"assets/img/svg/vector.svg\">\n              <img src=\"assets/img/svg/vector.svg\">\n            </div>-->\n            <ng-container *ngFor=\"let rating_image of microloan.rating_images\">\n              <img [src]=\"rating_image\">\n            </ng-container>\n            <div class=\"mt-7\">\n              <span class=\"chat-number\">12</span>\n              <img src=\"assets/img/svg/chat.svg\">\n            </div>\n          </ion-text>\n        </ion-toolbar>\n      </ion-card-header>\n\n      <ion-card-content class=\"ion-no-padding\">\n        <div>\n          <ion-row>\n            <ion-col class=\"d-flex ion-align-items-center ion-padding-top\">\n              <img src=\"assets/img/svg/coins.svg\">\n              <span class=\"ion-margin-start\">{{microloan.sum_one}}</span>\n            </ion-col>\n            <ion-col class=\"d-flex ion-align-items-center ion-padding-top\">\n              <img src=\"assets/img/svg/contract.svg\">\n              <span class=\"ion-margin-start\">{{microloan.dokuments}}</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"d-flex ion-align-items-center ion-padding-top\">\n              <img src=\"assets/img/svg/calendar.svg\">\n              <span class=\"ion-margin-start\">{{microloan.days_info}}</span>\n            </ion-col>\n            <ion-col class=\"d-flex ion-align-items-center ion-padding-top\">\n              <img src=\"assets/img/svg/clock.svg\">\n              <span class=\"ion-margin-start\">{{microloan.scorost}}</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"d-flex ion-align-items-center ion-padding-top\">\n              <img src=\"assets/img/svg/discount.svg\">\n              <span class=\"ion-margin-start\">{{microloan.percent}}</span>\n            </ion-col>\n          </ion-row>\n        </div>\n        <ion-button (click)=\"moreDetails(microloan)\" class=\"background-style ion-margin-top\" expand=\"block\">Подробнее</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ng-container>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/microloans/more-details-microloans/more-details-microloans.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/microloans/more-details-microloans/more-details-microloans.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header\">\n    <ion-buttons>\n<!--      <ion-text (click)=\"dissmiss()\" class=\"ion-padding-start\">-->\n<!--        <img src=\"assets/img/svg/arrow_left.svg\">-->\n<!--        <span class=\"ion-padding-start\"></span>-->\n<!--        <ion-title>Подробнее</ion-title>-->\n<!--      </ion-text>-->\n      <ion-back-button class=\"back-button\" (click)=\"dissmiss()\" text=\"\" icon=\"chevron-back-outline\" defaultHref=\"/microloans\"></ion-back-button>\n      <ion-title>Подробнее</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container>\n    <ion-card class=\"ion-padding\">\n      <ion-card-header class=\"ion-no-padding ion-padding-bottom ion-margin-bottom\">\n        <ion-toolbar>\n          <ion-text slot=\"start\">\n            <!--<div>\n              <img src=\"assets/img/svg/vector.svg\">\n              <img src=\"assets/img/svg/vector.svg\">\n              <img src=\"assets/img/svg/vector.svg\">\n              <img src=\"assets/img/svg/vector.svg\">\n              <img src=\"assets/img/svg/vector.svg\">\n            </div>-->\n\n            <ng-container *ngFor=\"let rating_image of microloan.rating_images\">\n              <img [src]=\"rating_image\">\n            </ng-container>\n          </ion-text>\n          <ion-title>\n            <img [src]=\"microloan.image_url\" width=\"100\">\n          </ion-title>\n          <ion-text slot=\"end\">\n            <div>\n              <span class=\"chat-number\">12</span>\n              <img src=\"assets/img/svg/chat.svg\">\n            </div>\n          </ion-text>\n        </ion-toolbar>\n      </ion-card-header>\n\n      <ion-card-content class=\"ion-no-padding color-black\">\n        <div class=\"ion-padding-bottom\">\n          <div class=\"d-flex ion-align-items-center ion-padding-top\">\n            <img src=\"assets/img/svg/coins.svg\">\n            <span class=\"ion-margin-start\">{{microloan.sum_one}}</span>\n          </div>\n\n          <div class=\"d-flex ion-align-items-center ion-padding-top\">\n            <img src=\"assets/img/svg/calendar.svg\">\n            <span class=\"ion-margin-start\">{{microloan.days_info}}</span>\n          </div>\n\n          <div class=\"d-flex ion-align-items-center ion-padding-top\">\n            <img src=\"assets/img/svg/discount.svg\">\n            <span class=\"ion-margin-start\">{{microloan.percent}}</span>\n          </div>\n        </div>\n        <strong class=\"fs-12 lh-24\">\n          еКапуста <br>\n          Процентная ставка от {{microloan.percent}} в день <br>\n          Возраст заемщика: {{microloan.age}} <br>\n          Сумма займа до {{microloan.sum_one}} <br>\n          Первый займ под 0%! <br>\n          {{microloan.work_time}}\n        </strong>\n        <ion-button [href]=\"microloan.url\" class=\"background-style ion-margin-top\" expand=\"block\">Оформить</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ng-container>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/microloans/microloans.component.scss":
/*!******************************************************!*\
  !*** ./src/app/microloans/microloans.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('group.jpg');\n}\n\nion-card-header {\n  border-bottom: 1px solid #F1F1F1;\n}\n\n.mt-7 {\n  margin-top: 7px;\n}\n\n.chat-number {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWljcm9sb2Fucy9taWNyb2xvYW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWljcm9sb2Fucy9taWNyb2xvYW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2dyb3VwLmpwZyk7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjFGMUYxO1xufVxuXG4ubXQtNyB7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLmNoYXQtbnVtYmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/microloans/microloans.component.ts":
/*!****************************************************!*\
  !*** ./src/app/microloans/microloans.component.ts ***!
  \****************************************************/
/*! exports provided: MicroloansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroloansComponent", function() { return MicroloansComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _more_details_microloans_more_details_microloans_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./more-details-microloans/more-details-microloans.component */ "./src/app/microloans/more-details-microloans/more-details-microloans.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let MicroloansComponent = class MicroloansComponent {
    constructor(modalController, httpService) {
        this.modalController = modalController;
        this.httpService = httpService;
    }
    ngOnInit() {
        this.getZaim();
    }
    getZaim() {
        this.httpService.getZaim().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((microloans) => {
            return microloans.map(microloan => {
                microloan.rating_images = [];
                for (let i = 0; i < 5; i++) {
                    if (i < microloan.rating) {
                        microloan.rating_images.push('assets/img/svg/vector.svg');
                    }
                    else {
                        microloan.rating_images.push('assets/img/svg/vector-2.svg');
                    }
                }
                return microloan;
            });
        }))
            .subscribe(microloans => this.microloans = microloans);
    }
    moreDetails(microloan) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _more_details_microloans_more_details_microloans_component__WEBPACK_IMPORTED_MODULE_3__["MoreDetailsMicroloansComponent"],
                cssClass: 'my-custom-class',
                componentProps: { microloan }
            });
            modal.present();
        });
    }
};
MicroloansComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }
];
MicroloansComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-microloans',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./microloans.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/microloans/microloans.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./microloans.component.scss */ "./src/app/microloans/microloans.component.scss")).default]
    })
], MicroloansComponent);



/***/ }),

/***/ "./src/app/microloans/microloans.module.ts":
/*!*************************************************!*\
  !*** ./src/app/microloans/microloans.module.ts ***!
  \*************************************************/
/*! exports provided: MicroloansModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroloansModule", function() { return MicroloansModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _microloans_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./microloans.component */ "./src/app/microloans/microloans.component.ts");
/* harmony import */ var _more_details_microloans_more_details_microloans_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-details-microloans/more-details-microloans.component */ "./src/app/microloans/more-details-microloans/more-details-microloans.component.ts");







const microloansRoutes = [
    { path: '', component: _microloans_component__WEBPACK_IMPORTED_MODULE_5__["MicroloansComponent"] }
];
let MicroloansModule = class MicroloansModule {
};
MicroloansModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _microloans_component__WEBPACK_IMPORTED_MODULE_5__["MicroloansComponent"],
            _more_details_microloans_more_details_microloans_component__WEBPACK_IMPORTED_MODULE_6__["MoreDetailsMicroloansComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(microloansRoutes)
        ]
    })
], MicroloansModule);



/***/ }),

/***/ "./src/app/microloans/more-details-microloans/more-details-microloans.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/microloans/more-details-microloans/more-details-microloans.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('group.jpg');\n}\n\nion-card-header {\n  border-bottom: 1px solid #F1F1F1;\n}\n\n.color-black {\n  color: #000;\n}\n\n.chat-number {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWljcm9sb2Fucy9tb3JlLWRldGFpbHMtbWljcm9sb2Fucy9tb3JlLWRldGFpbHMtbWljcm9sb2Fucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21pY3JvbG9hbnMvbW9yZS1kZXRhaWxzLW1pY3JvbG9hbnMvbW9yZS1kZXRhaWxzLW1pY3JvbG9hbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvZ3JvdXAuanBnKTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGMUYxRjE7XG59XG5cbi5jb2xvci1ibGFjayB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uY2hhdC1udW1iZXIge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/microloans/more-details-microloans/more-details-microloans.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/microloans/more-details-microloans/more-details-microloans.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MoreDetailsMicroloansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreDetailsMicroloansComponent", function() { return MoreDetailsMicroloansComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let MoreDetailsMicroloansComponent = class MoreDetailsMicroloansComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    dissmiss() {
        this.modalController.dismiss();
    }
};
MoreDetailsMicroloansComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
MoreDetailsMicroloansComponent.propDecorators = {
    microloan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
MoreDetailsMicroloansComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-more-details-microloans',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./more-details-microloans.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/microloans/more-details-microloans/more-details-microloans.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./more-details-microloans.component.scss */ "./src/app/microloans/more-details-microloans/more-details-microloans.component.scss")).default]
    })
], MoreDetailsMicroloansComponent);



/***/ })

}]);
//# sourceMappingURL=src-app-microloans-microloans-module-es2015.js.map