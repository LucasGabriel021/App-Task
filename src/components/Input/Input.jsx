import React from 'react'

export default function Input({value, onChange}) {
  return (
    <input type='text' 
      placeholder='Adicione uma nova tarefa' 
      className='p-4 bg-gray-600 rounded-sm text-slate-50 w-full' 
      value={value} 
      onChange={onChange}
    />
  )
}
