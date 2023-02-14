import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.black};
  padding: 20px 30px;
  border: 0;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
`;

const btn = styled.button`
  background-color: ${(props) => (props.isOn ? "#00000" : "gray")};
`;

export default Button;
