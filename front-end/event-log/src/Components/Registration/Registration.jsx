import {
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Button,
} from "../Styles/StyledRegistration";

const RegistrationForm = () => {
  return (
    <FormContainer>
      <Title>Admin registration Form</Title>
      <Form>
        <Label htmlFor="firstName">First Name</Label>
        <Input type="text" id="firstName" name="firstName" />
        <Label htmlFor="lastName">Last Name</Label>
        <Input type="text" id="lastName" name="lastName" />
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" name="email" />
        <Label htmlFor="password">Password</Label>
        <Input type="text" id="password" name="password" />
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default RegistrationForm;
