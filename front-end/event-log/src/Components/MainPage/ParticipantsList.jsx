import { useEffect, useState } from "react";
import axios from "axios";
import {
  ParticipantsContainer,
  ParticipantsTitle,
} from "../Styles/StyledParticipantsList";
import Participant from "./Participant";
import { ParticipantTotal } from "../Styles/StyledParticipant";

const ParticipantsList = () => {
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/participants");
      setParticipants(response.data);
      setIsLoading(false);
    } catch (err) {
      alert("Something went wrong");
    }
  };

  const handleDeleteParticipant = (participantId) => {
    setParticipants((prevParticipants) =>
      prevParticipants.filter((participant) => participant.id !== participantId)
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const participantsCount = participants.length;

  return (
    <>
      <ParticipantsTitle>
        Registered participants
        <ParticipantTotal>Total: {participantsCount} </ParticipantTotal>
      </ParticipantsTitle>

      <ParticipantsContainer>
        {participants.map((participant) => {
          return (
            <Participant
              key={participant.id}
              participant={participant}
              onDelete={handleDeleteParticipant}
            />
          );
        })}
      </ParticipantsContainer>
    </>
  );
};

export default ParticipantsList;
