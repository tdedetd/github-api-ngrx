import { User } from "./user";

export interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  description: string;
  owner: User;
  fork: boolean;
  language: string;
  forks: number;
  open_issues: number;
  watchers: number;
}
