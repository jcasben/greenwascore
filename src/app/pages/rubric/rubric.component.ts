import { Component, inject } from "@angular/core";
import { Rubric } from "../../models/rubric";
import { TranslatePipe } from "@ngx-translate/core";
import { NgClass } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { EvaluationService } from "../../services/evaluation.service";

@Component({
  selector: "app-rubric",
  imports: [TranslatePipe, NgClass, FormsModule],
  templateUrl: "./rubric.component.html",
  styleUrl: "./rubric.component.css",
})
export class RubricComponent {
  private evaluationService = inject(EvaluationService);

  protected rubric = new Rubric();

  protected getOptionColor(value: number): string {
    switch (value) {
      case 1:
        return "bg-red-200";
      case 2:
        return "bg-yellow-200";
      case 3:
        return "bg-green-200";
      default:
        return "bg-gray-200";
    }
  }

  protected isRubricComplete(): boolean {
    return !this.rubric.criteria.every((crit) =>
      crit.indicators.every(
        (indicator) => indicator.selectedOptionId !== undefined,
      ),
    );
  }

  private countSelectedOptions(): Map<number, number> {
    let count: Map<number, number> = new Map<number, number>();

    for (const crit of this.rubric.criteria) {
      for (const indicator of crit.indicators) {
        count.set(
          indicator.selectedOptionId!,
          (count.get(indicator.selectedOptionId!) || 0) + 1,
        );
      }
    }

    return count;
  }

  protected completeRubric() {
    const count: Map<number, number> = this.countSelectedOptions();
    let totalResult = 0;
    count.forEach((times, value) => (totalResult += value * times));

    const plainMap: { [option: number]: number } = {};
    count.forEach((value, key) => {
      plainMap[key] = value;
    });

    this.evaluationService.saveEvaluation({
      rubric: this.rubric.toPlainObject(),
      result: totalResult,
      selectedOptions: plainMap,
    });
  }
}
