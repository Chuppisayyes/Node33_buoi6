import express from "express";
import { createLikeRes, getLikeRes, getRateResUser, rateRes, unlikeRes, userOrder } from "../controllers/foodController.js";


const foodRoutes = express.Router();

foodRoutes.get("/get-likeRes", getLikeRes);
foodRoutes.get("/get-rateResUser", getRateResUser);
foodRoutes.post("/createlike-res", createLikeRes);
foodRoutes.post("/rateRes", rateRes);
foodRoutes.post("/user-order", userOrder);
foodRoutes.delete("/unlike-res", unlikeRes);


export default foodRoutes;