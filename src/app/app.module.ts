import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { GithubService } from './services/github.service';
import { HeaderComponent } from './components/header/header.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { RepoEffects } from './store/repo.effects';
import { reducers } from './store';
import { FiltersComponent } from './components/filters/filters.component';

const routes: Routes = [
  { path: '', component: RepositoriesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RepositoriesComponent,
    RepoCardComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([RepoEffects])
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
