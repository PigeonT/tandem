import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export function getSettingLanguage(): Observable<string> {

  let locale = '';
  const DEFAULT = 'en';
  if (!localStorage.getItem('locale')) {
    localStorage.setItem('locale', DEFAULT);
  }
  locale = localStorage.getItem('locale');
  return Observable.of(locale);

}

export function setSettingLanguage(locale: string): Observable<string> {
  localStorage.setItem('locale', locale);
  return Observable.of('');
}
