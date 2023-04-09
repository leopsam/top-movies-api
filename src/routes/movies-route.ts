import { Router } from "express";
import movieControllers from "../controllers/movies-controller.js";

const movieRoutes = Router();

movieRoutes.post("/", movieControllers.createrMovie);
movieRoutes.get("/", movieControllers.readMovie);

export default movieRoutes;
