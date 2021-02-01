import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './component/main/main.component';
import {MaterialModule} from './shared/material.module';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import { PlaceComponent } from './component/place/place.component';
import {PlaceGuard} from './component/place/place.guard';
import { WeathercardComponent } from './component/weathercard/weathercard.component';
import { DragndropComponent } from './component/dragndrop/dragndrop.component';
import { InputdemoComponent } from './component/inputdemo/inputdemo.component';
import { ModelinputdemoComponent } from './component/modelinputdemo/modelinputdemo.component';

const routes: Routes = [
  {path: ':long/:lat', canActivate: [PlaceGuard], component: PlaceComponent},
  {path: 'dragndrop', component: DragndropComponent},
  {path: 'inputdemo', component: InputdemoComponent},
  {path: 'modeldemo', component: ModelinputdemoComponent},
  {path: '', component: MainComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlaceComponent,
    WeathercardComponent,
    DragndropComponent,
    InputdemoComponent,
    ModelinputdemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
