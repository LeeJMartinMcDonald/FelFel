var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { catchError, tap } from "rxjs/operators";
import { AppConfig } from "../app.config";
import { AlertService } from "../services/alert.service";
import { BaseService } from "../services/base.service";
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': "application/json" })
};
var ProductService = /** @class */ (function (_super) {
    __extends(ProductService, _super);
    function ProductService(appConfig, alertService, httpClient) {
        var _this = _super.call(this, alertService) || this;
        _this.appConfig = appConfig;
        _this.alertService = alertService;
        _this.httpClient = httpClient;
        _this.productSubject = new BehaviorSubject(new Array());
        return _this;
    }
    ProductService.prototype.getProducts = function () {
        this.loadProducts().subscribe();
        return this.productSubject.asObservable();
    };
    ProductService.prototype.loadProducts = function () {
        var _this = this;
        return this.httpClient.get(this.appConfig.apiProductUrl + "GetProducts", httpOptions)
            .pipe(tap(function (_) {
            _this.productSubject.next(_);
        }), catchError(this.handleError("GetProducts")));
    };
    ProductService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AppConfig,
            AlertService,
            HttpClient])
    ], ProductService);
    return ProductService;
}(BaseService));
export { ProductService };
//# sourceMappingURL=product.service.js.map