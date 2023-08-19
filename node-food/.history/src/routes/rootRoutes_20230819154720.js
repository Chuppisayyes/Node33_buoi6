import express from 'express';

const rootRoutes = express.Router();
rootRoutes.use("/food", foodRoutes);
export default rootRoutes;