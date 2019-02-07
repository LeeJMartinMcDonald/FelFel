import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { catchError, map, tap, retry } from "rxjs/operators";

import { AppConfig } from "../app.config";

import { LoadingStatus } from "../enums/loading.status";

import { Batch } from "../models/batch";
import { BatchNew } from "../models/batch.new";
import { BatchItem } from "../models/batch.item";

import { AlertService } from "../services/alert.service";
import { BaseService } from "../services/base.service";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': "application/json" })
};

@Injectable()
export class BatchService extends BaseService {
    private batchSubject = new BehaviorSubject<Batch>(new Batch());
    private batchesSubject = new BehaviorSubject<Batch[]>(new Array<Batch>());
    private batchItemsSubject = new BehaviorSubject<BatchItem[]>(new Array<BatchItem>());

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

    getBatchItems(batchId: number): Observable<BatchItem[]> {
        this.loadBatchItems(batchId).subscribe();

        return this.batchItemsSubject.asObservable();
    }

    loadBatchItems(batchId: number): Observable<BatchItem[]> {
        return this.httpClient.get<BatchItem[]>(
            `${this.appConfig.apiBatchUrl}GetBatchItems/${batchId}`,
            httpOptions)
            .pipe(
            tap(_ => {
                this.batchItemsSubject.next(_);
            }
            ),
            catchError(this.handleError<any>(`GetBatchItems/${batchId}`))
            );
    }

    addNewBatch(model: BatchNew): Observable<any> {
        this.logSuccess("Adding a new batch...");
        return this.httpClient.post<any>(
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

    getBatch(batchId: number): Observable<Batch> {
        this.loadBatch(batchId).subscribe();

        return this.batchSubject.asObservable();
    }

    loadBatch(batchId: number): Observable<Batch> {
        return this.httpClient.get<Batch>(
            `${this.appConfig.apiBatchUrl}GetBatch/${batchId}`,
            httpOptions)
            .pipe(
            tap(_ => {
                this.batchSubject.next(_);
            }
            ),
            catchError(this.handleError<any>(`GetBatch/${batchId}`))
        );
    }
}