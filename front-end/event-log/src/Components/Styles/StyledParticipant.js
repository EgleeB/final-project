import styled from "styled-components";

export const ParticipantContainer = styled.div`
  background-color: #edf5ef;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ParticipantName = styled.h3`
  margin-bottom: 10px;
`;

export const ParticipantInfo = styled.p`
  margin-bottom: 10px;
  max-width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;

export const Button = styled.button`
  background-color: #2196f3;
  color: #ffffff;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;
`;
