import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CalculationModule } from "./calculation/calculation.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CalculationModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}