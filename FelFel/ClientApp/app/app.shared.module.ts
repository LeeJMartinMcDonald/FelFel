import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule  } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';

import 'hammerjs';
import 'hammer-timejs';

import { AppConfig } from "./app.config";

import { AlertComponent } from "./components/alert/alert.component";
import { AppComponent } from "./components/app/app.component";
import { BatchesComponent } from "./components/batches/batches.component";
import { BatchAddComponent } from "./components/batch.add/batch.add.component";
import { SiteFooterComponent } from "./components/site.footer/site.footer.component";
import { SiteHeaderComponent } from "./components/site.header/site.header.component";
import { SiteMenuComponent } from "./components/site.menu/site.menu.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

import { AlertService } from "./services/alert.service";
import { BatchService } from "./services/batch.service";
import { ExternalResourceService } from "./services/external.resource.service";

@NgModule({
    declarations: [
        AlertComponent,
        AppComponent,
        BatchesComponent,
        BatchAddComponent,
        SiteFooterComponent,
        SiteHeaderComponent,
        SiteMenuComponent,
        WelcomeComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule, 
        CommonModule,
        DatePickerModule,
        DropDownsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        InputsModule,
        LabelModule,
        RouterModule.forRoot(
            [
                { path: "", redirectTo: "welcome", pathMatch: "full" },
                { path: "welcome", component: WelcomeComponent },
                { path: "batches", component: BatchesComponent },
                { path: "batch-add", component: BatchAddComponent },
                { path: "**", redirectTo: "welcome" }
            ],
            {
                 useHash: true
            }
        )
    ],
    providers: [
        AppConfig,

        AlertService,
        BatchService,
        ExternalResourceService
    ]
})
export class AppModuleShared {}