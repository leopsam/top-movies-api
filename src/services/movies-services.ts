import movieRepositories from "../repositories/movies-repository.js";
import { Movie, MovieUpdate } from "../protocols/movie.js";

async function postMovie(movie: Movie) {
  return await movieRepositories.create(movie);
}

async function getMovie() {
  return await movieRepositories.read();
}

async function putMovie(movie: MovieUpdate) {
  return await movieRepositories.update(movie)
}

async function deleteMovie(id: number) {
  return await movieRepositories.del(id);
}

export default {
  postMovie,
  getMovie,
  putMovie,
  deleteMovie
};
