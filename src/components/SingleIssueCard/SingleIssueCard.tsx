import { SingleIssueType } from "../../@types/BlogIssueType";
import { SingleIssueItemContainer } from "./styles";

// interface SingleItemIssue {
//   id: number | undefined;
//   title: string | undefined;
//   created_at: string | undefined;
//   body: string | undefined;
//   items: [] | undefined;
// }

export function SingleIssueCard({ title, created_at, body }: SingleIssueType) {

  const today = new Date();
  const pastDate = new Date(`${created_at}`);
  const timeDiff = Math.abs(today.getTime() - pastDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return (
    <SingleIssueItemContainer>
      <div className="title-line">
        <h3>{title}</h3>
        <span>Há {diffDays} dia(s) atrás</span>
      </div>
      <p>{body}</p>
    </SingleIssueItemContainer>
  )
}