export class Rubric {
  public title: string;
  public projectURL: string;
  public criteria: RubricCriterion[];

  constructor() {
    this.title = "";
    this.projectURL = "";
    this.criteria = [
      {
        id: 1,
        labelKey: "RUBRIC.CRITERIA.1.TITLE",
        descriptionKey: "RUBRIC.CRITERIA.1.DESCRIPTION",
        indicators: [
          {
            id: 1,
            labelKey: "RUBRIC.CRITERIA.1.INDICATORS.1.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.1.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.1.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.1.OPTIONS.3",
              },
            ],
          },
          {
            id: 2,
            labelKey: "RUBRIC.CRITERIA.1.INDICATORS.2.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.2.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.2.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.2.OPTIONS.3",
              },
            ],
          },
          {
            id: 3,
            labelKey: "RUBRIC.CRITERIA.1.INDICATORS.3.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.3.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.3.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.3.OPTIONS.3",
              },
            ],
          },
          {
            id: 4,
            labelKey: "RUBRIC.CRITERIA.1.INDICATORS.4.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.4.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.4.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.4.OPTIONS.3",
              },
            ],
          },
          {
            id: 5,
            labelKey: "RUBRIC.CRITERIA.1.INDICATORS.5.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.5.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.5.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.5.OPTIONS.3",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        labelKey: "RUBRIC.CRITERIA.2.TITLE",
        descriptionKey: "RUBRIC.CRITERIA.2.DESCRIPTION",
        indicators: [
          {
            id: 1,
            labelKey: "RUBRIC.CRITERIA.2.INDICATORS.1.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.2.INDICATORS.1.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.2.INDICATORS.1.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.2.INDICATORS.1.OPTIONS.3",
              },
            ],
          },
          {
            id: 2,
            labelKey: "RUBRIC.CRITERIA.2.INDICATORS.2.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.2.INDICATORS.2.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.2.INDICATORS.2.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.2.INDICATORS.2.OPTIONS.3",
              },
            ],
          },
          {
            id: 3,
            labelKey: "RUBRIC.CRITERIA.2.INDICATORS.3.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.2.INDICATORS.3.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.2.INDICATORS.3.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.1.INDICATORS.3.OPTIONS.3",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        labelKey: "RUBRIC.CRITERIA.3.TITLE",
        descriptionKey: "RUBRIC.CRITERIA.3.DESCRIPTION",
        indicators: [
          {
            id: 1,
            labelKey: "RUBRIC.CRITERIA.3.INDICATORS.1.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.1.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.1.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.1.OPTIONS.3",
              },
            ],
          },
          {
            id: 2,
            labelKey: "RUBRIC.CRITERIA.3.INDICATORS.2.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.2.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.2.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.2.OPTIONS.3",
              },
            ],
          },
          {
            id: 3,
            labelKey: "RUBRIC.CRITERIA.3.INDICATORS.3.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.3.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.3.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.3.OPTIONS.3",
              },
            ],
          },
          {
            id: 4,
            labelKey: "RUBRIC.CRITERIA.3.INDICATORS.4.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.4.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.4.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.4.OPTIONS.3",
              },
            ],
          },
          {
            id: 5,
            labelKey: "RUBRIC.CRITERIA.3.INDICATORS.5.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.5.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.5.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.3.INDICATORS.5.OPTIONS.3",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        labelKey: "RUBRIC.CRITERIA.4.TITLE",
        descriptionKey: "RUBRIC.CRITERIA.4.DESCRIPTION",
        indicators: [
          {
            id: 1,
            labelKey: "RUBRIC.CRITERIA.4.INDICATORS.1.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.1.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.1.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.1.OPTIONS.3",
              },
            ],
          },
          {
            id: 2,
            labelKey: "RUBRIC.CRITERIA.4.INDICATORS.2.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.2.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.2.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.2.OPTIONS.3",
              },
            ],
          },
          {
            id: 3,
            labelKey: "RUBRIC.CRITERIA.4.INDICATORS.3.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.3.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.3.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.3.OPTIONS.3",
              },
            ],
          },
          {
            id: 4,
            labelKey: "RUBRIC.CRITERIA.4.INDICATORS.4.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.4.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.4.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.4.OPTIONS.3",
              },
            ],
          },
          {
            id: 5,
            labelKey: "RUBRIC.CRITERIA.4.INDICATORS.5.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.5.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.5.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.5.OPTIONS.3",
              },
            ],
          },
          {
            id: 6,
            labelKey: "RUBRIC.CRITERIA.4.INDICATORS.6.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.6.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.6.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.6.OPTIONS.3",
              },
            ],
          },
          {
            id: 7,
            labelKey: "RUBRIC.CRITERIA.4.INDICATORS.7.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.7.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.7.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.4.INDICATORS.7.OPTIONS.3",
              },
            ],
          },
        ],
      },
      {
        id: 5,
        labelKey: "RUBRIC.CRITERIA.5.TITLE",
        descriptionKey: "RUBRIC.CRITERIA.5.DESCRIPTION",
        indicators: [
          {
            id: 1,
            labelKey: "RUBRIC.CRITERIA.5.INDICATORS.1.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.5.INDICATORS.1.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.5.INDICATORS.1.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.5.INDICATORS.1.OPTIONS.3",
              },
            ],
          },
          {
            id: 2,
            labelKey: "RUBRIC.CRITERIA.5.INDICATORS.2.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.5.INDICATORS.2.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.5.INDICATORS.2.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.5.INDICATORS.2.OPTIONS.3",
              },
            ],
          },
          {
            id: 3,
            labelKey: "RUBRIC.CRITERIA.5.INDICATORS.3.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.5.INDICATORS.3.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.5.INDICATORS.3.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.5.INDICATORS.3.OPTIONS.3",
              },
            ],
          },
          {
            id: 4,
            labelKey: "RUBRIC.CRITERIA.5.INDICATORS.4.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.5.INDICATORS.4.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.5.INDICATORS.4.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.5.INDICATORS.4.OPTIONS.3",
              },
            ],
          },
        ],
      },
      {
        id: 6,
        labelKey: "RUBRIC.CRITERIA.6.TITLE",
        descriptionKey: "RUBRIC.CRITERIA.6.DESCRIPTION",
        indicators: [
          {
            id: 1,
            labelKey: "RUBRIC.CRITERIA.6.INDICATORS.1.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.1.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.1.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.1.OPTIONS.3",
              },
            ],
          },
          {
            id: 2,
            labelKey: "RUBRIC.CRITERIA.6.INDICATORS.2.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.2.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.2.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.2.OPTIONS.3",
              },
            ],
          },
          {
            id: 3,
            labelKey: "RUBRIC.CRITERIA.6.INDICATORS.3.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.3.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.3.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.3.OPTIONS.3",
              },
            ],
          },
          {
            id: 4,
            labelKey: "RUBRIC.CRITERIA.6.INDICATORS.4.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.4.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.4.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.4.OPTIONS.3",
              },
            ],
          },
          {
            id: 5,
            labelKey: "RUBRIC.CRITERIA.6.INDICATORS.5.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.5.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.5.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.5.OPTIONS.3",
              },
            ],
          },
          {
            id: 6,
            labelKey: "RUBRIC.CRITERIA.6.INDICATORS.6.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.6.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.6.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.6.OPTIONS.3",
              },
            ],
          },
          {
            id: 7,
            labelKey: "RUBRIC.CRITERIA.6.INDICATORS.7.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.7.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.7.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.6.INDICATORS.7.OPTIONS.3",
              },
            ],
          },
        ],
      },
      {
        id: 7,
        labelKey: "RUBRIC.CRITERIA.7.TITLE",
        descriptionKey: "RUBRIC.CRITERIA.7.DESCRIPTION",
        indicators: [
          {
            id: 1,
            labelKey: "RUBRIC.CRITERIA.7.INDICATORS.1.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.1.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.1.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.1.OPTIONS.3",
              },
            ],
          },
          {
            id: 2,
            labelKey: "RUBRIC.CRITERIA.7.INDICATORS.2.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.2.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.2.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.2.OPTIONS.3",
              },
            ],
          },
          {
            id: 3,
            labelKey: "RUBRIC.CRITERIA.7.INDICATORS.3.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.3.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.3.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.3.OPTIONS.3",
              },
            ],
          },
          {
            id: 4,
            labelKey: "RUBRIC.CRITERIA.7.INDICATORS.4.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.4.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.4.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.4.OPTIONS.3",
              },
            ],
          },
          {
            id: 5,
            labelKey: "RUBRIC.CRITERIA.7.INDICATORS.5.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.5.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.5.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.5.OPTIONS.3",
              },
            ],
          },
          {
            id: 6,
            labelKey: "RUBRIC.CRITERIA.7.INDICATORS.6.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.6.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.6.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.7.INDICATORS.6.OPTIONS.3",
              },
            ],
          },
        ],
      },
      {
        id: 8,
        labelKey: "RUBRIC.CRITERIA.8.TITLE",
        descriptionKey: "RUBRIC.CRITERIA.8.DESCRIPTION",
        indicators: [
          {
            id: 1,
            labelKey: "RUBRIC.CRITERIA.8.INDICATORS.1.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.1.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.1.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.1.OPTIONS.3",
              },
            ],
          },
          {
            id: 2,
            labelKey: "RUBRIC.CRITERIA.8.INDICATORS.2.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.2.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.2.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.2.OPTIONS.3",
              },
            ],
          },
          {
            id: 3,
            labelKey: "RUBRIC.CRITERIA.8.INDICATORS.3.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.3.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.3.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.3.OPTIONS.3",
              },
            ],
          },
          {
            id: 4,
            labelKey: "RUBRIC.CRITERIA.8.INDICATORS.4.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.4.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.4.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.4.OPTIONS.3",
              },
            ],
          },
          {
            id: 5,
            labelKey: "RUBRIC.CRITERIA.8.INDICATORS.5.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.5.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.5.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.5.OPTIONS.3",
              },
            ],
          },
          {
            id: 6,
            labelKey: "RUBRIC.CRITERIA.8.INDICATORS.6.TITLE",
            options: [
              {
                id: 1,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.6.OPTIONS.1",
              },
              {
                id: 2,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.6.OPTIONS.2",
              },
              {
                id: 3,
                labelKey: "RUBRIC.CRITERIA.8.INDICATORS.6.OPTIONS.3",
              },
            ],
          },
        ],
      },
    ];
  }

  toPlainObject(): any {
    return {
      title: this.title,
      projectURL: this.projectURL,
      criteria: this.criteria,
    };
  }
}

interface RubricCriterion {
  id: number;
  labelKey: string;
  descriptionKey: string;
  indicators: RubricIndicator[];
}

interface RubricIndicator {
  id: number;
  labelKey: string;
  options: RubricOption[];
  selectedOptionId?: number;
}

interface RubricOption {
  id: number;
  labelKey: string;
}
