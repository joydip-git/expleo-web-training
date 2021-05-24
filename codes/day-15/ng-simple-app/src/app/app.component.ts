import { Component } from '@angular/core';

//decorator
@Component({
  selector: 'app-root', //custom HTML tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appHeader = 'welcome to angular'
  product = {
    name: '',
    id: 0,
    desc: '',
    price: 0
  }
  callMe(): void {
    alert('button clicked')
  }
}
