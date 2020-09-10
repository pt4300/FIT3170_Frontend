import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import {
  Drawer,
  Hidden,
  List,
  Divider,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;
const drawerStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const ResponsiveDrawer = ({
  mobileDrawerOpen,
  handleDrawerToggle,
  ...props
}) => {
  const classes = drawerStyles();
  const theme = useTheme();

  const drawerContent = (
    <>
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button component={NavLink} to="/login">
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={NavLink} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={NavLink} to="/eligibility">
          <ListItemText primary="  Check Eligibility" />
        </ListItem>
        <ListItem button component={NavLink} to="/interview">
          <ListItemText primary="Interview" />
        </ListItem>
        <ListItem button component={NavLink} to="/activities">
          <ListItemText primary="Activities" />
        </ListItem>
        <ListItem button component={NavLink} to="/application">
          <ListItemText primary="Application" />
        </ListItem>
      </List>
    </>
  );

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileDrawerOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawerContent}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawerContent}
        </Drawer>
      </Hidden>
    </nav>
  );
};

ResponsiveDrawer.propTypes = {
  mobileDrawerOpen: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
};

export default ResponsiveDrawer;
