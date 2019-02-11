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
import { LocationService } from "../../services/location.service";
var BatchLocationsComponent = /** @class */ (function () {
    function BatchLocationsComponent(locaitonService, route) {
        this.locaitonService = locaitonService;
        this.route = route;
    }
    BatchLocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.batchId = +params['id'];
        });
        this.locaitonService.getLocationsWithQuantity(this.batchId).subscribe(function (locations) {
            _this.locations = locations;
        });
    };
    BatchLocationsComponent = __decorate([
        Component({
            selector: "batch.locations",
            template: require("./batch.locations.component.html")
        }),
        __metadata("design:paramtypes", [LocationService,
            ActivatedRoute])
    ], BatchLocationsComponent);
    return BatchLocationsComponent;
}());
export { BatchLocationsComponent };
//# sourceMappingURL=batch.locations.component.js.map