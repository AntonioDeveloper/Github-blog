import { BlogIssueType } from "../../@types/BlogIssueType";
import { IssueItemContainer } from "./styles";
import { Link } from "react-router-dom"

interface itemIssue {
  item: BlogIssueType;
  idNumber?: number;
}

export function IssueCard({ item }: itemIssue) {
  console.log(item)

  const today = new Date();
  const pastDate = new Date(item.created_at);
  const timeDiff = Math.abs(today.getTime() - pastDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return (
    <IssueItemContainer>
      <Link to={`/issue/${item.id}`}>
        <div className="title-line">
          <h3>{item.title}</h3>
          <span>Há {diffDays} dia(s) atrás</span>
        </div>
        <p>{item.body}</p>
      </Link>
    </IssueItemContainer>
  )
}