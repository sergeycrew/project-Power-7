import styled from 'styled-components';

export const ItemCommonTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${(p) => p.theme.colors.orangeLightColor};
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
