export interface Rubric {
  title: string;
  projectURL: string;
  criteria: RubricCriterion[];
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
  value: number;
}
