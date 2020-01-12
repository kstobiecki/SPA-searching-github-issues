import {UserInterface, LabelInterface, PullRequestInterface} from './';

export interface IssueItemInterface {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: UserInterface;
  labels: LabelInterface[];
  state: string;
  assigne: UserInterface;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: Date;
  pull_request: PullRequestInterface;
  body: string;
  score: number;
}
