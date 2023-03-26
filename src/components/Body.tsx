import { useContext, useState, useEffect } from "react";
import { BlogContext } from "../context/BlogContext";

export function Body() {

  const { user, issues } = useContext(BlogContext);

  console.log(issues);

  return (
    <div>
      <h1>Body</h1>
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