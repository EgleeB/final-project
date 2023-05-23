import { useContext, useState } from "react";
import axios from "axios";
import {
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Button,
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

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      admin_id: adminId, // Include the adminId in the request body
      ...form, // Include other participant data
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/participants",
        data
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
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default ParticipantForm;
