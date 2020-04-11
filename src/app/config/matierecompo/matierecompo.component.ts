import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { MatiereService } from '../../shared_services/matiere.service';
import { MatiereCompo } from '../../classes/matierecompo';
import { ClassesService } from '../../shared_services/classes.service';

@Component({
  selector: 'app-matierecompo',
  templateUrl: './matierecompo.component.html',
  styleUrls: ['./matierecompo.component.css']
})
export class MatierecompoComponent implements OnInit {
  allsunite:any;
  matieres:any = [];
  unite:any;
  listesUnite:any = [];
  salle:string;
  matierecompo:MatiereCompo;
  alls:any;
  listesClasses:any;
  erreur:boolean = false;
  
  
  constructor(private route:Router,private matser:MatiereService,private classe:ClassesService) { }

  ngOnInit() {
    this.verification();
    this.chargeAllUnite();
    this.findAllMatiereCompo();
    this.loadClasse();
  }

  verification(){
    if(sessionStorage.getItem('super') == null){
      this.route.navigateByUrl("/admin/(adminOutlet:auth)");
    }
  }

  test(data){
   
    let i = 0;
    for(let cl of this.allsunite){
      var id = cl.nom;
      var choix = data[id];
      if(choix == true){
          this.matieres[i] = id;
          i++;     
      } 
    }
    this.getUniteSelectionner();
   
   //this.matierecompo = new MatiereCompo();
   //this.matierecompo.classes = this.salle;
   //this.matierecompo.matieres = this.listesUnite;
  
   let lis = this.compress(this.matieres);
   
   this.matser.saveCompoMat(this.salle,lis).subscribe(
     data => { this.findAllMatiereCompo();}
   );
   this.initialisation();
  }


  chargeAllUnite(){
    this.matser.getAllUnite().subscribe(
      data =>{ this.allsunite = data;}
    );
  }

  getUniteSelectionner(){
    var i = 0;
    if(this.matieres.length > 0){
      for(let n of this.matieres){
        this.matser.getUniteByNom(n).subscribe(
          data =>{ this.listesUnite[i]=data;i++; }
        );
      }
    }
  }

  findAllMatiereCompo(){
    this.matser.getAllMatiereCompo().subscribe(
      data => { this.alls = data; console.log(this.alls);}
    );
  }

  compress(donner){
    let rep="";
    for(let i of donner){
      rep += i+"@";
    }
    return rep;
  }
  initialisation(){
    this.salle = null;
    this.matieres = [];

  }
  loadClasse(){
    this.classe.getAllClasses().subscribe(
      data => { this.listesClasses = data },
      error => {console.log('Une erreur s est produite')},
      () => { console.log('chargement des produits effectuer')}
    );
  }

  control(elt){
    this.erreur = false;
    for(let el of this.alls){
      if(elt == el.classes){
         this.erreur = true;
      }
    }
  }

}
