export interface Rubric {
  title: string;
  projectURL: string;
  criteria: RubricCriterion[];
}

interface RubricCriterion {
  id: number;
  labelKey: string;
  description: string;
  indicators: RubricIndicator[];
}

interface RubricIndicator {
  id: number;
  labelKey: string;
  options: RubricOption[];
  selectedOptionId?: string;
}

interface RubricOption {
  id: string;
  labelKey: string;
  value: number;
}
