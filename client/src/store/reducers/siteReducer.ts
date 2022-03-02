import { SiteActionType } from "../action-types";
import { SiteAction } from "../actions/siteActions";

interface SiteInitialState {
  theme: string;
  error: string;
  success: string;
  loading: boolean;
}

const initialState = {
  loading: false,
  error: "",
  success: "",
  theme: "dark",
};

const siteReducer = (
  state: SiteInitialState = initialState,
  action: SiteAction
): SiteInitialState => {
  switch (action.type) {
    case SiteActionType.SET_THEME:
      return { ...initialState, theme: action.theme };
    default:
      return state;
  }
};

export default siteReducer;
