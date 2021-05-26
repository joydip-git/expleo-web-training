import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductRoutesModule } from "./routes/product-routes.module";
import { ProductFilterPipe } from "./pipes/product-filter.pipe";


@NgModule({
    imports: [BrowserModule, ProductRoutesModule, FormsModule],
    exports: [],
    declarations: [
        ProductListComponent,
        AddProductComponent,
        UpdateProductComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    bootstrap: [ProductListComponent]
})
export class ProductsModule {

}