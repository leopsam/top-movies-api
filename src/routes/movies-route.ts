import { Router } from "express";
import movieControllers from "../controllers/movies-controller.js";

const movieRoutes = Router();

movieRoutes.post("/", movieControllers.createrMovie);
movieRoutes.get("/", movieControllers.readMovie);
movieRoutes.put("/:id", movieControllers.updateMovie);
movieRoutes.delete("/:id", movieControllers.deleteMovie);

export default movieRoutes;