import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { catchError, map, tap, retry } from "rxjs/operators";

import { AppConfig } from "../app.config";

import { LoadingStatus } from "../enums/loading.status";

import { Product } from "../models/product";

import { AlertService } from "../services/alert.service";
import { BaseService } from "../services/base.service";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': "application/json" })
};

@Injectable()
export class ProductService extends BaseService {
    private productSubject = new BehaviorSubject<Product>(new Product());
    private productsSubject = new BehaviorSubject<Product[]>(new Array<Product>());

    constructor(
        private readonly appConfig: AppConfig,
        protected alertService: AlertService,
        private readonly httpClient: HttpClient
    ) {
        super(alertService);
    }

    getProducts(): Observable<Product[]> {
        this.loadProducts().subscribe();

        return this.productsSubject.asObservable();
    }

    loadProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(
            `${this.appConfig.apiProductUrl}GetProducts`,
            httpOptions)
            .pipe(
                tap(_ => {
                    this.productsSubject.next(_);
                }
            ),
            catchError(this.handleError<any>(`GetProducts`))
        );
    }

    getProduct(id: number): Observable<Product> {
        this.loadProduct(id).subscribe();

        return this.productSubject.asObservable();
    }

    loadProduct(id: number): Observable<Product> {
        return this.httpClient.get<Product>(
            `${this.appConfig.apiProductUrl}GetProduct/${id}`,
            httpOptions)
            .pipe(
            tap(_ => {
                this.productSubject.next(_);
            }
            ),
            catchError(this.handleError<any>(`GetProduct/${id}`))
        );
    }
}