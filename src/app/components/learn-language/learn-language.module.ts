import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LearnLanguageComponent} from './learn-language.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LearnLanguageComponent
  ],
  exports: [
    LearnLanguageComponent
  ]
})
export class LearnLanguageModule { }
