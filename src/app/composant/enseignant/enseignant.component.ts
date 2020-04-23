import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/shared_services/file.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  enseignants:any;
  base64Data:any;

  constructor(private serv:FileService) { }

  ngOnInit() {
    this.allTeacher();
  }

  allTeacher(){
    this.serv.getAllEnseignant().subscribe(
      data => { this.enseignants = data;}
    );

  }

  convertImage(img){
    // this.retrieveResonse = res;
     this.base64Data = img;
     let retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
     return retrievedImage;
}

}
