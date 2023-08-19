import express from "express";
import { likeRes, unlikeRes } from "../controllers/foodController.js";

const foodRoutes = express.Router();


foodRoutes.post("/like-res", likeRes);
foodRoutes.post("/", unlikeRes);
foodRoutes.delete("/unlike-res", unlikeRes);

export default foodRoutes;