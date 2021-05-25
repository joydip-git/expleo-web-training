import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CalculationModule } from "./calculation/calculation.module";
import { FormsModule } from "@angular/forms";
import { ContactsModule } from "./contacts/contacts.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CalculationModule, FormsModule, ContactsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}