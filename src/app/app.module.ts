import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHomeComponent } from './app-home/app-home.component';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import { AppAboutComponent } from './app-about/app-about.component';
import { Angular2IntroComponent } from './angular2-intro/angular2-intro.component';
import { Angular2SetupComponent } from './angular2-setup/angular2-setup.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppHomeComponent,
    AppAboutComponent,
    Angular2IntroComponent,
    Angular2SetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
