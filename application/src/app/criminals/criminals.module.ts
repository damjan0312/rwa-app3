import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { CriminalComponent } from './criminal/criminal.component';
import { CriminalAddComponent } from './criminal-add/criminal-add.component';
import { CriminalEditComponent } from './criminal-edit/criminal-edit.component';
import { CriminalListComponent } from './criminal-list/criminal-list.component';

import { StoreModule } from '@ngrx/store';
import { criminalReducer } from './state/criminals.reducer';

import { EffectsModule, Actions } from '@ngrx/effects';
import { CriminalEffect } from './state/criminals.effects';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CriminalComponent,
  },
];

@NgModule({
  declarations: [CriminalComponent, CriminalAddComponent, CriminalEditComponent, CriminalListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    StoreModule.forFeature('criminals', criminalReducer),
    EffectsModule.forFeature([CriminalEffect]),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CriminalsModule {}
