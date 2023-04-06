import React, { useContext } from 'react';
import { Task } from '../../types';
import useTask from '../../hooks/useTask';
import generateUUID from '../../ultils/generateUUID';
import { TaskContext } from '../../TaskContext';

export default function AddTask() {
  const [task, setTask] = React.useState<Task>({
    id: '',
    name: '',
    completed: false,
  });

  const [addTask] = useTask();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { listOfTasks } = useContext(TaskContext);
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTask({ ...task, name: event.target.value, id: generateUUID() });
  }
  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (task.name === '') return;
    // TODO handle error if empty
    addTask(task);
  }

  console.log(listOfTasks);

  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={handleAddTask}>
        <div>
          <label htmlFor="taskName" className="mr-1">
            Task Name
          </label>
          <input
            type="text"
            placeholder="Task Name"
            onChange={handleOnChange}
            className="border border-black py-1 px-2"
          />
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
}
