import express from 'express';
import foodRoutes from './foodRoutes';

const rootRoutes = express.Router();
rootRoutes.use("/food", foodRoutes);
export default rootRoutes;