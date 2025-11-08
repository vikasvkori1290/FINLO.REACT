import axios from 'axios';

// @desc    Generate an itinerary
// @route   POST /api/itineraries/generate
export const generateItinerary = async (req, res) => {
  const { from, destination, budget, days, transport, food } = req.body;

  if (!destination || !days) {
      return res.status(400).json({ message: 'Destination and days are required' });
  }
  
  const prompt = `Generate a detailed ${days}-day travel itinerary for a trip from "${from}" to "${destination}". Preferences: Budget - ${budget}, Transport - ${transport}, Food - ${food}. Respond ONLY with a valid JSON object with this structure: { "summary": "A brief trip summary.", "itinerary": [{ "day": 1, "time": "09:00 AM", "activity": "Name of activity", "description": "Details.", "cost": "₹500" }], "totalCost": "₹5000" }`;

  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${process.env.GEMINI_API_KEY}`;

  try {
    const response = await axios.post(GEMINI_API_URL, {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: "application/json" },
    });

    const itineraryText = response.data.candidates[0].content.parts[0].text;
    const itineraryData = JSON.parse(itineraryText);

    // Here you would typically save the itinerary to the database linked to the user
    // const itinerary = await Itinerary.create({ userId: req.user.id, ... });

    res.status(200).json(itineraryData);

  } catch (error) {
    console.error('Gemini API Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Failed to generate itinerary from AI.' });
  }
};
