import { Component, OnInit } from "@angular/core";

import { Batch } from "../../models/batch";

import { BatchService } from "../../services/batch.service";

@Component({
    selector: "batches",
    template: require("./batches.component.html")
})

export class BatchesComponent implements OnInit{
    batches: Batch[];

    constructor(
        private readonly batchService: BatchService
    ) {
    }

    ngOnInit() {
        this.batchService.getBatches().subscribe(batches => {
            this.batches = batches;
        });
    }

    getFreshness(batch: Batch) {
        var currentDate: Date = new Date();
        var expirationDate: Date = new Date(batch.expirationDate);
        var expiringDate: Date = new Date(expirationDate);

        expiringDate.setDate(expiringDate.getDate() - batch.expiringTime)

        if (currentDate >= expirationDate) {
            return "Expired"
        }
        else if (currentDate >= expiringDate){
            return "Expiring"
        } else {
            return "Fresh"
        }
    }
}