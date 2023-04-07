import { BlogIssueType } from "../../@types/BlogIssueType";
import { IssueItemContainer } from "./styles";

interface itemIssue {
  item: BlogIssueType;
}

export function IssueCard({ item }: itemIssue) {

  const today = new Date();
  const pastDate = new Date(item.created_at);
  const timeDiff = Math.abs(today.getTime() - pastDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return (
    <IssueItemContainer>
      <div className="title-line">
        <h3>{item.title}</h3>
        <span>Há {diffDays} dia(s) atrás</span>
      </div>
      <p>{item.body}</p>
    </IssueItemContainer>
  )
}