import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { useTranslation } from "@/hooks";

export const PageTitle = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <Typography textTransform="uppercase">{t(`paths.${pathname}`)}</Typography>
  );
};
