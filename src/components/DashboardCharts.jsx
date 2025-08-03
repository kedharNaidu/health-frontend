import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { getWorkouts, getMeals } from '../services/api';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const DashboardCharts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const workoutsRes = await getWorkouts();
      const mealsRes = await getMeals();
      setWorkouts(workoutsRes.data);
      setMeals(mealsRes.data);
    };
    fetchData();
  }, []);

  // Prepare data for Line Chart (Calories over time from meals)
  const calorieData = {
    labels: meals.map(meal => new Date(meal.datetime).toLocaleDateString()),
    datasets: [{
      label: 'Calories Consumed',
      data: meals.map(meal => meal.calories),
      borderColor: 'green',
      backgroundColor: 'rgba(0,128,0,0.2)',
      tension: 0.3
    }]
  };

  // Prepare data for Bar Chart (Workout types)
  const workoutCounts = {};
  workouts.forEach(w => {
    workoutCounts[w.type] = (workoutCounts[w.type] || 0) + 1;
  });

  const workoutData = {
    labels: Object.keys(workoutCounts),
    datasets: [{
      label: 'Workout Frequency',
      data: Object.values(workoutCounts),
      backgroundColor: 'skyblue'
    }]
  };

  // Prepare data for Pie Chart (Meal types)
  const mealTypeCounts = {};
  meals.forEach(m => {
    mealTypeCounts[m.meal_type] = (mealTypeCounts[m.meal_type] || 0) + 1;
  });

  const pieData = {
    labels: Object.keys(mealTypeCounts),
    datasets: [{
      label: 'Meal Distribution',
      data: Object.values(mealTypeCounts),
      backgroundColor: ['orange', 'tomato', 'purple', 'teal']
    }]
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h6" gutterBottom>Calories Over Time</Typography>
      <Line data={calorieData} />

      <Typography variant="h6" sx={{ mt: 5 }} gutterBottom>Workout Type Frequency</Typography>
      <Bar data={workoutData} />

      <Typography variant="h6" sx={{ mt: 5 }} gutterBottom>Meal Type Distribution</Typography>
      <Pie data={pieData} />
    </Box>
  );
};

export default DashboardCharts;
