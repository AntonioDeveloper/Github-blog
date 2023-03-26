import { useContext, useState, useEffect } from "react";
import { BlogContext } from "../context/BlogContext";

export function Body() {

  const { user } = useContext(BlogContext);

  console.log(user.userName, user.userLogin, user.userCompany, user.userBio);

  return (
    <h1>Body</h1>
  );
}