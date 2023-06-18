import appLogoLight from "@/assets/logogreen.png";
import appLogoDark from "@/assets/logogreendark.png";
import { useTheme } from "@/context";
import { ButtonBase } from "@mui/material";

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <ButtonBase>
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
