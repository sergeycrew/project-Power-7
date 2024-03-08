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
