import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Batch } from "../../models/batch";
import { BatchItem } from "../../models/batch.item";
import { BatchUpdateReason } from "../../models/batch.update.reason";
import { Location } from "../../models/location";

import { BatchService } from "../../services/batch.service";
import { LocationService } from "../../services/location.service";

@Component({
    selector: "batch-update",
    template: require("./batch.update.component.html")
})

export class BatchUpdateComponent implements OnInit{
    batch: Batch;
    batchItem: BatchItem = new BatchItem();
    batchItemSubmitted = false;
    batchId: number;
    batchUpdateReasons: BatchUpdateReason[];
    locations: Location[];

    constructor(
        private readonly batchService: BatchService,
        private readonly locationService: LocationService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.batchId = +params['id'];
        });
        this.batchItem.batchId = this.batchId;

        this.batchService.getBatch(this.batchId).subscribe(batch => {
            this.batch = batch
        });

        this.batchService.getBatchUpdateReasons().subscribe(reasons => {
            this.batchUpdateReasons = reasons;
        });

        this.locationService.getLocations().subscribe(locations => {
            this.locations = locations;
        });
    }

    reset(form: NgForm) {
        this.batchItemSubmitted = false;
        this.batchItem = new BatchItem();   
        this.batchItem.id = this.batchId;
        form.reset();
    }

    save($event: any) {
        this.batchItemSubmitted = true;
        this.batchService.addBatchItem(this.batchItem).subscribe(result => {
            this.reloadBatchDetails();
        });
    }

    reloadBatchDetails() {
        this.batchService.loadBatch(this.batchId).subscribe(batch => {
            this.batch = batch
        });
    }
}