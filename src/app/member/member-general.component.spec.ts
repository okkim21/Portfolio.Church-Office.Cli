import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberGeneralComponent } from './member-general.component';

describe('MemberGeneralComponent', () => {
  let component: MemberGeneralComponent;
  let fixture: ComponentFixture<MemberGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
