import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ApiService } from '../sevices/api.service';
import { InfoModel } from '../models/models';

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
  info = new InfoModel();


  ngOnInit() {

    if(this.api.infoCache) this.info = this.api.infoCache;

    else this.api.info().subscribe((res:InfoModel)=>{
       this.info = res
      });

  }

}
