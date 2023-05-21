import {
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Button,
  Text,
} from "../Styles/StyledRegistration";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../Authentication/AuthentificationContext";

const LoginForm = () => {
  const { setIsSignedIn } = useContext(AuthenticationContext);
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
        const { token } = response.data;
        localStorage.setItem("token", token);
        setIsSignedIn(true);
        navigate("/participants");
        console.log(response);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
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
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <Text>
          Don't have an account? <a href="/register">Register here</a>
        </Text>
        <Button type="submit">Login</Button>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
