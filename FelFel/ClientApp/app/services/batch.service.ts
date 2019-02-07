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
import { BatchUpdateReason } from "../models/batch.update.reason";

import { AlertService } from "../services/alert.service";
import { BaseService } from "../services/base.service";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': "application/json" })
};

@Injectable()
export class BatchService extends BaseService {
    private batchSubject = new BehaviorSubject<Batch>(new Batch());
    private batchesSubject = new BehaviorSubject<Batch[]>(new Array<Batch>());
    private batchesByProductSubject = new BehaviorSubject<Batch[]>(new Array<Batch>());
    private batchItemsSubject = new BehaviorSubject<BatchItem[]>(new Array<BatchItem>());
    private batchUpdateReasons = new BehaviorSubject<BatchUpdateReason[]>(new Array<BatchUpdateReason>());

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

    getBatchesByProduct(productId: number): Observable<Batch[]> {
        this.loadBatchesByProduct(productId).subscribe();

        return this.batchesByProductSubject.asObservable();
    }

    loadBatchesByProduct(productId: number): Observable<Batch[]> {
        return this.httpClient.get<Batch[]>(
            `${this.appConfig.apiBatchUrl}GetBatchesByProduct/${productId}`,
            httpOptions)
            .pipe(
            tap(_ => {
                this.batchesByProductSubject.next(_);
            }
            ),
            catchError(this.handleError<any>(`GetBatchesByProduct/${productId}`))
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

    getBatchUpdateReasons(): Observable<BatchUpdateReason[]> {
        this.loadBatchUpdateReasons().subscribe();

        return this.batchUpdateReasons.asObservable();
    }

    loadBatchUpdateReasons(): Observable<BatchUpdateReason[]> {
        return this.httpClient.get<BatchUpdateReason[]>(
            `${this.appConfig.apiBatchUrl}GetBatchUpdateReasons`,
            httpOptions)
            .pipe(
            tap(_ => {
                this.batchUpdateReasons.next(_);
            }
            ),
            catchError(this.handleError<any>(`GetBatchUpdateReasons`))
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

    addBatchItem(model: BatchItem): Observable<any> {
        this.logSuccess("Adding a new batch item...");
        return this.httpClient.post<any>(
            `${this.appConfig.apiBatchUrl}AddBatchItem`,
            model,
            httpOptions
        ).pipe(
            tap(_ => {
                this.logSuccess("New batch item added");
            }),
            catchError(this.handleError<any>("AddBatchItem"))
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

    getFreshness(batch: Batch): string {
        // TODO: Refactor - move date casting into service when data is retrieved

        var currentDate: Date = new Date();
        var expirationDate: Date = new Date(batch.expirationDate);
        var expiringDate: Date = new Date(expirationDate);

        expiringDate.setDate(expiringDate.getDate() - batch.expiringTime)

        if (currentDate >= expirationDate) {
            return "Expired"
        }
        else if (currentDate >= expiringDate) {
            return "Expiring"
        } else {
            return "Fresh"
        }
    }
}