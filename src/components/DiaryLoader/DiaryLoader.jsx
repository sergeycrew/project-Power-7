import { InfinitySpin } from 'react-loader-spinner';
import { StyledWrapper } from './DiaryLoader.styled';

export const DiaryLoader = () => {
  return (
    <StyledWrapper>
      <InfinitySpin
        color="#ef8964"
        visible={true}
        height={100}
        width={100}
        ariaLabel="infinity-spin-loading"
      />
    </StyledWrapper>
  );
};
