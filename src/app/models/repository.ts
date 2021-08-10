import { User } from "./user";

export interface Repository {
  id: number;
  name?: string;
  full_name?: string;
  description?: string;
  owner?: User;
  fork?: boolean;
  language?: string;
  forks?: number;
  open_issues?: number;
  watchers?: number;
  stargazers_count?: number;
  html_url?: string;
}
