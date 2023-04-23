import { IssueCardTopicContainer } from "./styles";
import { GithubLogo } from "phosphor-react";
import { Calendar } from "phosphor-react";
import { ChatCircle } from "phosphor-react";
import { Eye } from "phosphor-react";
import { Link } from "react-router-dom";

interface IssuePageHeader {
  title: string | undefined;
  issueOwner: string | undefined;
  dateCreation: string | undefined;
  comments: number | undefined;
  body: string | undefined;
}

export function IssueCardTopic({ title, issueOwner, dateCreation, comments }: IssuePageHeader) {
  console.log("TITLE", title, "ISSUE HEADER", issueOwner, "DATE", dateCreation, "COMMENTS", comments);

  return (
    <IssueCardTopicContainer>
      <div className="header-links">
        <Link to="#">
          VOLTAR
        </Link>
        <Link to="#">
          <Eye />
          VER NO GITHUB
        </Link>
      </div>
      <h1 className="issue-title">{title}</h1>
      <ul className="issue-header-icons">
        <li>
          <GithubLogo />
          <span>
            {issueOwner}
          </span>
        </li>
        <li>
          <Calendar />
          <span>
            {dateCreation}
          </span>
        </li>
        <li>
          <ChatCircle />
          <span>
            {comments}
          </span>
        </li>
      </ul>
    </IssueCardTopicContainer >
  )
}