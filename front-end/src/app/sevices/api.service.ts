import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient ) { }

  url="http://localhost/grid"

  info(){
      return this.http.get(this.url+'/info')
    }

  cources(){
      return this.http.get(this.url+'/cources')
    }

  experience(){
      return this.http.get(this.url+'/experience')
    }

  education(){
      return this.http.get(this.url+'/education')
    }

  languages(){
      return this.http.get(this.url+'/languages')
    }

}
