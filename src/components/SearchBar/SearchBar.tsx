import { SearchBarContainer } from "./styles";
import { useContext, useState } from 'react';
import { BlogContext } from "../../context/BlogContext";

interface InputVal {
  setQuery: (value: string) => void;
  qtdeIssues: number;
}

export function SearchBar({ qtdeIssues, setQuery }: InputVal) {

  const { issueSearch } = useContext(BlogContext);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  let queryStr = "";
  const newQtyIssue = 1;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    queryStr = inputValue.replaceAll(" ", "%20");
    setQuery(queryStr);
    console.log(newQtyIssue)
    if (queryStr !== " ") {
      setQuery("");
      qtdeIssues = qtdeIssues;
      console.log(qtdeIssues)
      return;
    }
    issueSearch(queryStr);
  };

  return (
    <SearchBarContainer>
      <form onSubmit={handleSubmit}>
        <div className="label-line">
          <label htmlFor="issues-search">
            Publicações
          </label>
          <span>
            {
              !queryStr ?
                qtdeIssues
                :
                newQtyIssue
            }
            publicações
          </span>
        </div>
        <input type="search" id="issue-search" name="issue-search" placeholder="Buscar conteúdo" onChange={handleInputChange} />

        <button type="submit">Buscar</button>
      </form>
    </SearchBarContainer>
  )
}