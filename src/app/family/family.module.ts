
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FamilySearchComponent } from './family-search.component';

import { FamilyService } from './family.service';
import { FamilyFilterPipe } from './family-filter.pipe';
import { SubregionFilterPipe } from '../code/code-subregion-filter.pipe';
import { FamilyEditComponent } from './family-edit.component';


import { MemberGeneralComponent } from '../member/member-general.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild([
      { path: 'families', component: FamilySearchComponent },
      { path: 'families/:id',
        component: FamilyEditComponent
      }
    ])
  ],
  declarations: [
    FamilySearchComponent,
    FamilyFilterPipe,
    FamilyEditComponent,
    SubregionFilterPipe
  ],
   entryComponents: [MemberGeneralComponent],
  providers: [
    FamilyService
  ]
})
export class FamilyModule { }
