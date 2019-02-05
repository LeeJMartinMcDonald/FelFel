import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

import { LoadingStatus } from "../enums/loading.status";

import { AlertService } from "./alert.service";

export class BaseService {
    constructor(
        protected alertService: AlertService
    ){}

    protected handleError<T>(operation = "operation", loadingStatus?: LoadingStatus, result?: T) {
        return (error: any): Observable<T> => {
            if (loadingStatus !== null || loadingStatus !== undefined) {
                loadingStatus = LoadingStatus.Unset;
            }

            console.error(operation);
            console.error(error);

            if (error.status === 500) {
                this.logError(`${operation} - ${error.message}`);
            } else {
                this.logError(`${operation} - ${error.error}`);
            }

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    protected logError(message: string) {
        this.alertService.error(message, true);
    }

    protected logSuccess(message: string) {
        this.alertService.success(message, true);
    }
}