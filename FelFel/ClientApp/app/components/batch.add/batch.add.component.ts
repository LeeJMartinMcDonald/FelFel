import { Component, OnInit } from "@angular/core";

import { BatchNew } from "../../models/batch.new";

import { BatchService } from "../../services/batch.service";

@Component({
    selector: "batch-add",
    template: require("./batch.add.component.html")
})

export class BatchAddComponent implements OnInit{
    batchNew: BatchNew = new BatchNew();

    constructor(
        private readonly batchService: BatchService
    ) {
    }

    ngOnInit() {

    }

    save($event: any) {
        console.log(this.batchNew);
        this.batchService.addNewBatch(this.batchNew).subscribe(result => {
            this.batchNew = new BatchNew();
        });
    }
}