import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from 'src/app/shared_services/file.service';
import { Matiere } from 'src/app/classes/matiere';

@Component({
  selector: 'app-adensg',
  templateUrl: './adensg.component.html',
  styleUrls: ['./adensg.component.css']
})
export class AdensgComponent implements OnInit {
  public selectedFile;
  public event1;
  imgURL:any;
  receivedImageData:any;
  base64Data:any;
  convertedImage:any;
  message:string;
  nom:string;
  email:string;
  tel:number;
  matiere:string;
  photo:any;
  matieres = ['Francais','Math','Anglais','Physique','Informatique','Histoire','Phylosophie','Geographie','Phy_Chi'];
 enseignants:any;

  constructor(private http:HttpClient,private fileservice:FileService) { }

  public onFileChanged(event){
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) =>{ this.imgURL = reader.result;}
  }

  ngOnInit() {
    this.getAllTeacher();
  }

 

    onUpload() {
      console.log(this.selectedFile);
      
  
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    
      //Make a call to the Spring Boot Application to save the image
      this.http.post('http://localhost:8000/api/enseignant/save/'+this.nom+'/'+this.tel+'/'+this.email, uploadImageData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
            alert(this.message);
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
        );
  
      }

      Enregistrer(){
        
        this.fileservice.SaveEnseignant(this.nom,this.tel,this.email,this.matiere,this.selectedFile);
        
        this.initialisation();
        this.getAllTeacher();
        
      }

      getAllTeacher(){
        this.fileservice.getAllEnseignant().subscribe(
          data => { this.enseignants = data;}
        );
      }
      convertImage(img){
        // this.retrieveResonse = res;
         this.base64Data = img;
         let retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
         return retrievedImage;
    }
    initialisation(){
      this.getAllTeacher();
      this.nom =null,this.email=null,this.tel=null,this.matiere=null,this.photo=null;
      this.getAllTeacher();
    }

  }


