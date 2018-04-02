import {enableProdMode, LOCALE_ID, TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {getSettingLanguage} from './config/i18n-service.service';

if (environment.production) {
  enableProdMode();
}
// use the require method provided by webpack
declare const require: (translatons: string) => string;
// we use the webpack raw-loader to return the content as a string

getSettingLanguage().subscribe(
  (locale: string) => {
    const localeFile = (locale === 'en' ? '' : ('.' + locale));
    const translations: string = require(`raw-loader!./locale/messages${localeFile}.xlf`);
    platformBrowserDynamic().bootstrapModule(AppModule, {
      providers: [
        {provide: TRANSLATIONS, useValue: translations},
        {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
        {provide: LOCALE_ID, useValue: locale}
      ]
    }).catch(err => console.error(err));
  },
  (err) => {
    console.error(err);
  },
);

