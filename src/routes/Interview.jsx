import React, { useEffect } from "react";
import { fetchStudentList } from "../api/studentAPI";

const Interview = () => {
  useEffect(() => {
    fetchStudentList();
  }, []);

  return <> TODO: add calendar to see interview dates </>;
};

export default Interview;
