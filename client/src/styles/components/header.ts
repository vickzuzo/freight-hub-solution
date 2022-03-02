import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px 0px;
  width: 100%;
  transition: 0.4s ease;
  z-index: 9999;
  background: ${(props) => props.theme.background};
  border-bottom: 1px solid ${(props) => props.theme.primary};
  box-shadow: 2px 2px 3px ${(props) => props.theme.primary_shadow};

  @media screen and (max-width: 900px) {
    display: flex;
  }

  &.mobile {
    display: none !important;
  }

  &.header_change {
    padding: 15px 0px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & i {
    margin-right: 10px;
    cursor: pointer;
    color: ${(props) => props.theme.primary_text};
    transition: 0.4s ease;
    :hover {
      color: ${(props) => props.theme.primary};
    }
  }
  & p {
    font-size: 25px;
    color: ${(props) => props.theme.primary_text};
    & span {
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const NavMenuContainer = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  & li {
    transition: 0.4s ease;
    padding: 10px 20px;
    margin-left: 5px;
    cursor: pointer;
    font-weight: 600;
    border-radius: 100px;
    font-size: 14px;

    &:hover {
      background: ${(props) => props.theme.primary_hover};
      color: ${(props) => props.theme.primary};
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.primary};
  & input {
    display: none;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.primary_text};
    &::placeholder {
      color: ${(props) => props.theme.gray};
    }
    &.change {
      display: block;
    }
  }
  & i {
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;
