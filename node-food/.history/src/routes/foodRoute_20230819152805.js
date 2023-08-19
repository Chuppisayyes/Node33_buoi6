import express from "express";
import { likeRes, unlikeRes } from "../controllers/foodController.js";

const foodRoutes = express.Router();

foodRouter.post("/order", unlikeRes);

foodRoutes.post("/like-res", likeRes);
foodRoutes.post("/rateRes", unlikeRes);
foodRoutes.post("/rateRes", createRateRes);
foodRouter.post("/order", unlikeRes);
foodRoutes.delete("/unlike-res", unlikeRes);


foodRouter.get("/get-likeRes", getLikeRes);
foodRouter.get("/get-rateResUser"

export default foodRoutes;