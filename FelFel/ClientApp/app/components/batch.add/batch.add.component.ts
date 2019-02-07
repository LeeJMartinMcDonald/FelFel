import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';

import { BatchNew } from "../../models/batch.new";
import { Product } from "../../models/product";

import { BatchService } from "../../services/batch.service";
import { ProductService } from "../../services/product.service";

@Component({
    selector: "batch-add",
    template: require("./batch.add.component.html")
})

export class BatchAddComponent implements OnInit{
    batchNew: BatchNew = new BatchNew();
    batchSubmitted = false;
    products: Product[];

    constructor(
        private readonly batchService: BatchService,
        private readonly productService: ProductService
    ) {
    }

    ngOnInit() {
        this.productService.getProducts().subscribe(products => {
            this.products = products
        })
    }

    reset(form: NgForm) {
        this.batchSubmitted = false;
        this.batchNew = new BatchNew();            
        form.reset();
    }

    save($event: any) {
        this.batchSubmitted = true;
        this.batchNew.checkedInDate = new Date();
        this.batchService.addNewBatch(this.batchNew).subscribe();
    }
}