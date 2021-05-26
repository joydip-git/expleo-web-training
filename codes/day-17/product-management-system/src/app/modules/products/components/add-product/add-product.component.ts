import { Component } from '@angular/core';
import { updateProducts } from 'src/data/products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  submitData(formData: any) {
    console.log(formData)
    updateProducts(formData)
  }
}
