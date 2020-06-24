import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined, isArray, isNull } from 'util';
@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {
  transform(items: Array<any>, field: string, searchText: string): any[] {
    if (isUndefined(items) || isNull(items) || !isArray(items) || items.length === 0) {return []; }
    if (isUndefined(field) || isNull(field) || field === '') {return items; }
    if (isUndefined(searchText) || isNull(searchText) || searchText === '') {return items; }
    if (!items[0].hasOwnProperty(field)) {return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return (it[field]).toLowerCase().includes(searchText);
      });
    }
}
