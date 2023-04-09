import joi from "joi";

export const movieSchemma = joi.object({
  title: joi.string().required(),
  platform: joi.string().required(),
  genre: joi.string().required(),
  status: joi.string().required(),
  grade: joi.number(),
});
