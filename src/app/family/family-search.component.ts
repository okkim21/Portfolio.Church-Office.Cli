import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FamilyService } from './family.service';
import { IFamilies } from './family';

@Component({
  templateUrl: './family-search.component.html',
  styleUrls: ['./family-search.component.css']
})
export class FamilySearchComponent implements OnInit {
  errorMessage: string;
  familySearch: IFamilies[];
  listFilter: string;

  constructor(private familyService: FamilyService) { }

  ngOnInit():void {
    this.getFamily();
  }

  getFamily():void {
    this.familyService.getFamily()
    .subscribe((families:IFamilies[]) => this.onFamilySearchRetrieved(families),
      error => this.errorMessage = <any>error);
  }

  
  onFamilySearchRetrieved(families:IFamilies[]) : void {
      let clone = JSON.parse(JSON.stringify(families));
      this.familySearch = clone;
  }

}
