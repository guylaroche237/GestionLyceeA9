import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { from } from 'rxjs';
import { Student } from '../classes/student';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { ParametreService } from './parametre.service';

@Injectable()
export class FileService {
  constructor(private http: HttpClient,private router: Router,private param:ParametreService) { }

  private baseUrl:string = "http://localhost:8000/api";
  private path :string= "http://localhost:8080/api/student";
  //private headers = new Headers({'Content-Type':'application/json'});

  
  
  saveStudent(stu:Student): Observable<any> {
  return  this.http.post(this.baseUrl+'/save/student',stu);
    
  }
  savePhoto(pho:File,kimg:string): Observable<any> {
    const formdata: FormData = new FormData();  
    
   formdata.append('file', pho); 
    return  this.http.post(this.baseUrl+'/profil/save/'+kimg,formdata);
      
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
  Authentification(user:User){
    if(user){
      //Connection effectuer avec Succes
      this.param.setIdUser(user.id);
      
      this.router.navigateByUrl("/home/(contentOutlet:tchat)");
    }else{
      //login ou password Erroner
      this.router.navigateByUrl("/login");
    }
    
  }
  present(user:User){
    if(user){
      return false;
    }else{
      return true;
    }
  }

}
