import { Component } from "@angular/core";
import { contacts } from '../data/contacts'

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
    imgMargin = 20
    applyStyle = true
    numbers = [1, 3, 4, 2]
    names = ['joydip', 'anil', 'sunil']
    contactData = contacts

    // changeHeaderValue(element: HTMLInputElement): void {
    //     console.log(element)
    //     this.title = element.value
    // }
    changeHeaderValue(val: string): void {
        this.title = val
        // for (let num of this.numbers) {
        //     console.log(num)
        // }
    }
}