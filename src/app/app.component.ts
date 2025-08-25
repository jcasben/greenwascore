import {Component} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {HeaderComponent} from './components/header/header.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, RouterLink, TranslatePipe, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(translate: TranslateService, public router: Router) {
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
