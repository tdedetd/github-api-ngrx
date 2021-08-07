import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GithubService } from './services/github.service';
import { HeaderComponent } from './components/header/header.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';

const routes: Routes = [
  { path: '', component: RepositoriesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RepositoriesComponent,
    RepoCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
