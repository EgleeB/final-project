import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/NavBar/NavBar";
import RegistrationForm from "./Components/Registration/Registration";
import LoginForm from "./Components/Login/Login";
import { MainPage } from "./Components/MainPage/MainPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/participants" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
