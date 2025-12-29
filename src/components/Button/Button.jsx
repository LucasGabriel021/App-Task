import React from 'react'

const variants = {
  primary: {
    bg_button: 'bg-blue-400',
    color_text: 'text-slate-50'
  },
  secondary: {
    bg_button: 'bg-slate-400',
    color_text: 'text-slate-50'
  }
}

export default function Button({texto, onClick, icone, variant = "primary"}) {
  return (
    <button className={`p-4 flex gap-x-2 rounded-sm items-center cursor-pointer ${variants[variant].bg_button}`} onClick={onClick}>
        <span className={`text-sm font-bold ${variants[variant].color_text}`}>{texto}</span>
        {icone && <i className='bi bi-plus-circle text-slate-50 text-sm'></i>}
    </button>
  )
}
