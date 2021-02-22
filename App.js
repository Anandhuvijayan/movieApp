const APIURL =
  "https://api.themoviedb.org/3/discover/movie?/sort_by=popularity.desc&api_key=756db097f8ae62c44aa1be4b5c34c208&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=756db097f8ae62c44aa1be4b5c34c208&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(APIURL);
async function getMovies(a) {
  const resp = await fetch(a);
  const respData = await resp.json();

  console.log(respData);

  searchMovie(respData.results);
}

function searchMovie(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
   <div class = "movie">
        <img
          src="${IMGPATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span>${vote_average}</span>
        </div>
        <div class="overview">
           <h3>Overview:</h3>
            ${overview}
        </div>
        
      `;
    main.appendChild(movieEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);

    search.value = "";
  }
});
