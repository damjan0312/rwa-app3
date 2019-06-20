import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Store, State, select } from '@ngrx/store';
import * as criminalActions from '../state/criminals.actions';
import * as fromCriminal from '../state/criminals.reducer';
import { Criminal } from '../criminals.model';

@Component({
  selector: 'app-criminal-add',
  templateUrl: './criminal-add.component.html',
  styleUrls: ['./criminal-add.component.scss'],
})
export class CriminalAddComponent implements OnInit {
  criminalForm: FormGroup;

  constructor(private builder: FormBuilder, private store: Store<fromCriminal.AppState>) {}

  ngOnInit() {
    this.criminalForm = this.builder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      // place_of_birth: ['', Validators.required],
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
  }

  createCriminal() {
    console.log('Ajde be');

    const newCriminal: Criminal = {
      first_name: this.criminalForm.get('first_name').value,
      last_name: this.criminalForm.get('last_name').value,
      // place_of_birth: this.criminalForm.get('place_of_birth').value,
      place_of_birth: 'Atlanta Road 564A',
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

    console.log(newCriminal);

    this.store.dispatch(new criminalActions.CreateCriminal(newCriminal));

    this.criminalForm.reset();
  }
}
