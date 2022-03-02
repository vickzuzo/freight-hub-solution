import styled from "styled-components";

export const HeroSection = styled.div`
  width: 100%;
  height: 60vh;
  margin: 0 auto;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url("banner1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ul {
    list-style: none;
    display: flex;
    margin: 20px 0px;
    li {
      margin: 0px 20px;
      font-size: 20px;
      transition: 0.4s ease;
      :hover {
        color: ${(props) => props.theme.primary};
      }
    }
  }
  h1 {
    font-size: 40px;
    text-transform: uppercase;
    span {
      color: ${(props) => props.theme.primary};
    }
  }
`;
