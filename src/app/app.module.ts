import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Feature Modules */
import { DashboardModule } from './dashboard/dashboard.module';
import { FamilyModule } from './family/family.module';
import { CodeModule } from './code/code.module';
import { MemberModule } from './member/member.module';
import { InMemoryChurchData } from './in-memory-church-data';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DashboardModule,
    FamilyModule,
    CodeModule,
    MemberModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryChurchData),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
