import express from 'express';
import { generateItinerary } from '../controllers/itineraryController.js';
import { protect } from '../middleware/authMiddleware.js'; // We'll create this next

const router = express.Router();

// @route   POST /api/itineraries/generate
// @desc    Generate a new itinerary using AI
// @access  Private (requires user to be logged in)
router.post('/generate', protect, generateItinerary);


// We will add more routes here later (e.g., to get saved itineraries)
// router.get('/', protect, getMyItineraries);


export default router; // This provides the default export that server.js needs
