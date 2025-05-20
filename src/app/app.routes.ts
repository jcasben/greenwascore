import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RubricComponent} from './pages/rubric/rubric.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rubric', component: RubricComponent}
];
