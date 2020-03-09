import { Injectable } from '@angular/core';
import { ParametreService } from './parametre.service';
import { Matiere} from '../classes/matiere';
import { from } from 'rxjs';
import  { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private baseUrl:string = "http://localhost:8000/api/matiere";
  private obj:any;

  constructor(private param:ParametreService,private http:HttpClient) {

   }

   getMatiereByClasse(cls:string): Observable<any>{
    return this.http.get(this.baseUrl+'/'+cls);
  }

  getAllMatieres(): Observable<any>{
    return this.http.get(this.baseUrl+'/all');
  }

  deleteMatiere(idm:number): Observable<any>{
    return this.http.delete(this.baseUrl+'/delete/'+idm);
  }

  saveMatiere(title:string,nom:string,classes:string): Observable<any>{
    return this.http.post(this.baseUrl+'/save/'+title+'/'+nom+'/'+classes,this.obj);
  }


}
