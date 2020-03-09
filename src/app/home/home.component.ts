import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ParametreService } from '../shared_services/parametre.service';
import { FileService } from '../shared_services/file.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  i:Number=0;
  id:Number;
  user:any;
  yourprofil:any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  constructor(private route:Router,private param:ParametreService,private db:FileService,private httpClient:HttpClient) { }

  ngOnInit() {
    this.id = this.param.getIdUser();
    if(this.id){
      this.getStudentById(this.id);
    }else{
      this.user = {"nom":"inconnu","login":"inconnu"};
    }
  //  this.getYourImageProfil();
    //this.getImage();
    
    
  }
  arret(){
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('password');
    this.route.navigateByUrl("/login");
  }

  getStudentById(k:Number){
    this.db.getStudentById(k).subscribe(
      data => { this.user = data, console.log(this.user)},
      error => {console.log('Une erreur s est produite')},
      () => { console.log('chargement des produits effectuer')}
    );
  }

  getYourImageProfil() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    
    this.param.getImage(sessionStorage.getItem("cleimg")).subscribe(
        
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.file;
        this.yourprofil= 'data:image/jpeg;base64,' + this.base64Data;
        
      }
    );
    
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
  }
 

}
