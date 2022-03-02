import { SiteActionType } from "../action-types";

export interface SetTheme {
  type: SiteActionType.SET_THEME;
  theme: string
}

export type SiteAction = SetTheme;
