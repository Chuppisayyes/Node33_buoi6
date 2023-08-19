import express from "express";
import { likeRes, unlikeRes } from "../controllers/foodController.js";

const foodRoutes = express.Router();

foodRouter.get("/get-likeRes", getLikeRes);
foodRouter.get("/get-rateResUser", getRateRes);
foodRoutes.post("/like-res", likeRes);
foodRoutes.post("/rateRes", unlikeRes);
foodRouter.post("/order", unlikeRes);
foodRoutes.delete("/unlike-res", unlikeRes);


export default foodRoutes;