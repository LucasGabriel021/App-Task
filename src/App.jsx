import { useState } from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import SectionTask from './components/SectionTask/SectionTask';

import { createContext } from 'react';
export const TasksContext = createContext(null);

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <TasksContext.Provider value={[tasks, setTasks]}>
        <Header />
        <SectionTask />
      </TasksContext.Provider>
    </div>
  )
}

export default App
