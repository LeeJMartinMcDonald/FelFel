import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { Batch } from "../../models/batch";
import { Product } from "../../models/product";

import { BatchService } from "../../services/batch.service";
import { ProductService } from "../../services/product.service";

@Component({
    selector: "product.inventory.by.batch",
    template: require("./product.inventory.by.batch.component.html")
})

export class ProductInventoryByBatch implements OnInit{
    batches: Batch[];
    product: Product;
    productId: number;

    constructor(
        private readonly batchService: BatchService,
        private readonly productService: ProductService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.productId = +params['id'];
        });

        this.productService.getProduct(this.productId).subscribe(product => {
            this.product = product;
        });

        this.batchService.getBatchesByProduct(this.productId).subscribe(batches => {
            this.batches = batches
        });
    }
}