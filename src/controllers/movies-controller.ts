import { Request, Response } from "express";
import { Movie } from "../protocols/movie.js";
import movieService from "../services/movies-services.js";
import { movieSchemma } from "../schemas/movie-schema.js";

async function createrMovie(req: Request, res: Response) {
  const { title, platform, genre } = req.body as Movie;

  try {
    await movieService.postMovie({
      title,
      platform,
      genre,
      status: "unattended",
    });
    return res.sendStatus(201);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

async function readMovie(req: Request, res: Response) {
  console.log("rodou aqui");
  try {
    await movieService.getMovie();
    return res.sendStatus(201);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export default {
  createrMovie,
  readMovie,
};
