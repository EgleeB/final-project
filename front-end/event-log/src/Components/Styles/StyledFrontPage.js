import styled, { keyframes } from "styled-components";

const waveBackground = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
  background: linear-gradient(to right, #5da16f 20%, #edf5ef 100%, #5f8769 40%);
  background-size: 200% 100%;
  animation: ${waveBackground} 10s linear infinite;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;
