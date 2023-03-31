import { BlogIssueType } from "./BlogIssueType";

export interface BlogIntro {
  userImage: string;
  userName: string;
  userLogin: string;
  userCompany: string;
  userBio: string;
  userFollowers: number;
}

export interface IssueType {
  issues: BlogIssueType;
}