var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import 'hammerjs';
import 'hammer-timejs';
import { AppConfig } from "./app.config";
import { AlertComponent } from "./components/alert/alert.component";
import { AppComponent } from "./components/app/app.component";
import { BatchesComponent } from "./components/batches/batches.component";
import { SiteFooterComponent } from "./components/site.footer/site.footer.component";
import { SiteHeaderComponent } from "./components/site.header/site.header.component";
import { SiteMenuComponent } from "./components/site.menu/site.menu.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { AlertService } from "./services/alert.service";
import { BatchService } from "./services/batch.service";
import { ExternalResourceService } from "./services/external.resource.service";
var AppModuleShared = /** @class */ (function () {
    function AppModuleShared() {
    }
    AppModuleShared = __decorate([
        NgModule({
            declarations: [
                AlertComponent,
                AppComponent,
                BatchesComponent,
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
                RouterModule.forRoot([
                    { path: "", redirectTo: "welcome", pathMatch: "full" },
                    { path: "welcome", component: WelcomeComponent },
                    { path: "batches", component: BatchesComponent },
                    { path: "**", redirectTo: "welcome" }
                ], {
                    useHash: true
                })
            ],
            providers: [
                AppConfig,
                AlertService,
                BatchService,
                ExternalResourceService
            ]
        })
    ], AppModuleShared);
    return AppModuleShared;
}());
export { AppModuleShared };
//# sourceMappingURL=app.shared.module.js.map