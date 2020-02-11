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

  constructor(private param:ParametreService,private http:HttpClient) {

   }

   getMatiereByClasse(cls:string): Observable<any>{
    return this.http.get(this.baseUrl+'/'+cls);
  }


}
