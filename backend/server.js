// Importeer Express
import express from 'express';
//Importeer mongoose
import mongoose from 'mongoose';
//Importeer CORS
import cors from 'cors';

//Importeer workoutRoutes.js
import workoutRoutes from "./src/routes/workoutRoutes.js";

//import auth
import authRoutes from './src/routes/authRoutes.js';

// Maak Express app
const app = express();

// Haal PORT uit .env
const PORT = process.env.PORT || 4000;

// Middleware: lees JSON
app.use(express.json());

//CORS toestaan voor frontend
app.use(cors({
  origin: "http://localhost:5173"
}));

// Routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/auth', authRoutes);


// Test route
app.get('/', (req, res) => {
  res.json({
    message: 'Mijn eerste backend!',
    success: true
  });
});

// GET alle workouts
app.get('/api/workouts', (req, res) => {
  res.json({
    message: 'Alle workouts',
    data: []  // Later echte data
  });
});

// GET één workout
app.get('/api/workouts/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: `Workout ${id}`,
    id: id
  });
});

// POST nieuwe workout
app.post('/api/workouts', (req, res) => {
  const { title, reps, load } = req.body;

  res.json({
    message: 'Workout aangemaakt',
    data: { title, reps, load }
  });
});

// PATCH workout
app.patch('/api/workouts/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: `Workout ${id} aangepast`,
    updates: req.body
  });
});

// DELETE workout
app.delete('/api/workouts/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: `Workout ${id} verwijderd`
  });
});

// Verbind met MongoDB en start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Verbonden met MongoDB');

    // Start server ALLEEN als database gelukt is
    app.listen(PORT, () => {
      console.log(`Server draait op http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database verbinding mislukt:', error.message);
  });