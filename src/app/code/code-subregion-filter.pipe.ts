import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subregionFilter'
})
export class SubregionFilterPipe implements PipeTransform {

  transform(value: any[], filterBy: number): any[] {
    filterBy = filterBy ? filterBy:null ;
    return filterBy ? value.filter((subregion:any) => 
      subregion.regionId.toString().indexOf(filterBy) !== -1) : value ;
  }

}
