import { Injectable } from '@angular/core';
import { ParametreService } from './parametre.service';
import { Matiere} from '../classes/matiere';
import { from } from 'rxjs';
import  { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatiereCompo } from '../classes/matierecompo';


@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private baseUrl:string = "http://localhost:8000/api/matiere";
  private base: string =  "http://localhost:8000/api/unite";
  private basemat: string =  "http://localhost:8000/api/matcp";
  private basecompo:string = "http://localhost:8000/api/compo";
  private obj:any;

  constructor(private param:ParametreService,private http:HttpClient) {

   }

   getMatiereByClasse(cls:string): Observable<any>{
    return this.http.get(this.baseUrl+'/'+cls);
  }

  getAllMatieres(): Observable<any>{
    return this.http.get(this.baseUrl+'/all');
  }

  deleteMatiere(idm:number): Observable<any>{
    return this.http.delete(this.baseUrl+'/delete/'+idm);
  }

  saveMatiere(title:string,nom:string,classes:string,cour:File){
      const formdata: FormData = new FormData();  
      formdata.append('pdfFile', cour); 
    return this.http.post(this.baseUrl+'/savecour/'+title+'/'+nom+'/'+classes,formdata,{observe: 'response'}).subscribe(
       
      (response)=>{
        if(response.status === 200){
          
             console.log('sauvegarder avec success');
        }else{
          console.log('echouer echouer echouer !!!!');
        }
      }
    );
  }

  getAllUnite(){
    return this.http.get(this.base+'/all');
  }
  getUniteByNom(nom:string){
    return this.http.get(this.base+'/name/'+nom);
  }
  saveMatiereCompo(matcp:MatiereCompo) :Observable<any>{
    return this.http.post(this.basemat+'/save',matcp);
  }
  getAllMatiereCompo(){
    return this.http.get(this.basemat+'/all');
  }
  saveCompoMat(classes:string,liste:string){
    return this.http.post(this.basemat+'/sauve/'+classes+'/'+liste,this.obj);
  }
  getMatiereCompo(classes:string){
    return this.http.get(this.basemat+'/mat/'+classes);
  }

  getCompoStudentBySequence(id:number,seq:string){
    return this.http.get(this.basecompo+'/seq/'+id+'/'+seq);
  }


}
