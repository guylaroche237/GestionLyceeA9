import { Enseignant } from './enseignant';
import { Student } from './student';
import { from } from 'rxjs';

export class Classes{
    public id:number;
   public nbre:number;
   public  nom:string;
   public  enseignants:any[];
   

}