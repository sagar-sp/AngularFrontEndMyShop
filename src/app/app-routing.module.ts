import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'', component:HomepageComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'registartion', component:RegistrationComponent
  },
  {
    path:'mycart', component:MycartComponent
  },
  {
    path:'product-details', component:ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
