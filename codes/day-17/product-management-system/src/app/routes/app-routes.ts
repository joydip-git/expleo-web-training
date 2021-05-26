import { Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/homne' },
    { path: '**', component: PageNotFoundComponent }
]