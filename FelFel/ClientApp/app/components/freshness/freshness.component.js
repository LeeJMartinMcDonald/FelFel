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
var FreshnessComponent = /** @class */ (function () {
    function FreshnessComponent(batchService) {
        this.batchService = batchService;
        this.fresh = 0;
        this.expiring = 0;
        this.expired = 0;
    }
    FreshnessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.batchService.getBatches().subscribe(function (batches) {
            _this.batches = batches;
            _this.expired = 0;
            _this.expiring = 0;
            _this.fresh = 0;
            _this.batches.forEach(function (batch) {
                // TODO: Refactor - move date casting into service when data is retrieved
                var currentDate = new Date();
                var expirationDate = new Date(batch.expirationDate);
                var expiringDate = new Date(expirationDate);
                expiringDate.setDate(expiringDate.getDate() - batch.expiringTime);
                if (currentDate >= expirationDate) {
                    _this.expired++;
                }
                else if (currentDate >= expiringDate) {
                    _this.expiring++;
                }
                else {
                    _this.fresh++;
                }
            });
        });
    };
    FreshnessComponent = __decorate([
        Component({
            selector: "freshness",
            template: require("./freshness.component.html")
        }),
        __metadata("design:paramtypes", [BatchService])
    ], FreshnessComponent);
    return FreshnessComponent;
}());
export { FreshnessComponent };
//# sourceMappingURL=freshness.component.js.map