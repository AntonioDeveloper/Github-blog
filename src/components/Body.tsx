import { useContext, useState, useEffect } from "react";
import { BlogContext } from "../context/BlogContext";
import { BioCard } from "./BioCard/BioCard";

export function Body() {

  const { user, issues } = useContext(BlogContext);

  //console.log(user);

  return (
    <div>
      <BioCard owner={user} />
      {
        issues.map((i: any) => {
          return (
            <div key={i.id}>
              <h3>{i.title}</h3>
              <span>{i.created_at}</span>
              <p>{i.body}</p>
            </div>
          );
        })
      }
    </div>
  );
}