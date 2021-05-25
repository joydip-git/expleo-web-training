import { Component } from "@angular/core";

@Component({
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    selector: 'app-root'
})
export class AppComponent {
    //type inference
    title = 'Welcome to Contact Management System'
    year = 2021
    paraWidth = 200
    imgPath = '../assets/images/headset.jfif'
    imgWidth = 50
    imgMargin = 2

    // changeHeaderValue(element: HTMLInputElement): void {
    //     console.log(element)
    //     this.title = element.value
    // }
    changeHeaderValue(val: string): void {
        this.title = val
    }
}