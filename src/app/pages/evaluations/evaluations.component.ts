import { Component, inject, OnInit } from "@angular/core";
import { EvaluationService } from "../../services/evaluation.service";
import { Evaluation } from "../../models/evaluation";
import { take } from "rxjs";
import { Router } from "@angular/router";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-evaluations",
  imports: [TranslatePipe],
  templateUrl: "./evaluations.component.html",
  styleUrl: "./evaluations.component.css",
})
export class EvaluationsComponent implements OnInit {
  private evaluationService = inject(EvaluationService);
  private router = inject(Router);

  protected evaluations: Evaluation[] = [];
  protected loading: boolean = true;

  ngOnInit(): void {
    this.evaluationService
      .getEvaluations()
      .pipe(take(1))
      .subscribe({
        next: (data) => (this.evaluations = data),
        error: (err) => console.log(err),
        complete: () => (this.loading = false),
      });
  }

  onClick(evaluation: Evaluation) {
    this.router.navigate([`/evaluations/${evaluation.id}`], {
      state: {evaluation: evaluation},
    }).then();
  }
}
