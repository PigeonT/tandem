import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './root.component';
import { ServiceModule } from './shared/root.module';
import { ComponentModule } from './components/root.module';
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
