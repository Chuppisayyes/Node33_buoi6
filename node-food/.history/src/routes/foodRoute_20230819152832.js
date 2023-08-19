import express from "express";
import { likeRes, unlikeRes } from "../controllers/foodController.js";

const foodRoutes = express.Router();

foodRouter.get("/get-likeRes", unlikeRes);
foodRouter.get("/get-likeRes", unlikeRes);
foodRoutes.post("/like-res", likeRes);
foodRoutes.post("/rateRes", unlikeRes);
foodRouter.post("/order", unlikeRes);
foodRoutes.delete("/unlike-res", unlikeRes);


foodRouter.get("/get-likeRes", getLikeRes);
foodRouter.get("/get-rateResUser"

export default foodRoutes;