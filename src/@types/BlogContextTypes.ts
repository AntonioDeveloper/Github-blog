import { BlogIssueType } from "./BlogIssueType";

export interface BlogIntro {
  userName: string;
  userLogin: string;
  userCompany: string;
  userBio: string;
}

export interface IssueType {
  issues: BlogIssueType[];
  map(x: any): any;
}