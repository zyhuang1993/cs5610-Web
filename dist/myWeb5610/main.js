(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-text/widget-text.component */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-html/widget-html.component */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");





















var appRoutes = [
    { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'user/:userId', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'user/:userId/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteListComponent"] },
    { path: 'user/:userId/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteNewComponent"] },
    { path: 'user/:userId/website/:websiteId', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteEditComponent"] },
    { path: 'user/:userId/website/:websiteId/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_11__["PageListComponent"] },
    { path: 'user/:userId/website/:websiteId/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_12__["PageEditComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_13__["WidgetListComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_14__["WidgetChooserComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/new/youtube', component: _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_15__["WidgetYoutubeComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/new/header', component: _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_16__["WidgetHeaderComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/new/image', component: _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_17__["WidgetImageComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/new/text', component: _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_18__["WidgetTextComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/new/html', component: _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_19__["WidgetHtmlComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/youtube', component: _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_15__["WidgetYoutubeComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/header', component: _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_16__["WidgetHeaderComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/image', component: _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_17__["WidgetImageComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/text', component: _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_18__["WidgetTextComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/html', component: _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_19__["WidgetHtmlComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId/image/flickr', component: _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_20__["FlickrImageSearchComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myWeb5610';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_quill_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-quill-editor */ "./node_modules/ngx-quill-editor/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./directives/sortable.directive */ "./src/app/directives/sortable.directive.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
/* harmony import */ var _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-text/widget-text.component */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-html/widget-html.component */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_15__["WebsiteListComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_16__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_17__["WebsiteEditComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_18__["PageListComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_19__["PageEditComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_20__["PageNewComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_21__["WidgetListComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_22__["WidgetChooserComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_24__["WidgetHeaderComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_25__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_26__["WidgetYoutubeComponent"],
                _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_27__["SortableDirective"],
                _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_28__["FlickrImageSearchComponent"],
                _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_30__["WidgetTextComponent"],
                _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_31__["WidgetHtmlComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_quill_editor__WEBPACK_IMPORTED_MODULE_5__["QuillEditorModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_11__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_12__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_13__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_14__["WidgetService"], _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_29__["FlickrService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/sortable.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/sortable.directive.ts ***!
  \**************************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSortable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/page.model.client.ts ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(name, websiteId, description) {
        this.name = name;
        this.websiteId = websiteId;
        this.description = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password, firstName, lastName) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/website.model.client.ts ***!
  \************************************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(name, developerId, description) {
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(type, name, pageId, size, text, width, url, rows, formatted, placeholder) {
        this.type = type;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.url = url;
        this.width = width;
        this.rows = rows;
        this.formatted = formatted;
        this.placeholder = placeholder;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/flickr.service.client.ts ***!
  \***************************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FlickrService = /** @class */ (function () {
    function FlickrService(http) {
        this.http = http;
        this.key = 'b8980fb0b4751b1a0845093050bb993e';
        this.secret = 'c0d0c4a23a6d6f75';
        this.flickrUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=" + this.key + "&text=";
    }
    FlickrService.prototype.searchPhotos = function (searchItem) {
        var url = this.flickrUrl + searchItem;
        console.log(url);
        return this.http.get(url, { responseType: 'text' });
    };
    FlickrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.post(url, page);
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.get(url);
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.get(url);
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.put(url, page);
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.delete(url);
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user';
        return this.http.post(url, user);
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url);
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromString: "username=" + username + "&password=" + password
        });
        var url = this.baseUrl + '/api/user';
        return this.http.get(url, { params: params });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, website);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url);
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.get(url);
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.put(url, website);
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.delete(url);
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.baseurl + '/api/page/' + pageId + '/widget';
        return this.http.post(url, widget);
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.baseurl + '/api/page/' + pageId + '/widget';
        return this.http.get(url);
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseurl + '/api/widget/' + widgetId;
        return this.http.get(url);
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseurl + '/api/widget/' + widgetId;
        return this.http.put(url, widget);
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseurl + '/api/widget/' + widgetId;
        return this.http.delete(url);
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseurl + '/api/page/' + pageId + '/widget/reorder?start=' + startIndex + '&end=' + endIndex;
        return this.http.get(url);
    };
    WidgetService.prototype.uploadImage = function (file) {
        return this.http.post(this.baseurl + '/api/uploads', file);
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-align-center\">\n\n  <a routerLink=\"/login\">Welcome to Ziyan Huang's 5th assignment</a>\n</div>\n"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/views/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nmain {\n  margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5tYWluIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"row row-div\">\n      <div class=\"col-sm-4 container-fluid d-none d-sm-block\">\n        <p class=\"navbar-text float-left\">\n          <a class=\"navbar-link nav-black-icon\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\">\n            <span class=\"fas fa-chevron-left fontawsome_icon top-left\"></span>\n          </a>\n          <a class=\"navbar-black-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\">\n            Pages\n          </a>\n        </p>\n      </div>\n      <div class=\"col-sm-8 container-fluid\">\n        <p class=\"navbar-text float-left\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link text-white d-inline d-sm-none d-md-none d-lg-none\">\n            <span class=\"nav-black-icon fas fa-chevron-left fontawsome-icon top-left\"></span>\n          </a>\n          <a class=\"navbar-black-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}\">\n            Edit Page\n          </a>\n        </p>\n        <a (click)=\"updateCurPage()\" class=\"navbar-link navbar-text float-right nav-icon check-icon\">\n          <span class=\"nav-black-icon fas fa-check fontawsome_icon top-right\"></span>\n        </a>\n      </div>\n\n    </div>\n  </nav>\n</header>\n<main>\n  <div class=\"container-fluid\">\n  <div class=\"row row-div\">\n    <div class=\"d-none d-sm-block col-sm-4\">\n      <ul class=\"list-group list-borderless\">\n        <li class=\"list-group-item list-borderless\" *ngFor=\"let page of pages\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-8 right-content\">\n        <div class=\"text-padding-top\">\n          <label for=\"page-name\" class=\"text-bold\">Name</label>\n          <input [(ngModel)]=\"curPage.name\" id=\"page-name\" type=\"text\" class=\"form-control\" placeholder=\"Page Name\"/>\n        </div>\n        <div class=\"text-padding-top\">\n          <label for=\"page-title\" class=\"text-bold\">Title</label>\n          <input [(ngModel)]=\"curPage.description\" id=\"page-title\" type=\"text\" class=\"form-control\" placeholder=\"Page Title\">\n        </div>\n      <a (click)=\"deletePage()\" class=\"btn btn-danger btn-block margin-top\">Delete</a>\n    </div>\n  </div>\n</div>\n</main>\n\n<footer>\n  <nav class=\"navbar fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\"></p>\n      <a class=\"nav-black-icon\" routerLink=\"/user/{{userId}}\">\n        <span class=\"fas fa-user fontawsome-icon bottom-right\"></span>\n      </a>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, router, activatedRoute) {
        this.pageService = pageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pages = [];
        this.curPage = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__["Page"](undefined, undefined, undefined);
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.pageId = params.pageId;
            _this.pageService.findPagesByWebsiteId(_this.websiteId).subscribe(function (data) {
                _this.pages = data;
            });
            _this.pageService.findPageById(_this.pageId).subscribe(function (data) {
                _this.curPage = data;
            });
        });
    };
    PageEditComponent.prototype.updateCurPage = function () {
        var _this = this;
        if (!this.curPage.name || !this.curPage.description) {
            alert('Please enter the name or description');
        }
        else {
            this.pageService.updatePage(this.pageId, this.curPage).subscribe(function (data) {
                _this.curPage = data;
                _this.backToPages();
            });
        }
    };
    PageEditComponent.prototype.backToPages = function () {
        this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page']);
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId).subscribe(function () {
            _this.backToPages();
        });
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nmain {\n  margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5tYWluIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link\">\n          <span class=\"nav-black-icon fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"navbar-black-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\">\n          Pages\n        </a>\n      </p>\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\" class=\"navbar-link navbar-text float-right\">\n        <span class=\"nav-black-icon fas fa-plus fontawsome-icon top-right\"></span>\n      </a>\n    </div>\n  </nav>\n</header>\n\n<main>\n<div class=\"container\">\n  <ul class=\"list-group list-borderless\">\n    <li class=\"list-group-item list-borderless\" *ngFor=\"let page of pages\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n    </li>\n  </ul>\n</div>\n</main>\n\n<footer>\n  <nav class=\"navbar fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\"></p>\n      <a class=\"nav-black-icon\" routerLink=\"/user/{{userId}}\">\n        <span class=\"fas fa-user fontawsome-icon bottom-right\"></span>\n      </a>\n    </div>\n  </nav>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(router, pageService, activatedRoute) {
        this.router = router;
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.pageService.findPagesByWebsiteId(_this.websiteId).subscribe(function (data) {
                _this.pages = data;
            });
        });
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nmain {\n  margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZS9wYWdlLW5ldy9wYWdlLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbm1haW4ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"row row-div\">\n      <div class=\"col-sm-4 container-fluid d-none d-sm-block\">\n        <p class=\"navbar-text float-left\">\n          <a class=\"navbar-link nav-black-icon\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\">\n            <span class=\"fas fa-chevron-left fontawsome_icon top-left\"></span>\n          </a>\n          <a class=\"navbar-black-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\">\n            Pages\n          </a>\n        </p>\n      </div>\n      <div class=\"col-sm-8 container-fluid\">\n        <p class=\"navbar-text float-left\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link text-white d-inline d-sm-none d-md-none d-lg-none\">\n            <span class=\"nav-black-icon fas fa-chevron-left fontawsome-icon top-left\"></span>\n          </a>\n          <a class=\"navbar-black-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\">\n            New Page\n          </a>\n        </p>\n        <a (click)=\"createNewPage()\" class=\"navbar-link navbar-text float-right nav-icon check-icon\">\n          <span class=\"nav-black-icon fas fa-check fontawsome_icon top-right\"></span>\n        </a>\n      </div>\n\n    </div>\n  </nav>\n</header>\n\n<main>\n<div class=\"container-fluid\">\n  <div class=\"row row-div\">\n    <div class=\"d-none d-sm-block col-sm-4\">\n      <ul class=\"list-group list-borderless\">\n        <li class=\"list-group-item list-borderless\" *ngFor=\"let page of pages\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">{{page.name}}</a>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page._id}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-8 right-content\">\n        <div class=\"text-padding-top\">\n          <label for=\"page-name\" class=\"text-bold\">Name</label>\n          <input id=\"page-name\" type=\"text\" class=\"form-control\" placeholder=\"Page Name\" [(ngModel)]=\"newPage.name\"/>\n        </div>\n        <div class=\"text-padding-top\">\n          <label for=\"page-title\" class=\"text-bold\">Title</label>\n          <input id=\"page-title\" type=\"text\" class=\"form-control\" placeholder=\"Page Title\" [(ngModel)]=\"newPage.description\">\n        </div>\n    </div>\n  </div>\n</div>\n</main>\n<footer>\n  <nav class=\"navbar fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\"></p>\n      <a class=\"nav-black-icon\" routerLink=\"/user/{{userId}}\">\n        <span class=\"fas fa-user fontawsome-icon bottom-right\"></span>\n      </a>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");





var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(router, activatedRoute, pageService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.pages = [];
        this.newPage = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__["Page"](undefined, undefined, undefined);
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.pageService.findPagesByWebsiteId(_this.websiteId).subscribe(function (data) {
                _this.pages = data;
            });
        });
    };
    PageNewComponent.prototype.createNewPage = function () {
        var _this = this;
        if (!this.newPage.name || !this.newPage.description) {
            alert('Please enter the name or description');
        }
        else {
            this.pageService.createPage(this.websiteId, this.newPage).subscribe(function (data) {
                _this.newPage = data;
                _this.router.navigate(['user/' + _this.userId + '/website/' + _this.websiteId + '/page']);
            });
        }
    };
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_4__["PageService"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>\n    {{title}}\n  </h1>\n  <div>\n    <form method=\"get\" (ngSubmit)=\"login()\" #f=\"ngForm\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"username\" name=\"username\"\n             ngModel required #username=\"ngModel\"/>\n      <input type=\"password\" class=\"form-control\" placeholder=\"password\" name=\"password\"\n             ngModel required #password=\"ngModel\"/>\n      <button class=\"button-div btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n      <a routerLink=\"/register\" class=\"button-div btn btn-success btn-block\">Register</a>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password! Please re-enter!';
        this.title = 'login';
        this.errorFlag = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        if (this.username && this.password) {
            this.userService.findUserByCredentials(this.username, this.password).subscribe(function (data) {
                if (data) {
                    _this.router.navigate(['user', data._id]);
                }
                else {
                    _this.errorFlag = true;
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n<nav class=\"navbar fixed-top background-blue\">\n  <div class=\"container-fluid\">\n  <a class=\"navbar-brand\" routerLink=\"/user/{{user._id}}\">\n    {{user.username}}'s {{title}}\n  </a>\n  <a (click)=\"updateUser()\" class=\"nav-icon navbar-link navbar-text float-right text-white check-icon\">\n    <span class=\"fas fa-check fontawsome_icon top-right\"></span>\n  </a>\n  </div>\n</nav>\n</header>\n<main>\n<div class=\"container container-padding\">\n    <div class=\"form-group\">\n      <label for=\"username\"><strong>Username</strong></label>\n      <input id=\"username\" class=\"form-control\" type=\"text\" placeholder=\"change your username\" [(ngModel)]=\"user.username\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\"><strong>Password</strong></label>\n      <input id=\"password\" class=\"form-control\" type=\"password\" placeholder=\"change your password\" [(ngModel)]=\"user.password\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"first-name\"><strong>First Name</strong></label>\n      <input id=\"first-name\" class=\"form-control\" type=\"text\" placeholder=\"change your first name\" [(ngModel)]=\"user.firstName\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"last-name\"><strong>Last Name</strong></label>\n      <input id=\"last-name\" class=\"form-control\" type=\"text\" placeholder=\"change your last name\" [(ngModel)]=\"user.lastName\"/>\n    </div>\n\n    <a routerLink=\"/user/{{user._id}}/website\" class=\"btn btn-primary btn-block\">Websites</a>\n    <a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Logout</a>\n</div>\n</main>\n<footer>\n<nav class=\"navbar fixed-bottom background-blue\">\n  <a class=\"navbar-brand\" id=\"hide\" routerLink=\"/user/{{user._id}}\">Profile</a>\n</nav>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.title = 'profile';
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '', '');
    }
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        if (!this.user.username || !this.user.password || !this.user.firstName || !this.user.lastName) {
            alert('Please enter your new profile information');
        }
        else {
            this.userService.updateUser(this.user._id, this.user).subscribe(function (data) {
                _this.user = data;
                _this.router.navigate(['/user/' + _this.user._id]);
                alert('update successfully');
            });
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userService.findUserById(params.userId).subscribe(function (data) {
                _this.user = data;
            });
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>\n    {{title}}\n  </h1>\n  <div>\n      <input [(ngModel)]=\"user.username\" type=\"text\" class=\"form-control\" placeholder=\"username\"/>\n      <input [(ngModel)]=\"user.password\" type=\"password\" class=\"form-control\" placeholder=\"password\"/>\n      <input [(ngModel)]=\"vpassword\" type=\"password\" class=\"form-control\" placeholder=\"verify password\"/>\n      <input [(ngModel)]=\"user.firstName\" type=\"text\" class=\"form-control\" placeholder=\"last name\"/>\n      <input [(ngModel)]=\"user.lastName\" type=\"text\" class=\"form-control\" placeholder=\"first name\"/>\n\n    <a (click)=\"register()\" class=\"btn btn-primary btn-block color-white\">Register</a>\n    <a routerLink=\"/login\" class=\"btn btn-success btn-block color-white\">Cancel</a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = 'Sorry, passwords mis-matching.';
        this.title = 'Register';
        this.errorFlag = false;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](undefined, undefined, undefined, undefined);
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (!this.user.username || !this.user.password || !this.user.lastName || !this.user.firstName || !this.vpassword) {
            alert('Please enter your register information');
        }
        else {
            if (this.vpassword === this.user.password) {
                this.errorFlag = false;
                var registeredUser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](this.user.username, this.user.password, this.user.firstName, this.user.lastName);
                this.userService.createUser(registeredUser).subscribe(function (data) {
                    _this.router.navigate(['user', data._id]);
                });
            }
            else {
                this.errorFlag = true;
            }
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nmain {\n  margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5tYWluIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n<nav class=\"navbar fixed-top background-blue\">\n  <div class=\"row row-div\">\n    <div class=\"col-sm-4 container-fluid d-none d-sm-block\">\n      <p class=\"navbar-text float-left\">\n        <a class=\"navbar-link nav-icon\" routerLink=\"/user/{{userId}}/website\">\n          <span class=\"fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"text-white text-bold\" routerLink=\"/user/{{userId}}/website\">\n          Websites\n        </a>\n      </p>\n    </div>\n    <div class=\"col-sm-8 container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link text-white d-inline d-sm-none d-md-none d-lg-none\">\n          <span class=\"fas fa-chevron-left fontawsome-icon top-left\"></span>\n        </a>\n        <a class=\"text-white text-bold\" routerLink=\"/user/{{userId}}/website/{{websiteId}}\">\n          Edit Website\n        </a>\n      </p>\n      <a (click)=\"updateCurWebsite()\" class=\"navbar-link navbar-text float-right nav-icon check-icon\">\n        <span class=\"fas fa-check fontawsome_icon top-right\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n</header>\n<main>\n<div class=\"container-fluid\">\n  <div class=\"row row-div\">\n    <div class=\"d-none d-sm-block col-sm-4\">\n      <ul class=\"list-group list-borderless\">\n        <li class=\"list-group-item list-borderless\" *ngFor=\"let website of websites\">\n          <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n          <a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-sm-8 right-content\">\n        <div class=\"text-padding-top\">\n          <label for=\"website-name\" class=\"text-bold\">Website Name</label>\n          <input id=\"website-name\" type=\"text\" class=\"form-control\" [placeholder]=\"curWebsite.name\" [(ngModel)]=\"curWebsite.name\"/>\n        </div>\n        <div class=\"text-padding-top\">\n          <label for=\"web-description\" class=\"text-bold\">Description</label>\n          <textarea id=\"web-description\" class=\"form-control\" rows=\"5\" [placeholder]=\"curWebsite.description\" [(ngModel)]=\"curWebsite.description\"></textarea>\n        </div>\n      <a (click)=\"deleteWeb()\" class=\"btn btn-danger btn-block margin-top\">Delete</a>\n    </div>\n  </div>\n</div>\n</main>\n<footer>\n  <nav class=\"navbar fixed-bottom background-blue\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\"></p>\n      <a class=\"nav-icon\" routerLink=\"/user/{{userId}}\">\n        <span class=\"fas fa-user fontawsome-icon bottom-right\"></span>\n      </a>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");





var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(activatedRouter, websiteService, router) {
        this.activatedRouter = activatedRouter;
        this.websiteService = websiteService;
        this.router = router;
        this.websites = [];
        this.curWebsite = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](undefined, undefined, undefined);
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (data) {
                _this.websites = data;
            });
            _this.websiteService.findWebsiteById(_this.websiteId).subscribe(function (data) {
                _this.curWebsite = data;
            });
        });
    };
    WebsiteEditComponent.prototype.updateCurWebsite = function () {
        var _this = this;
        if (!this.curWebsite.name || !this.curWebsite.description) {
            alert('Please make sure the input area is not blank');
        }
        else {
            this.websiteService.updateWebsite(this.websiteId, this.curWebsite)
                .subscribe(function (data) {
                _this.router.navigate(['user/' + _this.userId + '/website']);
            });
        }
    };
    WebsiteEditComponent.prototype.deleteWeb = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId).subscribe(function () {
            alert('delete successfully');
            _this.router.navigate(['user/' + _this.userId + '/website']);
        });
    };
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nmain {\n  margin-top: 50px;\n}\n\ndiv>p {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxubWFpbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbmRpdj5wIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n<nav class=\"navbar fixed-top background-blue\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text float-left\">\n      <a routerLink=\"/user/{{userId}}\" class=\"navbar-link\">\n        <span class=\"nav-icon fas fa-chevron-left fontawsome_icon top-left\"></span>\n      </a>\n      <a class=\"navbar-brand text-bold\" routerLink=\"/user/{{userId}}/website\">\n        Websites\n      </a>\n    </p>\n    <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-link navbar-text float-right\">\n      <span class=\"nav-icon fas fa-plus fontawsome-icon top-right\"></span>\n    </a>\n  </div>\n</nav>\n</header>\n\n<main>\n<div class=\"container\">\n  <ul class=\"list-group list-borderless\">\n    <li class=\"list-group-item list-borderless\" *ngFor=\"let website of websites\">\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n      <a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n    </li>\n  </ul>\n</div>\n</main>\n\n<footer>\n<nav class=\"navbar fixed-bottom background-blue\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text float-left\"></p>\n    <a class=\"nav-icon\" routerLink=\"/user/{{userId}}\">\n      <span class=\"fas fa-user fontawsome-icon bottom-right\"></span>\n    </a>\n  </div>\n</nav>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activateRoute, router) {
        this.websiteService = websiteService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (data) {
                _this.websites = data;
            });
        });
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nmain {\n  margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2Vic2l0ZS93ZWJzaXRlLW5ldy93ZWJzaXRlLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbm1haW4ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n<nav class=\"navbar fixed-top background-blue\">\n  <div class=\"row row-div\">\n    <div class=\"col-sm-4 container-fluid d-none d-sm-block\">\n      <p class=\"navbar-text float-left\">\n        <a class=\"navbar-link nav-icon\" routerLink=\"/user/{{userId}}/website\">\n            <span class=\"fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"navbar-brand text-bold\" routerLink=\"/user/{{userId}}/website\">\n        Websites\n        </a>\n      </p>\n    </div>\n    <div class=\"col-sm-8 container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link text-white d-inline d-sm-none d-md-none d-lg-none\">\n          <span class=\"fas fa-chevron-left fontawsome-icon top-left\"></span>\n        </a>\n         <a class=\"text-white text-bold\" routerLink=\"/user/{{userId}}/website/new\">\n           New Website\n         </a>\n      </p>\n      <a (click)=\"createNewWeb()\" class=\"navbar-link navbar-text float-right nav-icon check-icon\">\n        <span class=\"fas fa-check fontawsome_icon top-right\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n\n</header>\n<main>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"d-none d-sm-block col-sm-4 row-div\">\n      <ul class=\"list-group list-borderless\">\n        <li class=\"list-group-item list-borderless\" *ngFor=\"let website of websites\">\n          <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n          <a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-sm-8 right-content\">\n        <div class=\"text-padding-top\">\n          <label for=\"website-name\" class=\"text-bold\">Name</label>\n          <input id=\"website-name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"website.name\"/>\n        </div>\n        <div class=\"text-padding-top\">\n          <label for=\"web-description\" class=\"text-bold\">Description</label>\n          <textarea id=\"web-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\" [(ngModel)]=\"website.description\"></textarea>\n        </div>\n    </div>\n  </div>\n</div>\n</main>\n<footer>\n  <nav class=\"navbar fixed-bottom background-blue\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\"></p>\n      <a class=\"nav-icon\" routerLink=\"/user/{{userId}}\">\n        <span class=\"fas fa-user fontawsome-icon bottom-right\"></span>\n      </a>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.ts ***!
  \********************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");





var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(router, websiteService, activatedRouter) {
        this.router = router;
        this.websiteService = websiteService;
        this.activatedRouter = activatedRouter;
        this.websites = [];
        this.website = new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](undefined, undefined, undefined);
    }
    WebsiteNewComponent.prototype.createNewWeb = function () {
        var _this = this;
        if (!this.website.name || !this.website.description) {
            alert('Please enter the name or description');
        }
        else {
            this.websiteService.createWebsite(this.userId, new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](this.website.name, undefined, this.website.description))
                .subscribe(function (data) {
                _this.website = data;
                _this.router.navigate(['user/' + _this.userId + '/website']);
            });
        }
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (data) {
                _this.websites = data;
            });
        });
    };
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\ndiv>p {\n  margin-bottom: 18px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1jaG9vc2VyL3dpZGdldC1jaG9vc2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1jaG9vc2VyL3dpZGdldC1jaG9vc2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5kaXY+cCB7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n          <span class=\"nav-black-icon fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"navbar-black-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">\n          Choose Widget\n        </a>\n      </p>\n    </div>\n  </nav>\n</header>\n<main>\n<div class=\"container container-padding\">\n  <ul class=\"list-group list-borderless\">\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/header\">Header</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">Label</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/html\">HTML</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/text\">Text Input</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">Link</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">Button</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/image\">Image</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/youtube\">Youtube</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">Data Table</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">Repeater</a>\n    </li>\n  </ul>\n  <a class=\"btn btn-danger btn-block\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">Cancel</a>\n</div>\n</main>\n<footer>\n  <nav class=\"navbar fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\"></p>\n      <a class=\"nav-black-icon\" routerLink=\"/user/{{userId}}\">\n        <span class=\"fas fa-user fontawsome-icon bottom-right\"></span>\n      </a>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.ts ***!
  \*************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.pageId = params.pageId;
        });
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGVyL3dpZGdldC1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/\" class=\"navbar-link\">\n          <span class=\"nav-black-icon fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"navbar-black-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}/header\">\n          Edit Widget\n        </a>\n      </p>\n      <a (click)=\"widgetOperation()\" class=\"navbar-link navbar-text float-right check-icon\"><span class=\"nav-black-icon fas fa-check fontawsome_icon top-right\">\n        </span>\n      </a>\n    </div>\n  </nav>\n</header>\n<main>\n<div class=\"container\">\n    <div class=\"form-group text-padding-top\">\n      <label for=\"widget name\" class=\"text-bold\">Text</label>\n      <input id=\"widget name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"widget.text\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"widget-size\" class=\"text-bold\">Size</label>\n      <input id=\"widget-size\" type=\"number\" class=\"form-control\" placeholder=\"Size\" [(ngModel)]=\"widget.size\"/>\n    </div>\n  <a (click)=\"deleteWidget()\" class=\"check btn btn-danger btn-block\">Delete</a>\n  <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/\" class=\"btn btn-success btn-block\">Cancel</a>\n</div>\n</main>\n\n\n<footer>\n  <nav class=\"navbar fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\"></p>\n      <a class=\"nav-black-icon\" routerLink=\"/user/{{userId}}\">\n        <span class=\"fas fa-user fontawsome-icon bottom-right\"></span>\n      </a>\n    </div>\n  </nav>\n</footer>\n\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");





var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('HEADER', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.pageId = params.pageId;
            _this.widgetId = params.widgetId;
            if (_this.widgetId) {
                _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (data) {
                    _this.widget = data;
                    _this.isNewWidget = false;
                });
            }
            else {
                _this.isNewWidget = true;
            }
        });
    };
    WidgetHeaderComponent.prototype.widgetOperation = function () {
        if (this.isNewWidget) {
            this.createNewWidget();
        }
        else {
            this.updateCurWidget();
        }
    };
    WidgetHeaderComponent.prototype.createNewWidget = function () {
        var _this = this;
        if (!this.widget.text || !this.widget.size) {
            alert('Please enter text and size.');
        }
        else {
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (data) {
                _this.widget = data;
                _this.backToWidgets();
            });
        }
    };
    WidgetHeaderComponent.prototype.updateCurWidget = function () {
        var _this = this;
        if (!this.widget.text || !this.widget.size) {
            alert('Please enter text and size.');
        }
        else {
            this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
                _this.widget = data;
                _this.backToWidgets();
            });
        }
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function () {
            _this.backToWidgets();
        });
    };
    WidgetHeaderComponent.prototype.backToWidgets = function () {
        this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
    };
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaHRtbC93aWRnZXQtaHRtbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/\" class=\"navbar-link\">\n          <span class=\"nav-black-icon fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"navbar-black-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}/html\">\n          Edit Widget\n        </a>\n      </p>\n      <a (click)=\"widgetOperation()\" class=\"navbar-link navbar-text float-right check-icon\">\n        <span class=\"nav-black-icon fas fa-check fontawsome_icon top-right\">\n        </span>\n      </a>\n    </div>\n  </nav>\n</header>\n<main>\n  <div class=\"container\">\n    <div class=\"form-group text-padding-top\">\n      <label for=\"html-name\" class=\"text-bold\">Name</label>\n      <input id=\"html-name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"widget.name\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"text\" class=\"text-bold\">Text</label>\n      <quill-editor id=\"text\" [(ngModel)]=\"widget.text\"></quill-editor>\n    </div>\n    <a *ngIf=\"!isNewWidget\" class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>\n    <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/\" class=\"btn btn-success btn-block\">Cancel</a>\n\n  </div>\n</main>\n<footer>\n  <nav class=\"navbar fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\"></p>\n      <a class=\"nav-black-icon\" routerLink=\"/user/{{userId}}\">\n        <span class=\"fas fa-user fontawsome-icon bottom-right\"></span>\n      </a>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WidgetHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtmlComponent", function() { return WidgetHtmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('HTML', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.pageId = params.pageId;
            _this.widgetId = params.widgetId;
            if (_this.widgetId) {
                _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (data) {
                    _this.widget = data;
                    _this.isNewWidget = false;
                });
            }
            else {
                _this.isNewWidget = true;
            }
        });
    };
    WidgetHtmlComponent.prototype.widgetOperation = function () {
        if (this.isNewWidget) {
            this.createNewWidget();
        }
        else {
            this.updateCurWidget();
        }
    };
    WidgetHtmlComponent.prototype.createNewWidget = function () {
        var _this = this;
        if (!this.widget.name || !this.widget.text) {
            alert('Please enter the html information.');
        }
        else {
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (data) {
                _this.widget = data;
                _this.backToWidgets();
            });
        }
    };
    WidgetHtmlComponent.prototype.updateCurWidget = function () {
        var _this = this;
        if (!this.widget.name || !this.widget.text) {
            alert('Please enter the html information.');
        }
        else {
            this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
                _this.widget = data;
                _this.backToWidgets();
            });
        }
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function () {
            _this.backToWidgets();
        });
    };
    WidgetHtmlComponent.prototype.backToWidgets = function () {
        this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
    };
    WidgetHtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-html',
            template: __webpack_require__(/*! ./widget-html.component.html */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__(/*! ./widget-html.component.css */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2UvZmxpY2tyLWltYWdlLXNlYXJjaC9mbGlja3ItaW1hZ2Utc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}\" class=\"navbar-link\">\n          <span class=\"nav-black-icon fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"navbar-black-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}/image/flickr\">\n          Search Flickr\n        </a>\n      </p>\n    </div>\n  </nav>\n</header>\n\n<main>\n  <div class=\"container\">\n    <div class=\"input-group\">\n  <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\"/>\n  <span class=\"input-group\">\n    <a (click)=\"searchPhotos()\" class=\"btn btn-default float-right\" type=\"button\">\n     <i class=\"fas fa-search\"></i>\n    </a>\n  </span>\n  </div>\n    <div class=\"row\">\n      <div *ngFor = \"let pic of photos\"\n           class=\"col-xs-4\">\n        <img (click)=\"selectPhoto(pic)\"\n                width=\"100%\"\n                [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n        <p></p>\n      </div>\n    </div>\n\n  </div>\n</main>\n\n<footer>\n  <nav class=\"navbar fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\"></p>\n      <a class=\"nav-black-icon\" routerLink=\"/user/{{userId}}\">\n        <span class=\"fas fa-user fontawsome-icon bottom-right\"></span>\n      </a>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: FlickrImageSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrImageSearchComponent", function() { return FlickrImageSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");






var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(router, filckrService, activatedROute, widgetService) {
        this.router = router;
        this.filckrService = filckrService;
        this.activatedROute = activatedROute;
        this.widgetService = widgetService;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedROute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.pageId = params.pageId;
            _this.widgetId = params.widgetId;
            _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (data) {
                _this.widget = data;
            });
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        if (!this.searchText) {
            alert('Please input the search infor');
        }
        else {
            this.filckrService.searchPhotos(this.searchText).subscribe(function (data) {
                var val = data;
                val = val.replace('jsonFlickrApi(', '');
                val = val.substring(0, val.length - 1);
                val = JSON.parse(val);
                _this.photos = val.photos.photo;
            });
        }
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        console.log('flickr: ' + url);
        var widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"](this.widget.type, undefined, this.pageId, this.widget.size, this.widget.text, this.widget.width, url, undefined, undefined, undefined);
        widget._id = this.widget._id;
        this.widgetService
            .updateWidget(this.widgetId, widget)
            .subscribe(function (data) {
            if (data) {
                _this.router.navigate(['/user/' + _this.userId + '/website/' + _this.websiteId + '/page/' +
                        _this.pageId + '/widget']);
            }
            else {
                _this.errors = 'failed!';
            }
        });
    };
    FlickrImageSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__(/*! ./flickr-image-search.component.html */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__(/*! ./flickr-image-search.component.css */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_2__["FlickrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__["WidgetService"]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS93aWRnZXQtaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header xmlns=\"http://www.w3.org/1999/html\">\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/\" class=\"navbar-link\">\n          <span class=\"nav-black-icon fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"navbar-black-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}/image\">\n          Edit Widget\n        </a>\n      </p>\n      <a (click)=\"widgetOperation()\" class=\"navbar-link navbar-text float-right check-icon\"><span class=\"nav-black-icon fas fa-check fontawsome_icon top-right\">\n        </span>\n      </a>\n    </div>\n  </nav>\n</header>\n<main>\n<div class=\"container\">\n    <div class=\"form-group\">\n      <label for=\"image-text\" class=\"text-bold\">Title</label>\n      <input id=\"image-text\" type=\"text\" class=\"form-control\" placeholder=\"Text\" [(ngModel)]=\"widget.text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-url\" class=\"text-bold\">URL</label>\n      <input id=\"image-url\" type=\"url\" class=\"form-control\" placeholder=\"URL\" [(ngModel)]=\"widget.url\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\" class=\"text-bold\">Width</label>\n      <input id=\"image-width\" type=\"text\" class=\"form-control\" placeholder=\"100%\" [(ngModel)]=\"widget.width\"/>\n    </div>\n\n    <input style=\"display: none\" type=\"file\" class=\"form-control\" (change)=\"onFileChanged($event)\" #fileInput/>\n  <button *ngIf=\"!isNewWidget\" (click)=\"fileInput.click()\" class=\"btn btn-block btn-primary\">Select Image</button>\n    <button *ngIf=\"!isNewWidget\" (click)=\"upload()\" class=\"btn btn-block btn-primary\">Upload</button>\n\n  <a *ngIf=\"!isNewWidget\" class=\"btn btn-primary btn-block \"\n     routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}/image/flickr\" >Choose From Flickr</a>\n\n  <a *ngIf =\"!isNewWidget\" class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>\n  <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/\" class=\"btn btn-success btn-block\">Cancel</a>\n\n</div>\n</main>\n<footer>\n  <nav class=\"navbar fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\"></p>\n      <a class=\"nav-black-icon\" routerLink=\"/user/{{userId}}\">\n        <span class=\"fas fa-user fontawsome-icon bottom-right\"></span>\n      </a>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");






var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('IMAGE', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.pageId = params.pageId;
            _this.widgetId = params.widgetId;
            if (_this.widgetId) {
                _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (data) {
                    _this.widget = data;
                    _this.isNewWidget = false;
                });
            }
            else {
                _this.isNewWidget = true;
            }
        });
    };
    WidgetImageComponent.prototype.widgetOperation = function () {
        if (this.isNewWidget) {
            this.createNewWidget();
        }
        else {
            this.updateCurWidget();
        }
    };
    WidgetImageComponent.prototype.createNewWidget = function () {
        var _this = this;
        if (!this.widget.text || !this.widget.width || !this.widget.url) {
            alert('Please enter the image information.');
        }
        else {
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (data) {
                _this.widget = data;
                _this.backToWidgets();
            });
        }
    };
    WidgetImageComponent.prototype.updateCurWidget = function () {
        var _this = this;
        if (!this.widget.text || !this.widget.width || !this.widget.url) {
            alert('Please enter the image information.');
        }
        else {
            this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
                _this.widget = data;
                _this.backToWidgets();
            });
        }
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function () {
            _this.backToWidgets();
        });
    };
    WidgetImageComponent.prototype.backToWidgets = function () {
        this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
    };
    WidgetImageComponent.prototype.upload = function () {
        var _this = this;
        if (this.file === undefined) {
            alert('no file');
        }
        else {
            var data = new FormData();
            data.append('myFile', this.file);
            data.append('widgetId', this.widgetId);
            this.widgetService.uploadImage(data).subscribe(function (mes) {
                _this.backToWidgets();
                if (mes.message === 'file uploaded') {
                    alert('File Uploaded');
                }
                else {
                    alert('No file uploaded');
                }
            });
        }
    };
    WidgetImageComponent.prototype.onFileChanged = function (event) {
        this.file = event.target.files[0];
    };
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtdGV4dC93aWRnZXQtdGV4dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/\" class=\"navbar-link\">\n          <span class=\"nav-black-icon fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"navbar-black-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}/html\">\n          Edit Widget\n        </a>\n      </p>\n      <a (click)=\"widgetOperation()\" class=\"navbar-link navbar-text float-right check-icon\">\n        <span class=\"nav-black-icon fas fa-check fontawsome_icon top-right\">\n        </span>\n      </a>\n    </div>\n  </nav>\n</header>\n<main>\n  <div class=\"container\">\n    <div class=\"form-group text-padding-top\">\n      <label for=\"text-body\" class=\"text-bold\">Text</label>\n      <input id=\"text-body\" type=\"text\" class=\"form-control\" placeholder=\"text\" [(ngModel)]=\"widget.text\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"rows\" class=\"text-bold\">Rows</label>\n      <input id=\"rows\" type=\"number\" [(ngModel)]=\"widget.rows\" placeholder=\"number\" class=\"form-control\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\" class=\"text-bold\">Name</label>\n      <input id=\"name\" [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"placeholder\" class=\"text-bold\">Placeholder</label>\n      <input [(ngModel)]=\"widget.placeholder\" id=\"placeholder\" class=\"form-control\" placeholder=\"placeholder\" required/>\n    </div>\n\n      <div class=\"input-group\">\n        <span>\n          <input [(ngModel)]=\"widget.formatted\" type=\"checkbox\"/><span class=\"text-bold\">Formatted</span>\n        </span>\n      </div>\n\n\n    <a *ngIf=\"!isNewWidget\" class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>\n    <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/\" class=\"btn btn-success btn-block\">Cancel</a>\n\n  </div>\n</main>\n<footer>\n  <nav class=\"navbar fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\"></p>\n      <a class=\"nav-black-icon\" routerLink=\"/user/{{userId}}\">\n        <span class=\"fas fa-user fontawsome-icon bottom-right\"></span>\n      </a>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WidgetTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetTextComponent", function() { return WidgetTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('TEXT', undefined, undefined, undefined, undefined, undefined, undefined, undefined, false, '');
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.pageId = params.pageId;
            _this.widgetId = params.widgetId;
            if (_this.widgetId) {
                _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (data) {
                    _this.widget = data;
                    _this.isNewWidget = false;
                });
            }
            else {
                _this.isNewWidget = true;
            }
        });
    };
    WidgetTextComponent.prototype.widgetOperation = function () {
        if (this.isNewWidget) {
            this.createNewWidget();
        }
        else {
            this.updateCurWidget();
        }
    };
    WidgetTextComponent.prototype.createNewWidget = function () {
        var _this = this;
        if (!this.widget.name || !this.widget.text || !this.widget.rows) {
            alert('Please enter the your text information.');
        }
        else {
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (data) {
                _this.widget = data;
                _this.backToWidgets();
            });
        }
    };
    WidgetTextComponent.prototype.updateCurWidget = function () {
        var _this = this;
        if (!this.widget.name || !this.widget.text || !this.widget.rows) {
            alert('Please enter the your text information.');
        }
        else {
            this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
                _this.widget = data;
                _this.backToWidgets();
            });
        }
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function () {
            _this.backToWidgets();
        });
    };
    WidgetTextComponent.prototype.backToWidgets = function () {
        this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
    };
    WidgetTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-text',
            template: __webpack_require__(/*! ./widget-text.component.html */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__(/*! ./widget-text.component.css */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQteW91dHViZS93aWRnZXQteW91dHViZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/\" class=\"navbar-link\">\n          <span class=\"nav-black-icon fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"navbar-black-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}/youtube\">\n          Edit Widget\n        </a>\n      </p>\n      <a (click)=\"widgetOperation()\" class=\"navbar-link navbar-text float-right check-icon\">\n        <span class=\"nav-black-icon fas fa-check fontawsome_icon top-right\">\n        </span>\n      </a>\n    </div>\n  </nav>\n</header>\n<main>\n<div class=\"container\">\n    <div class=\"form-group text-padding-top\">\n      <label for=\"youtube-name\" class=\"text-bold\">Text</label>\n      <input id=\"youtube-name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"widget.text\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-url\" class=\"text-bold\">URL</label>\n      <input id=\"youtube-url\" type=\"url\" class=\"form-control\" placeholder=\"URL\" [(ngModel)]=\"widget.url\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\" class=\"text-bold\">Width</label>\n      <input id=\"youtube-width\" type=\"text\" class=\"form-control\" placeholder=\"100%\" [(ngModel)]=\"widget.width\"/>\n    </div>\n  <a *ngIf=\"!isNewWidget\" class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>\n  <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/\" class=\"btn btn-success btn-block\">Cancel</a>\n\n</div>\n</main>\n<footer>\n  <nav class=\"navbar fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\"></p>\n      <a class=\"nav-black-icon\" routerLink=\"/user/{{userId}}\">\n        <span class=\"fas fa-user fontawsome-icon bottom-right\"></span>\n      </a>\n    </div>\n  </nav>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");





var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('YOUTUBE', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.pageId = params.pageId;
            _this.widgetId = params.widgetId;
            if (_this.widgetId) {
                _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (data) {
                    _this.widget = data;
                    _this.isNewWidget = false;
                });
            }
            else {
                _this.isNewWidget = true;
            }
        });
    };
    WidgetYoutubeComponent.prototype.widgetOperation = function () {
        if (this.isNewWidget) {
            this.createNewWidget();
        }
        else {
            this.updateCurWidget();
        }
    };
    WidgetYoutubeComponent.prototype.createNewWidget = function () {
        var _this = this;
        if (!this.widget.text || !this.widget.width || !this.widget.url) {
            alert('Please enter the youtube information.');
        }
        else {
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (data) {
                _this.widget = data;
                _this.backToWidgets();
            });
        }
    };
    WidgetYoutubeComponent.prototype.updateCurWidget = function () {
        var _this = this;
        if (!this.widget.text || !this.widget.width || !this.widget.url) {
            alert('Please enter the youtube information.');
        }
        else {
            this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(function (data) {
                _this.widget = data;
                _this.backToWidgets();
            });
        }
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function () {
            _this.backToWidgets();
        });
    };
    WidgetYoutubeComponent.prototype.backToWidgets = function () {
        this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
    };
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n\n.youtube-widget iframe {\n  position: absolute;;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC92aWV3cy93aWRnZXQvd2lkZ2V0LWxpc3Qvd2lkZ2V0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi55b3V0dWJlLXdpZGdldCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcbiAgaGVpZ2h0OiAwO1xufVxuXG4ueW91dHViZS13aWRnZXQgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlOztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text float-left\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link\">\n          <span class=\"nav-black-icon fas fa-chevron-left fontawsome_icon top-left\"></span>\n        </a>\n        <a class=\"navbar-black-brand\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n          Widgets\n        </a>\n      </p>\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\" class=\"navbar-link navbar-text float-right\">\n        <span class=\"nav-black-icon fas fa-plus fontawsome-icon top-right\"></span>\n      </a>\n    </div>\n  </nav>\n</header>\n\n<main>\n<div class=\"container\">\n  <div appSortable (newIndexes)=\"reorderWidgets($event)\">\n    <div *ngFor=\"let widget of widgets\" class=\"text-padding-top\">\n      <div [ngSwitch]=\"widget.type\">\n        <div *ngSwitchCase=\"'HEADER'\">\n          <div class=\"text-padding-top\">\n              <a class=\"float-right\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}/header\">\n                <span class=\"fas fa-cog fontawsome_icon\"></span>\n              </a>\n            <h1 [style.font-size]=\"widget.size+ 'px'\">\n              {{widget.text}}\n            </h1>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'HTML'\">\n          <div class=\"text-padding-top\">\n            <div class=\"text-padding-top\">\n              <a class=\"float-right\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}/html\">\n                <span class=\"fas fa-cog fontawsome_icon\"></span>\n              </a>\n            <div [innerHTML]=\"widget.text\"></div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n            <div class=\"text-padding-top\">\n              <div class=\"text-padding-top\">\n                <a class=\"float-right\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}/image\">\n                  <span class=\"fas fa-cog fontawsome_icon\"></span>\n                </a>\n              </div>\n              <img class=\"img-fluid img-rounded widget-images\" [src]=\"widget.url\" [style.width]=\"widget.width\">\n            </div>\n        </div>\n\n        <div *ngSwitchCase=\"'TEXT'\">\n          <div class=\"text-padding-top\">\n            <div class=\"text-padding-top\">\n              <a class=\"float-right\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}/text\">\n                <span class=\"fas fa-cog fontawsome_icon\"></span>\n              </a>\n              <div *ngIf=\"widget.formatted\"> <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor> </div>\n              <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\" placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n              <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\" rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\" class=\"form-control\">{{widget.text}}</textarea>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\" class=\"youtube-widget\">\n          <div class=\"text-padding-top\">\n            <div class=\"embed-responsive embed-responsive-16by9 text-padding-top\">\n              <iframe width=\"640\" height=\"360\" [src]=\"checkUrl(widget.url)\" frameborder=\"0\" allowfullscreen [style.width]=\"widget.width\">\n              </iframe>\n              <a class=\"float-right\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}/youtube\">\n                <span class=\"fas fa-cog fontawsome_icon\"></span>\n              </a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n</div>\n</div>\n</main>\n\n<footer>\n  <nav class=\"navbar fixed-bottom\">\n    <div class=\"container-fluid float-left\">\n      <div class=\"float-left\">\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link navbar-text text-white\">\n          <span class=\"nav-black-icon fas fa-play fontawsome_icon bottom-left\">\n          </span>\n        </a>\n        <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link navbar-text text-white\">\n          <span class=\"nav-black-icon fas fa-eye fontawsome_icon bottom-left\">\n          </span>\n        </a>\n      </div>\n      <div class=\"float-right\">\n        <a routerLink=\"/user/{{userId}}\" class=\"navbar-link navbar-text text-white\">\n          <span class=\"nav-black-icon fas fa-user fontawsome_icon bottom-right\">\n          </span>\n        </a>\n      </div>\n    </div>\n  </nav>\n</footer>\n\n\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");







var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(activatedRoute, widgetService, router, domSanitizer, pageService) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.pageService = pageService;
        this.widgets = [];
        this.page = new _models_page_model_client__WEBPACK_IMPORTED_MODULE_5__["Page"](undefined, undefined, undefined);
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.pageId = params.pageId;
            _this.pageService.findPageById(_this.pageId).subscribe(function (page) {
                _this.page = page;
                _this.widgets = page.widgets;
                console.log(_this.widgets);
            });
        });
    };
    /*this.widgetService.findWidgetsByPageId(this.pageId).subscribe((data) => {
      console.log(data);
      this.widgets = data;
    });
  });
}*/
    WidgetListComponent.prototype.checkUrl = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId).subscribe(function (data) {
        });
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_6__["PageService"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    /*baseUrl: 'http://localhost:3200'*/
    baseUrl: 'https://webdev-ziyan.herokuapp.com'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hzy/MyWork/myWeb5610/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map