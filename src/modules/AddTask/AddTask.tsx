import React from 'react';
import { Task } from '../../types';
import useTask from '../../hooks/useTask';
import generateUUID from '../../ultils/generateUUID';

export default function AddTask() {
  const [task, setTask] = React.useState<Task>({
    id: '',
    name: '',
    completed: false,
  });

  const [addTask] = useTask();

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTask({ ...task, name: event.target.value, id: generateUUID() });
  }
  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (task.name === '') return;
    // TODO handle error if empty
    addTask(task);
    setTask({ name: '', id: ``, completed: false });
  }

  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={handleAddTask} className="w-fit">
        <input
          type="text"
          placeholder="Task Name"
          onChange={handleOnChange}
          value={task.name}
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-48"
        />
        <button
          type="submit"
          className="rounded-full bg-green-400 py-2 px-4 ml-2"
        >
          +
        </button>
      </form>
    </div>
  );
}
