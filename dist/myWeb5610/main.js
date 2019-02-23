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
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:wigdetId/youtube', component: _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_15__["WidgetYoutubeComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:wigdetId/header', component: _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_16__["WidgetHeaderComponent"] },
    { path: 'user/:userId/website/:websiteId/page/:pageId/widget/:wigdetId/image', component: _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_17__["WidgetImageComponent"] }
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_13__["WebsiteListComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_14__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_15__["WebsiteEditComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_16__["PageListComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_17__["PageEditComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_18__["PageNewComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_19__["WidgetListComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_20__["WidgetChooserComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_22__["WidgetHeaderComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_23__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_24__["WidgetYoutubeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_9__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_10__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_11__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_12__["WidgetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
    function Page(pageId, name, websiteId, description) {
        this.pageId = pageId;
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
    function User(userId, username, password, firstName, lastName) {
        this.userId = userId;
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
    function Website(websiteId, name, developerId, description) {
        this.websiteId = websiteId;
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
    function Widget(widgetId, type, pageId, size, text, width, url) {
        if (size === void 0) { size = 1; }
        if (text === void 0) { text = 'text'; }
        if (width === void 0) { width = '100%'; }
        if (url === void 0) { url = 'url'; }
        this.widgetId = widgetId;
        this.widgetType = type;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.url = url;
        this.width = width;
    }
    return Widget;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageService = /** @class */ (function () {
    function PageService() {
        this.pages = [
            { pageId: '345', name: 'Post 1', websiteId: '890', description: 'Lorem' },
            { pageId: '456', name: 'Post 2', websiteId: '890', description: 'Lorem' },
            { pageId: '567', name: 'Post 3', websiteId: '345', description: 'Lorem' },
            { pageId: '678', name: 'Post 4', websiteId: '456', description: 'Lorem' },
            { pageId: '789', name: 'Post 5', websiteId: '567', description: 'Lorem' },
            { pageId: '890', name: 'Post 6', websiteId: '678', description: 'Lorem' },
            { pageId: '901', name: 'Post 6', websiteId: '789', description: 'Lorem' }
        ];
        this.api = {
            createPage: this.createPage,
            findPagesByWebsiteId: this.findPagesByWebsiteId,
            findPageById: this.findPageById,
            updatePage: this.updatePage,
            deletePage: this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page.pageId = this.randomID();
        page.websiteId = websiteId;
        this.pages.push(page);
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        return this.pages.filter(function (page) {
            return page.websiteId === websiteId;
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.pages.find(function (page) {
            return page.pageId === pageId;
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var i in this.pages) {
            if (this.pages[i].pageId === pageId) {
                this.pages[i].name = page.name;
                this.pages[i].description = page.description;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var i in this.pages) {
            if (this.pages[i].pageId === pageId) {
                var j = +i;
                this.pages.splice(j, 1);
                break;
            }
        }
    };
    PageService.prototype.randomID = function () {
        var num = Math.floor(Math.random() * 1000) + 1;
        return num.toString();
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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


var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            { userId: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder' },
            { userId: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley' },
            { userId: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' },
            { userId: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi' }
        ];
        this.api = {
            createUser: this.createUser,
            findUserById: this.findUserById,
            findUserByUsername: this.findUserByUsername,
            findUserByCredentials: this.findUserByCredentials,
            updateUser: this.updateUser,
            deleteUser: this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        user.userId = this.randomID();
        this.users.push(user);
    };
    UserService.prototype.findUserById = function (userId) {
        return this.users.find(function (user) {
            return user.userId === userId;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.users.find(function (user) {
            return user.username === username;
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this.users.find(function (user) {
            return user.username === username && user.password === password;
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var i in this.users) {
            if (this.users[i].userId === userId) {
                this.users[i].firstName = user.firstName;
                this.users[i].lastName = user.lastName;
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var i in this.users) {
            if (this.users[i].userId === userId) {
                var j = +i;
                this.users.splice(j, 1);
                break;
            }
        }
    };
    UserService.prototype.randomID = function () {
        var num = Math.floor(Math.random() * 1000) + 1;
        console.log(this.users);
        return num.toString();
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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


var WebsiteService = /** @class */ (function () {
    function WebsiteService() {
        this.websites = [
            { websiteId: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },
            { websiteId: '234', name: 'Tweeter', developerId: '456', description: 'Lorem' },
            { websiteId: '456', name: 'Gizmodo', developerId: '234', description: 'Lorem' },
            { websiteId: '890', name: 'Go', developerId: '123', description: 'Lorem' },
            { websiteId: '567', name: 'Tic Tac Toe', developerId: '345', description: 'Lorem' },
            { websiteId: '678', name: 'Checkers', developerId: '123', description: 'Lorem' },
            { websiteId: '789', name: 'Chess', developerId: '234', description: 'Lorem' }
        ];
        this.api = {
            createWebsite: this.createWebsite,
            findWebsiteByUser: this.findWebsitesByUser,
            findWebsiteById: this.findWebsiteById,
            updateWebsite: this.updateWebsite,
            deleteWebsite: this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website.websiteId = this.randomID();
        website.developerId = userId;
        this.websites.push(website);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.websites.filter(function (website) {
            return website.developerId === userId;
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this.websites.find(function (website) {
            return website.websiteId === websiteId;
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var i in this.websites) {
            if (this.websites[i].websiteId === websiteId) {
                this.websites[i].name = website.name;
                this.websites[i].description = website.description;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var i in this.websites) {
            if (this.websites[i].websiteId === websiteId) {
                var j = +i;
                this.websites.splice(j, 1);
                break;
            }
        }
    };
    WebsiteService.prototype.randomID = function () {
        var num = Math.floor(Math.random() * 1000) + 1;
        return num.toString();
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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


var WidgetService = /** @class */ (function () {
    function WidgetService() {
        this.widgets = [
            { widgetId: '123', widgetType: 'HEADER', pageId: '345', size: 20,
                text: 'London terror attack: Police fired \'unprecedented\' number of rounds', width: undefined, url: undefined },
            { widgetId: '234', widgetType: 'IMAGE', pageId: '345', size: undefined, text: undefined, width: '100%',
                url: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg' },
            { widgetId: '345', widgetType: 'YOUTUBE', pageId: '345', size: undefined, text: undefined, width: '100%',
                url: 'https://www.youtube.com/embed/APexI9Zb6iE' },
        ];
        this.api = {
            createWidget: this.createWidget,
            findWidgetsByPageId: this.findWidgetsByPageId,
            findWidgetById: this.findWidgetById,
            updateWidget: this.updateWidget,
            deleteWidget: this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget.widgetId = this.randomID();
        widget.pageId = pageId;
        this.widgets.push(widget);
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this.widgets.filter(function (widget) {
            return widget.pageId === pageId;
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.widgets.find(function (widget) {
            return widget.widgetId === widgetId;
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var i in this.widgets) {
            if (this.widgets[i].widgetId === widgetId) {
                switch (widget.widgetType) {
                    case 'HEADER':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].size = widget.size;
                        return true;
                    case 'IMAGE':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].url = widget.url;
                        this.widgets[i].width = widget.width;
                        return true;
                    case 'YOUTUBE':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].url = widget.url;
                        this.widgets[i].width = widget.width;
                        return true;
                }
            }
        }
        return false;
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var i in this.widgets) {
            if (this.widgets[i].widgetId === widgetId) {
                var j = +i;
                this.widgets.splice(j, 1);
                break;
            }
        }
    };
    WidgetService.prototype.randomID = function () {
        var num = Math.floor(Math.random() * 1000) + 1;
        return num.toString();
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
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

module.exports = "<div>\n  <a routerLink=\"/login\">Login</a><hr>\n  <a routerLink=\"/register\">Register</a><hr>\n</div>\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1lZGl0L3BhZ2UtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"d-lg-none d-inline margin-right\">\n    <a (click)=\"backToPages()\" class=\"check\">\n      <span class=\"fas fa-chevron-left color-black\"></span></a>\n  </div>\n  <div class=\"row row-in-navbar\">\n    <div class=\"d-none d-lg-block col-4 navbar-item navbar-left\">\n      <a (click)=\"backToPages()\" class=\"check\">\n        <i class=\"fas fa-chevron-left fontawsome_icon color-black\"></i></a>\n      <a class=\"navbar-text navbar-brand text-bold text-padding-left color-black\" href=\"#\">\n        Pages</a>\n    </div>\n    <div class=\"col-8\">\n      <a class=\"navbar-text color-black navbar-brand text-bold text-padding-left\" href=\"#\">\n        Edit Page</a>\n      <a class=\"check\" (click)=\"updateCurPage()\">\n        <span class=\"color-black fas fa-check fontawsome-icon float-right text-padding-top\"></span></a>\n    </div>\n  </div>\n\n</nav>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"d-none d-lg-block col-4\">\n      <ul class=\"list-group list-borderless\">\n        <li class=\"list-group-item list-borderless\" *ngFor=\"let page of pages\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page.pageId}}/widget\">{{page.name}}</a>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page.pageId}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-8\">\n        <div class=\"text-padding-top\">\n          <label for=\"page-name\" class=\"text-bold\">Name</label>\n          <input [(ngModel)]=\"name\" id=\"page-name\" type=\"text\" class=\"form-control\" placeholder=\"Page Name\"/>\n        </div>\n        <div class=\"text-padding-top\">\n          <label for=\"page-title\" class=\"text-bold\">Title</label>\n          <input [(ngModel)]=\"description\" id=\"page-title\" type=\"text\" class=\"form-control\" placeholder=\"Page Title\">\n        </div>\n      <a (click)=\"deletePage()\" class=\"btn btn-danger btn-block margin-top\">Delete</a>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-light bg-light fixed-bottom\">\n  <div class=\"float-left\"> </div>\n  <div class=\"float-right\">\n    <a (click)=\"backToProfile()\"><span class=\"fas fa-user fontawsome_icon color-black\"></span></a>\n  </div>\n\n</nav>\n"

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
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.pageId = params.pageId;
        });
        this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
        var curPage = this.pageService.findPageById(this.pageId);
        this.name = curPage.name;
        this.description = curPage.description;
    };
    PageEditComponent.prototype.updateCurPage = function () {
        this.pageService.updatePage(this.pageId, new _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__["Page"](this.pageId, this.name, this.websiteId, this.description));
        this.backToPages();
    };
    PageEditComponent.prototype.backToPages = function () {
        this.router.navigate(['user/' + this.userId + '/website']);
    };
    PageEditComponent.prototype.backToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    PageEditComponent.prototype.deletePage = function () {
        this.pageService.deletePage(this.pageId);
        this.backToPages();
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-light bg-light fixed-top\">\n  <div class=\"float-left\">\n    <a (click)=\"backToWebsites()\" class=\"check\"><span class=\"color-black fas fa-chevron-left fontawsome_icon\"></span></a>\n    <a class=\"navbar-text navbar-brand text-bold text-padding-left\" href=\"#\">Pages</a>\n  </div>\n  <div class=\"float-right\">\n    <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/new\"><span class=\"color-black fas fa-plus fontawsome_icon\"></span></a>\n  </div>\n\n</nav>\n<div class=\"container\">\n  <ul class=\"list-group list-borderless\">\n    <li class=\"list-group-item list-borderless\" *ngFor=\"let page of pages\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page.pageId}}/widget\">{{page.name}}</a>\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page.pageId}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n    </li>\n  </ul>\n</div>\n<nav class=\"navbar navbar-default navbar-light bg-light fixed-bottom\">\n  <div class=\"float-left\"> </div>\n  <div class=\"float-right\">\n    <a href=\"profile.html\"><span class=\"fas fa-user fontawsome_icon color-black\"></span></a>\n  </div>\n\n</nav>\n\n"

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
        });
        this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
    };
    PageListComponent.prototype.backToProfile = function () {
        this.router.navigate(['user', this.userId]);
    };
    PageListComponent.prototype.backToWebsites = function () {
        this.router.navigate(['user/' + this.userId + '/website']);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"d-lg-none d-inline margin-right\">\n    <a (click)=\"backToPages()\" class=\"check\">\n      <span class=\"fas fa-chevron-left color-black\"></span></a>\n  </div>\n  <div class=\"row row-in-navbar\">\n    <div class=\"d-none d-lg-block col-4 navbar-item navbar-left\">\n      <a (click)=\"backToPages()\" class=\"check\">\n        <i class=\"fas fa-chevron-left fontawsome_icon color-black\"></i></a>\n      <a class=\"navbar-text navbar-brand text-bold text-padding-left color-black\" href=\"#\">\n        Pages</a>\n    </div>\n    <div class=\"col-8\">\n      <a class=\"navbar-text color-black navbar-brand text-bold text-padding-left\" href=\"#\">\n        New Page</a>\n      <a (click)=\"createNewPage()\" class=\"check\">\n        <span class=\"color-black fas fa-check fontawsome-icon float-right text-padding-top\"></span></a>\n    </div>\n  </div>\n\n</nav>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"d-none d-lg-block col-4\">\n      <ul class=\"list-group list-borderless\">\n        <li class=\"list-group-item list-borderless\" *ngFor=\"let page of pages\">\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page.pageId}}/widget\">{{page.name}}</a>\n          <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{page.pageId}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-8\">\n        <div class=\"text-padding-top\">\n          <label for=\"page-name\" class=\"text-bold\">Name</label>\n          <input id=\"page-name\" type=\"text\" class=\"form-control\" placeholder=\"Page Name\" [(ngModel)]=\"name\"/>\n        </div>\n        <div class=\"text-padding-top\">\n          <label for=\"page-title\" class=\"text-bold\">Title</label>\n          <input id=\"page-title\" type=\"text\" class=\"form-control\" placeholder=\"Page Title\" [(ngModel)]=\"title\">\n        </div>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-light bg-light fixed-bottom\">\n  <div class=\"float-left\"> </div>\n  <div class=\"float-right\">\n    <a (click)=\"backToProfile()\" class=\"check\"><span class=\"fas fa-user fontawsome_icon color-black\"></span></a>\n  </div>\n\n</nav>\n"

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
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
        });
        this.pages = this.pageService.findPagesByWebsiteId(this.websiteId);
    };
    PageNewComponent.prototype.createNewPage = function () {
        if (!this.name || !this.description) {
            alert('Please enter the name or description');
        }
        else {
            this.pageService.createPage(this.websiteId, new _models_page_model_client__WEBPACK_IMPORTED_MODULE_3__["Page"](undefined, this.name, undefined, this.description));
            this.backToPages();
        }
    };
    PageNewComponent.prototype.backToPages = function () {
        this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page']);
    };
    PageNewComponent.prototype.backToProfile = function () {
        this.router.navigate(['user/', this.userId]);
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

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>\n    {{title}}\n  </h1>\n  <div>\n    <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"username\" name=\"username\"\n             ngModel required #username=\"ngModel\"/>\n      <input type=\"password\" class=\"form-control\" placeholder=\"password\" name=\"password\"\n             ngModel required #password=\"ngModel\"/>\n      <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n      <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n    </form>\n  </div>\n</div>\n\n"

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
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByCredentials(this.username, this.password);
        if (user) {
            alert(this.username);
            this.router.navigate(['user', user.userId]);
        }
        else {
            this.errorFlag = true;
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

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-light\">\n  <div class=\"navbar-text color-black navbar-brand text-bold\">\n    {{user.username}}'s {{title}}\n  </div>\n  <div  (click)=\"updateUser()\" class=\"check float-right color-white list-borderless\">\n    <span class=\"fas fa-check fontawsome_icon\"></span>\n  </div>\n</nav>\n<div class=\"container container-padding\">\n    <div class=\"form-group\">\n      <label for=\"username\"><strong>Username</strong></label>\n      <input id=\"username\" class=\"form-control\" type=\"text\" placeholder=\"change your username\" [(ngModel)]=\"user.username\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\"><strong>Password</strong></label>\n      <input id=\"password\" class=\"form-control\" type=\"password\" placeholder=\"change your password\" [(ngModel)]=\"user.password\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"first-name\"><strong>First Name</strong></label>\n      <input id=\"first-name\" class=\"form-control\" type=\"text\" placeholder=\"change your first name\" [(ngModel)]=\"user.firstName\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"last-name\"><strong>Last Name</strong></label>\n      <input id=\"last-name\" class=\"form-control\" type=\"text\" placeholder=\"change your last name\" [(ngModel)]=\"user.lastName\"/>\n    </div>\n\n    <a routerLink=\"/user/{{user.userId}}/website\" class=\"btn btn-primary btn-block\">Websites</a>\n    <a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Logout</a>\n</div>\n<nav class=\"navbar navbar-fixed-bottom blue-navbar\">\n</nav>\n\n"

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
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.title = 'profile';
    }
    ProfileComponent.prototype.updateUser = function () {
        this.userService.updateUser(this.user.userId, this.user);
        this.router.navigate(['user', this.user.userId]);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.user = _this.userService.findUserById(params.userId);
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <h1>\n    {{title}}\n  </h1>\n  <div>\n      <input [(ngModel)]=\"username\" type=\"text\" class=\"form-control\" placeholder=\"username\"/>\n      <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" placeholder=\"password\"/>\n      <input [(ngModel)]=\"v_password\" type=\"password\" class=\"form-control\" placeholder=\"verify password\"/>\n      <input [(ngModel)]=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"last name\"/>\n      <input [(ngModel)]=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"first name\"/>\n\n    <a (click)=\"register(v_password)\" class=\"btn btn-primary btn-block color-white\">Register</a>\n  </div>\n\n</div>\n"

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
    }
    RegisterComponent.prototype.register = function (verifiedPassword) {
        if (!this.username || !this.password || !this.lastName || !this.firstName) {
            alert('Please enter your register information');
        }
        else {
            if (verifiedPassword === this.password) {
                this.errorFlag = false;
                var registeredUser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](undefined, this.username, this.password, this.firstName, this.lastName);
                this.userService.createUser(registeredUser);
                this.router.navigate(['user', registeredUser.userId]);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"d-lg-none d-inline margin-right\">\n    <a (click)=\"backToWebsites()\" class=\"check color-black\">\n      <span class=\"fas fa-chevron-left fontawsome_icon\"></span></a>\n  </div>\n  <div class=\"row row-in-navbar\">\n    <div class=\"d-none d-lg-block col-4 navbar-item navbar-left\">\n      <a (click)=\"backToWebsites()\" class=\"check color-black\">\n        <span class=\"fas fa-chevron-left fontawsome_icon\"></span></a>\n      <a class=\"color-black navbar-text navbar-brand text-bold text-padding-left\" href=\"#\">\n        Websites</a>\n    </div>\n    <div class=\"col-8\">\n      <a class=\"navbar-text color-black navbar-brand text-bold\" href=\"#\">\n        Edit Website</a>\n      <a (click)=\"updateCurWebsite()\" class=\"check color-black\">\n        <span class=\"fas fa-check float-right text-padding-top\"></span></a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"d-none d-lg-block col-4\">\n      <ul class=\"list-group list-borderless\">\n        <li class=\"list-group-item list-borderless\" *ngFor=\"let website of websites\">\n          <a routerLink=\"user/{{userId}}/website/{{website.websiteId}}/page\">{{website.name}}</a>\n          <a routerLink=\"user/{{userId}}/website/{{website.websiteId}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-8\">\n        <div class=\"text-padding-top\">\n          <label for=\"website-name\" class=\"text-bold\">Website Name</label>\n          <input id=\"website-name\" type=\"text\" class=\"form-control\" placeholder=\"Website Name\" [(ngModel)]=\"name\"/>\n        </div>\n        <div class=\"text-padding-top\">\n          <label for=\"web-description\" class=\"text-bold\">Description</label>\n          <textarea id=\"web-description\" class=\"form-control\" rows=\"5\" placeholder=\"Web Description\" [(ngModel)]=\"description\"></textarea>\n        </div>\n      <a (click)=\"deleteWeb()\" class=\"btn btn-danger btn-block margin-top\">Delete</a>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <div class=\"container-fluid\">\n    &nbsp;\n    <a (click)=\"backToProfile()\" class=\"check\">\n      <span class=\"fas fa-user fontawsome-icon color-black\"></span>\n    </a>\n  </div>\n</nav>\n"

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
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
        });
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
        var curWebsite = this.websiteService.findWebsiteById(this.websiteId);
        this.name = curWebsite.name;
        this.description = curWebsite.description;
    };
    WebsiteEditComponent.prototype.updateCurWebsite = function () {
        this.websiteService.updateWebsite(this.websiteId, new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](this.websiteId, this.name, this.userId, this.description));
        this.backToWebsites();
    };
    WebsiteEditComponent.prototype.backToWebsites = function () {
        this.router.navigate(['user/' + this.userId + '/website']);
    };
    WebsiteEditComponent.prototype.backToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WebsiteEditComponent.prototype.deleteWeb = function () {
        this.websiteService.deleteWebsite(this.websiteId);
        this.backToWebsites();
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-light\">\n  <div class=\"container-fluid color-black\">\n      <span>\n        <a href=\"profile.html\">\n          <span class=\"fas fa-chevron-left fontawsome_icon text-padding-top color-black\"></span>\n        </a>\n      <a class=\"navbar-text navbar-brand text-bold text-padding-left\" href=\"#\">\n        Websites\n      </a>\n      </span>\n    <a routerLink=\"/user/{{userId}}/website/new\">\n      <span class=\"fas fa-plus fontawsome-icon color-black\"></span>\n    </a>\n  </div>\n</nav>\n<div class=\"container container-padding\">\n  <ul class=\"list-group list-borderless\">\n    <li class=\"list-group-item list-borderless\" *ngFor=\"let website of websites\">\n      <a routerLink=\"/user/{{userId}}/website/{{website.websiteId}}/page\">{{website.name}}</a>\n      <a routerLink=\"/user/{{userId}}/website/{{website.websiteId}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n    </li>\n  </ul>\n</div>\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <div class=\"container-fluid\">\n    &nbsp;\n    <a class=\"check\" (click)=\"backToProfile()\">\n      <span class=\"fas fa-user fontawsome-icon color-black\"></span>\n    </a>\n  </div>\n</nav>\n"

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
        this.activateRoute.params.subscribe(function (params) { return _this.userId = params.userId; });
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
        alert(this.userId);
    };
    WebsiteListComponent.prototype.backToProfile = function () {
        this.router.navigate(['user', this.userId]);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-light\">\n  <div class=\"d-lg-none d-inline margin-right\">\n    <a href=\"website-list.html\">\n      <span class=\"fas fa-chevron-left color-black\"></span></a>\n  </div>\n  <div class=\"row row-in-navbar\">\n    <div class=\"d-none d-lg-block col-4 navbar-item navbar-left\">\n      <a class=\"check\" (click)=\"backToWebsites()\">\n        <i class=\"fas fa-chevron-left fontawsome_icon color-black\"></i></a>\n      <a class=\"navbar-text navbar-brand text-bold text-padding-left color-black\" href=\"#\">\n        Websites</a>\n    </div>\n    <div class=\"col-8\">\n      <a class=\"color-black navbar-text navbar-brand text-bold\" href=\"#\">\n        New Website</a>\n      <a (click)=\"createNewWeb()\" class=\"check\">\n        <span class=\"fas fa-check fontawsome-icon float-right text-padding-top color-black\"></span></a>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"d-none d-lg-block col-4\">\n      <ul class=\"list-group list-borderless\">\n        <li class=\"list-group-item list-borderless\" *ngFor=\"let website of websites\">\n          <a routerLink=\"/user/{{userId}}/website/{{website.websiteId}}/page\">{{website.name}}</a>\n          <a routerLink=\"/user/{{userId}}/website/{{website.websiteId}}\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-8\">\n        <div class=\"text-padding-top\">\n          <label for=\"website-name\" class=\"text-bold\">Name</label>\n          <input id=\"website-name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"name\"/>\n        </div>\n        <div class=\"text-padding-top\">\n          <label for=\"web-description\" class=\"text-bold\">Description</label>\n          <textarea id=\"web-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\" [(ngModel)]=\"description\"></textarea>\n        </div>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <div class=\"container-fluid\">\n    &nbsp;\n    <a (click)=\"backToProfile()\" class=\"check\">\n      <span class=\"fas fa-user fontawsome-icon color-black\"></span>\n    </a>\n  </div>\n</nav>\n\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(router, websiteService, activatedRouter) {
        this.router = router;
        this.websiteService = websiteService;
        this.activatedRouter = activatedRouter;
        this.websites = [];
    }
    WebsiteNewComponent.prototype.createNewWeb = function () {
        if (!this.name || !this.description) {
            alert('Please enter the name or description');
        }
        else {
            this.websiteService.createWebsite(this.userId, new _models_website_model_client__WEBPACK_IMPORTED_MODULE_3__["Website"](undefined, this.name, undefined, this.description));
            this.backToWebsites();
        }
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.userId = params.userId;
        });
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
    };
    WebsiteNewComponent.prototype.backToWebsites = function () {
        this.router.navigate(['user/' + this.userId + '/website']);
    };
    WebsiteNewComponent.prototype.backToProfile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WebsiteNewComponent.prototype, "newWebForm", void 0);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtY2hvb3Nlci93aWRnZXQtY2hvb3Nlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default fixed-top navbar-light bg-light\">\n  <div class=\"container-fluid\">\n      <span>\n        <a href=\"widget-list.html\" class=\"text-padding-top\">\n          <i class=\"color-black fas fa-chevron-left fontawsome_icon text-padding-top\"></i>\n        </a>\n      <a class=\"color-black navbar-text navbar-brand text-bold text-padding-left\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">\n        Choose Widget\n      </a>\n      </span>\n  </div>\n</nav>\n<div class=\"container container-padding\">\n  <ul class=\"list-group list-borderless\">\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/header\">Header</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">Label</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">HTML</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">Text Input</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">Link</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">Button</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/image\">Image</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/youtube\">Youtube</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">Data Table</a>\n    </li>\n    <li class=\"list-group-item list-borderless\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">Repeater</a>\n    </li>\n  </ul>\n  <a class=\"btn btn-danger btn-block\" href=\"widget-list.html\">Cancel</a>\n</div>\n<nav class=\"navbar fixed-bottom navbar-light bg-light\">\n  <div class=\"container-fluid row\">\n    &nbsp;\n    <a (click)=\"backToProfile()\" class=\"check float-right\">\n      <i class=\"fas fa-user fontawsome-icon color-black\"></i>\n    </a>\n  </div>\n</nav>\n"

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
    WidgetChooserComponent.prototype.backToProfile = function () {
        this.router.navigate(['user', this.userId]);
    };
    WidgetChooserComponent.prototype.backToWidgets = function () {
        this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + 'widget']);
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

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"row container-fluid\">\n    <div class=\"float-left\">\n      <a (click)=\"backToWidgets()\" class=\"check\"><span class=\"color-black fas fa-chevron-left fontawsome_icon\"></span></a>\n      <a class=\"navbar-text navbar-brand text-bold text-padding-left\"\n         routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}\">Widgets Edit</a>\n    </div>\n    <div class=\"text-brand float-right text-padding-top\">\n      <a class=\"color-black\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widgetId}}\"></a>\n    </div>\n    <div class=\"float-right text-padding-top\">\n      <a (click)=\"widgetOperation()\"><span class=\"color-black fas fa-check fontawsome_icon\"></span></a>\n    </div>\n  </div>\n\n</nav>\n<div class=\"container\">\n  <form>\n    <div class=\"form-group text-padding-top\">\n      <label for=\"widget name\" class=\"text-bold\">Text</label>\n      <input id=\"widget name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"text\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"widget-size\" class=\"text-bold\">Size</label>\n      <input id=\"widget-size\" type=\"number\" class=\"form-control\" placeholder=\"Size\" [(ngModel)]=\"size\"/>\n    </div>\n  </form>\n  <a (click)=\"deleteWidget()\" class=\"check btn btn-danger btn-block\">Delete</a>\n  <a (click)=\"backToWidgets()\" class=\"check btn btn-danger btn-block\">Cancel</a>\n\n\n</div>\n\n<nav class=\"navbar navbar-light bg-light fixed-bottom\">\n  <div class=\"float-left\"> </div>\n  <div class=\"float-right\">\n    <a (click)=\"backToProfile()\"><span class=\"fas fa-user fontawsome_icon color-black\"></span></a>\n  </div>\n\n</nav>\n\n"

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
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.pageId = params.pageId;
            _this.widgetId = params.widgetId;
        });
        var widget = this.widgetService.findWidgetById(this.widgetId);
        if (widget) {
            this.text = widget.text;
            this.size = widget.size;
            this.isNewWidget = false;
        }
        else {
            this.isNewWidget = true;
        }
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
        if (!this.text || !this.size) {
            alert('Please enter text and size.');
        }
        else {
            this.widgetService.createWidget(this.pageId, new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"](undefined, 'HEADER', undefined, this.size, this.text, undefined, undefined));
            this.backToWidgets();
        }
    };
    WidgetHeaderComponent.prototype.updateCurWidget = function () {
        if (!this.text || !this.size) {
            alert('Please enter text and size.');
        }
        else {
            var widget = this.widgetService.findWidgetById(this.widgetId);
            widget.text = this.text;
            widget.size = this.size;
            this.widgetService.updateWidget(this.widgetId, widget);
            this.backToWidgets();
        }
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        this.widgetService.deleteWidget(this.widgetId);
        this.backToWidgets();
    };
    WidgetHeaderComponent.prototype.backToWidgets = function () {
        this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
    };
    WidgetHeaderComponent.prototype.backToProfile = function () {
        this.router.navigate(['user/' + this.userId]);
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

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-image works!\n</p>\n"

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


var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent() {
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetImageComponent);
    return WidgetImageComponent;
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

module.exports = "<p>\n  widget-youtube works!\n</p>\n"

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


var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent() {
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-light bg-light fixed-top\">\n  <div class=\"float-left\">\n    <a (click)=\"backToPages()\"><span class=\"color-black fas fa-chevron-left fontawsome_icon\"></span></a>\n    <a class=\"navbar-text navbar-brand text-bold text-padding-left\" href=\"#\">Widgets</a>\n  </div>\n  <div class=\"float-right\">\n    <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\"><span class=\"color-black fas fa-plus fontawsome_icon\"></span></a>\n  </div>\n</nav>\n\n<div class=\"container\">\n    <div *ngFor=\"let widget of widgets\" class=\"text-padding-top\">\n      <div [ngSwitch]=\"widget.widgetType\">\n        <div *ngSwitchCase=\"'HEADER'\">\n          <div class=\"text-padding-top\">\n              <a class=\"float-right\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget.widgetId}}\">\n                <span class=\"fas fa-cog fontawsome_icon\"></span>\n              </a>\n            <h1 [style.font-size]=\"getStyle(widget.size)\">\n              {{widget.text}}\n            </h1>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n            <div class=\"text-padding-top\">\n              <div class=\"text-padding-top\">\n                <a class=\"float-right\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget.widgetId}}\">\n                  <span class=\"fas fa-cog fontawsome_icon\"></span>\n                </a>\n              </div>\n              <img class=\"img-fluid rounded widget-images\" [src]=\"widget.url\" [style.width]=\"widget.width\">\n            </div>\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\">\n          <div class=\"text-padding-top\">\n            <div class=\"embed-responsive embed-responsive-16by9 text-padding-top\">\n              <a class=\"float-right\" routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget.widgetId}}\">\n                <span class=\"fas fa-cog fontawsome_icon\"></span>\n              </a>\n              <iframe [style.width]=\"getStyle(widget.width)\" [src]=\"widget.url\" frameborder=\"0\"></iframe>\"\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n</div>\n\n<nav class=\"navbar navbar-default fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"float-right navbar-text\">\n      <a (click)=\"backToProfile()\" class=\"text-padding-left\">\n        <span class=\"fas fa-user fontawsome_icon color-black\"></span>\n      </a>\n    </div>\n    <div class=\"float-left navbar-text\">\n      <a href=\"#\" class=\"text-padding-left\">\n        <span class=\"fas fa-play color-black\"></span>\n      </a>\n      <a href=\"#\" class=\"text-padding-left\">\n        <span class=\"fas fa-eye color-black\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

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




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.userId;
            _this.websiteId = params.websiteId;
            _this.pageId = params.pageId;
        });
        this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
        console.log(this.widgets);
    };
    WidgetListComponent.prototype.backToProfile = function () {
        this.router.navigate(['user', this.userId]);
    };
    WidgetListComponent.prototype.backToPages = function () {
        this.router.navigate(['user/' + this.userId + '/website/' + this.websiteId + '/page']);
    };
    WidgetListComponent.prototype.getStyle = function (size) {
        return size + 'px';
    };
    WidgetListComponent.prototype.getResourceURL = function (url) {
        return url;
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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