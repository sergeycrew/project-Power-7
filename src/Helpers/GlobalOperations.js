export const capitalize = (value) => {
  const string = value.toString();

  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

export const findSuccesColor = (time, doneExerciseTime) => {
  return time < doneExerciseTime ? 'green' : 'gray';
};

export const findAttentionColor = (intake, consume) => {
  return intake < consume ? 'red' : 'gray';
};

export const findSportRemaining = (timeSport, doneExercisesTime) => {
  return timeSport >= doneExercisesTime
    ? timeSport - doneExercisesTime
    : `+${doneExercisesTime - timeSport}`;
};

export const findCaloriesRemaining = (intake, consumed) => {
  return intake >= consumed ? intake - consumed : `-${consumed - intake}`;
};

export const findRecommendedProduct = (value) => {
  return value ? { text: 'Yes', color: 'green' } : { text: 'No', color: 'red' };
};
