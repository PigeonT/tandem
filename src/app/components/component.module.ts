import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {NavbarComponent} from './navbar/navbar.component';
import {RouterOutlet} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';
import {MeetupModule} from './meetup/meetup.module';
import {TeachLanguageModule} from './teach-language/teach-language.module';
import {LearnLanguageModule} from './learn-language/learn-language.module';
import {TandemModule} from './tandem/tandem.module';


@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeetupModule,
    TeachLanguageModule,
    LearnLanguageModule,
    TandemModule
  ],
  exports: [
    RouterOutlet,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: []
})
export class ComponentModule { }
