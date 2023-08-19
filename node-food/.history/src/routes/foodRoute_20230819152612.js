import express from "express";
import { likeRes, unlikeRes } from "../controllers/foodController.js";

const foodRoutes = express.Router();

foodRoutes.post("/like-res", likeRes);
foodRoutes.delete("/unlike-res", unlikeRes);
food
export default foodRoutes;