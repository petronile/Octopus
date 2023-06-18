import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { TermsAndConditionsComponent } from './feature/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './feature/contact-us/contact-us.component';
ContactUsComponent
const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"terms-and-conditions" , component:TermsAndConditionsComponent},
  {path:"contact-us" , component:ContactUsComponent},

  {path:"" , redirectTo: 'home', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
