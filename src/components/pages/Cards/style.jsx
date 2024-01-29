import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledSaibaMaisButton = styled(Link)`
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: darkpurple;
  }
`;