import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { HabilitiesComponent } from './habilities/habilities.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    SliderComponent,
    AboutComponent,
    HabilitiesComponent,
    FrontendComponent,
    BackendComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
