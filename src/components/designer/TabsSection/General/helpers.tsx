import { useTranslation } from "@/hooks";
import {
  Article,
  Info,
  Language,
  LocalOffer,
  VpnKey,
} from "@mui/icons-material";

interface MenuItem {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  path: string;
}

export const getMenuItems = () => {
  const { t } = useTranslation();

  const items: MenuItem[] = [
    {
      title: t("designer.tabsSection.general.menu.apiDetails.title"),
      subtitle: t("designer.tabsSection.general.menu.apiDetails.subtitle"),
      path: "details",
      icon: <Info />,
    },
    {
      title: t("designer.tabsSection.general.menu.apiSecurity.title"),
      subtitle: t("designer.tabsSection.general.menu.apiSecurity.subtitle"),
      path: "security",
      icon: <VpnKey />,
    },
    {
      title: t("designer.tabsSection.general.menu.apiDocumentation.title"),
      subtitle: t(
        "designer.tabsSection.general.menu.apiDocumentation.subtitle"
      ),
      path: "documentation",
      icon: <Article />,
    },
    {
      title: t("designer.tabsSection.general.menu.servers.title"),
      subtitle: t("designer.tabsSection.general.menu.servers.subtitle"),
      path: "servers",
      icon: <Language />,
    },
    {
      title: t("designer.tabsSection.general.menu.tags.title"),
      subtitle: t("designer.tabsSection.general.menu.tags.subtitle"),
      path: "tags",
      icon: <LocalOffer />,
    },
  ];

  return {
    items,
  };
};
