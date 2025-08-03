import React, { useState } from 'react';
import { TextField, Button, Typography, Stack, MenuItem } from '@mui/material';
import { addMeal } from '../services/api';

const MealForm = () => {
  const [form, setForm] = useState({
    food_name: '',
    calories: '',
    meal_type: '',
    datetime: '',
  });

  const mealOptions = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await addMeal(form);
      alert('Meal added successfully!');
      setForm({ food_name: '', calories: '', meal_type: '', datetime: '' });
    } catch (err) {
      alert('Error adding meal');
    }
  };

  return (
    <Stack spacing={2} sx={{ mt: 5 }}>
      <Typography variant="h6">Log a Meal</Typography>
      <TextField label="Food Name" name="food_name" value={form.food_name} onChange={handleChange} />
      <TextField label="Calories" name="calories" value={form.calories} onChange={handleChange} type="number" />
      <TextField
        select
        label="Meal Type"
        name="meal_type"
        value={form.meal_type}
        onChange={handleChange}
      >
        {mealOptions.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </TextField>
      <TextField
        label="Date & Time"
        name="datetime"
        value={form.datetime}
        onChange={handleChange}
        type="datetime-local"
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Stack>
  );
};

export default MealForm;
