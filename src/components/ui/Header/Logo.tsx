import appLogoLight from "@/assets/logogreen.png";
import appLogoDark from "@/assets/logogreendark.png";
import { useTheme } from "@/context";
import { ButtonBase } from "@mui/material";
import { useHistory } from "react-router-dom";

export const Logo = () => {
  const { theme } = useTheme();
  const history = useHistory();

  return (
    <ButtonBase onClick={() => history.push("/")}>
      <img
        src={theme === "light" ? appLogoLight : appLogoDark}
        alt="App logo"
        style={{
          height: 48,
        }}
      />
    </ButtonBase>
  );
};
