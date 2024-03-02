import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding-top: 128px;
  background-color: #040404;
`;

export const Title = styled.h1`
  margin: 0;
  /* margin-right: 10px; */
  color: #efede8;
  margin-bottom: 40px;
  /* text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff; */
`;
// export const StyledImage = styled.img`
//   width: 40px;
//   height: 40px;
//   object-fit: cover;
// `;
export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;
  display: block;
  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`;
