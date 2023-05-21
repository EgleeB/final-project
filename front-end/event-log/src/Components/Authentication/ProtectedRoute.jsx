import { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "./AuthentificationContext";
import axios from "axios";

const Protected = () => {
  const { isSignedIn, setIsSignedIn } = useContext(AuthenticationContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:8000/token/verify", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.data.id) {
          setIsSignedIn(true);
          navigate(location.pathname);
        }
      })
      .catch((error) => {
        setIsSignedIn(false);
      });
  }, [setIsSignedIn, navigate, location.pathname]);

  if (isSignedIn === null) {
    return <div>Page is loading...</div>;
  }
  if (!isSignedIn) {
    return <Navigate to="/participants" />;
  }

  return <Outlet />;
};

export default Protected;
