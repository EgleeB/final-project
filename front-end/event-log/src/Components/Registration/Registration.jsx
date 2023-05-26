import {
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Button,
  Text,
  Error,
} from "../Styles/StyledRegistration";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [emailError, setEmailError] = useState("");
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name === "email") {
      const emailValue = e.target.value.trim();
      if (emailValue === "") {
        setEmailError("");
      } else {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(emailValue)) {
          setEmailError("Entered wrong format of email");
        } else {
          setEmailError("");
        }
      }
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const capitalizedForm = {
      ...form,
      first_name: capitalizeFirstLetter(form.first_name),
      last_name: capitalizeFirstLetter(form.last_name),
    };

    if (emailError) {
      return;
    }

    axios
      .post("http://localhost:8000/register", capitalizedForm)
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => {
        alert("Something went wrong");
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
        <Input type="email" id="email" name="email" onChange={handleChange} />
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" onChange={handleChange} />
        <Text>
          Already have an account? <a href="/">Login here</a>
        </Text>
        <Error>{emailError}</Error>
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default RegistrationForm;
