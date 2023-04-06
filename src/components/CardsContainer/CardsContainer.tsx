import { BlogIssueType } from "../../@types/BlogIssueType"
import { IssueCard } from "../IssueCard/IssueCard";
import { CardsContainerStyles } from "./styles";

interface issuesArray {
  allIssues: BlogIssueType[]
}

export function CardsContainer({ allIssues }: issuesArray) {
  return (
    <CardsContainerStyles>
      {
        allIssues.map((i: BlogIssueType) => {
          return (
            <IssueCard item={i} key={i.id} />
          );
        })
      }
    </CardsContainerStyles>
  )
}