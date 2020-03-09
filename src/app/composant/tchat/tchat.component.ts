import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/shared_services/forum.service';
import { ParametreService } from 'src/app/shared_services/parametre.service';
import { HttpClient } from '@angular/common/http';


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
  
  

  constructor(private forum:ForumService,private param:ParametreService,private httpClient:HttpClient) { }

  ngOnInit() {
    this.id = this.param.getIdUser();
    this.findAllMessage();
    // setInterval(()=>{ },1000); 
      
   
    
  }

  findAllMessage(){
    this.forum.getAllMessage().subscribe(
      data =>{ this.messages = data,console.log(data)},
      error =>{ console.log("erreur de chargement")}
    )
  }

  fermer(){
    this.valide = false;
  }

  saveMessage(data){
    if(this.sms){

      this.forum.saveSms(data.sms,this.id,this.object).subscribe(
      
        res => {
          this.sms = "";
          console.log("Enregistrer avec success");
        }
      
    );

    }else{
      this.valide = true;
    }
   
  }

  getImage(key:string) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8000/api/profil/get/cle/' + key)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.file;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          
        }
      );
      return this.retrievedImage;
  }
  

}
