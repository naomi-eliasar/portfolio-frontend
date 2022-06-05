import * as React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";

export default function DrawerItem(props) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText>
          <Link underline="hover" color="inherit" path={props.path}>
            {props.item}
          </Link>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
