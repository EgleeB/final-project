import { StyledNavBar, StyledNavBarLink } from "../Styles/StyledNavBar";

import { AuthenticationContext } from "../Authentication/AuthentificationContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Styles/StyledRegistration";

const NavBar = () => {
  const { isSignedIn, setIsSignedIn } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
    navigate("/");
  };

  return (
    <StyledNavBar>
      {isSignedIn ? (
        <>
          <StyledNavBarLink href="/participants">Participants</StyledNavBarLink>
          <StyledNavBarLink href="/addParticipant">
            Add participant
          </StyledNavBarLink>
        </>
      ) : (
        <>
          <StyledNavBarLink href="/">Home</StyledNavBarLink>
          <StyledNavBarLink href="/login">Login</StyledNavBarLink>
          <StyledNavBarLink href="/register">Register</StyledNavBarLink>
        </>
      )}
      {isSignedIn && <Button onClick={handleLogout}>Logout</Button>}
    </StyledNavBar>
  );
};

export default NavBar;
