export const CocktailCard = () => {
  return (
    <section className="mt-28">
      <div class="card-product bg-lightGrey">
        <div class="flex justify-center absolute top-0 start-38 -translate-y-20 w-32">
          <img
            src="./src/assets/apricot-cocktail.png"
            alt="Melocoton cocktail"
          />
        </div>
        <div class="flex flex-col justify-end">
          <h2 class=" text-white text-lg">Melocoton cocktail</h2>
          <span class="text-white">20 EUR</span>
          <div class="absolute bottom-0 -right-1.5 bg-black rounded-full p-2 transition-transform duration-300 hover:translate-x-2">
            <a href="#">
              <img
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
