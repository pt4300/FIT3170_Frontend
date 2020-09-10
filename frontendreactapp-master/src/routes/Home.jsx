import React, { useEffect } from "react";
import { fetchStudentList } from "../api/studentAPI";

const Home = () => {
  useEffect(() => {
    fetchStudentList();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Student Name</th>
          <td id="studentName" />
        </tr>
        <tr>
          <th>Student Id</th>
          <td id="studentId" />
        </tr>
      </tbody>
    </table>
  );
};

export default Home;
