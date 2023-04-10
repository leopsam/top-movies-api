import { QueryResult } from "pg";
import connectionDb from "../config/database.js";
import { Movie, MovieUpdate } from "../protocols/movie.js";

async function create(movie: Movie) : Promise<QueryResult> {
  return await connectionDb.query(
    `
        INSERT INTO movies (title, platform, genre, status)
        VALUES ($1, $2, $3, $4)
    `,
    [movie.title, movie.platform, movie.genre, movie.status]
  );
}

async function read(): Promise<QueryResult<Movie>> {
  return connectionDb.query(
    ` 
        SELECT * FROM movies
    `
  );
}

async function update(movie: MovieUpdate): Promise<QueryResult<MovieUpdate>> {
  return connectionDb.query(
    `    
    UPDATE movies
    SET status = $2, grade = $3
    WHERE id = $1;    
  `,
    [movie.id, movie.status, movie.grade]
  );
}

async function del(id: number): Promise<QueryResult> {
  return connectionDb.query(
    ` 
    DELETE FROM movies WHERE id = $1;
    `,
    [id]
  );
}

export default {
  create,
  read,
  update,
  del
};
