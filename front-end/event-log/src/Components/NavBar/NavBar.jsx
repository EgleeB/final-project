import { StyledNavBar, StyledNavBarLink } from "./StyledNavBar";

const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledNavBarLink href="/">Home</StyledNavBarLink>

      <StyledNavBarLink href="/events">Events</StyledNavBarLink>

      <StyledNavBarLink href="/about">About</StyledNavBarLink>

      <StyledNavBarLink href="/contact">Contact</StyledNavBarLink>
      <StyledNavBarLink href="/contact">Login</StyledNavBarLink>
    </StyledNavBar>
  );
};

export default NavBar;
