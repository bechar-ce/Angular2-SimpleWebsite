import {Routes} from '@angular/router';
import {AppHomeComponent} from "./app-home/app-home.component";
import {AppAboutComponent} from "./app-about/app-about.component";
import {Angular2IntroComponent} from "./angular2-intro/angular2-intro.component";
import {Angular2SetupComponent} from "./angular2-setup/angular2-setup.component";

export const rootRouterConfig: Routes = [
  {path: 'home', component: AppHomeComponent},
  {path: 'about', component: AppAboutComponent},
  {path: 'angular2-introduction', component: Angular2IntroComponent},
  {path: 'angular2-setup', component: Angular2SetupComponent},
  {path: '**', component: AppHomeComponent}
];

