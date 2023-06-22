import { Box, Typography, Grid, useTheme as useThemeMui } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useTheme } from "@/context";
import { useTranslation } from "@/hooks";
import { ToggleSetting } from "./ToggleSetting";

export const ThemeSelector = () => {
  const { theme, actions } = useTheme();
  const currentTheme = useThemeMui();
  const { t } = useTranslation();

  return (
    <Box p={2} display="flex" flexDirection="column">
      <Typography variant="caption" mb={1}>
        {t("theme.selectTheme")}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ToggleSetting
            isActive={theme === "light"}
            onClick={() => actions?.onSelectTheme("light")}
            icon={
              <LightMode
                sx={{
                  color:
                    theme === "light"
                      ? currentTheme.palette.common.settingOn
                      : "inherit",
                }}
              />
            }
          />
        </Grid>
        <Grid item xs={6}>
          <ToggleSetting
            isActive={theme === "dark"}
            onClick={() => actions?.onSelectTheme("dark")}
            icon={
              <DarkMode
                sx={{
                  color:
                    theme === "dark"
                      ? currentTheme.palette.common.settingOn
                      : "inherit",
                }}
              />
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};
