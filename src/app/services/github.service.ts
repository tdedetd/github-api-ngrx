import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService {

  private readonly baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {
  }

}
