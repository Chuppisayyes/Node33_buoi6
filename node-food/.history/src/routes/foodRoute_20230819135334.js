import express from "express";
import {likeRes} from "../controllers/foodController.js";
const foodRoutes = express.Router();

foodRoutes.post("like-res",likeRes);
foodRoutes.get("unlike-res",likeRes);



export default foodRoutes;
