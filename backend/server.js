// Importeer Express
import express from 'express';

//Importeer workoutRoutes.js
import workoutRoutes from "./src/routes/workoutRoutes.js";
// Maak Express app
const app = express();

// Haal PORT uit .env
const PORT = process.env.PORT || 4000;

// Middleware: lees JSON
app.use(express.json());

// Routes
app.use('/api/workouts', workoutRoutes);


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


// Start server
app.listen(PORT, () => {
    console.log(`Server draait op http://localhost:${PORT}`);
});