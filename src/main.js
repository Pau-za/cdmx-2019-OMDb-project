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

// const prueba = document.getElementById('boton-prueba');
// prueba.addEventListener('click', () => {
//   printMovie(omdbData);
// })


//función que imprime la data filtrada
const printFilteredData = (data) => {
  let printing = ``;
  let title = [];
  let year = [];
  let rated = [];
  let runtime = [];
  let genre = [];
  let director = [];
  let writer = [];
  let actors = [];
  let plot = [];
  let language = [];
  let country = [];
  let awards = [];
  let poster = [];
  document.getElementById('movies').innerHTML = ``;
  data.forEach(element => {
    title = element.Title;
    year = element.Year;
    rated = element.Rated;
    runtime = element.Runtime;
    genre = element.Genre;
    director = element.Director;
    writer = element.Writer;
    actors = element.Actors;
    plot = element.Plot;
    language = element.Language;
    country = element.Country;
    awards = element.Awards;
    poster = element.Poster;
    printing = `<h3>${title}</h3> <img src="${poster}"> <p>Country: ${country}</p> <h5>Directed by: ${director}</h5> <h5>${writer}</h5> <p>Cast: ${actors}</p> <h4>Year: ${year}</h4> <p>Runtime: ${runtime}</p> <p>Language: ${language}</p> <p>Rated: ${rated}</p> <h4>Genre: ${genre}</h4> <p>Awards: ${awards}</p> <p>Plot: ${plot}</p> `
    return document.getElementById('movies').insertAdjacentHTML('beforeend', printing);
  })
}

const filterOption = document.getElementById('filter-by-option');
const inputSearch = document.getElementById('input-value');
let dataTitle = [];
let dataActors = [];
let dataDirector = [];
// const result = document.getElementById('result');

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
        dataTitle.push(element);
        return printFilteredData(dataTitle);
      } else {
        return document.getElementById('result').innerHTML = `<p>Title Not Found</p>`;
      }
    } else if (filterSelected === 'Director') {
      const director = element.Director;
      if ((new RegExp(string, "i")).test(director)) {
        dataDirector.push(element);
        return printFilteredData(dataDirector);
      } else {
        return document.getElementById('result').innerHTML = `<p>Title Not Found</p>`;
      }
    } else if (filterSelected === 'Actors') {
      const actors = element.Actors;
      if ((new RegExp(string, "i")).test(actors)) {
        dataActors.push(element);
        return printFilteredData(dataActors);
      } else {
        return document.getElementById('result').innerHTML = `<p>Title Not Found</p>`;
      }
    }
  })
})
