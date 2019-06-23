import { AfterViewInit, Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Store, select } from '@ngrx/store';

import * as fromCriminal from '../state/criminals.reducer';

import { Criminal } from '../criminals.model';
import * as criminalActions from '../state/criminals.actions';

import { Router } from '@angular/router';

import * as CriminalActions from '../state/criminals.actions';

import { map, filter, count, take } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-criminal-list',
  templateUrl: './criminal-list.component.html',
  styleUrls: ['./criminal-list.component.css'],
})
export class CriminalListComponent implements OnInit {
  constructor(private store: Store<fromCriminal.AppState>, private router: Router) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  searchKey: string;
  data$;

  displayedColumns = ['id', 'first_name', 'last_name', 'update_criminal', 'delete_criminal', 'see_more'];

  ngOnInit() {
    this.store.dispatch(new CriminalActions.LoadCriminals());
    this.data$ = this.store.pipe(select(fromCriminal.getCriminals));

    this.data$.subscribe(list => {
      let array = list.map(item => {
        return item;
      });

      this.dataSource = new MatTableDataSource(array);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteCriminal(criminal: Criminal) {
    if (confirm('Sure You Want to Delete this Criminal from Our Database?')) {
      this.store.dispatch(new criminalActions.DeleteCriminal(criminal.id));
    }
  }

  updateCriminal(criminal: Criminal) {
    this.store.dispatch(new criminalActions.LoadCriminal(criminal.id));
  }

  seeDetails(criminal: Criminal) {
    this.router.navigate(['/mostWanted/details', criminal.id]);
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}
