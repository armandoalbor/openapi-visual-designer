// import { LinkProps } from "@mui/material/Link";
import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumbs as BreadcrumbsMUI,
  Chip,
  emphasize,
  styled,
} from "@mui/material";
import { Home, NavigateNext } from "@mui/icons-material";
import { useTranslation } from "@/hooks";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
      cursor: "pointer",
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

export const Breadcrumbs = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <BreadcrumbsMUI
      aria-label="breadcrumb"
      separator={<NavigateNext fontSize="small" />}
    >
      <StyledBreadcrumb
        component={Link}
        to={"/"}
        label={"Home"}
        icon={<Home fontSize="small" />}
      />

      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const label = t(`paths.${to}`);

        return last ? (
          <StyledBreadcrumb
            key={to}
            component={Link}
            to={to}
            label={label}
            // icon={<Home fontSize="small" />}
          />
        ) : (
          <StyledBreadcrumb
            key={to}
            component={Link}
            to={to}
            label={label}
            // icon={<Home fontSize="small" />}
          />
        );
      })}
    </BreadcrumbsMUI>
  );
};
