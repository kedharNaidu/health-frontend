import React from 'react';
import { Container, Typography } from '@mui/material';
import WorkoutForm from './components/WorkoutForm';
import MealForm from './components/MealForm';

function App() {
  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>Health Dashboard</Typography>
      <WorkoutForm />
      <MealForm />
    </Container>
  );
}

export default App;
