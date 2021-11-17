import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:80/api/membre';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  suppMembreEquipe(i:any , ii:any){
    return this.http.post(API_URL+'/deletmemberfromATeam/'+i+'/'+ii,null)
   }

   ajouterMembreEquipe(i:any , ii){
    return this.http.post(API_URL+'/addmberToATeam/'+i+'/'+ii,null)
   }

   membreSansEquipes(i){
    return this.http.get(API_URL+'/membersSansEquipe/'+i)
   }

   allMembers(){
    return this.http.get(API_URL+'/all')
   }
   getEquipeOfMember(i){
    return this.http.get(API_URL+'/getEquipOf/'+i)
   }
   saveMember(member){
    return this.http.post(API_URL+'/save/',member)
   }
   getMember(i){
    return this.http.get(API_URL+'/getMember/'+i)
   }
   supprimerMember(i){
    return this.http.delete(API_URL+'/deleteMember/'+i)
   }
}
