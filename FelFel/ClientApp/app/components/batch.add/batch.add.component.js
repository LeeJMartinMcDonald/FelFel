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
import { BatchNew } from "../../models/batch.new";
import { BatchService } from "../../services/batch.service";
import { ProductService } from "../../services/product.service";
var BatchAddComponent = /** @class */ (function () {
    function BatchAddComponent(batchService, productService) {
        this.batchService = batchService;
        this.productService = productService;
        this.batchNew = new BatchNew();
        this.batchSubmitted = false;
    }
    BatchAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.products = products;
        });
    };
    BatchAddComponent.prototype.reset = function (form) {
        this.batchSubmitted = false;
        this.batchNew = new BatchNew();
        form.reset();
    };
    BatchAddComponent.prototype.save = function ($event) {
        this.batchSubmitted = true;
        this.batchNew.checkedInDate = new Date();
        this.batchService.addNewBatch(this.batchNew).subscribe();
    };
    BatchAddComponent = __decorate([
        Component({
            selector: "batch-add",
            template: require("./batch.add.component.html")
        }),
        __metadata("design:paramtypes", [BatchService,
            ProductService])
    ], BatchAddComponent);
    return BatchAddComponent;
}());
export { BatchAddComponent };
//# sourceMappingURL=batch.add.component.js.map