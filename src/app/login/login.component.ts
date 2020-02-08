import { Component, OnInit } from '@angular/core';
//import { FiledbService } from '../services/filedb.service';
import { FormGroup, FormBuilder,Validator, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { from} from 'rxjs';
import { FileService} from '../shared_services/file.service';
import { User } from '../classes/user';
import { Student } from '../classes/student';
import { Classes } from '../classes/classes';
import { ClassesService} from '../shared_services/classes.service';



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
  cleimg:string;
  private listesClasses :Classes[];
 
  

  constructor(private filedb: FileService,private claservice:ClassesService) { }

  ngOnInit() {
    //const chifre = Math.floor(Math.random()*Math.floor(100));
    this.cleimg = this.filedb.getKeyImage();
    
    this.loadProduit();
    this.initialisation();
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
   
  
   var p = val;
   
   p.photo = this.cleimg;
   //this.user.adresse = val.adresse;
   //this.user.email = val.email;
   //this.user.keyimg = this.keyimg;
   //this.user.password = val.password;
   //this.user.sale = val.sale;
   
    val.keyimg = this.cleimg;
    console.log(val);
   this.filedb.savePhoto(this.fileToUpload,this.cleimg).subscribe(
    res => {   
      this.loadProduit();
  });


  this.filedb.saveStudent(val).subscribe(
    res =>{
      this.loadProduit();
    }
  )
   
   
  
 

  }

  loadProduit(){
    this.filedb.getAllStudent().subscribe(
      data => { this.list = data,console.log(this.list)},
      error => {console.log('Une erreur s est produite')},
      () => { console.log('chargement des produits effectuer')}
    );
  }

  addUser(donner){

    
     this.filedb.getStudentByLoginAndPassword(donner.login,donner.password).subscribe(
      data => {
        this.user = data,
         console.log(this.user),
         this.filedb.Authentification(this.user)
         //if(this.user){console.log(true);}else{console.log(true);}

        },
      error => {console.log("utilisateur non trouver")},
      () => {}
      
    );
  
   
    
  }
  initialisation(){
    this.claservice.getAllClasses().subscribe(
      data => {this.listesClasses = data},
      error => {console.log('Une erreur s est produite')}
      
    );
  }
  
  

}
