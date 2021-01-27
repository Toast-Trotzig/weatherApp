import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './component/main/main.component';
import {MaterialModule} from './shared/material.module';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import { PlaceComponent } from './component/place/place.component';
import {PlaceGuard} from './component/place/place.guard';
import { WeathercardComponent } from './component/weathercard/weathercard.component';

const routes: Routes = [
  {path: ':long/:lat', canActivate: [PlaceGuard], component: PlaceComponent},
  {path: '', component: MainComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlaceComponent,
    WeathercardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
