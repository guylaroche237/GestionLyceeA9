import { Component, OnInit } from '@angular/core';
import { ClassesService} from '../shared_services/classes.service';
import { Classes } from '../classes/classes';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { ParametreService } from '../shared_services/parametre.service';
import { Matiere } from '../classes/matiere';
import { FileService } from '../shared_services/file.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //private listesClasses :string[] = ['6eme','5eme','4eme','3eme','2nd','1ere','Tle'];
  private listesClasses :Classes[];
  private etat:boolean=false;
  private cpt:boolean=false;
  private ens:boolean=false;
  private for:boolean=false;
  private bib:boolean=false;
  user_connect:any;
  
  
  constructor(private claservice:ClassesService,private router:Router,private Param:ParametreService,private service:FileService) { }

  ngOnInit() {
  //  this.initialisation();
    this.findUserConnect();
  }
  on(){
    this.etat = !this.etat;

  }
  onCompte(){ this.cpt = ! this.cpt;}
  onEns(){this.ens = !this.ens;}
  onForum(){this.for= ! this.for;}
  onBiblio(){this.bib = !this.bib;}
  
  initialisation(){
    this.claservice.getAllClasses().subscribe(
      data => { this.listesClasses = data },
      error => {console.log('Une erreur s est produite')},
      () => { console.log('chargement des produits effectuer')}
    );
  }

  sendName(val){
    this.Param.setName_classe(val);

  }

  findUserConnect(){
    this.service.getStudentByLoginAndPassword(sessionStorage.getItem('login'),sessionStorage.getItem('password')).subscribe(
      data =>{ this.user_connect = data;}
    );
    
  }
  


}
