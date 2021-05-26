import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CalculationModule } from "./calculation/calculation.module";
import { FormsModule } from "@angular/forms";
import { ContactsModule } from "./contacts/contacts.module";
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutesModule } from "./approutes.module";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
    declarations: [AppComponent, HomeComponent, PagenotfoundComponent, DashboardComponent],
    imports: [BrowserModule, CalculationModule, FormsModule, ContactsModule, AppRoutesModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}