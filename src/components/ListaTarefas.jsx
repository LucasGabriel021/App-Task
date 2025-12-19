import React from 'react'

export default function ListaTarefas({ titulo, status, tarefas, setTarefas }) {
    function concluirTarefa(tarefa) {
        const index = tarefas.findIndex((item) => item.id === tarefa.id);
        tarefas[index].concluida = true;
        setTarefas([...tarefas])
    }

    const tarefasFiltradas = tarefas.filter((item) => {
        return status === "pendente" ? item.concluida : !item.concluida
    });
    console.log("Tarefas: ", tarefas);
    console.log("Filtro: ", tarefasFiltradas);

    return (
        <div className="lista-tarefas">
            <h2>{titulo}</h2>
            {
                tarefasFiltradas.map((item) => (
                    <div key={item.id} className="tarefa">
                        <span>{item.titulo}</span>

                        {status === "pendente" && (
                            <button type="button" onClick={() => concluirTarefa(item)}>
                                Concluir
                            </button>
                        )}
                    </div>
                ))
            }
        </div>
    )
}
