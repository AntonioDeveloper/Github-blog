import { useContext } from "react";
import { HeaderContainer } from "./styles";
import cover from "../../assets/cover.png";
import { BioCard } from "../BioCard/BioCard";
import { BlogContext } from "../../context/BlogContext";

export function Header() {
  const { user } = useContext(BlogContext);

  return (
    <HeaderContainer>
      <img src={cover} alt="" />
      <BioCard owner={user} />
    </HeaderContainer>
  )
}