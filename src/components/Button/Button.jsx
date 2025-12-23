import React from 'react'

export default function Button({texto, onClick}) {
  return (
    <button className='p-4 flex gap-x-2 bg-blue-400 rounded-sm items-center cursor-pointer' onClick={onClick}>
        <span className='text-sm text-slate-50 font-bold'>{texto}</span>
        <i className='bi bi-plus-circle text-slate-50 text-sm'></i>
    </button>
  )
}
