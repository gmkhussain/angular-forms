import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { User } from './user'

@Injectable({
  providedIn: 'root'
})

export class EnrollmentService {

  constructor(
    private _http: HttpClient
  ) { }

  _url = ''

  enroll( user: User ) {
    return this._http.post<any>(this._url, user)    
  }

}
