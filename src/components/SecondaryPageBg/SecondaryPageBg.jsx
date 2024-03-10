import { BgContainer, BgImage, Wrapper } from './SecondaryPageBg.styled';

export const SecondaryPageBg = ({ children, hidefilter }) => {
  return (
    <Wrapper>
      <BgContainer>
        <BgImage  hidefilter={hidefilter} />
      </BgContainer>
      {children}
    </Wrapper>
  );
};