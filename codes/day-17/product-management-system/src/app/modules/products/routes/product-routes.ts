import { Routes } from "@angular/router";
import { AddProductComponent } from "../components/add-product/add-product.component";
import { ProductDetailComponent } from "../components/product-detail/product-detail.component";
import { ProductListComponent } from "../components/product-list/product-list.component";
import { UpdateProductComponent } from "../components/update-product/update-product.component";

export const productRoutes: Routes = [
    { path: 'products/view', component: ProductListComponent },
    { path: 'products/add', component: AddProductComponent },
    { path: 'products/view/:id', component: ProductDetailComponent },
    { path: '/products/update/:id', component: UpdateProductComponent }
]