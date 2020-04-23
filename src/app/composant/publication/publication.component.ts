import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/shared_services/classes.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  base64Data:any;
  pubs:any;

  constructor(private claserv:ClassesService) { }

  ngOnInit() {
    this.findallpub();
  }

  convertImage(img){
    // this.retrieveResonse = res;
     this.base64Data = img;
     let retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
     return retrievedImage;
}

findallpub(){
  this.claserv.getAllPublication().subscribe(
    data => { this.pubs = data;}
  );
}


}
