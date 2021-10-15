import React from 'react'
import './App.css';
import { Comentarios } from './components/Comentarios';
import { Saludo } from './components/Saludo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nosotros } from './components/Nosotros';
import { Contacto } from './Contacto';
import { Principal } from './Principal';
import { Usuarios } from './components/Usuarios';


function App() {

  return (
    <div className="container mt-5">
      <h1>Router</h1>
      <hr />
      <Router>

        <h3>Navegacion</h3>

        <div className="btn-group mt-3">
          <Link to="/"
            className="btn btn-outline-success"
          >Inicio</Link>
          <Link to="/nosotros"
            className="btn btn-outline-info"
          >Nosotros</Link>
          <Link to="/contacto"
            className="btn btn-outline-warning"
          >Contacto</Link>
        </div>

        <hr />
        <Switch>

          <Route path="/" exact>
            <Principal />
          </Route>

          <Route path="/contacto">
            <Contacto />
          </Route>

          <Route path="/nosotros/:id">
            <Usuarios />
          </Route>

          <Route path="/nosotros">
            <Nosotros />
          </Route>




        </Switch>

      </Router>
    </div>
  );
}

export default App;
