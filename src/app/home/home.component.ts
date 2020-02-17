import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ParametreService } from '../shared_services/parametre.service';
import { FileService } from '../shared_services/file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  i:Number=0;
  id:Number;
  user:any;

  constructor(private route:Router,private param:ParametreService,private db:FileService) { }

  ngOnInit() {
    this.id = this.param.getIdUser();
    if(this.id){
      this.getStudentById(this.id);
    }else{
      this.user = {"nom":"inconnu","login":"inconnu"};
    }
    
    
  }
  arret(){
    this.route.navigateByUrl("/login");
  }

  getStudentById(k:Number){
    this.db.getStudentById(k).subscribe(
      data => { this.user = data, console.log(this.user)},
      error => {console.log('Une erreur s est produite')},
      () => { console.log('chargement des produits effectuer')}
    );
  }
 

}
