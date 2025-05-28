import { Component } from '@angular/core';
import {Rubric, RubricIndicator} from '../../models/rubric';
import {TranslatePipe} from '@ngx-translate/core';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-rubric',
  imports: [
    TranslatePipe,
    NgClass,
    FormsModule
  ],
  templateUrl: './rubric.component.html',
  styleUrl: './rubric.component.css'
})
export class RubricComponent {
  rubric: Rubric = {
    title: '',
    projectURL: '',
    criteria: [
      {
        id: 1,
        labelKey: 'RUBRIC.CRITERIA.1.TITLE',
        descriptionKey: 'RUBRIC.CRITERIA.1.DESCRIPTION',
        indicators: [
          {
            id: 1,
            labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.1.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.1.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.1.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.1.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 2,
            labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.2.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.2.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.2.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.2.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 3,
            labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.3.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.3.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.3.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.3.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 4,
            labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.4.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.4.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.4.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.4.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 5,
            labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.5.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.5.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.5.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.5.OPTIONS.3', value: 3},
            ]
          }
        ]
      },
      {
        id: 2,
        labelKey: 'RUBRIC.CRITERIA.2.TITLE',
        descriptionKey: 'RUBRIC.CRITERIA.2.DESCRIPTION',
        indicators: [
          {
            id: 1,
            labelKey: 'RUBRIC.CRITERIA.2.INDICATORS.1.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.2.INDICATORS.1.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.2.INDICATORS.1.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.2.INDICATORS.1.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 2,
            labelKey: 'RUBRIC.CRITERIA.2.INDICATORS.2.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.2.INDICATORS.2.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.2.INDICATORS.2.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.2.INDICATORS.2.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 3,
            labelKey: 'RUBRIC.CRITERIA.2.INDICATORS.3.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.2.INDICATORS.3.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.2.INDICATORS.3.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.1.INDICATORS.3.OPTIONS.3', value: 3},
            ]
          }
        ]
      },
      {
        id: 3,
        labelKey: 'RUBRIC.CRITERIA.3.TITLE',
        descriptionKey: 'RUBRIC.CRITERIA.3.DESCRIPTION',
        indicators: [
          {
            id: 1,
            labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.1.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.1.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.1.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.1.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 2,
            labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.2.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.2.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.2.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.2.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 3,
            labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.3.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.3.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.3.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.3.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 4,
            labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.4.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.4.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.4.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.4.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 5,
            labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.5.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.5.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.5.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.3.INDICATORS.5.OPTIONS.3', value: 3},
            ]
          }
        ]
      },
      {
        id: 4,
        labelKey: 'RUBRIC.CRITERIA.4.TITLE',
        descriptionKey: 'RUBRIC.CRITERIA.4.DESCRIPTION',
        indicators: [
          {
            id: 1,
            labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.1.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.1.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.1.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.1.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 2,
            labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.2.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.2.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.2.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.2.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 3,
            labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.3.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.3.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.3.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.3.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 4,
            labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.4.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.4.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.4.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.4.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 5,
            labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.5.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.5.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.5.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.5.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 6,
            labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.6.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.6.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.6.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.6.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 7,
            labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.7.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.7.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.7.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.4.INDICATORS.7.OPTIONS.3', value: 3},
            ]
          }
        ]
      },
      {
        id: 5,
        labelKey: 'RUBRIC.CRITERIA.5.TITLE',
        descriptionKey: 'RUBRIC.CRITERIA.5.DESCRIPTION',
        indicators: [
          {
            id: 1,
            labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.1.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.1.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.1.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.1.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 2,
            labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.2.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.2.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.2.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.2.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 3,
            labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.3.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.3.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.3.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.3.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 4,
            labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.4.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.4.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.4.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.5.INDICATORS.4.OPTIONS.3', value: 3},
            ]
          },
        ]
      },
      {
        id: 6,
        labelKey: 'RUBRIC.CRITERIA.6.TITLE',
        descriptionKey: 'RUBRIC.CRITERIA.6.DESCRIPTION',
        indicators: [
          {
            id: 1,
            labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.1.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.1.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.1.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.1.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 2,
            labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.2.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.2.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.2.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.2.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 3,
            labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.3.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.3.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.3.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.3.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 4,
            labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.4.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.4.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.4.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.4.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 5,
            labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.5.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.5.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.5.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.5.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 6,
            labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.6.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.6.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.6.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.6.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 7,
            labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.7.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.7.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.7.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.6.INDICATORS.7.OPTIONS.3', value: 3},
            ]
          }
        ]
      },
      {
        id: 7,
        labelKey: 'RUBRIC.CRITERIA.7.TITLE',
        descriptionKey: 'RUBRIC.CRITERIA.7.DESCRIPTION',
        indicators: [
          {
            id: 1,
            labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.1.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.1.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.1.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.1.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 2,
            labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.2.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.2.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.2.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.2.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 3,
            labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.3.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.3.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.3.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.3.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 4,
            labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.4.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.4.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.4.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.4.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 5,
            labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.5.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.5.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.5.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.5.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 6,
            labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.6.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.6.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.6.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.7.INDICATORS.6.OPTIONS.3', value: 3},
            ]
          },
        ]
      },
      {
        id: 8,
        labelKey: 'RUBRIC.CRITERIA.8.TITLE',
        descriptionKey: 'RUBRIC.CRITERIA.8.DESCRIPTION',
        indicators: [
          {
            id: 1,
            labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.1.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.1.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.1.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.1.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 2,
            labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.2.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.2.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.2.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.2.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 3,
            labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.3.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.3.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.3.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.3.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 4,
            labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.4.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.4.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.4.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.4.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 5,
            labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.5.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.5.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.5.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.5.OPTIONS.3', value: 3},
            ]
          },
          {
            id: 6,
            labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.6.TITLE',
            options: [
              {id: 1, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.6.OPTIONS.1', value: 1},
              {id: 2, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.6.OPTIONS.2', value: 2},
              {id: 3, labelKey: 'RUBRIC.CRITERIA.8.INDICATORS.6.OPTIONS.3', value: 3},
            ]
          },
        ]
      }
    ]
  };

  protected getOptionColor(value: number): string {
    switch (value) {
      case 1:
        return 'bg-red-200';
      case 2:
        return 'bg-yellow-200';
      case 3:
        return 'bg-green-200';
      default:
        return 'bg-gray-200';
    }
  }

  protected isDetailsOpen(indicators: RubricIndicator[]): boolean {
    return indicators.some(indicator => indicator.selectedOptionId === undefined)
  }

  protected isRubricComplete(): boolean {
    return !this.rubric.criteria.every(
      crit => crit.indicators.every(
        indicator => indicator.selectedOptionId !== undefined
      )
    )
  }

  private countSelectedOptions(): Map<number, number> {
    let count: Map<number, number> = new Map<number, number>()

    for (const crit of this.rubric.criteria) {
      for (const indicator of crit.indicators) {
        count.set(indicator.selectedOptionId!, (count.get(indicator.selectedOptionId!) || 0 ) + 1);
      }
    }

    return count;
  }

  protected completeRubric() {
    const count = this.countSelectedOptions();
    let totalResult = 0;
    count.forEach((value, times) => totalResult += (value * times));
    console.log(count);
    console.log(totalResult);
  }
}
