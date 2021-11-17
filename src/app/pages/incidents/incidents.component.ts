import { Component, OnInit } from '@angular/core';
import { EquipesService } from 'src/app/services/equipes.service';
import { IncidentsService } from 'src/app/services/incidents.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {

  constructor(private equipeservice: EquipesService,
    private incidentservice : IncidentsService
    ) { }
 
  equipesselected : any  = [{}]
  
  show : boolean = false

  equipJson: any[] 

  allequipes:any 
  i:any = 0 
  user : any 
  incident : any = {}


  ngOnInit(): void {
    this.allequipe()
    this.user=JSON.parse(window.sessionStorage.getItem("USER"))
    console.log(this.user);
    
  }

  allequipe() {
    this.equipeservice.allEquipes().subscribe(data => {
      this.allequipes = data
      console.log(this.allequipes)
      this.equipJson = Array.of(this.allequipes);
      console.log(this.equipJson);
    })
   
  }

  onChange(deviceValue) {
    console.log(deviceValue);
    this.incident.criticite=deviceValue
 
    
}

onChangee(deviceValue) {
  this.show=true
  console.log(this.allequipes[deviceValue]);
  
  this.equipesselected[this.i]=this.allequipes[deviceValue]
  this.allequipes.splice(deviceValue,1); 
  this.i=this.i+1 
  

  
  console.log(this.equipJson.length);
 
  
}

onCheckboxChange(e ,equipe , ii) {
  this.show=true
  if (e.target.checked) {
   console.log(this.allequipes[ii]+ "checked");
   this.equipesselected[this.i]= this.allequipes[ii]
   this.i=1+this.i
  } else {
   console.log(this.allequipes[ii]+ "Unchecked");
   let index = this.equipesselected.findIndex(rank => rank === this.allequipes[ii]);
   console.log(index);
   this.equipesselected.splice(index,1); 
   this.i=this.i-1
   
     
  }
}

postIncident(){
this.incident.dateIncidents= new Date 
this.incident.agent = {}
this.incident.agent = this.user
this.incident.equipes = []
this.incident.equipes = this.equipesselected
console.log(this.incident);
this.incidentservice.postIncidents(this.incident).subscribe(data =>{
  console.log(data);
  
})

}
}
