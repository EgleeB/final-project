import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import RegistrationForm from "./Components/Registration/Registration";
import LoginForm from "./Components/Login/Login";
import ParticipantsList from "./Components/MainPage/ParticipantsList";
import ParticipantForm from "./Components/MainPage/ParticipantForm";
import Protected from "./Components/Authentication/ProtectedRoute";
import FrontPage from "./Components/FrontPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/" element={<FrontPage />} />
        <Route element={<Protected />}>
          <Route path="/participants" element={<ParticipantsList />} />
          <Route path="/addParticipant" element={<ParticipantForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
