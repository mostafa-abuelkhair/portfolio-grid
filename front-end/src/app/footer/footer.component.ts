import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ApiService } from '../sevices/api.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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


  ngOnInit() {

    this.api.info().subscribe((res:any)=>{

      res.forEach((e:any) => {
        this.info[e.name]=e.value;
      });

    });

  }
}
