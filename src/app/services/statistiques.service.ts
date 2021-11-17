import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:80/api/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  constructor(private http: HttpClient) { }

  infos(){
    return this.http.get(API_URL+'/first')
   }
}
