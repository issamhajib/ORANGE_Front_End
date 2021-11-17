import { Component, OnInit } from '@angular/core';
import { jsonpFactory } from '@angular/http/src/http_module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EquipesService } from 'src/app/services/equipes.service';
import { MemberService } from 'src/app/services/member.service';
import { StatistiquesService } from 'src/app/services/statistiques.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  constructor(private equipeservice: EquipesService,
    private memberservice: MemberService,
    private statservice:StatistiquesService,
    private modalService: NgbModal) { }

  form: any
  addequipe :any ={}

  equipeModifie: any
  equipeajouter: any

  showicons : boolean = false ;

  membersEquipe: any
  membersSansEquipes: any = {}

  infos:any ;

  allmembers : any 


  

  ngOnInit(): void {
    this.allequipe()
    
  }

  infosSt(){
this.statservice.infos().subscribe(rs=>{
  this.infos=rs ;
})
  }

  allequipe() {
    this.equipeservice.allEquipes().subscribe(data => {
        this.form = data
        
        for(let i=0 ; i < Object.keys(this.form).length ; i++){
          this.form[i].members=[]
          this.equipeservice.membreEquipes(this.form[i].id).subscribe(data=>{
            this.form[i].members = data 
           // this.form[i].members=this.form[i].members.json()
          
           })
           }
           console.log(this.form);
           
          })
   
   
 }
  
   

  equipeModification(i, id: any, content) {
    this.equipeModifie = this.form[i]
    this.membersEquipe = this.form[i].members
    console.log(this.equipeModifie)
    console.log(this.membersEquipe);

    this.openXl(content)
  }

  suppMembEquipe(id: any) {
    Swal.fire({
      title: 'Retirer un Membre ',
      text: "Retirer un membre de cette equipe ! ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui , Retirer  ce membre de cette equipe !'
    }).then((result) => {
      console.log(result)
      if (result.isConfirmed) {
        this.memberservice.suppMembreEquipe(id , this.equipeModifie.id).subscribe(data => {
          if (data) {
            Swal.fire(
              'Retiré!',
              'Membre retiré de cette equipe.',
              'success'
            )
            this.allequipe()
            this.equipeservice.membreEquipes(this.equipeModifie.id).subscribe(data => {
              this.membersEquipe = data
              console.log(this.membersEquipe)

            })
          }
        })
      }
    })
  }

  equipeAjouter(i,content){
    this.equipeajouter=this.form[i]
    console.log(this.equipeajouter);
    
    this.memberservice.membreSansEquipes(this.equipeajouter.id).subscribe(data =>{
      this.membersSansEquipes=data
      this.openXl(content)
    })
    


    
    
  }

  ajouterMembers(idmembers:any , idequipe:any){
    console.log(idequipe +'--'+ idmembers);
    
    this.memberservice.ajouterMembreEquipe(idmembers,idequipe).subscribe(data =>{
      Swal.fire(
        'Ajouté!',
        'Membre ajouté de cette equipe.',
        'success'
      )
      this.memberservice.membreSansEquipes(idequipe).subscribe(data =>{
        this.membersSansEquipes=data
        this.allequipe()
       })
      
    })



  }


  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
  
  addEquip(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    if(this.addequipe.nomEquipe==null){
Toast.fire({
      icon: 'error',
      title: "Nom d'équipe invalide ! "
    })
}else{
  this.equipeservice.addEquipe(this.addequipe).subscribe(data =>{
    Toast.fire({
      icon: 'success',
      title: "Equipe ajouté ! "
    })
    this.allequipe()
  })
}
  }

  supprimerEquipe(equipe:any){
    Swal.fire({
      title: 'Supprimé une équipe ',
      text: "Vous voulez supprimez "+ equipe.nomEquipe+" ! ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui , Supprimé '
    }).then((result) => {
      if (result.isConfirmed) {
        this.equipeservice.supprimerEquipe(equipe.id).subscribe(rs =>{
          this.allequipe()
          Swal.fire(
            'Supprimé !',
            'Equipe Supprimé ',
            'success'
          )
        })
      }
    })
  }


}
