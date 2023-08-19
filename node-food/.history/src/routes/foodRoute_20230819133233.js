import express from "express";
import {} from "../controllers/foodController.js";
const foodRoutes = express.Router();

foodRoutes.get("like-res",get);


export default foodRoutes;
