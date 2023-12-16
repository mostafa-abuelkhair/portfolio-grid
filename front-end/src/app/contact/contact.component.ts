import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { NgForm,FormsModule } from '@angular/forms';
import { ApiService } from '../sevices/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavComponent,FooterComponent,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

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

  onSubmit(f:NgForm){

  }

}
