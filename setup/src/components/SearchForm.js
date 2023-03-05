import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const input = React.useRef("");

  const searchCocktail = () => {
    setSearch(input.current.value);
  };

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search your favourite cocktail</label>
          <input type="text" id="name" ref={input} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
