import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Criminal } from './criminals.model';

@Injectable({
  providedIn: 'root',
})
export class CriminalService {
  private URL = 'http://localhost:3001/criminals';

  constructor(private http: HttpClient) {}

  loadCriminals(): Observable<Criminal[]> {
    return this.http.get<Criminal[]>(this.URL);
  }

  getCriminal(id: number): Observable<Criminal> {
    return this.http.get<Criminal>(`${this.URL}/${id}`);
  }

  createCriminal(newCriminal: Criminal): Observable<Criminal> {
    return this.http.post<Criminal>(this.URL, newCriminal);
  }

  updateCriminal(criminal: Criminal): Observable<Criminal> {
    return this.http.patch<Criminal>(`${this.URL}/${criminal.id}`, criminal);
  }

  deleteCriminal(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
