import React from 'react'

export default function TarefasPendentes({ tarefas, setTarefas }) {

    function concluirTarefa(tarefa) {
        const index = tarefas.findIndex((item) => item.id === tarefa.id);
        tarefas[index].completa = true;
        setTarefas([...tarefas])
    }

    return (
        <div className="lista-tarefas">
            <h2>Tarefas Pendentes:</h2>
            {
                tarefas
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
