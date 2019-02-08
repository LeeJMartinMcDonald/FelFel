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
import { BatchItem } from "../../models/batch.item";
import { BatchService } from "../../services/batch.service";
import { LocationService } from "../../services/location.service";
var BatchUpdateComponent = /** @class */ (function () {
    function BatchUpdateComponent(batchService, locationService, route) {
        this.batchService = batchService;
        this.locationService = locationService;
        this.route = route;
        this.batchItem = new BatchItem();
        this.batchItemSubmitted = false;
    }
    BatchUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.batchId = +params['id'];
        });
        this.batchItem.batchId = this.batchId;
        this.batchService.getBatch(this.batchId).subscribe(function (batch) {
            _this.batch = batch;
        });
        this.batchService.getBatchUpdateReasons().subscribe(function (reasons) {
            _this.batchUpdateReasons = reasons;
        });
        this.locationService.getLocations().subscribe(function (locations) {
            _this.locations = locations;
        });
    };
    BatchUpdateComponent.prototype.reset = function (form) {
        this.batchItemSubmitted = false;
        this.batchItem = new BatchItem();
        this.batchItem.id = this.batchId;
        form.reset();
    };
    BatchUpdateComponent.prototype.save = function ($event) {
        var _this = this;
        this.batchItemSubmitted = true;
        this.batchService.addBatchItem(this.batchItem).subscribe(function (result) {
            _this.reloadBatchDetails();
        });
    };
    BatchUpdateComponent.prototype.reloadBatchDetails = function () {
        var _this = this;
        this.batchService.loadBatch(this.batchId).subscribe(function (batch) {
            _this.batch = batch;
        });
    };
    BatchUpdateComponent = __decorate([
        Component({
            selector: "batch-update",
            template: require("./batch.update.component.html")
        }),
        __metadata("design:paramtypes", [BatchService,
            LocationService,
            ActivatedRoute])
    ], BatchUpdateComponent);
    return BatchUpdateComponent;
}());
export { BatchUpdateComponent };
//# sourceMappingURL=batch.update.component.js.map