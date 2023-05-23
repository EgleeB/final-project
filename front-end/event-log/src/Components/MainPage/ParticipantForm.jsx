import { useContext, useState } from "react";
import axios from "axios";
import {
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Button,
  Error,
} from "../Styles/StyledRegistration";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../Authentication/AuthentificationContext";

const ParticipantForm = () => {
  const { adminId } = useContext(AuthenticationContext);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    admin_id: adminId,
  });

  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

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

    try {
      const response = await axios.post(
        "http://localhost:8000/participants",
        capitalizedForm
      );
      navigate("/participants");
      console.log(response);
      console.log(adminId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormContainer>
      <Title>Fill in participant form</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          id="firstName"
          name="first_name"
          onChange={handleChange}
        />
        <Label htmlFor="last_name">Last Name</Label>
        <Input
          type="text"
          id="lastName"
          name="last_name"
          onChange={handleChange}
        />
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" name="email" onChange={handleChange} />
        <Label htmlFor="number">Phone Number</Label>
        <Input
          type="number"
          id="number"
          name="phone_number"
          onChange={handleChange}
        />
        <Error>{emailError}</Error>
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default ParticipantForm;
