import { Component, OnInit } from '@angular/core';
import { ParametreService } from 'src/app/shared_services/parametre.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {
  private sale:string;


  constructor(private param:ParametreService) { }

  ngOnInit() {
    
    setInterval(()=>{
      this.sale = this.param.getName_classe();
      
    },4000)
  }

}
