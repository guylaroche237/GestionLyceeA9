import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { from } from 'rxjs';
import { Student } from '../classes/student';
import { User } from '../classes/user';

@Injectable()
export class FileService {
  constructor(private http: HttpClient) { }

  private baseUrl:string = "http://localhost:8000/api";
  private path :string= "http://localhost:8080/api/student";
  //private headers = new Headers({'Content-Type':'application/json'});

  
  
  saveStudent(stu:Student): Observable<any> {
  return  this.http.post(this.baseUrl+'/save/student',stu);
    console.log(stu);
  }
  savePhoto(pho:File): Observable<any> {
    const formdata: FormData = new FormData();  
    
   formdata.append('file', pho); 
    return  this.http.post(this.baseUrl+'/profil/save',formdata);
      console.log(pho);
    }

  sauvegarderStudent(eleve:Student): Observable<any>{
      return this.http.post(this.baseUrl+'/save/stud?nom='+eleve.nom+'&login='+eleve.login+'&password='+eleve.password+'&email='+eleve.email+'&photo='+eleve.photo+'&adresse='+eleve.adresse+'&date='+eleve.date+'&classe='+eleve.sale,eleve);
  }
  getAllStudent(): Observable<any>{
    return this.http.get(this.baseUrl+'/all/students');
  }

  
  getUsers(){
    return this.http.get(this.baseUrl+'/users');
   // .map((response:Response)=>response.json()).catch(this.eror);
  }

  saveUser(usr:User):Observable<any>{
       return this.http.post(this.baseUrl+'/user',usr);
  }

}
