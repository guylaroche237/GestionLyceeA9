import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  super:boolean = false;
 
  constructor(private route:Router) { }

  ngOnInit() {
  
    
  }
  logOut(){
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('super');
    this.route.navigateByUrl("/login");

  }
  gosuperadmin(){
   // this.route.navigate(['auth']);
   // this.route.navigate(['super']);
    this.route.navigateByUrl("/admin/(adminOutlet:auth)");
  }
 


}
