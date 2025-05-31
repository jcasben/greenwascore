import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { RubricComponent } from "./pages/rubric/rubric.component";
import { LegalComponent } from "./pages/legal/legal.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "rubric", component: RubricComponent },
  { path: "legal", component: LegalComponent },
];
