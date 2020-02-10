import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametreService {

  public name_classe:string;

  constructor() { }

  setName_classe(name:string){
   this.name_classe = name;

  }
  getName_classe(){
    return this.name_classe;
  }
}
