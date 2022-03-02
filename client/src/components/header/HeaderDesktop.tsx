import React, { useEffect, useState } from "react";
import Icon from "react-icons-kit";
import { ic_search_outline } from "react-icons-kit/md/ic_search_outline";
import { ic_arrow_back_ios } from "react-icons-kit/md/ic_arrow_back_ios";
import {
  HeaderContainer,
  LogoContainer,
  NavMenuContainer,
  SearchContainer,
} from "../../styles";
import "../../styles/css/styles.css";
import ThemeToggler from "../ThemeToggler";
import { useHistory } from "react-router-dom";

interface Props {
  space?: string;
  goBack?: boolean;
}

const HeaderDesktop = (props: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const [headerChange, setHeaderChange] = useState<boolean>(false);

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleSearchInputFocus = () => {
    setShowSearchInput(true);
  };

  const handleSearchInputBlur = () => {
    setShowSearchInput(false);
  };

  const handleShowSearchInput = () => {
    setShowSearchInput(true);
  };

  return (
    <div>
      <HeaderContainer className={headerChange ? "header_change" : ""}>
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
          <li>Home</li>
          <li>About</li>
          <li>Tracking</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>Blog</li>
          <SearchContainer>
            <label htmlFor="search">
              <input
                name="search"
                placeholder="Search ..."
                type="text"
                onFocus={handleSearchInputFocus}
                onBlur={handleSearchInputBlur}
                value={searchValue}
                tabIndex={1}
                className={showSearchInput === true ? "change" : undefined}
                onChange={handleSearchChange}
              />
            </label>
            <Icon
              icon={ic_search_outline}
              onClick={handleShowSearchInput}
              size={24}
            />
          </SearchContainer>
          <ThemeToggler />
        </NavMenuContainer>
      </HeaderContainer>
    </div>
  );
};

export default HeaderDesktop;
