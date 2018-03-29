import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NavbarComponent } from './navbar/navbar.component';
import { TandemComponent } from './tandem/tandem.component';
import { MeetupComponent } from './meetup/meetup.component';
import { TeachLanguageComponent } from './teach-language/teach-language.component';
import { LearnLanguageComponent } from './learn-language/learn-language.component';


@NgModule({
  declarations: [
    NavbarComponent,
    TandemComponent,
    MeetupComponent,
    TeachLanguageComponent,
    LearnLanguageComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    NavbarComponent
  ],
  providers: [],
  bootstrap: []
})
export class ComponentModule { }
