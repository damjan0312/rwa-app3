import * as criminalActions from './criminals.actions';
import { Criminal } from '../criminals.model';
import * as fromRoot from '../../state/app-state';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CriminalState extends EntityState<Criminal> {
  selectedCriminalId: number | null;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  criminals: CriminalState;
}

export const criminalAdapter: EntityAdapter<Criminal> = createEntityAdapter<Criminal>();

export const defaultCriminal: CriminalState = {
  ids: [],
  entities: {},
  selectedCriminalId: null,
  error: '',
};

export const initialState = criminalAdapter.getInitialState(defaultCriminal);

export const criminalReducer = (state = initialState, action: criminalActions.Action): CriminalState => {
  switch (action.type) {
    case criminalActions.CriminalActionTypes.LOAD_CRIMINALS: {
      return {
        ...state,
      };
    }
    case criminalActions.CriminalActionTypes.LOAD_CRIMINALS_SUCCESS: {
      return criminalAdapter.addAll(action.payload, {
        ...state,
        error: '',
      });
    }
    case criminalActions.CriminalActionTypes.LOAD_CRIMINALS_FAIL: {
      return {
        ...state,
        entities: {},
        error: action.payload,
      };
    }
    //---
    case criminalActions.CriminalActionTypes.LOAD_CRIMINAL_SUCCESS: {
      return criminalAdapter.addOne(action.payload, {
        ...state,
        selectedCriminalId: action.payload.id,
      });
    }
    case criminalActions.CriminalActionTypes.LOAD_CRIMINAL_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    //---
    case criminalActions.CriminalActionTypes.CREATE_CRIMINAL_SUCCESS: {
      return criminalAdapter.addOne(action.payload, state);
    }
    case criminalActions.CriminalActionTypes.CREATE_CRIMINAL_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    //---
    case criminalActions.CriminalActionTypes.UPDATE_CRIMINAL_SUCCESS: {
      return criminalAdapter.updateOne(action.payload, state);
    }
    case criminalActions.CriminalActionTypes.UPDATE_CRIMINAL_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    //---
    case criminalActions.CriminalActionTypes.DELETE_CRIMINAL_SUCCESS: {
      return criminalAdapter.removeOne(action.payload, state);
    }
    case criminalActions.CriminalActionTypes.DELETE_CRIMINAL_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

const getCriminalFeatureState = createFeatureSelector<CriminalState>('criminals');

export const getCriminals = createSelector(
  getCriminalFeatureState,
  criminalAdapter.getSelectors().selectAll
);

export const getError = createSelector(
  getCriminalFeatureState,
  (state: CriminalState) => state.error
);

export const getSelectedCriminalId = createSelector(
  getCriminalFeatureState,
  (state: CriminalState) => state.selectedCriminalId
);

export const getSelected = createSelector(
  getCriminalFeatureState,
  getSelectedCriminalId,
  state => state.entities[state.selectedCriminalId]
);
