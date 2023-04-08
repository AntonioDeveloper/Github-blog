import { BlogIssueType } from "../../@types/BlogIssueType"
import { IssueCard } from "../IssueCard/IssueCard";
import { SearchBar } from "../SearchBar/SearchBar";
import { CardsContainerStyles } from "./styles";
import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";

interface issuesArray {
  allIssues: BlogIssueType[];
}

// interface oneIssue {
//   singleIssue: BlogIssueType;
// }

export function CardsContainer({ allIssues }: issuesArray) {

  const { singleIssue } = useContext(BlogContext);

  console.log("One", singleIssue);
  // let singleIssueCard;
  // if (singleIssue) {
  //   singleIssueCard = allIssues.find((i: BlogIssueType) => i.id === singleIssue.id);
  // }

  //console.log(singleIssueCard)
  return (
    <CardsContainerStyles>
      <SearchBar />
      {/* {
        !singleIssue ?
          allIssues.map((i: BlogIssueType) => {
            return (
              <IssueCard item={i} key={i.id} />
            );
          })
          :
          <IssueCard item={i} idNumber={singleIssue.id} />
      } */}

      {allIssues.map((i: BlogIssueType) => {
        return (
          <IssueCard item={i} key={i.id} />
        );
      })
      }
    </CardsContainerStyles>
  )
}