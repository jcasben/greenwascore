import { Component, inject } from "@angular/core";
import { Evaluation } from "../../models/evaluation";
import { Router } from "@angular/router";
import { TranslatePipe } from "@ngx-translate/core";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-evaluation-detail",
  imports: [TranslatePipe],
  templateUrl: "./evaluation-detail.component.html",
  styleUrl: "./evaluation-detail.component.css",
})
export class EvaluationDetailComponent {
  private router = inject(Router);

  protected evaluation: Evaluation;

  constructor() {
    const navigation = this.router.getCurrentNavigation();
    this.evaluation = navigation?.extras?.state?.["evaluation"];
  }

  colorClass(): string {
    if (this.evaluation.result <= 65) return "text-red-500";
    if (this.evaluation.result >= 66 && this.evaluation.result <= 105)
      return "text-yellow-500";
    return "text-green-500";
  }
}
