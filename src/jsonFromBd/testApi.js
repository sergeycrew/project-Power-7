import axios from 'axios';

// const BASE_URL = 'https://backend-power-pulse-7.onrender.com';

// axios.defaults.baseURL = BASE_URL;


export const getExercisesCategory = async () => {
    const res = await axios.get(`/api/exercises/`);
  
    return res.data;
};

export const getAllExercises = async () => {
    const res = await axios.get('/api/exercises/all');
  
    return res.data;
};

export const addWorkout = async workout => {
    const res = await axios.post('/api/diary/workout', workout);
  
    return res.data;
  };