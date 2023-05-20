import {
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Button,
} from "../Styles/StyledRegistration";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", form)
      .then((response) => {
        navigate("/addParticipant");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid email or password");
      });
  };

  return (
    <FormContainer>
      <Title>Login Form</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" name="email" onChange={handleChange} />
        <Label htmlFor="password">Password</Label>
        <Input
          type="text"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
