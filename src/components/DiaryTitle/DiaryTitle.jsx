import { DaySwitch } from '../DaySwitch/DaySwitch';
import * as s from './DiaryTitle.styled'

export const DiaryTitle = () => {
  return (
    <>
      <s.Title>Diary</s.Title>
      <DaySwitch />
    </>
  );
};
