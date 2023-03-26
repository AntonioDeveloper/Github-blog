import { useContext, useState, useEffect } from "react";
import { BlogContext } from "../context/BlogContext";

export function Body() {

  const { user, issues, singleIssue } = useContext(BlogContext);

  console.log(singleIssue);

  return (
    <h1>Body</h1>
  );
}