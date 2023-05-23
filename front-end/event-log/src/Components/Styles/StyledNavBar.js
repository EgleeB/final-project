import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  padding: 1.5rem 1rem;
  position: sticky;
`;

export const StyledNavBarLink = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: #575757;
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0 1rem;
  &:hover {
    color: #858282; /* Hover color matches the description color */
  }
`;

export const StyledButton = styled.button`
  background-color: #2196f3; /* White color */
  color: white; /* Blue color */
  border: none;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #fffaf0; /* Hover background color matches the description color */
    color: #2196f3; /* Hover text color matches the link color */
  }
`;
