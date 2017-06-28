import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute,Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FamilyService } from './family.service';
import { MemberService } from '../member/member.service';
import { CodeService } from '../code/code.service';
import { IFamily } from './family';

import { MemberGeneralComponent } from '../member/member-general.component';

@Component({
  templateUrl: './family-edit.component.html',
  styleUrls: ['./family-edit.component.css']
})
export class FamilyEditComponent implements OnInit {

  pageTitle: string = 'Family Edit';
  familyForm: FormGroup;

  private sub: Subscription;
  errorMessage: string;
  family: IFamily;
  familyMembers:any[];
  states:any[];
  countries:any[];
  regions:any[];
  subregions:any[];
  regionFilter: number;

  constructor(private fb: FormBuilder,
    private familyService: FamilyService,
    private memberService: MemberService,
    private codeService: CodeService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal) { 
 
    }

  ngOnInit(): void {
    this.familyForm = this.fb.group({
      address1: ['', Validators.required],
      address2: '',
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required],
      homePhone: '',
      workPhone: '',
      cellPhone:'',
      faxNumber: '',
      region: '',
      subregion:'',
      createdDate: '',
      lastUpdatedDate: ''
    });

    this.sub = this.route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getFamilyById(id);
        this.getStates();
        this.getCountries();
        this.getRegions();
        this.getSubregions();
      }
    );


    this.familyForm.get('region').valueChanges
                         .subscribe(value => this.setSubregionFilter(value));
  }
  // code
  getStates():void {
    this.codeService.getStates()
      .subscribe((states:any[]) => this.onStateRetrieved(states),
      error => this.errorMessage = <any>error);
  }

  onStateRetrieved(states:any[]): void {
    let clone = JSON.parse(JSON.stringify(states));
    this.states = clone;
  }

  getCountries():void {
    this.codeService.getCountries()
      .subscribe((countries:any[]) => this.onCountryRetrieved(countries),
      error => this.errorMessage = <any>error);
  }

  onCountryRetrieved(countries:any[]): void {
    let clone = JSON.parse(JSON.stringify(countries));
    this.countries = clone;
  }

  getRegions():void {
    this.codeService.getRegions()
      .subscribe((regions:any[]) => this.onRegionRetrieved(regions),
      error => this.errorMessage = <any>error);
  }

  onRegionRetrieved(regions:any[]): void {
    let clone = JSON.parse(JSON.stringify(regions));
    this.regions = clone;
  }

  getSubregions():void {
    this.codeService.getSubregions()
      .subscribe((subregions:any[]) => this.onSubregionRetrieved(subregions),
      error => this.errorMessage = <any>error);
  }

  onSubregionRetrieved(subregions:any[]): void {
    let clone = JSON.parse(JSON.stringify(subregions));
    this.subregions =clone;

  }

  setSubregionFilter(regionId:number) : void {
    if(regionId && this.subregions) {
      this.regionFilter = regionId;
    }
    
  }
  //////////////////////////////////

  getFamilyById(id: number): void {
    this.familyService.getFamilyById(id)
      .subscribe((family: IFamily) => this.onFamilyByIdRetrieved(family),
      error => this.errorMessage = <any>error);
  }

  onFamilyByIdRetrieved(family: IFamily): void {
    if (this.familyForm) {
      this.familyForm.reset();
    }

    this.family = family;
    this.regionFilter = +family.region;

    if (this.family.id === 0 ) {
      this.pageTitle = 'Add Family';
    } else {
      this.pageTitle = `${this.family.address1}`;
    }

    this.familyForm.patchValue({
        id: this.family.id,
        address1: this.family.address1,
        address2: this.family.address2,
        city: this.family.city,
        state: this.family.state,
        zipcode: this.family.zipcode,
        country: this.family.country,
        homePhone: this.family.homePhone,
        workPhone: this.family.workPhone,
        cellPhone: this.family.cellPhone,
        faxNumber: this.family.faxNumber,
        region: this.family.region,
        subregion: this.family.subregion,
        createdDate: this.family.createdDate,
        lastUpdatedDate: this.family.lastUpdatedDate
   
    });

   this.getMemberByFamilyId(this.family.id);;
    
  }


  getMemberByFamilyId(familyId: number): void {
    this.memberService.getMemberByFamilyId(familyId)
      .subscribe((memberGeneral: any[]) => this.onMemberByFamilyIdRetrieved(memberGeneral),
      error => this.errorMessage = <any>error);
  }

  onMemberByFamilyIdRetrieved(members:any[]) : void {
      let clone = JSON.parse(JSON.stringify(members));
      this.familyMembers = clone;
      
  }

  saveFamily():void {
    if (this.familyForm.dirty && this.familyForm.valid) {
      let f = Object.assign({}, this.family, this.familyForm.value);

      this.familyService.saveFamily(f)
          .subscribe(
            ()=>this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );

    }

  }

  onSaveComplete() : void {
    this.familyForm.reset();
    this.router.navigate(['/families']);
  }

  editMemberGeneral(memberGeneral) : void {
    const modalRef = this.modalService.open(MemberGeneralComponent, {size:"lg"});
     modalRef.componentInstance.data = memberGeneral;
     modalRef.componentInstance.id = this.family.id;
     modalRef.result.then((result) => {
      this.getMemberByFamilyId(this.family.id);
    });
     
  }

  addMemberGeneral():void {
    const modalRef = this.modalService.open(MemberGeneralComponent, {size:"lg"});
    modalRef.componentInstance.data=[];
     modalRef.componentInstance.id = this.family.id;
     modalRef.result.then((result) => {
      this.getMemberByFamilyId(this.family.id);
    });
     
  }

}
