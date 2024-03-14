
import { InfinitySpin } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderTrans = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  transform: translateX(-14.5%);
  width: 100%;
  height: 100%;
  background-color: transparent;
  /* z-index: -1; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderTransp = () => {
  return (
    <LoaderTrans>
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
