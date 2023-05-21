import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/NavBar/NavBar";
import RegistrationForm from "./Components/Registration/Registration";
import LoginForm from "./Components/Login/Login";
import ParticipantsList from "./Components/MainPage/ParticipantsList";
import ParticipantForm from "./Components/MainPage/ParticipantForm";
import Protected from "./Components/Authentication/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route element={<Protected />}>
          <Route path="/participants" element={<ParticipantsList />} />
          <Route path="/addParticipant" element={<ParticipantForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
