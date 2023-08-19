import express from "express";
import {likeRes} from "../controllers/foodController.js";
const foodRoutes = express.Router();

foodRoutes.post("like-res",likeRes);
foodRoutes.post("unlike-res",likeRes);



export default foodRoutes;
