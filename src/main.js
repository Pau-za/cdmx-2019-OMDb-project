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
const catalogue = document.getElementById('catalogue');
const printInformation = document.getElementById('print-information');
const printMovie = (data) => {
  data.forEach(element => {
    let poster = element.Poster;
    let imdbID = element.imdbID;
    let title = element.Title;
    let year = element.year;
    let rated = element.Rated;
    let runtime = element.Runtime;
    let genre = element.Genre;
    let director = element.Director;
    let writer = element.Writer;
    let actors = element.Actors;
    let plot = element.Plot;
    let language = element.Language;
    let country = element.Country;
    let awards = element.Awards;
    const result = `<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
    <img src="${poster}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">${title}</h3>
        <h5 class="card-text">Country: ${country}</h5>
        <h5 class="card-text">Directed by: ${director}</h5>
        <h5 class="card-text">${writer}</h5>
        <h5 class="card-text">Cast: ${actors}</h5>
        <h5 class="card-text">Year: ${year}</h5>
        <h5 class="card-text">Runtime: ${runtime}</h5>
        <h5 class="card-text">Language: ${language}</h5>
        <h5 class="card-text">Rated: ${rated}</h5>
        <h5 class="card-text">Genre: ${genre}</h5>
        <h5 class="card-text">Awards: ${awards}</h5>
        <h5 class="card-text">Plot: ${plot}</h5>
      </div>
    </div>
  </div>
</div>`
    catalogue.insertAdjacentHTML('beforeend', result);
  })
}

const catalogueButton = document.getElementById('catalogue-button');
catalogueButton.addEventListener('click', () => {
  printMovie(omdbData);
})

//función que imprime la data filtrada
const movies = document.getElementById('movies');
const printFilteredData = (data) => {
  movies.style.display = 'block';
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
  movies.innerHTML = ``;
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
    printing = `<div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
    <img src="${poster}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">${title}</h3>
        <h5 class="card-text">Country: ${country}</h5>
        <h5 class="card-text">Directed by: ${director}</h5>
        <h5 class="card-text">${writer}</h5>
        <h5 class="card-text">Cast: ${actors}</h5>
        <h5 class="card-text">Year: ${year}</h5>
        <h5 class="card-text">Runtime: ${runtime}</h5>
        <h5 class="card-text">Language: ${language}</h5>
        <h5 class="card-text">Rated: ${rated}</h5>
        <h5 class="card-text">Genre: ${genre}</h5>
        <h5 class="card-text">Awards: ${awards}</h5>
        <h5 class="card-text">Plot: ${plot}</h5>
      </div>
    </div>
  </div>
</div>`
    return document.getElementById('movies').insertAdjacentHTML('beforeend', printing);
  })
}

const filterOption = document.getElementById('filter-by-option');
const inputSearch = document.getElementById('input-value');
let dataTitle = [];
let dataActors = [];
let dataDirector = [];
const result = document.getElementById('result');

filterOption.addEventListener("change", () => {
  if (movies.style.display === 'block' || movies.style.display === 'block') {
    movies.style.display = 'none';
    movies.style.display = 'none';
  }
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
        result.style.display = 'block';
      }
    } else if (filterSelected === 'Director') {
      const director = element.Director;
      if ((new RegExp(string, "i")).test(director)) {
        dataDirector.push(element);
        return printFilteredData(dataDirector);
      } else {
        result.style.display = 'block';
      }
    } else if (filterSelected === 'Actors') {
      const actors = element.Actors;
      if ((new RegExp(string, "i")).test(actors)) {
        dataActors.push(element);
        return printFilteredData(dataActors);
      } else {
        result.style.display = 'block';
      }
    }
  })
})

//Función que pinte la data de la película que el usuario elija en el despliegue de todo el catálogo
// const moviesCatalogue = document.getElementsByClassName('movies-catalogue');
// const printElement = document.getElementById('print-element');
// const printOneMovie = (obj) => {
//   // printElement.style.display = 'block';
//   let printing = ``;
//   let title = [];
//   let year = [];
//   let rated = [];
//   let runtime = [];
//   let genre = [];
//   let director = [];
//   let writer = [];
//   let actors = [];
//   let plot = [];
//   let language = [];
//   let country = [];
//   let awards = [];
//   printElement.innerHTML = ``;
//     title = obj.Title;
//     year = obj.Year;
//     rated = obj.Rated;
//     runtime = obj.Runtime;
//     genre = obj.Genre;
//     director = obj.Director;
//     writer = obj.Writer;
//     actors = obj.Actors;
//     plot = obj.Plot;
//     language = obj.Language;
//     country = obj.Country;
//     awards = obj.Awards;
//     printing = `<h3>${title}</h3> <p>Country: ${country}</p> <h5>Directed by: ${director}</h5> <h5>${writer}</h5> <p>Cast: ${actors}</p> <h4>Year: ${year}</h4> <p>Runtime: ${runtime}</p> <p>Language: ${language}</p> <p>Rated: ${rated}</p> <h4>Genre: ${genre}</h4> <p>Awards: ${awards}</p> <p>Plot: ${plot}</p> `
//     return printElement.insertAdjacentHTML('beforeend', printing);
// }

// catalogue.addEventListener('click', () => {
//   let movieResult = [];
//   omdbData.forEach(element => {
//     if(moviesCatalogue.value === element.imdbID){
//       movieResult = element;
//       console.log(movieResult);
//       return movieResult;
//     }
//   })
//   printOneMovie(movieResult);
// })
