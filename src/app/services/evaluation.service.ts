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
  docData,
  Firestore,
  getDoc,
} from "@angular/fire/firestore";
import { Evaluation } from "../models/evaluation";
import { from, Observable, switchMap } from "rxjs";

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
    return runInInjectionContext(this.injector, () => {
      const docRef$ = from(addDoc(this.evaluationsCollection, evaluation));
      return docRef$.pipe(
        switchMap((docRef) => {
          return docData(docRef, { idField: "id" }) as Observable<Evaluation>;
        }),
      );
    });
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
