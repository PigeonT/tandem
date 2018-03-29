import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MeetupComponent} from './components/meetup/meetup.component';
import {TandemComponent} from './components/tandem/tandem.component';
import {LearnLanguageComponent} from './components/learn-language/learn-language.component';
import {TeachLanguageComponent} from './components/teach-language/teach-language.component';


const routes: Routes = [
  { path: '', redirectTo: '/learnlanguage', pathMatch: 'full' },
  { path: 'meetup', component: MeetupComponent },
  { path: 'tandem', component: TandemComponent },
  { path: 'learnlanguage', component: LearnLanguageComponent },
  { path: 'teachlanguage', component: TeachLanguageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
