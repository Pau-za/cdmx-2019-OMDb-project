// import * as omdbData from 'omdb';
// omdbData.get()
let omdbData = {};
fetch('https://sci-films.firebaseio.com/movies.json').then(
    response => {
      return response.json();
    }).then(data => {
    omdbData = data;
    omdbData
  })
.catch(error => (error));
  
//   Función que imprime posters
const movies = document.getElementById('movies');
const printMovie = (imdbID, poster, title) => {
    const result = `<div id="${imdbID}"><h3> ${title}</h3> <img src="${poster}"></div>`;
    movies.insertAdjacentHTML('beforeend', result);
}

// omdbData.forEach(element => {
//     let poster = element.Poster;
//     console.log(poster);
// })
const prueba = window.sciFilms.getPosterName(omdbData);


