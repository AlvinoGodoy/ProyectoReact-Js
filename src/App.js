import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Inicio from './Paginas/Inicio';
import Productos from './Paginas/Productos';
import Destacados from './Paginas/Destacados';
import Contacto from './Paginas/Contacto';
import Contador from './Componentes/Contador';
import ItemListContainer from './Componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ItemListContainer greeting='Bienvenidos a mi Proyecto' />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/destacados" element={<Destacados />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <Contador />
    </div>
  );
}

export default App;


