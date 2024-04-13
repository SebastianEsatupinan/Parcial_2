import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import UserOptions from '../src/Componentes/UserOptions';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "opcionesUsuario", element: <UserOptions /> },
        // Define otras rutas y subrutas aquí
      ],
    },
    // Puedes definir rutas adicionales fuera del ámbito de <App />, si es necesario
  ]);
  
  // Asegúrate de utilizar la sintaxis de React 18 para renderizar la aplicación
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);