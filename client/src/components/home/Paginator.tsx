import React from "react";
import Icon from "react-icons-kit";
import { PaginatorContainer } from "../../styles";
import { ic_arrow_forward_ios } from "react-icons-kit/md/ic_arrow_forward_ios";
import { ic_arrow_back_ios } from "react-icons-kit/md/ic_arrow_back_ios";

type Props = {
  goToNextPage: () => void;
  goToPreviousPage: () => void;
};


const Paginator = (props: Props) => {
  const nextPage = () => {
    props.goToNextPage();
  };

  const previousPage = () => {
    props.goToPreviousPage();
  };

  return (
    <PaginatorContainer>
      <button onClick={previousPage}>
        <Icon icon={ic_arrow_back_ios} size={22} />
      </button>
      <button onClick={nextPage}>
        <Icon icon={ic_arrow_forward_ios} size={22} />
      </button>
    </PaginatorContainer>
  );
};

export default Paginator;
