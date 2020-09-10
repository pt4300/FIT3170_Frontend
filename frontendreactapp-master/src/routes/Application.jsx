import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { fetchApplicationList } from "../api/applicationAPI";

const Application = () => {
  useEffect(() => {
    fetchApplicationList();
  }, []);

  return (
    <>
      <Button
        variant="contained"
        component={Link}
        to="/application_begin"
        color="primary"
      >
        Begin Application
      </Button>
    </>
  );
};

export default Application;
