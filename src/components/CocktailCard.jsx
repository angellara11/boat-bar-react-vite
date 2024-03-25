import { useState } from "react";

export const CocktailCard = ({ onAdd }) => {
  return (
    <section className="mt-28">
      <div className="card-product bg-lightGrey">
        <div className="flex justify-center absolute top-0 start-38 -translate-y-20 w-32">
          <img
            src="./src/assets/apricot-cocktail.png"
            alt="Melocoton cocktail"
          />
        </div>
        <div className="flex flex-col justify-end">
          <h2 className=" text-white text-lg">Melocoton cocktail</h2>
          <span className="text-white">20 EUR</span>
          <div className="absolute bottom-0 -right-1.5 bg-black rounded-full p-2 transition-transform duration-300 hover:translate-x-2">
            <a href="#">
              <img
                onClick={onAdd}
                src="./src/assets/right-arrow.png"
                alt="arrow"
                className="h-9 w-9"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CocktailCard;
