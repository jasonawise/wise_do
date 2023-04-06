import React from 'react';
import { Task } from '../types';
import { TaskContext } from '../TaskContext';

export default function useTask() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { listOfTasks, setListOfTasks } = React.useContext(TaskContext);

  function addTask(_task: Task) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
    setListOfTasks([...listOfTasks, _task]);
  }

  return [addTask, listOfTasks] as const;
}
