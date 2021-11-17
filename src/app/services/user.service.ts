import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:80/api/agent';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient
    ) { }

  login(form:any){
    return this.http.get(API_URL+'/verification/'+form.username+'/'+form.password)
   }

   loginAgent(form:any){
    return this.http.get(API_URL+'/getAgent/'+form.username+'/'+form.password)
   }

   addAgent(form:any){
    return this.http.post(API_URL+'/save',form)
   }
}
