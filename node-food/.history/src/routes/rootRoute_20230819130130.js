import express from 'express';
import foodRoutes from './foodRoutes.js';
const rootRoutes = express.Router();

// quản lý đối tượng food
rootRoutes.use("/food", foodRoutes);

// quản lý đối tượng user
rootRoutes.use("/user", userRoutes);

export default rootRoutes;