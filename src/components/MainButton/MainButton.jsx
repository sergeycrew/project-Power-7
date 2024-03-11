import { Btn } from './MainButton.styled';

export const MainButton = ({
  type,
  text,
  filled,
  disabled,
  btnStyles,
  modalbutton,
  onClick,
  btn320Styles,
}) => {
  return (
    <Btn
      type={type}
      filled={filled}
      disabled={disabled}
      btnStyles={btnStyles}
      btn320Styles={btn320Styles}
      modalbutton={modalbutton}
      onClick={onClick}
    >
      {text}
    </Btn>
  );
};