import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Define the routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Export the router
export default router; // Using default export is common for routers
