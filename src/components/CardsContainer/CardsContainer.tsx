import { BlogIssueType } from "../../@types/BlogIssueType"
import { IssueCard } from "../IssueCard/IssueCard";
import { SingleIssueCard } from "../SingleIssueCard/SingleIssueCard";
import { SearchBar } from "../SearchBar/SearchBar";
import { CardsContainerStyles } from "./styles";
import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";

interface issuesArray {
  allIssues: BlogIssueType[];
}

interface SearchFormInput {

}

export function CardsContainer({ allIssues }: issuesArray) {

  const { singleIssue } = useContext(BlogContext);

  console.log("One", singleIssue);
  // let singleIssueCard;
  // if (singleIssue) {
  //   singleIssueCard = allIssues.find((i: BlogIssueType) => i.id === singleIssue.id);
  // }

  //console.log(singleIssueCard);

  return (
    <CardsContainerStyles>
      <SearchBar />
      {
        singleIssue.items?.[0].body === "" ?
          allIssues.map((i: BlogIssueType) => {
            return (
              <IssueCard item={i} key={i.id} />
            );
          })
          :
          <SingleIssueCard id={singleIssue.items?.[0].id} title={singleIssue.items?.[0].title} created_at={singleIssue.items?.[0].created_at} body={singleIssue.items?.[0].body} items={singleIssue?.items} />

      }
    </CardsContainerStyles>
  )
}
