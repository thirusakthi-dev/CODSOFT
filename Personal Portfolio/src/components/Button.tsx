import React from "react";
import styled from "styled-components";

interface ButtonProps {
  bgColor?: string;
  color?: string;
  padding?: string;
  borderRadius?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor};
`;

const Button = () => {};

export default Button;
