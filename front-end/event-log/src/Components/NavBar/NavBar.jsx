import { StyledNavBar, StyledNavBarLink } from "./StyledNavBar";

const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledNavBarLink href="/">Home</StyledNavBarLink>
      <StyledNavBarLink href="/participants">Add participant</StyledNavBarLink>
      <StyledNavBarLink href="/">Login</StyledNavBarLink>
      <StyledNavBarLink href="/register">Register</StyledNavBarLink>
    </StyledNavBar>
  );
};

export default NavBar;
