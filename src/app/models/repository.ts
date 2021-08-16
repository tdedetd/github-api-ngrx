import { User } from "./user";

export interface Repository {
  id: number;
  name: string;
  description: string;
  owner: User;
  language: string;
  forks: number;
  stargazers_count: number;
  html_url: string;
}
