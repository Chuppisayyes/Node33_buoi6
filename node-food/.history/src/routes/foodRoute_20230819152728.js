import express from "express";
import { likeRes, unlikeRes } from "../controllers/foodController.js";

const foodRoutes = express.Router();


foodRoutes.post("/like-res", likeRes);
foodRoutes.post("/rateRes", unlikeRes);
foodRoutes.post("/rateRes", createRateRes);
foodRouter.post("/create-orders", unlikeRes);
foodRoutes.delete("/unlike-res", unlikeRes);


foodRouter.get("/get-likeRes", getLikeRes);
foodRouter.get("/get-rateResUser", getRateResUser);
foodRouter.post("/create-likeRes", createLikeRes);
foodRouter.post("/create-rateRes", createRateRes);
foodRouter.post("/create-order", createOrder);
foodRouter.delete("/remove-like/:user_id/:res_id", removeLike);
export default foodRoutes;