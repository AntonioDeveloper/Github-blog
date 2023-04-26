import { IssueContentContainer } from "./styles";
import ReactMarkdown from 'react-markdown';

interface ContentProps {
  content: string;
}

export function IssueContent({ content }: ContentProps) {
  return (
    <IssueContentContainer>
      <ReactMarkdown children={content} />
    </IssueContentContainer>
  )
}