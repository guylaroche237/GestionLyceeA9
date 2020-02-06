import { Component, OnInit } from '@angular/core';
//import { FiledbService } from '../services/filedb.service';
import { FormGroup, FormBuilder,Validator, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { from} from 'rxjs';
import { FileService} from '../shared_services/file.service';
import { User } from '../classes/user';
import { Student } from '../classes/student';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  etat: boolean = false;
  imageurl: string = "../../assets/images/profil.jpg";
  fileToUpload: File = null;
  public user:Student;
  list: Student[];
  

  constructor(private filedb: FileService) { }

  ngOnInit() {
    this.loadProduit();
    if(this.list){
      console.log(this.list);
      console.log("la liste n'est pas vide");
    }else{
      console.log("vide vide vide");
    }
    
   
  }
  
  handlerFileInput(file: FileList){
      this.fileToUpload = file.item(0);
      var reader = new FileReader();
      reader.onload = (event: any) => {
      this.imageurl = event.target.result;  
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  



  OnSubmit(val){
   
   console.log(val);
   const p = val;
   p.photo = this.fileToUpload;
   //this.user.nom = data.nom;
   //this.user.login=data.login;
   //this.user.password = data.password;
   //this.user.email = data.email;
   //this.user.date = data.date;
   //this.user.sale = data.sale;
   //this.user.photo = this.fileToUpload;
    

   this.filedb.savePhoto(p.photo).subscribe(
    res => {
        
      this.loadProduit();

  });
   console.log(p);
   
  
 // data.photo = this.imageurl;
 // console.log(data);
   
  //  this.filedb.saveStudent(p);
    
    //alert("sauvegarder avec succes");

  }

  loadProduit(){
    this.filedb.getAllStudent().subscribe(
      data => { this.list = data,console.log(this.list)},
      error => {console.log('Une erreur s est produite')},
      () => { console.log('chargement des produits effectuer')}
    );
  }
  
  

}
