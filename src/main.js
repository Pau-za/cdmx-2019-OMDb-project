//jalamos la data con fetch
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
