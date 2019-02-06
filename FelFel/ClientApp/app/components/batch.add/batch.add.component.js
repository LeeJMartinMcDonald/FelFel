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
var BatchAddComponent = /** @class */ (function () {
    function BatchAddComponent(batchService) {
        this.batchService = batchService;
        this.batchNew = new BatchNew();
    }
    BatchAddComponent.prototype.ngOnInit = function () {
    };
    BatchAddComponent.prototype.save = function ($event) {
        var _this = this;
        console.log(this.batchNew);
        this.batchService.addNewBatch(this.batchNew).subscribe(function (result) {
            _this.batchNew = new BatchNew();
        });
    };
    BatchAddComponent = __decorate([
        Component({
            selector: "batch-add",
            template: require("./batch.add.component.html")
        }),
        __metadata("design:paramtypes", [BatchService])
    ], BatchAddComponent);
    return BatchAddComponent;
}());
export { BatchAddComponent };
//# sourceMappingURL=batch.add.component.js.map