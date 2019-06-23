import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { MaterialModule } from './material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { CriminalDetailsComponent } from './criminals/criminal-details/criminal-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import * as fromCriminals from '../app/criminals/state/criminals.reducer';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CriminalDetailsComponent,
    NotFoundComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    StoreModule.forRoot({
      //  news: fromNews.newsReducer,
      //   criminalReducer: fromCriminals.criminalReducer,
    }),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
