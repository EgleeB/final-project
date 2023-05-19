import {
  ParticipantContainer,
  ParticipantName,
  ParticipantInfo,
} from "../../Styles/StyledParticipant";

const Participant = () => {
  return (
    <ParticipantContainer>
      <ParticipantName>Vardas ir Pavarde</ParticipantName>
      <ParticipantInfo>Email: </ParticipantInfo>
      <ParticipantInfo>Phone Number:</ParticipantInfo>
    </ParticipantContainer>
  );
};
export default Participant;
