import { NgModule } from '@angular/core';
import { AddComponent } from './add/add.component';
import { SubtractComponent } from './subtract/subtract.component';

@NgModule({
    imports: [],
    exports: [AddComponent, SubtractComponent],
    declarations: [AddComponent, SubtractComponent]
})
export class CalculationModule { }
