import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { TermsAndConditionsComponent } from './feature/terms-and-conditions/terms-and-conditions.component';
const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"home" , component:HomeComponent},
  {path:"terms-and-conditions" , component:TermsAndConditionsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
