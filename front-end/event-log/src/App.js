import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/NavBar/NavBar";
import RegistrationForm from "./Components/Registration/Registration";
import LoginForm from "./Components/Login/Login";
import ParticipantsList from "./Components/MainPage/RegisteredParticipants/ParticipantsList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/participants" element={<ParticipantsList />} />
      </Routes>
    </>
  );
}

export default App;
