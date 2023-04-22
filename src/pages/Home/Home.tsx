import { BioCard } from "../../components/BioCard/BioCard";
import { Body } from "../../components/Body";
import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";

export function Home() {

  const { user } = useContext(BlogContext);

  return (
    <div>
      <BioCard owner={user} />
      <Body />
    </div>
  )
}