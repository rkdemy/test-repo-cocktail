import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length === 0) {
    return (
      <h3 className="section-title">
        No cocktails matched your search criteria
      </h3>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((drink) => (
            <Cocktail key={drink.id} {...drink} />
        ))}
      </div>
    </section>
  );
};

export default CocktailList;
