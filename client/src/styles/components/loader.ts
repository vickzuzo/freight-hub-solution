import styled from "styled-components";

export const Loader = styled.div`
  width: 40px;
  height: 40px;
  margin: 20px auto;
  border: dashed 2px ${(props) => props.theme.primary};
  border-radius: 50%;
  animation: spin 2s infinite ease-in-out;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
