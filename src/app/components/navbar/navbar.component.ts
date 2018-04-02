import {Component, OnInit} from '@angular/core';
import {setSettingLanguage} from '../../../config/i18n-service.service';

@Component({
  selector: 'tp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  languages: Array<string>;

  constructor() {
  }

  ngOnInit() {
    this.languages = ['de', 'en'];
  }

  getLogo(): string {
    return '../../../assets/icon/icon.png';
  }

  onLanguageSelection(language: string): void {
    console.log(language);
    setSettingLanguage(language).subscribe(() => location.reload(true));
  }
}
