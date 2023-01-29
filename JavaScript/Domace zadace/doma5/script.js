const input = document.querySelector(`#input`);
const addBtn = document.querySelector(`#btn-search`);
const cocktailList = document.querySelector(`#cocktail-list`);
const cocktailRecipe = document.querySelector(`#cocktail-recipe`);

// funkcija za details button
// kako da povezem OPET s API-jem????
const handleDetails = (e) => {
  const detailsBtn = e.target;

  // naslov dohvacenog koktela
  const h3Title = document.createElement(`h3`);
  h3Title.innerText = drinkName; // kako da ovo dodam...!!!

  // hvatanje slike
  const cocktailPicture = responseObject.drink[0].strImageSource;

  // hvatanje instrukcija
  const cocktailInstructions = responseObject.drink[0].strInstructions;
  const newParagraph = document.createElement(`p`);
  newParagraph.innerText = cocktailInstructions;

  // novi h4 za naslov
  const h4Title = document.createElement(`h4`);
  h4Title.innerText = `Ingredients:`;

  // novi UL
  const newUL = document.createElement(`ul`);

  // hvatanje sastojaka
  const cocktailIngredient1 = responseObject.drink[0].strIngredient1;
  const cocktailIngredient2 = responseObject.drink[0].strIngredient2;
  const cocktailIngredient3 = responseObject.drink[0].strIngredient3;

  // dodaci unutar novog UL
  const newLI1 = document.createElement(`li`);
  const newLI2 = document.createElement(`li`);
  const newLI3 = document.createElement(`li`);
  newLI1.innerText = cocktailIngredient1;
  newLI2.innerText = cocktailIngredient2;
  newLI3.innerText = cocktailIngredient3;

  // dodaj sve dohvacene elemente u "Cocktail recipe" div
  cocktailRecipe.appendChild(h3Title);
  cocktailRecipe.appendChild(cocktailPicture);
  cocktailRecipe.appendChild(newParagraph);
  cocktailRecipe.appendChild(h4Title);
  cocktailRecipe.appendChild(newUL);
  newUL.appendChild(newLI1, newLI2, newLI3);
};

// funkcija za Search button
function handleSearchCocktails() {
  // input za koktel
  const cocktailNameForURL = input.value.trim();

  // url za koktele + dohvati podatke (APIkey je 1, ne mijenja se za ovaj API)
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailNameForURL}`;
  const request = new XMLHttpRequest();
  request.open(`GET`, url, true);

  // trazi koktele
  request.onload = () => {
    if (request.status === 200) {
      const responseObject = JSON.parse(request.response);

      // povuci koktel
      const drinkName = responseObject.drinks[0].strDrink;

      // napravi novi list item u "cocktail-list"
      const listNameDrink = document.createElement(`li`);
      listNameDrink.innerText = drinkName;

      // napravi novi button za informacije o koktelu
      const detailsBtn = document.createElement(`button`);
      detailsBtn.innerText = `Details`;
      detailsBtn.addEventListener(`click`, handleDetails);

      // dodaj novi list item u "cocktail-list"
      cocktailList.appendChild(listNameDrink);
      // dodaj novi button u "cocktail-list"
      cocktailList.appendChild(detailsBtn);
    }
  };
  request.send();

  // Refresh se stavi na prazan box
  input.value = ``;
}
addBtn.addEventListener(`click`, handleSearchCocktails);
