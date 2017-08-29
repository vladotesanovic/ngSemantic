import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgSemanticModule } from 'ng-semantic';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PrismjsModule } from './prismjs/prismjs.module';
import { ButtonComponent } from './components/button/button.component';
import { FlagComponent } from './components/flag/flag.component';

@NgModule({
  imports: [
    BrowserModule,
    PrismjsModule,
    RouterModule.forRoot([
      {
        component: HomeComponent,
        path: '',
        pathMatch: 'full'
      },
      {
        component: ButtonComponent,
        path: 'elements/button'
      },
      {
        component: FlagComponent,
        path: 'elements/flag'
      }
    ], {
      useHash: true
    }),
    NgSemanticModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FlagComponent,
    ButtonComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
