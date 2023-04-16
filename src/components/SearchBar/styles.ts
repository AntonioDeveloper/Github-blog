import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;

  .label-line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    label {
      color: #fff;
    }

    span {
      color: #7B96B2;

    }
  }

  #issue-search {
      width: 95%;
      background: #040F1A;
      border: 1px solid #1C2F41;
      border-radius: 6px;
      box-sizing: border-box;
      padding: 12px 16px;
      color: white;
    }

    button {
      color: #fff;
      background: #040F1A;
      border: 1px solid #1C2F41;
      border-radius: 6px;
      box-sizing: border-box;
      padding: 10px;
      position: relative;
      float: right;
    }
`;