import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { BatchItem } from "../../models/batch.item";

import { BatchService } from "../../services/batch.service";

@Component({
    selector: "batch.history",
    template: require("./batch.history.component.html")
})

export class BatchHistoryComponent implements OnInit{
    batchItems: BatchItem[];
    batchId: number;

    constructor(
        private readonly batchService: BatchService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.batchId = +params['id'];
        });

        this.batchService.getBatchItems(this.batchId).subscribe(batchItems => {
            this.batchItems = batchItems;
        });
    }
}