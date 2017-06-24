import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class CodeService {

  constructor(private http: Http) { }

  getStates(): Observable<any> {
    return this.http.get('api/states')
      .map(this.extractData)
      .do(data => console.log('getStates: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getCountries(): Observable<any> {
    return this.http.get('api/countries')
      .map(this.extractData)
      .do(data => console.log('getCountries: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getRegions(): Observable<any> {
    return this.http.get('api/regions')
      .map(this.extractData)
      .do(data => console.log('getRegions: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  getSubregions(): Observable<any> {
    return this.http.get('api/subregions')
      .map(this.extractData)
      .do(data => console.log('getSubregions: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  getRelations(): Observable<any> {
    return this.http.get('api/relations')
      .map(this.extractData)
      .do(data => console.log('getRelations: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private extractData(response: Response) {
    let body = response.json();
    return body.data || {};
  }

  private handleError(error: Response): Observable<any> {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
