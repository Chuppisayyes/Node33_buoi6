import express from "express";
import { likeRes, unlikeRes } from "../controllers/foodController.js";

const foodRoutes = express.Router();

foodRouter.get("/get-likeRes", getLikeRes);
foodRouter.get("/get-rateResUser", getRateResUser);
foodRoutes.post("/like-res", likeRes);
foodRoutes.post("/rateRes", unlikeRes);
foodRouter.post("/user-order", order);
foodRoutes.delete("/unlike-res", unlikeRes);


export default foodRoutes;