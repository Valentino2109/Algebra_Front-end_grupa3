`use strict`;

const input = document.querySelector(`#inputWindow`);
const list = document.querySelector(`#list`);

const handleSearch = () => {
  const nameInput = input.value.trim();

  if (nameInput.length < 3) {
    return;
  }

  // url koji veze API
  const url = `https://itunes.apple.com/search?term=${nameInput}&entity=song`;

  // dohvati API
  const request = new XMLHttpRequest();
  request.open(`GET`, url, true);
  request.onload = () => {
    list.innerHTML = ``;
    if (request.status === 200) {
      const responseObject = JSON.parse(request.response);
      const allResults = responseObject.results;

      // for petlja za sve song/artists
      for (let i = 0; i < allResults.length; i++) {
        const songName = responseObject.results[i].trackName;

        // novi list item
        const newList = document.createElement(`li`);
        newList.innerText = songName;

        // ubacivanje list item-a na UL
        list.appendChild(newList);
      }
    } else if (request.status >= 400 && request.status < 500) {
      const newList = document.createElement(`li`);
      newList.innerText = `Not found`;
      list.appendChild(newList);
    } else {
      const newList = document.createElement(`li`);
      newList.innerText = `Not found`;
      list.appendChild(newList);
    }
  };
  request.send();
};

input.addEventListener(`input`, handleSearch);
