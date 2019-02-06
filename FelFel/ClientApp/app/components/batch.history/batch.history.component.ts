import { Component, OnInit } from "@angular/core";

import { Batch } from "../../models/batch";

import { BatchService } from "../../services/batch.service";

@Component({
    selector: "batch.history",
    template: require("./batch.history.component.html")
})

export class BatchHistoryComponent implements OnInit{
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