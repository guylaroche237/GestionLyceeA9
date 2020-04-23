import { Injectable } from '@angular/core';
import  { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private compoURL:string = "http://localhost:8000/api/compo";
  private studentURL:string = "http://localhost:8000/api";
  private urlBulletin:string = "http://localhost:8000/api/bulletin";
  
  
  private obj:any;

  constructor(private http:HttpClient) { }
  // recupere tous les composition
  getAllCompo(): Observable<any>{
    return this.http.get(this.compoURL+'/all');
  }
  getAllCompoByStudentId(id:number){
    return this.http.get(this.compoURL+'/all/student/'+id);

  }

  getStudentByClasse(cls:string): Observable<any>{
    return this.http.get(this.studentURL+'/students/'+cls);
  }

  saveCompo(note:Number,seq:string,title:string,classes:string,stu:string,coef:number): Observable<any>{
    return this.http.post(this.compoURL+'/save/'+note+'/'+seq+'/'+title+'/'+classes+'/'+stu+'/'+coef,this.obj);
  }

  deleteCompo(cle:number): Observable<any>{
    return this.http.delete(this.compoURL+'/delete/'+cle);
  }
  saveBulletin(compo:any){
    return this.http.post(this.urlBulletin+'/save',compo);
  }
  getAllBulletin(){
    return this.http.get(this.urlBulletin+'/all');
  }
  getBulletinById(id){
    return this.http.get(this.urlBulletin+'/id/'+id);
  }
  getBulletinStudentById(id){
    return this.http.get(this.urlBulletin+'/id/student/'+id);
  }


}
