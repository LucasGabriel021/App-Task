import React from 'react'
import Button from '../Button/Button'

export default function Modal({onConfirm, onCancel}) {
    return (
        /**
         * A div pai coloca uma opacidade no fundo
         */
        <div className='w-screen h-screen absolute top-0 left-0 bg-black/40 flex justify-center items-center'>
            <div className='bg-gray-600 p-8 w-sm rounded-2xl'>
                <h2 className='font-bold text-center text-xl text-gray-300'>Tem certeza de que deseja excluir esta tarefa?</h2>
                <div className='w-full flex justify-center gap-x-2 mt-4'>
                    <Button texto="Excluir" variant='primary' onClick={onConfirm}/>
                    <Button texto="Cancelar" variant='secondary' onClick={onCancel}/>
                </div>
            </div>
        </div>
    )
}
