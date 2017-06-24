import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

  constructor(private http: Http) { }

  getOfferingByWeekly(): Observable<any[]> {
    return this.http.get('api/offeringByWeekly')
        .map(this.extractData)
        .do(data => console.log('getDashboardWeekly: ' + JSON.stringify(data)))
        .catch(this.handleError);
  }

 getOfferingByMonthly(): Observable<any[]> {
    return this.http.get('api/offeringByMonthly')
        .map(this.extractData)
        .do(data => console.log('getDashboardMonthly: ' + JSON.stringify(data)))
        .catch(this.handleError);
  }
  
  getFamilyStat(): Observable<any[]> {
    return this.http.get('api/familyStat')
        .map(this.extractData)
        .do(data => console.log('getDashboardFamily: ' + JSON.stringify(data)))
        .catch(this.handleError);
  }

  private extractData(response:Response){
      let body = response.json();
      return body.data || {};
  }

  private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
   }

}
