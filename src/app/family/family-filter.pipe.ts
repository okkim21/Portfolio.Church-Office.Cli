import { Pipe, PipeTransform } from '@angular/core';

import { IFamilies } from './family';

@Pipe({
  name: 'familyFilter'
})
export class FamilyFilterPipe implements PipeTransform {

  transform(value: IFamilies[], filterBy: string): IFamilies[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase():null ;

    return filterBy ? value.filter((family:IFamilies) => 
      family.englishFirstName.toLocaleLowerCase().indexOf(filterBy) !== -1 || family.englishLastName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value ;
  }

}
