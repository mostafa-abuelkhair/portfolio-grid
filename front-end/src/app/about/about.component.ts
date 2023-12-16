import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import {RouterModule} from '@angular/router';
import { ApiService } from '../sevices/api.service';
import { CommonModule } from '@angular/common';

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
  info:any={
    'website_title':'',
    'job_title':'',
    'name':'',
    'bio':'',
    'aim':'',
    'education_sum':'',
    'specialization':'',
    'experience_years':'',
    'cert_numbers':'',
    'last_name':'',
    'about':'',
    'mail':'',
    'phone':'',
    'location':'',
    'linkedin':'',
    'facebook':'',
    'insta':'',
    'whatsapp_link':'',
    'img':''
  };

  experience:any=[];
  education:{id:'',date:'',title:'',description:''}[]=[];
  cources:{id:'',date:'',name:''}[]=[];
  languages:{id:'',name:'',description:''}[]=[];

  experience_ids:Set<number> = new Set([]);

  ngOnInit() {

    this.api.info().subscribe((res:any)=>{

      res.forEach((e:any) => {
        this.info[e.name]=e.value;
      });

    });

    this.api.experience().subscribe((res:any)=>{
      this.experience=res;
    });

    this.api.education().subscribe((res:any)=>{
      this.education=res;
    });

    this.api.cources().subscribe((res:any)=>{
      this.cources=res;
    });

    this.api.languages().subscribe((res:any)=>{
      this.languages=res;
    });

  }
}
