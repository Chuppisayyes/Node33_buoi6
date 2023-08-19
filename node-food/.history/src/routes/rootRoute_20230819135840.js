import express from 'express';
import foodRoutes from './foodRoute';
const rootRoutes = express.Router();
rootRoutes.use("/food", foodRoutes);
export default rootRoutes;