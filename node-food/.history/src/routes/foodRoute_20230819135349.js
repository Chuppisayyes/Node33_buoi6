import express from "express";
import {likeRes, unlikeRes} from "../controllers/foodController.js";
const foodRoutes = express.Router();

foodRoutes.post("like-res",likeRes);
foodRoutes.post("unlike-res",unlikeReslikeRes);



export default foodRoutes;
