import express from 'express';
import  fromimport foodRoutes from './foodRoutes';
 './foodRoutes.js';
const rootRoutes = express.Router();
rootRoutes.use("/food", foodRoutes);
export default rootRoutes;