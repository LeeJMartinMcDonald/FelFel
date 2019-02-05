import { of } from "rxjs/observable/of";
import { LoadingStatus } from "../enums/loading.status";
var BaseService = /** @class */ (function () {
    function BaseService(alertService) {
        this.alertService = alertService;
    }
    BaseService.prototype.handleError = function (operation, loadingStatus, result) {
        var _this = this;
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            if (loadingStatus !== null || loadingStatus !== undefined) {
                loadingStatus = LoadingStatus.Unset;
            }
            console.error(operation);
            console.error(error);
            if (error.status === 500) {
                _this.logError(operation + " - " + error.message);
            }
            else {
                _this.logError(operation + " - " + error.error);
            }
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    BaseService.prototype.logError = function (message) {
        this.alertService.error(message, true);
    };
    BaseService.prototype.logSuccess = function (message) {
        this.alertService.success(message, true);
    };
    return BaseService;
}());
export { BaseService };
//# sourceMappingURL=base.service.js.map