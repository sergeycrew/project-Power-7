import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(10, 10, 10, 0.495);

  z-index: 10000;
`;

export const Modal = styled.div`
  position: relative;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 600px;
  height: 300px;
  /* padding: 40px; */
  max-height: 95%;
  overflow-y: auto;

  background-color: #10100f;
  border-radius: 12px;
  border: 1px solid #efede820;
  text-align: center;

  @media screen and (max-width: 374px) {
    ${(props) => props.theme.modal320Styles}
  }

  ${props => props.theme.modalStyles}

  @media screen and (min-width: 768px) {
    ${props => props.theme.modalTabletStyles}
  }
  @media screen and (min-width: 1440px) {
    ${props => props.theme.modalDesktopStyles}
  }
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 14px;
  right: 14px;
  background-color: #10100f;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
  
  width: 26px;
  height: 26px;
}
`;