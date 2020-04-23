import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/shared_services/file.service';
import { Classes} from 'src/app/classes/classes';
import { ClassesService } from 'src/app/shared_services/classes.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  enseignants:any;
  listeprof:any = [];
  listesClasses:any;
  classe:Classes;
  salle:string;
  nbre:number;

  constructor(private fileservice:FileService,private clService:ClassesService) { }

  ngOnInit() {
    this.getAllTeacher();
    this.findAllClass();
  }

  getAllTeacher(){
    this.fileservice.getAllEnseignant().subscribe(
      data => { this.enseignants = data;}
    );
  }

  saveSalle(data){
    let i = 0;
    for(let prof of this.enseignants){
      var name = prof.nom;
      var choix = data[name];
      if(choix==true){
        this.listeprof[i]=prof;
        i++;
      }
      data['enseignant']=this.listeprof;

    }
    this.classe = new Classes();
    this.classe.nbre = data['nbre'];
    this.classe.nom = data['salle'];
    this.classe.enseignants = this.listeprof;
   // console.log(data);
   // console.log(this.classe);
   this.clService.saveClasse(this.classe).subscribe(
     res =>{ console.log("tout est ok");this.findAllClass();}
   );
   this.salle=null;
   this.nbre = null;

  }

  findAllClass(){
    this.clService.getAllClasses().subscribe(
      data => {this.listesClasses = data,console.log(this.listesClasses)},
      error => {console.log('Une erreur s est produite')}
      
    );
  }

}
