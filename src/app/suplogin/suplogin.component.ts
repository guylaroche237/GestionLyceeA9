import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suplogin',
  templateUrl: './suplogin.component.html',
  styleUrls: ['./suplogin.component.css']
})
export class SuploginComponent implements OnInit {
  login:string;
  password:string;
  error:boolean = false;

  constructor(private route:Router) { }

  ngOnInit() {
    this.route.navigate(['super']);
  }
  
  connection(){
    if((this.login =="admin" && this.password =="admin")){
      sessionStorage.setItem('super','super');
      this.route.navigateByUrl("/admin/(adminOutlet:principale)");
        
    }else{
      this.error = true;
    }
  }

}
