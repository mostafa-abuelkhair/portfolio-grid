import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavComponent,FooterComponent,RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
