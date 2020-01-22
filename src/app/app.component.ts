import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Espanol' }
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string){}
}
