import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import store from "./context/store";
import { IGNORE_MOCK_SERVER } from "./config";

import Login from "./routes/Login";
import Home from "./routes/Home";
import Interview from "./routes/Interview";
import Activities from "./routes/Activities";
import Application from "./routes/Application";
import ApplicationBegin from "./routes/ApplicationBegin";
import Eligibility from "./routes/Eligibility";

import TitleBar from "./components/TitleBar";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { makeServer } from "./api/mock/mockServer";

if (process.env.NODE_ENV === "development" && !IGNORE_MOCK_SERVER) {
  makeServer({ environment: "development" });
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    minHeight: "100vh",
    overflow: "auto",
    padding: theme.spacing(3),
  },
}));

const RouterApp = () => {
  const classes = useStyles();
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div className={classes.root}>
      <Provider store={store}>
        <Router>
          <CssBaseline />
          <TitleBar handleDrawerToggle={handleDrawerToggle} />
          <ResponsiveDrawer
            handleDrawerToggle={handleDrawerToggle}
            mobileDrawerOpen={mobileDrawerOpen}
          />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/eligibility" component={Eligibility} />
              <Route path="/interview" component={Interview} />
              <Route path="/activities" component={Activities} />
              <Route path="/application" component={Application} />
              <Route path="/application_begin" component={ApplicationBegin} />
            </Switch>
          </main>
        </Router>
      </Provider>
    </div>
  );
};

export default RouterApp;
