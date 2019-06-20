import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CriminalListDataSource } from './criminal-list-datasource';
import { Store, select } from '@ngrx/store';

import * as fromCriminal from '../state/criminals.reducer';

import { Criminal } from '../criminals.model';
import * as criminalActions from '../state/criminals.actions';

@Component({
  selector: 'app-criminal-list',
  templateUrl: './criminal-list.component.html',
  styleUrls: ['./criminal-list.component.css'],
})
export class CriminalListComponent implements OnInit {
  constructor(private store: Store<fromCriminal.AppState>) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CriminalListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'first_name',
    'last_name',
    'update_criminal',
    'delete_criminal',
    'see_more',
    /*   'place_of_birth',
    'hair',
    'weight',
    'build',
    'sex',
    'citizenship',
    'languages',
    'scars_and_marks',
    'reward',*/
  ];

  ngOnInit() {
    //this.dataSource = new CriminalListDataSource(this.paginator, this.sort, this.store, this.cd);

    this.dataSource = new CriminalListDataSource(this.paginator, this.sort, this.store);
  }

  /* ngAfterViewInit() {
    setTimeout(() => {
      this.paginator.page
        .pipe(
          startWith(null),
          tap(() => (this.dataSource = new CriminalListDataSource(this.paginator, this.sort, this.store, this.cd)))
        )
        .subscribe();
    }); */

  //  this.dataSource = new CriminalListDataSource(this.paginator, this.sort, this.store);

  deleteCriminal(criminal: Criminal) {
    if (confirm('Sure You Want to Delete this Criminal from Our Database?')) {
      this.store.dispatch(new criminalActions.DeleteCriminal(criminal.id));
    }
  }

  updateCriminal(criminal: Criminal) {
    this.store.dispatch(new criminalActions.LoadCriminal(criminal.id));
  }
}
