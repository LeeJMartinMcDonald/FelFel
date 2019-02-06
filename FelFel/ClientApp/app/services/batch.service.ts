import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { catchError, map, tap, retry } from "rxjs/operators";

import { AppConfig } from "../app.config";

import { LoadingStatus } from "../enums/loading.status";

import { Batch } from "../models/batch";
import { BatchNew } from "../models/batch.new";

import { AlertService } from "../services/alert.service";
import { BaseService } from "../services/base.service";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': "application/json" })
};

@Injectable()
export class BatchService extends BaseService {
    private batchesSubject = new BehaviorSubject<Batch[]>(new Array<Batch>());

    constructor(
        private readonly appConfig: AppConfig,
        protected alertService: AlertService,
        private readonly httpClient: HttpClient
    ) {
        super(alertService);
    }

    getBatches(): Observable<Batch[]> {
        this.loadBatches().subscribe();

        return this.batchesSubject.asObservable();
    }

    loadBatches(): Observable<Batch[]> {
        return this.httpClient.get<Batch[]>(
            `${this.appConfig.apiBatchUrl}GetBatches`,
            httpOptions)
            .pipe(
                tap(_ => {
                    this.batchesSubject.next(_);
                }
            ),
            catchError(this.handleError<any>(`GetBatches`))
        );
    }

    addNewBatch(model: BatchNew): Observable<any> {
        this.logSuccess("Adding a new batch...");
        return this.httpClient.put<any>(
            `${this.appConfig.apiBatchUrl}AddNewBatch`,
            model,
            httpOptions
        ).pipe(
            tap(_ => {
                this.logSuccess("New batch added");
            }),
            catchError(this.handleError<any>("AddNewBatch"))
        );
    }
}