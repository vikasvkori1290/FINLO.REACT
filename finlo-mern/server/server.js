import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js'; // This is fine
import authRoutes from './routes/authRoutes.js';
import itineraryRoutes from './routes/itineraryRoutes.js';

// ---- THIS IS THE MOST IMPORTANT PART ----
// 1. Configure environment variables FIRST
dotenv.config();

// 2. Connect to the database SECOND (so it can read process.env.MONGO_URI)
connectDB();
// -----------------------------------------

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('FINLO API is running...');
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/itineraries', itineraryRoutes);


const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
