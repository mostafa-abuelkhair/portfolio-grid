import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { NgForm,FormsModule } from '@angular/forms';
import { ApiService } from '../sevices/api.service';
import { InfoModel } from '../models/models';

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
  info = new InfoModel;


  ngOnInit() {

    if(this.api.infoCache) this.info = this.api.infoCache;

    else this.api.info().subscribe((res:InfoModel)=>{
       this.info = res
      });

  }

  onSubmit(f:NgForm){
    this.api.sendMessage(f.value).subscribe( (response:any) => {
      alert(response.message)
      f.reset()
    });
  }

}
