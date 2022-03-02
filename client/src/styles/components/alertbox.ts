import styled from "styled-components";

export const AlertContainer = styled.div`
  position: fixed;
  top: 10%;
  right: 0;
  z-index: 100000;
`;

export const SuccessAlert = styled.div`
  /* padding: 30px; */
  width: 200px;
  height: 60px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
  animation: fadeOut 0s ease-in 5s forwards;

  @keyframes fadeOut {
    to {
      width: 0;
      height: 0;
      overflow: hidden;
    }
  }
`;

export const ErrorAlert = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
  display: none;
`;
