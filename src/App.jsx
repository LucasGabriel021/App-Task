import { useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import NovaTarefa from './components/NovaTarefa';
import TarefasPendentes from './components/TarefasPendentes';

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: 'Estudar React', concluida: false },
    { id: 2, titulo: 'Fazer compras', concluida: true },
    { id: 3, titulo: 'Ler um livro', concluida: false },
  ]);

  return (
    <>
      <Cabecalho />
      <NovaTarefa tarefas={tarefas} setTarefas={setTarefas} />
      <TarefasPendentes tarefas={tarefas} setTarefas={setTarefas}/>
    </>
  )
}

export default App
