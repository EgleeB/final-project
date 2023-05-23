import styled from "styled-components";

export const ParticipantsContainer = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const ParticipantsTitle = styled.h1`
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: left;
  padding-left: 40px;
`;
