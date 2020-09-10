import React, { useEffect, useState } from "react";
import Todos from "../components/Todos";
import { fetchActivityList } from "../api/activityAPI";

const initTodos = [
  {
    id: 1,
    title: "first interview",
    completed: false,
  },
  {
    id: 2,
    title: "second interview",
    completed: false,
  },
  {
    id: 3,
    title: "final interview",
    completed: false,
  },
];

const Activities = () => {
  const [todos, setTodos] = useState(initTodos);

  useEffect(() => {
    fetchActivityList();
  }, []);

  const markComplete = () => {
    console.log("Mark complete in Activities.jsx");
  };

  return (
    <>
      TODO: display activity lists
      <div className="ActivityTag">
        <Todos todos={todos} markComplete={markComplete} />
      </div>
    </>
  );
};

export default Activities;
