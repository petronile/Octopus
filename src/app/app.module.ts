import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { SharedModule } from './shared/shared.module';
import { HomePart1Component } from './feature/Home/home-part1/home-part1.component';
import { HomeComponent } from './feature/home/home.component';
import { ChooseOctopusComponent } from './feature/Home/choose-octopus/choose-octopus.component';
import { QrComponent } from './feature/Home/qr/qr.component';
import { HowToUseComponent } from './feature/Home/how-to-use/how-to-use.component';
import { SuccessPartnersComponent } from './feature/Home/success-partners/success-partners.component';
import { TrustDriveComponent } from './feature/Home/trust-drive/trust-drive.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    HomePart1Component,
    HomeComponent,ChooseOctopusComponent,QrComponent,HowToUseComponent,SuccessPartnersComponent,TrustDriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SharedModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
