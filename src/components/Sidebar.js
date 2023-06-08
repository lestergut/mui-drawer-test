import {
  Box,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { useState } from "react";

const Sidebar = ({ state, operation }) => {
  return (
    <Box
      sx={{
        backgroundColor: "lightgray",
        flexGrow: 1,
        alignItems: "stretch"
      }}
    >
      {" "}
      <Drawer open={state} variant="temporary">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => operation(state)}>
              <ListItemIcon></ListItemIcon>
              <ListItemText> 0 element</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => operation(state)}>
              <ListItemIcon></ListItemIcon>
              <ListItemText>1 element</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => operation(state)}>
              <ListItemIcon></ListItemIcon>
              <ListItemText>2 element</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => operation(state)}>
              <ListItemIcon></ListItemIcon>
              <ListItemText>3 element</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => operation(state)}>
              <ListItemIcon></ListItemIcon>
              <ListItemText>3 element</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
