import { IssueCardTopic } from "../../components/IssueCardTopic/IssueCardTopic";
import { IssuePageContainer } from "./styles";
import { BlogContext } from "../../context/BlogContext";
import { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";


export function IssuePage() {

  const { getIssue, singleIssue } = useContext(BlogContext);

  // Desconstruímos da URL a varíavel idPost
  let { postNumber } = useParams();

  useEffect(() => {
    getIssue(postNumber);
  }, []);

  console.log(singleIssue);

  return (
    <IssuePageContainer>
      <IssueCardTopic
        issueOwner={singleIssue.user.login}
        dateCreation={singleIssue.created_at}
        comments={singleIssue.comments}
        body={singleIssue.body}
      />
    </IssuePageContainer>
  )
}