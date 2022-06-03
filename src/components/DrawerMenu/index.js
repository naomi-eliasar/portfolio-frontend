import * as React from "react";
import { Box, Drawer, Button, List, Divider } from "@mui/material";
import {
  Add,
  Favorite,
  HolidayVillage,
  ModeEdit,
  OtherHouses,
  Menu,
} from "@mui/icons-material";
import DrawerItem from "./drawerItem";

const DrawerMenu = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <DrawerItem item="Edit island" icon={<ModeEdit />} />
        <DrawerItem item="Residents" icon={<HolidayVillage />} />
        <DrawerItem item="Dreamies" icon={<Favorite />} />
      </List>
      <Divider />
      <List>
        <DrawerItem item="Add island" icon={<Add />} />
        <DrawerItem item="Second island" icon={<OtherHouses />} />
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Menu />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export { DrawerMenu };
