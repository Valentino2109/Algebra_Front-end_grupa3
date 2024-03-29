const input = document.querySelector(`#input`);
const addBtn = document.querySelector(`#btn-search`);
const cocktailList = document.querySelector(`#cocktail-list`);
const cocktailRecipe = document.querySelector(`#cocktail-recipe`);

// funkcija za details button
const handleDetails = () => {
  const detailsBtn = e.target;

  // url za detalje koktela + dohvati podatke (APIkey je 1, ne mijenja se za ovaj API)
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${detailsBtn}`;
  const request = new XMLHttpRequest();
  request.open(`GET`, url, true);

  // trazi svojstva koktela (na koji je kliknut)
  request.onload = () => {
    if (request.status === 200) {
      const responseObject = JSON.parse(request.response);

      // naslov dohvacenog koktela
      const h3Title = document.createElement(`h3`);
      h3Title.innerText = detailsBtn;

      // hvatanje slike
      const cocktailPicture = responseObject.drink.strImageSource;

      // hvatanje instrukcija
      const cocktailInstructions = responseObject.drink.strInstructions;
      const newParagraph = document.createElement(`p`);
      newParagraph.innerText = cocktailInstructions;

      // novi h4 za naslov
      const h4Title = document.createElement(`h4`);
      h4Title.innerText = `Ingredients:`;

      // novi UL
      const newUL = document.createElement(`ul`);

      // hvatanje sastojaka
      const cocktailIngredient1 = responseObject.drink.strIngredient1;
      const cocktailIngredient2 = responseObject.drink.strIngredient2;
      const cocktailIngredient3 = responseObject.drink.strIngredient3;

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
    }
  };
  request.send();
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
    if (request.status) {
      const responseObject = JSON.parse(request.response);

      // povuci koktel
      const drinkName = responseObject.drinks[0].strDrink;
      const idDrink = responseObject.drinks[0].idDrink;

      // napravi novi list item u "cocktail-list"
      const listNameDrink = document.createElement(`li`);
      listNameDrink.innerText = drinkName;

      // napravi novi button za informacije o koktelu
      const detailsBtn = document.createElement(`button`);
      detailsBtn.innerText = `Details`;
      // detailsBtn.addEventListener(`click`, handleDetails);

      detailsBtn.addEventListener(`click`, function () {
        handleDetails(idDrink);
      });

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
