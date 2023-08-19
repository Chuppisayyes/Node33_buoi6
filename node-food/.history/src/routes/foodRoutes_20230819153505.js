import express from "express";
import { getLikeRes, getRateResUser, likeRes, rateRes, unlikeRes, userOrder } from "../controllers/foodController.js";

const foodRoutes = express.Router();

foodRouters.get("/get-likeRes", getLikeRes);
foodRouter.get("/get-rateResUser", getRateResUser);
foodRoutes.post("/like-res", likeRes);
foodRoutes.post("/rateRes", rateRes);
foodRouter.post("/user-order", userOrder);
foodRoutes.delete("/unlike-res", unlikeRes);


export default foodRoutes;