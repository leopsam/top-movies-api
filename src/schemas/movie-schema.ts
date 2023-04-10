import joi from "joi";

const movieSchemma = joi.object({
  title: joi.string().required(),
  platform: joi.string().required(),
  genre: joi.string().required(),
  status: joi.string().required(),
  grade: joi.number(),
});

const updateMovieSchemma = joi.object({ 
  id: joi.number(),
  status: joi.string().required(),
  grade: joi.number().required(),
});

export{
  updateMovieSchemma,
  movieSchemma
}