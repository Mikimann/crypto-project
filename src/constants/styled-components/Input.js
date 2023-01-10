import styled from 'styled-components';

const Input = styled.input`
  width: 76%;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.08);
  padding: 10px 20px;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  &:focus {
    border: 2px solid rgba(0, 0, 0, 0.18);
  }
`;

export default Input;
