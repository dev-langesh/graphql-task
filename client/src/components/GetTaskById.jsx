import React, { useState } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";

const GET_TASK = gql`
  query getTask($task_id: String) {
    task(id: $task_id) {
      task_name
      completed
    }
  }
`;

export default function GetTaskById() {
  const [taskId, setTaskId] = useState("");

  const [getTask, { data, loading, error, networkStatus, refetch }] =
    useLazyQuery(GET_TASK, {
      // variables: {
      //   task_id: "63e326beb1e4f3e9f98f6017",
      // },
      pollInterval: 10000,
      notifyOnNetworkStatusChange: true,
    });

  function handleChange(e) {
    setTaskId(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    getTask({
      variables: { task_id: taskId },
    });
  }

  if (loading) return <h1>LOading</h1>;

  console.log(data);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="taskId"
        value={taskId}
        onChange={handleChange}
        type="text"
        placeholder="Task ID"
      />

      <button type="submit">submit</button>
      {/* {data.task.task_name} */}

      <h1>{data && data.task.task_name}</h1>
    </form>
  );
}
