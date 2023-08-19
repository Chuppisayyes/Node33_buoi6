import express from "express";
import {} from "../controllers/foodController.js";
const foodRoutes = express.Router();

foodRouter.get("/get-likeRes", getLikeRes);
foodRouter.get("/get-rateResUser", getRateResUser);
foodRouter.post("/create-likeRes", createLikeRes);
foodRouter.post("/create-rateRes", createRateRes);
foodRouter.post("/create-order", createOrder);


export default foodRoutes;
