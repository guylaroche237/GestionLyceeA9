import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared_services/admin.service';
import { ParametreService } from 'src/app/shared_services/parametre.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-listbulletin',
  templateUrl: './listbulletin.component.html',
  styleUrls: ['./listbulletin.component.css']
})
export class ListbulletinComponent implements OnInit {
  bulletins:any;

  constructor(private adminservice:AdminService,private param:ParametreService,private route:Router) { }

  ngOnInit() {
    this.findAllBulletin();
  }

  findAllBulletin(){
    return this.adminservice.getAllBulletin().subscribe(
      data => { this.bulletins = data;}
    );
  }

  voirBulletin(id){
    this.param.setIdBulletin(id);
    
    this.route.navigateByUrl("/admin/(adminOutlet:carnet)");
    

  }

}
