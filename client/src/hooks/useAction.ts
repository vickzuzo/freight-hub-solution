import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { siteActionCreators } from "../store";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(siteActionCreators, dispatch);
};
