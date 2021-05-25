import { Component } from "@angular/core";
@Component({
    selector: 'app-add',
    templateUrl: './add.component.html'
})
export class AddComponent {
    result = 0;

    add(first: any, second: any) {
        console.log(typeof first)
        this.result = parseInt(first) + parseInt(second)
    }
}