const APIURL =
  "https://api.themoviedb.org/3/discover/movie?/sort_by=popularity.desc&api_key=756db097f8ae62c44aa1be4b5c34c208&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
  "https://api.themoviedb.org/3/discover/movie?/sort_by=popularity.desc&api_key=756db097f8ae62c44aa1be4b5c34c208&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getMovies() {
  const resp = await fetch(APIURL);
  const respData = await resp.json();

  respData.results.forEach((movie) => {
    const { poster_path, title, vote_average } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    console.log(respData);

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
      `;
    main.appendChild(movieEl);
  });
  return respData;
}
getMovies(APIURL);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
});
