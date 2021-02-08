(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\biruk\OneDrive\Desktop\CSCI Projects\API Parser\api-parser\src\main.ts */"zUnb");


/***/ }),

/***/ "0BiN":
/*!**********************************************!*\
  !*** ./src/app/creator/creator.component.ts ***!
  \**********************************************/
/*! exports provided: CreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatorComponent", function() { return CreatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_data_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/data-field */ "t/sH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _entry_list_item_entry_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entry-list-item/entry-list-item.component */ "yVp9");





function CreatorComponent_app_entry_list_item_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-entry-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("del", function CreatorComponent_app_entry_list_item_17_Template_app_entry_list_item_del_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteItem(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreatorComponent {
    constructor() {
        this.dataFields = [];
    }
    ngOnInit() {
    }
    addField() {
        this.dataFields.push(new _models_data_field__WEBPACK_IMPORTED_MODULE_1__["DataField"]("", "", false, false));
        console.log("There are " + this.dataFields.length);
    }
    deleteItem(i) {
        this.dataFields.splice(i, 1);
    }
}
CreatorComponent.ɵfac = function CreatorComponent_Factory(t) { return new (t || CreatorComponent)(); };
CreatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatorComponent, selectors: [["app-creator"]], decls: 18, vars: 1, consts: [[1, "card-float"], ["id", "record-btn", "type", "button", 1, "btn", "btn-success"], [1, "name", "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "text", "aria-label", "Default", "aria-describedby", "inputGroup-sizing-default", 1, "form-control"], [1, "form-group"], ["for", "formGroupExampleInput"], ["type", "text", "id", "formGroupExampleInput", "placeholder", "Enter component's description here", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "del", 4, "ngFor", "ngForOf"], [3, "del"]], template: function CreatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2713 Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create new entry:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name of component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatorComponent_Template_button_click_15_listener() { return ctx.addField(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+ Add Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreatorComponent_app_entry_list_item_17_Template, 1, 0, "app-entry-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataFields);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _entry_list_item_entry_list_item_component__WEBPACK_IMPORTED_MODULE_3__["EntryListItemComponent"]], styles: [".card-float[_ngcontent-%COMP%]{\r\n  min-height: 40px;\r\n  padding: 50px;\r\n  max-width: 1000px;\r\n  margin: 0px auto 0px auto;\r\n}\r\n.form-control[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n  margin-bottom: 20px;\r\n}\r\n#record-btn[_ngcontent-%COMP%]{\r\n  float: right;\r\n  width: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2QiLCJmaWxlIjoiY3JlYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZmxvYXR7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87XHJcbn1cclxuLmZvcm0tY29udHJvbCwubmFtZXtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbmgxe1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuI3JlY29yZC1idG57XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-creator',
                templateUrl: './creator.component.html',
                styleUrls: ['./creator.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "0btM":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _creator_creator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../creator/creator.component */ "0BiN");
/* harmony import */ var _displayer_displayer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../displayer/displayer.component */ "gvPx");




class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 2, vars: 0, template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-creator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-displayer");
    } }, directives: [_creator_creator_component__WEBPACK_IMPORTED_MODULE_1__["CreatorComponent"], _displayer_displayer_component__WEBPACK_IMPORTED_MODULE_2__["DisplayerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8Gyv":
/*!****************************************************************************!*\
  !*** ./src/app/displayer/display-list-item/display-list-item.component.ts ***!
  \****************************************************************************/
/*! exports provided: DisplayListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayListItemComponent", function() { return DisplayListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _creator_entry_list_item_entry_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../creator/entry-list-item/entry-list-item.component */ "yVp9");




function DisplayListItemComponent_app_entry_list_item_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-entry-list-item", 12);
} if (rf & 2) {
    const dataField_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", dataField_r1.name)("type", dataField_r1.type)("optional", dataField_r1.optional)("exlusive", dataField_r1.exclusive);
} }
class DisplayListItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
DisplayListItemComponent.ɵfac = function DisplayListItemComponent_Factory(t) { return new (t || DisplayListItemComponent)(); };
DisplayListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayListItemComponent, selectors: [["app-display-list-item"]], inputs: { dataFields: "dataFields", name: "name", description: "description" }, decls: 19, vars: 4, consts: [[1, "card"], [1, "desc"], ["type", "button", "id", "edit", 1, "btn", "btn-outline-primary"], [1, "name", "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "inputGroup-sizing-default", 1, "input-group-text"], ["type", "text", "aria-label", "Default", "aria-describedby", "inputGroup-sizing-default", 1, "form-control", 3, "value"], [1, "form-group"], ["for", "formGroupExampleInput"], ["type", "text", "id", "formGroupExampleInput", "placeholder", "Enter component's description here", 1, "form-control", 3, "value"], ["type", "button", 1, "btn", "btn-primary"], [3, "name", "type", "optional", "exlusive", 4, "ngFor", "ngForOf"], [3, "name", "type", "optional", "exlusive"]], template: function DisplayListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Confirm Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name of component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "+ Add Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DisplayListItemComponent_app_entry_list_item_18_Template, 1, 4, "app-entry-list-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataFields);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _creator_entry_list_item_entry_list_item_component__WEBPACK_IMPORTED_MODULE_2__["EntryListItemComponent"]], styles: [".card[_ngcontent-%COMP%]{\r\n  padding: 30px;\r\n  margin-bottom: 40px;\r\n  max-width: 1000px;\r\n  margin: 40px auto 0px auto;\r\n\r\n}\r\n#edit[_ngcontent-%COMP%]{\r\n  min-width: 70px;\r\n  height: 40px;\r\nmargin-left: 50px;\r\n}\r\n.desc[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  width: 100%;\r\n  padding-bottom: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXktbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiwwQkFBMEI7O0FBRTVCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkLGlCQUFpQjtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEIiLCJmaWxlIjoiZGlzcGxheS1saXN0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW46IDQwcHggYXV0byAwcHggYXV0bztcclxuXHJcbn1cclxuI2VkaXR7XHJcbiAgbWluLXdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxubWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuLmRlc2N7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-display-list-item',
                templateUrl: './display-list-item.component.html',
                styleUrls: ['./display-list-item.component.css']
            }]
    }], function () { return []; }, { dataFields: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DataService {
    constructor() {
        this.dataTypes = [];
    }
    getDataTypes(isTest) {
        return !isTest ? this.dataTypes : [
            {
                name: "Chat",
                description: "Literally just a chat.",
                fields: [
                    { name: "text", type: "string", optional: false, exclusive: true },
                    { name: "userID", type: "integer", optional: true, exclusive: true }
                ]
            },
            {
                name: "Message",
                description: "Literally just a message.",
                fields: [
                    { name: "sticker", type: "string", optional: true, exclusive: false },
                    { name: "userID", type: "string", optional: false, exclusive: true }
                ]
            },
        ];
    }
    addDataType(x) {
        this.dataTypes.push(x);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'api-parser';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[2, "padding", "48px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _creator_creator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./creator/creator.component */ "0BiN");
/* harmony import */ var _displayer_displayer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayer/displayer.component */ "gvPx");
/* harmony import */ var _creator_entry_list_item_entry_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./creator/entry-list-item/entry-list-item.component */ "yVp9");
/* harmony import */ var _displayer_display_list_item_display_list_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./displayer/display-list-item/display-list-item.component */ "8Gyv");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/content.component */ "0btM");
/* harmony import */ var _content_two_content_two_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content-two/content-two.component */ "kqA2");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _creator_creator_component__WEBPACK_IMPORTED_MODULE_5__["CreatorComponent"],
        _displayer_displayer_component__WEBPACK_IMPORTED_MODULE_6__["DisplayerComponent"],
        _creator_entry_list_item_entry_list_item_component__WEBPACK_IMPORTED_MODULE_7__["EntryListItemComponent"],
        _displayer_display_list_item_display_list_item_component__WEBPACK_IMPORTED_MODULE_8__["DisplayListItemComponent"],
        _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"],
        _content_two_content_two_component__WEBPACK_IMPORTED_MODULE_10__["ContentTwoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _creator_creator_component__WEBPACK_IMPORTED_MODULE_5__["CreatorComponent"],
                    _displayer_displayer_component__WEBPACK_IMPORTED_MODULE_6__["DisplayerComponent"],
                    _creator_entry_list_item_entry_list_item_component__WEBPACK_IMPORTED_MODULE_7__["EntryListItemComponent"],
                    _displayer_display_list_item_display_list_item_component__WEBPACK_IMPORTED_MODULE_8__["DisplayListItemComponent"],
                    _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"],
                    _content_two_content_two_component__WEBPACK_IMPORTED_MODULE_10__["ContentTwoComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gvPx":
/*!**************************************************!*\
  !*** ./src/app/displayer/displayer.component.ts ***!
  \**************************************************/
/*! exports provided: DisplayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayerComponent", function() { return DisplayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _display_list_item_display_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-list-item/display-list-item.component */ "8Gyv");





function DisplayerComponent_app_display_list_item_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-display-list-item", 1);
} if (rf & 2) {
    const dataType_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", dataType_r1.name)("description", dataType_r1.description)("dataFields", dataType_r1.fields);
} }
class DisplayerComponent {
    constructor(data) {
        this.data = data;
        this.dataTypes = this.data.getDataTypes(true);
    }
    ngOnInit() {
        this.dataTypes = this.data.getDataTypes(true);
        console.log(this.dataTypes.length);
    }
}
DisplayerComponent.ɵfac = function DisplayerComponent_Factory(t) { return new (t || DisplayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
DisplayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayerComponent, selectors: [["app-displayer"]], decls: 1, vars: 1, consts: [[3, "name", "description", "dataFields", 4, "ngFor", "ngForOf"], [3, "name", "description", "dataFields"]], template: function DisplayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DisplayerComponent_app_display_list_item_0_Template, 1, 3, "app-display-list-item", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataTypes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _display_list_item_display_list_item_component__WEBPACK_IMPORTED_MODULE_3__["DisplayListItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNwbGF5ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-displayer',
                templateUrl: './displayer.component.html',
                styleUrls: ['./displayer.component.css']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 13, vars: 0, consts: [[1, "nav-center"], ["href", "/datatypes"], ["href", "/methods"], [1, "nav-options"], [1, "export", "btn"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Data Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "Button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Export JSON ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["nav[_ngcontent-%COMP%]{\r\n  background-color: #2196f3;\r\n  height: 80px;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\nnav[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.nav-center[_ngcontent-%COMP%]{\r\n}\r\nul[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  margin: 0px 50px 0px 0px;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n  flex: 1;\r\n  height: 80px;\r\n  padding: 0px 40px 0px 40px;\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-bottom: 5px solid #b7dfff;\r\n}\r\nli[_ngcontent-%COMP%]:hover, .selected[_ngcontent-%COMP%]{\r\n  background-color: rgba(0, 0, 0, 0.322);\r\n}\r\na[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  text-align: center;\r\n  color: white;\r\n  font-size: larger;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsT0FBTztFQUNQLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbm5hdiA+IGRpdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm5hdi1jZW50ZXJ7XHJcbn1cclxudWx7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDBweCA1MHB4IDBweCAwcHg7XHJcbn1cclxubGl7XHJcbiAgZmxleDogMTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgcGFkZGluZzogMHB4IDQwcHggMHB4IDQwcHg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNiN2RmZmY7XHJcbn1cclxubGk6aG92ZXIsLnNlbGVjdGVke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMjIpO1xyXG59XHJcbmF7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kqA2":
/*!******************************************************!*\
  !*** ./src/app/content-two/content-two.component.ts ***!
  \******************************************************/
/*! exports provided: ContentTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTwoComponent", function() { return ContentTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContentTwoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentTwoComponent.ɵfac = function ContentTwoComponent_Factory(t) { return new (t || ContentTwoComponent)(); };
ContentTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentTwoComponent, selectors: [["app-content-two"]], decls: 2, vars: 0, template: function ContentTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "content-two works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LXR3by5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content-two',
                templateUrl: './content-two.component.html',
                styleUrls: ['./content-two.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "t/sH":
/*!**************************************!*\
  !*** ./src/app/models/data-field.ts ***!
  \**************************************/
/*! exports provided: DataField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataField", function() { return DataField; });
class DataField {
    constructor(name, type, optional, exclusive) { }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _content_two_content_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-two/content-two.component */ "kqA2");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.component */ "0btM");






const routes = [
    { path: '', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
    { path: 'datatypes', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
    { path: 'methods', component: _content_two_content_two_component__WEBPACK_IMPORTED_MODULE_2__["ContentTwoComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yVp9":
/*!**********************************************************************!*\
  !*** ./src/app/creator/entry-list-item/entry-list-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: EntryListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryListItemComponent", function() { return EntryListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");




function EntryListItemComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1);
} }
class EntryListItemComponent {
    constructor() {
        this.del = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.datatypes = [
            "String", "Boolean",
            "Integer", "User",
            "Chat", "ChatPhoto",
            "ChatPermissions", "ChatLocation",
            "Animation", "Audio",
            "", "",
            "", "",
            "", "",
        ];
    }
    ngOnInit() {
    }
    deleteItem() {
        this.del.emit("");
    }
}
EntryListItemComponent.ɵfac = function EntryListItemComponent_Factory(t) { return new (t || EntryListItemComponent)(); };
EntryListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntryListItemComponent, selectors: [["app-entry-list-item"]], inputs: { name: "name", type: "type", optional: "optional", exlusive: "exlusive" }, outputs: { del: "del" }, decls: 19, vars: 4, consts: [[1, "card"], [1, "form-row"], [1, "col"], ["type", "text", "placeholder", "Field name", 1, "form-control", 3, "value"], ["id", "inlineFormCustomSelectPref", 1, "custom-select", "my-1", "mr-sm-2", 2, "margin", "0px"], ["value", "i", 4, "ngFor", "ngForOf"], [1, "checkboxes"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input", 3, "checked"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "checkbox", "id", "inlineCheckbox2", "value", "option2", 1, "form-check-input", 3, "checked"], ["for", "inlineCheckbox2", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["value", "i"]], template: function EntryListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EntryListItemComponent_option_7_Template, 2, 1, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Optional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Exclusive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntryListItemComponent_Template_button_click_17_listener() { return ctx.deleteItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.datatypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.optional);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.exlusive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".card[_ngcontent-%COMP%]{\r\n  padding: 20px;\r\n  margin: 10px 0px 10px 0px;\r\n}\r\n.form-control[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{\r\n  margin: 4px;\r\n}\r\n.checkboxes[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 4px;\r\n}\r\n.checkboxes[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0px 10px 0px 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJ5LWxpc3QtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0IiLCJmaWxlIjoiZW50cnktbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XHJcbn1cclxuLmZvcm0tY29udHJvbCxidXR0b257XHJcbiAgbWFyZ2luOiA0cHg7XHJcbn1cclxuLmNoZWNrYm94ZXN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG4uY2hlY2tib3hlcyA+IGRpdntcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-entry-list-item',
                templateUrl: './entry-list-item.component.html',
                styleUrls: ['./entry-list-item.component.css']
            }]
    }], function () { return []; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], exlusive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], del: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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