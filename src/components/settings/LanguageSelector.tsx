import { Box, Typography, Grid, useTheme } from "@mui/material";
import { useTranslation } from "@/hooks";
import { ToggleSetting } from "./ToggleSetting";

export const LanguageSelector = () => {
  const theme = useTheme();
  const { t, language, changeLanguage } = useTranslation();

  return (
    <Box p={2} display="flex" flexDirection="column">
      <Typography variant="caption" mb={1}>
        {t("language.selectLanguage")}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ToggleSetting
            isActive={language === "es"}
            onClick={() => changeLanguage("es")}
            icon={
              <Typography
                sx={{
                  color:
                    language === "es"
                      ? theme.palette.common.settingOn
                      : "inherit",
                }}
                variant="h5"
                mt={-1}
              >
                es
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={6}>
          <ToggleSetting
            isActive={language === "en"}
            onClick={() => changeLanguage("en")}
            icon={
              <Typography
                sx={{
                  color:
                    language === "en"
                      ? theme.palette.common.settingOn
                      : "inherit",
                }}
                variant="h5"
                mt={-1}
              >
                en
              </Typography>
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};
