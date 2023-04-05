import { BlogIssueType } from "../../@types/BlogIssueType";
import { IssueItemContainer } from "./styles";

interface itemIssue {
  item: BlogIssueType;
}

export function IssueCard({ item }: itemIssue) {
  return (
    <IssueItemContainer>
      <h3>{item.title}</h3>
      <span>{item.created_at}</span>
      <p>{item.body}</p>
    </IssueItemContainer>
  )
}