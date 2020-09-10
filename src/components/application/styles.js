import { makeStyles } from "@material-ui/core/styles";
// Currently ripping from: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/dashboard
export default makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
}));
