import { useContext, useState, useEffect } from "react";
import { BlogContext } from "../context/BlogContext";
import { BioCard } from "./BioCard/BioCard";
import { BlogIssueType } from "../@types/BlogIssueType"
import { IssueCard } from "./IssueCard/IssueCard";

export function Body() {

  const { user, issues } = useContext(BlogContext);

  return (
    <div>
      <BioCard owner={user} />
      <div className="cardsContainer">
        {
          issues.map((i: BlogIssueType) => {
            return (
              <IssueCard item={i} key={i.id} />
            );
          })
        }
      </div>
    </div>
  );
}