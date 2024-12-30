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
  text-shadow: -1px -1px 0px #a924f0, -1px 1px 0px #a924f0, 1px -1px 0px #a924f0,
    1px 0px 0px #a924f0;
  margin-left: 5px;
  margin-top: 10px;
  font-size: 15px;
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

  .dropdown-menu {
    background-color: #4e007d;
    border-radius: 5px;
  }

  .dropdown-item {
    color: #fff;
    font-size: 18px;
    &:hover {
      background-color: #650093;
      color: #fff;
    }
  }
`;

export const StyledNavbar = styled(Navbar)`
  background-image: linear-gradient(
    65deg,
    #43008d 0,
    #650093 25%,
    #86169d 50%,
    #a42fa7 75%,
    #bd41ae 100%
  );

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 0;
  margin: 0;
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

export const StyledNavLink = styled(Nav.Link)`
  font-size: 20px;
  color: #fff;
  text-shadow: -1px -1px 0px #a924f0, -1px 1px 0px #a924f0, 1px -1px 0px #a924f0,
    1px 0px 0px #a924f0;
  &:hover {
    color: #ff7963;
  }
`;

