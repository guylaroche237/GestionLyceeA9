import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/shared_services/forum.service';
import { ParametreService } from 'src/app/shared_services/parametre.service';


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
  

  constructor(private forum:ForumService,private param:ParametreService) { }

  ngOnInit() {
    this.id = this.param.getIdUser();

    setInterval(()=>{
      this.findAllMessage();
    },1000); 
    
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
  

}
