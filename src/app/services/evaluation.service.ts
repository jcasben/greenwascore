import {
  EnvironmentInjector,
  inject,
  Injectable,
  runInInjectionContext,
} from "@angular/core";
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  Firestore,
} from "@angular/fire/firestore";
import { Evaluation } from "../models/evaluation";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EvaluationService {
  private readonly firestore = inject(Firestore);
  private readonly injector = inject(EnvironmentInjector);
  private evaluationsCollection: CollectionReference<Evaluation>;

  constructor() {
    this.evaluationsCollection = collection(
      this.firestore,
      "evaluations",
    ) as CollectionReference<Evaluation>;
  }

  saveEvaluation(evaluation: Evaluation) {
    return runInInjectionContext(this.injector, () =>
      addDoc(this.evaluationsCollection, evaluation),
    );
  }

  getEvaluations(): Observable<Evaluation[]> {
    return runInInjectionContext(
      this.injector,
      () =>
        collectionData(this.evaluationsCollection, {
          idField: "id",
        }) as Observable<Evaluation[]>,
    );
  }
}
