import { InfinitySpin } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderTrans = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) {
    ${(props) => props.theme.positionPc}
  }
`;

export const LoaderTransp = ({ position, positionTablet, positionPc }) => {
  return (
    <LoaderTrans
      theme={{
        position,
        positionTablet,
        positionPc,
      }}
    >
      <InfinitySpin
        color="#ef8964"
        visible={true}
        height={200}
        width={200}
        ariaLabel="infinity-spin-loading"
      />
    </LoaderTrans>
  );
};
