import {
  StyledLogoLink,
  StyledNavBar,
  StyledNavBarButtonContainer,
  StyledNavBarLink,
} from "../Styles/StyledNavBar";
import { AuthenticationContext } from "../Authentication/AuthentificationContext";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
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
          <StyledLogoLink href="/">RegMaster</StyledLogoLink>
          <StyledNavBarButtonContainer>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </StyledNavBarButtonContainer>
        </>
      )}
      {isSignedIn && <Button onClick={handleLogout}>Logout</Button>}
    </StyledNavBar>
  );
};

export default NavBar;
