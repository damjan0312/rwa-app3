import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, PageEvent } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject, combineLatest } from 'rxjs';

import { Criminal } from '../criminals.model';
import { Store, select } from '@ngrx/store';

import * as CriminalActions from '../state/criminals.actions';

import * as fromCriminal from '../state/criminals.reducer';

/**
 * Data source for the CriminalList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CriminalListDataSource extends DataSource<Criminal> {
  data$: Observable<Criminal[]>;

  constructor(private paginator: MatPaginator, private sort: MatSort, private store: Store<any>) {
    super();

    this.store.dispatch(new CriminalActions.LoadCriminals());
    this.data$ = this.store.pipe(select(fromCriminal.getCriminals));
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Criminal[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    //  const dataMutations = [this.data$, this.paginator.page, this.sort.sortChange];

    // Set the paginator's length
    /*   this.data$.subscribe(result => {
      this.paginator.length = result.length;
    });


    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.myarray]));
      })
    );*/
    return combineLatest(this.data$).pipe(map(result => this.getPagedData(result[0])));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Criminal[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.slice().splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Criminal[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.first_name, b.first_name, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
