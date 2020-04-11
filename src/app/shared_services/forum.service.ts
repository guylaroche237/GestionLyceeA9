import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private baseUrl:string = "http://localhost:8000/api/sms";
  obj:any;

  constructor(private http:HttpClient) { }

  getAllMessage():Observable<any>{
    return this.http.get(this.baseUrl+'/all');

  }
  saveSms(sms:String,id:Number):Observable<any>{
   return this.http.post(this.baseUrl+'/save/'+sms+'/'+id,this.obj);
  }
}
