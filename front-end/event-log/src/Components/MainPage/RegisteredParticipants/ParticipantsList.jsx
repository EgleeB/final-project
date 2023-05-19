import {
  ParticipantsContainer,
  ParticipantsTitle,
} from "../../Styles/StyledParticipantsList";
import Participant from "./Participant";

const ParticipantsList = () => {
  return (
    <ParticipantsContainer>
      <ParticipantsTitle>Participants List</ParticipantsTitle>

      <Participant />
    </ParticipantsContainer>
  );
};

export default ParticipantsList;
