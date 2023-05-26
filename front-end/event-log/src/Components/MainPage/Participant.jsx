import {
  ParticipantContainer,
  ParticipantName,
  ParticipantInfo,
} from "../Styles/StyledParticipant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../Styles/StyledRegistration";

const Participant = ({ participant, onDelete }) => {
  const navigate = useNavigate();

  const handleRemove = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm(
      "Are you sure you want to remove this participant?"
    );
    if (confirmed) {
      try {
        await axios.delete(
          `http://localhost:8000/participants/${participant.id}`
        );
        onDelete(participant.id);
        navigate("/participants");
      } catch (error) {
        alert("Something went wrong");
      }
    }
  };

  return (
    <ParticipantContainer>
      <ParticipantName>
        {participant.first_name} {participant.last_name}
      </ParticipantName>
      <ParticipantInfo> {participant.email} </ParticipantInfo>
      <ParticipantInfo>+{participant.phone_number}</ParticipantInfo>
      <Button onClick={handleRemove}> Remove</Button>
    </ParticipantContainer>
  );
};
export default Participant;
