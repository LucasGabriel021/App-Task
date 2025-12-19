import React, { useState } from 'react'
import styles from "./NovaTarefa.module.css"

export default function NovaTarefa({tarefas, setTarefas}) {
  const [titulo, setTitulo] = useState('');

    function novaTarefa() {
      console.log("Antes: ", tarefas);
      if(!titulo.trim()) return;

      const novoId = tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1;

      const novaTarefa = {
        id: novoId,
        titulo, 
        concluida: false
      }

      setTarefas([...tarefas, novaTarefa]);
      console.log("Depois: ", tarefas);
      setTitulo("");
    }

  return (
    <div className="nova-tarefa">
        <input type="text" className={styles.inputText} value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
        <button type="button" onClick={novaTarefa}>
            Nova Tarefa
        </button>
    </div>
  )
}
