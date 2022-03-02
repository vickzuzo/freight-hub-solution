import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;

  & label {
    width: 100%;
    border-radius: 4px;
    margin: 0;
    padding: 0;

    & input {
      padding: 10px;
      background: transparent;
      width: 100%;
      color: ${(props) => props.theme.primary_text};
      border: 1px solid ${(props) => props.theme.primary};

      &::placeholder {
        color: ${(props) => props.theme.gray};
      }
    }
  }

  & button {
    border: 1px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.gray};
    background: transparent;
    transition: 0.4s ease;
    margin-left: 40px;
    padding: 10px;
    width: 20%;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
      background: ${(props) => props.theme.primary};
      border: 1px solid transparent;
      color: ${(props) => props.theme.primary_text};
    }
  }
`;
