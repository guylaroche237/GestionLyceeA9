import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  connecter: boolean = false;

  constructor() {
     
   }

   authentification(){
     if(this.connecter == false){
       return this.connecter;
     }else{
       this.connecter = true;
       return this.connecter;
     }
        
  }
}
