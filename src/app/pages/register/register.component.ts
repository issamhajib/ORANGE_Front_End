import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService:UserService
  ) { }

  form:any = {} ; 

    danger : boolean = false ;
    sucess : boolean = false ;
    message : string = '';
    confirmpassword : any ;

  ngOnInit() {
  }
  signup(){
    if(this.form.nom==null || this.form.prenom==null|| this.form.numPhone==null||this.form.dateNaissance==null|| this.form.email==null || this.form.password=='' ){
       this.message ="Registration Failed . Please verify your information !"
       this.sucess=false ;
       this.danger=true ;
    }else{
      if(this.form.password==this.confirmpassword){
        console.log(this.form)
        this.userService.addAgent(this.form).subscribe(data=>{
            console.log("operation : " + data);
            if(data){
                this.message ="Registration Success !  "
                this.sucess=true ;
                this.danger=false ;
            }else{
                this.message ="Registration Failed ! "
                this.sucess=false ;
                this.danger=true ;
            }
           })
      }else{
        this.message ="Registration Failed . Please verify your Password !"
        this.sucess=false ;
        this.danger=true ;
         }
        
    }
    
}

}
