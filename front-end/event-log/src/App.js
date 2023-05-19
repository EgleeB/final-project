import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/NavBar/NavBar";
import RegistrationForm from "./Components/Registration/Registration";
import LoginForm from "./Components/Login/Login";
import ParticipantsList from "./Components/MainPage/ParticipantsList";
import ParticipantForm from "./Components/MainPage/ParticipantForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/participants" element={<ParticipantsList />} />
        <Route path="/addParticipant" element={<ParticipantForm />} />
      </Routes>
    </>
  );
}

export default App;
