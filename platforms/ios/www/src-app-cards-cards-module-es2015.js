(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-cards-cards-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cards/cards.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cards/cards.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header\">\n    <ion-buttons>\n      <ion-back-button class=\"back-button\" text=\"\" icon=\"chevron-back-outline\" defaultHref=\"/home\"></ion-back-button>\n      <ion-title>Карты</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngFor=\"let card of cards\">\n    <ion-card>\n      <ion-card-content>\n        <img [src]=\"card.image_url\" width=\"343\">\n        <ion-button [href]=\"card.url\" class=\"background-style ion-margin-top\" expand=\"block\">Оформить</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ng-container>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/cards/cards.component.scss":
/*!********************************************!*\
  !*** ./src/app/cards/cards.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('group.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZHMvY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2FyZHMvY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvZ3JvdXAuanBnKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/cards/cards.component.ts":
/*!******************************************!*\
  !*** ./src/app/cards/cards.component.ts ***!
  \******************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



let CardsComponent = class CardsComponent {
    constructor(httpService) {
        this.httpService = httpService;
    }
    ngOnInit() {
        this.getCard();
    }
    getCard() {
        this.httpService.getCards().subscribe(cards => this.cards = cards);
    }
};
CardsComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
CardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cards',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cards/cards.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cards.component.scss */ "./src/app/cards/cards.component.scss")).default]
    })
], CardsComponent);



/***/ }),

/***/ "./src/app/cards/cards.module.ts":
/*!***************************************!*\
  !*** ./src/app/cards/cards.module.ts ***!
  \***************************************/
/*! exports provided: CardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsModule", function() { return CardsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cards.component */ "./src/app/cards/cards.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






const cardsRoutes = [
    { path: '', component: _cards_component__WEBPACK_IMPORTED_MODULE_4__["CardsComponent"] }
];
let CardsModule = class CardsModule {
};
CardsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cards_component__WEBPACK_IMPORTED_MODULE_4__["CardsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(cardsRoutes)
        ]
    })
], CardsModule);



/***/ })

}]);
//# sourceMappingURL=src-app-cards-cards-module-es2015.js.map