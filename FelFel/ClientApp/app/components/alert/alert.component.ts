import { Component, OnInit } from "@angular/core";

import { AlertService } from "../../services/alert.service";

@Component({
    selector: "alert",
    template: require("./alert.component.html")
})

export class AlertComponent {
    message: any;

    constructor(
        private readonly alertService: AlertService
    ) {
    }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}