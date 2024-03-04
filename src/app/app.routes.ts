/*import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';*/
import { Routes, /*RouterModule*/ } from '@angular/router';
//components
//import { AppComponent } from './app.component';
//import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ComputersComponent } from './computers/computers.component';
import { NetworksComponent } from './networks/networks.component';
import { PhonesComponent } from './phones/phones.component';
import { CodingComponent } from './coding/coding.component';

export const routes: Routes = [  
    { path: '', component: HomeComponent },
    { path: 'Home', component: HomeComponent},
    { path: 'Phones', component: PhonesComponent},
    { path: 'Computers', component:ComputersComponent},
    { path: 'Networks', component:NetworksComponent},
    { path: 'Coding', component:CodingComponent},
    { path: 'About', component:AboutComponent}
]

export class AppModule{

}
