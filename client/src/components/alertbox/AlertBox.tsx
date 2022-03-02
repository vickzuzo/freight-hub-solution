import React from "react";
import { AlertContainer, ErrorAlert, SuccessAlert } from "../../styles";

interface Props {
  success: string | null;
  error: string | null;
}

const AlertBox = (props: Props) => {
  return (
    <AlertContainer>
      {props.success !== "" && <SuccessAlert>{props.success}</SuccessAlert>}
      {props.error !== "" && <ErrorAlert>{props.error}</ErrorAlert>}
    </AlertContainer>
  );
};

export default AlertBox;
