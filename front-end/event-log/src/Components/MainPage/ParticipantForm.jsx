import {
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Button,
} from "../Styles/StyledRegistration";

const ParticipantForm = () => {
  return (
    <FormContainer>
      <Title>Fill in participant form</Title>
      <Form>
        <Label htmlFor="firstName">First Name</Label>
        <Input type="text" id="firstName" name="firstName" />
        <Label htmlFor="lastName">Last Name</Label>
        <Input type="text" id="lastName" name="lastName" />
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" name="email" />
        <Label htmlFor="number">Phone Number</Label>
        <Input type="number" id="number" name="number" />
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default ParticipantForm;
