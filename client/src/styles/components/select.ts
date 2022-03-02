import styled from "styled-components";

export const SortSelectContainer = styled.div`
  width: 100%;
  margin: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectContainer = styled.div`
  border-radius: 10px;
  padding: 10px 20px;
  background: ${(props) => props.theme.container};
  width: 60%;
  position: relative;
  display: flex;
  justify-content: center;
  box-shadow: 2px 2px 6px ${(props) => props.theme.primary_shadow};
`;

export const SelectInputContainer = styled.div`
  label {
    margin: 0px 10px;
    small {
      margin-right: 10px;
      font-size: 14px;
      color: ${(props) => props.theme.primary};
    }
  }
  select {
    background: transparent;
    border-radius: 4px;
    padding: 5px;
    color: ${(props) => props.theme.primary_text};
    border: 1px solid ${(props) => props.theme.primary};
    option {
      width: 100%;
      background: ${(props) => props.theme.container};
      padding: 0px 10px;
      color: ${(props) => props.theme.primary_text};
    }
  }
`;
