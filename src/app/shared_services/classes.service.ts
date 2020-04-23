import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Classes} from 'src/app/classes/classes';
import { Publication } from 'src/app/classes/publication';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService{

  private baseUrl:string = "http://localhost:8000/api/classes";
  private pubUrl:string = "http://localhost:8000/api/publication";
  obj:any;

  constructor(private http:HttpClient) { }

  getAllClasses(): Observable<any>{
   return  this.http.get(this.baseUrl+'/');
  }

  saveClasse(sale:Classes){
    return this.http.post(this.baseUrl+'/save',sale);
  }
  savePublication(comm:string,clas:string,login:string,password:string,type:number){
    return this.http.post(this.pubUrl+'/save/'+comm+'/'+clas+'/'+login+'/'+password+'/'+type,this.obj);
  }

  savePublicationImg(comm:string,clas:string,login:string,password:string,photo:File){
    const formdata: FormData = new FormData();  
      formdata.append('imgPub', photo);
    return this.http.post(this.pubUrl+'/saveimg/'+comm+'/'+clas+'/'+login+'/'+password,formdata);
  }

  getAllPublication(){
    return this.http.get(this.pubUrl+'/all');
  }
}
