import { Action } from '@ngrx/store';
import { Criminal } from '../criminals.model';

//entity import
import { Update } from '@ngrx/entity';

export enum CriminalActionTypes {
  LOAD_CRIMINALS = 'LOAD_CRIMINALS',
  LOAD_CRIMINALS_SUCCESS = 'LOAD_CRIMINALS_SUCCESS',
  LOAD_CRIMINALS_FAIL = 'LOAD_CRIMINALS_FAIL',

  LOAD_CRIMINAL = 'LOAD_CRIMINAL',
  LOAD_CRIMINAL_SUCCESS = 'LOAD_CRIMINAL_SUCCESS',
  LOAD_CRIMINAL_FAIL = 'LOAD_CRIMINAL_FAIL',

  CREATE_CRIMINAL = 'CREATE_CRIMINAL',
  CREATE_CRIMINAL_SUCCESS = 'CREATE_CRIMINAL_SUCCESS',
  CREATE_CRIMINAL_FAIL = 'CREATE_CRIMINAL_FAIL',

  DELETE_CRIMINAL = 'DELETE_CRIMINAL',
  DELETE_CRIMINAL_SUCCESS = 'DELETE_CRIMINAL_SUCCESS',
  DELETE_CRIMINAL_FAIL = 'DELETE_CRIMINAL_FAIL',

  UPDATE_CRIMINAL = 'UPDATE_CRIMINAL',
  UPDATE_CRIMINAL_SUCCESS = 'UPDATE_CRIMINAL_SUCCESS',
  UPDATE_CRIMINAL_FAIL = 'UPDATE_CRIMINAL_FAIL',
}

// load criminals
export class LoadCriminals implements Action {
  readonly type = CriminalActionTypes.LOAD_CRIMINALS;
}
export class LoadCriminalsSuccess implements Action {
  readonly type = CriminalActionTypes.LOAD_CRIMINALS_SUCCESS;

  constructor(public payload: Criminal[]) {}
}
export class LoadCriminalsFail implements Action {
  readonly type = CriminalActionTypes.LOAD_CRIMINALS_FAIL;

  constructor(public payload: string) {}
}
// load criminal
export class LoadCriminal implements Action {
  readonly type = CriminalActionTypes.LOAD_CRIMINAL;

  constructor(public payload: number) {}
}
export class LoadCriminalSuccess implements Action {
  readonly type = CriminalActionTypes.LOAD_CRIMINAL_SUCCESS;

  constructor(public payload: Criminal) {}
}
export class LoadCriminalFail implements Action {
  readonly type = CriminalActionTypes.LOAD_CRIMINAL_FAIL;

  constructor(public payload: string) {}
}
// create criminal
export class CreateCriminal implements Action {
  readonly type = CriminalActionTypes.CREATE_CRIMINAL;

  constructor(public payload: Criminal) {}
}
export class CreateCriminalSuccess implements Action {
  readonly type = CriminalActionTypes.CREATE_CRIMINAL_SUCCESS;

  constructor(public payload: Criminal) {}
}
export class CreateCriminalFail implements Action {
  readonly type = CriminalActionTypes.CREATE_CRIMINAL_FAIL;

  constructor(public payload: string) {}
}

// update criminal

export class UpdateCriminal implements Action {
  readonly type = CriminalActionTypes.UPDATE_CRIMINAL;

  constructor(public payload: Criminal) {}
}
export class UpdateCriminalSuccess implements Action {
  readonly type = CriminalActionTypes.UPDATE_CRIMINAL_SUCCESS;

  constructor(public payload: Update<Criminal>) {}
}
export class UpdateCriminalFail implements Action {
  readonly type = CriminalActionTypes.UPDATE_CRIMINAL_FAIL;

  constructor(public payload: string) {}
}

// delete criminal
export class DeleteCriminal implements Action {
  readonly type = CriminalActionTypes.DELETE_CRIMINAL;

  constructor(public payload: number) {}
}
export class DeleteCriminalSuccess implements Action {
  readonly type = CriminalActionTypes.DELETE_CRIMINAL_SUCCESS;

  constructor(public payload: number) {}
}
export class DeleteCriminalFail implements Action {
  readonly type = CriminalActionTypes.DELETE_CRIMINAL_FAIL;

  constructor(public payload: string) {}
}

// all the actions
export type Action =
  | LoadCriminals
  | LoadCriminalsSuccess
  | LoadCriminalsFail
  | LoadCriminal
  | LoadCriminalSuccess
  | LoadCriminalFail
  | CreateCriminal
  | CreateCriminalSuccess
  | CreateCriminalFail
  | UpdateCriminal
  | UpdateCriminalSuccess
  | UpdateCriminalFail
  | DeleteCriminal
  | DeleteCriminalFail
  | DeleteCriminalSuccess;
