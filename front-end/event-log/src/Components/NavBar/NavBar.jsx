import { StyledNavBar, StyledNavBarLink } from "./StyledNavBar";

const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledNavBarLink href="/">Home</StyledNavBarLink>
      <StyledNavBarLink href="/participants">Participants</StyledNavBarLink>
      <StyledNavBarLink href="/">Login</StyledNavBarLink>
      <StyledNavBarLink href="/register">Register</StyledNavBarLink>
      <StyledNavBarLink href="/addParticipant">
        Add participant
      </StyledNavBarLink>
    </StyledNavBar>
  );
};

export default NavBar;
