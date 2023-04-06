import React from 'react';
import { TaskContext } from '../../TaskContext';
import { Task } from '../../types';

export default function ListOfTasks() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { listOfTasks } = React.useContext(TaskContext);

  return (
    <div>
      <h1>List of tasks</h1>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access */}
      {listOfTasks?.map((task: Task) => (
        <ul key={task.id}>
          <li>{task.name}</li>
        </ul>
      ))}
    </div>
  );
}
