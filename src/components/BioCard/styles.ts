import styled from 'styled-components'

export const BioCardContainer = styled.div`
  position: relative;
  background-color: #0B1B2B;
  color: #fff;
  width: 70%;
  height: 212px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 32px 40px;
  position: absolute;
  top: 188px;
  left: -35%;
  margin-left: 50%;
  
  .img-owner-profile {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    display: inline-block;
    float: left;
  }

  .owner-infos {
    width: 70%;
    float: right;

    .headline {
      width: 100%;
      display: inline-block;
      margin-bottom: 10px;
  
      h1 {
        display: inline;
      }
  
      a {
          float: right;
        }
  
    }
  
    .bio-icons {
      margin-top: 24px;

      li {
        display: inline;
        margin-right: 24px;

        img {
          margin-right: 10px;
        }
      }
    }
  }
`;