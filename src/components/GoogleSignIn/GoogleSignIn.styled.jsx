import styled from 'styled-components';

export const Button = styled.button`

width: 100%;
  height: 100%;
  background-color: transparent;
  border: 1px solid ${(p) => p.theme.colors.accentColor};
  border-radius: ${(p) => p.theme.radii.ld};
  padding: 7px 10px;

  font-weight: 500;
  font-size: 10px;
  line-height: 1.12;
  color: ${(p) => p.theme.colors.whiteColor};
  transition: all 0.3s;

  
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.orangeColor};
  }
  @media screen and (min-width: 768px) {
    padding: 15px 25px;
    font-size: 16px;
    line-height: 1.2;
  }
`

export const Icon = styled.svg`
margin-left: 5px;
width: 15px;
height: 15px;
@media screen and (min-width: 768px) {
margin-left: 10px;
width: 25px;
height: 25px;
  }
`

