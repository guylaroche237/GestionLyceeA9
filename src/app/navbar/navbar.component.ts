import { Component, OnInit } from '@angular/core';
import { ClassesService} from '../shared_services/classes.service';
import { Classes } from '../classes/classes';
import { from } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //private listesClasses :string[] = ['6eme','5eme','4eme','3eme','2nd','1ere','Tle'];
  private listesClasses :Classes[];
  
  
  constructor(private claservice:ClassesService) { }

  ngOnInit() {
    const p = this.claservice.getAllClasses();
    this.initialisation();
  }

  
  initialisation(){
    this.claservice.getAllClasses().subscribe(
      data => {this.listesClasses = data},
      error => {console.log('Une erreur s est produite')},
      () => { console.log('chargement des produits effectuer')}
    );
  }

}
