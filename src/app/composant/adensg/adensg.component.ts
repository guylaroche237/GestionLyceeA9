import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from 'src/app/shared_services/file.service';

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
  

  constructor(private http:HttpClient,private fileservice:FileService) { }

  public onFileChanged(event){
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) =>{ this.imgURL = reader.result;}
  }

  ngOnInit() {
  }

  /**onUpload(cle){
    const uploadData = new FormData();
    uploadData.append('myfile',this.selectedFile,this.selectedFile.name);
    this.fileservice.getImage(cle).subscribe(
      res => {
        this.pathimg = 'data:image/jpeg;base64,' +res.base64;
        alert(this.pathimg);
      }
    );**/

    /**this.http.post("http://localhost:8000/check/upload",uploadData).subscribe(
      res => { console.log(res);
                this.receivedImageData = res;
                this.base64Data = this.receivedImageData.pic;
                this.convertedImage = 'data:image/jpeg;base64,'+this.base64Data;},
      err => console.log('une erreur c est produite lors du chargement')
    );**/
  }


