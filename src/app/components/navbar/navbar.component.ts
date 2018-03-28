import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../../shared/authservice.service';

@Component({
  selector: 'tp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getLogo(): string {
    return '../../../assets/img/logo.png';
  }
}
