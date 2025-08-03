import React, { useState } from 'react';
import { TextField, Button, Typography, Stack } from '@mui/material';
import { addWorkout } from '../services/api';

const WorkoutForm = () => {
  const [form, setForm] = useState({
    type: '',
    duration_minutes: '',
    calories_burned: '',
    date: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await addWorkout(form);
      alert('Workout added successfully!');
      setForm({ type: '', duration_minutes: '', calories_burned: '', date: '' });
    } catch (err) {
      alert('Error adding workout');
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Log a Workout</Typography>
      <TextField label="Type" name="type" value={form.type} onChange={handleChange} />
      <TextField label="Duration (minutes)" name="duration_minutes" value={form.duration_minutes} onChange={handleChange} type="number" />
      <TextField label="Calories Burned" name="calories_burned" value={form.calories_burned} onChange={handleChange} type="number" />
      <TextField label="Date" name="date" value={form.date} onChange={handleChange} type="date" InputLabelProps={{ shrink: true }} />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Stack>
  );
};

export default WorkoutForm;
