import styled from "styled-components";

export const IssueCardTopicContainer = styled.section`
  position: relative;
  background-color: #0B1B2B;
  color: #fff;
  width: 70%;
  height: 212px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  box-sizing: border-box;
  padding: 32px 40px;
  position: absolute;
  top: 188px;
  left: -35%;
  margin-left: 50%;

  .header-links {
    display: flex;
    justify-content: space-between;

    a {
       color: #3294F8;
       font-family: 'Nunito';
       font-style: normal;
       font-weight: 700;
       text-decoration: none;
    }
  }

  .issue-header-icons {
    list-style: none;
    display: flex;

    li {
      width: 250px;
    }
  }
`