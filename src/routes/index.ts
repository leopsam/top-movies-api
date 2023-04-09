import { Router } from "express";
import movieRoutes from "./movies-route.js";

const routes = Router();

routes.use("/movie", movieRoutes);

export default routes;
