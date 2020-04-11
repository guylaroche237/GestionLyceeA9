import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassesService{

  private baseUrl:string = "http://localhost:8000/api";

  constructor(private http:HttpClient) { }

  getAllClasses(): Observable<any>{
   return  this.http.get(this.baseUrl+'/classes');
  }
}
