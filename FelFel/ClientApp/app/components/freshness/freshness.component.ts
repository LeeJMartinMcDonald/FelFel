import { Component, OnInit } from "@angular/core";

import { Batch } from "../../models/batch";

import { BatchService } from "../../services/batch.service";
import { forEach } from "@angular/router/src/utils/collection";

@Component({
    selector: "freshness",
    template: require("./freshness.component.html")
})

export class FreshnessComponent implements OnInit{
    batches: Batch[];
    fresh: number = 0;
    expiring: number = 0;
    expired: number = 0;

    constructor(
        private readonly batchService: BatchService
    ) {
    }

    ngOnInit() {
        this.batchService.getBatches().subscribe(batches => {
            this.batches = batches;
            this.expired = 0;
            this.expiring = 0;
            this.fresh = 0;

            this.batches.forEach(batch => {
                // TODO: Refactor - move date casting into service when data is retrieved
                var currentDate: Date = new Date();
                var expirationDate: Date = new Date(batch.expirationDate);
                var expiringDate: Date = new Date(expirationDate);

                expiringDate.setDate(expiringDate.getDate() - batch.expiringTime)

                if (currentDate >= expirationDate) {
                    this.expired++;
                }
                else if (currentDate >= expiringDate) {
                    this.expiring++;
                } else {
                    this.fresh++;
                }
            });
        });
    }
}