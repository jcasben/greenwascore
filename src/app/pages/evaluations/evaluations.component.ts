import { Component, inject, OnInit } from "@angular/core";
import { EvaluationService } from "../../services/evaluation.service";
import { Evaluation } from "../../models/evaluation";
import { take } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-evaluations",
  imports: [],
  templateUrl: "./evaluations.component.html",
  styleUrl: "./evaluations.component.css",
})
export class EvaluationsComponent implements OnInit {
  private evaluationService = inject(EvaluationService);
  private router = inject(Router);

  protected evaluations: Evaluation[] = [];

  ngOnInit(): void {
    this.evaluationService
      .getEvaluations()
      .pipe(take(1))
      .subscribe((data) => (this.evaluations = data));
  }

  onClick(evaluation: Evaluation) {
    this.router.navigate([`/evaluations/${evaluation.id}`], {
      state: { evaluation: evaluation },
    });
  }
}
