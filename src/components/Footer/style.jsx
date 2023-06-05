import styled from "styled-components";

export const StyledFooter = styled.footer`
  font-family: "Roboto Slab", sans-serif;
  /* background: linear-gradient(to right, #87179D, #0f0f0f); */
  background-color: #87179D;
  color: #fff;
`;
export const FooterText = styled.div`
  background-color: #0f0f0f;
  padding: 10px;
  color: #fff;
  text-align: center;
  
  a {
    color: #fff;
    text-decoration: underline;
  }
`;

export const FooterContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }
  
  span {
    font-size: 14px;
  }
`;



export const LinkWithoutUnderline = styled.a`
  text-decoration: none;
  
`