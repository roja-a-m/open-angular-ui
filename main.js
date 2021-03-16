(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\workspace\open-assignment\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 0, consts: [["id", "myHeader", 1, "header"], [1, "logo-icon"], ["id", "logo", "src", "assets/images/logo.png"], [1, "options"], [1, "btn-span"], ["type", "button", 1, "btn", "btn-outline-primary", "lgn-btn"], ["type", "button", 1, "btn", "btn-primary", "started-btn"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%] {\r\n\r\n    --brdr-rad: 3vh;\r\n    --font-size: 1em;\r\n    --btn-font-size: 0.8em;\r\n    width:100%;\r\n    \r\n    color: var(--font-color);\r\n    position:fixed;\r\n    height: auto;\r\n    display: flex;\r\n    padding: var(--padding-top-bottom) var(--padding-right-left);\r\n    align-items: center;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n\r\n  img[_ngcontent-%COMP%]{\r\n      width: 67%;\r\n      transition: width 0.3s ease;\r\n  }\r\n  \r\n\r\n  .options[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n  \r\n\r\n  span[_ngcontent-%COMP%]{\r\n      margin-left:4vw;\r\n      font-size: var(--font-size);\r\n      font-weight: 500;\r\n      cursor:pointer;\r\n  }\r\n  \r\n\r\n  span[_ngcontent-%COMP%]:hover{\r\n      color: var(--theme);\r\n  }\r\n  \r\n\r\n  \r\n  \r\n\r\n  .btn-span[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    \r\n    border: none;\r\n    border-radius: var(--brdr-rad);\r\n    display: inline-flex;\r\n  }\r\n  \r\n\r\n  button[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 20px #00000033;\r\n    border: 0.15em solid var(--theme);\r\n    border-radius: var(--brdr-rad);\r\n    font-size: var(--font-size);\r\n    margin-left: 2vh;\r\n    font-size: var(--btn-font-size);\r\n    padding-right:  4vh;\r\n    padding-left:  4vh;\r\n  }\r\n  \r\n\r\n  .lgn-btn[_ngcontent-%COMP%]{\r\n    \r\n    color: var(--theme);\r\n    \r\n\r\n  }\r\n  \r\n\r\n  .started-btn[_ngcontent-%COMP%]{\r\n    \r\n    color: #fff;\r\n    background: transparent linear-gradient(90deg, #9F62C9 0%, #663399 100%) 0% 0% no-repeat padding-box;\r\n    border-radius: var(--brdr-rad);\r\n  }\r\n  \r\n\r\n  .btn-outline-primary[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n    background-color:var(--theme);\r\n    border-color:var(--theme);\r\n  }\r\n  \r\n\r\n  .btn-primary[_ngcontent-%COMP%]:hover {\r\n    background: transparent linear-gradient(90deg, #663399 0%, #663399 100%) 0% 0% no-repeat padding-box;\r\n    border-color:var(--theme);\r\n    padding-right:  4vh;\r\n    padding-left:  4vh;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtFQUNoQzs7O0VBR0E7TUFDSSxVQUFVO01BQ1YsMkJBQTJCO0VBQy9COzs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOzs7RUFHQTtNQUNJLGVBQWU7TUFDZiwyQkFBMkI7TUFDM0IsZ0JBQWdCO01BQ2hCLGNBQWM7RUFDbEI7OztFQUVBO01BQ0ksbUJBQW1CO0VBQ3ZCOzs7RUFFQTs7O0dBR0M7OztFQUVEO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLG9CQUFvQjtFQUN0Qjs7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOzs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7OztFQUdyQjs7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLG9HQUFvRztJQUNwRyw4QkFBOEI7RUFDaEM7OztFQUVBO0lBQ0UsV0FBVztJQUNYLDZCQUE2QjtJQUM3Qix5QkFBeUI7RUFDM0I7OztFQUVBO0lBQ0Usb0dBQW9HO0lBQ3BHLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcblxyXG4gICAgLS1icmRyLXJhZDogM3ZoO1xyXG4gICAgLS1mb250LXNpemU6IDFlbTtcclxuICAgIC0tYnRuLWZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgLyogYmFja2dyb3VuZDogIzU1NTsgKi9cclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctdG9wLWJvdHRvbSkgdmFyKC0tcGFkZGluZy1yaWdodC1sZWZ0KTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICBcclxuXHJcbiAgaW1ne1xyXG4gICAgICB3aWR0aDogNjclO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XHJcbiAgfVxyXG5cclxuICAub3B0aW9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuICBzcGFue1xyXG4gICAgICBtYXJnaW4tbGVmdDo0dnc7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBzcGFuOmhvdmVye1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGhlbWUpO1xyXG4gIH1cclxuXHJcbiAgLyogc3Bhbjpob3ZlcntcclxuICAgIG1hcmdpbi1sZWZ0OjR2dztcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcclxufSAqL1xyXG5cclxuICAuYnRuLXNwYW57XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1icmRyLXJhZCk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbntcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAjMDAwMDAwMzM7XHJcbiAgICBib3JkZXI6IDAuMTVlbSBzb2xpZCB2YXIoLS10aGVtZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1icmRyLXJhZCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XHJcbiAgICBtYXJnaW4tbGVmdDogMnZoO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1idG4tZm9udC1zaXplKTtcclxuICAgIHBhZGRpbmctcmlnaHQ6ICA0dmg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6ICA0dmg7XHJcbiAgfVxyXG5cclxuICAubGduLWJ0bntcclxuICAgIC8qIHdpZHRoOiAxMzUlOyAqL1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lKTtcclxuICAgIFxyXG5cclxuICB9XHJcblxyXG4gIC5zdGFydGVkLWJ0bntcclxuICAgIC8qIHdpZHRoOiAxNDAlOyAqL1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM5RjYyQzkgMCUsICM2NjMzOTkgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnJkci1yYWQpO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXRoZW1lKTtcclxuICAgIGJvcmRlci1jb2xvcjp2YXIoLS10aGVtZSk7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNjYzMzk5IDAlLCAjNjYzMzk5IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1jb2xvcjp2YXIoLS10aGVtZSk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAgNHZoO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAgNHZoO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class AppComponent {
    constructor() {
        this.title = 'open-assignment';
        this.income = 150000;
        this.minIncome = 100000;
        this.maxIncome = 300000;
        this.expense = 50000;
        this.minExpense = 0;
        this.maxExpense = 300000;
    }
    getValue(e) {
        if (e.target.id == "incomeSlider")
            this.income = e.target.value;
        if (e.target.id == "expenseSlider")
            this.expense = e.target.value;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 128, vars: 34, consts: [[1, "bg-container"], [1, "grid"], [1, "header-item"], [1, "grid-item1"], [1, "video-section"], [1, "tag-line"], ["src", "assets/images/collect_img-video.png", "width", "80%", 1, "video-img"], [1, "grid-item2"], [1, "calc-section"], [1, "calc-box"], [1, "heading-item"], [2, "vertical-align", "middle"], [1, "income-item"], [1, "calc-label"], [1, "calc-cost"], ["id", "incomeSlider", "type", "range", 1, "sliderinput", 3, "min", "max", "value", "input"], [1, "calc-label-xs"], [1, "expense-item"], ["id", "expenseSlider", "type", "range", 1, "sliderinput", 3, "min", "max", "value", "input"], [1, "tenure-item"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "dropdownBtn"], [1, "toggle-item"], [1, "switch"], ["type", "checkbox"], [1, "toggle-slider", "round"], [1, "emi-item"], [1, "form-group"], ["type", "text", "aria-describedby", "emi", 1, "form-control", 2, "border", "none", "border-bottom", "1px solid #ced4da", 3, "value"], [1, "loan-box"], [1, "flex-column"], [2, "font-weight", "100"], [2, "font-weight", "500"], ["type", "button", 1, "btn", "btn-outline-primary", "money-btn"], [1, "grid-item3"], [1, "card-layout"], [1, "card1"], ["width", "30%", "src", "assets/images/Get Paid Instantly.png", 2, "margin-bottom", "2vh"], [1, "card-heading"], [1, "card-desc"], [1, "card2"], ["width", "30%", "src", "assets/images/freelancer_feature_icon_6@1.5x.png", 2, "margin-bottom", "2vh"], [1, "card3"], ["width", "30%", "src", "assets/images/Low interest rate.png", 2, "margin-bottom", "2vh"], [1, "card4"], ["width", "30%", "src", "assets/images/Covid.png", 2, "margin-bottom", "2vh"], [1, "card5"], ["width", "30%", "src", "assets/images/Secure Payments.png", 2, "margin-bottom", "2vh"], [1, "grid-item4"], [2, "width", "20%"], [2, "padding", "2vw", "font-size", "0.8em"], [2, "padding", "2vw"], ["type", "button", 1, "btn", "btn-outline-primary", "acc-btn"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We make it Super Simple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Eligibility Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Monthly Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AppComponent_Template_input_input_22_listener($event) { return ctx.getValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Monthly Expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AppComponent_Template_input_input_36_listener($event) { return ctx.getValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Repayment Tenure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " 6 months ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Do you have any existing loans?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "EMI of existing loan (optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Loan Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Your EMI will be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "GET MONEY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Quick cash disbursement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Get terms loans that your business needs within 72 hrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Ace your business finances");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Manage banking, accounting & everything in between, on one platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Low-interest rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Achieve your financial goals with an amazing interest rate starting at 13% per annum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Loans to fight COVID-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Zero Paperwork");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Get started instantly by submitting only your basic details & bank statements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Boost your business with Open ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "hr", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Get your hands on a term loan that's crafted for your business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Get an Open Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 13, ctx.income, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minIncome)("max", ctx.maxIncome)("value", ctx.income);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 16, ctx.minIncome, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 19, ctx.maxIncome, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 22, ctx.expense, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minExpense)("max", ctx.maxExpense)("value", ctx.expense);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](55, 25, "15000", "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](62, 28, "100000", "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](68, 31, "15000", "INR"));
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".bg-container[_ngcontent-%COMP%]{\r\n    background-image: url('circle.svg'),url('accounting_dots.svg'),url('blob-small.svg'),url('accounting_dots.svg'),url('sol_wave_bg.svg');\r\n    background-repeat: no-repeat;\r\n    background-position:right -12vh top -42vh, right 19vh top 92vh,top 24vh left -12vh, top 75vh left 51vh,bottom;\r\n    background-size: 67%,19%, 23%,18%, 100%;\r\n}\r\n\r\n.grid[_ngcontent-%COMP%]{\r\n    display:grid;\r\n    grid-template-columns: 9fr 10fr;\r\n    row-gap:8em;\r\n    column-gap: 0;\r\n\r\n}\r\n\r\n.header-item[_ngcontent-%COMP%]{\r\n    grid-column-start: 1; \r\n    grid-column-end: 3;\r\n}\r\n\r\n\r\n\r\n.video-section[_ngcontent-%COMP%]{\r\n    padding: 1vh var(--padding-right-left);\r\n    display: grid;\r\n    grid-template-columns: 18fr 13fr;\r\n    grid-template-rows: 1fr 2fr;\r\n    row-gap: 1.5vw;\r\n}\r\n\r\n.video-img[_ngcontent-%COMP%]{\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n}\r\n\r\n.tag-line[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    font-size: 1.5em;\r\n    padding-left: 2vw;\r\n}\r\n\r\nhr[_ngcontent-%COMP%]{\r\n    border: none;\r\n    height: 0.5vh;\r\n    width: 60%;\r\n    margin-left: 0vw;\r\n    background-color: var(--font-color);\r\n    border-radius: 7vh;\r\n}\r\n\r\n\r\n\r\n.calc-section[_ngcontent-%COMP%]{\r\n    padding: 1vh var(--padding-right-left);\r\n    display: grid;\r\n    grid-template-columns: 4fr 2fr;\r\n    grid-template-rows: 0.3fr 2fr 0.3fr;\r\n    column-gap: 0.5vw;\r\n\r\n}\r\n\r\n.calc-box[_ngcontent-%COMP%]{\r\n    background: #fff;\r\n    grid-row-end: 5;\r\n    grid-row-start: 1;\r\n    border-radius: 2vh ;\r\n\r\n    display:grid;\r\n    grid-template-rows: auto;\r\n    row-gap: 3vh;\r\n\r\n    --label-font-size: 0.7em;\r\n    --cost-font-size:1em;\r\n    --cost-font-size-xs:0.5em;\r\n    --content-padding:  1vh 3vh;\r\n    \r\n}\r\n\r\n.loan-box[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    background: var(--theme);\r\n    grid-row-start: 2;\r\n    grid-row-end: 3;\r\n    border-radius: 0 2vh 2vh 0;\r\n\r\n    display:flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    row-gap: 3vh;\r\n\r\n    --brdr-rad: 3vh;\r\n\r\n}\r\n\r\n.sliderinput[_ngcontent-%COMP%]::-webkit-slider-thumb {\r\n     -webkit-appearance: none;\r\n  background: var(--theme);\r\n  appearance: none;\r\n  width: 1.2vh;\r\n  height: 1.2vh;\r\n  border-radius:500px;\r\n  cursor: pointer;\r\n}\r\n\r\n.sliderinput[_ngcontent-%COMP%]::-moz-range-thumb {\r\n    -moz-appearance: none;\r\n  background: var(--theme);\r\n  appearance: none;\r\n  width: 1.2vh;\r\n  height: 1.2vh;\r\n  border-radius:500px;\r\n  cursor: pointer;\r\n}\r\n\r\n.sliderinput[_ngcontent-%COMP%]::-ms-thumb {\r\n    -ms-appearance: none;\r\n  background: var(--theme);\r\n  appearance: none;\r\n  width: 1.2vh;\r\n  height: 1.2vh;\r\n  border-radius:500px;\r\n  cursor: pointer;\r\n}\r\n\r\n.sliderinput[_ngcontent-%COMP%] {\r\n        background: linear-gradient(to right,  #bf94ea 0%,  #bf94ea  100%);\r\n        \r\n        border-radius: 8px;\r\n        height: 0.5vh;\r\n        width: 100%;\r\n        outline: none;\r\n        transition: background 450ms ease-in;\r\n        -webkit-appearance: none;\r\n      }\r\n\r\n.heading-item[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background:#fafbfd;\r\n    border-radius:2vh 2vh 0 0;\r\n    font-size: 0.9em;\r\n    padding: var(--content-padding);\r\n}\r\n\r\n.income-item[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: var(--content-padding);\r\n    gap: 0.7vh;\r\n}\r\n\r\n.expense-item[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: var(--content-padding);\r\n    gap: 0.7vh;\r\n}\r\n\r\n.tenure-item[_ngcontent-%COMP%]{\r\n    padding: var(--content-padding)\r\n}\r\n\r\n.toggle-item[_ngcontent-%COMP%]{\r\n    padding: var(--content-padding);\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.emi-item[_ngcontent-%COMP%]{\r\n    padding: var(--content-padding)\r\n}\r\n\r\n.calc-label[_ngcontent-%COMP%]{\r\n    font-size:var(--label-font-size);\r\n}\r\n\r\n.calc-cost[_ngcontent-%COMP%]{\r\n    font-size: var(--cost-font-size);\r\n    font-weight: 500;\r\n}\r\n\r\n.calc-label-xs[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    font-size: var(--cost-font-size-xs) ;\r\n}\r\n\r\n.dropdownBtn[_ngcontent-%COMP%]{\r\nbackground: none;\r\n    color: var(--font-color);\r\n    border: none;\r\n    text-align: start;\r\n    width:100%;\r\n    padding:0;\r\n}\r\n\r\n.dropdownBtn[_ngcontent-%COMP%]:focus:active{\r\n    border: none im !important;\r\n    text-decoration: none;\r\n    box-shadow: none !important;\r\n    background: none;\r\n}\r\n\r\n.dropdownBtn[_ngcontent-%COMP%]:active{\r\n    border: none !important;\r\n    text-decoration: none;\r\n    box-shadow: none !important;\r\n    background: none !important;\r\n    color: var(--font-color) !important\r\n}\r\n\r\n.dropdown-toggle[_ngcontent-%COMP%]::after{\r\n    margin-left: 2vh;\r\n}\r\n\r\n.money-btn[_ngcontent-%COMP%]{\r\n    \r\n    color: var(--theme);\r\n\r\n    border: 0.15em solid var(--theme);\r\n    border-radius: var(--brdr-rad);\r\n    font-size: var(--font-size);\r\n    margin-left: 2vh;\r\n    font-size: var(--btn-font-size);\r\n    padding-right:  4vh;\r\n    padding-left:  4vh;\r\n    background: #fff\r\n\r\n    \r\n  }\r\n\r\n.flex-column[_ngcontent-%COMP%]{\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n  }\r\n\r\n.flex-column[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n  }\r\n\r\n\r\n\r\n.switch[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 2vw;\r\n    height: 1.1vw;\r\n  }\r\n\r\n\r\n\r\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n\r\n\r\n.toggle-slider[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n  }\r\n\r\n.toggle-slider[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 1.1vw;\r\n    width: 1.1vw;\r\n    left: 0;\r\n    bottom: 0vh;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {\r\n    background-color: var(--theme);\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:focus    + .toggle-slider[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 1px var(--theme);\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]:before {\r\n    transform: translateX(1.1vw);\r\n  }\r\n\r\n\r\n\r\n.toggle-slider.round[_ngcontent-%COMP%] {\r\n    border-radius: 34px;\r\n  }\r\n\r\n.toggle-slider.round[_ngcontent-%COMP%]:before {\r\n    border-radius: 50%;\r\n  }\r\n\r\n.form-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{\r\n      padding:0;\r\n      font-size: 0.9em;\r\n      font-weight: 500;\r\n  }\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n      border: none !important;\r\n      box-shadow: none !important;\r\n  }\r\n\r\n.card-layout[_ngcontent-%COMP%]{\r\n      display: grid;\r\n      grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: repeat(6,auto);\r\n    padding-left: 6vw;\r\n    gap: 1em;\r\n\r\n  }\r\n\r\n\r\n\r\n.card-layout[_ngcontent-%COMP%] > [class^=\"card\"][_ngcontent-%COMP%]{\r\n      background: #fff;\r\n      border-radius: 2vh;\r\n      padding: 1.2vw;\r\n      background: #f9f9f9;\r\nbox-shadow: 0px 0px 30px #2321321F;\r\nborder: 1px solid #FFFFFF;\r\nborder-radius: 20px;\r\nopacity: 1;\r\n    \r\n}\r\n\r\n.card-layout[_ngcontent-%COMP%] > [class^=\"card\"][_ngcontent-%COMP%]:hover{\r\n    background: #9F62C9;\r\n    color:#FFFFFF;\r\n\r\n}\r\n\r\n[class^=\"card\"][_ngcontent-%COMP%]   .card-heading[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 0.8em;\r\n}\r\n\r\n[class^=\"card\"].card-desc[_ngcontent-%COMP%]{\r\n    font-weight: 200;\r\n    font-size: 0.8em;\r\n}\r\n\r\n.card1[_ngcontent-%COMP%]{grid-row-start: 1;\r\n    grid-row-end: 3;}\r\n\r\n.card2[_ngcontent-%COMP%]{grid-row-start: 2;\r\n    grid-row-end: 4;}\r\n\r\n.card3[_ngcontent-%COMP%]{grid-row-start: 3;\r\n    grid-row-end: 5;}\r\n\r\n.card4[_ngcontent-%COMP%]{grid-row-start: 4;\r\n    grid-row-end: 6;}\r\n\r\n.card5[_ngcontent-%COMP%]{grid-row-start: 5;\r\n    grid-row-end: 7;}\r\n\r\n.grid-item4[_ngcontent-%COMP%]{\r\n        padding:var(--padding-right-left);\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n\r\n.acc-btn[_ngcontent-%COMP%]{\r\n    border: 0.15em solid var(--theme);\r\n    border-radius: 3vh;\r\n    color: var(--theme);\r\n    font-size: 0.8em;\r\n}\r\n\r\n.acc-btn[_ngcontent-%COMP%]:focus:active{\r\n    border: none !important;\r\n    box-shadow: none !important;\r\n}\r\n\r\n.acc-btn[_ngcontent-%COMP%]:hover{\r\nbackground: var(--theme);\r\ncolor:#fff\r\n}\n/*# sourceMappingURL=data:application/json;base64,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Q2xDLGlCQUFpQjtJQUNqQixRQUFROztFQUVWOztBQUVBO0dBQ0M7O0FBQ0g7TUFDTSxnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxtQkFBbUI7QUFDekIsa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkIsVUFBVTtJQUNOLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTs7QUFFakI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFRSxPQUFPLGlCQUFpQjtJQUN0QixlQUFlLENBQUM7O0FBQ2xCLE9BQU8saUJBQWlCO0lBQ3RCLGVBQWUsQ0FBQzs7QUFDbEIsT0FBTyxpQkFBaUI7SUFDdEIsZUFBZSxDQUFDOztBQUNsQixPQUFPLGlCQUFpQjtJQUN0QixlQUFlLENBQUM7O0FBQ2xCLE9BQU8saUJBQWlCO0lBQ3RCLGVBQWUsQ0FBQzs7QUFHaEI7UUFDSSxpQ0FBaUM7UUFDakMsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7SUFDM0I7O0FBRUo7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9COztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9jaXJjbGUuc3ZnXCIpLHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvYWNjb3VudGluZ19kb3RzLnN2Z1wiKSx1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL2Jsb2Itc21hbGwuc3ZnXCIpLHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvYWNjb3VudGluZ19kb3RzLnN2Z1wiKSx1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL3NvbF93YXZlX2JnLnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0IC0xMnZoIHRvcCAtNDJ2aCwgcmlnaHQgMTl2aCB0b3AgOTJ2aCx0b3AgMjR2aCBsZWZ0IC0xMnZoLCB0b3AgNzV2aCBsZWZ0IDUxdmgsYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA2NyUsMTklLCAyMyUsMTglLCAxMDAlO1xyXG59XHJcblxyXG4uZ3JpZHtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOWZyIDEwZnI7XHJcbiAgICByb3ctZ2FwOjhlbTtcclxuICAgIGNvbHVtbi1nYXA6IDA7XHJcblxyXG59XHJcblxyXG4uaGVhZGVyLWl0ZW17XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTsgXHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbn1cclxuXHJcblxyXG4vKiB2aWRlbyAqL1xyXG4udmlkZW8tc2VjdGlvbntcclxuICAgIHBhZGRpbmc6IDF2aCB2YXIoLS1wYWRkaW5nLXJpZ2h0LWxlZnQpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMThmciAxM2ZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xyXG4gICAgcm93LWdhcDogMS41dnc7XHJcbn1cclxuXHJcbi52aWRlby1pbWd7XHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxufVxyXG5cclxuLnRhZy1saW5le1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJ2dztcclxufVxyXG5cclxuaHJ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDAuNXZoO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDd2aDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBjYWxjIGJveCAqL1xyXG4uY2FsYy1zZWN0aW9ue1xyXG4gICAgcGFkZGluZzogMXZoIHZhcigtLXBhZGRpbmctcmlnaHQtbGVmdCk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMmZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjNmciAyZnIgMC4zZnI7XHJcbiAgICBjb2x1bW4tZ2FwOiAwLjV2dztcclxuXHJcbn1cclxuXHJcbi5jYWxjLWJveHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDU7XHJcbiAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJ2aCA7XHJcblxyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgcm93LWdhcDogM3ZoO1xyXG5cclxuICAgIC0tbGFiZWwtZm9udC1zaXplOiAwLjdlbTtcclxuICAgIC0tY29zdC1mb250LXNpemU6MWVtO1xyXG4gICAgLS1jb3N0LWZvbnQtc2l6ZS14czowLjVlbTtcclxuICAgIC0tY29udGVudC1wYWRkaW5nOiAgMXZoIDN2aDtcclxuICAgIFxyXG59XHJcblxyXG4ubG9hbi1ib3h7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lKTtcclxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAydmggMnZoIDA7XHJcblxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHJvdy1nYXA6IDN2aDtcclxuXHJcbiAgICAtLWJyZHItcmFkOiAzdmg7XHJcblxyXG59XHJcblxyXG4gLnNsaWRlcmlucHV0Ojotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lKTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIHdpZHRoOiAxLjJ2aDtcclxuICBoZWlnaHQ6IDEuMnZoO1xyXG4gIGJvcmRlci1yYWRpdXM6NTAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2xpZGVyaW5wdXQ6Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lKTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIHdpZHRoOiAxLjJ2aDtcclxuICBoZWlnaHQ6IDEuMnZoO1xyXG4gIGJvcmRlci1yYWRpdXM6NTAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2xpZGVyaW5wdXQ6Oi1tcy10aHVtYiB7XHJcbiAgICAtbXMtYXBwZWFyYW5jZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZSk7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICB3aWR0aDogMS4ydmg7XHJcbiAgaGVpZ2h0OiAxLjJ2aDtcclxuICBib3JkZXItcmFkaXVzOjUwMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbiAgICAuc2xpZGVyaW5wdXQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgICNiZjk0ZWEgMCUsICAjYmY5NGVhICAxMDAlKTtcclxuICAgICAgICAvKiBib3JkZXI6IHNvbGlkIDFweCAjODJDRkQwOyAqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBoZWlnaHQ6IDAuNXZoO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCA0NTBtcyBlYXNlLWluO1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuLmhlYWRpbmctaXRlbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6I2ZhZmJmZDtcclxuICAgIGJvcmRlci1yYWRpdXM6MnZoIDJ2aCAwIDA7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgcGFkZGluZzogdmFyKC0tY29udGVudC1wYWRkaW5nKTtcclxufVxyXG5cclxuLmluY29tZS1pdGVte1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IHZhcigtLWNvbnRlbnQtcGFkZGluZyk7XHJcbiAgICBnYXA6IDAuN3ZoO1xyXG59XHJcblxyXG4uZXhwZW5zZS1pdGVte1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IHZhcigtLWNvbnRlbnQtcGFkZGluZyk7XHJcbiAgICBnYXA6IDAuN3ZoO1xyXG59XHJcblxyXG4udGVudXJlLWl0ZW17XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1jb250ZW50LXBhZGRpbmcpXHJcbn1cclxuXHJcbi50b2dnbGUtaXRlbXtcclxuICAgIHBhZGRpbmc6IHZhcigtLWNvbnRlbnQtcGFkZGluZyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmVtaS1pdGVte1xyXG4gICAgcGFkZGluZzogdmFyKC0tY29udGVudC1wYWRkaW5nKVxyXG59XHJcblxyXG5cclxuLmNhbGMtbGFiZWx7XHJcbiAgICBmb250LXNpemU6dmFyKC0tbGFiZWwtZm9udC1zaXplKTtcclxufVxyXG5cclxuLmNhbGMtY29zdHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29zdC1mb250LXNpemUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmNhbGMtbGFiZWwteHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tY29zdC1mb250LXNpemUteHMpIDtcclxufVxyXG5cclxuLmRyb3Bkb3duQnRue1xyXG5iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzowO1xyXG59XHJcblxyXG5cclxuXHJcbi5kcm9wZG93bkJ0bjpmb2N1czphY3RpdmV7XHJcbiAgICBib3JkZXI6IG5vbmUgaW0gIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5kcm9wZG93bkJ0bjphY3RpdmV7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJ2aDtcclxufVxyXG5cclxuXHJcbi5tb25leS1idG57XHJcbiAgICAvKiB3aWR0aDogMTM1JTsgKi9cclxuICAgIGNvbG9yOiB2YXIoLS10aGVtZSk7XHJcblxyXG4gICAgYm9yZGVyOiAwLjE1ZW0gc29saWQgdmFyKC0tdGhlbWUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnJkci1yYWQpO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJ2aDtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYnRuLWZvbnQtc2l6ZSk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAgNHZoO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAgNHZoO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZlxyXG5cclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuZmxleC1jb2x1bW57XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZsZXgtY29sdW1uID5zcGFue1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cclxuLnN3aXRjaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMnZ3O1xyXG4gICAgaGVpZ2h0OiAxLjF2dztcclxuICB9XHJcbiAgXHJcbiAgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cclxuICAuc3dpdGNoIGlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIHNsaWRlciAqL1xyXG4gIC50b2dnbGUtc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgLnRvZ2dsZS1zbGlkZXI6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDEuMXZ3O1xyXG4gICAgd2lkdGg6IDEuMXZ3O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC50b2dnbGUtc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lKTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXMgKyAudG9nZ2xlLXNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLXRoZW1lKTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC50b2dnbGUtc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyLjV2dyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuMXZ3KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjF2dyk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4gIC50b2dnbGUtc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b2dnbGUtc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1ncm91cD5pbnB1dHtcclxuICAgICAgcGFkZGluZzowO1xyXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNhcmQtbGF5b3V0e1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LGF1dG8pO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2dnc7XHJcbiAgICBnYXA6IDFlbTtcclxuXHJcbiAgfVxyXG5cclxuICAvKiAuY2FyZC1sYXlvdXQ+LmNhcmQqe1xyXG59ICovXHJcbi5jYXJkLWxheW91dD5bY2xhc3NePVwiY2FyZFwiXXtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnZoO1xyXG4gICAgICBwYWRkaW5nOiAxLjJ2dztcclxuICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuYm94LXNoYWRvdzogMHB4IDBweCAzMHB4ICMyMzIxMzIxRjtcclxuYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuYm9yZGVyLXJhZGl1czogMjBweDtcclxub3BhY2l0eTogMTtcclxuICAgIC8qIGNvbG9yOnJlZCAgKi9cclxufVxyXG5cclxuLmNhcmQtbGF5b3V0PltjbGFzc149XCJjYXJkXCJdOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogIzlGNjJDOTtcclxuICAgIGNvbG9yOiNGRkZGRkY7XHJcblxyXG59XHJcblxyXG5cclxuW2NsYXNzXj1cImNhcmRcIl0gLmNhcmQtaGVhZGluZ3tcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG5bY2xhc3NePVwiY2FyZFwiXS5jYXJkLWRlc2N7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuICAuY2FyZDF7Z3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDM7fVxyXG4gIC5jYXJkMntncmlkLXJvdy1zdGFydDogMjtcclxuICAgIGdyaWQtcm93LWVuZDogNDt9XHJcbiAgLmNhcmQze2dyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgZ3JpZC1yb3ctZW5kOiA1O31cclxuICAuY2FyZDR7Z3JpZC1yb3ctc3RhcnQ6IDQ7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDY7fVxyXG4gIC5jYXJkNXtncmlkLXJvdy1zdGFydDogNTtcclxuICAgIGdyaWQtcm93LWVuZDogNzt9XHJcblxyXG5cclxuICAgIC5ncmlkLWl0ZW00e1xyXG4gICAgICAgIHBhZGRpbmc6dmFyKC0tcGFkZGluZy1yaWdodC1sZWZ0KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4uYWNjLWJ0bntcclxuICAgIGJvcmRlcjogMC4xNWVtIHNvbGlkIHZhcigtLXRoZW1lKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDN2aDtcclxuICAgIGNvbG9yOiB2YXIoLS10aGVtZSk7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG4uYWNjLWJ0bjpmb2N1czphY3RpdmV7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjYy1idG46aG92ZXJ7XHJcbmJhY2tncm91bmQ6IHZhcigtLXRoZW1lKTtcclxuY29sb3I6I2ZmZlxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map