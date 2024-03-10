import {
  BurnedCaloriesDiv,
  BurnedCaloriesNumber,
  BurnedCaloriesText,
  Button,
  ButtonAdd,
  DivColumn,
  DivTimer,
  ImgDiv,
  ImgGif,
  ItemDiv,
  ItemTrening,
  ListTrening,
  NameItem,
  SpanButton,
  Svg,
  Text,
  ValueItem,
} from './ModalTrening.styled';
import icons from '../../images/sprite.svg';
import { CustomModal } from 'components/CustomModal/CustomModal';
import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
// import { addWorkout } from '../../jsonFromBd/testApi';
import { toast } from 'react-toastify';
import { featchAddExercises } from '../../redux/exercises/operationsExercises';
import { useDispatch } from 'react-redux';

export const ModalTrening = ({
  onToogle,
  exerciseInfo,
  setIsSuccessOpen,
  setWorkoutDoneInfo,
}) => {
  const children = exerciseInfo.time * 60;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isSecond, setIsSecond] = useState(0);
  const [isCalories, setIsCalories] = useState(0);
  const [isRound, setIsRound] = useState(0);
  const [roundCounter, setRoundCounter] = useState(children);
  const dispatch = useDispatch();

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }


  const caloriesOneSeconds =
    Math.round((exerciseInfo.burnedCalories / children) * 100) / 100;

  useEffect(() => {
    let interval;
    if (isPlaying && roundCounter !== isSecond) {
      interval = setInterval(() => {
        setIsSecond((isSecond) => isSecond + 1);
        setIsCalories((isCalories) => isCalories + caloriesOneSeconds);
      }, 1000);
    } else if (isSecond === roundCounter) {
      setIsPlaying(false);
      setRoundCounter((roundCounter) => roundCounter + children);
      setIsRound((isRound) => isRound + 1);
    }

    return () => clearInterval(interval);
  }, [
    children,
    setIsPlaying,
    setIsSecond,
    isPlaying,
    isSecond,
    setIsCalories,
    caloriesOneSeconds,
    roundCounter,
  ]);

  const togglePlaying = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const timerFormat = formatTime(isSecond);

  const handleSendWorkout = () => {
    if (isPlaying || isSecond < 1) {
      toast.error(
        `Impossible to add workout. Finish working out before adding!`
      );
      return;
    }

    const workout = {
      exerciseId: exerciseInfo._id,
      time: Math.ceil(isSecond / 60),
      calories: Math.ceil(isCalories),
    };

    dispatch(featchAddExercises(workout));

    setWorkoutDoneInfo({
      time: workout.time,
      calories: workout.calories,
    });
    setIsSuccessOpen();
    onToogle();
    console.log(workout);
  };

  return (
    <CustomModal
      onClose={onToogle}
      modalStyles={{
        width: '335px',
        height: '858px',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        padding: '0',
      }}
      modalTabletStyles={{
        width: '694px',
        height: '550px',
        display: 'flex',
        flexDirection: 'inherit',
        gap: '16px',
        margin: '0px',
        alignItems: 'flex-start',
      }}
    >
      <>
        <DivColumn>
          <ImgDiv>
            <ImgGif src={exerciseInfo.gifUrl} alt="Working out" />
          </ImgDiv>
          <DivTimer>
            <Text>Time</Text>
            <CountdownCircleTimer
              isPlaying={isPlaying}
              duration={children}
              size={125}
              colors="#E6533C"
              trailColor="#EFEDE81A"
              strokeWidth={4}
              onComplete={() => {
                if (isPlaying) {
                  return { shouldRepeat: true };
                }
              }}
            >
              {() => {
                return (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      color: 'white',
                    }}
                  >
                    <div>{timerFormat}</div>
                    
                  </div>
                );
              }}
            </CountdownCircleTimer>
          </DivTimer>
          <Button type="button" onClick={togglePlaying}>
            <Svg>
              <svg fill="#EFEDE8">
                {isPlaying ? (
                  <use href={icons + '#icon-pause-square'}></use>
                ) : (
                  <use href={icons + '#icon-play'}></use>
                )}
              </svg>
            </Svg>
          </Button>

          <BurnedCaloriesDiv>
            <BurnedCaloriesText>Burned calories:</BurnedCaloriesText>
            <BurnedCaloriesNumber>
              {Math.round(isCalories * 100) / 100}
            </BurnedCaloriesNumber>
          </BurnedCaloriesDiv>
        </DivColumn>
        <DivColumn>
          <ListTrening>
            {Object.entries(exerciseInfo)
              .filter(
                ([key, value]) =>
                  key !== 'gifUrl' && key !== 'burnedCalories' && key !== '_id'
              )
              .map(([key, value]) => (
                <ItemTrening key={value}>
                  <ItemDiv>
                    <NameItem>{key}</NameItem>
                    <ValueItem>{value}</ValueItem>
                  </ItemDiv>
                </ItemTrening>
              ))}
          </ListTrening>

          <ButtonAdd onClick={handleSendWorkout}>
            <SpanButton>Add to diary</SpanButton>
          </ButtonAdd>
        </DivColumn>
      </>
    </CustomModal>
  );
};
