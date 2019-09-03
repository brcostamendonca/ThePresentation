import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { AngularComponent } from './angular/angular.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { NotasComponent } from './notas/notas.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    AngularComponent,
    NavMenuComponent,
    NotasComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: CvComponent/*HomeComponent*/, pathMatch: 'full' },
      { path: 'cv', component: CvComponent },
      { path: 'notas', component: NotasComponent },
      { path: 'angular', component: AngularComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
