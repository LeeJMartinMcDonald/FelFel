import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';

import { BatchNew } from "../../models/batch.new";

import { BatchService } from "../../services/batch.service";

@Component({
    selector: "batch-add",
    template: require("./batch.add.component.html")
})

export class BatchAddComponent implements OnInit{
    batchNew: BatchNew = new BatchNew();
    batchSubmitted = false;

    constructor(
        private readonly batchService: BatchService
    ) {
    }

    ngOnInit() {
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