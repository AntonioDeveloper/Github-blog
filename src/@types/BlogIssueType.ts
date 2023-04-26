export interface BlogIssueType {
  id: number | undefined;
  number: number;
  title: string;
  created_at: string;
  body: string;
}

export interface SingleIssueType {
  id: number | undefined;
  number: number | undefined;
  title: string | undefined;
  created_at: string | undefined;
  user: {
    login: string | undefined,
  },
  comments: number,
  body: string;
}