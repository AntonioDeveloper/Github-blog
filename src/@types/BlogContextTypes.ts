import { BlogIssueType } from "./BlogIssueType";

export interface BlogIntro {
  userImage: string;
  userName: string;
  userLogin: string;
  userCompany: string;
  userBio: string;
}

export interface IssueType {
  issues: BlogIssueType;
}