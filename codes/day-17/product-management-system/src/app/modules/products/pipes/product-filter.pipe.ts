import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'productfilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(records: any[], ...args: string[]): any[] {
        return args[0] !== '' && records.length > 0 ?
            records.filter(p => p.productName.toLocaleLowercase().indexOf(args[0].toLocaleLowerCase()) !== -1)
            : records;
    }
}