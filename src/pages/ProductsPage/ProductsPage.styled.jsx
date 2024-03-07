import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(p) => p.theme.spacing(7)};
`;

export const Title = styled.h2`
  color: ${(p) => p.theme.colors.whiteColor};
  font-size: 32px;
`;
export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
