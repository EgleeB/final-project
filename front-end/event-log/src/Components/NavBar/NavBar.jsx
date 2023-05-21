import {
  StyledNavBar,
  StyledNavBarLink,
  StyledButton,
} from "../Styles/StyledNavBar";

import { AuthenticationContext } from "../Authentication/AuthentificationContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

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
          <StyledNavBarLink href="/">Login</StyledNavBarLink>
          <StyledNavBarLink href="/register">Register</StyledNavBarLink>
        </>
      )}
      {isSignedIn && <StyledButton onClick={handleLogout}>Logout</StyledButton>}
    </StyledNavBar>
  );
};

export default NavBar;
