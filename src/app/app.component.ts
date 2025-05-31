import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, RouterLink, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'es', 'cat']);
    const browserLang = translate.getBrowserLang();
    const localStorageLang = localStorage.getItem('lang');
    if (localStorageLang) {
      translate.use(localStorageLang);
      return;
    }
    translate.use(browserLang?.match(/en|es|cat/) ? browserLang : 'cat');
  }
}
