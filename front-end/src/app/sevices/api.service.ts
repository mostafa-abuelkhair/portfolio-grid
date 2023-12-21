import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs';
import { CourseModel, EducationModel, ExperienceModel, InfoModel, LanguageModel } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient ) { }

  url=""

  infoCache:InfoModel|null = null;
  coursesCache:CourseModel[]|null = null;
  experienceCache:ExperienceModel[]|null = null;
  educationCache:EducationModel[]|null = null;
  languagesCache:LanguageModel[]|null = null;

  info(){

    interface RawInfo{
      id:string,
      name: string,
      value:string
    }

      return this.http.get<RawInfo[]>(this.url+'/info').pipe(
        map((response:RawInfo[])=>{

          const info = new InfoModel;

          response.forEach((e:RawInfo) => {
            info[e.name]=e.value;
          });

          this.infoCache = info;
          return info;

        })
      )

  }


  courses(){
      return this.http.get<CourseModel[]>(this.url+'/courses').pipe(
        map((response)=>{
          this.coursesCache = response;
          return response;
      })
    )
  }

  experience(){
      return this.http.get<ExperienceModel[]>(this.url+'/experience').pipe(
        map((response)=>{
          this.experienceCache = response;
          return response;
      })
    )
  }

  education(){
      return this.http.get<EducationModel[]>(this.url+'/education').pipe(
        map((response)=>{
          this.educationCache = response;
          return response;
      })
    )
  }

  languages(){
      return this.http.get<LanguageModel[]>(this.url+'/languages').pipe(
        map((response)=>{
          this.languagesCache = response;
          return response;
      })
    )
  }

  sendMessage(body:any){
      return this.http.post(this.url+'/message',body)
  }

}
