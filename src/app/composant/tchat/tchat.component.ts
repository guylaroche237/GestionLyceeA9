import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/shared_services/forum.service';
import { ParametreService } from 'src/app/shared_services/parametre.service';
import { HttpClient } from '@angular/common/http';
import { FileService } from '../../shared_services/file.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.css']
})
export class TchatComponent implements OnInit {
  messages:any;
  id:Number;
  object:any;
  vide:string;
  sms:string;
  valide:boolean = false;
  retrieveResonse:any;
  base64Data:any;
  retrievedImage:any;
  user_connect:any;
  
  

  constructor(private forum:ForumService,private param:ParametreService,private httpClient:HttpClient,private service:FileService) { }

  ngOnInit() {
    this.findAllMessage();// retourne listes des messages
    this.user_connect = this.param.getUserConnect(); // return utilisateur connecter
    this.findUserConnect();
    this.id = Number(sessionStorage.getItem('id'));// consertion en entier
    
 // console.log(this.user_connect);
   // this.id = this.param.getIdUser();
   // this.findAllMessage();
    // setInterval(()=>{this.findAllMessage();},5000000); 
      
   
    
  }

  findAllMessage(){
    this.forum.getAllMessage().subscribe(
      data =>{ this.messages = data;console.log(this.messages);},
      error =>{ console.log("erreur de chargement")}
    )
  }

  fermer(){
    this.valide = false;
  }

  saveMessage(data){
    if(this.sms){
     //  alert(this.id);
      this.forum.saveSms(data.sms,this.id).subscribe( res => { this.sms = "";this.findAllMessage(); } );

    }else{
      this.valide = true;
    }
   
  }

  

  findUserConnect(){
    this.service.getStudentByLoginAndPassword(sessionStorage.getItem('login'),sessionStorage.getItem('password')).subscribe(
      data =>{ this.user_connect = data;}
    );
    
  }

  convertImage(img){
    // this.retrieveResonse = res;
     this.base64Data = img;
     let retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
     return retrievedImage;
}
  

}
