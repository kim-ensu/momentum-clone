import styled from "styled-components";

export const Welcome = styled.div`
  position: absolute;
  text-align: center;
  padding: 1rem;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const TimeStamp = styled.div`
  font-size: 8rem;
  font-weight: 500;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 600px) {
    font-size: 5rem;
  }
`;

export const Greeting = styled.div`
  font-size: 4rem;
  font-weight: 600;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;
