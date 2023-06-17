import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomePart1Component } from './Home/home-part1/home-part1.component';
import { ChooseOctopusComponent } from './Home/choose-octopus/choose-octopus.component';
import { QrComponent } from './Home/qr/qr.component';
import { HowToUseComponent } from './Home/how-to-use/how-to-use.component';
import { SuccessPartnersComponent } from './Home/success-partners/success-partners.component';
import { TrustDriveComponent } from './Home/trust-drive/trust-drive.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomePart1Component, ChooseOctopusComponent, QrComponent, HowToUseComponent, SuccessPartnersComponent, TrustDriveComponent, TermsAndConditionsComponent],
  imports: [
    CommonModule,RouterModule,
    HomeComponent,
    HomePart1Component,ChooseOctopusComponent,QrComponent,HowToUseComponent,SuccessPartnersComponent
  ] ,
  // exports:[
  //   HomePart1Component,ChooseOctopusComponent,QrComponent
  // ]

})
export class FeatureModule { }
