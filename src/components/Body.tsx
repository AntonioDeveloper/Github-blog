import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { CardsContainer } from "./CardsContainer/CardsContainer";


export function Body() {

  const { issues } = useContext(BlogContext);

  return (
    <div>
      <CardsContainer allIssues={issues} />
    </div>
  );
}