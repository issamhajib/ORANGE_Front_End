import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EquipesService } from 'src/app/services/equipes.service';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';
import { createEnumMember } from 'typescript';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {
  constructor(private equipeservice: EquipesService,
    private memberservice: MemberService,
    private modalService: NgbModal,
    private route: ActivatedRoute) { }

  form: any
  membreAjouter : any = {}
  addmember :any ={}

  memberModifie: any
  memberajouter: any

  membersEquipe: any
  membersSansEquipes: any

  voirEquipe:any
  membreVoirEquipe : any

  allequipes:any 


 closeResult: string;
  
  

  ngOnInit(): void {
    this.allmembers()
    this.allequipe()
    this.membreAjouter.equipe={ 
      id : null
    }

    

  }
  allequipe() {
    this.equipeservice.allEquipes().subscribe(data => {
      this.allequipes = data
      console.log(this.allequipes)
    })
   
  }

  allmembers() {
    this.memberservice.allMembers().subscribe(data => {
      this.form = data
    
      console.log(this.form)
      
      
    })
  }

  open(content, type, modalDimension) {
    this.membreAjouter = {}
    this.membreAjouter.equipe={ 
      id : null
    }
    if (modalDimension === 'sm' && type === 'modal_mini') {
        this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
            this.closeResult = 'Closed with: $result';
        }, (reason) => {
            this.closeResult = 'Dismissed $this.getDismissReason(reason)';
        });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
          this.closeResult = 'Closed with: $result';
      }, (reason) => {
          this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else {
        this.modalService.open(content,{ centered: true }).result.then((result) => {
            this.closeResult = 'Closed with: $result';
        }, (reason) => {
            this.closeResult = 'Dismissed $this.getDismissReason(reason)'
        });
    }

    


}

supprimerMember(member:any){
  Swal.fire({
    title: 'Supprimé un membre',
    text: "Vous voulez supprimez "+ member.nom + " "+ member.prenom+" ! ",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui , Supprimé '
  }).then((result) => {
    if (result.isConfirmed) {
      this.memberservice.supprimerMember(member.id).subscribe(rs =>{
        this.allmembers()
        Swal.fire(
          'Supprimé !',
          'Membre Supprimé ',
          'success'
        )
      })
    }
  })
}

createMember(){
console.log(this.  membreAjouter);
if(this.membreAjouter.nom==null || this.membreAjouter.prenom ==null|| this.membreAjouter.dateNaissance ==null || this.membreAjouter.numPhone ==null){
  Swal.fire(
    'Informations invalides !',
    'Verifiez les informations saisies ',
    'error'
  )
}else{
  if(this.membreAjouter.equipe.id==null ){
    Swal.fire({
      title: 'Membre sans Equipe',
      text: this.membreAjouter.nom + " "+this.membreAjouter.prenom + " sera ajouté sans Equipe ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui , Ajouté!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.memberservice.saveMember(this.membreAjouter).subscribe(rs =>{
          this.allmembers()
          Swal.fire(
            'Ajouté !',
            'Membre ajouté sans Equipe ',
            'success'
          )
        })
      }
    })

  }else{
    this.memberservice.saveMember(this.membreAjouter).subscribe(rs =>{
      Swal.fire(
        'Ajouté !',
        'Membre ajouté ',
        'success'
      )
    })
  }
  
}

}

voirEquipes(member , content){
  this.membreVoirEquipe = member
  this.voirEquipe=member.equipes
  this.openXl(content)

}
openXl(content) {
  this.modalService.open(content, { size: 'xl' });
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
      this.memberservice.suppMembreEquipe(this.membreVoirEquipe.id , id).subscribe(data => {
        if (data) {
          Swal.fire(
            'Retiré!',
            'Membre retiré de cette equipe.',
            'success'
          )
          this.allmembers()
          this.equipeservice.membreEquipes(this.membreVoirEquipe.id).subscribe(data => {
            this.voirEquipe = data
            

          })
        }
      })
    }
  })
}

}
