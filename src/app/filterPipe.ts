import { Pipe, PipeTransform } from '@angular/core';
import { ICoins } from './icoins';


@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(value: ICoins[], search: string): ICoins[] {
        if (!search) {
            return value; 
        }

        search = search.toLowerCase();
        return value.filter(coin => coin.name?.toLowerCase().includes(search));
    }
}
