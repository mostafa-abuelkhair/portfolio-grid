import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ApiService } from '../sevices/api.service';
import {InfoModel} from '../models/models'

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

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
