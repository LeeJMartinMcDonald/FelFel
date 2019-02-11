import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { Location } from "../../models/location";

import { LocationService } from "../../services/location.service";

@Component({
    selector: "batch.locations",
    template: require("./batch.locations.component.html")
})

export class BatchLocationsComponent implements OnInit{
    batchId: number;
    locations: Location[];

    constructor(
        private readonly locaitonService: LocationService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.batchId = +params['id'];
        });

        this.locaitonService.getLocationsWithQuantity(this.batchId).subscribe(locations => {
            this.locations = locations;
        });
    }
}