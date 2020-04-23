import { Component, OnInit } from '@angular/core';
import { ParametreService } from 'src/app/shared_services/parametre.service';
import { Matiere} from '../../classes/matiere';
import { from } from 'rxjs';
import { MatiereService } from 'src/app/shared_services/matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {
  private sale:string;
  matieres :Matiere [];
  tab:any;
  base64Data:any;


  constructor(private param:ParametreService,private service_mat:MatiereService) { }

  ngOnInit() {
   // setInterval(()=>{ },2000); 
      this.sale = this.param.getName_classe();  
      this.updateMatiere(this.sale);
      
  }

  convertPdf(pdf){
    // this.retrieveResonse = res;
     this.base64Data = pdf;
     let retrievedImage = 'data:application/pdf;base64,' + this.base64Data;
     return retrievedImage;
}

  updateMatiere(code:string){
    this.service_mat.getMatiereByClasse(code).subscribe(
      data => { this.matieres = data},
      error => {console.log('Une erreur s est produite')},
       () => { console.log('chargement des produits effectuer')}

  );
  }
  //this.matieres = this.service_mat.getMatiereByClasse(this.sale);

}
