import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { FileService } from '../../shared_services/file.service';
import { ClassesService } from '../../shared_services/classes.service';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {
  enseignants:any;
  listesClasses:any;
  login:string;
  pass:string;
  prof:string;
  classes:string;
  principales:any;
  occuper:boolean = false;

  constructor(private route:Router,private fileservice:FileService,private classe:ClassesService) { }

  ngOnInit() {
    this.verification();
    this.getAllTeacher();
    this.loadClasse();
   // this.login = this.getKeycode();
   // this.pass = this.getKeycode();
    this.allPrincipale();
    //alert(this.login +'______'+this.pass);
  }

  verification(){
    if(sessionStorage.getItem('super') == null){
      this.route.navigateByUrl("/admin/(adminOutlet:auth)");
    }
  }
  getAllTeacher(){
    this.fileservice.getAllEnseignant().subscribe(
      data => { this.enseignants = data; console.log(this.enseignants);}
    );
  }

  loadClasse(){
    this.classe.getAllClasses().subscribe(
      data => { this.listesClasses = data },
      error => {console.log('Une erreur s est produite')},
      () => { console.log('chargement des produits effectuer')}
    );
  }

  getKeycode(){
    const chars = '0123456789abcdefghijklmnopkwxzjAZERTYUIOPMLKJHGFDSQWXCVBN';
    var result = '';
    for(var i = 6;i>0;i--){
      result += chars[Math.floor(Math.random()*chars.length)];
    }
    
    return result;
  }

  savePrincipale(){
    this.fileservice.savePrincipale(this.prof,this.classes).subscribe(
      data => { this.allPrincipale();this.initialisation(); }
    );
  }

  allPrincipale(){
    this.fileservice.allPrincipale().subscribe(
      data => { this.principales = data;}
    );

  }

  initialisation(){
    this.prof=null;
    this.classes = null;
  }

  controlclasse(cls:string){
    this.occuper = false;
    for(let c of this.principales){
      if(c.classes.nom == cls){
        this.occuper = true;
      }
      
    }

  }

}
