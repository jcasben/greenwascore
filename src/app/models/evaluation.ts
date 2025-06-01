import { Rubric } from "./rubric";

export interface Evaluation {
  id?: string;
  rubric: Rubric;
  result: number;
  selectedOptions: { [option: number]: number };
}
