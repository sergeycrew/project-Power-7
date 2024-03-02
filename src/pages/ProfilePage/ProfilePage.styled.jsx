import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  outline: 1px solid grey;
  border-radius: 20px;
  padding: 10px;
  background-color: black;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-size: larger;
    color: #e22b2b;
  }
  input {
    margin-top: 6px;
    border-radius: 4px;
  }
  button {
    width: 100px;
    cursor: pointer;
    background-color: aqua;
    background-color: black;
    color: aqua;
    color: red;
    border-radius: 5px;
    border: 1px solid aqua;
    &:hover {
      background-color: aqua;
      transform: scale(1.1);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

