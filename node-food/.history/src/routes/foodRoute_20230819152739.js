import express from "express";
import { likeRes, unlikeRes } from "../controllers/foodController.js";

const foodRoutes = express.Router();


foodRoutes.post("/like-res", likeRes);
foodRoutes.post("/rateRes", unlikeRes);
foodRoutes.post("/rateRes", createRateRes);
foodRouter.post("/create-order", unlikeRes);
foodRoutes.delete("/unlike-res", unlikeRes);


foodRouter.get("/get-likeRes", getLikeRes);
foodRouter.get("/get-rateResUser", getRateResUser);
foodRouter.delete("/remove-like/:user_id/:res_id", removeLike);
export default foodRoutes;