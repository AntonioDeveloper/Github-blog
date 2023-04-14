import { BlogIssueType } from "../../@types/BlogIssueType"
import { IssueCard } from "../IssueCard/IssueCard";
import { SingleIssueCard } from "../SingleIssueCard/SingleIssueCard";
import { SearchBar } from "../SearchBar/SearchBar";
import { CardsContainerStyles } from "./styles";
import { useContext, useState } from "react";
import { BlogContext } from "../../context/BlogContext";

interface issuesArray {
  allIssues: BlogIssueType[];
}

export function CardsContainer({ allIssues }: issuesArray) {

  const { singleIssue } = useContext(BlogContext);

  const [inputVal, setIputVal] = useState("");

  let totalIssues: number = allIssues.length;

  return (
    <CardsContainerStyles>
      <SearchBar setQuery={setIputVal} qtdeIssues={totalIssues} />
      {
        singleIssue.items?.[0].body === "" || inputVal === "" ?
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
