import express from "express";
import {LikeRes} from "../controllers/foodController.js";
const foodRoutes = express.Router();

foodRoutes.get("like-res",LikeRes);


export default foodRoutes;
