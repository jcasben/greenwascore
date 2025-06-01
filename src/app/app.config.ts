import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";
import { routes } from "./app.routes";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./i18n/", ".json");
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: "top" }),
    ),
    provideHttpClient(),
    importProvidersFrom([
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ]),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyBsIAHhJc4Uaeil8QhuXJvSFUrhVd68Rao",
        authDomain: "greenwascore.firebaseapp.com",
        projectId: "greenwascore",
        storageBucket: "greenwascore.firebasestorage.app",
        messagingSenderId: "765119807300",
        appId: "1:765119807300:web:e1895493d6928fc617e111",
        measurementId: "G-5L1BLB3C5V",
      }),
    ),
    provideFirestore(() => getFirestore()),
  ],
};
