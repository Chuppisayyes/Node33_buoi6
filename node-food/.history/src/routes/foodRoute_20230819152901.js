import express from "express";
import { likeRes, unlikeRes } from "../controllers/foodController.js";

const foodRoutes = express.Router();

foodRouter.get("/get-likeRes", getlikeRes);
foodRouter.get("/get-rateResUser", );
foodRoutes.post("/like-res", likeRes);
foodRoutes.post("/rateRes", unlikeRes);
foodRouter.post("/order", unlikeRes);
foodRoutes.delete("/unlike-res", unlikeRes);


export default foodRoutes;