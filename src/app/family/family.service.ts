import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { IFamilies, IFamily } from './family';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class FamilyService {
  private baseUrl = 'api/families';
 
  constructor(private http: Http) { }

  getFamily(): Observable<IFamilies[]> {
    return this.http.get(this.baseUrl)
      .map(this.extractData)
      .do(data => console.log('getFamily: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getFamilyById(id: number): Observable<IFamily> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url)
      .map(this.extractData)
      .do(data => console.log('getFamilyById: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  saveFamily(family: IFamily): Observable<IFamily> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions( {headers : headers }) 
    return this.updateFamily(family, options);
  }

  updateFamily(family: IFamily, options: RequestOptions) {
    const url = `${this.baseUrl}/${family.id}`;
    return this.http.put(url, family, options)
      .map(() => family)
      .do(data => console.log('updateFamily: ' + JSON.stringify(data)))
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
