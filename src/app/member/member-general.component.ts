import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute,Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CodeService } from '../code/code.service';
import { MemberService } from './member.service';

import { IMemberGeneral } from './member';

@Component({
  selector: 'church-member-general',
  templateUrl: './member-general.component.html',
  styleUrls: ['./member-general.component.css']
})
export class MemberGeneralComponent implements OnInit {

@Input() data;
@Input() id;

  errorMessage: string;
  memberGeneralForm: FormGroup;
  memberGeneral:IMemberGeneral;
  familyId:number;

  relations:any[];

  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder,
              private codeService: CodeService,
              private memberService:MemberService,
              private router: Router) {}

  ngOnInit() : void {
      this.memberGeneral = this.data;
      this.familyId = this.id;

      this.memberGeneralForm = this.fb.group({
      id:this.id,  
      englishLastName: this.memberGeneral.englishLastName,
      englishFirstName: this.memberGeneral.englishFirstName,
      koreanLastName: this.memberGeneral.koreanLastName,
      koreanFirstName: this.memberGeneral.koreanFirstName,
      birthDate: this.memberGeneral.birthDate,
      birthPlace: this.memberGeneral.birthPlace,
      gender: this.memberGeneral.gender,
      relation: this.memberGeneral.relation,
      occupation: this.memberGeneral.occupation,
      createdDate: this.memberGeneral.createdDate,
      lastUpdatedDate: this.memberGeneral.lastUpdatedDate
    });

    this.memberService.getMemberGeneral(this.id)
      .subscribe((member:IMemberGeneral) => JSON.parse(JSON.stringify(member)),
      error => this.errorMessage = <any>error);

    this.getRelations();
    
  }
  // code
  getRelations():void {
    this.codeService.getRelations()
      .subscribe((relations:any[]) => this.onRelationRetrieved(relations),
      error => this.errorMessage = <any>error);
  }
  
  onRelationRetrieved(relations:any[]): void {
    let clone = JSON.parse(JSON.stringify(relations));
    this.relations = clone;
  }

  
  saveMemberGeneral():void {
    if (this.memberGeneralForm.dirty && this.memberGeneralForm.valid) {
      let f = Object.assign({}, this.memberGeneral, this.memberGeneralForm.value);

      this.memberService.saveMemberGeneral(f)
          .subscribe(
            ()=>this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );

    }

  }

  onSaveComplete() : void {
    this.memberGeneralForm.reset();
    this.router.navigate(['/families', this.id]);
    this.activeModal.close();
  }


}
