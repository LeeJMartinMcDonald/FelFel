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
}