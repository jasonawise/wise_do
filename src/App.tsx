import React from 'react';
import { Layout } from './components/layout';
import { AddTask } from './modules/AddTask';
import { Task } from './types';
import { TaskContext } from './TaskContext';
import { ListOfTasks } from './modules/ListOfTasks';

function App() {
  const [listOfTasks, setListOfTasks] = React.useState<Task[]>([]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TaskContext.Provider value={{ listOfTasks, setListOfTasks }}>
      <div className="App">
        <Layout>
          <h2 className="text-5xl">Layout</h2>
          <AddTask />
          <ListOfTasks />
        </Layout>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
