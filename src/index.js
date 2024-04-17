import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import UserOptions from '../src/Componentes/UserOptions';

// Crear el router con la configuración correcta de tus rutas
const router = createBrowserRouter([
  {
    path: "/", // Esta es la raíz de tu aplicación y mostrará todo tu componente App
    element: <App />,
  },
  {
    path: "/UserOptions", // Esta es una ruta a nivel de raíz y solo mostrará UserOptions
    element: <UserOptions />, // Aquí estaba faltando el elemento para renderizar
    // No es necesario children aquí, ya que no estás definiendo rutas anidadas
  },
  // Puedes añadir más rutas aquí si es necesario
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
