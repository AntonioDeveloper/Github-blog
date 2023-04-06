import { BioCardContainer } from "./styles";
import { BlogIntro } from "../../@types/BlogContextTypes";
import companyIcon from "../../assets/company-icon.png";
import followersIcon from "../../assets/followers-icon.png";
import githubIcon from "../../assets/github-icon.png";
import githubLink from "../../assets/github-link.png";


interface Bio {
  owner: BlogIntro
}

export function BioCard({ owner }: Bio) {
  //console.log(owner);
  return (
    <BioCardContainer>

      <img className="img-owner-profile" src={owner.userImage} alt="Owner Image" />
      <div className="owner-infos">
        <div className="headline">
          <h1>{owner.userName}</h1>
          <a href="https://github.com/AntonioDeveloper">
            <img src={githubLink} alt="Github Link" />
          </a>
        </div>
        <p>
          {owner.userBio}
        </p>
        <ul className="bio-icons">
          <li>
            <img src={githubIcon} alt="Github Icon" />
            <span>
              {owner.userLogin}
            </span>
          </li>
          <li>
            <img src={companyIcon} alt="Company Icon" />
            <span>
              {owner.userCompany}
            </span>
          </li>
          <li>
            <img src={followersIcon} alt="Followers Icon" />
            <span>
              {owner.userFollowers}
            </span>
          </li>
        </ul>
      </div>

    </BioCardContainer>
  );
}