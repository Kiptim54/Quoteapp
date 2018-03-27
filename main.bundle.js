webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\n#header{\n    color:whitesmoke;\n    background-color:rgba(109, 35, 35, 0.794);\n    text-align:center;\n    padding:2%;\n    \n\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n<div id=\"header\" class=\"col-md-12\">\n<h1>{{title}}</h1>\n<br>\n<h6><em>Share your quotes...</em></h6>\n</div>\n</div>\n\n</div>\n\n  <app-form></app-form>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Quota';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_forms_component__ = __webpack_require__("./src/app/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quotes_quotes_component__ = __webpack_require__("./src/app/quotes/quotes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__strikethrough_directive__ = __webpack_require__("./src/app/strikethrough.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__time_count_pipe__ = __webpack_require__("./src/app/time-count.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__forms_forms_component__["a" /* FormsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__quotes_quotes_component__["a" /* QuotesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__strikethrough_directive__["a" /* StrikethroughDirective */],
                __WEBPACK_IMPORTED_MODULE_7__time_count_pipe__["a" /* TimeCountPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.css":
/***/ (function(module, exports) {

module.exports = "\nform{\n    margin-left:33%;\n    \n}\n.form-control{\n    width:50%;\n    \n    \n}\n.form-group{\n    text-align:left;\n}\n#bg{\n    \n    \n    background-color:white;\n    border-left:black solid 2px;\n    margin-left:4%;\n}\n#bg p{\n    \n    line-height:0.25;\n    margin-bottom:5%;\n\n    \n}\nbutton{\n    background-color: palevioletred;\n    margin-top:2%;\n}\nh3, label, .NgModule{\n    background-color:#FFF1D2;\n}\n#showquotes{\n    margin-left:22%;\n}"

/***/ }),

/***/ "./src/app/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n  <div class=\"col-md-12\">\n<form action=\"\">\n    <div class=\"form-group\">\n        <label for=\"Quote\">Quote: </label>\n        <textarea name=\"Quote\" cols=\"50\" rows=\"10\" class=\"form-control\" #newquote></textarea>\n    </div>\n    <div class=\"form-group\">\n            <label for=\"Source\">Source </label>\n            <input type=\"text\" class=\"form-control\" name=\"Source\" #newsource required>\n    </div>\n    <div class=\"form-group\">\n            <label for=\"Username\">Username </label>\n            <input type=\"text\" class=\"form-control\" name=\"Username\" #newusername required>\n    </div>\n    <button type=\"submit\" (click)='shareQuote(newquote,newsource,newusername)'> Share</button>\n</form>\n\n  </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n<h3>See Quotes</h3>\n</div>\n<app-quotes *ngFor = \"let quote of quotes\" [quote]=\"quote\" color></app-quotes>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quote__ = __webpack_require__("./src/app/quote.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
        this.quotes = [
            new __WEBPACK_IMPORTED_MODULE_1__quote__["a" /* Quote */]("We are our Choices", "~Unknown", "Brenda Kiptim", new Date(2018, 3, 15)),
        ];
    }
    FormsComponent.prototype.shareQuote = function (quote, source, username, completedate) {
        console.log("Adding quote: " + quote.value + " by:" + source.value + " submitted by: " + username.value + " on " + completedate);
        this.quotes.push(new __WEBPACK_IMPORTED_MODULE_1__quote__["a" /* Quote */](quote.value, source.value, username.value, completedate));
        quote.value = '';
        source.value = '';
        username.value = '';
        return false;
    };
    FormsComponent.prototype.delete = function (quotes) {
        for (var i = 0; i < this.quotes.length; i++) {
            if (this.quotes[i] = quotes) {
                this.quotes.splice(i, 1);
            }
        }
    };
    FormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("./src/app/forms/forms.component.html"),
            styles: [__webpack_require__("./src/app/forms/forms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/quote.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quote; });
var Quote = /** @class */ (function () {
    function Quote(quota, source, username, completedate) {
        this.quota = quota;
        this.source = source;
        this.username = username;
        this.completedate = completedate;
    }
    return Quote;
}());



/***/ }),

/***/ "./src/app/quotes/quotes.component.css":
/***/ (function(module, exports) {

module.exports = "#bg{\n    \n    \n    background-color:white;\n    border-left:black solid 2px;\n    margin-left:4%;\n}\n#bg p{\n    \n    line-height:0.25;\n    margin-bottom:5%;\n\n    \n}\nbutton{\n    background-color: palevioletred;\n    margin-top:2%;\n}\nh3, label{\n    background-color:#FFF1D2;\n}\n#showquotes{\n    margin-left:22%;\n}"

/***/ }),

/***/ "./src/app/quotes/quotes.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n   \n    <div class=\"row\" id=\"quotes\">\n        <div class=\"col-md-12\">\n           \n            <div class=\"row\">\n       <div class=\"col-md-6\" id=\"showquotes\">\n          <div id=\"bg\" appStrikethrough>\n              <span>\n              {{quote.quota}} ~{{quote.source}} <br>{{quote.username}}  {{quote.completedate | date:'shortTime'}}<br> \n              <button  (click)=\"Like()\">Likes {{Likes}}</button>\n              </span>\n              <button  (click)=\"Dislike()\">Dislikes {{Dislikes}}</button><br>\n              <button (click)=\"delete(quotes)\">Clear Quote</button>\n             \n            </div>\n            \n       </div>\n                \n            </div>\n            \n        </div>\n      \n</div>"

/***/ }),

/***/ "./src/app/quotes/quotes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quote__ = __webpack_require__("./src/app/quote.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuotesComponent = /** @class */ (function () {
    function QuotesComponent() {
        this.quotes = [];
        this.Likes = 0;
        this.Dislikes = 0;
        this.quotes = [
            this.quote = new __WEBPACK_IMPORTED_MODULE_1__quote__["a" /* Quote */]("Kiptim", "We are our choices", "Unknown", new Date(2018, 3, 15)),
        ];
    }
    QuotesComponent.prototype.shareQuote = function (quote, source, username, completedate) {
        console.log("Adding quote: " + quote.value + " by:" + source.value + " submitted by: " + username.value + " on " + completedate);
        this.quotes.push(new __WEBPACK_IMPORTED_MODULE_1__quote__["a" /* Quote */](quote.value, source.value, username.value, completedate));
        quote.value = '';
        source.value = '';
        username.value = '';
        return false;
    };
    QuotesComponent.prototype.Like = function () {
        this.Likes += 1;
    };
    QuotesComponent.prototype.Dislike = function () {
        this.Dislikes += 1;
    };
    QuotesComponent.prototype.delete = function (quotes) {
        for (var i = 0; i < this.quotes.length; i++) {
            if (this.quotes[i] = quotes) {
                this.quotes.splice(i, 1);
            }
        }
    };
    QuotesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__quote__["a" /* Quote */])
    ], QuotesComponent.prototype, "quote", void 0);
    QuotesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-quotes',
            template: __webpack_require__("./src/app/quotes/quotes.component.html"),
            styles: [__webpack_require__("./src/app/quotes/quotes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuotesComponent);
    return QuotesComponent;
}());



/***/ }),

/***/ "./src/app/strikethrough.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrikethroughDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StrikethroughDirective = /** @class */ (function () {
    function StrikethroughDirective(elem) {
        this.elem = elem;
    }
    StrikethroughDirective.prototype.Onclicks = function () {
        this.changeColor("#FFC0CB");
    };
    StrikethroughDirective.prototype.changeColor = function (action) {
        this.elem.nativeElement.style.backgroundColor = action;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StrikethroughDirective.prototype, "Onclicks", null);
    StrikethroughDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[appStrikethrough]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], StrikethroughDirective);
    return StrikethroughDirective;
}());



/***/ }),

/***/ "./src/app/time-count.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeCountPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeCountPipe = /** @class */ (function () {
    function TimeCountPipe() {
    }
    TimeCountPipe.prototype.transform = function (value, args) {
        return null;
    };
    TimeCountPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Pipe */])({
            name: 'timeCount'
        })
    ], TimeCountPipe);
    return TimeCountPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map