import { BioCardContainer } from "./styles";
import { BlogIntro } from "../../@types/BlogContextTypes";

interface Bio {
  owner: BlogIntro
}

export function BioCard({ owner }: Bio) {
  console.log(owner);
  return (
    <BioCardContainer>
      <img src={owner.userImage} alt="Owner Image" />
      <h1>{owner.userName}</h1>
    </BioCardContainer>
  );
}