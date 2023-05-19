import {
  ParticipantContainer,
  ParticipantName,
  ParticipantInfo,
} from "../Styles/StyledParticipant";

const Participant = (participant) => {
  return (
    <ParticipantContainer>
      <ParticipantName>
        {participant.first_name} {participant.last_name}
      </ParticipantName>
      <ParticipantInfo>{participant.email} </ParticipantInfo>
      <ParticipantInfo>{participant.phone_number}</ParticipantInfo>
    </ParticipantContainer>
  );
};
export default Participant;
