import { NgModule } from "@angular/core";
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
    imports: [],
    exports: [],
    declarations: [
        ProductListComponent,
        AddProductComponent
    ],
    bootstrap: [ProductListComponent]
})
export class ProductsModule {
    submitData(productData: any) {

    }
}