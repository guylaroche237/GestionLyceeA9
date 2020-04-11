import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared_services/admin.service';
import { ClassesService} from '../../shared_services/classes.service';
import { Classes } from '../../classes/classes';
import { Student } from 'src/app/classes/student';
import { MatiereService } from 'src/app/shared_services/matiere.service';

@Component({
  selector: 'app-adcompo',
  templateUrl: './adcompo.component.html',
  styleUrls: ['./adcompo.component.css']
})
export class AdcompoComponent implements OnInit {
  private tab_compo:any;
  private titres= ["Math","Histoire","Francais","Philosophie","Informatique","Physique","Chimie"];
  private listesClasses :Classes[];
  private etudiants:any;
  private matieres:any;
  selectectCompo:any;
  del:boolean = false;
  compo:any;
  
  note;seq;mat;clas;stu;

  constructor(private composervice:AdminService,private claservice:ClassesService,private matiereservice:MatiereService) { }

  ngOnInit() {
    this.findAllCompo();
    this.loadClasse();
  }

  findAllCompo(){
    this.composervice.getAllCompo().subscribe(
      data => {this.tab_compo = data},
      error => { console.log("erreur de requete")}
    );
  }

  loadClasse(){
    this.claservice.getAllClasses().subscribe(
      data => { this.listesClasses = data },
      error => {console.log('Une erreur s est produite')},
      () => { console.log('chargement des produits effectuer')}
    );
  }
  
  findStudentByClasse(x){
    this.composervice.getStudentByClasse(x).subscribe(
      data => { this.etudiants = data}
    );   
  }

  findMatiereByClasse(clas){
   // this.matiereservice.getMatiereByClasse(clas).subscribe( data => {this.matieres = data});
   this.matiereservice.getMatiereCompo(clas).subscribe(data =>{ this.matieres = data; this.compo = this.matieres.matieres; console.log(this.compo);});
  }
  saveCompo(data){
    console.log(data);
     this.composervice.saveCompo(data.note,data.seq,data.mat,data.clas,data.stu,data.coef).subscribe(
      res => {
        this.findAllCompo();this.restart();
      }
    );
  }

  restart(){
    this.note=0;
    this.seq ="";this.mat="";this.clas="";this.stu="";

  }
  updateCompo(){
   // console.log(this.selectectCompo);
   this.note = this.selectectCompo.note;
   this.seq = this.selectectCompo.sequence;
   this.mat = this.selectectCompo.matiere.title;
   this.stu = this.selectectCompo.student.nom;
  }

  deleteCompo(id){
    
    this.composervice.deleteCompo(id).subscribe(
      res => {
        this.findAllCompo();
      }
    );

  }

}
