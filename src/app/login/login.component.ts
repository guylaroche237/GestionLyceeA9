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
import { ParametreService } from '../shared_services/parametre.service';



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
  session_user:any;
  list: Student[];
  cleimg:string;
  private listesClasses :Classes[];
  erreur:boolean= false;
  sucess = false;
  taille_img:number = 0;
  login:string;
  password:string;
  new_user:any;
  f:File;
  
 
  

  constructor(private filedb: FileService,private claservice:ClassesService,private route:Router,private param:ParametreService) { }

  ngOnInit() { 
    this.loadProduit();
    this.initialisation();

    if(this.isUserLoggerIn()){
      let usr;
      this.filedb.getStudentByLoginAndPassword(sessionStorage.getItem('login'),sessionStorage.getItem('password')).subscribe(
        data =>{ usr = data; this.filedb.Authentification(usr);}
      );

    //  if(usr.role=='admin'){this.route.navigateByUrl("/admin/(adminOutlet:adens)");
    //  }else{  this.route.navigateByUrl("/home/(contentOutlet:tchat)"); }
     
    }
    //this.isUserLoggerIn();
  }
  
  handlerFileInput(file: FileList){
      this.fileToUpload =  file.item(0);
      var reader = new FileReader();
      reader.onload = (event: any) => {
       //  this.f = new File(event.target.result,"tltl");
      this.imageurl = event.target.result;  
      this.taille_img = this.fileToUpload.size 
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  



  OnSubmit(val){
  // console.log(val);
   this.new_user = val;
   val.profil = this.fileToUpload;
   //console.log(val);
    //console.log(val);
  // this.filedb.savePhoto(this.fileToUpload,this.cleimg).subscribe( res => {this.loadProduit();});
 // this.filedb.saveStudent(val,this.fileToUpload).subscribe( res =>{ this.loadProduit(); this.reset(); } ); 
 // this.filedb.saveEleve(this.fileToUpload,val.nom,val.login,val.password,val.email,val.date,val.classe);
  this.filedb.onSaveStudent(val.nom,val.login,val.password,val.email,val.classe,val.date,this.fileToUpload);
  this.reset();
  }

  loadProduit(){this.filedb.getAllStudent().subscribe(data => { this.list = data}, error => {console.log('Une erreur s est produite')}, () => { console.log('chargement des produits effectuer')});}

  addUser(donner){
    
     this.filedb.getStudentByLoginAndPassword(donner.login,donner.password).subscribe(
      data => {
        console.log(data);
        this.user = data,
        this.new_user = data;
        this.param.setUserConnect(this.user);
        this.param.setIdUser(this.user.id);
      //  this.param.setYourkey(this.user.keyimg);
        this.erreur = this.filedb.present(this.user),
        
         this.setSessionUser(),
         this.filedb.Authentification(this.user)

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

  reset(){
    this.imageurl ="../../assets/images/profil.jpg";
    this.etat = !this.etat;
    this.sucess = true;
    this.erreur = false;
    this.login = this.new_user.login;
    this.password = this.new_user.password;

  }

  isUserLoggerIn(){
   let lo = sessionStorage.getItem('login');
  let pas = sessionStorage.getItem('password');
  
    if(lo != null && pas != null){
      return true;
      //alert('vous etes connecter !!!');
    }else{ 
      return false;
      //alert('pas connecter !')
    }
  }

  setSessionUser(){
    if(!this.erreur){
      sessionStorage.setItem('login',this.user.login);
      sessionStorage.setItem('password',this.user.password);
      sessionStorage.setItem('id',''+this.user.id);
      
     // sessionStorage.setItem('cleimg',this.param.getYourKey());
     }


  }
  
  

}
