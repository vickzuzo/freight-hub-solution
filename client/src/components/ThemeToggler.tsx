import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelectors";
import Icon from "react-icons-kit";
import { ic_wb_sunny_outline } from "react-icons-kit/md/ic_wb_sunny_outline";
import { ic_nightlight_round } from "react-icons-kit/md/ic_nightlight_round";

const ThemeToggler = (): JSX.Element => {
  const { setTheme } = useActions();

  const { theme } = useTypedSelector((state) => state.site);

  const swapTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Icon
      onClick={swapTheme}
      size={24}
      className={theme === 'light' ? "theme_icon" : 'theme_icon moon'}
      icon={theme === "light" ? ic_nightlight_round : ic_wb_sunny_outline}
    />
  );
};

export default ThemeToggler;
