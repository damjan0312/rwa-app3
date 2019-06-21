import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CriminalDetailsComponent } from './criminals/criminal-details/criminal-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'mostWanted',
    loadChildren: '../app/criminals/criminals.module#CriminalsModule',
  },
  {
    path: 'mostWanted/details/:id',
    component: CriminalDetailsComponent,
  },
  {
    path: 'newsFeed',
    component: NewsFeedComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
