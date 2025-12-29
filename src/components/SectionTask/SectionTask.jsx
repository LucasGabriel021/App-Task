import React, { useContext, useState } from 'react'
import MessageEmpty from '../MessageEmpty/MessageEmpty'
import List from '../List/List'
import { TasksContext } from '../../App'

export default function SectionTask() {
    const [ tasks ] = useContext(TasksContext);

    return (
        <section className='flex flex-col items-center'>
            <div className='app-container flex justify-between'>
                <div className='flex gap-x-2 items-center'>
                    <h4 className='text-blue-400 font-bold text-sm'>Tarefas criadas</h4>
                    <span className='bg-gray-600 rounded-lg px-2 py-1'>
                        <h4 className='text-slate-50 font-bold text-sm'>{tasks.length > 0 ? tasks.length : 0}</h4>
                    </span>
                </div>
                <div className='flex gap-x-2 items-center'>
                    <h4 className='text-blue-400 font-bold text-sm'>Concluídas</h4>
                    <span className='bg-gray-600 rounded-lg px-2 py-1'>
                        <h4 className='text-slate-50 font-bold text-sm'>0</h4>
                    </span>
                </div>
            </div>
            {tasks.length != 0 ? <List/> : <MessageEmpty />}   
        </section>
    )
}
