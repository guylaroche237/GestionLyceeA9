import { Injectable } from '@angular/core';
import { Matiere} from '../classes/matiere';


@Injectable({
  providedIn: 'root'
})
export class ParametreService {

  public name_classe:string;
  matieres :Matiere [];
  idUser:Number;

  constructor() { }

  setName_classe(name:string){
   this.name_classe = name;

  }
  setIdUser(id:Number){
     this.idUser = id;
  }
  getIdUser(){
    return this.idUser;
  }
  getName_classe(){
    return this.name_classe;
  }

  
}
