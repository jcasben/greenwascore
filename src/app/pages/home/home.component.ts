import {Component, inject} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [
    TranslatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private translate = inject(TranslateService)

  get guidePath(): string {
    if (this.translate.currentLang === 'en') return 'docs/support-guide-rubric-use.pdf'
    else if (this.translate.currentLang === 'es') return 'docs/guia-apoyo-uso-rubrica.pdf'
    else return 'docs/guia-support-us-rubrica.pdf'
  }

  get indicatorsPath(): string {
    if (this.translate.currentLang === 'en') return 'docs/greenwashing-indicators.pdf';
    else if (this.translate.currentLang === 'es') return 'docs/indicadores-greenwashing.pdf';
    else return 'docs/indicadors-greenwashing.pdf';
  }
}
