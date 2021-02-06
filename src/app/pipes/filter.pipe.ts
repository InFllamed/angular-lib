import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(item: any[], search: string = ''): any[] {
    if (!search.trim())  {
      return item;
    }
    return item.filter(items => {
      return items.title.include(search);
    });
  }

}
