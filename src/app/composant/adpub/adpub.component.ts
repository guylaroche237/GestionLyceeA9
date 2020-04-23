import { Component, OnInit } from '@angular/core';
import { ParametreService } from 'src/app/shared_services/parametre.service';
import { ClassesService } from 'src/app/shared_services/classes.service';
import { Publication } from 'src/app/classes/publication';
import { FileService } from 'src/app/shared_services/file.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-adpub',
  templateUrl: './adpub.component.html',
  styleUrls: ['./adpub.component.css']
})
export class AdpubComponent implements OnInit {
  choix:number;
  listesClasses:any;
  commentaire:string;
  clas:string;
  pub:Publication;
  login:string;
  password:string;
  teacher:any;
  selectedFile:any;
  imgURL:any;
  pubs:any;
  base64Data:any;
  constructor(private param:ParametreService,private claservice:ClassesService,private fileser:FileService) { }

  ngOnInit() {
    this.choix = this.param.getTypePub();
    this.loadClasse();
    this.findallPub();
   // alert(this.choix);
  }

  
  public onFileChanged(event){
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) =>{ this.imgURL = reader.result;}
  }

  loadClasse(){
    this.claservice.getAllClasses().subscribe(
      data => { this.listesClasses = data },
      error => {console.log('Une erreur s est produite')},
      () => { console.log('chargement des produits effectuer')}
    );
  }

  Enregistrer(){
    this.pub = new Publication();
    this.pub.commentaire = this.commentaire;
    this.pub.concerner = this.clas;
    this.pub.type = this.param.getTypePub();
   
    this.fileser.findEnseignantByloginAndPassword(this.login,this.password).subscribe(
      data => { this.teacher = data;this.pub.enseignant = this.teacher;}
    );
    if(this.param.getTypePub()==1){
      this.claservice.savePublication(this.commentaire,this.clas,this.login,this.password,this.param.getTypePub()).subscribe(
        data =>{this.reset();this.findallPub();}
      );
    }else{
      this.claservice.savePublicationImg(this.commentaire,this.clas,this.login,this.password,this.selectedFile).subscribe(
        data =>{this.reset();this.findallPub();}
      );
    }
    
    
    console.log(this.pub);
    

  }
  reset(){
    this.login = null;this.password = null;this.clas= null;this.commentaire= null;
  }

  findallPub(){
    this.claservice.getAllPublication().subscribe(
      data => { this.pubs = data;console.log(this.pubs);}
    );
      
  }

  convertImage(img){
    // this.retrieveResonse = res;
     this.base64Data = img;
     let retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
     return retrievedImage;
}

}
