import movieRepositories from "../repositories/movies-repositori.js";

async function postMovie({ title, platform, genre, status }) {
  await movieRepositories.create({ title, platform, genre, status });
}

async function getMovie() {
  await movieRepositories.read();
}

export default {
  postMovie,
  getMovie,
};
