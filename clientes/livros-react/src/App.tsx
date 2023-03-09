import React from 'react';
import logo from './logo.svg';
import './App.css';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import * as ReactDOM from "react-dom";
import Menu from './menu';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LivroLista />,
  },
  {
    path: "/dados",
    element: <LivroDados />,
  }
]);



function App() {

  return (
    <div className="App">

    <Menu />

    <RouterProvider router={router} />

    </div>
  );
}

export default App;
