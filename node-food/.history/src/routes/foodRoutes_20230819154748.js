import express from "express";
import { getLikeRes, getRateResUser } from "../controllers/foodController";


const foodRoutes = express.Router();

foodRoutes.get("/get-likeRes", getLikeRes);
foodRoutes.get("/get-rateResUser", getRateResUser);
foodRoutes.post("/like-res", likeRes);
foodRoutes.post("/rateRes", rateRes);
foodRoutes.post("/user-order", userOrder);
foodRoutes.delete("/unlike-res", unlikeRes);


export default foodRoutes;