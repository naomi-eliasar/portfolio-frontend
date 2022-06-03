import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function DrawerItem(props) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText>{props.item}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
