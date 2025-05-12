import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},

     {
        path: "main",
        loadComponent: () => import('./main/main.component').then(m => m.MainComponent)
     },
     {
      path: "home",
      loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
   },
   {
      path: "about",
      loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
   },
   {
      path: "contact",
      loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
   },
];