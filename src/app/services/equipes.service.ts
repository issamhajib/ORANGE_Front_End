import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:80/api/equipe';
const API_URL2 = 'http://localhost:80/api/membre';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {

  constructor(private http: HttpClient) { }

  allEquipes(){
    return this.http.get(API_URL+'/all/')
   }

   membreEquipes(i:any){
    return this.http.get(API_URL+'/membersEquipe/'+i)
   }

   addEquipe(equipe:any){
    return this.http.post(API_URL+'/save',equipe)
   }

   supprimerEquipe(i){
    return this.http.delete(API_URL2+'/deleteEquipe/'+i)
   }
   allIncidents(){
    return this.http.get('http://localhost:80/api/incident/all')
   }

}
