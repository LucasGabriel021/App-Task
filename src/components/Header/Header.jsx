import React from 'react'
import Logo from "../../assets/Logo.png"
import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className='w-full flex flex-col items-center gap-y-4 py-24'>
            <img src={Logo} className={styles.logo}/>
            <div className='flex gap-x-2 app-container'>
                <Input />
                <Button texto="Criar" />
            </div>
        </header>
    )
}
