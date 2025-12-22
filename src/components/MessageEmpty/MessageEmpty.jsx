import React from 'react'

export default function MessageEmpty() {
  return (
    <div className='flex flex-col items-center gap-y-2 mt-8'>
        <i className='bi bi-file-earmark-text text-gray-300 text-5xl text-center'></i>
        <div className='flex flex-col'>
            <h4 className='font-bold text-md text-center text-gray-300'>Você ainda não tem tarefas cadastradas</h4>
            <h4 className='text-md text-center text-gray-300'>Crie tarefas e organize seus itens a fazer</h4>
        </div>
    </div>
  )
}
