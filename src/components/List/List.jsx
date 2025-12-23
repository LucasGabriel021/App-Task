import React, { useContext } from 'react'
import ItemList from '../ItemList/ItemList'
import { TasksContext } from '../../App'

export default function List() {
  const [tasks, setTasks] = useContext(TasksContext);

  function handleTaskRemove(task) {
    console.log("Task", task.title);
    const index = tasks.findIndex((item) => item.id === task.id);
    tasks.splice(index, 1)
    setTasks([...tasks]);
  }

  return (
    <div className='app-container mt-2 flex flex-col gap-y-2'>
      {
        tasks.map((item) => {
          return <ItemList key={item.id} texto={item.title} onClick={() => handleTaskRemove(item)} />
        })
      }
    </div>
  )
}
