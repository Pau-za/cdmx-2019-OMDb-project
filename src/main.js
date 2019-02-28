let omdbData = {};
fetch('https://sci-films.firebaseio.com/movies.json').then(
    response => {
      return response.json();
    }).then(data => {
    omdbData = data;
    return omdbData
  })
  .catch(error => (error));

//   Función que imprime posters
const movies = document.getElementById('movies');
const printMovie = (data) => {
  data.forEach(element => {
    let poster = element.Poster;
    let imdbID = element.imdbID;
    let title = element.Title;
    const result = `<div id="${imdbID}"><h3> ${title}</h3> <img src="${poster}"></div>`;
    movies.insertAdjacentHTML('beforeend', result);
  });
}

const prueba = document.getElementById('boton-prueba');
prueba.addEventListener('click', () => {
  printMovie(omdbData);
})


const filterOption = document.getElementById('filter-by-option');
const inputSearch = document.getElementById('input-value');
let dataTitle = [];
let dataActors = [];
let dataDirector = [];
const result = document.getElementById('result');

filterOption.addEventListener("change", () => {
  const filterSelected = filterOption.value;
  console.log(filterSelected);
  console.log(inputSearch.value);
  const string = inputSearch.value;
  dataTitle = [];
  dataActors = [];
  dataDirector = [];
  omdbData.forEach(element => {
    if (filterSelected === 'Title') {
      const title = element.Title;
      if ((new RegExp(string, "i")).test(title)) {
        return dataTitle.push(element);
      }
    } else if (filterSelected === 'Director') {
      const director = element.Director;
      if ((new RegExp(string, "i")).test(director)) {
        return dataDirector.push(element);
      }
    } else if (filterSelected === 'Actors') {
      const actors = element.Actors;
      if ((new RegExp(string, "i")).test(actors)) {
        return dataActors.push(element);
      }
    } else {
      result.innerHTML = "Title Not Found";
    }
  })
})
