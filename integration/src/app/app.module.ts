import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSemanticModule } from 'ng-semantic';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, NgSemanticModule.forRoot()],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
