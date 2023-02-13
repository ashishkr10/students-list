import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate, useLocation } from "react-router-dom";
import { ListItemButton } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { logout } from "../firebase";
import { makeStyles } from "@mui/styles";
const drawerWidth = 260;

const useStyles = makeStyles({
  active: {
    background: "red",
    color: "white",
  },
});

export default function Navbar({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();

  const [email, setEmail] = useState(localStorage.getItem("email"));

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    logout();
  };

  const itemslist = [
    {
      text: "Add Student",
      path: "/add",
      icon: <PeopleAltOutlinedIcon />,
      onclick: () => navigate("/add"),
    },
    {
      text: "Manage Students",
      path: "/manage",
      icon: <FormatListBulletedOutlinedIcon />,
      onclick: () => navigate("/manage"),
    },
    {
      text: "Logout",
      icon: <LogoutOutlinedIcon />,
      onclick: handleLogout,
    },
  ];

  return (
    <Box display="flex">
      <CssBaseline />
      <AppBar
        position="absolute"
        color="transparent"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: 0 }}
      >
        <Toolbar>
          <Box flexGrow={1}>
            <Typography variant="h4" noWrap component="div">
              LOGO
            </Typography>
          </Box>

          <Box
            component="span"
            sx={{ border: "1px solid gray", borderRadius: 2, display: "flex" }}
          >
            <Box p={1}>
              <PersonOutlineOutlinedIcon />
            </Box>
            <Box p={1}>
              <Typography variant="subtitle1">{email}</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: 0,
          },
        }}
      >
        <Toolbar />

        <List sx={{ marginTop: 2 }}>
          {itemslist.map((item, index) => {
            const { text, path, icon, onclick } = item;
            return (
              <ListItemButton
                key={text}
                onClick={onclick}
                sx={{
                  "& .css-6s4a1q-MuiButtonBase-root-MuiListItemButton-root": {
                    backgroundColor: "inhert",
                  },
                }}
                className={location.pathname === path ? classes.active : null}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <Box flexGrow={1}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
