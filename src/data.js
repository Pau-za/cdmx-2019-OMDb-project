window.sciFilms = {
  getPosterName: (data) => {
    console.log(data);
    let poster = [];
    let title = [];
    let imdbID = [];
    // for (let i = 0; i < data.length; i++) {
    //   poster.push(data[i].Poster);
    //   return poster;
    // }
    data.forEach(element => {
        console.log(element);
    //   poster.push(element.Poster);
    //   title.push(element.Title);
    //   imdbID.push(element.imdbID);
    })
    return poster, title, imdbID;
  }
}
