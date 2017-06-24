import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DashboardService } from './dashboard.service';


@Component({
  selector: 'church-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  errorMessage: string;
  
  constructor(private dashboardService:DashboardService) { }

  ngOnInit():void {
   this.getOfferingByWeekly();
   this.getOfferingByMonthly();
   this.getFamilyStat();
  }
  // Offering by Weekly
  public barChartWeeklyData:any[];
  public barChartWeeklyLabels:string[] = ['2nd week of Feb', '3th week of Feb', '4th Week of Feb', '1st Week of Mar'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  getOfferingByWeekly():void{
     this.dashboardService.getOfferingByWeekly()
    .subscribe( (offeringByWeekly:any[]) => this.onOfferingWeeklyRetrieved(offeringByWeekly),
      error => this.errorMessage = <any>error);
  }

  onOfferingWeeklyRetrieved(offeringByWeekly:any[]) : void {
      let clone = JSON.parse(JSON.stringify(offeringByWeekly));
      this.barChartWeeklyData = clone;
  }
  // Offering by Monthly
  public barChartMonthlyData:any[];
  public barChartMonthlyLabels:string[] = ['206/11', '2016/12', '2017/01', '2017/02'];

  getOfferingByMonthly():void{
     this.dashboardService.getOfferingByMonthly()
    .subscribe( (offeringByMonthly:any[]) => this.onOfferingMonthlyRetrieved(offeringByMonthly),
      error => this.errorMessage = <any>error);
  }

  onOfferingMonthlyRetrieved(offeringByMonthly:any[]) : void {
      let clone = JSON.parse(JSON.stringify(offeringByMonthly));
      this.barChartMonthlyData = clone;
  }

  // FAMILY STAT
  public lineChartData:Array<any>;
  public lineChartLabels:Array<any> = ['2016/11', '2016/12', '2017/01', '2017/02', '2017/03', '2017/04'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  getFamilyStat():void {
      this.dashboardService.getFamilyStat()
      .subscribe( (familyStat:any[]) => this.onFamilyStatRetrieved(familyStat),
      error => this.errorMessage = <any>error);
  }
  
  onFamilyStatRetrieved(familyStat:Array<any>) : void {
      let clone = JSON.parse(JSON.stringify(familyStat));
      this.lineChartData = clone;
  }

}

