import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServiceModule } from './shared/shared.module';
import { ComponentModule } from './components/component.module';
import {TandemComponent} from './components/tandem/tandem.component';

@NgModule({
  declarations: [
    AppComponent,
    TandemComponent,
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
