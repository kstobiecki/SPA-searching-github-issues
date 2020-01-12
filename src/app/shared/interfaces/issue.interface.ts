import {IssueItemInterface} from './';

export interface IssueInterface {
  incomplete_results: boolean;
  total_count: number;
  items: IssueItemInterface[];
}
