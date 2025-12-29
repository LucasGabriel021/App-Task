import React, { useContext, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { TasksContext } from '../../App'
import Modal from '../Modal/Modal';

export default function List({ isModal, setModal }) {
  const [tasks, setTasks] = useContext(TasksContext);
  const [atividadeSelecionada, setAtividadeSelecionada] = useState(null);

  function handleTaskRemove(task) {
    console.log("Task", task.title);

    const index = tasks.findIndex((item) => item.id === task.id);
    tasks.splice(index, 1);
    setTasks([...tasks]);
    setAtividadeSelecionada(null);
  }

  return (
    <>
      <div className='app-container mt-2 flex flex-col gap-y-2'>
        {
          tasks.map((item) => {
            return <ItemList key={item.id} texto={item.title} onClick={() => setAtividadeSelecionada(item)} />
          })
        }
      </div>

      {atividadeSelecionada && (
        <Modal
          onConfirm={() => handleTaskRemove(atividadeSelecionada)}
          onCancel={() => setAtividadeSelecionada(null)}
        />
      )}
    </>
  )
}
