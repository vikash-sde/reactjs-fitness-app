import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/searched/" + search);
  };

  return (
    <div>
      <FormSytle onSubmit={submitHandler}>
        <div>
          <FaSearch></FaSearch>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            value={search}
          />
        </div>
      </FormSytle>
    </div>
  );
};

const FormSytle = styled.form`
  margin: 0rem 24rem;
  position: relative;
  width: 100%;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    margin-top: 1rem;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 1%;
    transform: translate;
    color: white;
  }
`;

export default Search;
