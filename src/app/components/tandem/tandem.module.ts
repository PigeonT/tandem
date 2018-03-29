import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TandemComponent} from './tandem.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TandemComponent
  ],
  exports: [
    TandemComponent
  ]
})
export class TandemModule { }
