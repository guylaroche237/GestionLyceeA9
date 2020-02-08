import { Enseignant } from './enseignant';
import { Student } from './student';
import { from } from 'rxjs';

export class Classes{
    public id:Number;
   public nbre:Number;
   public  nom:string;
   public  enseignants:Enseignant[];
   public eleves:Student[];

}