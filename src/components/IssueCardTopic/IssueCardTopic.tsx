import { IssueCardTopicContainer } from "./styles";
import { GithubLogo } from "phosphor-react";
import { Calendar } from "phosphor-react";
import { ChatCircle } from "phosphor-react";
import backIcon from "../../assets/back-icon.png";
import goToIcon from "../../assets/goto-icon.png";
import { Link } from "react-router-dom";

interface IssuePageHeader {
  number: number | undefined;
  title: string | undefined;
  issueOwner: string | undefined;
  dateCreation: string | undefined;
  comments: number | undefined;
  body: string | undefined;
}

export function IssueCardTopic({ number, title, issueOwner, dateCreation, comments }: IssuePageHeader) {
  console.log("number", number, "TITLE", title, "ISSUE HEADER", issueOwner, "DATE", dateCreation, "COMMENTS", comments);

  return (
    <IssueCardTopicContainer>
      <div className="header-links">
        <Link to="/">
          <img src={backIcon} alt="" />
          VOLTAR
        </Link>
        <Link to={`https://github.com/AntonioDeveloper/Github-blog/issues/${number}`}>
          VER NO GITHUB
          <img src={goToIcon} alt="" />
        </Link>
      </div>
      <h1 className="issue-title">{title}</h1>
      <ul className="issue-header-icons">
        <li>
          <GithubLogo color={"#7B96B2"} size={20} />
          <span>
            {issueOwner}
          </span>
        </li>
        <li>
          <Calendar color={"#7B96B2"} size={20} />
          <span>
            {dateCreation}
          </span>
        </li>
        <li>
          <ChatCircle color={"#7B96B2"} size={20} />
          <span>
            {comments}
          </span>
        </li>
      </ul>
    </IssueCardTopicContainer >
  )
}