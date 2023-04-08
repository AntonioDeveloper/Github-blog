import { SearchBarContainer } from "./styles";
import { useContext, useState } from 'react';
import { BlogContext } from "../../context/BlogContext";

// interface InputVal {
//   txt: string;
// }

export function SearchBar() {

  const { issueSearch } = useContext(BlogContext);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const queryStr = inputValue.replaceAll(" ", "%20");
    //console.log('Input value:', inputValue, queryStr);
    issueSearch(queryStr);
  };

  return (
    <SearchBarContainer>
      <form onSubmit={handleSubmit}>
        <div className="label-line">
          <label htmlFor="issues-search">
            Publicações
          </label>
          <span>3 publicações</span>
        </div>
        <input type="search" id="issue-search" name="issue-search" placeholder="Buscar conteúdo" onChange={handleInputChange} />

        <button type="submit">Buscar</button>
      </form>
    </SearchBarContainer>
  )
}