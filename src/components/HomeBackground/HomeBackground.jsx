import { useSelector } from 'react-redux';

import { StatisticsInfo } from '../StatisticsInfo/StatisticsInfo';
import { HomeBackgroundImage } from './HomeBackgroung.styled';


export const HomeBackground = ({ children }) => {

  return (
    <HomeBackgroundImage>
      {children}
    
      <StatisticsInfo />)
    </HomeBackgroundImage>
  );
};
