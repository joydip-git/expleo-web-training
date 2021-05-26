import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { productRoutes } from "./product-routes";

@NgModule({
    imports: [RouterModule.forRoot(productRoutes)],
    exports: [RouterModule]
})
export class ProductRoutesModule {

}