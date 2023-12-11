import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent),title:'Abdelkhalek-Home'},
  {path: 'about', loadComponent: () => import('./about/about.component').then(mod => mod.AboutComponent),title:'Abdelkhalek-about'},
  {path: 'contact', loadComponent: () => import('./contact/contact.component').then(mod => mod.ContactComponent),title:'Abdelkhalek-contact'},

];
