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
import { BatchService } from "../../services/batch.service";
var BatchesComponent = /** @class */ (function () {
    function BatchesComponent(batchService) {
        this.batchService = batchService;
    }
    BatchesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.batchService.getBatches().subscribe(function (batches) {
            _this.batches = batches;
        });
    };
    BatchesComponent.prototype.getFreshness = function (batch) {
        return this.batchService.getFreshness(batch);
    };
    BatchesComponent = __decorate([
        Component({
            selector: "batches",
            template: require("./batches.component.html")
        }),
        __metadata("design:paramtypes", [BatchService])
    ], BatchesComponent);
    return BatchesComponent;
}());
export { BatchesComponent };
//# sourceMappingURL=batches.component.js.map