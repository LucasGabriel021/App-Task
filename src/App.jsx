import { useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import NovaTarefa from './components/NovaTarefa';
import ListaTarefas from './components/ListaTarefas';

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
      <ListaTarefas titulo="Tarefas Pendentes:" status="pendentes" tarefas={tarefas} setTarefas={setTarefas}/>
      <ListaTarefas titulo="Tarefas Concluídas:" status="concluida" tarefas={tarefas} setTarefas={setTarefas}/>
    </>
  )
}

export default App
