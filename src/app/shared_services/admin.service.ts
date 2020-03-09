import { Injectable } from '@angular/core';
import  { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private compoURL:string = "http://localhost:8000/api/compo";
  private studentURL:string = "http://localhost:8000/api";
  private obj:any;

  constructor(private http:HttpClient) { }
  // recupere tous les composition
  getAllCompo(): Observable<any>{
    return this.http.get(this.compoURL+'/all');
  }

  getStudentByClasse(cls:string): Observable<any>{
    return this.http.get(this.studentURL+'/students/'+cls);
  }

  saveCompo(note:Number,seq:string,title:string,classes:string,stu:string): Observable<any>{
    return this.http.post(this.compoURL+'/save/'+note+'/'+seq+'/'+title+'/'+classes+'/'+stu,this.obj);
  }

  deleteCompo(cle:number): Observable<any>{
    return this.http.delete(this.compoURL+'/delete/'+cle);
  }


}
