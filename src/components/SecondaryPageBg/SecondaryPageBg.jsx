import { BgContainer, BgImage, Wrapper } from './SecondaryPageBg.styled';

export const SecondaryPageBg = ({ children, hideFilter }) => {
  return (
    <Wrapper>
      <BgContainer>
        <BgImage  hideFilter={hideFilter} />
      </BgContainer>
      {children}
    </Wrapper>
  );
};