import React from "react";
import { useSelector } from "react-redux";
import ApplicationHeader from "../components/ApplicationHeader";
import WamCheck from "../components/WamCheck";
import CreditPointCheck from "../components/CreditPointCheck";

const Eligibility = () => {
  const { info: studentInfo } = useSelector((state) => state.auth);

  return (
    <>
      <ApplicationHeader studentInfo={studentInfo} />
      <WamCheck studentId={studentInfo?.id} />
      <CreditPointCheck studentId={studentInfo?.id} />
    </>
  );
};

export default Eligibility;
