import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { from } from 'rxjs';
import { Student } from '../classes/student';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { ParametreService } from './parametre.service';
import { element } from 'protractor';
import { LoginComponent } from '../login/login.component';


@Injectable()
export class FileService {
  private speudo:string;
  private pass:string;
  d:Date;
  obj:any;
  constructor(private http: HttpClient,private router: Router,private param:ParametreService) { }

  private baseUrl:string = "http://localhost:8000/api";
  private path :string= "http://localhost:8080/api/student";
  //private headers = new Headers({'Content-Type':'application/json'});

  
  
  saveStudent(stu:Student,photo:File): Observable<any> {
    const image = new FormData();
    image.append('file',photo);
    
  return  this.http.post(this.baseUrl+'/save/student/',stu); 
  }

  saveEleve(photo:File,nom:string,login:string,password:string,email:string,date:Date,sale:string){
   alert("test test");
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', photo);
    alert("debut debut");
    return  this.http.post(this.baseUrl+'/save/eleve'+'/'+nom+'/'+login+'/'+password+'/'+email+'/'+date+'/'+sale,photo, { observe: 'response' }).subscribe(
      (response)=>{
        if(response.status === 200){
          alert("sauvegarder avec success");
             console.log('sauvegarder avec success');
        }else{
          console.log('echouer echouer echouer !!!!');
        }
      }
    );
    
  }
  savePhoto(pho:File,kimg:string): Observable<any> {
    const formdata: FormData = new FormData();  
    
   formdata.append('file', pho); 
    return  this.http.post(this.baseUrl+'/profil/save/'+kimg,formdata);
        
    }

    SaveEnseignant(nom:string,tel:number,email:string,matiere:string,photo:File,login:string,password:string){
      const formdata: FormData = new FormData();  
      formdata.append('imageFile', photo); 
      return this.http.post(this.baseUrl+'/enseignant/save/'+nom+'/'+tel+'/'+email+'/'+matiere+'/'+login+'/'+password,formdata,{ observe: 'response' }).subscribe(
        (response)=>{
          if(response.status === 200){
            alert("tout est ok");
               console.log('sauvegarder avec success');
          }else{
            console.log('echouer echouer echouer !!!!');
          }
        }
      );

    }

    getAllEnseignant(){
      return this.http.get(this.baseUrl+'/enseignant/all');
    }
    verifEnseignantByloginAndPasswordAndClasse(login:string,password:string,salle:string){
      return this.http.get(this.baseUrl+'/enseignant/sign/'+login+'/'+password+'/'+salle);
    }

    findEnseignantByloginAndPassword(login:string,password:string){
      return this.http.get(this.baseUrl+'/enseignant/sign/'+login+'/'+password);
    }

    getPhoto(cle:number): Observable<any>{
      return this.http.get(this.baseUrl+'/profil/get/'+cle);
    }

    getImage(cle:string): Observable<any>{
      return this.http.get(this.baseUrl+'/profil/get/cle/'+cle);
    }
    
  getAllStudent(): Observable<any>{
    return this.http.get(this.baseUrl+'/all/students');
  }
  getUsers(){
    return this.http.get(this.baseUrl+'/users');
  }

  getStudentByLoginAndPassword(login:string,password:string):Observable<any>{
    return this.http.get(this.baseUrl+'/student/'+login+'/'+password);
  }
  getStudentById(id:Number):Observable<any>{
    return this.http.get(this.baseUrl+'/student/'+id);
  }

  getKeyImage(){
    const chars = '0123456789abcdefghijklmnopkwxzjAZERTYUIOPMLKJHGFDSQWXCVBN';
    var result = '';
    for(var i = 40;i>0;i--){
      result += chars[Math.floor(Math.random()*chars.length)];
    }
    
    return result;
  }
  Authentification(user:any){
    
    if(user){
      //Connection effectuer avec Succes
      this.param.setIdUser(user.id);
     // console.log(user);
    // alert(user.role);
      if(user.role == 'admin'){
        this.router.navigateByUrl("/admin/(adminOutlet:adens)");
      }else{
        
        this.router.navigateByUrl("/home/(contentOutlet:tchat)");
      }
      
     
    }else{
      //login ou password Erroner
      this.router.navigateByUrl("/login");
    }
    
  }
  present(user:any){
    if(user){
      return false;
    }else{
      return true;
    }
  }

  savePrincipale(name:string,sale:string){
    return this.http.post(this.baseUrl+'/principale/save/'+name+'/'+sale,this.obj);
  }
  allPrincipale(){
    return this.http.get(this.baseUrl+'/principale/all');
  }

  onSaveStudent(nom:string,login:string,password:string,email:string,classe:string,datexp:Date,photo:File){
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', photo);
    this.http.post(this.baseUrl+'/save'+'/'+nom+'/'+login+'/'+password+'/'+email+'/'+classe+'/'+datexp,uploadImageData, { observe: 'response' }).subscribe(
      (response)=>{
        if(response.status === 200){
          alert("tout est ok");
             console.log('sauvegarder avec success');
        }else{
          console.log('echouer echouer echouer !!!!');
        }
      }
    );

  }

}
