import { SearchBarContainer } from "./styles";
import { useContext, useState, useEffect } from 'react';
import { BlogContext } from "../../context/BlogContext";

interface InputVal {
  setQuery: (value: string) => void;
  qtdeIssues: number;
}

export function SearchBar({ qtdeIssues, setQuery }: InputVal) {
  const { issueSearch } = useContext(BlogContext);
  const [inputValue, setInputValue] = useState('');
  const [totalIssues, setTotalIssues] = useState(qtdeIssues);

  useEffect(() => {
    setTotalIssues(qtdeIssues);
  }, [qtdeIssues]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  let queryStr = "";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    queryStr = inputValue.replaceAll(" ", "%20");
    setQuery(queryStr);

    if (queryStr == "") {
      setQuery("");
      setTotalIssues(qtdeIssues);
      return;
    } else {
      qtdeIssues = 1;
      setTotalIssues(qtdeIssues);
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
              totalIssues
            }
            &nbsp; publicações
          </span>
        </div>
        <input type="search" id="issue-search" name="issue-search" placeholder="Buscar conteúdo" onChange={handleInputChange} />

        <button type="submit">Buscar</button>
      </form>
    </SearchBarContainer>
  )
}