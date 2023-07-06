import styled from "styled-components";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export const LogoImage = styled.img`
  height: 30px;
  margin-left: 40px;
`;

export const NavRedes = styled(Nav)`
  padding-left: 20px;
  padding-right: 20px;
`;

export const CustomNavbar = styled(Navbar)`
  font-size: 18px;
  height: 90px;

  color: blue;

  background-image: linear-gradient(
    225deg,
    #ff7963 0,
    #ff6961 16.67%,
    #ff545d 33.33%,
    #ff3858 50%,
    #f20554 66.67%,
    #e60052 83.33%,
    #dd0053 100%
  );
  background-image: linear-gradient(
    65deg,
    #bd41ae 0,
    #a42fa7 25%,
    #86169d 50%,
    #650093 75%,
    #43008d 100%
  );
`;

export const TextLogo = styled.span`
  color: #fff;
  margin-left: 5px;
  margin-top: 10px;
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`;
export const StyledNavText = styled.span`
  color: #fff;
`;

export const StyledNavDropdown = styled(NavDropdown)`
  .dropdown-toggle {
    font-size: 20px;
    color: #fff;
    text-shadow: -1px -1px 0px #a924f0, -1px 1px 0px #a924f0,
      1px -1px 0px #a924f0, 1px 0px 0px #a924f0;
  }
`;

export const StyledNavbar = styled(Navbar)`
  background-image: linear-gradient(
    65deg,
    #bd41ae 0,
    #a42fa7 25%,
    #86169d 50%,
    #650093 75%,
    #43008d 100%
  );
`;
export const TextContainer = styled.span`
  font-size: 20px;
  color: #fff;
  text-shadow: -1px -1px 0px #a924f0, -1px 1px 0px #a924f0, 1px -1px 0px #a924f0,
    1px 0px 0px #a924f0;
`;

export const IconWidth = styled.span`
  font-size: 25px;
`;
