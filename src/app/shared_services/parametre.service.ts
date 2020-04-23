import { Injectable } from '@angular/core';
import { Matiere} from '../classes/matiere';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ParametreService {

  public name_classe:string;
  matieres :Matiere [];
  idUser:number;
  private baseUrl:string = "http://localhost:8000/api";
  your_key:string;
  user_connecter:any;
  id_bulletin:number;
  pub_type:number=0;

  constructor(private http: HttpClient) { }

  setName_classe(name:string){
   this.name_classe = name;

  }
  setIdUser(id:number){
     this.idUser = id;
  }
  getIdUser(){
    return this.idUser;
  }
  getName_classe(){
    return this.name_classe;
  }
  setYourkey(cle:string){
    this.your_key = cle;
  }
  getYourKey(){
    return this.your_key;
  }

  getImage(cle:string): Observable<any>{
    return this.http.get(this.baseUrl+'/profil/get/cle/'+cle);
  }
  setUserConnect(data){
    this.user_connecter = data;
  }
  getUserConnect(){
    
    return this.user_connecter;
  }
  setIdBulletin(id){
    this.id_bulletin = id;
  }
  getIdbulletin(){
    return this.id_bulletin;
  }
  setTypePub(val){
    this.pub_type = val;
  }
  getTypePub(){
    return this.pub_type;
  }

  
}
