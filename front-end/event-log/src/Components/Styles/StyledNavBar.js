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

export const StyledLogoLink = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 1rem;
  text-decoration: none;
  color: black;
  &:hover {
    color: #858282;
  }
`;

export const StyledNavBarButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
