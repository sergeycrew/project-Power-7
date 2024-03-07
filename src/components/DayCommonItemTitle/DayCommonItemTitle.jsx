import * as s from './DayCommonItemTitle.styled';
import { useEffect, useState } from 'react';

export const DayCommonItemTitle = ({ children, isFirstItem }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <s.ItemCommonTitle>
      {isMobile || isFirstItem ? children : null}
    </s.ItemCommonTitle>
  );
};
