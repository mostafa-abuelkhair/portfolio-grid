import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import {RouterModule} from '@angular/router';
import { ApiService } from '../sevices/api.service';
import { CommonModule } from '@angular/common';
import { CourseModel, EducationModel, ExpDesModel, ExperienceModel, InfoModel, LanguageModel } from '../models/models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavComponent,FooterComponent,RouterModule,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private api:ApiService){}

  toggleNav = false;
  info = new InfoModel();

  experience:ExperienceModel[]=[];
  education:EducationModel[]=[];
  courses:CourseModel[]=[];
  languages:LanguageModel[]=[];


  ngOnInit() {

      if(this.api.infoCache) this.info = this.api.infoCache;
      else this.api.info().subscribe((res:InfoModel)=>{
        this.info = res
        });


      if(this.api.experienceCache) this.experience = this.api.experienceCache;
      else this.api.experience().subscribe((res:ExperienceModel[])=>{
         this.experience = res
        });

      if(this.api.educationCache) this.education = this.api.educationCache;
      else this.api.education().subscribe((res:EducationModel[])=>{
         this.education = res
        });

      if(this.api.coursesCache) this.courses = this.api.coursesCache;
      else this.api.courses().subscribe((res:CourseModel[])=>{
         this.courses = res
        });

      if(this.api.languagesCache) this.languages = this.api.languagesCache;
      else this.api.languages().subscribe((res:LanguageModel[])=>{
         this.languages = res
        });

  }
}
