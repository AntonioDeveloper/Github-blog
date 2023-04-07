import styled from "styled-components";

export const IssueItemContainer = styled.div`
  color: #fff;
  width: 48%;
  min-height: 200px;
  background: #112131;
  border-radius: 10px;
  padding: 32px;
  margin: 32px 0;
  
  .title-line {
    display: flex;
    justify-content: space-between;

    h3{
      font-size: 16px;
      line-height: 28px;
      max-width: 70%;
      height: 56px;
      display: -webkit-inline-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  
    span {
      font-size: 14px;
      line-height: 28px;
      font-weight: 200;
    }
  }

  p {
    margin-top: 10px;
    display: -webkit-inline-box;
    width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 16px;
    line-height: 160%;
  }
`;

