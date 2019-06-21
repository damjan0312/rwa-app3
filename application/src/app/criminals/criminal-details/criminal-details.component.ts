import { Component, OnInit } from '@angular/core';

import { Store, State, select } from '@ngrx/store';
import * as criminalActions from '../state/criminals.actions';
import * as fromCriminal from '../state/criminals.reducer';
import { Criminal } from '../criminals.model';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-criminal-details',
  templateUrl: './criminal-details.component.html',
  styleUrls: ['./criminal-details.component.scss'],
})
export class CriminalDetailsComponent implements OnInit {
  public criminalId: number;
  constructor(private store: Store<fromCriminal.AppState>, private route: ActivatedRoute) {}
  public model: Criminal;
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.store.dispatch(new criminalActions.LoadCriminal(id));
    this.criminalId = id;

    const criminal$: Observable<Criminal> = this.store.select(fromCriminal.getSelected);

    criminal$.subscribe(selected => {
      if (selected) {
        this.model = selected;
      } else {
        this.model = null;
      }
    });
  }
}
