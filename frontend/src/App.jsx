import { useState, useEffect } from "react";
import Workout from "./components/Workout";
import './App.css'

function App() {
const [workouts, setWorkouts] = useState([]);

const fetchWorkouts = async() => {
try {
  const response = await fetch("http://localhost:4000/api/workouts");
  const data = await response.json();
  console.log(data)
  setWorkouts(data)
} catch(error) {console.error("dit gaat er mis:", error)}
};

useEffect(() => {
  fetchWorkouts()
}, {})
  return (
    <>
     <h1>Alle mern workouts</h1>
     {workouts.map(workout => (
      <Workout workoutData={workout} />
     ))}
    </>
  )
}

export default App
