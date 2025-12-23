import React, { useState, useContext, useEffect } from 'react'
import Logo from "../../assets/Logo.png"
import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './Header.module.css'
import { TasksContext } from "../../App"

export default function Header() {
    const [title, setTitle] = useState('');
    const [tasks, setTasks] = useContext(TasksContext)

    function handleCreateTask() {
        if (title === "") {
            alert('Não pode existir tarefa vazia!');
            return;
        }
        console.log("Titulo: ", title);

        const task = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }
        console.log("Task criada: ", task);
        setTasks(prevTasks => [...prevTasks, task]);
        setTitle('');
    }

    useEffect(() => {
        console.log("Lista atualizada", tasks)
    }, [tasks])

    return (
        <header className='w-full flex flex-col items-center gap-y-8 py-24'>
            <img src={Logo} className={styles.logo} />
            <div className='flex gap-x-2 app-container'>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                <Button texto="Criar" onClick={handleCreateTask} />
            </div>
        </header>
    )
}
