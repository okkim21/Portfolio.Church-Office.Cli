import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MemberService } from './member.service';
import { MemberGeneralComponent } from './member-general.component';

@NgModule({
  imports: [
    CommonModule, 
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'member', component: MemberGeneralComponent }
      
    ])
  ],
  declarations: [MemberGeneralComponent],
  providers: [
    MemberService
  ]
})
export class MemberModule { }