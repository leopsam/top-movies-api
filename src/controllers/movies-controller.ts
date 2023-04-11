import { Request, Response } from "express";
import { Movie, MovieUpdate } from "../protocols/movie.js";
import movieService from "../services/movies-services.js";
import { movieSchemma, updateMovieSchemma } from "../schemas/movie-schema.js";

async function createrMovie(req: Request, res: Response) {
  const newMovie = req.body as Movie;
  newMovie.status = "unattended"

  const { error } = movieSchemma.validate(newMovie);
  if(error) return res.status(400).send({message: error.message})

  movieService.postMovie(newMovie);

  return res.status(201).send(`Film ${newMovie.title} posted`)    
}

async function readMovie(req: Request, res: Response) {
  const resultMovies =  await movieService.getMovie();
  
  return res.send(resultMovies.rows)
}

async function updateMovie(req: Request, res: Response) { 
  const updateMovie = req.body as MovieUpdate; 
  const { id } = req.params

  updateMovie.status = "watched"
  updateMovie.id = Number(id)  

  const { error } = updateMovieSchemma.validate(updateMovie);
  if(error) return res.status(400).send({message: error.message})

  await movieService.putMovie(updateMovie);

  return res.status(200).send(`updated movie info`)
}

async function deleteMovie(req: Request, res: Response) {
  const { id } = req.params
  const idNumber = Number(id)  

  await movieService.deleteMovie(idNumber);


  return res.status(200).send(`deleted movie`)
}

export default {
  createrMovie,
  readMovie,
  updateMovie,
  deleteMovie
};
