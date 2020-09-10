import React, { useState } from "react";
import { checkWam } from "../api/eligibilityAPI.js";

const WamCheck = ({ studentId, creditPoints }) => {
  const [checkSuccess, setCheckSuccess] = useState(null);

  const handleCheck = (event) => {
    event.preventDefault();
    checkWam({ studentId })
      .then((success) => {
        setCheckSuccess(!!success);
      })
      .catch((error) => {
        console.log("There was an error fetching from backend server", error);
      });
  };

  return (
    <div>
      <h1>WAM check</h1>
      {typeof creditPoints === "number" && (
        <p>Credit points studied: {creditPoints}</p>
      )}
      <form onSubmit={handleCheck}>
        <p>
          <button disabled={!studentId}>Send Message</button>
        </p>
      </form>
      <p id="resultForWam">
        {typeof checkSuccess === "boolean" && (checkSuccess ? "Pass" : "Fail")}
      </p>
    </div>
  );
};

export default WamCheck;
