import { useEffect, useState } from "react";
import axios from "axios";
import {
  ParticipantsContainer,
  ParticipantsTitle,
} from "../Styles/StyledParticipantsList";
import Participant from "./Participant";

const ParticipantsList = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/participants");
      setParticipants(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

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
