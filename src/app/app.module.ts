import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryModule } from './gallery/gallery.module';
import { ProfessionModule } from './profession/profession.module';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FeaturedAppModule } from './featured-app/featured-app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule, // default with Angular generate app
    AppRoutingModule, // here are my routes
    
    GalleryModule, // here I put modules made by me. Thanks to this, my main App knows what's inside of those feature-modules. 
    ProfessionModule,
    FeaturedAppModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
