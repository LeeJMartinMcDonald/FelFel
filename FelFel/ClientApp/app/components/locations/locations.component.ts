import { Component, OnInit } from "@angular/core";

import { Location } from "../../models/location";

import { LocationService } from "../../services/location.service";

@Component({
    selector: "locations",
    template: require("./locations.component.html")
})

export class LocationsComponent implements OnInit{
    locations: Location[];

    constructor(
        private readonly locaitonService: LocationService
    ) {
    }

    ngOnInit() {
        this.locaitonService.getLocationsWithQuantity().subscribe(locations => {
            this.locations = locations;
        });
    }
}