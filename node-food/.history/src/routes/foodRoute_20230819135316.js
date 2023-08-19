import express from "express";
import {likeRes} from "../controllers/foodController.js";
const foodRoutes = express.Router();

foodRoutes.get("like-res",likeRes);
foodRoutes.get("like-res",likeRes);



export default foodRoutes;
