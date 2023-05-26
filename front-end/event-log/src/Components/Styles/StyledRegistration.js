import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #edf5ef;
  height: 100vh;
  text-align: center;
  padding: 40px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-top: 10px;
  font-weight: 700;
`;

export const Input = styled.input`
  padding: 5px;
  margin-top: 5px;
  border-radius: 10px;
  border: 1px solid #000000;
`;

export const Button = styled.button`
  margin-top: 10px;
  margin-left: 10px;
  background-color: #333;
  color: #fff;
  font-weight: 600;
  border: none;
  padding: 10px;
  border-radius: 10px;
  width: 80px;

  cursor: pointer;
`;

export const Text = styled.p`
  margin-top: 10px;
  color: #333;
`;

export const Error = styled.p`
  color: red;
  font-size: 15px;
  margin-top: 10px;
`;
