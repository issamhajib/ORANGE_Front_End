import { Component, OnInit } from '@angular/core';
import { EquipesService } from 'src/app/services/equipes.service';

@Component({
  selector: 'app-allincidents',
  templateUrl: './allincidents.component.html',
  styleUrls: ['./allincidents.component.css']
})
export class AllincidentsComponent implements OnInit {

  constructor(private equipeservice: EquipesService) { }

  ngOnInit(): void {
    this.allequipe()
  }

  allincidents :any 
  allequipe() {
    this.equipeservice.allIncidents().subscribe(data => {
      this.allincidents = data
      console.log(data);
      
    })
   
  }
}
