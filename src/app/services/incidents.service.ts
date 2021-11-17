import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:80/api/incident';


@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  constructor(private http: HttpClient) { }

  postIncidents(incident){
    return this.http.post(API_URL + "/save", incident)
   }

   incidentparAgent(i){
    return this.http.get(API_URL+ "/incidentDeclarerParAgent/"+i)
   }



}
