export interface BlogIssueType {
  id: number;
  title: string;
  created_at: string;
  body: string;
}

export interface SingleIssueType {
  id: number | undefined;
  title: string | undefined;
  created_at: string | undefined;
  body: string | undefined;
  items: [
    {
      id: number | undefined;
      title: string | undefined;
      created_at: string | undefined;
      body: string | undefined;
    }
  ] | undefined;
}