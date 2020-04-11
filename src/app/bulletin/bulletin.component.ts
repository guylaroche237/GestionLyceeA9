import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../shared_services/classes.service';
import { FileService } from '../shared_services/file.service';
import { from } from 'rxjs';
import { AdminService } from '../shared_services/admin.service';
import { MatiereService } from '../shared_services/matiere.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.css']
})
export class BulletinComponent implements OnInit {
  step_one:boolean=true;
  step_two:boolean=false;
  classes:any;
  principales:any;
  auth:boolean=false;
  clas:string;
  login:string;
  password:string;
  etudiants:any;
  seq:string;
  eleve:string;
  allcompo:any;
  unite:any;
  val:boolean = false;
  valeur:boolean = false;
  btnetat:boolean = false;
  listeBull:any = [];
  constructor(private fileservice:ClassesService,private fileser:FileService,private composervice:AdminService,private composer:MatiereService) { }

  ngOnInit() {
    this.initialisation();
    this.allPrincipale();
    if(sessionStorage.getItem('super')){
    //  this.step_one = false;
    //  this.step_two = true;
    }
    
  }

  initialisation(){
    this.fileservice.getAllClasses().subscribe(
      data => {this.classes = data},
      error => {console.log('Une erreur s est produite')}
      
    );
  }

  allPrincipale(){
    this.fileser.allPrincipale().subscribe(
      data => { this.principales = data;}
    );

  }

  connection(){
    this.auth = true;
    
    for(let p of this.principales){
     
      if((p.classes.nom == this.clas) && (p.login == this.login ) && (p.password == this.password)){
          sessionStorage.setItem('super',this.login);
          this.auth = false;
    
      }
    }

    if(this.auth == false){
      this.step_one = false;
      this.step_two = true;
    }

  }

  findStudentByClasse(x){
    this.composervice.getStudentByClasse(x).subscribe(
      data => { this.etudiants = data}
    );   
  }

  findCompoStudentBySeq(nom){
    let id = this.getId(nom);
    this.composer.getCompoStudentBySequence(id,this.seq).subscribe(
      data => { this.allcompo = data;}
    );
    

  }
  saveCompo(data){
    
   // let idi = this.getId();
   // this.findCompoStudentBySeq(idi);
    if(this.allcompo.length == 0){
      this.valeur = true;
    }else if(this.allcompo.length > 0){
      this.valeur = false;
      this.btnetat = false

      if(this.unite.matieres.length > this.allcompo.length){
        this.val = true;
        this.btnetat = false;
       
  
      }else{ this.btnetat = true;}

     

    }
    

   
   
  }

  getId(nom){
    for(let el of this.etudiants){
      if(el.nom == nom){
        
        return el.id;
      }
    }
  }

  newbulletin(){
   // alert(this.allcompo.length);
    let i = 0;
    for(let c of this.allcompo){
      console.log(c);
      this.listeBull[i] = c;
      i++;
    }
    this.composervice.saveBulletin(this.listeBull).subscribe(
      data => { this.listeBull = [];}
    );
  }

  findMatiereCompo(elt){
    this.composer.getMatiereCompo(elt).subscribe(
      data => { this.unite = data;console.log(this.unite);}
    );

    if(this.allcompo.length == 0){
      this.valeur = true;
    }else if(this.allcompo.length > 0){
      this.valeur = false;
      this.btnetat = false

      if(this.unite.matieres.length > this.allcompo.length){
        this.val = true;
        this.btnetat = false;
       
  
      }else{ this.btnetat = true;}

     

    }
  }

}
