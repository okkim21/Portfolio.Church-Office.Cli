import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { IMemberGeneral } from './member';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class MemberService {

  constructor(private http:Http) { }
  private baseUrl = 'api/families/familyMember';

  
  getMemberGeneral(id: number): Observable<IMemberGeneral> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url)
      .map(this.extractData)
      .do(data => console.log('getmemberGeneral: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  saveMemberGeneral(memberGeneral: IMemberGeneral): Observable<IMemberGeneral> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions( {headers : headers }) 
    return this.updateMemberGeneral(memberGeneral, options);
  }

  updateMemberGeneral(memberGeneral: IMemberGeneral, options: RequestOptions) {
    const url = `${this.baseUrl}/${memberGeneral.personalId}`;
    return this.http.put(url, memberGeneral, options)
      .map(() => memberGeneral)
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
