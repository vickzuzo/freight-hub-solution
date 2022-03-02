import { Dispatch } from "redux";
import { SiteActionType } from "../action-types";
import { SiteAction } from "../actions/siteActions";

export const setTheme = (theme: string) => {
  return async (dispatch: Dispatch<SiteAction>) => {
    dispatch({
      type: SiteActionType.SET_THEME,
      theme: theme
    });
  };
};
