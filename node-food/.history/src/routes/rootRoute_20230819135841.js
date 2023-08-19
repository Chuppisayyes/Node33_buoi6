import express from 'express';
import foodRoutes from './foodRoute.js';
const rootRoutes = express.Router();
rootRoutes.use("/food", foodRoutes);
export default rootRoutes;