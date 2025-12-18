import React from 'react'

export default function NovaTarefa(props) {

    function novaTarefa() {
        const input = document.querySelector("div.nova-tarefa input");
        if(input.value === "") return;
        const id = props.tarefas[props.tarefas.length - 1].id + 1;
        const novaTarefa = { id, titulo: input.value, completa: false};
        props.setTarefas([...props.tarefas, novaTarefa]);
    }

  return (
    <div className="nova-tarefa">
        <input type="text"/>
        <button type="button" onClick={novaTarefa}>
            Nova Tarefa
        </button>
    </div>
  )
}
