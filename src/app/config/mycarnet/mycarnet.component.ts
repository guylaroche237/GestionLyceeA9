import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared_services/admin.service';
import { ParametreService } from 'src/app/shared_services/parametre.service';

import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-mycarnet',
  templateUrl: './mycarnet.component.html',
  styleUrls: ['./mycarnet.component.css']
})
export class MycarnetComponent implements OnInit {
  bulletins:any;

  constructor(private adminservice:AdminService,private param:ParametreService,private route:Router) { }

  ngOnInit() {
    let id = this.param.getIdUser();
    this.findAllBulletinByIdStudent(id);
  }

  findAllBulletinByIdStudent(k:number){
    return this.adminservice.getBulletinStudentById(k).subscribe(
      data => { this.bulletins = data;}
    );
  }

  voirBulletin(id){
    this.param.setIdBulletin(id);
    
   // this.route.navigateByUrl("/admin/(adminOutlet:carnet)");
   this.route.navigateByUrl("/home/(contentOutlet:bull)");
    

  }

}
