import {
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Button,
  Text,
} from "../Styles/StyledRegistration";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/register", form)
      .then((response) => {
        navigate("/");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormContainer>
      <Title>Admin Registration Form</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          onChange={handleChange}
          type="text"
          id="firstName"
          name="first_name"
        />
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          id="lastName"
          name="last_name"
          onChange={handleChange}
        />
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" name="email" onChange={handleChange} />
        <Label htmlFor="password">Password</Label>
        <Input type="text" name="password" onChange={handleChange} />
        <Text>
          Already have an account? <a href="/">Login here</a>
        </Text>
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default RegistrationForm;
