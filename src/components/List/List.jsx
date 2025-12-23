import React, { useContext } from 'react'
import ItemList from '../ItemList/ItemList'
import { TasksContext } from '../../App'

export default function List() {
  const [tasks] = useContext(TasksContext);

  return (
    <div className='app-container mt-2 flex flex-col gap-y-2'>
        {
          tasks.map((item) => {
            return <ItemList texto={item.title}/>
          })
        }
    </div>
  )
}
