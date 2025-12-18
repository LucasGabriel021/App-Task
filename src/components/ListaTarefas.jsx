import React from 'react'

export default function ListaTarefas (props) {

    function concluirTarefa(tarefa) {
        const index = props.tarefas.findIndex((item) => item.id === tarefa.id);
        props.tarefas[index].completa = true;
        props.setTarefas([...props.tarefas])
    }

  return (
    <div className="lista-tarefas">
      <h2>Tarefas Pendentes:</h2>
      {
        props.tarefas
        .filter(item => !item.completa)
        .map((item) => (
            <div key={item.id} className="tarefa">
                <span>{item.titulo}</span>
                <button type="button" onClick={() => concluirTarefa(item)}>
                    Concluir
                </button>
            </div>
        ))
      }
    </div>
  )
}
