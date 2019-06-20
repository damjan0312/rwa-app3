import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, State, select } from '@ngrx/store';
import * as criminalActions from '../state/criminals.actions';
import * as fromCriminal from '../state/criminals.reducer';
import { Criminal } from '../criminals.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-criminal-edit',
  templateUrl: './criminal-edit.component.html',
  styleUrls: ['./criminal-edit.component.scss'],
})
export class CriminalEditComponent implements OnInit {
  criminalForm: FormGroup;

  constructor(private builder: FormBuilder, private store: Store<fromCriminal.AppState>) {}

  ngOnInit() {
    this.criminalForm = this.builder.group({
      id: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      hair: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      build: ['', Validators.required],
      sex: ['', Validators.required],
      languages: ['', Validators.required],
      citizenship: ['', Validators.required],
      scars_and_marks: ['', Validators.required],
      reward: ['', Validators.required],
      criminal_act: ['', Validators.required],
    });

    const criminal$: Observable<Criminal> = this.store.select(fromCriminal.getSelected);

    criminal$.subscribe(selected => {
      if (selected) {
        this.criminalForm.patchValue({
          id: selected.id,
          first_name: selected.first_name,
          last_name: selected.last_name,
          hair: selected.hair,
          height: selected.height,
          weight: selected.weight,
          languages: selected.languages,
          build: selected.build,
          sex: selected.sex,
          citizenship: selected.citizenship,
          scars_and_marks: selected.scars_and_marks,
          reward: selected.reward,
          criminal_act: selected.criminal_act,
        });
      }
    });
  }

  updateCriminal() {
    const updatedCriminal: Criminal = {
      id: this.criminalForm.get('id').value,
      first_name: this.criminalForm.get('first_name').value,
      last_name: this.criminalForm.get('last_name').value,
      place_of_birth: 'Atlanta Road 656A',
      hair: this.criminalForm.get('hair').value,
      height: this.criminalForm.get('height').value,
      weight: this.criminalForm.get('weight').value,
      build: this.criminalForm.get('build').value,
      sex: this.criminalForm.get('sex').value,
      languages: this.criminalForm.get('languages').value,
      citizenship: this.criminalForm.get('citizenship').value,
      scars_and_marks: this.criminalForm.get('scars_and_marks').value,
      reward: this.criminalForm.get('reward').value,
      criminal_act: this.criminalForm.get('criminal_act').value,
    };
    this.store.dispatch(new criminalActions.UpdateCriminal(updatedCriminal));

    this.criminalForm.reset();
  }
}
