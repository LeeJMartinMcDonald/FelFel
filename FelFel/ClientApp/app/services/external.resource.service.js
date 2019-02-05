var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
var ExternalResourceService = /** @class */ (function () {
    function ExternalResourceService() {
    }
    ExternalResourceService.prototype.loadScript = function (url, callback) {
        var node = document.createElement("script");
        node.src = url;
        node.type = "text/javascript";
        node.async = true;
        node.charset = "utf-8";
        document.getElementsByTagName("body")[0].appendChild(node);
        node.onload = function (data) {
            if (callback !== undefined) {
                callback();
            }
        };
    };
    ExternalResourceService.prototype.loadStylesheet = function (url) {
        var node = document.createElement("link");
        node.href = url;
        node.type = "text/css";
        node.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(node);
    };
    ExternalResourceService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ExternalResourceService);
    return ExternalResourceService;
}());
export { ExternalResourceService };
//# sourceMappingURL=external.resource.service.js.map