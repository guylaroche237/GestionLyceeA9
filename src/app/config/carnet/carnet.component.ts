import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ParametreService } from '../../shared_services/parametre.service';
import { AdminService } from '../../shared_services/admin.service';
import { from } from 'rxjs';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent implements OnInit {
  id:number;
  bulletin:any;
 // @ViewChild('content') content: ElementRef;

  constructor(private param:ParametreService,private admin:AdminService) { }

  ngOnInit() {
    this.id = this.param.getIdbulletin();
    
    this.findBulletinById(this.id);
    
  }
  findBulletinById(key){
    this.admin.getBulletinById(key).subscribe(
      data => { this.bulletin = data; console.log(this.bulletin);}
    );
  }

  public convetToPDF(){
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 208;
    var pageHeight = 395;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
     
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('bulletin.pdf'); // Generated PDF
    });
    }

}
