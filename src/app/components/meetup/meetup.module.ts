import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeetupComponent} from './meetup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MeetupComponent
  ],
  declarations: [
    MeetupComponent
  ]
})
export class MeetupModule { }
