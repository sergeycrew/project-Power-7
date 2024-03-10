import * as s from './SecondaryPageBg.styled';

export const SecondaryPageBg = ({children}) => {
  return (
    <s.ExrBackgroundImage>
    {children}
   
  </s.ExrBackgroundImage>
  );
};