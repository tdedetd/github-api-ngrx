import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { SearchRepoRequest } from "../models/search-repo-request";
import { SearchRepoResponse } from "../models/search-repo-response";

@Injectable()
export class GithubService {

  private readonly baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {
  }

  public getRepositories(params: SearchRepoRequest) {
    return this.http.get<SearchRepoResponse>(this.baseUrl + '/search/repositories', { params: params as any });
  }
}
