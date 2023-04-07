import React from 'react';
import { Layout } from './components/layout';
import { AddTask } from './modules/AddTask';
import { Task } from './types';
import { TaskContext } from './TaskContext';
import { ListOfTasks } from './modules/ListOfTasks';
import { Modal } from './components/modal';

function App() {
  const [listOfTasks, setListOfTasks] = React.useState<Task[]>([]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TaskContext.Provider value={{ listOfTasks, setListOfTasks }}>
      <div className="App">
        <Layout>
          <AddTask />
          <ListOfTasks />
          <Modal isOpen={false}>
            <AddTask />
          </Modal>
        </Layout>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
