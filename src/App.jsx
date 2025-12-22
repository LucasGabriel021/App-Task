import { useState } from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import SectionTask from './components/SectionTask/SectionTask';

function App() {
  return (
    <div className="app">
      <Header/>  
      <SectionTask/>
    </div>
  )
}

export default App
