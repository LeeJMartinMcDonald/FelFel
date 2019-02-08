import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { catchError, map, tap, retry } from "rxjs/operators";

import { AppConfig } from "../app.config";

import { LoadingStatus } from "../enums/loading.status";

import { Location } from "../models/location";

import { AlertService } from "../services/alert.service";
import { BaseService } from "../services/base.service";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': "application/json" })
};

@Injectable()
export class LocationService extends BaseService {
    private locationsSubject = new BehaviorSubject<Location[]>(new Array<Location>());

    constructor(
        private readonly appConfig: AppConfig,
        protected alertService: AlertService,
        private readonly httpClient: HttpClient
    ) {
        super(alertService);
    }

    getLocations(): Observable<Location[]> {
        this.loadLocations().subscribe();

        return this.locationsSubject.asObservable();
    }

    loadLocations(): Observable<Location[]> {
        return this.httpClient.get<Location[]>(
            `${this.appConfig.apiProductUrl}GetLocations`,
            httpOptions)
            .pipe(
                tap(_ => {
                    this.locationsSubject.next(_);
                }
            ),
            catchError(this.handleError<any>(`GetLocations`))
        );
    }
}