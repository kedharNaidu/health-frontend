import axios from 'axios';

const BASE_URL = 'https://health-backend.onrender.com/api';


export const getWorkouts = () => axios.get(`${API_BASE}/workouts/`);
export const addWorkout = (data) => axios.post(`${API_BASE}/workouts/`, data);

export const getMeals = () => axios.get(`${API_BASE}/meals/`);
export const addMeal = (data) => axios.post(`${API_BASE}/meals/`, data);
