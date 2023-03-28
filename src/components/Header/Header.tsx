import { HeaderContainer } from "./styles";
import cover from "../../assets/cover.png";

export function Header() {
  return (
    <HeaderContainer>
      <img src={cover} alt="" />
    </HeaderContainer>
  )
}