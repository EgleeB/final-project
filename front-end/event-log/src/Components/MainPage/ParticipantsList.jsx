import { useEffect, useState } from "react";
import axios from "axios";
import {
  ParticipantsContainer,
  ParticipantsTitle,
} from "../Styles/StyledParticipantsList";
import Participant from "./Participant";

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
      console.log(err);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ParticipantsContainer>
      <ParticipantsTitle>Participants List</ParticipantsTitle>
      {participants.map((participant) => {
        return <Participant key={participant.id} {...participant} />;
      })}
      <Participant />
    </ParticipantsContainer>
  );
};

export default ParticipantsList;
