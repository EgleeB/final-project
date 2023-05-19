import {
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Button,
} from "../Styles/StyledRegistration";

const LoginForm = () => {
  return (
    <FormContainer>
      <Title>Login Form</Title>
      <Form>
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" name="email" />
        <Label htmlFor="password">Password</Label>
        <Input type="text" id="password" name="password" />
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
