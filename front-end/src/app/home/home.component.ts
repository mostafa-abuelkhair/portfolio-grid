import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import {RouterModule} from '@angular/router';
import { ApiService } from '../sevices/api.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent,FooterComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private api:ApiService){}

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


  ngOnInit() {

    this.api.info().subscribe((res:any)=>{

      res.forEach((e:any) => {
        this.info[e.name]=e.value;
      });

    });

  }



}
