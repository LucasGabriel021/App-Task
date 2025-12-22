import React from 'react'

export default function ItemList({ texto }) {
    return (
        <div className='w-full rounded-md flex justify-between items-center p-4 gap-x-3 bg-gray-600'>
            <div className='flex gap-x-2'>
                <input type="checkbox" className='cursor-pointer'/>
                <h4 className='text-gray-300'>{texto}</h4>
            </div>
            <button type='button' className='cursor-pointer'>
                <i className='bi bi-trash text-gray-300'></i>
            </button>
        </div>
    )
}
