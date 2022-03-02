import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

interface Props {
  space?: string;
  goBack?: boolean
}

const Header = (props: Props) => {
  return (
    <div>
      <HeaderDesktop space={props.space} goBack={props.goBack} />
      <HeaderMobile space={props.space} />
    </div>
  );
};

export default Header;
