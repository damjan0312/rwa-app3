import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CriminalService } from '../criminal.service';
import * as criminalActions from '../state/criminals.actions';

import { Criminal } from '../criminals.model';

@Injectable() // load criminals effect
export class CriminalEffect {
  constructor(private actions$: Actions, private criminalService: CriminalService) {}

  @Effect()
  loadCriminals$: Observable<Action> = this.actions$.pipe(
    ofType<criminalActions.LoadCriminals>(criminalActions.CriminalActionTypes.LOAD_CRIMINALS),
    mergeMap((actions: criminalActions.LoadCriminals) =>
      this.criminalService.loadCriminals().pipe(
        map((criminals: Criminal[]) => new criminalActions.LoadCriminalsSuccess(criminals)),
        catchError(err => of(new criminalActions.LoadCriminalsFail(err)))
      )
    )
  );
  // load criminal effect
  @Effect()
  loadCriminal$: Observable<Action> = this.actions$.pipe(
    ofType<criminalActions.LoadCriminal>(criminalActions.CriminalActionTypes.LOAD_CRIMINAL),
    mergeMap((action: criminalActions.LoadCriminal) =>
      this.criminalService.getCriminal(action.payload).pipe(
        map((criminal: Criminal) => new criminalActions.LoadCriminalSuccess(criminal)),
        catchError(err => of(new criminalActions.LoadCriminalFail(err)))
      )
    )
  );

  // create criminal effect
  @Effect()
  createCriminal$: Observable<Action> = this.actions$.pipe(
    ofType<criminalActions.CreateCriminal>(criminalActions.CriminalActionTypes.CREATE_CRIMINAL),
    map((action: criminalActions.CreateCriminal) => action.payload),
    mergeMap((criminal: Criminal) =>
      this.criminalService.createCriminal(criminal).pipe(
        map((newCustomer: Criminal) => new criminalActions.CreateCriminalSuccess(newCustomer)),
        catchError(err => of(new criminalActions.CreateCriminalFail(err)))
      )
    )
  );

  // update criminal effect

  @Effect()
  updateCriminal$: Observable<Action> = this.actions$.pipe(
    ofType<criminalActions.UpdateCriminal>(criminalActions.CriminalActionTypes.UPDATE_CRIMINAL),
    map((action: criminalActions.UpdateCriminal) => action.payload),
    mergeMap((criminal: Criminal) =>
      this.criminalService.updateCriminal(criminal).pipe(
        map(
          (updateCriminal: Criminal) =>
            new criminalActions.UpdateCriminalSuccess({
              id: updateCriminal.id,
              changes: updateCriminal,
            })
        ),
        catchError(err => of(new criminalActions.UpdateCriminalFail(err)))
      )
    )
  );

  // delete criminal effect

  @Effect()
  deleteCriminal$: Observable<Action> = this.actions$.pipe(
    ofType<criminalActions.DeleteCriminal>(criminalActions.CriminalActionTypes.DELETE_CRIMINAL),
    map((action: criminalActions.DeleteCriminal) => action.payload),
    mergeMap((id: number) =>
      this.criminalService.deleteCriminal(id).pipe(
        map(() => new criminalActions.DeleteCriminalSuccess(id)),
        catchError(err => of(new criminalActions.DeleteCriminalFail(err)))
      )
    )
  );
}
