import { Component, OnInit } from '@angular/core';
//import { FormGroup,FormControl } from '@angular/forms';
import { from } from 'rxjs';

import { MatiereService } from "../../shared_services/matiere.service";
import { ClassesService} from '../../shared_services/classes.service';
import { Classes } from '../../classes/classes';

@Component({
  selector: 'app-admatiere',
  templateUrl: './admatiere.component.html',
  styleUrls: ['./admatiere.component.css']
})
export class AdmatiereComponent implements OnInit {
  private matieres:any;
  private operation:string = "";
  private texte:string="AUCUNE A";
  private selectedMatiere:any;
  private del:boolean=true;
  private titres= ["Math","Histoire","Francais","Philosophie","Informatique","Physique","Chimie"];
  private listesClasses :Classes[];
  
  selectedFile:any;
  pdfURL:any;
  titre;
  name;
  cl;
  formdata;


  constructor(private matiereservice:MatiereService,private claservice:ClassesService) { }

  ngOnInit() {
    this.loadAllMatieres();
    this.loadClasse();
   
  }

  public onFileChanged(event){
    console.log(event);
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) =>{ this.pdfURL = reader.result;}
  }

  loadAllMatieres(){
    this.matiereservice.getAllMatieres().subscribe(
      data => {this.matieres = data},
      error => { console.log("Url Introuvable")}
    )
  }

  deleteMatiere(id:number){
    this.matiereservice.deleteMatiere(id).subscribe(
      res => {
        this.loadAllMatieres();
      }
    );
  }

 

  saveMatiere(data){
   // console.log(data);
     this.matiereservice.saveMatiere(data.titre,data.name,data.cl,this.selectedFile);
      
         this.operation = "";
         this.init();
         this.loadAllMatieres();
        
  }
  init(){
    this.titre ="";
    this.name = "";
    this.cl = "";
    
  }

    loadClasse(){
    this.claservice.getAllClasses().subscribe(
      data => { this.listesClasses = data },
      error => {console.log('Une erreur s est produite')},
      () => { console.log('chargement des produits effectuer')}
    );
  }


}
