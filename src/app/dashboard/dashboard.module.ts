import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  declarations: [ DashboardComponent ]
  ,
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
