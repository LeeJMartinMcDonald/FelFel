var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { BatchService } from "../../services/batch.service";
import { ProductService } from "../../services/product.service";
var ProductInventoryByBatch = /** @class */ (function () {
    function ProductInventoryByBatch(batchService, productService, route) {
        this.batchService = batchService;
        this.productService = productService;
        this.route = route;
    }
    ProductInventoryByBatch.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.productId = +params['id'];
        });
        this.productService.getProduct(this.productId).subscribe(function (product) {
            _this.product = product;
        });
        this.batchService.getBatchesByProduct(this.productId).subscribe(function (batches) {
            _this.batches = batches;
        });
    };
    ProductInventoryByBatch = __decorate([
        Component({
            selector: "product.inventory.by.batch",
            template: require("./product.inventory.by.batch.component.html")
        }),
        __metadata("design:paramtypes", [BatchService,
            ProductService,
            ActivatedRoute])
    ], ProductInventoryByBatch);
    return ProductInventoryByBatch;
}());
export { ProductInventoryByBatch };
//# sourceMappingURL=product.inventory.by.batch.component.js.map