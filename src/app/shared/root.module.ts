import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AuthserviceService} from './authservice.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule
  ],
  exports: [],
  providers: [AuthserviceService],
  bootstrap: []
})
export class ServiceModule {
}
