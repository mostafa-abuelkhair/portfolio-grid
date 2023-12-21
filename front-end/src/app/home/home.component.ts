import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import {RouterModule} from '@angular/router';
import { ApiService } from '../sevices/api.service';
import { InfoModel } from '../models/models';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent,FooterComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private api:ApiService){}

  info = new InfoModel;


  ngOnInit() {

    if(this.api.infoCache) this.info = this.api.infoCache;

    else this.api.info().subscribe((res:InfoModel)=>{
       this.info = res
      });

  }


}
