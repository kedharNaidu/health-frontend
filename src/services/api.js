import axios from 'axios';

const API_BASE = 'http://127.0.0.1:8000/api';

export const getWorkouts = () => axios.get(`${API_BASE}/workouts/`);
export const addWorkout = (data) => axios.post(`${API_BASE}/workouts/`, data);

export const getMeals = () => axios.get(`${API_BASE}/meals/`);
export const addMeal = (data) => axios.post(`${API_BASE}/meals/`, data);
