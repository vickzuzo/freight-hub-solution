import React, { useEffect, useState } from "react";
import Icon from "react-icons-kit";
import { ic_arrow_back_ios } from "react-icons-kit/md/ic_arrow_back_ios";
import { useHistory } from "react-router-dom";
import {
  HeaderContainer,
  LogoContainer,
  NavMenuContainer,
} from "../../styles";
import "../../styles/css/styles.css";
import ThemeToggler from "../ThemeToggler";
interface Props {
  space?: string;
  goBack?: boolean;
}

const HeaderMobile = (props: Props) => {
  const [headerChange, setHeaderChange] = useState(false);

  const { goBack } = useHistory();

  useEffect(() => {
    const scroller = () => setHeaderChange(window.pageYOffset > 50);
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scroller);
    }
    return () => {
      window.removeEventListener("scroll", scroller);
    };
  }, []);

  return (
    <HeaderContainer className={headerChange ? "header_change mobile" : "mobile"}>
      <LogoContainer>
        {props.goBack === true ? (
          <Icon icon={ic_arrow_back_ios} onClick={() => goBack()} size={30} />
        ) : (
          ""
        )}
        <p>
          Freight<span>HUB</span>
        </p>
      </LogoContainer>
      <NavMenuContainer>
        <ThemeToggler />
      </NavMenuContainer>
    </HeaderContainer>
  );
};

export default HeaderMobile;
