import styled from "styled-components";

export const ShipmentSearchContainer = styled.div`
  width: 100%;
  margin-top: -60px;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    border-radius: 10px;
    padding: 10px 20px;
    background: ${(props) => props.theme.container};
    width: 60%;
    position: relative;
    box-shadow: 2px 2px 6px ${(props) => props.theme.primary_shadow};
    .bar_left {
      width: 30px;
      height: 10px;
      position: absolute;
      top: 10%;
      left: 0;
      border-bottom-right-radius: 10px;
      background: ${(props) => props.theme.primary};
    }
    .bar_right {
        width: 30px;
        border-bottom-left-radius: 10px;
      height: 10px;
      position: absolute;
      top: 10%;
      right: 0;
      background: ${(props) => props.theme.primary};
    }
    .search_content_container {
      display: flex;
      justify-content:center;
      align-items: center;
      flex-direction: column;
      .title {
          font-size: 25px;
          color: ${(props) => props.theme.primary};
          text-transform: uppercase;
      }
      .sub_title {
          color: ${(props) => props.theme.grey};
          font-size: 12px;
      }
    }
  }
`;
