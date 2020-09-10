import React from "react";

const wamLimit = 70;
const creditPointLimit = 50;

const ApplicationHeader = ({ studentInfo }) => {
  return (
    <div>
      {studentInfo ? (
        <>
          <h3>
            Checking eligibility for: {studentInfo.given_name}{" "}
            {studentInfo.family_name} ({studentInfo.id})
          </h3>
          <p>WAM: {studentInfo.WAM}</p>
          <p>Credit Points: {studentInfo.credit_points}</p>
        </>
      ) : (
        <h3>Log in to check your eligibility</h3>
      )}
      <p id="wamLimit">Wam limit is: {wamLimit}</p>
      <p>Credit point limit is: {creditPointLimit}</p>
    </div>
  );
};

// export class ApplicationHeader extends Component {
//   static contextType = AppContext;
//
//   wamLimit = 70;
//   creditPointLimit = 50;
//
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <p id="wamLimit">Wam limit is: {this.wamLimit}</p>
//         <p>Credit point limit is: {this.creditPointLimit}</p>
//       </div>
//     );
//   }
// }

export default ApplicationHeader;
