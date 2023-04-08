export interface BlogIssueType {
  id: number;
  title: string;
  created_at: string;
  body: string;
}

export interface SingleIssueType {
  id: number;
  title: string;
  created_at: string;
  body: string;
  items: []
}