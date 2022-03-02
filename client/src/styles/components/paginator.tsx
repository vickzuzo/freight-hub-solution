import styled from "styled-components";

export const PaginatorContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0px;

  button {
    padding: 10px 30px;
    background: transparent;
    border: 1px solid ${(props) => props.theme.primary};
    border-radius: 3px;
    margin: 0px 10px;
    cursor: pointer;
    transition: 0.4s ease;

    i {
      color: ${(props) => props.theme.primary};
      transition: 0.4s ease;
    }
    :hover {
      background: ${(props) => props.theme.primary};
      i {
        color: ${(props) => props.theme.primary_text};
      }
    }
  }
`;
