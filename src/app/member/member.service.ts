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
  private baseUrl = 'api/memberGeneral';

  getMemberByFamilyId(familyId: number): Observable<any[]> {
    const url = `${this.baseUrl}`;
    return this.http.get(url)
      .map(this.extractData)
      .do(data => console.log('getMemberByFamilyId: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  saveMemberGeneral(memberGeneral: IMemberGeneral): Observable<IMemberGeneral> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions( {headers : headers }) 
      if (memberGeneral.id === 0) {
            return this.createMember(memberGeneral, options);
        }

    return this.updateMemberGeneral(memberGeneral, memberGeneral.id, options);
  }

  createMember(memberGeneral: IMemberGeneral, options: RequestOptions) {
      memberGeneral.id = undefined;
        return this.http.post(this.baseUrl, memberGeneral, options)
            .map(this.extractData)
            .do(data => console.log('createMember: ' + JSON.stringify(data)))
            .catch(this.handleError);
  }
  
  updateMemberGeneral(memberGeneral: IMemberGeneral,id:number, options: RequestOptions) {
    const url = `${this.baseUrl}/${id}`;
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
