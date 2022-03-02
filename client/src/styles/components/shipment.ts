import styled from "styled-components";

export const ShipmentContainer = styled.div`
  width: 100%;

  table {
    border-collapse: collapse;
    background: ${(props) => props.theme.container};
    width: 100%;
    overflow: hidden;
    border: 1px solid ${(props) => props.theme.primary};
    thead {
      width: 100%;
      tr {
        padding: 20px 30px;
        background: ${(props) => props.theme.primary};
        display: flex;
        width: 100%;
        th {
          text-transform: uppercase;
          font-size: 14px;
        }
      }
    }
    tbody {
      tr {
        display: flex;
        background: ${(props) => props.theme.container};
        padding: 0px 30px;
        transition: 0.4s ease;
        border-bottom: 1px solid ${(props) => props.theme.primary};
        &:last-of-type {
          border-bottom: none;
        }
        :hover {
          background: ${(props) => props.theme.background};
        }
        td {
          margin: 30px 0px;
          cursor: pointer;
        }
      }
    }
    .column {
      width: 200px;
      text-align: center;
    }
    
  }
`;

export const ShipmentDetailsContainer = styled.div`
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px;
  background: ${(props) => props.theme.container};
  padding: 20px;

  .content {
    display: flex;
  }

  .left {
    flex: 1;
    border-right: 1px dotted ${(props) => props.theme.primary};
    margin-right: 30px;
  }
  .right {
    flex: 1;
  }

  .content_row {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin: 15px 0px;

    p:first-of-type {
      color: ${(props) => props.theme.primary};
      margin-right: 10px;
      text-transform: uppercase;
    }
    p.title {
      text-transform: capitalize;
      color: ${(props) => props.theme.primary}
    }
  }
  button {
    background: transparent;
    border: 1px solid ${(props) => props.theme.primary};
    width: 100%;
    padding: 10px 0px;
    cursor: pointer;
    transition: 0.4s ease;
    color: ${(props) => props.theme.primary};
    border-radius: 5px;
    margin: 10px 0px;
    :hover {
      color: ${(props) => props.theme.primary_text};
      background: ${(props) => props.theme.primary};
    }
  }
`;
