import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuto1';
  constructor(private appservice: AppService,private route: Router){}

  ngOnInit(){
    if(!this.appservice.authentification()){
      this.route.navigateByUrl('/login');
    }else{
      this.route.navigateByUrl('/home/(contentOutlet:publication)');
    // this.route.navigateByUrl('/admin');
    }

  }
}
