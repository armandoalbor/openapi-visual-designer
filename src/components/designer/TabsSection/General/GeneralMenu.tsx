import { useRouteMatch, useHistory } from "react-router-dom";
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { getMenuItems } from "./helpers";

export const GeneralMenu = () => {
  const history = useHistory();
  const { url } = useRouteMatch();
  const { items } = getMenuItems();

  return (
    <List sx={{ width: "100%" }}>
      {items.map((menu) => {
        return (
          <ListItemButton
            key={menu.title}
            onClick={() => {
              history.push(`${url}/${menu.path}`);
            }}
          >
            <ListItemAvatar>
              <Avatar>{menu.icon}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={menu.title} secondary={menu.subtitle} />
          </ListItemButton>
        );
      })}
    </List>
  );
};
