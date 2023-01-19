const apiKey = "ddc7773ca8cb0e623bd22ef5daace000";

const h1City = document.querySelector("#city");
const divTemp = document.querySelector("#temperature");
const searchBtn = document.getElementById("search-btn");
const input = document.querySelector("#city-input");

const handleSearch = () => {
  // procitaj input -> koji je grad
  const city = input.value.trim();

  if (city.length < 2) {
    return;
  }

  // napravi URL za taj grad
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=hr&units=metric&appid=${apiKey}`;

  // dohvati vrijeme
  const request = new XMLHttpRequest();
  request.open("GET", url, true);

  request.onload = () => {
    if (request.status === 200) {
      const responseObject = JSON.parse(request.response);
      const temperature = responseObject.main.temp;

      h1City.innerText = city;
      divTemp.innerHTML = `Temperatura je: <b>${temperature.toFixed()} &#8451</b>`;
    } else if (request.status >= 400 || request.status < 500) {
      h1City.innerHTML = `${city} nije pronađen!`;
      divTemp.innerHTML = ``;
    } else {
      h1City.innerText = `Dogodila se greška. Pokušajte ponovo!`;
    }
    input.value = "";
  };

  request.send();
};
const handleInputKey = (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
};
searchBtn.addEventListener("click", handleSearch);
input.addEventListener("keyup", handleInputKey);
