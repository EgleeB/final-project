import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  padding: 1.5rem 1rem;
  position: sticky;
`;

export const StyledNavBarLink = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  margin: 0 1rem;
  &:hover {
    color: yellow;
  }
`;
