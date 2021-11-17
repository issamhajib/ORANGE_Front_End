import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private router:Router,
    private userService:UserService
  ) {}

  username:any;
  password:string;

  danger : boolean = false ;
  sucess : boolean = false ;
  message : string = '';

form:any ={}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  validation(){
    if(this.form.username==null || this.form.password==null ){
      this.message ="Username or Password is empty  !"
      this.sucess=false ;
      this.danger=true ;
   }else{
    console.log(this.form)
    this.userService.login(this.form).subscribe( data =>{
      console.log(data)
      if(data==true){
        this.message ="Login succeful  !"
        this.sucess=true ;
        this.danger=false ;
        this.userService.loginAgent(this.form).subscribe(data=>{
          this.form =data  ;
          window.sessionStorage.removeItem("USER");
          window.sessionStorage.setItem("USER", JSON.stringify(data));
          this.router.navigate(['dashboard'])
        })
        
  
      }else{
        this.message ="Username or Password is invalide  !"
        this.sucess=false ;
        this.danger=true ;
      }
    })
  }
  }

}
