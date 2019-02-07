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
import { BatchHistoryComponent } from "./components/batch.history/batch.history.component";
import { BatchUpdateComponent } from "./components/batch.update/batch.update.component";
import { ProductComponent } from "./components/products/products.component";
import { ProductInventoryByBatch } from "./components/product.inventory.by.batch/product.inventory.by.batch.component";
import { SiteFooterComponent } from "./components/site.footer/site.footer.component";
import { SiteHeaderComponent } from "./components/site.header/site.header.component";
import { SiteMenuComponent } from "./components/site.menu/site.menu.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

import { AlertService } from "./services/alert.service";
import { BatchService } from "./services/batch.service";
import { ProductService } from "./services/product.service";
import { ExternalResourceService } from "./services/external.resource.service";

@NgModule({
    declarations: [
        AlertComponent,
        AppComponent,
        BatchesComponent,
        BatchAddComponent,
        BatchHistoryComponent,
        BatchUpdateComponent,
        ProductComponent,
        ProductInventoryByBatch,
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
                { path: "batch-history/:id", component: BatchHistoryComponent },
                { path: "batch-update/:id", component: BatchUpdateComponent },
                { path: "products", component: ProductComponent },
                { path: "product-inventory-by-batch/:id", component: ProductInventoryByBatch },
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
        ExternalResourceService,
        ProductService
    ]
})
export class AppModuleShared {}