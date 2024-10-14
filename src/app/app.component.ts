import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { OtherComponent } from "./other/other.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, OtherComponent],
  template: `
  <app-other></app-other>
  `
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const supportedLanguages = ['en', 'tr'];
    
    // Tarayıcı dilini alırken undefined olma durumunu kontrol edin
    const browserLang = this.translate.getBrowserLang();
    const defaultLang = browserLang && supportedLanguages.includes(browserLang) ? browserLang : 'en';
    
    // Varsayılan dili ayarla
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }
}
