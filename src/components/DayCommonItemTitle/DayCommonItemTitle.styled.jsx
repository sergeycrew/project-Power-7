import styled from 'styled-components';

export const ItemCommonTitle = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.orangeLightColor};
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
