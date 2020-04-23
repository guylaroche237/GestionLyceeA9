import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared_services/admin.service';
import { ParametreService } from 'src/app/shared_services/parametre.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  tab_compo:any;
  id_user:number;

  constructor(private composervice:AdminService,private param:ParametreService) { }

  ngOnInit() {
   let id = this.param.getIdUser();
    this.findAllCompoById(id);
    alert(id);
    
  }

  findAllCompoById(k){
    this.composervice.getAllCompoByStudentId(k).subscribe(
      data => {this.tab_compo = data},
      error => { console.log("erreur de requete")}
    );
  }

}
