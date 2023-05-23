import React from "react";
import { Container, Title, Description } from "./Styles/StyledFrontPage";

import { Link } from "react-router-dom";
import { Button } from "./Styles/StyledRegistration";

const FrontPage = () => {
  return (
    <Container>
      <Title>RegMaster</Title>
      <Description>
        This is a simple event log app. It allows you to add, delete, and manage
        participants seamlessly. With this app, you can effortlessly register
        and add participants from anywhere, ensuring a smooth and convenient
        experience.
      </Description>
      <Link to="/login">
        <Button>Log in</Button>{" "}
      </Link>
    </Container>
  );
};

export default FrontPage;
